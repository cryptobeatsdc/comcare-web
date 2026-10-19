"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Pause, Play } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

export default function Hero() {
  const { dict } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const manual = useRef(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    manual.current = true;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  useEffect(() => {
    const el = ref.current;
    const v = videoRef.current;
    if (!el || !v || reduce) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (manual.current) return;
        if (e.isIntersecting) {
          v.play().catch(() => {});
          setPaused(false);
        } else {
          v.pause();
          setPaused(true);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return (
    <section id="top" ref={ref} className="grain relative w-full overflow-hidden bg-ink text-white">
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden>
        {reduce ? (
          <Image src="/img/hero.jpg" alt="" fill sizes="100vw" className="object-cover" />
        ) : (
          // El póster es el primer fotograma real del vídeo: el arranque no da un salto visual.
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/img/hero-poster.jpg"
          >
            <source src="/video/hero-sd.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>
      <div className="hero-scrim absolute inset-0" aria-hidden />

      <motion.div
        style={{ opacity: fade }}
        className="relative flex min-h-[100svh] w-full flex-col justify-end px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-24 xl:px-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-white/80"
        >
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-solar" />
          {dict.hero.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-5xl text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] md:text-7xl xl:text-[88px]"
        >
          {dict.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
        >
          {dict.hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="btn-roll rounded-full bg-white px-8 py-4 font-semibold text-ink hover:bg-marfil"
          >
            <span className="btn-labels">
              <span className="btn-track">
                <span className="block">{dict.hero.cta1}</span>
                <span className="block">{dict.hero.cta2}</span>
              </span>
            </span>
          </a>
          <a
            href="https://wa.me/34625322624"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white backdrop-blur hover:bg-white/20"
          >
            <MessageCircle size={18} /> {dict.hero.whatsapp}
          </a>
          <a href="#villa" className="px-2 text-sm text-white/70 underline underline-offset-4">
            {dict.hero.villa}
          </a>
        </motion.div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs tracking-wide text-white/50">{dict.hero.micro}</p>
          {!reduce && (
            <button
              onClick={toggleVideo}
              aria-label={paused ? dict.hero.play : dict.hero.pause}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs text-white/80 backdrop-blur"
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
              {paused ? dict.hero.play : dict.hero.pause}
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
