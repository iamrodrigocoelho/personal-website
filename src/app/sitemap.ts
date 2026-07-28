import type { MetadataRoute } from "next";
import { LANGS, alternateLanguages, langUrl } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LANGS.map((lang) => ({
    url: langUrl(lang),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternateLanguages() },
  }));
}
