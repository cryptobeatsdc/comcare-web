import type { MetadataRoute } from "next";
import { CATALOG, type ServiceId } from "@/lib/catalog";
import { LEGAL_DATA_PENDING } from "@/lib/company";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import { LEGAL_DOCS, routeHref, SECTION_KEYS, type LegalDoc, type RouteKey } from "@/lib/routes";
import { abs } from "@/lib/seo";

const BUILD_DATE = new Date();

/** Genera las 4 entradas (una por idioma) de una página, con hreflang. */
function family(key: RouteKey, id?: ServiceId | LegalDoc): MetadataRoute.Sitemap {
  const paths = Object.fromEntries(
    LOCALES.map((locale) => [locale, routeHref(locale, key, id)])
  ) as Record<Locale, string>;
  return LOCALES.map((locale) => ({
    url: abs(paths[locale]),
    lastModified: BUILD_DATE,
    changeFrequency: key === "legal" || key === "legalDoc" ? "yearly" : "monthly",
    priority: key === "home" ? 1 : key === "service" ? 0.7 : key === "legalDoc" ? 0.3 : key === "legal" ? 0.4 : 0.8,
    alternates: {
      languages: {
        es: abs(paths.es),
        en: abs(paths.en),
        nl: abs(paths.nl),
        de: abs(paths.de),
        "x-default": abs(paths[DEFAULT_LOCALE]),
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  entries.push(...family("home"));
  for (const key of SECTION_KEYS) {
    // Las legales con datos pendientes están en noindex: fuera del sitemap.
    if (key === "legal" && LEGAL_DATA_PENDING) continue;
    entries.push(...family(key));
  }
  for (const service of CATALOG) entries.push(...family("service", service.id));
  // Igual con los documentos legales (aviso, privacidad, cookies).
  if (!LEGAL_DATA_PENDING) {
    for (const doc of LEGAL_DOCS) entries.push(...family("legalDoc", doc));
  }
  return entries;
}
