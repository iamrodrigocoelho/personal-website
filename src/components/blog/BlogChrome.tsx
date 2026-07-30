import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getBlogUi } from "@/content/blog/ui";
import { getContent, langHref } from "@/lib/i18n";
import type { Lang } from "@/types/content";

interface BlogChromeProps {
  lang: Lang;
  /** Translated URLs for this page, so the language toggle stays in place. */
  languagePaths: Record<Lang, string>;
  children: React.ReactNode;
}

/**
 * Header + main + Footer for blog routes, reusing the landing page chrome.
 *
 * `sectionBase` turns the nav anchors (#experiencia, #contato) into links back
 * to the home page, since those sections don't exist here.
 */
export function BlogChrome({ lang, languagePaths, children }: BlogChromeProps) {
  const content = getContent(lang);
  const ui = getBlogUi(lang);
  const home = langHref(lang);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {ui.skipToContent}
      </a>

      <Header
        content={content}
        lang={lang}
        sectionBase={home}
        languagePaths={languagePaths}
      />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer content={content} sectionBase={home} />
    </>
  );
}
