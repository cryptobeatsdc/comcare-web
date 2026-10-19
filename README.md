# ComCare — Web oficial

Landing de alta conversión para **ComCare**, servicios tecnológicos en Benitachell (Costa Blanca): soporte informático, redes/WiFi, TV internacional por satélite, smart home, CCTV y energía solar.

> Fuente del catálogo de servicios: comcare.es (solo catálogo — el diseño es propio).
> Contexto del proyecto y reglas de trabajo: ver `AGENTS.md`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19
- TypeScript 7 nativo (`tsc`) + API TS 6 para herramientas (patrón oficial side-by-side)
- Tailwind CSS 4 (CSS-first: tokens en `src/app/globals.css` con `@theme`)
- framer-motion 14, lucide-react, @radix-ui/react-accordion, zod 4, sharp
- ESLint 10 (flat config en `eslint.config.mjs`)

## Comandos

```bash
npm run dev        # desarrollo
npm run build      # build de producción (Turbopack)
npm run start -- --port 3100   # servir build (puerto usado en este proyecto)
npm run typecheck  # tsc --noEmit (TS7 nativo)
npm run lint       # eslint .
```

> En esta máquina (PowerShell): anteponer `$env:npm_config_allow_scripts=$null;` a los `npm install`.
> Nunca ejecutar `npm run build` con un servidor activo sobre la misma carpeta `.next`.

## Estructura

```
src/proxy.ts        redirección / → /es|/en|/nl|/de (cookie `lang` → navegador → ES por defecto)
src/app/[lang]/     layout raíz (html lang, fuentes, metadata + hreflang), page (compone secciones), not-found
src/app/[lang]/[section]        hub de soluciones, para-empresas, asistencia-remota e información legal (16 páginas, 4 idiomas)
src/app/[lang]/[section]/[item] detalle de cada solución + documentos legales (36 páginas; slug traducido por idioma)
src/app/global-not-found.tsx  404 global multilingüe (rutas sin coincidencia)
src/app/api/leads/  endpoint POST de leads (zod + rate-limit + persistencia en data/leads.json)
src/components/     una sección por archivo (Hero, SolutionsSlider, LeadForm, ...)
src/lib/i18n/       diccionarios ES/EN/NL/DE (todo el copy) + config de idiomas
src/lib/catalog.ts  estructura de los 6 servicios (el copy está en los diccionarios)
src/lib/company.ts  datos de la empresa en una sola fuente (⚠️ CIF y correo pendientes)
src/lib/consent.ts  consentimiento del mapa (localStorage `map-consent`, patrón clic-para-cargar)
src/lib/routes.ts   mapa de rutas localizadas (slugs por idioma + routeHref + hreflang por página)
src/lib/seo.ts      dominio del sitio (`NEXT_PUBLIC_SITE_URL`) + JSON-LD + Open Graph
src/app/sitemap.ts  sitemap.xml (40 URLs con hreflang mientras las legales estén pendientes; 56 al completarlas) · src/app/robots.ts → robots.txt
public/img, video   fotos/vídeos libres de uso (sustituir por reales de ComCare)
```

## Idiomas

- Rutas `/es`, `/en`, `/nl` y `/de` (prerenderizadas). `/` redirige según cookie `lang` → idioma del navegador → español.
- Selector ES/EN/NL/DE en la barra de navegación; guarda la preferencia en una cookie (`lang`, 1 año).
- Todo el texto vive en `src/lib/i18n/` (`es.ts`, `en.ts`, `nl.ts`, `de.ts`); TypeScript obliga a mantener los cuatro diccionarios completos (`en`/`nl`/`de` tipados como `Dictionary`).
- Las subpáginas usan slugs traducidos: `/es/servicios/energia-solar` · `/en/services/solar-energy` · `/nl/diensten/zonne-energie` · `/de/leistungen/solar-energie` (mapa en `src/lib/routes.ts`).
- Si una ruta usa el segmento de otro idioma (ej. `/nl/services`), el proxy redirige (307) a la URL correcta de ese idioma (`/nl/diensten`); los slugs inexistentes devuelven 404.

## SEO

- `sitemap.xml` y `robots.txt` generados como rutas estáticas; el sitemap incluye las URLs con alternates hreflang (una por idioma y página). Mientras falten los datos del titular, las páginas legales van con `noindex` y quedan fuera del sitemap (40 URLs); al completarlos entran solas (56 URLs).
- Datos estructurados JSON-LD: LocalBusiness (dirección, coordenadas, horario y zona de cobertura reales) en la landing de cada idioma, FAQPage con las preguntas frecuentes y BreadcrumbList en las subpáginas.
- Open Graph/Twitter con imagen 2000×1333 y `og:locale` por idioma; canonical y hreflang absolutos vía `metadataBase`.
- Dominio: definir `NEXT_PUBLIC_SITE_URL` (ej. `https://tudominio.com`) en el entorno de deploy.

## Legal y privacidad

- Páginas legales en los 4 idiomas con slugs traducidos: `/es/legal` (hub) · `/es/legal/aviso-legal` · `/es/legal/privacidad` · `/es/legal/cookies` (y equivalentes en EN/NL/DE), enlazadas desde el footer; el proxy y el selector de idioma también traducen estos slugs.
- El mapa de Google usa el patrón «clic para cargar»: hasta que la persona acepta no se hace ninguna petición a Google. El consentimiento se guarda en `localStorage` (`map-consent`) y puede retirarse desde la política de cookies.
- El formulario enlaza a la política de privacidad junto a la casilla de consentimiento.
- ⚠️ Pendiente hasta tener los datos (decisión del usuario, oct 2026): razón social, CIF/NIF, correo y datos registrales en `src/lib/company.ts`. Se muestran como insignia «Por completar» en cada campo + aviso de borrador en el hub y en cada documento; al rellenarlos desaparecen solos. Antes de publicar, revisión del texto legal por un asesor.

## Pendiente (bloqueado por contenido real)

- Fotos y vídeo reales de tienda/instalaciones (hoy: Unsplash/Pexels, créditos en footer)
- Reseñas Google reales antes de publicar testimonios
- Copy final revisado por el usuario; revisión nativa de las traducciones NL/DE pendiente
- Datos del titular para las legales (razón social, CIF/NIF, correo, registro) — aplazado por el usuario hasta tenerlos; las páginas mantienen la marca de pendiente
- Dominio real: definir `NEXT_PUBLIC_SITE_URL` en el deploy (canonical/hreflang/sitemap/OG pasan a URLs absolutas automáticamente)
