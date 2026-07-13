import type { SiteContent } from "@/types/content";

export const en: SiteContent = {
  lang: "en",
  nav: {
    logo: "Rodrigo Coelho",
    links: [
      { label: "About", href: "#sobre" },
      { label: "Expertise", href: "#atuacao" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#projetos" },
      { label: "Articles", href: "#artigos" },
      { label: "Contact", href: "#contato" },
    ],
    ctaLabel: "Connect on LinkedIn",
    langToggle: "PT",
  },
  hero: {
    eyebrow: "Product • Technology • Generative AI",
    headline: "Product, Technology and Generative AI to transform digital businesses.",
    subheadline:
      "I am a Product and Technology executive with experience in retail, e-commerce, digital operations, innovation, sustainability, and practical applications of Generative Artificial Intelligence.",
    ctaPrimary: "Explore my projects",
    ctaSecondary: "Connect on LinkedIn",
  },
  about: {
    sectionLabel: "About",
    title: "Professional background",
    body: "Rodrigo Coelho leads Product and Technology initiatives, with experience in large-scale companies, retail, e-commerce, digital operations, and technological transformation. His trajectory combines executive management, digital product development, innovation, Generative AI, sustainability, and executive education.",
    cards: [
      {
        title: "Product & Technology",
        description:
          "Leadership of digital products, platforms, operations, and digital journeys in complex, high-scale environments.",
      },
      {
        title: "Generative AI",
        description:
          "Practical AI applications in productivity, operations, customer service, software development, and new interaction models.",
      },
      {
        title: "Sustainability & Innovation",
        description:
          "Academic and editorial production connecting technology, sustainability, ESG, and forward-looking business strategy.",
      },
    ],
  },
  areas: {
    sectionLabel: "Expertise",
    title: "Areas of expertise",
    subtitle: "The main themes I work on, write about, teach, and develop projects in.",
    cards: [
      {
        title: "Digital Product",
        description:
          "Strategy, roadmap, customer experience, digital channels, and platform evolution.",
        icon: "layers",
      },
      {
        title: "Technology & Architecture",
        description:
          "Technical leadership, platforms, integrations, observability, automation, and digital operations.",
        icon: "cpu",
      },
      {
        title: "Generative Artificial Intelligence",
        description:
          "AI applied to business, productivity, agents, automation, software development, and operational transformation.",
        icon: "sparkles",
      },
      {
        title: "Retail Digital Transformation",
        description:
          "Experience in retail, e-commerce, store operations, omnichannel, and digital products.",
        icon: "shopping-bag",
      },
      {
        title: "Sustainability, ESG & Technology",
        description:
          "Academic and executive production on sustainability, AI, energy matrix, carbon, and sustainable business.",
        icon: "leaf",
      },
      {
        title: "Executive Education & Speaking",
        description:
          "Classes, lectures, and content for MBAs, events, companies, and professional communities.",
        icon: "graduation-cap",
      },
    ],
  },
  experience: {
    sectionLabel: "Experience",
    title: "Executive track record",
    subtitle: "Experiences that shaped my work in Product and Technology.",
    items: [
      {
        role: "Head of Product & Technology",
        company: "Drogaria Venancio",
        period: "2023 — Present",
        description:
          "Leadership of digital products, platforms, website, app, POS, and application support, focused on digital transformation, operational efficiency, customer experience, and adoption of emerging technologies including Generative AI and automation.",
        tags: ["Digital Product", "Technology", "Retail", "Generative AI", "Omnichannel"],
      },
      {
        role: "Technology Manager",
        company: "Americanas S.A.",
        period: "2020 — 2023",
        description:
          "Large-scale environment with experience in technology, digital operations, critical systems support, e-commerce, marketplace, incident management, and team leadership at a company handling millions of daily transactions.",
        tags: ["E-commerce", "Marketplace", "Operations", "Technology", "Management"],
      },
      {
        role: "Guest Professor",
        company: "Higher education institutions",
        period: "2021 — Present",
        description:
          "Teaching in disciplines related to sustainable business, innovation, applied technology, and sustainability, contributing to the development of professional and executive leaders.",
        tags: ["Executive Education", "Sustainability", "Innovation", "MBA"],
      },
      {
        role: "Academic & Editorial Production",
        company: "Publications and journals",
        period: "2019 — Present",
        description:
          "Production of articles, analyses, and research on Artificial Intelligence, sustainability, technology, energy matrix, digital business, and organizational transformation.",
        tags: ["AI", "ESG", "Articles", "Research", "Technology"],
      },
    ],
  },
  projects: {
    sectionLabel: "Projects",
    title: "Projects and initiatives",
    subtitle:
      "Work fronts where I apply strategy, product, technology, and AI.",
    items: [
      {
        title: "Product & Technology in Retail",
        description:
          "Digital projects, omnichannel, platforms, website, app, POS, and customer journey at a large-scale pharmacy chain.",
        tags: ["Digital Product", "Retail", "Omnichannel", "Platform"],
      },
      {
        title: "Generative AI applied to business",
        description:
          "POCs, agents, automations, LLM usage, copilots, and corporate productivity with practical AI applications.",
        tags: ["Generative AI", "LLM", "Automation", "Agents"],
      },
      {
        title: "Observability, SRE & Digital Operations",
        description:
          "Monitoring, logs, metrics, alerts, MTTR reduction, and operational reliability in production systems.",
        tags: ["SRE", "Observability", "Operations", "Reliability"],
      },
      {
        title: "Executive content on AI & Sustainability",
        description:
          "Articles and analyses on energy, AI, data centers, Brazil's energy matrix, and competitive advantage in sustainable business.",
        tags: ["AI", "Sustainability", "ESG", "Editorial"],
        ctaLabel: "Read article on ESG Inside",
        ctaHref: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
      },
      {
        title: "Executive Education",
        description:
          "Classes, lectures, MBAs, mentoring, and content on innovation, sustainability, and digital transformation for leaders and organizations.",
        tags: ["Education", "MBA", "Speaking", "Mentoring"],
      },
    ],
    ctaLabel: "Connect on LinkedIn",
  },
  articles: {
    sectionLabel: "Articles",
    title: "Articles and publications",
    subtitle:
      "Analyses, essays, and academic publications on technology, AI, and sustainability.",
    items: [
      {
        title: "The energy appetite of LLMs and Brazil's competitive advantage",
        description:
          "Analysis of the growing energy consumption of language models, the role of data centers, and the strategic opportunity of Brazil's energy matrix in advancing Artificial Intelligence.",
        type: "Magazine",
        date: "2025",
        href: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
        featured: true,
      },
      {
        title: "Generative AI in transforming digital operations",
        description:
          "How practical applications of LLMs are redefining productivity, customer service, and software development in organizations.",
        type: "Article",
        date: "2024",
      },
      {
        title: "Sustainability and technology: strategic convergences",
        description:
          "Reflections on technology's role in the ESG agenda and how companies can create competitive advantage through sustainable innovation.",
        type: "Essay",
        date: "2024",
      },
      {
        title: "Digital product in retail: challenges and opportunities",
        description:
          "Analysis of the main digital product evolution fronts in retail chains with high physical and digital presence.",
        type: "LinkedIn",
        date: "2024",
      },
    ],
    ctaLabel: "View on LinkedIn",
    ctaScholarLabel: "View on Google Scholar",
    ctaMediumLabel: "View on Medium",
  },
  teaching: {
    sectionLabel: "Teaching & Education",
    title: "Executive education and background",
    subtitle:
      "Acting as guest professor, speaker, and professional with multidisciplinary training.",
    teaching: [
      {
        category: "Classes & MBAs",
        items: [
          "Sustainable Business",
          "Sustainability & ESG",
          "Innovation and Digital Transformation",
          "Technology applied to business",
        ],
      },
      {
        category: "Speaking & Events",
        items: [
          "Generative AI for executives",
          "Digital transformation in retail",
          "Product and Technology at scale",
          "Sustainability, ESG and competitiveness",
          "Innovation applied to business",
        ],
      },
    ],
    education: [
      {
        degree: "Master's in Environmental Engineering",
        institution: "University",
        year: "2022",
      },
      {
        degree: "Postgraduate in Full Stack Development",
        institution: "Higher education institution",
        year: "2020",
      },
      {
        degree: "Postgraduate in Artificial and Computational Intelligence",
        institution: "Higher education institution",
        year: "2023",
      },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    title: "Let's talk?",
    subtitle:
      "Open to projects, speaking, partnerships, and collaborations. Get in touch.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      successMessage: "Message sent successfully! I'll get back to you shortly.",
      errorMessage:
        "The message could not be sent. Please try again or use one of the contact links.",
      recaptchaErrorMessage: "Security verification failed. Please try again.",
    },
    orLabel: "or reach out via",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    resumeLabel: "Download resume",
    emailLabel: "Email",
  },
  footer: {
    tagline:
      "Product and Technology executive working with Generative AI, digital transformation, and innovation.",
    copyright: "© 2026 Rodrigo Coelho. All rights reserved.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    links: [
      { label: "About", href: "#sobre" },
      { label: "Expertise", href: "#atuacao" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#projetos" },
      { label: "Articles", href: "#artigos" },
      { label: "Contact", href: "#contato" },
    ],
    contactLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/iamrodrigocoelho/" },
      { label: "WhatsApp", href: "https://wa.me/5521997992075" },
      { label: "Email", href: "mailto:contato@rodrigocoelho.me" },
      { label: "Resume", href: "/curriculo-rodrigo-coelho.pdf" },
    ],
  },
  seo: {
    title: "Rodrigo Coelho | Product, Technology and Generative AI",
    description:
      "Personal landing page of Rodrigo Coelho, Product and Technology executive focused on Generative AI, digital transformation, sustainability, articles, classes and projects.",
    ogImage: "/og-image.png",
    url: "https://rodrigocoelho.me",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/iamrodrigocoelho/",
    whatsapp: "https://wa.me/5521997992075",
    email: "mailto:contato@rodrigocoelho.me",
    resume: "/curriculo-rodrigo-coelho.pdf",
    articleEsgInside: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
    googleScholar: "https://scholar.google.com/citations?user=QwdZe_oAAAAJ&hl=en",
    medium: "https://medium.com/@iamrodrigocoelho",
  },
};
