import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getBlogUi } from "@/content/blog/ui";
import { formatPostDate, postHref, readingTimeLabel } from "@/lib/blog";
import type { BlogPostMetadata } from "@/types/blog";
import type { Lang } from "@/types/content";

interface PostCardProps {
  post: BlogPostMetadata;
  lang: Lang;
}

/**
 * Date + reading time, shared by both card shapes.
 * <time> carries the machine-readable date; the label is localized.
 */
function PostMeta({ post, lang }: PostCardProps) {
  return (
    <span className="flex items-center gap-2 text-xs text-[#898989]">
      <time dateTime={post.publishedAt}>
        {formatPostDate(post.publishedAt, lang)}
      </time>
      <span aria-hidden="true">·</span>
      <span>{readingTimeLabel(post.readingMinutes, lang)}</span>
    </span>
  );
}

function TagList({ post, lang }: PostCardProps) {
  const ui = getBlogUi(lang);
  return (
    <ul
      className="flex flex-wrap gap-1.5"
      role="list"
      aria-label={ui.tagsLabel}
    >
      {post.tags[lang].map((tag) => (
        <li key={tag}>
          <Badge variant="outline">{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}

/**
 * The title link stretches over the whole card via ::after, so the card is
 * clickable while the accessible name stays the post title.
 */
export function PostCard({ post, lang }: PostCardProps) {
  const ui = getBlogUi(lang);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-shadow focus-within:ring-2 focus-within:ring-[#111111] focus-within:ring-offset-2 hover:shadow-sm">
      {post.coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f8f9fa]">
          <Image
            src={post.coverImage}
            alt={post.coverAlt?.[lang] ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} lang={lang} />

        <h3 className="mt-3 text-[17px] font-semibold leading-snug text-[#111111]">
          <Link
            href={postHref(lang, post.slug)}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {post.title[lang]}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">
          {post.description[lang]}
        </p>

        <div className="mt-4">
          <TagList post={post} lang={lang} />
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] transition-opacity group-hover:opacity-70">
          {ui.readLabel}
          <ArrowRight size={13} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

/** Lead story: wider layout, larger type, and the highlight pill. */
export function FeaturedPostCard({ post, lang }: PostCardProps) {
  const ui = getBlogUi(lang);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition-shadow focus-within:ring-2 focus-within:ring-[#111111] focus-within:ring-offset-2 hover:shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {post.coverImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f8f9fa] lg:col-span-5 lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt?.[lang] ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover"
            />
          </div>
        )}

        <div
          className={`p-8 sm:p-10 ${post.coverImage ? "lg:col-span-7" : "lg:col-span-12"}`}
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f5] px-2.5 py-1 text-xs font-medium text-[#374151]">
              <Star size={11} fill="currentColor" aria-hidden="true" />
              {ui.featuredLabel}
            </span>
            <PostMeta post={post} lang={lang} />
          </div>

          <h3 className="mb-4 max-w-2xl text-[24px] sm:text-[30px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#111111]">
            <Link
              href={postHref(lang, post.slug)}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {post.title[lang]}
            </Link>
          </h3>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#374151]">
            {post.description[lang]}
          </p>

          <TagList post={post} lang={lang} />

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] transition-opacity group-hover:opacity-70">
            {ui.readLabel}
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
