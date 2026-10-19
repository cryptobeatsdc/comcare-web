"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { LANG_COOKIE, LOCALES, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/components/I18nProvider";
import {
  LEGAL_SLUGS,
  legalDocFromAnySlug,
  ROUTE_SEGMENTS,
  routeHref,
  sectionFromAnySegment,
  SERVICE_SLUGS,
  serviceIdFromAnySlug,
} from "@/lib/routes";

function rememberLang(locale: Locale) {
  document.cookie = `${LANG_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dict, locale } = useI18n();
  const pathname = usePathname() ?? `/${locale}`;
  const onLanding = pathname === `/${locale}`;

  const resolveHref = (href: string) => {
    if (href === "#servicios") return routeHref(locale, "services");
    if (onLanding || href === "#contacto") return href;
    return `/${locale}${href}`;
  };

  const switchHref = (target: Locale) => {
    const rest = pathname
      .replace(new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`), "")
      .split("/")
      .filter(Boolean);
    if (rest.length === 0) return `/${target}`;
    const section = sectionFromAnySegment(rest[0]);
    if (!section) return `/${target}/${rest.join("/")}`;
    const tail: string[] = [ROUTE_SEGMENTS[section][target]];
    for (let i = 1; i < rest.length; i++) {
      let segment = rest[i];
      if (section === "services" && i === 1) {
        const serviceId = serviceIdFromAnySlug(segment);
        if (serviceId) segment = SERVICE_SLUGS[serviceId][target];
      }
      if (section === "legal" && i === 1) {
        const doc = legalDocFromAnySlug(segment);
        if (doc) segment = LEGAL_SLUGS[doc][target];
      }
      tail.push(segment);
    }
    return `/${target}/${tail.join("/")}`;
  };

  const langTabs = (
    <div
      role="group"
      aria-label={dict.nav.langAria}
      translate="no"
      className="flex items-center rounded-full border border-ink/10 p-0.5 text-[12px] font-semibold uppercase"
    >
      {LOCALES.map((l) =>
        l === locale ? (
          <span key={l} className="rounded-full bg-navy px-2 py-1 text-white">
            {l}
          </span>
        ) : (
          <a
            key={l}
            href={switchHref(l)}
            onClick={() => rememberLang(l)}
            className="rounded-full px-2 py-1 text-ink/50 transition hover:text-ink"
          >
            {l}
          </a>
        )
      )}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full bg-navy py-1.5 text-center text-[12px] tracking-wide text-white/80">
        {dict.nav.topbar}
      </div>
      <div className="px-4 pt-3 md:px-10">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between rounded-full border border-ink/10 bg-white/90 py-2 pl-6 pr-2 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
          <a
            href={onLanding ? "#top" : routeHref(locale, "home")}
            className="font-display text-xl font-semibold text-ink"
          >
            {dict.nav.brand}
          </a>
          <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label={dict.nav.mainAria}>
            {dict.nav.links.map((l) => (
              <a key={l.href} href={resolveHref(l.href)} className="text-[15px] text-ink/70 hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            {langTabs}
            <a
              href="tel:+34625322624"
              aria-label={dict.nav.callAria}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink"
            >
              <Phone size={17} />
            </a>
            <a
              href="#contacto"
              className="btn-roll rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="btn-labels">
                <span className="btn-track">
                  <span className="block">{dict.nav.cta1}</span>
                  <span className="block">{dict.nav.cta2}</span>
                </span>
              </span>
            </a>
          </div>
          <button
            className="mr-2 text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={dict.nav.openAria}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-ink/10 bg-white px-6 py-4 shadow-xl md:hidden"
            aria-label={dict.nav.mobileAria}
          >
            <div className="flex flex-col gap-3">
              {dict.nav.links.map((l) => (
                <a key={l.href} href={resolveHref(l.href)} onClick={() => setOpen(false)} className="py-1 text-ink/80">
                  {l.label}
                </a>
              ))}
              <div className="mt-1 flex items-center justify-between">
                {langTabs}
                <a
                  href="tel:+34625322624"
                  aria-label={dict.nav.callAria}
                  className="flex items-center gap-2 text-sm font-semibold text-ink/70"
                >
                  <Phone size={15} /> 625 322 624
                </a>
              </div>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-navy px-4 py-3 text-center font-semibold text-white"
              >
                {dict.nav.cta1}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
