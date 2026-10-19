import { promises as fs } from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

export type LeadRecord = {
  id: string;
  createdAt: string;
  ip: string;
  organizationId: string;
  nombre: string;
  telefono: string;
  idioma: string;
  servicio: string;
  villa: string[];
  mensaje: string;
  privacidad: boolean;
};

// Neon/Vercel inyecta DATABASE_URL; se aceptan también los nombres antiguos
// de la integración de Vercel Postgres para no depender de uno solo.
const connectionString =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.POSTGRES_PRISMA_URL;

const sql = connectionString ? neon(connectionString) : null;

let schemaReady: Promise<void> | null = null;

async function ensureSchema(): Promise<void> {
  if (!sql) return;

  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL,
      ip TEXT NOT NULL,
      organization_id TEXT NOT NULL,
      nombre TEXT NOT NULL,
      telefono TEXT NOT NULL,
      idioma TEXT NOT NULL,
      servicio TEXT NOT NULL,
      villa JSONB NOT NULL DEFAULT '[]'::jsonb,
      mensaje TEXT NOT NULL,
      privacidad BOOLEAN NOT NULL DEFAULT TRUE
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS leads_created_at_idx
    ON leads (created_at DESC)
  `;
}

function ready(): Promise<void> {
  if (!schemaReady) {
    schemaReady = ensureSchema().catch((error) => {
      // Si falla la creación (red, permisos...), permitir reintentar en la
      // siguiente petición en lugar de cachear el error para siempre.
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}

async function saveToPostgres(record: LeadRecord): Promise<void> {
  await ready();

  await sql!`
    INSERT INTO leads (
      id, created_at, ip, organization_id, nombre, telefono,
      idioma, servicio, villa, mensaje, privacidad
    )
    VALUES (
      ${record.id}, ${record.createdAt}, ${record.ip}, ${record.organizationId},
      ${record.nombre}, ${record.telefono}, ${record.idioma}, ${record.servicio},
      ${JSON.stringify(record.villa)}::jsonb, ${record.mensaje}, ${record.privacidad}
    )
  `;
}

async function saveToFile(record: LeadRecord): Promise<void> {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });

  const file = path.join(dir, "leads.json");
  let leads: unknown[] = [];
  try {
    const raw = await fs.readFile(file, "utf8");
    leads = JSON.parse(raw) as unknown[];
  } catch {
    leads = [];
  }

  leads.push(record);
  await fs.writeFile(file, JSON.stringify(leads, null, 2), "utf8");
}

export async function saveLead(record: LeadRecord): Promise<void> {
  if (sql) {
    await saveToPostgres(record);
    return;
  }

  // En Vercel no hay sistema de archivos persistente: sin base de datos el
  // lead se perdería, así que es mejor fallar de forma explícita.
  if (process.env.VERCEL) {
    throw new Error("DATABASE_URL no configurada en Vercel");
  }

  // Desarrollo local sin Postgres: se mantiene el JSON de siempre.
  await saveToFile(record);
}
