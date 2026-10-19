"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, MonitorSmartphone } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";
import { routeHref } from "@/lib/routes";

export default function ChatWidget() {
  const { dict, locale } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Barra móvil fija estilo hotel bottom-bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-navy text-white md:hidden">
        <a href="#contacto" className="py-3.5 text-center font-semibold">
          {dict.chat.budget}
        </a>
        <a
          href="https://wa.me/34625322624"
          target="_blank"
          rel="noreferrer"
          className="border-l border-white/15 bg-white/10 py-3.5 text-center font-semibold"
        >
          WhatsApp
        </a>
      </div>

      {/* Botón desktop con identidad, no verde puro */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {open && (
          <div className="mb-3 w-72 overflow-hidden rounded-3xl border border-ink/10 bg-white text-ink shadow-2xl">
            <div className="bg-linear-to-br from-navy to-[#3a2a1a] p-5 text-white">
              <p className="font-display text-lg font-semibold">{dict.chat.title}</p>
              <p className="text-sm text-white/65">{dict.chat.hours}</p>
            </div>
            <div className="flex flex-col gap-2 p-4 text-sm font-semibold">
              <a href="#contacto" onClick={() => setOpen(false)} className="rounded-2xl bg-navy px-4 py-3 text-center text-white">
                {dict.chat.budget24}
              </a>
              <a
                href="https://wa.me/34625322624"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-ink/15 px-4 py-3 text-center"
              >
                {dict.chat.waDirect}
              </a>
              <a href="tel:+34625322624" className="flex items-center justify-center gap-2 rounded-2xl border border-ink/15 px-4 py-3">
                <Phone size={15} /> 625 322 624
              </a>
              <a href={routeHref(locale, "remote")} onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 px-4 py-1 text-ink/60">
                <MonitorSmartphone size={15} /> {dict.chat.remote}
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={dict.chat.openAria}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-xl hover:brightness-125"
        >
          {open ? <X /> : <MessageCircle />}
        </button>
      </div>
    </>
  );
}
