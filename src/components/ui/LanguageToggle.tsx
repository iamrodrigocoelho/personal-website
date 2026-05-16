"use client";

import type { Lang } from "@/types/content";

interface LanguageToggleProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
}

export function LanguageToggle({ lang, onChange }: LanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center bg-[#f5f5f5] rounded-full p-1 gap-0.5"
    >
      <button
        onClick={() => onChange("pt")}
        aria-pressed={lang === "pt"}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-1 ${
          lang === "pt"
            ? "bg-white text-[#111111] shadow-sm"
            : "text-[#6b7280] hover:text-[#374151]"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => onChange("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-1 ${
          lang === "en"
            ? "bg-white text-[#111111] shadow-sm"
            : "text-[#6b7280] hover:text-[#374151]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
