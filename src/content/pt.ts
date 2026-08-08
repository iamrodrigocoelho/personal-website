import type { SiteContent } from "@/types/content";

export const pt: SiteContent = {
  lang: "pt",
  nav: {
    logo: "Rodrigo Coelho",
    links: [
      // Âncoras das seções desativadas em PageClient.
      // { label: "Sobre", href: "#sobre" },
      // { label: "Atuação", href: "#atuacao" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "Artigos", href: "#artigos" },
      // Rota própria, não âncora: o Header trata os dois casos.
      { label: "Blog", href: "/pt/blog/" },
      { label: "Contato", href: "#contato" },
    ],
    ctaLabel: "Conectar no LinkedIn",
    langToggle: "EN",
  },
  hero: {
    sectionLabel: "Sobre",
    subheadline:
      "Rodrigo Coelho é Head de Produto e Tecnologia, com mais de 15 anos de experiência em e-commerce, produtos digitais, engenharia de software e transformação digital. Atua na integração entre canais físicos e digitais e na aplicação de inteligência artificial generativa ao varejo.",
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
    title: "Experiência profissional",
    subtitle: "Experiências que moldaram minha atuação em Produto e Tecnologia.",
    items: [
      {
        role: "Head de Produto e Tecnologia",
        company: "Drogaria Venancio",
        logo: "/logos/venancio.png",
        period: "2025 — Presente",
        description:
          "Liderança de produtos digitais, plataformas, site, app, PDV e suporte às aplicações, com foco em transformação digital, eficiência operacional, experiência do cliente e adoção de tecnologias emergentes incluindo IA Generativa e automação.",
        tags: ["Product Management", "Engenharia de Software", "Varejo","E-commerce", "IA Generativa", "Omnichannel", "LLM"],
      },
      {
        role: "Gerente de Tecnologia",
        company: "Americanas S.A.",
        logo: "/logos/americanas.png",
        period: "2022 — 2025",
        description:
          "Atuação em ambiente de grande escala com experiência em tecnologia, operações digitais, suporte a sistemas críticos, e-commerce, marketplace, incidentes e gestão de times em empresa com milhões de transações diárias.",
        tags: ["E-commerce", "Marketplace", "Operações", "Tecnologia", "Gestão", "IA Generativa", "Agentes de IA"],
      },
      {
        role: "Group Technical Product Manager",
        company: "Americanas S.A.",
        logo: "/logos/americanas.png",
        period: "2021 — 2022",
        description:
          "",
        tags: ["Product Management","Engenharia de Software", "E-commerce", "Marketplace", "Site Reliability Engineering", "Tecnologia"],
      },
      {
        role: "Group Technical Product Manager",
        company: "B2W Digital",
        logo: "/logos/b2w-digital.png",
        period: "2019 — 2021",
        description:
          "",
        tags: ["Product Management", "Engenharia de Software", "Inovação", "E-Commerce"],
      },
      {
        role: "Especialista em Tecnologia",
        company: "B2W Digital",
        logo: "/logos/b2w-digital.png",
        period: "2013 — 2019",
        description:
          "",
        tags: ["E-Commerce", "Engenharia de Software", "Scrum"],
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
        title: "CNPJ Neutro",
        description:
          "Calcule as emissões de carbono e o consumo de água associados ao uso de ferramentas de IA generativa como ChatGPT, Claude, Gemini e Copilot.",
        tags: ["LLM", "Pegada de Carbono", "ESG"],
        logo: "/logos/projects/cnpj-neutro-logo-black.png",
        ctaLabel:"AI Carbon Tracker",
        ctaHref:"https://cnpjneutro.com.br/",
      },
      {
        title: "Tapirus Open 4B",
        description:
          "SLM open weights especializado em refaunação, conservação da biodiversidade e restauração de interações ecológicas, treinado com dados do Refauna.",
        tags: ["SLM", "Fine Tuning", "RAG"],
        logo: "/logos/projects/huggingface-logo.svg",
        ctaLabel: "Ver no Hugging Face",
        ctaHref: "https://huggingface.co/Refauna/tapirus-open-4b",
      },
      {
        title: "OCR Local",
        description:
          "MVP de um OCR que utiliza LLM local, o Chandra OCR 2, via Ollama.",
        tags: ["LLM", "SLM", "VLM", "OCR", "Ollama"],
        logo: "/logos/projects/github-logo.png",
        ctaLabel: "Ver no GitHub",
        ctaHref: "https://github.com/iamrodrigocoelho/local-ocr-app",
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
        title: "IA e Sustentabilidade",
        description:
          "Artigos e análises sobre energia, IA, data centers, matriz energética brasileira e vantagem competitiva em negócios sustentáveis.",
        tags: ["IA", "Sustentabilidade", "ESG", "Editorial"],
        ctaLabel: "Leia na ESG Inside",
        ctaHref: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
      },
    ],
    ctaLabel: "Conectar no LinkedIn",
  },
  articles: {
    sectionLabel: "Pesquisa e conhecimento",
    title: "Produção acadêmica, publicações, palestras, entrevistas e docência.",
    subtitle: "Produção acadêmica, publicações, palestras, entrevistas e docência.",
    items: [
      {
        title: "O apetite energético dos LLMs e a vantagem competitiva da matriz brasileira",
        tags: ["LLM","IA","Matriz energética"],
        logo: "/logos/esg-inside.png",
        href: "https://esginside.com.br/2026/04/24/o-apetite-energetico-dos-llms-e-a-vantagem-competitiva-da-matriz-energetica-brasileira/",
        featured: false,
      },
      {
        title: "Inovações Tecnológicas, Inteligência Artificial (IA) e Blockchain: Administração Pública e os desafios éticos na era digital",
        tags: ["IA", "Blockchain", "Inovação"],
        logo: "/logos/google-scholar-seeklogo.png",
        href: "https://doi.org/10.54899/dcs.v22i83.3544",
        featured: false,
      },
      {
        title: "Plano de Negócios e suas contribuições para micro e pequenos empreendedores",
        tags: ["SMB", "Plano de Negócios", "Empreendedorismo","Inovação"],
        logo: "/logos/google-scholar-seeklogo.png",
        href: "https://doi.org/10.9790/487X-2610014347",
        featured: false,
      },
      {
        title: "Americanas e Selo Procel se unem para sensibilizar clientes sobre sustentabilidade de produtos",
        tags: ["ESG", "Inovação Aberta"],
        logo: "/logos/logo-isto-e-dinheiro.svg",
        href: "https://istoedinheiro.com.br/americanas-s-a-e-selo-procel-se-unem-para-sensibilizar-clientes-sobre-sustentabilidade-de-produtos",
        featured: false,
      },
      {
        title: "O perfil do cliente no físico e no digital",
        tags: ["Varejo", "Omnichannel", "Tecnologia"],
        logo: "/logos/spotify_logo.png",
        href: "https://open.spotify.com/episode/5pGWdHmqMNAEyHsOWsAzGt?si=FPR151vERTWOUI5NWhULXg",
        featured: false,
      },
      {
        title: "Analista de sistemas aposta na fotografia de aves como um resgate dos sentidos",
        tags: ["Fotografia de natureza","Hobby","Avifauna"],
        logo: "/logos/g1_logo.png",
        href: "https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2019/12/17/analista-de-sistemas-aposta-na-fotografia-de-aves-como-um-resgate-dos-sentidos.ghtml",
        featured: false,
      },
    ],
    ctaLabel: "Ver no LinkedIn",
    ctaScholarLabel: "Ver no Google Scholar",
    ctaMediumLabel: "Ver no Medium",
  },
  teaching: {
    sectionLabel: "Formação",
    title: "Formação acadêmica",
    subtitle:
      "Formação multidisciplinar que conecta tecnologia, negócios, sustentabilidade e inovação.",
    items: [
      {
        name: "Análise de Desenvolvimento de Sistemas",
        issuer: "Estácio de Sá",
        logo: "/logos/education/estacio-logo.png",
      },
      {
        name: "Pós-graduação em Desenvolvimento Full Stack",
        issuer: "PUC-Rio",
        logo: "/logos/education/puc-rio-logo.png",
      },
      {
        name: "Pós-graduação em Inteligência Artificial e Computacional",
        issuer: "UFV",
        logo: "/logos/education/ufv-logo.png",
      },
      {
        name: "Post-MBA",
        issuer: "COPPEAD UFRJ",
        logo: "/logos/education/coppead-logo.png",
      },
      {
        name: "Mestrado",
        issuer: "PUC-Rio",
        logo: "/logos/education/puc-rio-logo.png",
      },
    ],
  },
  certifications: {
    sectionLabel: "Certificações",
    title: "Certificações profissionais",
    subtitle:
      "Certificações que validam minha atuação em computação em nuvem, inteligência artificial e agilidade.",
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
      errorMessage:
        "Não foi possível enviar a mensagem. Tente novamente ou use um dos contatos ao lado.",
      recaptchaErrorMessage:
        "Falha na verificação de segurança. Tente novamente.",
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
      // Âncoras das seções desativadas em PageClient.
      // { label: "Sobre", href: "#sobre" },
      // { label: "Atuação", href: "#atuacao" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "Artigos", href: "#artigos" },
      { label: "Blog", href: "/pt/blog/" },
      { label: "Contato", href: "#contato" },
    ],
    contactLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/iamrodrigocoelho/" },
      { label: "WhatsApp", href: "https://wa.me/5521997992075" },
      { label: "E-mail", href: "mailto:contato@rodrigocoelho.me" },
      { label: "Currículo", href: "/curriculo-rodrigo-coelho.pdf" },
    ],
  },
  seo: {
    title: "Rodrigo Coelho | Produto, Tecnologia e IA Generativa",
    description:
      "Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas e projetos.",
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
