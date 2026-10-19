/**
 * Datos públicos de la empresa en una sola fuente.
 *
 * PENDIENTE (bloqueado por el cliente): razón social, CIF/NIF, correo de contacto
 * y datos registrales. Mientras estén vacíos, las páginas legales muestran
 * «Por completar» en cada campo y un aviso de borrador.
 *
 * Al rellenarlos aquí se actualizan solas las 4 versiones de aviso legal,
 * privacidad y cookies; no hay que tocar los diccionarios.
 */
export const COMPANY = {
  /** Nombre comercial que aparece en la web. */
  name: "ComCare",
  /** PENDIENTE: razón social completa (la que figure en el CIF). */
  legalName: "",
  /** PENDIENTE: CIF / NIF. */
  taxId: "",
  address: "Carrer les Capelletes 17, 03726 Benitachell (Alicante), España",
  phone: "+34 625 322 624",
  phoneHref: "+34625322624",
  /** PENDIENTE: correo de contacto y para ejercer derechos de privacidad. */
  email: "",
  /** PENDIENTE (solo si es sociedad): inscripción en el Registro Mercantil. */
  registry: "",
  /** Consulta para el mapa de Google. */
  mapQuery: "Carrer les Capelletes 17, 03726 Benitachell, Alicante, Spain",
};

/**
 * ¿Faltan datos del titular? Mientras sea `true`, las páginas legales muestran
 * las insignias «Por completar» + aviso de borrador, se marcan con `noindex`
 * y quedan fuera del sitemap. Al rellenar los campos de arriba, todo se activa solo.
 */
export const LEGAL_DATA_PENDING =
  !COMPANY.legalName || !COMPANY.taxId || !COMPANY.email;
