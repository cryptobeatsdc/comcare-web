import { CATALOG } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { LEGAL_DOCS, routeHref } from "@/lib/routes";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.footer;
  return (
    <footer className="w-full bg-navy py-14 text-sm text-white/60">
      <div className="grid w-full gap-10 px-6 md:grid-cols-4 md:px-10 lg:px-16 xl:px-24">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold text-white">{t.brand}</p>
          <p className="mt-3 max-w-md">{t.about}</p>
          <p className="mt-3">{t.address}</p>
        </div>
        <div>
          <p className="eyebrow text-white/40">{t.contact}</p>
          <p className="mt-3">
            <a href="tel:+34625322624" className="hover:text-white">(+34) 625 322 624</a>
          </p>
          <p>
            <a href="https://wa.me/34625322624" target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </p>
          <p translate="no">ES / EN / NL / DE</p>
        </div>
        <div>
          <p className="eyebrow text-white/40">{t.solutions}</p>
          <ul className="mt-3 space-y-1.5">
            {CATALOG.map((s) => (
              <li key={s.id}>
                <a href={routeHref(locale, "service", s.id)} className="hover:text-white">
                  {dict.solutions.short[s.id]}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a href={routeHref(locale, "business")} className="hover:text-white">
                {dict.pages.business.eyebrow}
              </a>
            </li>
            <li>
              <a href={routeHref(locale, "remote")} className="hover:text-white">
                {dict.pages.remote.eyebrow}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs">{t.credits}</p>
        </div>
      </div>
      <div className="mt-12 w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/45">
          {LEGAL_DOCS.map((doc) => (
            <li key={doc}>
              <a href={routeHref(locale, "legalDoc", doc)} className="hover:text-white">
                {dict.pages.legal.hub[doc].title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
