import { z } from "zod";
import { CATALOG } from "@/lib/catalog";

const serviceIds = CATALOG.map((s) => s.id) as [string, ...string[]];

export const leadSchema = z.object({
  organizationId: z.string().min(1).default("org_comcare_benitachell"),
  nombre: z.string().trim().min(2, "Indica tu nombre").max(80),
  telefono: z.string().trim().min(6, "Teléfono/WhatsApp inválido").max(30),
  idioma: z.enum(["ES", "EN", "NL", "DE", "FR"]),
  servicio: z.enum(serviceIds),
  villa: z.array(z.enum(serviceIds)).max(6).default([]),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(2000),
  privacidad: z.boolean().refine((v) => v === true, {
    message: "Debes aceptar la privacidad",
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;
