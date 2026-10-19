import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import type { ServiceId } from "@/lib/catalog";

/**
 * Mapa de rutas por idioma. Los slugs se traducen para SEO:
 * /es/servicios/... · /en/services/... · /nl/diensten/... · /de/leistungen/...
 */
export const ROUTE_SEGMENTS = {
  services: { es: "servicios", en: "services", nl: "diensten", de: "leistungen" },
  business: {
    es: "para-empresas",
    en: "for-business",
    nl: "voor-bedrijven",
    de: "fuer-unternehmen",
  },
  remote: {
    es: "asistencia-remota",
    en: "remote-support",
    nl: "hulp-op-afstand",
    de: "fernhilfe",
  },
  legal: {
    es: "legal",
    en: "legal",
    nl: "juridisch",
    de: "rechtliches",
  },
} satisfies Record<string, Record<Locale, string>>;

export const SERVICE_SLUGS = {
  soporte: { es: "soporte-informatico", en: "computer-support", nl: "computerhulp", de: "computer-hilfe" },
  redes: { es: "redes-y-wifi", en: "networks-wifi", nl: "netwerk-en-wifi", de: "netzwerk-wlan" },
  tv: { es: "tv-internacional", en: "international-tv", nl: "internationale-tv", de: "internationales-tv" },
  smart: { es: "smart-home", en: "smart-home", nl: "smart-home", de: "smart-home" },
  cctv: { es: "camaras-seguridad", en: "cctv-security", nl: "cameras-beveiliging", de: "kameras-sicherheit" },
  solar: { es: "energia-solar", en: "solar-energy", nl: "zonne-energie", de: "solar-energie" },
} satisfies Record<ServiceId, Record<Locale, string>>;

/** Documentos legales (slug localizado por idioma). */
export const LEGAL_DOCS = ["aviso", "privacidad", "cookies"] as const;
export type LegalDoc = (typeof LEGAL_DOCS)[number];

export const LEGAL_SLUGS = {
  aviso: { es: "aviso-legal", en: "legal-notice", nl: "juridische-kennisgeving", de: "impressum" },
  privacidad: { es: "privacidad", en: "privacy", nl: "privacy", de: "datenschutz" },
  cookies: { es: "cookies", en: "cookies", nl: "cookies", de: "cookies" },
} satisfies Record<LegalDoc, Record<Locale, string>>;

/** Secciones de página completa (hub, empresas, remoto, legal) bajo /[lang]. */
export const SECTION_KEYS = ["services", "business", "remote", "legal"] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

/** Clave de sección cuyo segmento coincide con el de la URL, o null. */
export function sectionFromSegment(locale: Locale, segment: string): SectionKey | null {
  return SECTION_KEYS.find((key) => ROUTE_SEGMENTS[key][locale] === segment) ?? null;
}

export type RouteKey = "home" | "services" | "service" | "business" | "remote" | "legal" | "legalDoc";

/** Ruta interna de una página en un idioma concreto. */
export function routeHref(locale: Locale, key: RouteKey, id?: ServiceId | LegalDoc): string {
  switch (key) {
    case "home":
      return `/${locale}`;
    case "services":
      return `/${locale}/${ROUTE_SEGMENTS.services[locale]}`;
    case "service":
      if (!id || !(id in SERVICE_SLUGS)) throw new Error("routeHref('service') necesita un ServiceId");
      return `/${locale}/${ROUTE_SEGMENTS.services[locale]}/${SERVICE_SLUGS[id as ServiceId][locale]}`;
    case "business":
      return `/${locale}/${ROUTE_SEGMENTS.business[locale]}`;
    case "remote":
      return `/${locale}/${ROUTE_SEGMENTS.remote[locale]}`;
    case "legal":
      return `/${locale}/${ROUTE_SEGMENTS.legal[locale]}`;
    case "legalDoc":
      if (!id || !(id in LEGAL_SLUGS)) throw new Error("routeHref('legalDoc') necesita un LegalDoc");
      return `/${locale}/${ROUTE_SEGMENTS.legal[locale]}/${LEGAL_SLUGS[id as LegalDoc][locale]}`;
  }
}

/** Devuelve el ServiceId cuyo slug coincide con el de la URL, o null. */
export function serviceIdFromSlug(locale: Locale, slug: string): ServiceId | null {
  const ids = Object.keys(SERVICE_SLUGS) as ServiceId[];
  return ids.find((id) => SERVICE_SLUGS[id][locale] === slug) ?? null;
}

/** Devuelve el documento legal cuyo slug coincide con el de la URL, o null. */
export function legalDocFromSlug(locale: Locale, slug: string): LegalDoc | null {
  return LEGAL_DOCS.find((doc) => LEGAL_SLUGS[doc][locale] === slug) ?? null;
}

/** Documento legal cuyo slug coincide, en cualquiera de los idiomas. */
export function legalDocFromAnySlug(slug: string): LegalDoc | null {
  return LEGAL_DOCS.find((doc) => LOCALES.some((l) => LEGAL_SLUGS[doc][l] === slug)) ?? null;
}

/** Sección a la que pertenece un segmento, en cualquiera de los idiomas. */
export function sectionFromAnySegment(segment: string): SectionKey | null {
  return (
    SECTION_KEYS.find((key) => LOCALES.some((l) => ROUTE_SEGMENTS[key][l] === segment)) ?? null
  );
}

/** Servicio cuyo slug coincide, en cualquiera de los idiomas. */
export function serviceIdFromAnySlug(slug: string): ServiceId | null {
  const ids = Object.keys(SERVICE_SLUGS) as ServiceId[];
  return ids.find((id) => LOCALES.some((l) => SERVICE_SLUGS[id][l] === slug)) ?? null;
}

/** Canonical + hreflang de la misma página en los 4 idiomas. */
export function buildAlternates(locale: Locale, key: RouteKey, id?: ServiceId | LegalDoc) {
  const paths = Object.fromEntries(
    LOCALES.map((l) => [l, routeHref(l, key, id)])
  ) as Record<Locale, string>;
  return {
    canonical: paths[locale],
    languages: {
      es: paths.es,
      en: paths.en,
      nl: paths.nl,
      de: paths.de,
      "x-default": paths[DEFAULT_LOCALE],
    },
  };
}
