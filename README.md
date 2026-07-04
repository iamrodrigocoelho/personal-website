# iamrodrigocoelho.com

Landing page pessoal de Rodrigo Coelho — executivo de Produto e Tecnologia com atuação em IA Generativa, transformação digital e inovação.

Construída com **Next.js 16**, **TypeScript**, **Tailwind CSS v4** e **App Router**. Geração 100% estática (compatível com Hostinger).

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
| `NEXT_PUBLIC_FORMSPREE_ID` | Não | Formspree Form ID para o formulário de contato |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Não | Google reCAPTCHA v3 Site Key (chave pública) |

Se as variáveis estiverem vazias, analytics não são carregados e o formulário usa fallback `mailto:`.

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

O formulário suporta dois modos:

**Modo Formspree (recomendado):**
1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o ID (ex: `abcdef01`)
3. Adicione ao `.env.local`: `NEXT_PUBLIC_FORMSPREE_ID=abcdef01`

**Modo mailto (fallback):**
- Se `NEXT_PUBLIC_FORMSPREE_ID` não estiver configurado, o envio abre o cliente de e-mail padrão do usuário com os dados preenchidos.

**Proteção anti-spam com Google reCAPTCHA v3 (opcional):**

Como o site é um export estático (sem servidor próprio), a verificação do token é feita pelo Formspree, que aceita [chaves reCAPTCHA customizadas](https://help.formspree.io/articles/form-and-project-settings/using-recaptcha-v3).

1. Crie as chaves em [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) escolhendo o tipo **reCAPTCHA v3**
2. Registre o domínio do site (e `localhost` para testes)
3. Adicione a **Site Key** (pública) ao `.env.local`: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...`
4. Cole a **Secret Key** (privada) no painel do Formspree, em **Settings → reCAPTCHA** do seu formulário — nunca no código ou em variáveis `NEXT_PUBLIC_*`

Com isso, o formulário executa o reCAPTCHA v3 de forma invisível no envio (ação `contact_form`) e manda o token no campo `g-recaptcha-response`; o Formspree valida o token junto ao Google antes de aceitar a mensagem. Sem as chaves, o formulário continua funcionando normalmente, protegido apenas pelo honeypot.

---

## Conteúdo

Todo o conteúdo textual está centralizado em:

```
src/content/pt.ts   # Português (idioma padrão)
src/content/en.ts   # Inglês
```

Edite esses arquivos para atualizar textos, links, experiências, projetos e artigos sem precisar alterar componentes.

---

## Build e exportação estática

```bash
# Build para produção (gera pasta /out)
npm run build
```

O projeto está configurado com `output: "export"` no `next.config.ts`, gerando HTML/CSS/JS estático na pasta `/out`. Isso garante compatibilidade com hospedagem estática na Hostinger.

---

## Deploy na Hostinger

### Passo a passo

1. Faça o build local:
   ```bash
   npm run build
   ```

2. A pasta `out/` contém todos os arquivos estáticos.

3. Acesse o painel da Hostinger → **File Manager** (ou use FTP/SFTP).

4. Navegue até `public_html/` (ou a pasta raiz do seu domínio).

5. Faça upload de **todo o conteúdo** da pasta `out/` para `public_html/`.

6. Confirme que `index.html` está na raiz de `public_html/`.

### Configurar domínio

No painel da Hostinger:
1. Vá em **Domains** → adicione `iamrodrigocoelho.com`
2. Aponte o DNS para os nameservers da Hostinger
3. Aguarde a propagação (pode levar até 24h)

### Configurar HTTPS

A Hostinger oferece SSL gratuito via Let's Encrypt. Ative em:
**Hosting** → **SSL** → **Install SSL Certificate**.

### Arquivo .htaccess (opcional)

Se precisar de redirects ou configurações extras, crie um `.htaccess` na raiz. Exemplo para URLs com trailing slash:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

---

## Deploy alternativo (Vercel)

Se preferir usar Vercel (recomendado para Next.js):

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
