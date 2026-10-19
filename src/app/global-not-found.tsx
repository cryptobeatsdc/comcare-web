import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Página no encontrada · Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
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
      </body>
    </html>
  );
}
