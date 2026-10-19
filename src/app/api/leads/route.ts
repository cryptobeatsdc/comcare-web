import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { leadSchema } from "@/lib/leads/schema";

// Rate-limit simple en memoria (MVP, no apto para multi-instancia)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 10;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || now - cur.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  cur.count += 1;
  return cur.count > MAX_HITS;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Inténtalo en un minuto." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Petición inválida." },
      { status: 400 }
    );
  }

  if (
    typeof body === "object" &&
    body !== null &&
    !("organizationId" in body)
  ) {
    (body as Record<string, unknown>).organizationId =
      "org_comcare_benitachell";
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Revisa el formulario.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const record = {
    id: `lead_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ip,
    ...parsed.data,
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "leads.json");
    let arr: unknown[] = [];
    try {
      const raw = await fs.readFile(file, "utf8");
      arr = JSON.parse(raw) as unknown[];
    } catch {
      arr = [];
    }
    arr.push(record);
    await fs.writeFile(file, JSON.stringify(arr, null, 2), "utf8");
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo guardar. Llámanos por teléfono." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: record.id });
}
