"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CATALOG, type ServiceId } from "@/lib/catalog";
import { FadeIn } from "@/components/Reveal";
import { useI18n } from "@/components/I18nProvider";
import { routeHref } from "@/lib/routes";

function StepPanel({
  id,
  index,
  foto,
  register,
}: {
  id: ServiceId;
  index: number;
  foto: string;
  register: (id: string, el: HTMLDivElement | null) => void;
}) {
  const { dict, locale } = useI18n();
  const copy = dict.catalog[id];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const opacity = useTransform(smooth, [0, 0.7], [0, 1]);
  const y = useTransform(smooth, [0, 1], [90, 0]);
  const scale = useTransform(smooth, [0, 1], [1.14, 1]);

  useEffect(() => {
    register(id, ref.current);
    return () => register(id, null);
  }, [id, register]);

  return (
    <motion.div
      ref={ref}
      data-id={id}
      style={reduce ? undefined : { opacity, y }}
      className="scroll-mt-40 overflow-hidden rounded-3xl bg-white"
    >
      <div className="relative h-[300px] overflow-hidden md:h-[420px]">
        <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
          <Image
            src={foto}
            alt={`${copy.title} — ${copy.espacio}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>
        <span className="eyebrow absolute left-5 top-5 rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-sm">
          {copy.espacio}
        </span>
      </div>
      <div className="p-7 md:p-9">
        <p className="text-[15px] tracking-wide text-ink/45">
          {dict.solutions.step} {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-1 text-3xl font-semibold md:text-4xl">{copy.title}</h3>
        <p className="mt-3 max-w-xl text-lg text-ink/65">
          {copy.dolor} {copy.short}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {copy.bullets.map((b) => (
            <li key={b} className="rounded-full bg-marfil px-3 py-1.5 text-sm text-ink/70">
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href="#contacto"
            className="btn-roll inline-block rounded-full bg-navy px-7 py-3.5 font-semibold text-white"
          >
            <span className="btn-labels">
              <span className="btn-track">
                <span className="block">{dict.solutions.cta1}</span>
                <span className="block">{dict.solutions.cta2}</span>
              </span>
            </span>
          </a>
          <a
            href={routeHref(locale, "service", id)}
            className="font-semibold text-ink/70 underline underline-offset-4 hover:text-ink"
          >
            {dict.solutions.detail}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionsSlider() {
  const { dict } = useI18n();
  const [active, setActive] = useState<string>(CATALOG[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const panels = useRef(new Map<string, HTMLDivElement>());
  const lock = useRef(false);

  const register = (id: string, el: HTMLDivElement | null) => {
    if (el) panels.current.set(id, el);
    else panels.current.delete(id);
  };

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (lock.current) return;
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-id");
            if (id) setActive(id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    root.querySelectorAll("[data-id]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setActive(id);
    lock.current = true;
    panels.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      lock.current = false;
    }, 900);
  };

  return (
    <section id="servicios" ref={sectionRef} className="w-full bg-marfil py-24 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <p className="eyebrow text-arena">{dict.solutions.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            {dict.solutions.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/60">{dict.solutions.sub}</p>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-40 lg:self-start">
            <div
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label={dict.solutions.tabsAria}
            >
              {CATALOG.map((s, i) => {
                const on = active === s.id;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => go(s.id)}
                    className={`relative flex shrink-0 items-center gap-3 rounded-full px-5 py-3.5 text-left text-[16px] transition lg:w-full ${
                      on ? "text-ink" : "text-ink/40 hover:text-ink/70"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="sol-step-pill"
                        className="absolute inset-0 rounded-full bg-ink/[0.07]"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <span className="relative font-mono text-sm text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`relative font-semibold ${on ? "" : "font-normal"}`}>
                      {dict.solutions.short[s.id]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-10">
            {CATALOG.map((s, i) => (
              <StepPanel
                key={s.id}
                id={s.id}
                index={i}
                foto={s.foto}
                register={register}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
