# Phase 3.1: Homepage & Navigation Implementation

**Timeline:** Week 3 (Dec 16 - Dec 22, 2025)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7h2

## Objective
Implement the homepage and navigation system with cyberpunk branding, key value propositions, and primary CTA.

## Key Requirements
- High-impact visuals with cyberpunk vibe (dark, neon accents)
- Clear display of value props: "Open 24/7", "Premium Hardware", "High-Speed Internet"
- WhatsApp "Book Now" CTA above the fold
- Responsive navigation bar
- Footer with contact info and social links

## Tasks

### 3.1.1 Implement Responsive Navigation Bar
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Logo placement
- Navigation links: Home, Zones, Games, Pricelist, Gear, About, Contact
- Mobile hamburger menu
- Sticky/fixed on scroll
- Cyberpunk styling (neon accents on hover)

**Component Structure:**
```
<Header>
  <Logo />
  <Navigation>
    <NavLinks /> (desktop)
    <MobileMenu /> (mobile)
  </Navigation>
  <CTAButton /> (WhatsApp)
</Header>
```

---

### 3.1.2 Create Hero Section with Key Value Props
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Full-width hero image/video background
- Main headline: Brand name + tagline
- Value propositions displayed prominently:
  - "Open 24/7"
  - "Premium Hardware"
  - "High-Speed Internet"
- WhatsApp "Book Now" CTA button
- Scroll indicator

**Design Notes:**
- Dark overlay on background for text readability
- Neon accent animations (subtle)
- Mobile-optimized layout

---

### 3.1.3 Add WhatsApp "Book Now" CTA Above the Fold
**Priority:** High
**Status:** [ ] Not Started

**Critical:** Primary CTA - Target 7% CTR

**Requirements:**
- Prominent button placement
- WhatsApp icon integration
- Pre-filled message template
- Click tracking for analytics
- Sticky/floating option for mobile

**Implementation:**
```html
<a href="https://wa.me/62XXXXXXXXXX?text=Hi%20Cyberpunk%20Canggu%2C%20I%27d%20like%20to%20book%20a%20session"
   class="whatsapp-cta"
   onclick="gtag('event', 'click', {'event_category': 'CTA', 'event_label': 'WhatsApp Book Now'})">
  Book Now on WhatsApp
</a>
```

---

### 3.1.4 Implement Footer with Contact Info and Social Links
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Contact information
  - Email: info@cyberpunkcanggu.com
  - Phone/WhatsApp
  - Address
- Social media links (Instagram, TikTok, etc.)
- Operating hours (24/7)
- Quick navigation links
- Copyright notice

---

### 3.1.5 Mobile Responsiveness Testing
**Priority:** High
**Status:** [ ] Not Started

**Test Devices/Viewports:**
- iPhone SE (375px)
- iPhone 14 Pro (393px)
- iPad (768px)
- Desktop (1024px, 1440px)

**Checklist:**
- [ ] Navigation collapses to hamburger menu
- [ ] Hero section readable on mobile
- [ ] CTA buttons thumb-friendly
- [ ] Images properly scaled
- [ ] No horizontal scroll
- [ ] Touch targets minimum 44px

---

## Component Files to Create
```
src/
├── components/
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── MobileMenu.astro
│   ├── Hero.astro
│   ├── ValueProps.astro
│   ├── WhatsAppCTA.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
└── pages/
    └── index.astro
```

## Acceptance Criteria
- [ ] Navigation works on all screen sizes
- [ ] Hero section displays correctly
- [ ] WhatsApp CTA is clickable and tracked
- [ ] Footer displays all required information
- [ ] Page passes mobile-friendly test
- [ ] Lighthouse mobile score > 90

## Design Assets Needed
- Logo (SVG)
- Hero background image/video
- Social media icons
- WhatsApp icon
