import type { Lang } from "@/types/content";

/**
 * Chrome strings for the blog — kept apart from `src/content/{pt,en}.ts`
 * so the landing page content files stay focused on the landing page.
 */
export interface BlogUiContent {
  /** Listing page */
  sectionLabel: string;
  title: string;
  intro: string;
  featuredLabel: string;
  latestLabel: string;
  allPostsLabel: string;
  emptyState: string;
  readLabel: string;
  readingTimeSuffix: string;
  publishedOnLabel: string;
  updatedOnLabel: string;
  tagsLabel: string;
  /** Post page */
  backToBlog: string;
  byLabel: string;
  sharePrompt: string;
  shareOnLinkedIn: string;
  /** Newsletter */
  newsletter: {
    label: string;
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    invalidEmail: string;
    error: string;
    recaptchaError: string;
    privacy: string;
  };
  /** Breadcrumb + metadata */
  breadcrumbHome: string;
  breadcrumbBlog: string;
  skipToContent: string;
  seoTitle: string;
  seoDescription: string;
}

const pt: BlogUiContent = {
  sectionLabel: "Blog",
  title: "Meus posts e artigos mais recentes",
  intro:
    "Acompanhe meus posts e artigos mais recentes sobre produto, tecnologia, IA e sustentabilidade.",
  featuredLabel: "Destaque",
  latestLabel: "Mais recente",
  allPostsLabel: "Todos os textos",
  emptyState: "Ainda não há textos publicados. Em breve.",
  readLabel: "Ler texto completo",
  readingTimeSuffix: "min de leitura",
  publishedOnLabel: "Publicado em",
  updatedOnLabel: "Atualizado em",
  tagsLabel: "Assuntos",
  backToBlog: "Voltar para o blog",
  byLabel: "Por",
  sharePrompt: "Achou útil?",
  shareOnLinkedIn: "Comentar no LinkedIn",
  newsletter: {
    label: "Newsletter",
    title: "Receba os próximos textos por e-mail",
    description:
      "Sem periodicidade fixa e sem ruído: você recebe um e-mail quando eu publico algo novo sobre produto, tecnologia e IA aplicada.",
    emailLabel: "Seu e-mail",
    emailPlaceholder: "voce@empresa.com",
    submit: "Quero receber",
    submitting: "Enviando…",
    success: "Inscrição confirmada. Obrigado por assinar!",
    invalidEmail: "Informe um e-mail válido",
    error: "Não foi possível concluir a inscrição. Tente novamente em instantes.",
    recaptchaError: "Não foi possível validar o reCAPTCHA. Recarregue a página e tente de novo.",
    privacy: "Sem spam. Você pode cancelar quando quiser.",
  },
  breadcrumbHome: "Início",
  breadcrumbBlog: "Blog",
  skipToContent: "Ir para o conteúdo principal",
  seoTitle: "Blog | Rodrigo Coelho",
  seoDescription:
    "Textos de Rodrigo Coelho sobre produto, tecnologia, inteligência artificial aplicada e sustentabilidade.",
};

const en: BlogUiContent = {
  sectionLabel: "Blog",
  title: "Notes on product, technology and applied AI",
  intro:
    "Writing about what I'm building and studying: artificial intelligence applied to concrete problems, product and technology decisions in large-scale operations, and where AI meets sustainability.",
  featuredLabel: "Featured",
  latestLabel: "Latest",
  allPostsLabel: "All posts",
  emptyState: "No posts published yet. Coming soon.",
  readLabel: "Read full post",
  readingTimeSuffix: "min read",
  publishedOnLabel: "Published on",
  updatedOnLabel: "Updated on",
  tagsLabel: "Topics",
  backToBlog: "Back to the blog",
  byLabel: "By",
  sharePrompt: "Found this useful?",
  shareOnLinkedIn: "Discuss on LinkedIn",
  newsletter: {
    label: "Newsletter",
    title: "Get the next posts by email",
    description:
      "No fixed schedule and no noise: you get an email when I publish something new on product, technology and applied AI.",
    emailLabel: "Your email",
    emailPlaceholder: "you@company.com",
    submit: "Subscribe",
    submitting: "Sending…",
    success: "You're subscribed. Thank you!",
    invalidEmail: "Enter a valid email address",
    error: "We couldn't complete your subscription. Please try again in a moment.",
    recaptchaError: "We couldn't validate reCAPTCHA. Reload the page and try again.",
    privacy: "No spam. Unsubscribe whenever you want.",
  },
  breadcrumbHome: "Home",
  breadcrumbBlog: "Blog",
  skipToContent: "Skip to main content",
  seoTitle: "Blog | Rodrigo Coelho",
  seoDescription:
    "Rodrigo Coelho on product, technology, applied artificial intelligence and sustainability.",
};

const BLOG_UI: Record<Lang, BlogUiContent> = { pt, en };

export function getBlogUi(lang: Lang): BlogUiContent {
  return BLOG_UI[lang];
}
