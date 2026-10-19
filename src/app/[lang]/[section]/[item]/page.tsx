import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CATALOG } from "@/lib/catalog";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import {
  buildAlternates,
  LEGAL_DOCS,
  LEGAL_SLUGS,
  legalDocFromSlug,
  routeHref,
  ROUTE_SEGMENTS,
  sectionFromSegment,
  SERVICE_SLUGS,
  serviceIdFromSlug,
} from "@/lib/routes";
import { breadcrumbJsonLd, OG_LOCALE } from "@/lib/seo";
import { COMPANY, LEGAL_DATA_PENDING } from "@/lib/company";
import JsonLd from "@/components/JsonLd";
import { LegalDocPage } from "@/components/LegalView";
import ServiceDetailView from "@/components/ServiceDetailView";

interface Props {
  params: Promise<{ lang: string; section: string; item: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => [
    ...CATALOG.map((s) => ({
      lang,
      section: ROUTE_SEGMENTS.services[lang],
      item: SERVICE_SLUGS[s.id][lang],
    })),
    ...LEGAL_DOCS.map((doc) => ({
      lang,
      section: ROUTE_SEGMENTS.legal[lang],
      item: LEGAL_SLUGS[doc][lang],
    })),
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, section, item } = await params;
  if (!isLocale(lang)) return {};
  const key = sectionFromSegment(lang, section);
  const dict = getDictionary(lang);

  if (key === "legal") {
    const doc = legalDocFromSlug(lang, item);
    if (!doc) return {};
    return {
      title: `${dict.pages.legal.docs[doc].title} — ${COMPANY.name}`,
      description: dict.pages.legal.hub[doc].desc,
      // Borrador con datos pendientes: accesible, pero fuera del índice de Google.
      ...(LEGAL_DATA_PENDING ? { robots: { index: false, follow: true } } : {}),
      alternates: buildAlternates(lang, "legalDoc", doc),
      openGraph: {
        type: "website",
        siteName: dict.nav.brand,
        locale: OG_LOCALE[lang],
        url: routeHref(lang, "legalDoc", doc),
        title: dict.pages.legal.docs[doc].title,
        description: dict.pages.legal.hub[doc].desc,
        images: [{ url: "/img/hero.jpg", width: 2000, height: 1333, alt: dict.meta.ogAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: dict.pages.legal.docs[doc].title,
        description: dict.pages.legal.hub[doc].desc,
        images: ["/img/hero.jpg"],
      },
    };
  }

  const id = key === "services" ? serviceIdFromSlug(lang, item) : null;
  if (!id) return {};
  return {
    title: dict.catalog[id].metaTitle,
    description: dict.catalog[id].short,
    alternates: buildAlternates(lang, "service", id),
    openGraph: {
      type: "website",
      siteName: dict.nav.brand,
      locale: OG_LOCALE[lang],
      url: routeHref(lang, "service", id),
      title: dict.catalog[id].metaTitle,
      description: dict.catalog[id].short,
      images: [{ url: "/img/hero.jpg", width: 2000, height: 1333, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.catalog[id].metaTitle,
      description: dict.catalog[id].short,
      images: ["/img/hero.jpg"],
    },
  };
}

export default async function ServiceItemPage({ params }: Props) {
  const { lang, section, item } = await params;
  if (!isLocale(lang)) redirect(`/${DEFAULT_LOCALE}`);
  const key = sectionFromSegment(lang, section);
  const dict = getDictionary(lang);

  if (key === "legal") {
    const doc = legalDocFromSlug(lang, item);
    if (!doc) notFound();
    return (
      <>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: dict.meta.home, path: routeHref(lang, "home") },
            { name: dict.pages.legal.eyebrow, path: routeHref(lang, "legal") },
            {
              name: dict.pages.legal.docs[doc].title,
              path: routeHref(lang, "legalDoc", doc),
            },
          ])}
        />
        <LegalDocPage dict={dict} locale={lang} doc={doc} />
      </>
    );
  }

  const id = key === "services" ? serviceIdFromSlug(lang, item) : null;
  if (!id) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: dict.meta.home, path: routeHref(lang, "home") },
          { name: dict.pages.services.eyebrow, path: routeHref(lang, "services") },
          { name: dict.solutions.short[id], path: routeHref(lang, "service", id) },
        ])}
      />
      <ServiceDetailView dict={dict} locale={lang} id={id} />
    </>
  );
}
