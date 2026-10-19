import { MotionConfig } from "framer-motion";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { I18nProvider } from "@/components/I18nProvider";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoCapsule from "@/components/VideoCapsule";
import TrustBar from "@/components/TrustBar";
import SolutionsSlider from "@/components/SolutionsSlider";
import ConnectedSpace from "@/components/ConnectedSpace";
import Segments from "@/components/Segments";
import ProofCase from "@/components/ProofCase";
import Process from "@/components/Process";
import Statement from "@/components/Statement";
import Faq from "@/components/Faq";
import Visit from "@/components/Visit";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) redirect(`/${DEFAULT_LOCALE}`);
  const dict = getDictionary(lang);

  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider dict={dict} locale={lang}>
        <main className="min-h-screen bg-marfil font-body text-ink">
          <JsonLd data={localBusinessJsonLd(lang, dict)} />
          <JsonLd data={faqJsonLd(dict)} />
          <Navbar />
          <Hero />
          <VideoCapsule />
          <TrustBar t={dict.trust} />
          <SolutionsSlider />
          <ConnectedSpace />
          <Segments />
          <ProofCase />
          <Process t={dict.process} />
          <Statement t={dict.statement} />
          <Faq t={dict.faq} />
          <LeadForm />
          <Visit t={dict.visit} locale={lang} />
          <Footer dict={dict} locale={lang} />
          <ChatWidget />
        </main>
      </I18nProvider>
    </MotionConfig>
  );
}
