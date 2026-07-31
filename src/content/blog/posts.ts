import type { BlogPostMetadata } from "@/types/blog";

/**
 * Single source of truth for post metadata.
 *
 * The body of each post lives in its own page under
 * `src/app/[lang]/blog/<slug>/page.tsx` — this file only carries what the
 * listing, the <head> and the sitemap need, so nothing is duplicated.
 *
 * Adding a post = one entry here + one folder with the same slug.
 */
export const BLOG_POSTS: BlogPostMetadata[] = [
  {
    slug: "tapirus-open-4b-qwen3-fine-tuning-rag",
    title: {
      pt: "Tapirus Open 4B: fine tuning e RAG sobre o Qwen3-4B para um domínio que os LLMs generalistas não cobrem",
      en: "Tapirus Open 4B: fine tuning and RAG on Qwen3-4B for a domain general LLMs don't cover",
    },
    description: {
      pt: "Por que treinei um modelo pequeno de linguagem especializado em refaunação e restauração de interações ecológicas, como combinei fine tuning com RAG e o que aprendi ao publicar os pesos abertos no Hugging Face.",
      en: "Why I trained a small language model specialized in refaunation and the restoration of ecological interactions, how I combined fine tuning with RAG, and what I learned publishing the open weights on Hugging Face.",
    },
    publishedAt: "2026-07-30",
    readingMinutes: 8,
    tags: {
      pt: ["SLM", "Fine Tuning", "RAG", "Qwen3", "Hugging Face", "Refauna"],
      en: ["SLM", "Fine Tuning", "RAG", "Qwen3", "Hugging Face", "Refauna"],
    },
    author: "Rodrigo Coelho",
    featured: true,
  },
];
