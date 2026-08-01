import type { SiteContent } from "@/types/content";

export const en: SiteContent = {
  lang: "en",
  nav: {
    logo: "Rodrigo Coelho",
    links: [
      // Âncoras das seções desativadas em PageClient.
      // { label: "About", href: "#sobre" },
      // { label: "Expertise", href: "#atuacao" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#projetos" },
      { label: "Articles", href: "#artigos" },
      { label: "Blog", href: "/en/blog/" },
      { label: "Contact", href: "#contato" },
    ],
    ctaLabel: "Connect on LinkedIn",
    langToggle: "PT",
  },
  hero: {
    sectionLabel: "About",
    subheadline:
      "Rodrigo Coelho is Head of Product and Technology, with over 15 years of experience in e-commerce, digital products, software engineering, and digital transformation. He works on integrating physical and digital channels and on applying generative artificial intelligence to retail.",
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
        logo: "/logos/venancio.png",
        period: "2025 — Present",
        description:
          "Leadership of digital products, platforms, website, app, POS, and application support, focused on digital transformation, operational efficiency, customer experience, and adoption of emerging technologies including Generative AI and automation.",
        tags: ["Digital Product", "Technology", "Retail", "Generative AI", "Omnichannel", "AI Agents"],
      },
      {
        role: "Technology Manager",
        company: "Americanas S.A.",
        logo: "/logos/americanas.png",
        period: "2022 — 2025",
        description:
          "Large-scale environment with experience in technology, digital operations, critical systems support, e-commerce, marketplace, incident management, and team leadership at a company handling millions of daily transactions.",
        tags: ["E-commerce", "Marketplace", "Operations", "Technology", "Management", "Generative AI", "AI Agents"],
      },
      {
        role: "Group Technical Product Manager",
        company: "Americanas S.A.",
        logo: "/logos/americanas.png",
        period: "2021 — 2022",
        description:
          "",
        tags: ["Product Management", "E-commerce", "Marketplace", "Software Engineer", "Site Reliability Engineering", "Technology"],
      },
      {
        role: "Group Technical Product Manager",
        company: "B2W Digital",
        logo: "/logos/b2w-digital.png",
        period: "2019 — 2021",
        description:
          "Teaching in disciplines related to sustainable business, innovation, applied technology, and sustainability, contributing to the development of professional and executive leaders.",
        tags: ["Product Management", "Software Engineer", "Innovation", "MBA"],
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
        title: "CNPJ Neutro",
        description:
          "Calculate the carbon emissions and water consumption associated with using generative AI tools such as ChatGPT, Claude, Gemini, and Copilot.",
        tags: ["LLM", "Carbon Footprint", "ESG"],
        logo: "/logos/projects/cnpj-neutro-logo-black.png",
      },
      {
        title: "Tapirus Open 4B",
        description:
          "Open-weights SLM specialized in refaunation, biodiversity conservation, and the restoration of ecological interactions, trained on Refauna data.",
        tags: ["SLM", "Fine Tuning", "RAG"],
        logo: "/logos/projects/huggingface-logo.svg",
      },
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
    ],
    ctaLabel: "Connect on LinkedIn",
  },
  articles: {
    sectionLabel: "Research & knowledge",
    title: "Academic output, publications, talks, interviews, and teaching.",
    subtitle: "Academic output, publications, talks, interviews, and teaching.",
    items: [
      {
        title: "The energy appetite of LLMs and Brazil's competitive advantage",
        tags: ["LLM", "AI", "Energy matrix"],
        logo: "/logos/esg-inside.png",
        href: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
        featured: false,
      },
      {
        title: "Technological Innovations, Artificial Intelligence (AI) and Blockchain: Public Administration and the ethical challenges of the digital era",
        tags: ["AI", "Blockchain", "Innovation"],
        logo: "/logos/google-scholar-seeklogo.png",
        href: "https://doi.org/10.54899/dcs.v22i83.3544",
        featured: false,
      },
      {
        title: "Business plans and their contributions to micro and small entrepreneurs",
        tags: ["SMB", "Business Plan", "Entrepreneurship", "Innovation"],
        logo: "/logos/google-scholar-seeklogo.png",
        href: "https://doi.org/10.9790/487X-2610014347",
        featured: false,
      },
      {
        title: "Americanas and Selo Procel join forces to raise customer awareness of product sustainability",
        tags: ["ESG", "Open Innovation"],
        logo: "/logos/logo-isto-e-dinheiro.svg",
        href: "https://istoedinheiro.com.br/americanas-s-a-e-selo-procel-se-unem-para-sensibilizar-clientes-sobre-sustentabilidade-de-produtos",
        featured: false,
      },
      {
        title: "The customer profile in physical and digital retail",
        tags: ["Retail", "Omnichannel", "Technology"],
        logo: "/logos/spotify_logo.png",
        href: "https://open.spotify.com/episode/5pGWdHmqMNAEyHsOWsAzGt?si=FPR151vERTWOUI5NWhULXg",
        featured: false,
      },
      {
        title: "Systems analyst turns to bird photography as a way to reawaken the senses",
        tags: ["Nature photography", "Hobby", "Birdlife"],
        logo: "/logos/g1_logo.png",
        href: "https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2019/12/17/analista-de-sistemas-aposta-na-fotografia-de-aves-como-um-resgate-dos-sentidos.ghtml",
        featured: false,
      },
    ],
    ctaLabel: "View on LinkedIn",
    ctaScholarLabel: "View on Google Scholar",
    ctaMediumLabel: "View on Medium",
  },
  teaching: {
    sectionLabel: "Education",
    title: "Academic background",
    subtitle:
      "Multidisciplinary background connecting technology, business, sustainability, and innovation.",
    items: [
      {
        name: "Systems Analysis and Development",
        issuer: "Estácio de Sá",
        logo: "/logos/education/estacio-logo.png",
      },
      {
        name: "Postgraduate in Artificial and Computational Intelligence",
        issuer: "UFV",
        logo: "/logos/education/ufv-logo.png",
      },
      {
        name: "Postgraduate in Full Stack Development",
        issuer: "PUC-Rio",
        logo: "/logos/education/puc-rio-logo.png",
      },
      {
        name: "Post-MBA",
        issuer: "COPPEAD UFRJ",
        logo: "/logos/education/coppead-logo.png",
      },
      {
        name: "Master's Degree",
        issuer: "PUC-Rio",
        logo: "/logos/education/puc-rio-logo.png",
      },
    ],
  },
  certifications: {
    sectionLabel: "Certifications",
    title: "Professional certifications",
    subtitle:
      "Certifications that validate my work in cloud computing, artificial intelligence, and agile.",
    items: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        logo: "/logos/certifications/aws-cloud-logo.png",
      },
      {
        name: "Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft",
        logo: "/logos/certifications/ai-900-logo.png",
      },
      {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        logo: "/logos/certifications/microsoft-fundamentals-badge.svg",
      },
      {
        name: "Certified ScrumMaster (CSM)",
        issuer: "Scrum Alliance",
        logo: "/logos/certifications/csm-logo.png",
      },
      {
        name: "Certified Scrum Product Owner (CSPO)",
        issuer: "Scrum Alliance",
        logo: "/logos/certifications/cspo-logo.png",
      },
      {
        name: "Digital Product Leadership",
        issuer: "Tera",
        logo: "/logos/certifications/somostera_logo.jpeg",
      },
      {
        name: "Innovation Leadership Program",
        issuer: "StartSe",
        logo: "/logos/certifications/startse-logo.jpeg",
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
      // Âncoras das seções desativadas em PageClient.
      // { label: "About", href: "#sobre" },
      // { label: "Expertise", href: "#atuacao" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#projetos" },
      { label: "Articles", href: "#artigos" },
      { label: "Blog", href: "/en/blog/" },
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
