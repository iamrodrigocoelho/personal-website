# PRD.md — Landing Page Pessoal de Rodrigo Coelho

## 1. Visão geral do produto

Este documento define os requisitos de produto para a criação de uma landing page pessoal bilíngue para Rodrigo Coelho, com foco em portfólio profissional, divulgação de artigos, aulas, projetos e palestras.

A página deve funcionar como uma presença digital executiva, moderna e institucional, posicionando Rodrigo como profissional de Produto e Tecnologia, com forte atuação em Inteligência Artificial Generativa, transformação digital, inovação, sustentabilidade e educação executiva.

O projeto deve ser implementado como uma página única, sem necessidade de banco de dados, utilizando o arquivo `DESIGN.md` como referência obrigatória de design system e direção visual.

O domínio previsto para publicação é:

```txt
iamrodrigocoelho.com
```

O deploy inicial será feito na Hostinger.

---

## 2. Objetivos do produto

### 2.1 Objetivo principal

Criar uma landing page pessoal que comunique, de forma clara e sofisticada, a trajetória profissional, os projetos, os artigos, as aulas e as áreas de atuação de Rodrigo Coelho.

### 2.2 Objetivos secundários

- Apresentar Rodrigo como executivo de Produto e Tecnologia.
- Destacar sua atuação em Inteligência Artificial Generativa.
- Consolidar sua produção acadêmica e editorial.
- Divulgar aulas, palestras, projetos e iniciativas.
- Facilitar conexão com recrutadores, headhunters, executivos, C-levels e público do LinkedIn.
- Melhorar a presença digital e a encontrabilidade em mecanismos de busca.
- Criar uma base escalável para futuras evoluções, como blog, CMS ou área de conteúdos.

---

## 3. Público-alvo

A página deve ser pensada principalmente para:

1. Recrutadores e headhunters.
2. Executivos e C-levels.
3. Público profissional vindo do LinkedIn.
4. Empresas interessadas em palestras, aulas, consultoria ou projetos.
5. Instituições de ensino, organizadores de eventos e veículos de tecnologia.

---

## 4. Posicionamento

A landing page deve posicionar Rodrigo Coelho como um executivo que conecta Produto, Tecnologia, Inteligência Artificial Generativa, inovação e sustentabilidade.

### Mensagem central sugerida

```txt
Executivo de Produto e Tecnologia com atuação em Inteligência Artificial Generativa, transformação digital e inovação aplicada a negócios.
```

### Variação para hero

```txt
Produto, Tecnologia e IA Generativa para transformar negócios digitais.
```

### Subheadline sugerida

```txt
Atuo na interseção entre estratégia, produto, tecnologia e inovação, liderando iniciativas digitais, projetos de IA Generativa, produção acadêmica e conteúdos executivos sobre o futuro dos negócios.
```

---

## 5. Tom de voz

O tom deve ser:

- Executivo.
- Institucional.
- Claro.
- Moderno.
- Confiável.
- Sofisticado sem parecer excessivamente formal.
- Direto, evitando linguagem inflada ou exageradamente promocional.

Evitar:

- Linguagem excessivamente informal.
- Frases genéricas de autoajuda.
- Superlativos desnecessários.
- Excesso de buzzwords sem contexto.
- Aparência de texto gerado por IA.

---

## 6. Idiomas

A landing page deve ser bilíngue.

### Idioma principal

Português do Brasil.

### Idioma secundário

Inglês.

### Requisito funcional de idioma

A página deve possuir alternância de idioma entre PT-BR e EN.

Sugestão de implementação:

- Estrutura com arquivo de conteúdo separado por idioma.
- Não usar banco de dados.
- Criar arquivos locais, por exemplo:

```txt
/src/content/pt.ts
/src/content/en.ts
```

ou

```txt
/src/i18n/pt.json
/src/i18n/en.json
```

A escolha final pode ser feita pelo Claude Code, desde que mantenha o conteúdo organizado, escalável e fácil de editar.

### Comportamento esperado

- O idioma padrão deve ser português.
- O usuário deve poder alternar para inglês no topo da página.
- A troca de idioma deve atualizar todo o conteúdo textual principal da landing page.
- O componente de alternância deve seguir o design system, preferencialmente com aparência de `nav-pill-group`.

---

## 7. Escopo da landing page

A página será única, com navegação por âncoras internas.

### Seções obrigatórias

1. Header / Top Navigation.
2. Hero.
3. Sobre.
4. Áreas de atuação.
5. Experiência profissional.
6. Projetos e iniciativas.
7. Artigos e publicações.
8. Aulas, palestras e formação acadêmica.
9. Contato.
10. Footer escuro.

---

## 8. Estrutura detalhada das seções

## 8.1 Header / Top Navigation

### Objetivo

Permitir navegação rápida entre as principais seções da landing page e reforçar a identidade pessoal.

### Conteúdo

- Wordmark textual: `Rodrigo Coelho` ou `iamrodrigocoelho`.
- Links de navegação:
  - Sobre
  - Atuação
  - Experiência
  - Projetos
  - Artigos
  - Contato
- Alternância de idioma:
  - PT
  - EN
- CTA principal:
  - `Conectar no LinkedIn`

### Requisitos visuais

- Header fixo ou sticky.
- Fundo branco.
- Altura aproximada de 64px.
- Visual minimalista, seguindo o padrão SaaS moderno do `DESIGN.md`.
- CTA preto com texto branco.
- Em mobile, menu deve colapsar para hamburger ou menu compacto.

---

## 8.2 Hero

### Objetivo

Apresentar Rodrigo de forma objetiva, executiva e memorável.

### Conteúdo sugerido

#### Eyebrow

```txt
Produto • Tecnologia • IA Generativa
```

#### Headline

```txt
Produto, Tecnologia e IA Generativa para transformar negócios digitais.
```

#### Subheadline

```txt
Sou executivo de Produto e Tecnologia, com experiência em varejo, e-commerce, operações digitais, inovação, sustentabilidade e aplicações práticas de Inteligência Artificial Generativa.
```

#### CTAs

1. Primário:
   - `Conhecer meus projetos`
   - Âncora para seção de projetos.

2. Secundário:
   - `Conectar no LinkedIn`
   - Link externo para o LinkedIn.

### Elemento visual do hero

Não utilizar foto pessoal.

Criar um card visual de interface inspirado em produto SaaS, seguindo o estilo do `DESIGN.md` e do print de referência `exemplo_estilo`.

Sugestões de conteúdo do card visual:

- Um painel com cards de áreas de atuação.
- Um mockup de agenda editorial.
- Um mini dashboard com temas como Produto, IA, Tecnologia, Artigos e Aulas.
- Um card de “Current Focus” com tags:
  - Product Leadership
  - Generative AI
  - Digital Transformation
  - Sustainable Innovation
  - Executive Education

### Requisitos visuais

- Layout desktop em duas colunas, estilo 7/5.
- Texto à esquerda.
- Card de interface à direita.
- Muito respiro visual.
- Headline grande, com tipografia display.
- Botões no padrão `button-primary` e `button-secondary`.

---

## 8.3 Sobre

### Objetivo

Apresentar uma visão sintética da trajetória profissional de Rodrigo.

### Conteúdo sugerido

```txt
Rodrigo Coelho atua na liderança de Produto e Tecnologia, com experiência em empresas de grande escala, varejo, e-commerce, operações digitais e transformação tecnológica. Sua trajetória combina gestão executiva, desenvolvimento de produtos digitais, inovação, Inteligência Artificial Generativa, sustentabilidade e educação executiva.
```

### Cards complementares

Criar três cards resumidos:

1. Produto e Tecnologia
   - Liderança de produtos digitais, plataformas, operações e jornadas digitais.

2. IA Generativa
   - Aplicações práticas de IA em produtividade, operações, atendimento, desenvolvimento de software e novos modelos de interação.

3. Sustentabilidade e Inovação
   - Produção acadêmica e editorial conectando tecnologia, sustentabilidade, ESG e negócios.

---

## 8.4 Áreas de atuação

### Objetivo

Mostrar os principais temas em que Rodrigo atua, escreve, ensina e desenvolve projetos.

### Cards obrigatórios

1. Produto Digital
   - Estratégia, roadmap, experiência do cliente, canais digitais e evolução de plataformas.

2. Tecnologia e Arquitetura
   - Liderança técnica, plataformas, integrações, observabilidade, automação e operações digitais.

3. Inteligência Artificial Generativa
   - IA aplicada a negócios, produtividade, agentes, automação, desenvolvimento de software e transformação operacional.

4. Transformação Digital no Varejo
   - Experiência em varejo, e-commerce, operações de loja, omnichannel e produtos digitais.

5. Sustentabilidade, ESG e Tecnologia
   - Produção acadêmica e executiva sobre sustentabilidade, IA, matriz energética, carbono e negócios sustentáveis.

6. Educação Executiva e Palestras
   - Aulas, palestras e conteúdos para MBAs, eventos, empresas e comunidades profissionais.

### Requisitos visuais

- Grid de cards.
- Desktop: 3 colunas.
- Tablet: 2 colunas.
- Mobile: 1 coluna.
- Cards em `surface-card`.
- Ícones simples, monocromáticos ou com acentos discretos.

---

## 8.5 Experiência profissional

### Objetivo

Apresentar a trajetória executiva mais relevante de forma clara e objetiva.

### Experiências obrigatórias

#### Head de Produto e Tecnologia — Drogaria Venancio

Enfatizar:

- Liderança de Produto e Tecnologia.
- Atuação em site, app, PDV e suporte às aplicações.
- Evolução de canais digitais.
- Transformação digital no varejo farmacêutico.
- IA Generativa, automação, observabilidade e modernização tecnológica.

#### Gerente de Tecnologia — Americanas S.A.

Enfatizar:

- Experiência em empresa de grande escala.
- Tecnologia, e-commerce, marketplace, operações e suporte.
- Gestão de times, incidentes, sistemas críticos e transformação digital.

#### Professor convidado

Enfatizar:

- Atuação em disciplinas relacionadas a negócios sustentáveis, inovação e sustentabilidade.
- Contribuição para formação executiva e acadêmica.

#### Produção acadêmica e editorial

Enfatizar:

- Artigos sobre IA, sustentabilidade, tecnologia e negócios.
- Produção acadêmica em engenharia ambiental e sustentabilidade.
- Integração entre tecnologia e impacto socioambiental.

### Requisitos visuais

- Usar cards ou timeline minimalista.
- Evitar excesso de texto.
- Cada experiência deve ter:
  - Cargo ou papel.
  - Instituição ou empresa.
  - Breve descrição.
  - Tags de competências.

---

## 8.6 Projetos e iniciativas

### Objetivo

Divulgar projetos, iniciativas e frentes de atuação relevantes.

### Projetos sugeridos

Os dados reais devem poder ser editados posteriormente no arquivo de conteúdo.

Criar inicialmente os seguintes blocos:

1. Produto e Tecnologia no Varejo
   - Projetos digitais, omnichannel, plataformas, site, app, PDV e jornada do cliente.

2. Inteligência Artificial Generativa aplicada a negócios
   - POCs, agentes, automações, uso de LLMs, copilotos e produtividade corporativa.

3. Observabilidade, SRE e operações digitais
   - Monitoramento, logs, métricas, alertas, redução de MTTR e confiabilidade operacional.

4. Conteúdo executivo sobre IA e sustentabilidade
   - Artigos e análises sobre energia, IA, data centers, matriz energética brasileira e vantagem competitiva.

5. Educação executiva
   - Aulas, palestras, MBAs, mentorias e conteúdos sobre inovação, sustentabilidade e transformação digital.

### Requisitos visuais

- Cards com aparência de produto SaaS.
- Usar tags.
- Usar CTA secundário em cada card quando houver link externo.
- O CTA principal da seção deve ser `Ver artigos e publicações` ou `Conectar no LinkedIn`.

---

## 8.7 Artigos e publicações

### Objetivo

Criar uma área para divulgar artigos, publicações acadêmicas, textos executivos e conteúdos de LinkedIn.

### Conteúdo inicial

Criar cards editáveis com campos:

- Título.
- Descrição curta.
- Tema.
- Tipo:
  - Artigo.
  - Publicação acadêmica.
  - LinkedIn.
  - Revista.
  - Ensaio.
- Link externo opcional.
- Data opcional.

### Artigo em destaque sugerido

Criar um card de destaque para o artigo publicado na revista ESG Inside sobre o apetite energético dos LLMs e a vantagem competitiva da matriz energética brasileira.

Texto sugerido:

```txt
Análise sobre o crescimento do consumo energético dos modelos de linguagem, o papel dos data centers e a oportunidade estratégica da matriz energética brasileira no avanço da Inteligência Artificial.
```

### Requisitos funcionais

- Como não haverá banco de dados, os artigos devem ser cadastrados em arquivo local de conteúdo.
- O layout deve permitir adicionar novos artigos facilmente.
- Deve existir um botão para abrir o conteúdo em nova aba, quando houver link.

---

## 8.8 Aulas, palestras e formação acadêmica

### Objetivo

Mostrar a atuação de Rodrigo como professor convidado, palestrante e profissional com formação multidisciplinar.

### Conteúdo obrigatório

Criar blocos para:

1. Aulas e MBAs
   - Negócios sustentáveis.
   - Sustentabilidade.
   - Inovação.
   - Tecnologia aplicada a negócios.

2. Palestras e eventos
   - IA Generativa.
   - Transformação digital.
   - Produto e tecnologia.
   - Sustentabilidade e ESG.
   - Varejo digital.

3. Formação acadêmica
   - Mestrado em Engenharia Ambiental.
   - Pós-graduação em Desenvolvimento Full Stack.
   - Pós-graduação em Inteligência Artificial e Computacional.
   - Certificações e cursos relevantes, se cadastrados no conteúdo.

### Requisitos visuais

- Usar cards com hierarquia clara.
- Pode haver visual de “agenda” ou “currículo executivo”, inspirado em fragmentos de produto.
- Evitar visual acadêmico tradicional. Manter estética SaaS moderna.

---

## 8.9 Contato

### Objetivo

Facilitar o contato com Rodrigo.

### Funcionalidades obrigatórias

1. Formulário de contato.
2. Link para WhatsApp.
3. Link para LinkedIn.
4. Link para currículo em PDF.
5. Botão para baixar currículo.
6. Links sociais.
7. Mensagem de confirmação após envio do formulário.

### Formulário de contato

Campos:

- Nome.
- E-mail.
- Empresa.
- Assunto.
- Mensagem.

### Requisito importante

Como o projeto não terá banco de dados, o formulário deve ser implementado usando uma destas abordagens:

1. Formulário estático compatível com serviço externo, como Formspree, Getform ou similar.
2. Envio via `mailto:` como fallback.
3. Endpoint serverless apenas se for compatível com o deploy escolhido.
4. Caso a Hostinger não suporte função serverless, priorizar serviço externo de formulário.

O Claude Code deve deixar essa decisão bem documentada no código e no README.

### Proteção mínima contra spam

- Usar campo honeypot oculto.
- Validar campos obrigatórios no front-end.
- Validar formato do e-mail.
- Não expor chaves sensíveis no front-end.

---

## 8.10 Footer

### Objetivo

Encerrar a página com visual institucional e navegação complementar.

### Conteúdo

- Nome ou wordmark:
  - `Rodrigo Coelho`
  - ou `iamrodrigocoelho`
- Breve frase de posicionamento.
- Links:
  - Sobre
  - Atuação
  - Experiência
  - Projetos
  - Artigos
  - Contato
- Links externos:
  - LinkedIn
  - Currículo
  - WhatsApp
  - E-mail
- Copyright:
  - `© 2026 Rodrigo Coelho. Todos os direitos reservados.`

### Requisitos visuais

- Footer escuro, seguindo o `DESIGN.md`.
- Fundo `surface-dark`.
- Texto claro e links em tom suave.
- Deve ser o único bloco escuro da página.

---

## 9. Funcionalidades obrigatórias

### 9.1 Navegação por âncoras

Os links do menu devem rolar suavemente para as seções correspondentes.

### 9.2 Alternância de idioma

Deve existir alternância entre português e inglês.

### 9.3 Formulário de contato

Deve ser funcional ou facilmente configurável com serviço externo.

### 9.4 Links externos

A página deve suportar links para:

- LinkedIn.
- WhatsApp.
- Currículo em PDF.
- Artigos.
- Publicações.
- E-mail.

### 9.5 Download de currículo

Deve haver um botão para baixar currículo em PDF.

O arquivo pode ficar em:

```txt
/public/curriculo-rodrigo-coelho.pdf
```

Caso o arquivo ainda não exista, criar placeholder e documentar no README onde inserir o arquivo real.

### 9.6 Analytics

Incluir suporte para analytics, preferencialmente configurável por variável de ambiente.

Sugestões:

- Google Analytics.
- Microsoft Clarity.

O projeto deve permitir ativação futura sem reescrever a aplicação.

### 9.7 SEO

A página deve ser otimizada para mecanismos de busca e compartilhamento em redes sociais.

---

## 10. Requisitos de SEO

### 10.1 Title

Sugestão em português:

```txt
Rodrigo Coelho | Produto, Tecnologia e IA Generativa
```

Sugestão em inglês:

```txt
Rodrigo Coelho | Product, Technology and Generative AI
```

### 10.2 Meta description

Português:

```txt
Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas e projetos.
```

Inglês:

```txt
Personal landing page of Rodrigo Coelho, Product and Technology executive focused on Generative AI, digital transformation, sustainability, articles, classes and projects.
```

### 10.3 Open Graph

Implementar metadados para compartilhamento no LinkedIn, WhatsApp e outras plataformas.

Campos obrigatórios:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

### 10.4 Schema.org

Implementar structured data do tipo `Person`.

Campos sugeridos:

- name.
- jobTitle.
- url.
- sameAs.
- worksFor.
- alumniOf.
- knowsAbout.
- description.

### 10.5 Arquivos técnicos

Criar:

```txt
robots.txt
sitemap.xml
```

ou usar geração automática, caso o framework escolhido facilite.

### 10.6 Boas práticas

- Usar heading hierarchy correta.
- Apenas um `h1`.
- Usar `h2` para seções principais.
- Textos alternativos em todos os elementos visuais relevantes.
- URLs amigáveis, mesmo sendo single page.
- Garantir boa renderização em compartilhamentos sociais.

---

## 11. Requisitos de acessibilidade

A página deve atender boas práticas de acessibilidade.

### Critérios mínimos

- Contraste adequado entre texto e fundo.
- Navegação por teclado.
- Estados de foco visíveis.
- Labels em campos de formulário.
- Botões com nomes acessíveis.
- Uso semântico de HTML.
- `aria-label` em botões de ícone.
- Respeitar `prefers-reduced-motion`.
- Não depender exclusivamente de cor para transmitir informação.

---

## 12. Requisitos de performance

A página deve ser rápida, leve e otimizada.

### Critérios

- Lighthouse Performance acima de 90.
- Lighthouse Accessibility acima de 90.
- Lighthouse SEO acima de 90.
- Carregamento inicial rápido.
- Evitar bibliotecas pesadas desnecessárias.
- Otimizar fontes.
- Evitar imagens pesadas.
- Preferir SVGs ou ícones leves.
- Garantir responsividade em mobile.

---

## 13. Requisitos de segurança

Mesmo sem banco de dados, o projeto deve observar boas práticas.

### Critérios

- Não expor variáveis sensíveis no front-end.
- Usar validação de formulário.
- Usar honeypot contra spam.
- Links externos devem usar `rel="noopener noreferrer"`.
- Sanitizar qualquer conteúdo dinâmico, mesmo vindo de arquivos locais.
- Evitar dependências desnecessárias.
- Manter o projeto com TypeScript em modo estrito.
- Documentar variáveis de ambiente no `.env.example`.
- Nunca versionar `.env`.

---

## 14. Requisitos visuais e design system

O arquivo `DESIGN.md` é a referência obrigatória de design do projeto.

O Claude Code deve ler e aplicar o design system descrito em `DESIGN.md`.

### Direção visual

A página deve seguir um estilo SaaS moderno inspirado no Cal.com:

- Canvas branco.
- CTAs primários pretos.
- Cards cinza-claro.
- Muito espaçamento.
- Tipografia display para headlines.
- Tipografia limpa para textos.
- Cards com fragmentos visuais de produto.
- Footer escuro.
- Hierarquia clara.
- Poucas cores de destaque.
- Visual institucional, moderno e sofisticado.

### Tokens principais esperados

Usar os tokens descritos no `DESIGN.md`:

- `colors.canvas`
- `colors.primary`
- `colors.primary-active`
- `colors.surface-card`
- `colors.surface-soft`
- `colors.surface-dark`
- `colors.hairline`
- `colors.ink`
- `colors.body`
- `colors.muted`
- `colors.on-primary`
- `colors.on-dark`
- `colors.on-dark-soft`

### Tipografia

Seguir a orientação:

- Headlines com estilo Cal Sans ou substituto.
- Body com Inter.
- Display weight 600.
- Letter spacing negativo em títulos.
- Não usar peso 700 em títulos display.

Como Cal Sans pode não estar disponível, usar fallback recomendado:

- Inter 600 com letter-spacing negativo.
- Alternativamente, Manrope 700 apenas se fizer sentido visualmente.

### Componentes visuais esperados

Criar componentes inspirados no `DESIGN.md`:

- `TopNav`
- `Button`
- `Section`
- `Hero`
- `HeroMockupCard`
- `FeatureCard`
- `ExperienceCard`
- `ProjectCard`
- `ArticleCard`
- `ContactForm`
- `Footer`
- `LanguageToggle`
- `Badge`
- `Tag`
- `Card`

### Restrições visuais

Não fazer:

- Não usar gradientes chamativos.
- Não usar glassmorphism.
- Não usar neumorphism.
- Não usar excesso de azul.
- Não usar cards escuros fora do footer.
- Não usar visual de currículo tradicional.
- Não usar foto pessoal no hero.
- Não usar excesso de animações.
- Não usar layout poluído.

---

## 15. Responsividade

A página deve ser responsiva.

### Breakpoints esperados

- Mobile: menor que 768px.
- Tablet: 768px a 1024px.
- Desktop: acima de 1024px.

### Comportamento

- Header deve colapsar no mobile.
- Hero deve ir de duas colunas para uma coluna.
- Cards devem ir de 3 colunas para 2 e depois 1.
- Footer deve ir de múltiplas colunas para uma coluna.
- CTAs devem continuar fáceis de tocar em telas pequenas.
- Tipografia display deve reduzir em mobile.

---

## 16. Stack técnica recomendada

### Framework

```txt
Next.js
```

### Linguagem

```txt
TypeScript
```

### Estilização

```txt
Tailwind CSS
```

### Estrutura

```txt
App Router
```

### Banco de dados

Não utilizar banco de dados nesta versão.

### Hospedagem

Deploy inicial previsto na Hostinger.

### Observação sobre Hostinger

O Claude Code deve considerar a modalidade de hospedagem disponível na Hostinger.

Caso a hospedagem seja estática, o projeto deve suportar exportação estática.

Avaliar uso de:

```txt
next export
```

ou configuração equivalente de output estático no Next.js, se compatível com a versão utilizada.

Se algum recurso do Next.js exigir runtime server-side incompatível com a Hostinger, preferir solução estática.

---

## 17. Estrutura sugerida de pastas

```txt
.
├── public/
│   ├── curriculo-rodrigo-coelho.pdf
│   ├── og-image.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Areas.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Articles.tsx
│   │   │   ├── Teaching.tsx
│   │   │   └── Contact.tsx
│   │   └── mockups/
│   │       └── HeroMockupCard.tsx
│   ├── content/
│   │   ├── pt.ts
│   │   └── en.ts
│   ├── lib/
│   │   ├── seo.ts
│   │   └── analytics.ts
│   └── types/
│       └── content.ts
├── DESIGN.md
├── PRD.md
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .env.example
```

---

## 18. Conteúdo editável

Todo conteúdo textual principal deve ficar centralizado em arquivos de conteúdo.

### Requisito

Evitar textos soltos diretamente dentro dos componentes.

### Objetivo

Facilitar manutenção, tradução e evolução futura.

### Conteúdos que devem ficar em arquivo

- Hero.
- Sobre.
- Áreas de atuação.
- Experiências.
- Projetos.
- Artigos.
- Aulas e palestras.
- Formação.
- Links.
- CTAs.
- Footer.
- SEO por idioma.

---

## 19. Dados iniciais sugeridos

### 19.1 Experiências

#### Drogaria Venancio

```txt
Head de Produto e Tecnologia
Liderança de produtos digitais, plataformas, site, app, PDV e suporte às aplicações, com foco em transformação digital, eficiência operacional, experiência do cliente e adoção de tecnologias emergentes.
```

Tags:

```txt
Produto Digital
Tecnologia
Varejo
IA Generativa
Omnichannel
```

#### Americanas S.A.

```txt
Gerente de Tecnologia
Atuação em ambiente de grande escala, com experiência em tecnologia, operações digitais, suporte a sistemas críticos, e-commerce, marketplace, incidentes e gestão de times.
```

Tags:

```txt
E-commerce
Marketplace
Operações
Tecnologia
Gestão
```

#### Professor convidado

```txt
Atuação em disciplinas e conteúdos relacionados a negócios sustentáveis, inovação, tecnologia aplicada e sustentabilidade, contribuindo para a formação de profissionais e lideranças.
```

Tags:

```txt
Educação Executiva
Sustentabilidade
Inovação
MBA
```

#### Produção acadêmica e editorial

```txt
Produção de artigos, análises e pesquisas sobre Inteligência Artificial, sustentabilidade, tecnologia, matriz energética, negócios digitais e transformação organizacional.
```

Tags:

```txt
IA
ESG
Artigos
Pesquisa
Tecnologia
```

---

## 20. CTAs

### CTA primário global

```txt
Conhecer meus projetos
```

### CTA secundário global

```txt
Conectar no LinkedIn
```

### Outros CTAs

```txt
Ler artigos
Baixar currículo
Entrar em contato
Ver experiências
```

---

## 21. Links e placeholders

O Claude Code deve criar uma área clara no conteúdo para preencher os links reais.

### Placeholders esperados

```ts
const links = {
  linkedin: "https://www.linkedin.com/in/SEU-LINKEDIN",
  whatsapp: "https://wa.me/55SEUNUMERO",
  email: "mailto:SEUEMAIL",
  resume: "/curriculo-rodrigo-coelho.pdf",
  articleEsgInside: "https://INSERIR-LINK-DO-ARTIGO",
};
```

Não inventar links pessoais reais.

Quando o link não for informado, usar placeholder claro e documentar no README.

---

## 22. Analytics

### Requisito

Criar estrutura para analytics sem ativar tracking por padrão.

### Variáveis sugeridas

```txt
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_ID=
```

### Comportamento

- Se a variável estiver vazia, não carregar script.
- Se estiver preenchida, carregar script correspondente.
- Documentar no README.

---

## 23. Critérios de aceite

O projeto será considerado pronto quando:

1. A landing page estiver implementada como página única.
2. O design seguir claramente o `DESIGN.md`.
3. A estética geral estiver próxima de um SaaS moderno, como Cal.com.
4. O hero tiver headline, subheadline, dois CTAs e card visual de interface.
5. A página não utilizar foto pessoal.
6. A navegação por âncoras funcionar.
7. A alternância PT-BR / EN funcionar.
8. Todas as seções obrigatórias estiverem presentes.
9. O formulário de contato estiver funcional ou configurável.
10. Existirem links para LinkedIn, WhatsApp, currículo e artigos.
11. O botão de download de currículo estiver presente.
12. O footer escuro estiver implementado.
13. O layout estiver responsivo.
14. Os requisitos básicos de SEO estiverem implementados.
15. O projeto não utilizar banco de dados.
16. O conteúdo estiver separado dos componentes.
17. O README explicar como rodar, configurar e fazer deploy.
18. O Lighthouse deve atingir, preferencialmente:
    - Performance acima de 90.
    - Accessibility acima de 90.
    - SEO acima de 90.
19. Não devem existir erros de TypeScript.
20. Não devem existir erros de lint.

---

## 24. Instruções específicas para o Claude Code

### 24.1 Instrução principal

Leia este `PRD.md` e o arquivo `DESIGN.md` antes de implementar.

O `DESIGN.md` deve ser tratado como a fonte principal de direção visual. O `PRD.md` define o produto, as seções, os requisitos funcionais, o conteúdo e os critérios de aceite.

### 24.2 Ordem sugerida de implementação

1. Ler `DESIGN.md`.
2. Criar ou revisar estrutura do projeto.
3. Configurar Next.js, TypeScript e Tailwind CSS.
4. Criar tokens visuais no Tailwind a partir do `DESIGN.md`.
5. Criar componentes base:
   - Button.
   - Card.
   - Badge.
   - Section.
   - Header.
   - Footer.
6. Criar arquivos de conteúdo PT-BR e EN.
7. Implementar hero e mockup visual.
8. Implementar seções:
   - Sobre.
   - Áreas de atuação.
   - Experiência.
   - Projetos.
   - Artigos.
   - Aulas e formação.
   - Contato.
9. Implementar alternância de idioma.
10. Implementar SEO, Open Graph, sitemap e robots.
11. Implementar analytics opcional.
12. Implementar responsividade.
13. Validar acessibilidade.
14. Validar build.
15. Atualizar README com instruções de uso e deploy.

### 24.3 Regras de design obrigatórias

- Usar canvas branco.
- Usar CTAs primários pretos.
- Usar cards em cinza-claro.
- Usar bordas suaves e radius moderado.
- Usar bastante espaçamento.
- Usar footer escuro.
- Usar poucos acentos de cor.
- Não usar foto pessoal.
- Criar pelo menos um card visual de interface no hero.
- Evitar visual de currículo tradicional.
- Evitar exageros visuais.

### 24.4 Regras de engenharia

- Usar TypeScript.
- Usar componentes reutilizáveis.
- Usar Tailwind CSS.
- Não usar banco de dados.
- Não criar dependências desnecessárias.
- Manter conteúdo em arquivos separados.
- Garantir responsividade.
- Garantir build limpo.
- Criar README.
- Criar `.env.example`.
- Documentar placeholders.

### 24.5 Resultado esperado

Ao final, entregar uma landing page pessoal moderna, bilíngue, responsiva, rápida e institucional, pronta para publicação inicial na Hostinger e com base de código simples de manter.

---

## 25. Comando sugerido para iniciar no Claude Code

Use este comando dentro da pasta do projeto:

```txt
Leia cuidadosamente os arquivos PRD.md e DESIGN.md antes de começar. Implemente a landing page pessoal conforme o PRD, usando o DESIGN.md como referência obrigatória de design system. Use Next.js, TypeScript, Tailwind CSS e App Router. Não use banco de dados. Mantenha o conteúdo separado dos componentes, implemente suporte bilíngue PT-BR/EN, SEO, formulário de contato configurável, links para LinkedIn, WhatsApp, currículo em PDF, analytics opcional e responsividade completa. Siga os critérios de aceite do PRD e atualize o README com instruções para rodar, configurar e fazer deploy na Hostinger.
```

---

## 26. Fora de escopo nesta versão

Não implementar nesta primeira versão:

- Blog dinâmico com CMS.
- Banco de dados.
- Login.
- Painel administrativo.
- Integração com agenda tipo Cal.com.
- Área restrita.
- Comentários.
- Newsletter com backend próprio.
- E-commerce.
- Sistema de publicação de artigos via interface administrativa.

Esses itens podem ser considerados em versões futuras.

---

## 27. Evoluções futuras possíveis

- Blog estático com MDX.
- CMS headless.
- Página específica para palestras.
- Página específica para consultoria.
- Página específica para artigos.
- Integração com agenda.
- Newsletter.
- Versão 100% em inglês.
- Área de mídia kit.
- Página de imprensa.
- Galeria de eventos e aulas.
- Integração com LinkedIn ou RSS.

---

## 28. Observações finais

A página deve transmitir credibilidade executiva e modernidade tecnológica. O foco não é parecer um currículo online, mas sim uma presença digital autoral, organizada e estratégica.

A experiência visual deve lembrar um produto SaaS moderno, com cards bem construídos, fragmentos de interface, boa tipografia, bom uso de espaços em branco e CTAs claros.

O resultado final deve ajudar Rodrigo Coelho a se posicionar publicamente como executivo de Produto e Tecnologia com forte atuação em IA Generativa, transformação digital, sustentabilidade, artigos, aulas, projetos e palestras.
