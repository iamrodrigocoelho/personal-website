import type { MetadataRoute } from "next";
import { BLOG_SEGMENT, getSortedPosts, postUrl } from "@/lib/blog";
import { LANGS, alternateLanguages, langUrl } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: langUrl(lang),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternateLanguages() },
  }));

  const blogIndex: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: langUrl(lang, BLOG_SEGMENT),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: { languages: alternateLanguages(BLOG_SEGMENT) },
  }));

  // Every post exists in both locales under the same slug, so each URL carries
  // the full hreflang set — same contract as the home page.
  const posts: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    getSortedPosts().map((post) => ({
      url: postUrl(lang, post.slug),
      lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      alternates: {
        languages: alternateLanguages(`${BLOG_SEGMENT}/${post.slug}`),
      },
    })),
  );

  return [...home, ...blogIndex, ...posts];
}
