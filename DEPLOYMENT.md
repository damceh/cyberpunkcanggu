# Cyberpunk Canggu - Deployment Guide

## ✅ Completed

### Core Website (v1.0)
- ✅ **Tech Stack**: Astro 5 + Tailwind CSS 4
- ✅ **7 Pages**: Home, Zones, Gear, Pricelist, Games, About, Contact
- ✅ **Design System**: Cyberpunk theme with dark colors and neon accents
- ✅ **Responsive**: Mobile-first design, works on all devices
- ✅ **SEO**: Meta tags, structured data (JSON-LD), sitemap.xml, robots.txt
- ✅ **Performance**: Static site generation, compressed HTML, optimized CSS
- ✅ **100+ Games**: PC and PS5 game library
- ✅ **WhatsApp Integration**: Booking CTAs throughout site

### Project Structure
```
cyberpunkcanggu/
├── src/
│   ├── components/    # Navigation, Footer
│   ├── layouts/       # BaseLayout with SEO
│   ├── pages/         # All 7 pages + sitemap
│   └── styles/        # Cyberpunk Tailwind theme
├── public/            # Static assets
├── dist/              # Build output (not committed)
└── README.md          # Documentation
```

## 📋 Next Steps (Before Launch)

### 1. Content & Assets (HIGH PRIORITY)
- [ ] **Add high-res photos** to `/public/images/`:
  - `main-zone.jpg` - Main gaming area
  - `vip-zone.jpg` - VIP private area
  - `ps5-room.jpg` - PS5 console room
  - `og-image.jpg` - Social media preview (1200x630px)
- [ ] **Update contact details** in:
  - `src/components/Navigation.astro` (line 11)
  - `src/components/Footer.astro` (line 4)
  - `src/pages/contact.astro` (line 7-9)
  - Replace `+6281234567890` with actual WhatsApp number
  - Replace `Canggu, Bali, Indonesia` with full address
- [ ] **Update social media links** in Footer and Contact pages:
  - Instagram handle
  - TikTok handle
  - Facebook page

### 2. Analytics Setup (MEDIUM PRIORITY)
- [ ] Get Google Analytics 4 tracking ID
- [ ] Add to `src/layouts/BaseLayout.astro` (before `</head>` tag):
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

### 3. Cloudflare Pages Deployment

#### Option A: GitHub Integration (Recommended)
1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Select your GitHub repository
   
3. **Build Settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   
4. **Environment Variables**: None needed

5. **Deploy**: Click "Save and Deploy"

#### Option B: Manual Deploy
```bash
# Build the site
npm run build

# Install Wrangler (if not installed)
npm install -g wrangler

# Deploy
npx wrangler pages deploy dist --project-name=cyberpunk-canggu
```

### 4. Custom Domain Setup
1. In Cloudflare Pages:
   - Go to Custom Domains
   - Add `cyberpunkcanggu.com` and `www.cyberpunkcanggu.com`
2. Update DNS records (Cloudflare handles SSL automatically)
3. Update `astro.config.mjs` if domain changes

### 5. Post-Launch Tasks
- [ ] Submit sitemap to Google Search Console: `https://cyberpunkcanggu.com/sitemap.xml`
- [ ] Test WhatsApp booking links on mobile
- [ ] Verify Google Analytics tracking
- [ ] Check all pages on different devices/browsers
- [ ] Set up Cloudflare Analytics as backup

## 🧪 Local Development

### Start Dev Server
```bash
npm run dev
```
Visit: http://localhost:4321

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Expected Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **First Load**: <2s
- **Core Web Vitals**: All green
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## 🎯 Success Metrics (from PRD)

Track these in Google Analytics:

1. **WhatsApp CTR**: Target 7% within 90 days
2. **Views Per Session**: Target 3.0+
3. **SEO Ranking**: Top 3 for "Gaming Lounge Canggu" within 6 months

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Delete `node_modules` and run `npm install`
- Clear Astro cache: `rm -rf .astro`

### Tailwind Not Working
- Ensure `@tailwindcss/vite` is in `package.json`
- Check `global.css` is imported in `BaseLayout.astro`

### Images Not Loading
- Images must be in `/public/` directory
- Reference without `/public/` prefix: `/images/photo.jpg`

## 📞 Support

For questions or issues:
- Email: info@cyberpunkcanggu.com
- Project docs: `/README.md`

---

**Built with 🎮 by Factory Orchestrator**
