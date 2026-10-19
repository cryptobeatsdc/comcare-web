import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { routeHref } from "@/lib/routes";

/**
 * Dominio del sitio. En local (y hasta tener el dominio real) usa localhost;
 * en producción basta con definir NEXT_PUBLIC_SITE_URL (ej. https://tudominio.com).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100"
).replace(/\/$/, "");

/** URL absoluta a partir de una ruta interna. */
export function abs(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** og:locale por idioma (formato idioma_TERRITORIO). */
export const OG_LOCALE: Record<Locale, string> = {
  es: "es_ES",
  en: "en_GB",
  nl: "nl_NL",
  de: "de_DE",
};

/** Ficha de negocio local para Google (solo datos reales y verificables). */
export function localBusinessJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: dict.nav.brand,
    description: dict.meta.description,
    url: abs(routeHref(locale, "home")),
    image: abs("/img/hero.jpg"),
    telephone: "+34625322624",
    foundingDate: "1994",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer les Capelletes 17",
      postalCode: "03726",
      addressLocality: "Benitachell",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    // Coordenadas reales de la dirección (OpenStreetMap)
    geo: { "@type": "GeoCoordinates", latitude: 38.7300582, longitude: 0.1447267 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    areaServed: ["Jávea", "Moraira", "Calpe", "Dénia"].map((name) => ({
      "@type": "City",
      name,
    })),
    availableLanguage: ["es", "en", "nl", "de"],
  };
}

/** Preguntas frecuentes (rich results de Google). */
export function faqJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Migas de pan para las subpáginas. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
