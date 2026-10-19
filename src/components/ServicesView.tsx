import Image from "next/image";
import { CATALOG } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { routeHref } from "@/lib/routes";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";

/** Hub de soluciones: las seis tarjetas con enlace a cada detalle. */
export default function ServicesView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.pages.common;
  return (
    <PageShell dict={dict} locale={locale}>
      <PageHero
        eyebrow={dict.pages.services.eyebrow}
        title={dict.pages.services.title}
        sub={dict.pages.services.sub}
        t={t}
      />
      <section className="w-full pb-20 lg:pb-28">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CATALOG.map((s) => {
              const copy = dict.catalog[s.id];
              return (
                <StaggerItem key={s.id}>
                  <a
                    href={routeHref(locale, "service", s.id)}
                    className="group block h-full overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:border-ink/25 hover:shadow-lg"
                  >
                    {/* TODO: replace with real content */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={s.foto}
                        alt={`${copy.title} — ${copy.espacio}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="eyebrow absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-sm">
                        {copy.espacio}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="font-display text-2xl font-semibold">{copy.title}</h2>
                      <p className="mt-2 text-ink/65">{copy.short}</p>
                      <p className="mt-4 font-semibold text-ink/75 underline-offset-4 group-hover:underline">
                        {dict.solutions.detail}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>
          <div className="mt-14 flex flex-wrap gap-3">
            <a
              href={routeHref(locale, "business")}
              className="rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink/75 hover:border-ink/40 hover:text-ink"
            >
              {dict.pages.business.eyebrow}
            </a>
            <a
              href={routeHref(locale, "remote")}
              className="rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink/75 hover:border-ink/40 hover:text-ink"
            >
              {dict.pages.remote.eyebrow}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
