import { requirePost } from "@/lib/blog";
import { OG_CONTENT_TYPE, OG_SIZE, renderPostOgImage } from "@/lib/blog-og";
import { LANGS } from "@/lib/i18n";

const post = requirePost("refauna-slm-qwen3-fine-tuning-rag");

export const alt = post.title.pt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Image({
  params,
}: PageProps<"/[lang]/blog/refauna-slm-qwen3-fine-tuning-rag">) {
  const { lang } = await params;
  return renderPostOgImage(post, lang);
}
