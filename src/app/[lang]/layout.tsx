import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { OG_LOCALE, SITE_URL } from "@/lib/seo";
import "../globals.css";

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

interface Props {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Props["params"];
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        nl: "/nl",
        de: "/de",
        "x-default": `/${DEFAULT_LOCALE}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.nav.brand,
      locale: OG_LOCALE[locale],
      url: `/${locale}`,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: "/img/hero.jpg", width: 2000, height: 1333, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/img/hero.jpg"],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) redirect(`/${DEFAULT_LOCALE}`);

  return (
    <html lang={lang}>
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
