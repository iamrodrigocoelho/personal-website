import { pt } from "@/content/pt";
import { en } from "@/content/en";
import type { Lang, SiteContent } from "@/types/content";

export const SITE_URL = "https://rodrigocoelho.me";

export const LANGS: Lang[] = ["pt", "en"];

/** BCP 47 tags used for `<html lang>` and hreflang. */
export const HTML_LANG: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
};

const CONTENT: Record<Lang, SiteContent> = { pt, en };

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

export function getContent(lang: Lang): SiteContent {
  return CONTENT[lang];
}

/**
 * Locale-prefixed path, e.g. langHref("pt", "blog/my-post") → "/pt/blog/my-post/".
 * Always trailing-slashed to match `trailingSlash: true` in next.config.
 */
export function langHref(lang: Lang, path = ""): string {
  const segment = path.replace(/^\/+|\/+$/g, "");
  return segment ? `/${lang}/${segment}/` : `/${lang}/`;
}

export function langUrl(lang: Lang, path = ""): string {
  return `${SITE_URL}${langHref(lang, path)}`;
}

/**
 * hreflang map for every locale plus x-default, which tells search engines
 * which version to serve when no language matches. Portuguese is the default.
 * Pass a path to map a nested route (the blog) instead of the home page.
 */
export function alternateLanguages(path = ""): Record<string, string> {
  const languages: Record<string, string> = { "x-default": langUrl("pt", path) };
  for (const lang of LANGS) {
    languages[HTML_LANG[lang]] = langUrl(lang, path);
  }
  return languages;
}
