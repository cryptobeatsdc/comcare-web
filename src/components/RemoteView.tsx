import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import ServiceLinks from "@/components/ServiceLinks";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";

/** Página de asistencia remota: cómo funciona, para qué sirve y enlace a soporte. */
export default function RemoteView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const r = dict.pages.remote;
  const t = dict.pages.common;
  return (
    <PageShell dict={dict} locale={locale}>
      <PageHero eyebrow={r.eyebrow} title={r.title} sub={r.sub} t={t} />
      <section className="w-full pb-20 lg:pb-24">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <FadeIn>
            <p className="eyebrow text-arena">{r.stepsTitle}</p>
          </FadeIn>
          <Stagger className="mt-6 grid gap-5 md:grid-cols-3">
            {r.steps.map((s, i) => (
              <StaggerItem key={s.t}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                  <p className="font-mono text-sm text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-display mt-2 text-2xl font-semibold">{s.t}</h2>
                  <p className="mt-3 text-ink/65">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn>
            <div className="mt-14">
              <p className="eyebrow text-arena">{r.tipsTitle}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {r.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-lg">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solar" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="mt-12">
            <ServiceLinks ids={["soporte"]} label={t.otherSolutions} dict={dict} locale={locale} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
