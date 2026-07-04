export type Lang = "pt" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutContent {
  sectionLabel: string;
  title: string;
  body: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
}

export interface AreaCard {
  title: string;
  description: string;
  icon: string;
}

export interface AreasContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  cards: AreaCard[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ExperienceContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ProjectsContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
  ctaLabel: string;
}

export interface ArticleItem {
  title: string;
  description: string;
  type: string;
  date?: string;
  href?: string;
  featured?: boolean;
}

export interface ArticlesContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: ArticleItem[];
  ctaLabel: string;
  ctaScholarLabel: string;
  ctaMediumLabel: string;
}

export interface TeachingItem {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
}

export interface TeachingContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  teaching: TeachingItem[];
  education: EducationItem[];
}

export interface ContactContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    submit: string;
    successMessage: string;
    errorMessage: string;
    recaptchaErrorMessage: string;
  };
  orLabel: string;
  linkedinLabel: string;
  whatsappLabel: string;
  resumeLabel: string;
  emailLabel: string;
}

export interface FooterContent {
  tagline: string;
  copyright: string;
  navLabel: string;
  contactLabel: string;
  links: NavLink[];
  contactLinks: Array<{
    label: string;
    href: string;
  }>;
}

export interface SeoContent {
  title: string;
  description: string;
  ogImage: string;
  url: string;
}

export interface SiteContent {
  lang: Lang;
  nav: {
    logo: string;
    links: NavLink[];
    ctaLabel: string;
    langToggle: string;
  };
  hero: HeroContent;
  about: AboutContent;
  areas: AreasContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  articles: ArticlesContent;
  teaching: TeachingContent;
  contact: ContactContent;
  footer: FooterContent;
  seo: SeoContent;
  links: {
    linkedin: string;
    whatsapp: string;
    email: string;
    resume: string;
    articleEsgInside: string;
    googleScholar: string;
    medium: string;
  };
}
