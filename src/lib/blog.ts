import type { Metadata } from "next";
import { BLOG_POSTS } from "@/content/blog/posts";
import { getBlogUi } from "@/content/blog/ui";
import { HTML_LANG, alternateLanguages, langHref, langUrl } from "@/lib/i18n";
import type { BlogPostMetadata } from "@/types/blog";
import type { Lang } from "@/types/content";

/** Route segment the whole blog hangs from. */
export const BLOG_SEGMENT = "blog";

/** Newest first. Sorting happens here so no page has to remember to do it. */
export function getSortedPosts(): BlogPostMetadata[] {
  return [...BLOG_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

/**
 * The highlight slot takes an explicitly `featured` post, and otherwise the
 * most recent one — so the listing is never left without a lead story.
 */
export function getFeaturedPost(): BlogPostMetadata | undefined {
  const posts = getSortedPosts();
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getPostBySlug(slug: string): BlogPostMetadata | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Same as getPostBySlug, but fails the build instead of rendering a post page
 * with no metadata — the two live in different files and must stay in sync.
 */
export function requirePost(slug: string): BlogPostMetadata {
  const post = getPostBySlug(slug);
  if (!post) {
    throw new Error(
      `No metadata for blog post "${slug}". Add it to src/content/blog/posts.ts.`,
    );
  }
  return post;
}

export function blogHref(lang: Lang): string {
  return langHref(lang, BLOG_SEGMENT);
}

export function postHref(lang: Lang, slug: string): string {
  return langHref(lang, `${BLOG_SEGMENT}/${slug}`);
}

export function postUrl(lang: Lang, slug: string): string {
  return langUrl(lang, `${BLOG_SEGMENT}/${slug}`);
}

/**
 * Dates are stored as plain ISO days. Anchoring to midday UTC keeps the
 * rendered day from shifting backwards in negative-offset time zones.
 */
export function formatPostDate(isoDate: string, lang: Lang): string {
  return new Intl.DateTimeFormat(HTML_LANG[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00Z`));
}

export function readingTimeLabel(minutes: number, lang: Lang): string {
  return `${minutes} ${getBlogUi(lang).readingTimeSuffix}`;
}

/**
 * Shared <head> for every post page: canonical, hreflang and an `article`
 * OpenGraph card. Each post's own opengraph-image.tsx is merged in by Next.
 */
export function buildPostMetadata(
  post: BlogPostMetadata,
  lang: Lang,
): Metadata {
  const path = `${BLOG_SEGMENT}/${post.slug}`;
  const title = post.title[lang];
  const description = post.description[lang];

  return {
    title: `${title} | Rodrigo Coelho`,
    description,
    authors: [{ name: post.author, url: langUrl(lang) }],
    keywords: post.tags[lang],
    alternates: {
      canonical: langUrl(lang, path),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: "article",
      url: langUrl(lang, path),
      title,
      description,
      siteName: "Rodrigo Coelho",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags[lang],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Blog schema for the listing page, with one entry per published post. */
export function blogListJsonLd(lang: Lang) {
  const ui = getBlogUi(lang);
  const url = langUrl(lang, BLOG_SEGMENT);

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: ui.seoTitle,
    description: ui.seoDescription,
    inLanguage: HTML_LANG[lang],
    url,
    author: {
      "@type": "Person",
      name: "Rodrigo Coelho",
      url: langUrl(lang),
    },
    blogPost: getSortedPosts().map((post) => ({
      "@type": "BlogPosting",
      headline: post.title[lang],
      description: post.description[lang],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      url: postUrl(lang, post.slug),
    })),
  };
}

/** BlogPosting schema, mirroring the Person schema already used site-wide. */
export function postJsonLd(post: BlogPostMetadata, lang: Lang) {
  const url = postUrl(lang, post.slug);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[lang],
    description: post.description[lang],
    inLanguage: HTML_LANG[lang],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    keywords: post.tags[lang].join(", "),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}opengraph-image`,
    author: {
      "@type": "Person",
      name: post.author,
      url: langUrl(lang),
    },
    publisher: {
      "@type": "Person",
      name: post.author,
      url: langUrl(lang),
    },
  };
}
