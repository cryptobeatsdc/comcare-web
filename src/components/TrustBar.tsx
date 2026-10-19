import { BRANDS } from "@/lib/catalog";
import type { Dictionary } from "@/lib/i18n/es";

export default function TrustBar({ t }: { t: Dictionary["trust"] }) {
  return (
    <section className="w-full bg-marfil py-8" aria-label={t.aria}>
      <p className="px-6 text-center text-sm tracking-wide text-ink/45">
        {t.prefix} {BRANDS.join(" · ")}
      </p>
    </section>
  );
}
