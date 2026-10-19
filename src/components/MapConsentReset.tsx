"use client";

import { useState } from "react";
import { resetMapConsent } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n/es";

/** Permite retirar el consentimiento del mapa desde la política de cookies. */
export default function MapConsentReset({ t }: { t: Dictionary["pages"]["legal"]["reset"] }) {
  const [done, setDone] = useState(false);

  const reset = () => {
    resetMapConsent();
    setDone(true);
  };

  return (
    <div className="mt-10 rounded-3xl border border-ink/10 bg-white p-6 md:p-8">
      <h2 className="font-display text-2xl font-semibold">{t.title}</h2>
      <p className="mt-2 text-ink/65">{t.text}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
      >
        {t.button}
      </button>
      {done && <p className="mt-3 text-sm font-semibold text-emerald-700">{t.done}</p>}
    </div>
  );
}
