"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";

interface I18nValue {
  dict: Dictionary;
  locale: Locale;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  dict,
  locale,
  children,
}: I18nValue & { children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ dict, locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n debe usarse dentro de <I18nProvider>");
  return value;
}
