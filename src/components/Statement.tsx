import { FadeIn } from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n/es";

export default function Statement({ t }: { t: Dictionary["statement"] }) {
  return (
    <section className="w-full bg-[#111111] text-white">
      <div className="w-full px-6 py-28 text-center md:py-36">
        <FadeIn>
          <p className="eyebrow text-lima">{t.eyebrow}</p>
          <h2 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">
            {t.title}
          </h2>
          <a
            href="#contacto"
            className="btn-roll mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-ink"
          >
            <span className="btn-labels">
              <span className="btn-track">
                <span className="block">{t.cta1}</span>
                <span className="block">{t.cta2}</span>
              </span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
