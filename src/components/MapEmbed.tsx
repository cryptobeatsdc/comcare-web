"use client";

import { MapPin } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { acceptMapConsent, useMapConsent } from "@/lib/consent";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { routeHref } from "@/lib/routes";

/**
 * Mapa de Google con consentimiento previo (patrón «clic para cargar»):
 * no se hace ninguna petición a Google hasta que la persona lo acepta.
 */
export default function MapEmbed({ t, locale }: { t: Dictionary["visit"]; locale: Locale }) {
  const consented = useMapConsent();

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&z=16&hl=${locale}&output=embed`;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-sm">
      {consented ? (
        <iframe
          title={t.mapAria}
          src={mapSrc}
          className="h-[320px] w-full border-0 md:h-[380px] lg:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-[320px] flex-col items-center justify-center gap-3 px-8 text-center md:h-[380px] lg:h-[420px]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-marfil text-ink/70">
            <MapPin size={22} />
          </span>
          <p className="font-display text-xl font-semibold">{t.mapConsentTitle}</p>
          <p className="max-w-sm text-sm text-ink/60">{t.mapConsentText}</p>
          <button
            type="button"
            onClick={acceptMapConsent}
            className="mt-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {t.mapConsentButton}
          </button>
          <a
            href={routeHref(locale, "legalDoc", "cookies")}
            className="text-xs text-ink/50 underline underline-offset-4 hover:text-ink"
          >
            {t.mapConsentPolicy}
          </a>
        </div>
      )}
    </div>
  );
}
