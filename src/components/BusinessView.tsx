import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ServiceLinks from "@/components/ServiceLinks";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";

/** Página para empresas: cuatro bloques de servicio y enlaces internos. */
export default function BusinessView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const b = dict.pages.business;
  const t = dict.pages.common;
  return (
    <PageShell dict={dict} locale={locale}>
      <PageHero eyebrow={b.eyebrow} title={b.title} sub={b.sub} t={t} />
      <section className="w-full pb-20 lg:pb-28">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <FadeIn>
            <p className="eyebrow text-arena">{b.pointsTitle}</p>
          </FadeIn>
          <Stagger className="mt-6 grid gap-5 md:grid-cols-2">
            {b.points.map((p) => (
              <StaggerItem key={p.t}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                  <h2 className="font-display text-2xl font-semibold">{p.t}</h2>
                  <p className="mt-3 text-ink/65">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <FadeIn>
              <ServiceLinks
                ids={["redes", "cctv", "solar"]}
                label={t.otherSolutions}
                dict={dict}
                locale={locale}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
