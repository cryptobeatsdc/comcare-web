"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/Reveal";
import { useI18n } from "@/components/I18nProvider";

const TABS = [
  { id: "hogar", foto: "/img/hero.jpg" },
  { id: "fuera", foto: "/img/cctv.jpg" },
  { id: "negocio", foto: "/img/redes.jpg" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Segments() {
  const { dict } = useI18n();
  const [active, setActive] = useState<TabId>("fuera");
  const reduce = useReducedMotion();
  const foto = TABS.find((t) => t.id === active)!.foto;
  const copy = dict.segments.tabs[active];
  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <p className="eyebrow text-arena">{dict.segments.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {dict.segments.title}
          </h2>
        </FadeIn>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={dict.segments.tabsAria}>
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-6 py-3 text-[15px] font-semibold transition ${
                active === t.id
                  ? "border-navy bg-navy text-white"
                  : "border-ink/15 text-ink/60 hover:border-ink/40"
              }`}
            >
              {dict.segments.tabs[t.id].label}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-navy text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2"
            >
              <div className="relative min-h-[280px] md:min-h-[420px]">
                <Image
                  src={foto}
                  alt={copy.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="font-display text-3xl font-semibold md:text-4xl">{copy.title}</h3>
                <p className="mt-4 text-lg text-white/70">{copy.text}</p>
                <div>
                  <a
                    href="#contacto"
                    className="btn-roll mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-ink"
                  >
                    <span className="btn-labels">
                      <span className="btn-track">
                        <span className="block">{dict.segments.cta1}</span>
                        <span className="block">{dict.segments.cta2}</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
