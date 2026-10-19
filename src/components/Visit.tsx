import { FadeIn } from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import { COMPANY } from "@/lib/company";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";

export default function Visit({ t, locale }: { t: Dictionary["visit"]; locale: Locale }) {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.mapQuery)}`;

  return (
    <section id="visitanos" className="w-full scroll-mt-28 bg-marfil py-20 lg:py-28">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col rounded-[2rem] border border-ink/10 bg-white p-8 lg:p-10">
              <p className="eyebrow text-arena">{t.eyebrow}</p>
              <h2 className="font-display mt-4 text-4xl font-bold lg:text-5xl">{t.title}</h2>
              <p className="mt-4 max-w-md text-black/60">{t.sub}</p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="eyebrow text-ink/45">{t.addressLabel}</dt>
                  <dd className="mt-1 font-medium">{t.address}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">{t.hoursLabel}</dt>
                  <dd className="mt-1 font-medium">{t.hours}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">{t.phoneLabel}</dt>
                  <dd className="mt-1 font-medium">
                    <a href="tel:+34625322624" className="hover:text-ink/70">
                      (+34) 625 322 624
                    </a>
                    <span className="text-ink/30"> · </span>
                    <a href="https://wa.me/34625322624" target="_blank" rel="noreferrer" className="hover:text-ink/70">
                      WhatsApp
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {t.directions}
                </a>
                <a
                  href="tel:+34625322624"
                  className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
                >
                  {t.call}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <MapEmbed t={t} locale={locale} />
              <div className="rounded-[2rem] border border-ink/10 bg-white p-6 lg:p-7">
                <p className="eyebrow text-ink/45">{t.coverageLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.towns.map((town) => (
                    <li key={town} className="rounded-full border border-ink/15 bg-marfil px-4 py-1.5 text-sm font-medium">
                      {town}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-black/55">{t.coverageNote}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
