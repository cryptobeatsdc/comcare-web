"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceId } from "@/lib/catalog";
import { useI18n } from "@/components/I18nProvider";

interface Hotspot {
  id: ServiceId;
  x: number;
  y: number;
}

const spots: Hotspot[] = [
  { id: "redes", x: 50, y: 44 },
  { id: "cctv", x: 12, y: 18 },
  { id: "solar", x: 78, y: 66 },
  { id: "tv", x: 27, y: 63 },
  { id: "smart", x: 69, y: 30 },
  { id: "soporte", x: 44, y: 76 },
];

export default function ConnectedSpace() {
  const { dict } = useI18n();
  const [active, setActive] = useState<ServiceId>("redes");
  const [selected, setSelected] = useState<ServiceId[]>(["redes"]);

  const item = dict.catalog[active];

  const toggleSelect = (id: ServiceId) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem("villa-selection", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const focusSpot = (id: ServiceId) => setActive(id);

  return (
    <section id="villa" className="w-full bg-navy py-20 text-white lg:py-28">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <p className="eyebrow text-solar">{dict.villa.eyebrow}</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {dict.villa.title}
        </h2>
        <p className="mt-3 max-w-2xl text-white/60">{dict.villa.sub}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Plano/foto con hotspots — foto villa con piscina */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 md:min-h-[520px]">
            <Image
              src="/img/villa-pool.jpg"
              alt={dict.villa.imgAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/45" aria-hidden />
            <div className="absolute inset-6 rounded-2xl border border-white/25" aria-hidden />
            <div className="absolute left-1/2 top-1/2 h-3/4 w-px bg-white/15" aria-hidden />
            <span className="eyebrow absolute left-8 top-8 text-white/50">{dict.villa.zones.living}</span>
            <span className="eyebrow absolute right-8 top-8 text-white/50">{dict.villa.zones.roof}</span>
            <span className="eyebrow absolute bottom-8 left-8 text-white/50">{dict.villa.zones.garden}</span>

            {spots.map((s) => {
              const isActive = active === s.id;
              const isOn = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    focusSpot(s.id);
                    if (!selected.includes(s.id)) toggleSelect(s.id);
                  }}
                  onMouseEnter={() => focusSpot(s.id)}
                  onFocus={() => focusSpot(s.id)}
                  aria-expanded={isActive}
                  aria-label={`${dict.villa.hotspots[s.id]}: ${
                    isOn ? dict.villa.selectedAria : dict.villa.unselectedAria
                  }`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                >
                  <span
                    className={`block h-4 w-4 rounded-full border-2 border-white transition ${
                      isOn ? "bg-solar" : "bg-white/40"
                    } ${isActive ? "scale-125" : ""}`}
                  />
                  <span className="absolute inset-0 -z-10 animate-pulseDot rounded-full bg-white/30" aria-hidden />
                  <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/70 px-2 py-0.5 text-[11px] text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                    {dict.villa.hotspots[s.id]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mini-card estilo hotel */}
          <div className="h-fit rounded-3xl bg-white p-7 text-ink md:p-8">
            <p className="eyebrow text-arena">{item.espacio}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-ink/65">{dict.villa.copy[active]}</p>
            <ul className="mt-3 space-y-1 text-sm text-ink/70">
              {item.bullets.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => toggleSelect(active)}
                className={`rounded-full px-5 py-2.5 font-semibold ${
                  selected.includes(active)
                    ? "bg-ink text-white"
                    : "bg-navy text-white hover:brightness-125"
                }`}
              >
                {selected.includes(active) ? dict.villa.added : dict.villa.add}
              </button>
              <a
                href="#contacto"
                className="rounded-full border border-ink/15 px-5 py-2.5 font-semibold text-ink"
              >
                {selected.length > 0
                  ? dict.villa.continueWith.replace("{n}", String(selected.length))
                  : dict.villa.continue}
              </a>
            </div>
            <p className="mt-4 text-xs text-ink/45">
              {selected.length === 1
                ? dict.villa.selectionOne
                : dict.villa.selectionMany.replace("{n}", String(selected.length))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
