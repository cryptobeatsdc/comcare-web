-- Esquema de la tabla de leads.
-- La API la crea automáticamente en el primer envío; este archivo sirve como
-- referencia y para crearla a mano desde la consola SQL de Neon si se prefiere.

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL,
  ip TEXT NOT NULL,
  organization_id TEXT NOT NULL,
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  idioma TEXT NOT NULL,
  servicio TEXT NOT NULL,
  villa JSONB NOT NULL DEFAULT '[]'::jsonb,
  mensaje TEXT NOT NULL,
  privacidad BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx
  ON leads (created_at DESC);
