import type { Lang } from "@/types/content";

/**
 * Every string shown to the reader exists in both locales, mirroring how
 * `src/content/{pt,en}.ts` handle the rest of the site.
 */
export type Localized<T> = Record<Lang, T>;

export interface BlogPostMetadata {
  /** URL segment — the same in both locales, so /pt/blog/x and /en/blog/x pair up. */
  slug: string;
  title: Localized<string>;
  description: Localized<string>;
  /** ISO date (YYYY-MM-DD). Drives ordering and <time dateTime>. */
  publishedAt: string;
  updatedAt?: string;
  /**
   * Reading time as a number, not a string: the label ("8 min de leitura" /
   * "8 min read") is built per locale in `src/lib/blog.ts`.
   */
  readingMinutes: number;
  tags: Localized<string[]>;
  author: string;
  /** Path under /public. Cards and the post header degrade gracefully without it. */
  coverImage?: string;
  coverAlt?: Localized<string>;
  /** Forces the highlight slot. Without it the most recent post is featured. */
  featured?: boolean;
}
