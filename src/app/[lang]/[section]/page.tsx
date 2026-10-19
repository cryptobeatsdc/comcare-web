import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { buildAlternates, routeHref, ROUTE_SEGMENTS, SECTION_KEYS, sectionFromSegment } from "@/lib/routes";
import { breadcrumbJsonLd, OG_LOCALE } from "@/lib/seo";
import { LEGAL_DATA_PENDING } from "@/lib/company";
import JsonLd from "@/components/JsonLd";
import BusinessView from "@/components/BusinessView";
import { LegalHub } from "@/components/LegalView";
import RemoteView from "@/components/RemoteView";
import ServicesView from "@/components/ServicesView";

interface Props {
  params: Promise<{ lang: string; section: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    SECTION_KEYS.map((key) => ({ lang, section: ROUTE_SEGMENTS[key][lang] }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, section } = await params;
  if (!isLocale(lang)) return {};
  const key = sectionFromSegment(lang, section);
  if (!key) return {};
  const dict = getDictionary(lang);
  const meta =
    key === "services"
      ? dict.pages.services
      : key === "business"
        ? dict.pages.business
        : key === "remote"
          ? dict.pages.remote
          : dict.pages.legal;
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    // Mientras falten los datos del titular, el índice legal no debe indexarse.
    ...(key === "legal" && LEGAL_DATA_PENDING
      ? { robots: { index: false, follow: true } }
      : {}),
    alternates: buildAlternates(lang, key),
    openGraph: {
      type: "website",
      siteName: dict.nav.brand,
      locale: OG_LOCALE[lang],
      url: routeHref(lang, key),
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [{ url: "/img/hero.jpg", width: 2000, height: 1333, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: ["/img/hero.jpg"],
    },
  };
}

export default async function SectionPage({ params }: Props) {
  const { lang, section } = await params;
  if (!isLocale(lang)) redirect(`/${DEFAULT_LOCALE}`);
  const key = sectionFromSegment(lang, section);
  if (!key) notFound();
  const dict = getDictionary(lang);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.meta.home, path: routeHref(lang, "home") },
          {
            name:
              key === "services"
                ? dict.pages.services.eyebrow
                : key === "business"
                  ? dict.pages.business.eyebrow
                  : key === "remote"
                    ? dict.pages.remote.eyebrow
                    : dict.pages.legal.eyebrow,
            path: routeHref(lang, key),
          },
        ])}
      />
      {key === "services" ? (
        <ServicesView dict={dict} locale={lang} />
      ) : key === "business" ? (
        <BusinessView dict={dict} locale={lang} />
      ) : key === "remote" ? (
        <RemoteView dict={dict} locale={lang} />
      ) : (
        <LegalHub dict={dict} locale={lang} />
      )}
    </>
  );
}
