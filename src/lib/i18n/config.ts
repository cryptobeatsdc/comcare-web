export const LOCALES = ["es", "en", "nl", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LANG_COOKIE = "lang";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * Devuelve el mejor locale soportado según el header Accept-Language,
 * o null si no hay coincidencia (se usará el locale por defecto).
 */
export function fromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((x) => x.tag.length > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0]; // "de-AT" → "de"
    if (isLocale(base)) return base;
  }
  return null;
}
