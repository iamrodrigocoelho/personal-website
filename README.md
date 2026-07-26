# rodrigocoelho.me

Landing page pessoal de Rodrigo Coelho, executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital e inovação.

Construída com **Next.js 16**, **TypeScript**, **Tailwind CSS v4** e **App Router**. Roda como aplicação **Node.js** (deploy na Hostinger), com rota de API própria para o formulário de contato (reCAPTCHA v3 + Resend).

---

## Pré-requisitos

- Node.js 18+
- npm 9+

---

## Rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## Configuração

### 1. Variáveis de ambiente

Copie o arquivo de exemplo e preencha os valores:

```bash
cp .env.example .env.local
```

**Variáveis disponíveis:**

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Não | Google Analytics 4 Measurement ID (ex: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_CLARITY_ID` | Não | Microsoft Clarity Project ID |
| `RESEND_API_KEY` | Não | API Key do [Resend](https://resend.com) para envio do formulário (server-side) |
| `CONTACT_TO_EMAIL` | Não | E-mail que recebe as mensagens do formulário |
| `CONTACT_FROM_EMAIL` | Não | Remetente (domínio verificado no Resend); padrão: `onboarding@resend.dev` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Não | Google reCAPTCHA v3 Site Key (chave pública) |
| `RECAPTCHA_SECRET_KEY` | Não | Google reCAPTCHA v3 Secret Key (verificação server-side) |

Se as variáveis estiverem vazias, analytics não são carregados e o formulário usa fallback `mailto:`.

> As variáveis `NEXT_PUBLIC_*` são embutidas no JavaScript **no momento do build**; as demais são lidas pelo servidor em tempo de execução e nunca chegam ao browser.

### 2. Links pessoais

Edite os links em `src/content/pt.ts` e `src/content/en.ts`:

```ts
links: {
  linkedin: "https://www.linkedin.com/in/SEU-PERFIL",
  whatsapp: "https://wa.me/55SEUNUMERO",
  email: "mailto:SEU@EMAIL.COM",
  resume: "/curriculo-rodrigo-coelho.pdf",
  articleEsgInside: "https://LINK-DO-ARTIGO",
},
```

### 3. Currículo em PDF

Substitua o arquivo placeholder pelo PDF real:

```
public/curriculo-rodrigo-coelho.pdf
```

### 4. Imagem Open Graph

Adicione uma imagem `1200×630px` em:

```
public/og-image.png
```

### 5. Favicon

Substitua o favicon em:

```
src/app/favicon.ico
```

### 6. Formulário de contato

O envio passa pela rota interna **`/api/contact`**, que roda no servidor e faz, nesta ordem:

1. Descarta bots que preenchem o campo honeypot
2. Valida os campos obrigatórios
3. Verifica o token do **reCAPTCHA v3** junto ao Google (exige `success`, ação `contact_form` e score ≥ 0.5) — se `RECAPTCHA_SECRET_KEY` estiver configurada
4. Envia o e-mail via **API do Resend**

**Configurar o Resend:**
1. Crie uma conta em [resend.com](https://resend.com) e gere uma **API Key** (menu API Keys)
2. Verifique seu domínio em **Domains** (registros DNS) para enviar de um endereço próprio, ex: `contato@iamrodrigocoelho.com`
3. Configure as variáveis:
   - `RESEND_API_KEY=re_...`
   - `CONTACT_TO_EMAIL=` e-mail que recebe as mensagens
   - `CONTACT_FROM_EMAIL="Contato <contato@seudominio.com>"` (opcional; sem domínio verificado o padrão `onboarding@resend.dev` só entrega para o e-mail da própria conta Resend)

O e-mail chega com `Reply-To` preenchido com o endereço de quem enviou o formulário — basta responder normalmente.

**Configurar o Google reCAPTCHA v3 (anti-spam, opcional):**
1. Crie as chaves em [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) escolhendo o tipo **reCAPTCHA v3**
2. Registre o domínio do site (e `localhost` para testes)
3. Configure as variáveis (sempre em par):
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=` Site Key (pública)
   - `RECAPTCHA_SECRET_KEY=` Secret Key (privada, só no servidor)

**Modo mailto (fallback):**
- Se o Resend não estiver configurado (sem `RESEND_API_KEY`/`CONTACT_TO_EMAIL`), o envio abre o cliente de e-mail padrão do usuário com os dados preenchidos.

---

## Conteúdo

Todo o conteúdo textual está centralizado em:

```
src/content/pt.ts   # Português (idioma padrão)
src/content/en.ts   # Inglês
```

Edite esses arquivos para atualizar textos, links, experiências, projetos e artigos sem precisar alterar componentes.

---

## Build e execução em produção

```bash
npm run build   # build de produção
npm start       # inicia o servidor Node.js (porta 3000, ou a variável PORT)
```

O site roda como aplicação Node.js — necessário para a rota `/api/contact` (verificação do reCAPTCHA e envio via Resend acontecem no servidor).

---

## Deploy na Hostinger (Node.js)

A Hostinger suporta aplicações Node.js de duas formas ([documentação](https://www.hostinger.com/support/node-js-hosting-options-at-hostinger/)):

### Opção A — Node.js Web Apps (hPanel, planos Business/Cloud)

1. No hPanel, vá em **Websites → Add Website → Node.js Apps**
2. Escolha **Import Git Repository** e autorize o acesso ao GitHub, selecionando este repositório
3. Configure build command `npm run build` e start command `npm start`
4. Em **Environment Variables**, adicione as variáveis do `.env.example` preenchidas — inclusive as `NEXT_PUBLIC_*`, que precisam existir **antes do build**:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` (se usar analytics)
5. Faça o deploy; o painel mostra os logs de build e o status

A cada push no branch configurado, o painel permite redeployar (**Settings & Redeploy**).

### Opção B — VPS

1. Conecte via SSH e instale Node.js 18+ (ex: via `nvm`)
2. Clone o repositório e crie o `.env.local` com as variáveis preenchidas
3. Build e execução com um gerenciador de processos:
   ```bash
   npm install
   npm run build
   npm install -g pm2
   pm2 start npm --name site -- start
   pm2 save && pm2 startup
   ```
4. Configure um reverse proxy (Nginx/Caddy) apontando para `http://localhost:3000` e ative HTTPS (Let's Encrypt)

### Domínio e HTTPS

No painel da Hostinger:
1. **Domains** → aponte `iamrodrigocoelho.com` para o app/VPS
2. SSL gratuito via Let's Encrypt: **Hosting → SSL → Install SSL Certificate** (no VPS, use `certbot`)

---

## Deploy alternativo (Vercel)

```bash
npm install -g vercel
vercel
```

Configure as variáveis de ambiente no painel da Vercel.

---

## Estrutura de arquivos

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # POST: verificação reCAPTCHA + envio via Resend
│   ├── layout.tsx          # Layout global, metadados, analytics
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Design tokens (Tailwind v4), estilos base
│   ├── robots.ts           # Geração de robots.txt
│   └── sitemap.ts          # Geração de sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navegação sticky com menu mobile
│   │   ├── Footer.tsx      # Rodapé escuro
│   │   ├── Section.tsx     # Wrapper de seção + SectionHeader
│   │   └── PageClient.tsx  # Client component com estado de idioma
│   ├── ui/
│   │   ├── Button.tsx      # Botão primário/secundário/ghost
│   │   ├── Badge.tsx       # Pill de tag/categoria
│   │   ├── Card.tsx        # Card soft/outline/elevated
│   │   ├── LanguageToggle.tsx  # Seletor PT/EN
│   │   ├── Analytics.tsx   # GA + Clarity (lazy load)
│   │   └── Icons.tsx       # Ícone LinkedIn customizado
│   ├── sections/
│   │   ├── Hero.tsx        # Hero com headline + mockup card
│   │   ├── About.tsx       # Sobre com 3 cards
│   │   ├── Areas.tsx       # Grid 6 áreas de atuação
│   │   ├── Experience.tsx  # Experiências profissionais
│   │   ├── Projects.tsx    # Projetos e iniciativas
│   │   ├── Articles.tsx    # Artigos e publicações
│   │   ├── Teaching.tsx    # Aulas, palestras e formação
│   │   └── Contact.tsx     # Formulário + links rápidos
│   └── mockups/
│       └── HeroMockupCard.tsx  # Card visual de produto no hero
├── content/
│   ├── pt.ts               # Conteúdo em português
│   └── en.ts               # Conteúdo em inglês
├── lib/
│   ├── seo.ts              # Metadados e schema.org
│   └── analytics.ts        # Configuração de analytics
└── types/
    └── content.ts          # Tipagem TypeScript do conteúdo
```

---

## SEO

- Title e meta description configurados por idioma
- Open Graph para LinkedIn, WhatsApp e redes sociais
- Twitter Card
- Schema.org `Person` no `<head>`
- `robots.txt` e `sitemap.xml` gerados automaticamente
- Heading hierarchy: único `<h1>` no hero, `<h2>` nas seções

---

## Acessibilidade

- Skip-to-content link para usuários de teclado
- Focus-visible rings em todos os elementos interativos
- `aria-label` em botões de ícone
- Labels em todos os campos do formulário
- `prefers-reduced-motion` respeitado
- HTML semântico com `<section>`, `<nav>`, `<main>`, `<footer>`, `<article>`
- Contraste de texto mínimo WCAG AA

---

## Analytics

O projeto suporta dois sistemas de analytics, ativados via variáveis de ambiente:

- **Google Analytics 4** — `NEXT_PUBLIC_GA_ID`
- **Microsoft Clarity** — `NEXT_PUBLIC_CLARITY_ID`

Se as variáveis estiverem vazias, nenhum script é carregado. Nenhum dado é coletado por padrão.

---

## Tecnologias

- [Next.js 16](https://nextjs.org)
- [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide React](https://lucide.dev)
- [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

---

## Licença

© 2026 Rodrigo Coelho. Todos os direitos reservados.
