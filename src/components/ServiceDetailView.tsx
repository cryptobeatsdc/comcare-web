import Image from "next/image";
import { CATALOG, type ServiceId } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { routeHref } from "@/lib/routes";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ServiceLinks from "@/components/ServiceLinks";
import { FadeIn } from "@/components/Reveal";

/** Detalle de una solución: intro, qué incluye, problema típico y enlaces internos. */
export default function ServiceDetailView({
  dict,
  locale,
  id,
}: {
  dict: Dictionary;
  locale: Locale;
  id: ServiceId;
}) {
  const copy = dict.catalog[id];
  const t = dict.pages.common;
  const foto = CATALOG.find((s) => s.id === id)?.foto ?? CATALOG[0].foto;
  const others: ServiceId[] = CATALOG.filter((s) => s.id !== id).map((s) => s.id);

  return (
    <PageShell dict={dict} locale={locale}>
      <PageHero
        eyebrow={`${dict.pages.services.eyebrow} · ${copy.espacio}`}
        title={copy.title}
        sub={copy.short}
        t={t}
        back={{ href: routeHref(locale, "services"), label: t.backToServices }}
      />
      <section className="w-full pb-20 lg:pb-24">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <p className="text-lg leading-relaxed text-ink/75">{copy.intro}</p>
              <h2 className="eyebrow mt-8 text-arena">{t.includes}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {copy.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-lg">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solar" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              {/* TODO: replace with real content */}
              <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[440px]">
                <Image
                  src={foto}
                  alt={`${copy.title} — ${copy.espacio}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="w-full pb-20 lg:pb-24">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <FadeIn>
            <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-12">
              <p className="eyebrow text-arena">{t.typical}</p>
              <p className="font-display mt-3 max-w-3xl text-2xl font-semibold md:text-3xl">
                {copy.dolor}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="w-full pb-24">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <ServiceLinks ids={others} label={t.otherSolutions} dict={dict} locale={locale} />
        </div>
      </section>
    </PageShell>
  );
}
