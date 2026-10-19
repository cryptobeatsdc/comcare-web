"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { FadeIn } from "@/components/Reveal";
import { useI18n } from "@/components/I18nProvider";

export default function VideoCapsule() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <section className="relative z-10 -mt-10 w-full rounded-t-[2.5rem] bg-marfil pb-12 pt-20 shadow-[0_-20px_60px_rgba(0,0,0,0.35)] md:-mt-14 md:rounded-t-[3.5rem] lg:pt-24" aria-label={dict.video.sectionAria}>
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <FadeIn>
          <button
            onClick={() => setOpen(true)}
            className="group relative block h-[320px] w-full overflow-hidden rounded-3xl text-left md:h-[440px]"
            aria-label={dict.video.playAria}
          >
            <Image
              src="/img/solar-field.jpg"
              alt={dict.video.imgAlt}
              fill
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" aria-hidden />
            <span className="absolute left-6 top-6 rounded-full bg-black/50 px-3 py-1 text-[11px] tracking-[3px] text-white backdrop-blur-sm">
              {dict.video.badge}
            </span>
            <span className="absolute bottom-6 left-6 right-6 flex items-center gap-5">
              <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-xl transition group-hover:scale-110">
                <Play size={28} className="ml-1" />
              </span>
              <span>
                <span className="font-display block text-2xl font-semibold text-white md:text-3xl">
                  {dict.video.title}
                </span>
                <span className="text-white/70">{dict.video.sub}</span>
              </span>
            </span>
          </button>
        </FadeIn>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={dict.video.dialogAria}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex justify-end">
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label={dict.video.closeAria}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"
              >
                <X />
              </button>
            </div>
            <video controls autoPlay playsInline preload="metadata" className="aspect-video w-full rounded-2xl bg-black">
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
