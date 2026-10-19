import type { ServiceId } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/es";
import { routeHref } from "@/lib/routes";

/** Chips de enlazado interno hacia páginas de servicio. */
export default function ServiceLinks({
  ids,
  label,
  dict,
  locale,
}: {
  ids: ServiceId[];
  label: string;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <div>
      <p className="eyebrow text-arena">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {ids.map((id) => (
          <a
            key={id}
            href={routeHref(locale, "service", id)}
            className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink/75 hover:border-ink/35 hover:text-ink"
          >
            {dict.solutions.short[id]}
          </a>
        ))}
      </div>
    </div>
  );
}
