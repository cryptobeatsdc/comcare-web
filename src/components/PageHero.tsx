import { MessageCircle } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/es";
import { FadeIn } from "@/components/Reveal";

/** Cabecera de página interior (hub de soluciones, empresas, remoto, detalle). */
export default function PageHero({
  eyebrow,
  title,
  sub,
  t,
  back,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  t: Dictionary["pages"]["common"];
  back?: { href: string; label: string };
}) {
  return (
    <section className="w-full bg-marfil pb-16 pt-36 md:pt-44">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          {back && (
            <a
              href={back.href}
              className="mb-6 inline-block text-sm text-ink/50 underline underline-offset-4 hover:text-ink"
            >
              {back.label}
            </a>
          )}
          <p className="eyebrow text-arena">{eyebrow}</p>
          <h1 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{sub}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="btn-roll rounded-full bg-navy px-8 py-4 font-semibold text-white"
            >
              <span className="btn-labels">
                <span className="btn-track">
                  <span className="block">{t.cta1}</span>
                  <span className="block">{t.cta2}</span>
                </span>
              </span>
            </a>
            <a
              href="https://wa.me/34625322624"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-8 py-4 font-semibold text-ink hover:border-ink/35"
            >
              <MessageCircle size={18} /> {t.whatsapp}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
