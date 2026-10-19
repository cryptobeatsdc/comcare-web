"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/Reveal";
import { useI18n } from "@/components/I18nProvider";

export default function ProofCase() {
  const { dict } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ink text-white">
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0" aria-hidden>
        <Image src="/img/solar-tech.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" aria-hidden />
      <div className="relative flex min-h-[85vh] w-full flex-col justify-end px-6 pb-16 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <p className="eyebrow text-solar">{dict.proof.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">
            {dict.proof.title}
          </h2>
        </FadeIn>
        <div className="mt-8 flex flex-wrap gap-4">
          {dict.proof.stats.map(([n, d]) => (
            <div key={n} className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="font-display text-3xl font-semibold">{n}</p>
              <p className="text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="#contacto"
            className="btn-roll inline-block rounded-full bg-white px-8 py-4 font-semibold text-ink"
          >
            <span className="btn-labels">
              <span className="btn-track">
                <span className="block">{dict.proof.cta1}</span>
                <span className="block">{dict.proof.cta2}</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
