import { COMPANY, LEGAL_DATA_PENDING } from "@/lib/company";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { LEGAL_DOCS, routeHref, type LegalDoc } from "@/lib/routes";
import PageShell from "@/components/PageShell";
import MapConsentReset from "@/components/MapConsentReset";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";

/** Índice de las páginas legales. */
export function LegalHub({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.pages.legal;
  return (
    <PageShell dict={dict} locale={locale}>
      <section className="w-full bg-marfil pb-20 pt-36 md:pt-44 lg:pb-28">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <FadeIn>
            <p className="eyebrow text-arena">{t.eyebrow}</p>
            <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{t.sub}</p>
          </FadeIn>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {LEGAL_DOCS.map((doc) => (
              <StaggerItem key={doc}>
                <a
                  href={routeHref(locale, "legalDoc", doc)}
                  className="group block h-full rounded-3xl border border-ink/10 bg-white p-7 transition hover:border-ink/25 hover:shadow-lg"
                >
                  <h2 className="font-display text-2xl font-semibold group-hover:underline group-hover:underline-offset-4">
                    {t.hub[doc].title}
                  </h2>
                  <p className="mt-2 text-ink/65">{t.hub[doc].desc}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          {LEGAL_DATA_PENDING && (
            <p className="mt-8 max-w-2xl rounded-2xl bg-solar/15 p-4 text-sm leading-relaxed text-ink/70">
              {t.draftNotice}
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}

/** Documento legal completo (aviso, privacidad o cookies). */
export function LegalDocPage({
  dict,
  locale,
  doc,
}: {
  dict: Dictionary;
  locale: Locale;
  doc: LegalDoc;
}) {
  const t = dict.pages.legal;
  const content = t.docs[doc];
  const incomplete = LEGAL_DATA_PENDING;

  const rows = [
    { label: t.labels.legalName, value: COMPANY.legalName },
    { label: t.labels.taxId, value: COMPANY.taxId },
    { label: t.labels.address, value: COMPANY.address },
    { label: t.labels.phone, value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
    { label: t.labels.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { label: t.labels.registry, value: COMPANY.registry },
  ];

  return (
    <PageShell dict={dict} locale={locale}>
      <section className="w-full bg-marfil pb-20 pt-36 md:pt-44 lg:pb-28">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <FadeIn>
            <a
              href={routeHref(locale, "legal")}
              className="mb-6 inline-block text-sm text-ink/50 underline underline-offset-4 hover:text-ink"
            >
              {t.back}
            </a>
            <p className="eyebrow text-arena">{t.eyebrow}</p>
            <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{content.intro}</p>
            <p className="mt-4 text-sm text-ink/45">
              {t.updatedLabel}: {t.updated}
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-10">
            <aside className="h-fit rounded-3xl border border-ink/10 bg-white p-6 md:p-7 lg:sticky lg:top-28">
              <p className="eyebrow text-ink/45">{t.ownerTitle}</p>
              <p className="mt-3 text-sm text-ink/55">{t.ownerNote}</p>
              <dl className="mt-5 space-y-4">
                {rows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs uppercase tracking-wide text-ink/40">{row.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium">
                      {row.value ? (
                        row.href ? (
                          <a href={row.href} className="underline underline-offset-4 hover:text-ink/70">
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-solar/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/60">
                          {t.missing}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              {incomplete && (
                <p className="mt-5 rounded-2xl bg-solar/15 p-4 text-xs leading-relaxed text-ink/70">
                  {t.draftNotice}
                </p>
              )}
            </aside>

            <article className="max-w-3xl">
              {content.sections.map((section) => (
                <div key={section.h} className="border-t border-ink/10 py-6 first:border-0 first:pt-0">
                  <h2 className="font-display text-2xl font-semibold">{section.h}</h2>
                  {section.p.map((paragraph) => (
                    <p key={paragraph} className="mt-3 leading-relaxed text-ink/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
              {doc === "cookies" && <MapConsentReset t={t.reset} />}
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
