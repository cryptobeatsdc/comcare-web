import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { I18nProvider } from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

/** Envoltorio común de las páginas interiores: provider, navbar, formulario y pie. */
export default function PageShell({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <I18nProvider dict={dict} locale={locale}>
        <main className="min-h-screen bg-marfil font-body text-ink">
          <Navbar />
          {children}
          <LeadForm />
          <Footer dict={dict} locale={locale} />
          <ChatWidget />
        </main>
      </I18nProvider>
    </MotionConfig>
  );
}
