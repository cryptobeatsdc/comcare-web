export type ServiceId =
  | "soporte"
  | "redes"
  | "tv"
  | "smart"
  | "cctv"
  | "solar";

/**
 * Copy de un servicio. Vive en los diccionarios de idioma
 * (`src/lib/i18n/es.ts`, `en.ts`), no aquí.
 */
export interface ServiceCopy {
  title: string;
  short: string;
  bullets: string[];
  espacio: string;
  dolor: string;
  /** Título SEO de la página de detalle del servicio. */
  metaTitle: string;
  /** Párrafo de introducción de la página de detalle. */
  intro: string;
}

/** Datos estructurales de un servicio (independientes del idioma). */
export interface Service {
  id: ServiceId;
  foto: string;
}

export const ORGANIZATION_ID = "org_comcare_benitachell";

export const CATALOG: Service[] = [
  { id: "soporte", foto: "/img/soporte.jpg" },
  { id: "redes", foto: "/img/redes.jpg" },
  { id: "tv", foto: "/img/tv.jpg" },
  { id: "smart", foto: "/img/smart.jpg" },
  { id: "cctv", foto: "/img/cctv.jpg" },
  { id: "solar", foto: "/img/solar-roof.jpg" },
];

export const BRANDS = [
  "CanalDigitaal",
  "TV Vlaanderen",
  "Ubiquiti UniFi",
  "Foscam",
  "Victron Energy",
  "Sonos",
  "LG",
  "Samsung",
];
