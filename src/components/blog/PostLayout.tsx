import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogChrome } from "@/components/blog/BlogChrome";
import { Newsletter } from "@/components/blog/Newsletter";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LinkedInIcon } from "@/components/ui/Icons";
import { getBlogUi } from "@/content/blog/ui";
import {
  blogHref,
  formatPostDate,
  postHref,
  postJsonLd,
  readingTimeLabel,
} from "@/lib/blog";
import { LANGS, getContent, langHref } from "@/lib/i18n";
import type { BlogPostMetadata } from "@/types/blog";
import type { Lang } from "@/types/content";

interface PostLayoutProps {
  post: BlogPostMetadata;
  lang: Lang;
  children: React.ReactNode;
}

/**
 * Shared shell for every post page: chrome, breadcrumb, article header,
 * body column, newsletter and BlogPosting schema.
 *
 * A post page only supplies its metadata entry and its body, so all posts stay
 * visually consistent without repeating layout code.
 */
export function PostLayout({ post, lang, children }: PostLayoutProps) {
  const ui = getBlogUi(lang);
  const { links } = getContent(lang);

  // Both locales share the slug, so the toggle lands on the translation.
  const languagePaths = Object.fromEntries(
    LANGS.map((l) => [l, postHref(l, post.slug)]),
  ) as Record<Lang, string>;

  return (
    <BlogChrome lang={lang} languagePaths={languagePaths}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postJsonLd(post, lang)),
        }}
      />

      <article>
        {/* Header */}
        <header className="pt-32 pb-10">
          <div className="mx-auto max-w-3xl px-6">
            <nav
              aria-label={ui.breadcrumbBlog}
              className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#6b7280]"
            >
              <Link
                href={langHref(lang)}
                className="hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              >
                {ui.breadcrumbHome}
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={blogHref(lang)}
                className="hover:text-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
              >
                {ui.breadcrumbBlog}
              </Link>
            </nav>

            <ul
              className="mb-5 flex flex-wrap gap-1.5"
              role="list"
              aria-label={ui.tagsLabel}
            >
              {post.tags[lang].map((tag) => (
                <li key={tag}>
                  <Badge variant="outline">{tag}</Badge>
                </li>
              ))}
            </ul>

            <h1 className="mb-5 text-[30px] sm:text-[40px] font-semibold leading-[1.1] tracking-[-0.015em] text-[#111111]">
              {post.title[lang]}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-[#374151]">
              {post.description[lang]}
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-[#e5e7eb] pt-6 text-sm text-[#6b7280]">
              <span className="font-medium text-[#374151]">
                {ui.byLabel} {post.author}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt, lang)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{readingTimeLabel(post.readingMinutes, lang)}</span>
              {post.updatedAt && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {ui.updatedOnLabel}{" "}
                    <time dateTime={post.updatedAt}>
                      {formatPostDate(post.updatedAt, lang)}
                    </time>
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="mx-auto max-w-5xl px-6 pb-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#f8f9fa]">
              <Image
                src={post.coverImage}
                alt={post.coverAlt?.[lang] ?? ""}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 pb-16">{children}</div>

        {/* Post footer */}
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <div className="flex flex-col gap-6 border-t border-[#e5e7eb] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={blogHref(lang)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {ui.backToBlog}
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6b7280]">{ui.sharePrompt}</span>
              <Button
                href={links.linkedin}
                external
                variant="secondary"
                size="md"
              >
                <LinkedInIcon size={16} />
                {ui.shareOnLinkedIn}
              </Button>
            </div>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <Newsletter lang={lang} fallbackEmail={links.email} />
      </div>
    </BlogChrome>
  );
}
