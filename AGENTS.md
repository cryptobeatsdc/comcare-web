<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory) before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — ComCare Nueva Web (landing)

## Business Context
- Company: ComCare — IT & technology services in Benitachell (Costa Blanca, Alicante, Spain), operating since 1994.
- Services (source catalog: comcare.es — use ONLY as service list, never copy its design):
  1. IT support / computers (repair, upgrades, backup, remote + on-site + in-store)
  2. Internet, networks & WiFi (fiber/4G/satellite, mesh expansion, VoIP, marine/yacht networks)
  3. International satellite TV (CanalDigitaal NL, TV Vlaanderen BE, TéléSAT FR, Freesat UK, German TV, Sound systems/Sonos)
  4. Smart Home (domotics, lights, blinds, irrigation)
  5. CCTV / security (UniFi + Foscam, remote viewing)
  6. Solar energy (off-grid & self-consumption, Victron)
- Physical store: Carrer les Capelletes 17, 03726 Benitachell. Phone (+34) 625 322 624. Mon–Fri 10:00–14:00.
- Languages: ES / EN / NL / DE (+ FR for TV customers). Coverage: Jávea · Moraira · Calpe · Dénia.
- Audiences: year-round residents, international second-home owners, small businesses / holiday rentals / boats.

## Agreed Tech Stack (updated Oct 2026 — do not change without explicit user confirmation)
- Framework: Next.js 16.4 (App Router, Turbopack build & dev) — requires Node >= 20.9
- React 19.3 (`react` / `react-dom`), `@types/react` 19
- Language: TypeScript 7.0 (native `tsc`, ~10x faster) in strict mode, PLUS the official side-by-side TS 6 API for tooling (typescript-eslint doesn't support TS 7 API yet):
  - `@typescript/native`: aliased to `npm:typescript@^7.0.2` → provides the fast `tsc` binary
  - `typescript`: aliased to `npm:@typescript/typescript6@^6.0.2` → provides the TS 6 API that eslint/typescript-eslint import (and a `tsc6` binary)
  - This alias pattern is the one recommended by Microsoft for the 6.0/7.0 transition. Do NOT "fix" it to a plain `typescript` dependency.
- Styling: Tailwind CSS 4.3, CSS-first config. NO `tailwind.config.ts` — design tokens live in `src/app/globals.css` inside `@theme` / `@theme inline` blocks
- Animation: framer-motion 14 (`framer-motion` import; `motion` package is the same library v14)
- UI: lucide-react icons, @radix-ui/react-accordion
- Validation: zod 4 (shared lead schema)
- Images: sharp installed for production image optimization
- Linting: ESLint 10 flat config (`eslint.config.mjs`). `next lint` no longer exists — run `npm run lint`
- Hosting target: Vercel (not configured yet)

## Commands & Environment Gotchas (Windows / PowerShell)
- Install deps: `$env:npm_config_allow_scripts=$null; npm install` (the user's global npm config blocks postinstall scripts without this)
- Dev: `npm run dev` — Prod check: `npm run build` then `npm run start -- --port 3100`
- Typecheck: `npm run typecheck` · Lint: `npm run lint`
- NEVER run `npm run build` while a `next start`/`next dev` server is running on the same `.next` folder (it corrupts chunks). Kill node processes bound to port 3100 first.
- Verify served pages with `Invoke-WebRequest` against `http://127.0.0.1:3100` (plain `localhost` can hang in PowerShell on this machine)
- After every change: typecheck + build + serve + HTTP verification before reporting done
- `npm audit` flags 5 high-severity advisories in DEV tooling only (`braces` → `micromatch` → `fast-glob` → `@next/eslint-plugin-next`). No production dependency is affected. Do NOT run `npm audit fix --force` (it would downgrade Next.js).
- next/image in Next 16: `priority` is deprecated — use `preload`. Prefer `fill` + `sizes` for background/cover images.

## Project Rules (mandatory)
- NEVER copy comcare.es visual design; it is only a service catalog reference.
- NEVER invent business data (reviews, customer counts, testimonials, prices). Allowed verifiable claims: founded 1994, 4+ languages, <24h response, physical store, coverage towns.
- Site copy is in Spanish, English, Dutch and German, warm and simple (audience includes +55 and international residents): short sentences, no slang, generous spacing, clean views. All copy lives in `src/lib/i18n/` (`es.ts`, `en.ts`, `nl.ts`, `de.ts`) — never hardcode text in components.
- No arrow glyphs (→ ← ↓ ↑) in buttons. Button hover style uses the rolling-label pattern (`.btn-roll` in globals.css).
- Palette tokens: marfil `#F6F4F1`, ink/navy `#191919`, solar `#D9B800`, arena `#6F6A63`, lima `#CDDC39`. Light sections on marfil, contrast sections on ink.
- Photos/videos must be free-use (Unsplash/Pexels) until real ComCare assets arrive; credits live in the footer. Mark placeholders with `TODO: replace with real content`.
- Respect `prefers-reduced-motion` (MotionConfig `reducedMotion="user"` + global CSS rules already in place).
- Consult context7 MCP before integrating or upgrading external libraries — do not trust stale model knowledge.

## Architecture (do not reorganize without confirmation)
```
src/proxy.ts          → redirects unprefixed routes to /es, /en, /nl or /de (cookie `lang` → Accept-Language → es). NOTE: Next 16 renamed middleware.ts to proxy.ts
src/app/[lang]/       → root segment: there is NO src/app/layout.tsx anymore
  layout.tsx          → <html lang>, fonts (Fraunces + Inter via next/font), per-language metadata (canonical + hreflang), generateStaticParams ["es","en","nl","de"]
  page.tsx            → server component: getDictionary + MotionConfig + I18nProvider, composes all sections
  [section]/page.tsx  → hub de soluciones + para-empresas + asistencia-remota + información legal (16 SSG, localized segments, dynamicParams=false)
  [section]/[item]/page.tsx → detalle de servicio + documentos legales (36 SSG; item = slug localizado por idioma)
  not-found.tsx       → in-[lang] 404
src/app/global-not-found.tsx → global 404 for unmatched routes (requires `experimental.globalNotFound` in next.config.mjs)
src/app/globals.css   → Tailwind 4 @theme tokens + custom utility classes
src/app/api/leads/route.ts → POST leads: zod validation, in-memory rate limit 10/min, persists to data/leads.json
src/components/       → one file per section/page (Hero, SolutionsSlider, Visit, LeadForm, PageShell, PageHero, ServicesView, BusinessView, RemoteView, ServiceDetailView, LegalView, MapEmbed, MapConsentReset, ...; I18nProvider + useI18n())
src/lib/i18n/         → config.ts (LOCALES, LANG_COOKIE, fromAcceptLanguage — genera sobre LOCALES), es.ts (copy source of truth + tipo Dictionary), en.ts / nl.ts / de.ts (typed as Dictionary), index.ts (getDictionary)
src/lib/catalog.ts    → structure of the 6 services (id + foto + ServiceCopy type); the copy lives in the dictionaries
src/lib/company.ts    → public company data in one place (name, address, phone, map query). ⚠️ PENDING (waiting on client): legalName, taxId, email, registry → legal pages render a «Por completar» badge per field + draft notice (auto-hides once filled)
src/lib/consent.ts    → map consent store (localStorage `map-consent`, useSyncExternalStore, accept/reset helpers)
src/lib/routes.ts     → localized route map: ROUTE_SEGMENTS, SERVICE_SLUGS, LEGAL_DOCS/LEGAL_SLUGS, routeHref(), sectionFromSegment(), serviceIdFromSlug(), legalDocFromSlug(), buildAlternates() (canonical + hreflang per subpage)
src/lib/seo.ts        → SITE_URL (`NEXT_PUBLIC_SITE_URL`, fallback localhost:3100), JSON-LD (LocalBusiness, FAQPage, BreadcrumbList), OG_LOCALE
src/app/sitemap.ts    → sitemap.xml estático: 40 URLs con alternates hreflang mientras las legales estén pendientes (4 idiomas × 10 páginas); al rellenar `company.ts` pasa a 56 (4 × 14)
src/app/robots.ts     → robots.txt: allow todo, disallow /api/, enlace al sitemap
src/lib/leads/schema.ts → zod lead schema (incl. villa[] selection)
public/img, public/video → free-use assets (replace with real ones later; if the hero video changes, regenerate `public/img/hero-poster.jpg` from its first frame so the poster never flashes)
data/leads.json       → persisted leads (MVP storage)
```
- i18n: copy is NEVER hardcoded in components. Adding text = adding a key in `es.ts` AND in the rest of dictionaries (`en.ts`, `nl.ts`, `de.ts` are typed as `Dictionary`; TS fails if a key is missing or extra). Interactive components read `useI18n()`; simple server components (TrustBar, Process, Statement, Faq, Footer) receive their slice via props (`t={dict.x}`).
- Routes: `/es`, `/en`, `/nl`, `/de` are prerendered (SSG); `/` redirects via proxy (307). The Navbar language switcher (rendered from `LOCALES`) stores the `lang` cookie (1 year) and preserves the current path.
- Subpages (Oct 2026): slugs are localized per language — hub `/es/servicios · /en/services · /nl/diensten · /de/leistungen`, business `/es/para-empresas · /en/for-business · /nl/voor-bedrijven · /de/fuer-unternehmen`, remote `/es/asistencia-remota · /en/remote-support · /nl/hulp-op-afstand · /de/fernhilfe`, details `/…/{service-slug}`. Map lives in `src/lib/routes.ts`; both dynamic routes use `dynamicParams = false` (invalid slug → 404). Navbar links are path-aware (anchors on `/`, prefixed on subpages). The proxy 307-redirects known segments/slugs written in another language to the localized URL (`/nl/services` → `/nl/diensten`, `/es/services/solar-energy` → `/es/servicios/energia-solar`); truly unknown slugs still 404. The language switcher rewrites section and service slugs per target locale, not just the prefix.
- SEO (Oct 2026): `src/lib/seo.ts` centraliza `SITE_URL` (`NEXT_PUBLIC_SITE_URL`, fallback `http://localhost:3100`), JSON-LD (LocalBusiness con dirección/geo/horario reales, FAQPage en la landing, BreadcrumbList en subpáginas) y `OG_LOCALE`. `metadataBase` en `[lang]/layout.tsx` convierte canonical/hreflang/OG en URLs absolutas. Con el dominio real solo hay que definir `NEXT_PUBLIC_SITE_URL` y redeploy.
- Páginas legales (Oct 2026): aviso legal, privacidad y cookies con slugs localizados (`aviso-legal`/`legal-notice`/`juridische-kennisgeving`/`impressum`, `privacidad`/`privacy`/`privacy`/`datenschutz`, `cookies` ×4) dentro de las rutas dinámicas existentes: `[section]=legal` es el hub y `[section]/[item]` el documento. El proxy y el selector de idioma traducen también estos slugs. Copy en `dict.pages.legal` (4 idiomas, mismo tono: ES tú / EN you / NL u / DE Sie), datos del titular en `src/lib/company.ts`. Enlaces en el footer y en la casilla del formulario. ⏳ PENDIENTE (decisión del usuario, oct 2026): razón social, CIF/NIF, correo y datos registrales — se muestran como insignia «Por completar» + aviso de borrador en el hub y en cada documento; además, mientras falten, las 15 páginas legales llevan `noindex, follow` y quedan fuera del sitemap. Todo se activa solo al rellenar `LEGAL_DATA_PENDING` en `company.ts`. Revisión legal por asesor pendiente antes de publicar.
- Consentimiento del mapa (Oct 2026): Google Maps en «Visítanos» usa patrón clic-para-cargar — sin peticiones a Google hasta aceptar. Estado en `localStorage` (`map-consent`) vía `src/lib/consent.ts` (useSyncExternalStore); se puede retirar desde la política de cookies (MapConsentReset). Sin banner de cookies porque no hay más cookies no exentas.
- `params` is a `Promise` in Next 16 — await it in layouts/pages.
- The villa simulator stores selection in `localStorage` under `villa-selection`, consumed by LeadForm.
- Lead endpoint contract: `organizationId: "org_comcare_benitachell"` is auto-filled server-side (reserved for future multi-organization SaaS).

## Roadmap (agreed with user, in order)
1. ✅ Landing MVP (all sections, lead form end-to-end verified)
2. ✅ Stack upgrade to Next 16 / React 19 / TS 7 / Tailwind 4 / ESLint 10 (Oct 2026)
3. ✅ Technical polish (Oct 2026): next/image migration (fill + sizes, verified optimization), dead code removed (`ServicesBento.tsx`), sharp active, README updated, `data/leads.json` git-ignored
4. ✅ Service subpages (Oct 2026): hub + 6 service details + para-empresas + asistencia-remota, localized slugs per language (SEO), per-page canonical + hreflang, internal linking (navbar, footer, slider cards, related chips), invalid slugs 404
5. ✅ i18n (Oct 2026): rutas `/es`, `/en`, `/nl` y `/de` (SSG), `proxy.ts` con detección de idioma (cookie → navegador → ES), selector 4 idiomas automático desde `LOCALES`, canonical + hreflang, 404 global multilingüe. ⏳ Pendiente: revisión nativa de las traducciones NL/DE
6. ✅ Sección «Visítanos» (Oct 2026): mapa de Google de la tienda, dirección, horario, teléfono, cómo llegar y zona de cobertura (Jávea · Moraira · Calpe · Dénia), en los 4 idiomas
7. ✅ SEO técnico (Oct 2026): sitemap.xml (40 URLs con hreflang) + robots.txt, datos estructurados JSON-LD (LocalBusiness con datos reales, FAQPage, BreadcrumbList), Open Graph/Twitter con imagen 2000×1333 y og:locale por idioma, metadataBase. Dominio real pendiente: definir `NEXT_PUBLIC_SITE_URL`
8. ✅ Páginas legales + consentimiento del mapa (Oct 2026): aviso legal, privacidad y cookies en 4 idiomas con slugs localizados, hub `/legal` y enlaces en footer/formulario; mapa de Google con carga previa aceptación y retirada del consentimiento desde la política de cookies. ⏳ Pendiente (aplazado por el usuario hasta tener los datos): razón social, CIF/NIF, correo y registro en `src/lib/company.ts` — se muestran como «Por completar» + aviso de borrador; revisión legal del texto por un asesor
9. Later phases: Postgres+Drizzle persistence, AI assistant, admin panel, multi-org SaaS

## Blocked / Waiting on User
- Real photos & video of the store and installations (replace Unsplash/Pexels placeholders)
- Real Google reviews (with town + language) before any testimonials section is published
- Final copy review by user (ES/EN) + native review of NL/DE translations
- Legal company data (registered name, tax ID/NIF, contact email, registry details) — postponed by user until available; legal pages keep visible «pending» badges + draft notice. Lawyer review still advisable before publishing.
