/**
 * Inserta datos estructurados JSON-LD en la página.
 * El contenido es estático (viene de nuestros diccionarios), nunca de input de usuario.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
