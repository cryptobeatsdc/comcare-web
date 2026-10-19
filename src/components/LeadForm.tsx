"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATALOG, ORGANIZATION_ID, type ServiceId } from "@/lib/catalog";
import { FadeIn } from "@/components/Reveal";
import { useI18n } from "@/components/I18nProvider";
import { routeHref } from "@/lib/routes";

type State = "idle" | "sending" | "ok" | "error";

const LANG_OPTIONS = ["ES", "EN", "NL", "DE", "FR"] as const;

export default function LeadForm() {
  const { dict, locale } = useI18n();
  const [open, setOpen] = useState<string | null>(null);
  const [doneServ, setDoneServ] = useState(false);
  const [doneDatos, setDoneDatos] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [servicio, setServicio] = useState<ServiceId | null>(null);
  const [openSel, setOpenSel] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [idioma, setIdioma] = useState(() => {
    const up = locale.toUpperCase();
    return (LANG_OPTIONS as readonly string[]).includes(up) ? up : "ES";
  });
  const [mensaje, setMensaje] = useState("");
  const [privacidad, setPrivacidad] = useState(false);

  const pasos = [
    { id: "servicio", label: dict.lead.stepLabels.servicio },
    { id: "datos", label: dict.lead.stepLabels.datos },
    { id: "mensaje", label: dict.lead.stepLabels.mensaje },
  ];

  useEffect(() => {
    if (!hint) return;
    const t = window.setTimeout(() => setHint(null), 2600);
    return () => window.clearTimeout(t);
  }, [hint ]);

  const unlocked = (id: string): boolean => {
    if (id === "servicio") return true;
    if (id === "datos") return doneServ;
    return doneServ && doneDatos;
  };

  const press = (id: string) => {
    if (!unlocked(id)) {
      setHint(id === "datos" ? dict.lead.hintNeedService : dict.lead.hintNeedDetails);
      return;
    }
    setOpen(open === id ? null : id);
  };

  const suggestion = (): string => {
    if (!doneServ) return dict.lead.tipServicio;
    if (!doneDatos) return dict.lead.tipDatos;
    return dict.lead.tipMensaje;
  };

  const checkDatos = (): boolean => {
    const issues: Record<string, string[]> = {};
    if (nombre.trim().length < 2) issues.nombre = [dict.lead.errName];
    if (telefono.trim().length < 6) issues.telefono = [dict.lead.errPhone];
    setFieldErrors(issues);
    return Object.keys(issues).length === 0;
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!servicio) {
      setOpen("servicio");
      return;
    }
    const issues: Record<string, string[]> = {};
    if (nombre.trim().length < 2) issues.nombre = [dict.lead.errName];
    if (telefono.trim().length < 6) issues.telefono = [dict.lead.errPhone];
    if (mensaje.trim().length < 10) issues.mensaje = [dict.lead.errMsg];
    if (!privacidad) issues.privacidad = [dict.lead.errPrivacy];
    setFieldErrors(issues);
    if (Object.keys(issues).length > 0) return;
    setState("sending");
    setError(null);
    let villa: string[] = [];
    try {
      const raw = window.localStorage.getItem("villa-selection");
      if (raw) {
        const arr: unknown = JSON.parse(raw);
        if (Array.isArray(arr)) {
          villa = arr.filter((x): x is string => typeof x === "string");
        }
      }
    } catch {}
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organizationId: ORGANIZATION_ID,
          nombre: nombre.trim(),
          telefono: telefono.trim(),
          idioma,
          servicio,
          villa,
          mensaje: mensaje.trim(),
          privacidad,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setState("error");
        setError(json.error ?? dict.lead.errSend);
        if (json.issues) setFieldErrors(json.issues);
        return;
      }
      setState("ok");
      try {
        localStorage.removeItem("villa-selection");
      } catch {}
      setNombre("");
      setTelefono("");
      setMensaje("");
      setPrivacidad(false);
    } catch {
      setState("error");
      setError(dict.lead.errNet);
    }
  }

  const done = (id: string): boolean =>
    id === "servicio" ? doneServ : id === "datos" ? doneDatos : false;

  return (
    <section id="contacto" className="w-full scroll-mt-28 bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {dict.lead.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/60">{dict.lead.sub}</p>
          <p className="mt-2 text-sm text-white/60">
            {dict.lead.or} <a className="text-solar" href="tel:+34625322624">(+34) 625 322 624</a>
            {" · "}
            <a className="text-solar" href="https://wa.me/34625322624" target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="list" aria-label={dict.lead.stepsAria}>
          {pasos.map((p) => {
            const on = open === p.id;
            const ok = done(p.id);
            const lock = !unlocked(p.id);
            return (
              <button
                key={p.id}
                type="button"
                aria-expanded={on}
                onClick={() => press(p.id)}
                className={`relative flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] transition ${
                  on
                    ? "text-white"
                    : lock
                      ? "cursor-not-allowed text-white/30"
                      : "text-white/50 hover:text-white/80"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="quote-step-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                {ok && !on && (
                  <span aria-hidden className="relative flex h-5 w-5 items-center justify-center rounded-full bg-solar text-[11px] font-bold text-ink">
                    ✓
                  </span>
                )}
                <span className={`relative font-semibold ${on || ok ? "" : "font-normal"}`}>
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 min-h-[28px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p
              key={hint ?? suggestion()}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className={`text-sm ${hint ? "font-semibold text-solar" : "text-white/55"}`}
            >
              {hint ?? suggestion()}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-6 text-left">
          <AnimatePresence mode="wait" initial={false}>
            {open === null && (
              <motion.div
                key="vacio"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-10 text-center md:p-14">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-[100%] bg-solar/15 blur-2xl"
                  />
                  <p className="font-display relative text-2xl font-semibold text-white md:text-3xl">
                    {dict.lead.inviteTitle}
                  </p>
                  <p className="relative mx-auto mt-2 max-w-md text-white/60">{dict.lead.inviteSub}</p>
                  <button
                    type="button"
                    onClick={() => setOpen("servicio")}
                    className="group relative mx-auto mt-7 flex items-center gap-3 rounded-full bg-white py-2 pl-8 pr-2 font-semibold text-ink"
                  >
                    {dict.lead.inviteCta}
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy text-xl text-white">
                      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-navy/40" />
                      <span aria-hidden className="relative">+</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {open === "servicio" && (
              <motion.div
                key="servicio"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="rounded-3xl bg-marfil p-6 text-ink md:p-8">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{dict.lead.serviceTitle}</h3>
                  <button
                    type="button"
                    onClick={() => setOpenSel(!openSel)}
                    aria-expanded={openSel}
                    className="mt-5 flex w-full items-center justify-between gap-4 rounded-2xl border border-ink/15 bg-white p-5 text-left"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink/45">{dict.lead.serviceLabel}</span>
                      <span className={`mt-0.5 block text-lg ${servicio ? "font-semibold" : "font-normal text-ink/40"}`}>
                        {servicio ? dict.catalog[servicio].title : dict.lead.servicePlaceholder}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-marfil text-xl transition-transform ${openSel ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {openSel && (
                    <div className="mt-2 overflow-hidden rounded-2xl border border-ink/10 bg-white" role="listbox" aria-label={dict.lead.listAria}>
                      {CATALOG.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          role="option"
                          aria-selected={servicio === s.id}
                          onClick={() => {
                            setServicio(s.id);
                            setOpenSel(false);
                          }}
                          className={`flex w-full items-center justify-between gap-3 border-b border-ink/5 px-5 py-3.5 text-left last:border-0 hover:bg-marfil ${
                            servicio === s.id ? "bg-marfil font-semibold" : ""
                          }`}
                        >
                          <span>{dict.catalog[s.id].title}</span>
                          <span className="shrink-0 text-xs uppercase tracking-wide text-ink/40">
                            {dict.catalog[s.id].espacio}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                  <AnimatePresence initial={false}>
                    {servicio && !openSel && (
                      <motion.div
                        key={servicio}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 rounded-2xl border border-ink/10 bg-white p-5">
                          <p className="text-sm text-ink/55">{dict.catalog[servicio].dolor}</p>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {dict.catalog[servicio].bullets.map((b) => (
                              <li key={b} className="rounded-full bg-marfil px-3 py-1 text-xs text-ink/70">
                                {b}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => {
                              setDoneServ(true);
                              setOpen("datos");
                            }}
                            className="mt-4 w-full rounded-full bg-navy py-3 text-sm font-semibold text-white"
                          >
                            {dict.lead.confirm}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {open === "datos" && (
              <motion.div
                key="datos"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="rounded-3xl bg-marfil p-6 text-ink md:p-8">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{dict.lead.dataTitle}</h3>
                  <div className="mt-5 grid gap-4">
                    <label className="text-sm font-semibold">
                      {dict.lead.nameLabel}
                      <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5" placeholder={dict.lead.namePlaceholder} />
                      {fieldErrors.nombre && <span className="font-normal text-red-600">{fieldErrors.nombre[0]}</span>}
                    </label>
                    <label className="text-sm font-semibold">
                      {dict.lead.phoneLabel}
                      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5" placeholder="+34 ..." />
                      {fieldErrors.telefono && <span className="font-normal text-red-600">{fieldErrors.telefono[0]}</span>}
                    </label>
                    <label className="text-sm font-semibold">
                      {dict.lead.langLabel}
                      <select value={idioma} onChange={(e) => setIdioma(e.target.value)} className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5">
                        {LANG_OPTIONS.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button type="button" onClick={() => setOpen("servicio")} className="rounded-full border border-ink/15 bg-white px-6 py-3">
                      {dict.lead.back}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (checkDatos()) {
                          setDoneDatos(true);
                          setOpen("mensaje");
                        }
                      }}
                      className="flex-1 rounded-full bg-navy py-3.5 font-semibold text-white"
                    >
                      {dict.lead.continue}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {open === "mensaje" && (
              <motion.div
                key="mensaje"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="rounded-3xl bg-marfil p-6 text-ink md:p-8">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{dict.lead.msgTitle}</h3>
                  <form onSubmit={onSubmit}>
                    <label className="mt-5 block text-sm font-semibold">
                      {dict.lead.msgLabel}
                      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-ink/15 bg-white px-3 py-2.5" placeholder={dict.lead.msgPlaceholder} />
                      {fieldErrors.mensaje && <span className="font-normal text-red-600">{fieldErrors.mensaje[0]}</span>}
                    </label>
                    <label className="mt-3 flex items-start gap-2 text-xs text-ink/60">
                      <input type="checkbox" checked={privacidad} onChange={(e) => setPrivacidad(e.target.checked)} className="mt-1" />
                      <span>
                        {dict.lead.privacy}{" "}
                        <a
                          href={routeHref(locale, "legalDoc", "privacidad")}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-ink"
                        >
                          {dict.lead.privacyLink}
                        </a>
                      </span>
                    </label>
                    {fieldErrors.privacidad && <p className="mt-1 text-sm text-red-600">{fieldErrors.privacidad[0]}</p>}
                    <div className="mt-6 flex gap-3">
                      <button type="button" onClick={() => setOpen("datos")} className="rounded-full border border-ink/15 bg-white px-6 py-3">
                        {dict.lead.back}
                      </button>
                      <button type="submit" disabled={state === "sending"} className="flex-1 rounded-full bg-solar py-3.5 font-semibold text-ink disabled:opacity-60">
                        {state === "sending" ? dict.lead.sending : dict.lead.submit}
                      </button>
                    </div>
                    {state === "ok" && <p className="mt-3 text-sm text-emerald-700">{dict.lead.ok}</p>}
                    {state === "error" && error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
