import Link from "next/link";
import type { Lang } from "@/types/content";

interface LanguageToggleProps {
  lang: Lang;
  /**
   * Where each locale should point. Defaults to that locale's home page;
   * nested routes (a blog post) pass their own translated URLs so switching
   * language keeps the reader on the same content.
   */
  paths?: Record<Lang, string>;
}

const OPTIONS: { value: Lang; label: string; hrefLang: string }[] = [
  { value: "pt", label: "PT", hrefLang: "pt-BR" },
  { value: "en", label: "EN", hrefLang: "en" },
];

// Real links rather than state: each language is its own indexable URL, and
// the anchors give crawlers a path to the translation.
export function LanguageToggle({ lang, paths }: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center bg-[#f5f5f5] rounded-full p-1 gap-0.5"
    >
      {OPTIONS.map((option) => {
        const active = lang === option.value;
        return (
          <Link
            key={option.value}
            href={paths?.[option.value] ?? `/${option.value}/`}
            hrefLang={option.hrefLang}
            aria-current={active ? "true" : undefined}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-1 ${
              active
                ? "bg-white text-[#111111] shadow-sm"
                : "text-[#6b7280] hover:text-[#374151]"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
