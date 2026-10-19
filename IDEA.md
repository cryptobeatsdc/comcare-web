# Nueva Web Servicios Tecnológicos — IDEA del Proyecto

> Origen servicios: https://comcare.es/en/ (solo como catálogo, NO como referencia visual).
> Objetivo: web moderna, limpia, profesional y enfocada a conversión.

## 1. Servicios base (catálogo)

- **Soporte informático / Ordenadores:** venta, reparación, upgrades HW/SW, limpieza, backup/recuperación, antivirus, asistencia remota + a domicilio + en tienda.
- **Internet, Redes y WiFi:** fibra/ADSL/4G/sat, diseño red hogar/negocio, ampliación WiFi Mesh, internet lento, VoIP, hosting, failover empresas.
- **Marine / Yates:** Yacht Router, red a bordo + multimedia.
- **TV Satélite Internacional:** CanalDigitaal (NL), TV Vlaanderen (BE), TéléSAT/TNTSAT (FR), Freesat (UK), TV alemana, NLZIET + LG Smart TV, SmartTV/Apple TV, cine en casa / Sonos.
- **Smart Home:** domótica, luces, riego/jardín, persianas, control remoto.
- **CCTV / Seguridad:** Ubiquiti UniFi + Foscam, videovigilancia para ver desde fuera.
- **Energía Solar:** Natural Solar / Victron, off-grid y autoconsumo para campo/villas.

Tienda física: Carrer les Capelletes 17, 03726 Benitachell (Alicante). Tel (+34) 625 322 624.
Idiomas: ES / EN / NL / DE (+ FR para TV).

## 2. Públicos

1. **Particulares / residentes** (todo el año).
2. **Internacionales / 2ª residencia** (ausencias, control remoto, llave en mano).
3. **Pequeñas empresas / alquiler vacacional / barcos** (evitar cortes, seguridad, WiFi huéspedes).

## 3. Arquitectura Web propuesta

Menú (máx 6): Servicios [dropdown] | Para Hogar | Para Negocios | TV Internacional | Energía Solar | Contacto + CTA sticky `Pedir Presupuesto` + WhatsApp.

Mapa:
```
/ /servicios/soporte-informatico/ /servicios/internet-redes-wifi/ (+/yates-barcos/) /servicios/tv-internacional-satelite/ /servicios/smart-home-seguridad/ (domótica + CCTV) /servicios/energia-solar/ /para-empresas/ (transversal: redes, servidores, firewall, mantenimiento) /sobre-nosotros/ /opiniones/ /contacto/ + /asistencia-remota/ (landing conversión rápida) /blog-ayuda/ (SEO)
```

Regla CRO: cada página termina con `Diagnóstico 3 pasos + Form + WhatsApp + Tel`.

## 4. Homepage — Wireframe + Copy

**0. Topbar + Header sticky**
`Benitachell Lun-Vie 10-14h | ES-EN-NL-DE | Tel + Asistencia Remota` + botón `Presupuesto en 24h`.

**1. HERO**
Badge: `Desde 1994 en Benitachell - Costa Blanca`
H1: `Toda tu tecnología en casa, resuelta por un solo equipo local.`
Sub: `Internet que funciona, tu TV de tu país, seguridad y energía solar. Hablamos tu idioma y vamos a tu domicilio. Para particulares, segundas residencias y pequeños negocios.`
CTA primario: `[Solicitar diagnóstico gratuito]` / Secundario: `[WhatsApp directo]`
Micro-trust: `★4.9 Google | +30 años | ES, EN, NL, DE`

**2. Trust bar:** `CanalDigitaal - TV Vlaanderen - Ubiquiti UniFi - Foscam - Victron - Sonos - LG - Samsung` + `+3.000 hogares atendidos`.

**3. ¿Por qué elegirnos? (4 cols)**
1. Un solo proveedor, cero dolores de cabeza.
2. Local y multilingüe (tienda física + domicilio Jávea-Moraira-Calpe-Dénia).
3. En casa, en tienda o en remoto.
4. Pensado para ausencias (CCTV + Smart Home + backup internet).

**4. Servicios (6 tarjetas)**
1. Ordenadores que vuelven a ir rápido.
2. WiFi en toda la casa, sin cortes.
3. Tu TV de tu país, como en casa.
4. Casa inteligente y segura.
5. Ahorra con energía solar.
6. Tranquilidad para negocios.

**5. Cómo trabajamos:** `1. Cuéntanos (2min) → 2. Presupuesto en 24h → 3. Instalamos + soporte`.

**6. Segmentación:** Vivo aquí / 2ª residencia / Negocio-barco.

**7. Prueba social:** stats `30+ años | 4 idiomas | mismo día Marina Alta` + 3 testimonios (NL/ES/EN) + carrusel Google.

**8. Cobertura + Tienda:** mapa + horario + `Cómo llegar`.

**9. FAQ (6):** idioma, domicilio, remoto en extranjero, tarjeta TV actual, WiFi lento, plazo solar.

**10. CTA Final + Form + Footer**
`¿Empezamos con revisión gratuita 15min?` Form: nombre, teléfono/WhatsApp, idioma, qué necesitas, mensaje + RGPD + `[Quiero mi presupuesto]`. Alt: `Llamar / Asistencia remota`.

## 5. Tono de comunicación

`Experto cercano que da tranquilidad.` Frases cortas, 2ª persona, sin jerga.
- Particular/expat: “internet que no se corta, ni arriba ni en el jardín”, “como en casa, en tu idioma”.
- Pyme: “evitar pérdidas, seguridad, mantenimiento”.
- Internacional: key-in-hand, remote control, second-home care. Evitar modismos.

## 6. CTAs

Primarios: `Solicitar diagnóstico gratuito` / `Pedir presupuesto en 24h` / `Agendar visita a domicilio`.
Secundarios: `Hablar por WhatsApp ahora` / `Iniciar asistencia remota` / `Revisar mi WiFi gratis` / `¿Puedo ver mi TV aquí? Compruébalo`.
Microcopy: `Sin compromiso - <24h laborables - ES/EN/NL/DE`.

---

# PARTE 2 — Landing Moderna Next.js (alto impacto)

## 7. Concepto visual recomendado: `Coastal Dark Premium + Glass`

Híbrido: Dark `#050B1A → #0A1633` en Hero + Villa Interactiva + CTA final; secciones claras `slate-50/white` en medio para legibilidad +55 años.
Acentos: Cyan `#22D3EE` (tech) + Ámbar `#FBBF24` (solar/hogar).
Tipos: `Space Grotesk` display + `Inter` cuerpo.
Superficies: `bg-white/5 backdrop-blur border-white/10` + spotlight + grid + noise.

Descartado: cyberpunk 100% (baja conversión senior), neobrutalismo (poco premium para villas).

**3D:**
- Hero `Villa Node Network` (R3F): casa flotante + 6 nodos pulsantes (PC/WiFi/TV/Domótica/Cam/Solar) + partículas, mouse-parallax. Fallback móvil estático.
- Fondo ligero alternativo: canvas 2D shimmer/grid.
- Scroll: dolly-in + encendido de luces por sección. Todo `dynamic(ssr:false)` + pausa fuera de viewport.

## 8. Estructura modular scroll

1. **Nav flotante glass + progress + lenis.**
2. **Hero split copy + canvas 3D:** H1 `Tu villa, totalmente conectada.` CTA `[Simular mi casa →]` + WhatsApp. Blur-in stagger, magnetic buttons.
3. **Trust marquee** marcas.
4. **Bento Grid 6:** `[7col Redes/WiFi+Yates][5col IT con terminal]` / `[4col TV][4col Smart][4col CCTV]` / `[12col Solar día/noche]`. Spotlight + tilt + tags.
5. **Smart Villa Simulator (estrella):** villa isométrica + toggles WiFi/Cámaras/Domótica/Solar + presets `Noche fuera`. Panel lateral cambia + CTA `Quiero esto en mi casa`.
6. **Métricas + Proceso:** count-ups `30+ / 3.2k / <24h / 4 idiomas` + timeline 3 pasos con línea ScrollTrigger.
7. **Reviews marquee doble fila** opuesta + mask fade.
8. **Cobertura + FAQ** (shadcn accordion).
9. **CTA Final BookingTabs:** `[Formulario | Agendar Cal.com | Remoto]` + modal éxito + WhatsApp.

## 9. Stack Next.js

- `next@14 app-router, tailwind, typescript, lucide-react, lenis, framer-motion` (90% anims), `gsap+ScrollTrigger` solo si timeline cámara compleja.
- 3D: `@react-three/fiber + drei + postprocessing` / alternativa MVP: Spline embed.
- UI: `shadcn/ui` (button/dialog/accordion/tabs/form + RHF+zod), `Aceternity` (Bento, Spotlight, TextGenerate, InfiniteCards - copiar), `Magic UI` (ShimmerButton, Marquee, NumberTicker, Globe, Particles).
- Estructura: `/app/page.tsx` + `/components/hero/VillaScene.client.tsx` + `/services/BentoServices.tsx` + `/villa/SmartVillaSimulator.tsx` + `/social/ReviewsMarquee.tsx` + `/contact/BookingTabs.tsx`.
- Perf: `next/image+font`, dynamic 3D, `prefers-reduced-motion`, Lighthouse >90 móvil.

## 10. Próximos pasos

- [ ] Definir nombre dominio / marca.
- [ ] Textos finales ES + EN (luego NL/DE).
- [ ] Fotos reales tienda + instalaciones + mapa cobertura.
- [ ] Recoger 10 reseñas Google con pueblo/idioma.
- [ ] Prototipo Next.js de Hero + Bento + Villa.
