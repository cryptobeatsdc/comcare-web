import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n/es";

const FOTOS = [
  "/img/soporte.jpg",
  "/img/redes.jpg",
  "/img/solar-tech.jpg",
  "/img/tv.jpg",
];

export default function Process({ t }: { t: Dictionary["process"] }) {
  return (
    <section id="proceso" className="w-full scroll-mt-28 bg-marfil py-24 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <p className="eyebrow text-arena">{t.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {t.title}
          </h2>
        </FadeIn>
        <Stagger className="mt-12">
          {t.steps.map((s, i) => (
            <StaggerItem key={s.n} className="mb-6 lg:sticky" style={{ top: `${132 + i * 28}px` }}>
              <div
                className={`grid overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-ink/10 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[260px] md:min-h-[360px]">
                  <Image
                    src={FOTOS[i]}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="font-display text-4xl font-semibold text-arena">{s.n}</p>
                  <h3 className="font-display mt-2 text-3xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-lg text-ink/65">{s.d}</p>
                  <div>
                    <a href="#contacto" className="mt-5 inline-block font-semibold text-navy">
                      {t.start}
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-10 grid gap-6 rounded-3xl bg-navy p-8 text-white md:grid-cols-4 md:p-10">
          {t.info.map(([label, value]) => (
            <div key={label}>
              <p className="font-semibold">{label}</p>
              <p className="text-sm text-white/60">{value}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
