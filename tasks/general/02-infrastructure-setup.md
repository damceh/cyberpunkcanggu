# Phase 2: Infrastructure Setup

**Timeline:** Week 2 (Dec 9 - Dec 15, 2025)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7h5

## Objective
Set up the technical infrastructure for the website including GitHub repository, Cloudflare Pages deployment, and development environment configuration.

## Technical Stack
- **Platform:** Cloudflare Pages (Static Site)
- **Repository:** GitHub
- **Framework:** SSG (Astro or Next.js)
- **Styling:** Tailwind CSS
- **Analytics:** Google Analytics / Cloudflare Analytics

## Tasks

### 2.1 Create GitHub Repository
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Initialize repository with proper structure
- Set up .gitignore
- Create README with project info
- Set up branch protection rules

**Repository Structure:**
```
cyberpunk-canggu/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── content/
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
└── README.md
```

---

### 2.2 Configure Cloudflare Pages Deployment
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Connect GitHub repository to Cloudflare Pages
- Configure build settings
- Set up custom domain (if available)
- Configure environment variables
- Set up preview deployments for PRs

---

### 2.3 Set Up Development Environment
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Node.js environment
- Package manager (npm/pnpm)
- ESLint configuration
- Prettier configuration
- VS Code settings

---

### 2.4 Choose and Configure SSG Framework
**Priority:** High
**Status:** [ ] Not Started

**Options:**
1. **Astro** (Recommended)
   - Excellent for content-heavy static sites
   - Zero JS by default
   - Great performance
   
2. **Next.js** (Alternative)
   - More feature-rich
   - Good if future dynamic features needed
   - SSG/SSR flexibility

**Decision Criteria:**
- Performance (Core Web Vitals)
- Ease of content updates
- Developer experience
- Cloudflare Pages compatibility

---

### 2.5 Set Up Tailwind CSS with Cyberpunk Theme
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Install and configure Tailwind CSS
- Create custom color palette (cyberpunk theme)
- Set up typography scale
- Configure responsive breakpoints
- Create reusable component classes

**Example Theme Config:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0f',
          primary: '#00ff9f',    // Neon green
          secondary: '#ff00ff',  // Magenta
          accent: '#00d4ff',     // Cyan
          warning: '#ffcc00',    // Yellow
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  }
}
```

---

### 2.6 Configure Analytics
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Set up Google Analytics 4
- Configure Cloudflare Analytics (backup)
- Set up WhatsApp click tracking event
- Create conversion goals

**Key Events to Track:**
- WhatsApp "Book Now" clicks (Primary KPI)
- Page views per session
- Time on site
- Navigation patterns

---

## Acceptance Criteria
- [ ] Repository created and accessible
- [ ] Cloudflare Pages connected and deploying
- [ ] Development server running locally
- [ ] Tailwind CSS configured with cyberpunk theme
- [ ] Analytics tracking code implemented
- [ ] CI/CD pipeline working (push to deploy)

## Notes
- Cloudflare Pages free tier should be sufficient for initial traffic
- Consider Headless CMS (Contentful/Sanity) for easy content updates later
