import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/es";

export default function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="grid w-full gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16 xl:px-24">
        <div>
          <h2 className="font-display text-4xl font-bold lg:text-5xl">{t.title}</h2>
          <p className="mt-4 text-black/60">{t.sub}</p>
        </div>
        <div>
          <Accordion.Root type="single" collapsible className="mt-8 space-y-3">
            {t.items.map((f, i) => (
              <Accordion.Item key={i} value={`i-${i}`} className="rounded-2xl border border-black/10 bg-white px-5">
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-semibold">
                  {f.q}
                  <ChevronDown size={18} />
                </Accordion.Trigger>
                <Accordion.Content className="pb-4 text-sm text-black/60">
                  {f.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
