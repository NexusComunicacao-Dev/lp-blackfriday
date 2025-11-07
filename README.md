# Landing Page Black Friday NEXUS

Landing page de alta conversão para a Black Friday da NEXUS Comunicação, destacando o **Trio Imbatível**: SMS, WhatsApp e RCS (Rich Communication Services) para maximizar vendas durante o período de maior pico comercial do ano.

🌐 **URL**: [blackfriday.nexuscomunicacao.com](https://blackfriday.nexuscomunicacao.com)

## 🚀 Tecnologias

- **Astro 5.0.5** - Framework web moderno com SSR/SSG híbrido
- **Tailwind CSS 3.4.15** - Framework CSS utility-first
- **TypeScript** - Tipagem estática para maior segurança
- **Resend** - Serviço de envio de e-mails transacionais
- **Vercel** - Plataforma de deploy serverless com edge functions
- **@vercel/analytics** - Analytics de tráfego e conversão
- **@astrojs/sitemap** - Geração automática de sitemap
- **Google Fonts (Geologica)** - Tipografia moderna e responsiva

## ✨ Características

### 🎨 Design & UX
- ✅ Design responsivo mobile-first com breakpoints otimizados
- ✅ Typography responsiva em todas as seções
- ✅ Gradientes e animações suaves
- ✅ Tema customizado com cores da marca NEXUS
- ✅ WhatsApp floating button para contato direto
- ✅ Mockups RCS interativos com Astro Image component

### ⚡ Performance
- ✅ Font preloading com carregamento assíncrono
- ✅ Imagens otimizadas com `<Image>` component (WebP/AVIF)
- ✅ `fetchpriority="high"` em imagens hero para LCP
- ✅ Lazy loading automático de imagens
- ✅ CSS inlining automático para critical path
- ✅ HTML compression habilitado
- ✅ Build otimizado com Vite

### 🔍 SEO & Analytics
- ✅ Meta tags completas (title, description)
- ✅ Open Graph para Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ Schema.org (Organization + Service)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Vercel Analytics integrado
- ✅ Vercel Web Analytics (Core Web Vitals)

### ♿ Acessibilidade
- ✅ Hierarquia de headings correta (H1 → H2 → H3)
- ✅ ARIA labels em elementos interativos
- ✅ Contraste de cores otimizado (WCAG AA)
- ✅ Navegação por teclado
- ✅ Alt text descritivo em todas as imagens

### 📬 Formulário & Lead Capture
- ✅ Validação client-side e server-side
- ✅ Integração com Resend API
- ✅ Feedback visual (loading, success, error)
- ✅ Privacy policy compliance (LGPD)
- ✅ Trust indicators (segurança, sem spam, resposta 24h)

## 📁 Estrutura do Projeto

```
blackfriday/
├── src/
│   ├── components/              # Componentes Astro
│   │   ├── Hero.astro          # Hero section com logo e lady holding phone
│   │   ├── Challenge.astro     # Problema da Black Friday
│   │   ├── TrioImbativel.astro # SMS + WhatsApp + RCS (seção principal)
│   │   ├── WhyNexus.astro      # Diferenciais da NEXUS
│   │   ├── CTAForm.astro       # Formulário de captura de leads
│   │   ├── Footer.astro        # Footer com logo e redes sociais
│   │   ├── WhatsAppButton.astro # Floating WhatsApp button
│   │   └── PhoneMockup.astro   # Mockup de telefone com RCS
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout base com SEO e Analytics
│   └── pages/
│       ├── index.astro         # Página principal
│       ├── politica-privacidade.astro # Política de privacidade
│       └── api/
│           └── subscribe.ts    # Endpoint de submissão do formulário
├── public/
│   ├── logo.png                # Logo NEXUS
│   ├── lady_holding_phone.png  # Imagem hero
│   ├── mockup-rcs.png          # Mockup RCS
│   ├── mockup-rcs2.png         # Mockup RCS alternativo
│   ├── grid.svg                # Pattern decorativo
│   ├── robots.txt              # SEO robots
│   └── favicon.svg             # Favicon
├── astro.config.mjs            # Configuração Astro + Vercel + Sitemap
├── tailwind.config.mjs         # Cores da marca NEXUS
└── package.json
```

## 🎨 Cores da Marca NEXUS

```javascript
// tailwind.config.mjs
colors: {
  'nexus-tech': '#606060',           // Tecnológica (cinza)
  'nexus-respect': '#034BD3',        // Respeitosa (azul)
  'nexus-creative': '#FF7C1A',       // Criativa (laranja)
  'nexus-creative-dark': '#E66A00',  // Criativa escura
  'bf-black': '#000000',             // Black Friday preto
  'bf-gray-dark': '#1a1a1a',         // Cinza escuro
  'bf-gold': '#FFD700',              // Dourado Black Friday
  'bf-gold-dark': '#FFA500',         // Dourado escuro
  'bf-purple': '#8B00FF',            // Roxo Black Friday
}
```

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Resend API Key (obtenha em https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email de destino para receber os cadastros
CONTACT_EMAIL=sms@nexuscomunicacao.com
```

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse em: `http://localhost:4321`

### 4. Build para Produção

```bash
npm run build
```

### 5. Preview do Build

```bash
npm run preview
```

## 🚢 Deploy na Vercel

### Configuração Automática (Recomendado)

1. Conecte o repositório GitHub na [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
3. Deploy automático a cada push na branch `main`

### Via CLI

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📧 Configuração do Resend

1. Crie uma conta em [resend.com](https://resend.com)
2. Verifique seu domínio (ou use domínio de teste)
3. Gere uma API Key em Settings → API Keys
4. Configure a variável `RESEND_API_KEY`

### Alterar Email de Envio

Edite `src/pages/api/subscribe.ts`:

```typescript
from: 'Black Friday NEXUS <noreply@nexuscomunicacao.com>',
to: process.env.CONTACT_EMAIL || 'sms@nexuscomunicacao.com',
```

## 🎯 Componentes Principais

### Hero Section
- Logo NEXUS em badge com backdrop blur
- Título principal com gradientes
- Subtítulo destacando SMS, WhatsApp e RCS
- CTA button scroll to form
- Imagem lady holding phone posicionada absolutamente
- Trust indicators (10 anos, suporte especializado)

### Trio Imbatível
- **SMS**: Rapidez, alcance universal, alta taxa de leitura
- **WhatsApp**: Conversacional, interativo, familiar
- **RCS**: Visual, interativo, carrosséis, vídeos, mapas
- Destaque para "Agentes Compartilhados" prontos para Black Friday

### Formulário (CTAForm)
- Campos: Nome, Email, WhatsApp, Empresa
- Checkbox de privacidade obrigatório
- Validação client-side
- Feedback visual (loading, success, error)
- Trust indicators ao final

### Footer
- Logo NEXUS
- Links úteis (Site, Contato, Política)
- Redes sociais (Facebook, LinkedIn, Instagram)
- Email de contato
- Copyright e desenvolvedor

## ⚡ Otimizações de Performance

### Fontes
```html
<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload -->
<link rel="preload" as="style" href="..." />

<!-- Async loading -->
<link rel="stylesheet" media="print" onload="this.media='all'" />
```

### Imagens Hero
```astro
<Image
  src={ladyHoldingPhone}
  loading="eager"
  fetchpriority="high"
  quality={90}
/>
```

### Build Config
```javascript
// astro.config.mjs
export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
```

## 📊 Analytics

### Vercel Analytics
Tracking completo de pageviews, eventos e tráfego.

### Vercel Web Analytics
Core Web Vitals: LCP, FID, CLS, FCP, TTFB.

Acesse no dashboard da Vercel após deploy.

## 🔒 Privacidade e LGPD

- Página de Política de Privacidade: `/politica-privacidade`
- Checkbox obrigatório no formulário
- Dados armazenados apenas para contato comercial
- Não compartilhamento com terceiros para marketing

## 📱 Responsividade

Breakpoints Tailwind:
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large)

Typography responsiva em todas as seções:
```html
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
```

## 🌐 Domínio

**Produção**: https://blackfriday.nexuscomunicacao.com

Configurado em:
- `astro.config.mjs` → `site`
- `public/robots.txt` → `Sitemap`

## 🤝 Suporte

- **Email**: sms@nexuscomunicacao.com
- **Site**: https://nexuscomunicacao.com
- **WhatsApp**: Via floating button na landing page

## 📝 Licença

© 2025 NEXUS Comunicação. Todos os direitos reservados.

---

**Desenvolvido por**: [Fabrício Bahiense](https://github.com/FabbSantos)
