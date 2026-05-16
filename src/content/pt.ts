import type { SiteContent } from "@/types/content";

export const pt: SiteContent = {
  lang: "pt",
  nav: {
    logo: "Rodrigo Coelho",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Atuação", href: "#atuacao" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "Artigos", href: "#artigos" },
      { label: "Contato", href: "#contato" },
    ],
    ctaLabel: "Conectar no LinkedIn",
    langToggle: "EN",
  },
  hero: {
    eyebrow: "Produto • Tecnologia • IA Generativa",
    headline: "Produto, Tecnologia e IA Generativa para transformar negócios digitais.",
    subheadline:
      "Sou executivo de Produto e Tecnologia, com experiência em varejo, e-commerce, operações digitais, inovação, sustentabilidade e aplicações práticas de Inteligência Artificial Generativa.",
    ctaPrimary: "Conhecer meus projetos",
    ctaSecondary: "Conectar no LinkedIn",
  },
  about: {
    sectionLabel: "Sobre",
    title: "Trajetória profissional",
    body: "Rodrigo Coelho atua na liderança de Produto e Tecnologia, com experiência em empresas de grande escala, varejo, e-commerce, operações digitais e transformação tecnológica. Sua trajetória combina gestão executiva, desenvolvimento de produtos digitais, inovação, Inteligência Artificial Generativa, sustentabilidade e educação executiva.",
    cards: [
      {
        title: "Produto e Tecnologia",
        description:
          "Liderança de produtos digitais, plataformas, operações e jornadas digitais em ambientes de alta complexidade e escala.",
      },
      {
        title: "IA Generativa",
        description:
          "Aplicações práticas de IA em produtividade, operações, atendimento, desenvolvimento de software e novos modelos de interação.",
      },
      {
        title: "Sustentabilidade e Inovação",
        description:
          "Produção acadêmica e editorial conectando tecnologia, sustentabilidade, ESG e negócios para o futuro.",
      },
    ],
  },
  areas: {
    sectionLabel: "Atuação",
    title: "Áreas de atuação",
    subtitle:
      "Os principais temas em que atuo, escrevo, ensino e desenvolvo projetos.",
    cards: [
      {
        title: "Produto Digital",
        description:
          "Estratégia, roadmap, experiência do cliente, canais digitais e evolução de plataformas.",
        icon: "layers",
      },
      {
        title: "Tecnologia e Arquitetura",
        description:
          "Liderança técnica, plataformas, integrações, observabilidade, automação e operações digitais.",
        icon: "cpu",
      },
      {
        title: "Inteligência Artificial Generativa",
        description:
          "IA aplicada a negócios, produtividade, agentes, automação, desenvolvimento de software e transformação operacional.",
        icon: "sparkles",
      },
      {
        title: "Transformação Digital no Varejo",
        description:
          "Experiência em varejo, e-commerce, operações de loja, omnichannel e produtos digitais.",
        icon: "shopping-bag",
      },
      {
        title: "Sustentabilidade, ESG e Tecnologia",
        description:
          "Produção acadêmica e executiva sobre sustentabilidade, IA, matriz energética, carbono e negócios sustentáveis.",
        icon: "leaf",
      },
      {
        title: "Educação Executiva e Palestras",
        description:
          "Aulas, palestras e conteúdos para MBAs, eventos, empresas e comunidades profissionais.",
        icon: "graduation-cap",
      },
    ],
  },
  experience: {
    sectionLabel: "Experiência",
    title: "Trajetória executiva",
    subtitle: "Experiências que moldaram minha atuação em Produto e Tecnologia.",
    items: [
      {
        role: "Head de Produto e Tecnologia",
        company: "Drogaria Venancio",
        period: "2023 — Presente",
        description:
          "Liderança de produtos digitais, plataformas, site, app, PDV e suporte às aplicações, com foco em transformação digital, eficiência operacional, experiência do cliente e adoção de tecnologias emergentes incluindo IA Generativa e automação.",
        tags: ["Produto Digital", "Tecnologia", "Varejo", "IA Generativa", "Omnichannel"],
      },
      {
        role: "Gerente de Tecnologia",
        company: "Americanas S.A.",
        period: "2020 — 2023",
        description:
          "Atuação em ambiente de grande escala com experiência em tecnologia, operações digitais, suporte a sistemas críticos, e-commerce, marketplace, incidentes e gestão de times em empresa com milhões de transações diárias.",
        tags: ["E-commerce", "Marketplace", "Operações", "Tecnologia", "Gestão"],
      },
      {
        role: "Professor Convidado",
        company: "Instituições de ensino superior",
        period: "2021 — Presente",
        description:
          "Atuação em disciplinas relacionadas a negócios sustentáveis, inovação, tecnologia aplicada e sustentabilidade, contribuindo para a formação de profissionais e lideranças executivas.",
        tags: ["Educação Executiva", "Sustentabilidade", "Inovação", "MBA"],
      },
      {
        role: "Produção Acadêmica e Editorial",
        company: "Publicações e periódicos",
        period: "2019 — Presente",
        description:
          "Produção de artigos, análises e pesquisas sobre Inteligência Artificial, sustentabilidade, tecnologia, matriz energética, negócios digitais e transformação organizacional.",
        tags: ["IA", "ESG", "Artigos", "Pesquisa", "Tecnologia"],
      },
    ],
  },
  projects: {
    sectionLabel: "Projetos",
    title: "Projetos e iniciativas",
    subtitle:
      "Frentes de trabalho onde aplico estratégia, produto, tecnologia e IA.",
    items: [
      {
        title: "Produto e Tecnologia no Varejo",
        description:
          "Projetos digitais, omnichannel, plataformas, site, app, PDV e jornada do cliente em ambiente farmacêutico de grande escala.",
        tags: ["Produto Digital", "Varejo", "Omnichannel", "Plataforma"],
      },
      {
        title: "IA Generativa aplicada a negócios",
        description:
          "POCs, agentes, automações, uso de LLMs, copilotos e produtividade corporativa com aplicações práticas de Inteligência Artificial.",
        tags: ["IA Generativa", "LLM", "Automação", "Agentes"],
      },
      {
        title: "Observabilidade, SRE e Operações Digitais",
        description:
          "Monitoramento, logs, métricas, alertas, redução de MTTR e confiabilidade operacional em sistemas de produção.",
        tags: ["SRE", "Observabilidade", "Operações", "Confiabilidade"],
      },
      {
        title: "Conteúdo executivo sobre IA e Sustentabilidade",
        description:
          "Artigos e análises sobre energia, IA, data centers, matriz energética brasileira e vantagem competitiva em negócios sustentáveis.",
        tags: ["IA", "Sustentabilidade", "ESG", "Editorial"],
        ctaLabel: "Ler artigo na ESG Inside",
        ctaHref: "https://INSERIR-LINK-DO-ARTIGO",
      },
      {
        title: "Educação Executiva",
        description:
          "Aulas, palestras, MBAs, mentorias e conteúdos sobre inovação, sustentabilidade e transformação digital para líderes e organizações.",
        tags: ["Educação", "MBA", "Palestra", "Mentoria"],
      },
    ],
    ctaLabel: "Conectar no LinkedIn",
  },
  articles: {
    sectionLabel: "Artigos",
    title: "Artigos e publicações",
    subtitle:
      "Análises, ensaios e publicações acadêmicas sobre tecnologia, IA e sustentabilidade.",
    items: [
      {
        title: "O apetite energético dos LLMs e a vantagem competitiva da matriz brasileira",
        description:
          "Análise sobre o crescimento do consumo energético dos modelos de linguagem, o papel dos data centers e a oportunidade estratégica da matriz energética brasileira no avanço da Inteligência Artificial.",
        type: "Revista",
        date: "2025",
        href: "https://INSERIR-LINK-DO-ARTIGO",
        featured: true,
      },
      {
        title: "IA Generativa na transformação de operações digitais",
        description:
          "Como aplicações práticas de LLMs estão redefinindo produtividade, atendimento e desenvolvimento de software em organizações.",
        type: "Artigo",
        date: "2024",
      },
      {
        title: "Sustentabilidade e tecnologia: convergências estratégicas",
        description:
          "Reflexões sobre o papel da tecnologia na agenda ESG e como empresas podem criar vantagem competitiva com inovação sustentável.",
        type: "Ensaio",
        date: "2024",
      },
      {
        title: "Produto digital no varejo: desafios e oportunidades",
        description:
          "Análise das principais frentes de evolução de produtos digitais em redes varejistas com alta capilaridade física e digital.",
        type: "LinkedIn",
        date: "2024",
      },
    ],
    ctaLabel: "Ver no LinkedIn",
  },
  teaching: {
    sectionLabel: "Aulas e Formação",
    title: "Educação executiva e formação",
    subtitle:
      "Atuação como professor convidado, palestrante e profissional com formação multidisciplinar.",
    teaching: [
      {
        category: "Aulas e MBAs",
        items: [
          "Negócios Sustentáveis",
          "Sustentabilidade e ESG",
          "Inovação e Transformação Digital",
          "Tecnologia aplicada a negócios",
        ],
      },
      {
        category: "Palestras e eventos",
        items: [
          "IA Generativa para executivos",
          "Transformação digital no varejo",
          "Produto e Tecnologia em escala",
          "Sustentabilidade, ESG e competitividade",
          "Inovação aplicada a negócios",
        ],
      },
    ],
    education: [
      {
        degree: "Mestrado em Engenharia Ambiental",
        institution: "Universidade",
        year: "2022",
      },
      {
        degree: "Pós-graduação em Desenvolvimento Full Stack",
        institution: "Instituição de ensino superior",
        year: "2020",
      },
      {
        degree: "Pós-graduação em Inteligência Artificial e Computacional",
        institution: "Instituição de ensino superior",
        year: "2023",
      },
    ],
  },
  contact: {
    sectionLabel: "Contato",
    title: "Vamos conversar?",
    subtitle:
      "Aberto a projetos, palestras, parcerias e colaborações. Entre em contato.",
    form: {
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar mensagem",
      successMessage:
        "Mensagem enviada com sucesso! Responderei em breve.",
    },
    orLabel: "ou entre em contato por",
    linkedinLabel: "LinkedIn",
    whatsappLabel: "WhatsApp",
    resumeLabel: "Baixar currículo",
    emailLabel: "E-mail",
  },
  footer: {
    tagline:
      "Executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital e inovação.",
    copyright: "© 2026 Rodrigo Coelho. Todos os direitos reservados.",
    navLabel: "Navegação",
    contactLabel: "Contato",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Atuação", href: "#atuacao" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "Artigos", href: "#artigos" },
      { label: "Contato", href: "#contato" },
    ],
    contactLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/SEU-LINKEDIN" },
      { label: "WhatsApp", href: "https://wa.me/55SEUNUMERO" },
      { label: "E-mail", href: "mailto:SEUEMAIL" },
      { label: "Currículo", href: "/curriculo-rodrigo-coelho.pdf" },
    ],
  },
  seo: {
    title: "Rodrigo Coelho | Produto, Tecnologia e IA Generativa",
    description:
      "Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas e projetos.",
    ogImage: "/og-image.png",
    url: "https://iamrodrigocoelho.com",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/SEU-LINKEDIN",
    whatsapp: "https://wa.me/55SEUNUMERO",
    email: "mailto:SEUEMAIL",
    resume: "/curriculo-rodrigo-coelho.pdf",
    articleEsgInside: "https://INSERIR-LINK-DO-ARTIGO",
  },
};
