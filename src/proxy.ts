import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  fromAcceptLanguage,
  isLocale,
  LANG_COOKIE,
  type Locale,
} from "@/lib/i18n/config";
import {
  LEGAL_SLUGS,
  legalDocFromAnySlug,
  ROUTE_SEGMENTS,
  sectionFromAnySegment,
  SERVICE_SLUGS,
  serviceIdFromAnySlug,
} from "@/lib/routes";

/**
 * Proxy de idioma:
 * 1. Rutas sin prefijo de idioma → redirige al locale detectado (/es, /en, /nl, /de):
 *    cookie `lang` → Accept-Language del navegador → español por defecto.
 * 2. Segmentos o slugs conocidos escritos en otro idioma → redirige a la URL
 *    localizada correcta (/nl/services → /nl/diensten, /es/services/solar-energy →
 *    /es/servicios/energia-solar). Los slugs desconocidos siguen dando 404.
 *
 * Los archivos estáticos y /api quedan fuera vía `config.matcher`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const hasLocalePrefix = isLocale(first);

  const cookieLocale = request.cookies.get(LANG_COOKIE)?.value;
  const locale: Locale = isLocale(first)
    ? first
    : ((isLocale(cookieLocale) ? cookieLocale : null) ??
        fromAcceptLanguage(request.headers.get("accept-language")) ??
        DEFAULT_LOCALE);

  const rest = hasLocalePrefix ? segments.slice(1) : segments;

  if (rest.length > 0) {
    const section = sectionFromAnySegment(rest[0]);
    if (section) {
      const targetSection = ROUTE_SEGMENTS[section][locale];
      const rawItem = rest[1];
      let targetItem = rawItem;
      if (section === "services" && rawItem) {
        const serviceId = serviceIdFromAnySlug(rawItem);
        if (serviceId) targetItem = SERVICE_SLUGS[serviceId][locale];
      }
      if (section === "legal" && rawItem) {
        const doc = legalDocFromAnySlug(rawItem);
        if (doc) targetItem = LEGAL_SLUGS[doc][locale];
      }
      const changed = rest[0] !== targetSection || targetItem !== rawItem;
      if (!hasLocalePrefix || changed) {
        const url = request.nextUrl.clone();
        const tail = [targetSection, ...(targetItem ? [targetItem] : []), ...rest.slice(2)];
        url.pathname = `/${locale}/${tail.join("/")}`;
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }
  }

  if (hasLocalePrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|img/|video/|.*\\..*).*)",
};
