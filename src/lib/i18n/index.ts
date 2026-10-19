import type { Locale } from "./config";
import { de } from "./de";
import { en } from "./en";
import { es, type Dictionary } from "./es";
import { nl } from "./nl";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { es, en, nl, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
