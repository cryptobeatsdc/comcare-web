import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-marfil px-6 text-center text-ink">
      <p className="eyebrow text-arena">404</p>
      <h1 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
        Página no encontrada · Page not found
      </h1>
      <p className="mt-2 text-sm text-arena">Pagina niet gevonden · Seite nicht gefunden</p>
      <Link
        href="/"
        className="btn-roll mt-8 inline-block rounded-full bg-navy px-8 py-4 font-semibold text-white"
      >
        <span className="btn-labels">
          <span className="btn-track">
            <span className="block">Volver al inicio</span>
            <span className="block">Back to home</span>
          </span>
        </span>
      </Link>
    </main>
  );
}
