# Cyberpunk Canggu Website

Premium 24/7 Gaming Lounge in Canggu, Bali

## 🚀 Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Cloudflare Pages
- **Repository:** GitHub

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components (Navigation, Footer)
│   ├── layouts/      # Page layouts (BaseLayout)
│   ├── pages/        # Routes (index, zones, gear, etc.)
│   ├── styles/       # Global CSS and Tailwind config
│   └── types/        # TypeScript types
├── tasks/            # Project task management
├── droids/           # AI specialist droids
└── orchestrator/     # Orchestration patterns
```

## 🎨 Pages

- **Home** (`/`) - Hero, features, zones preview
- **Zones** (`/zones`) - Main Zone, VIP Zone, PS5 Rooms
- **Gear & Setup** (`/gear`) - Hardware specs, peripherals
- **Pricelist** (`/pricelist`) - Pricing tables, booking notes
- **Games** (`/games`) - PC and PS5 game library
- **About** (`/about`) - Brand story and values
- **Contact** (`/contact`) - Location, hours, contact info

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Cyberpunk theme with neon accents
- ✅ SEO optimized with meta tags and structured data
- ✅ Fast page loads (Astro SSG)
- ✅ WhatsApp booking integration
- ✅ 100+ games library
- ✅ Sitemap and robots.txt

## 📊 SEO & Analytics

### Setup Google Analytics

Add your GA4 tracking ID to `src/layouts/BaseLayout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🚀 Deployment (Cloudflare Pages)

### Via GitHub Integration

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy!

### Manual Deploy

```bash
npm run build
npx wrangler pages deploy dist
```

## 📝 Content Updates

### Update Pricing

Edit prices in `src/pages/pricelist.astro` in the `pricing` object.

### Add Games

Edit game lists in `src/pages/games.astro` in the `pcGames` and `ps5Games` arrays.

### Update Contact Info

Edit WhatsApp number, email, and address in:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/pages/contact.astro`

## 🎨 Theme Customization

The cyberpunk theme is defined in `src/styles/global.css` using Tailwind's `@theme` directive:

- Colors: `--color-cyber-*`
- Fonts: `--font-heading`, `--font-body`
- Shadows: `--shadow-neon-*`

## 📱 Social Media

Update social media links in:
- `src/components/Footer.astro`
- `src/pages/contact.astro`

## ⚡ Performance

Built for speed:
- Static Site Generation (no JavaScript overhead)
- Optimized Tailwind CSS
- Compressed HTML
- Lazy loading ready

## 📄 License

© 2025 Cyberpunk Canggu. All rights reserved.

## 🤝 Support

For issues or questions, contact: info@cyberpunkcanggu.com
