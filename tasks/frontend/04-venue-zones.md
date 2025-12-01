# Phase 3.2: Venue & Zones Page

**Timeline:** Week 3-4 (Dec 16 - Dec 29, 2025)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7gw

## Objective
Create dedicated page showcasing the three gaming zones with high-quality images and descriptions to clarify the differentiated premium offering and justify the pricing structure.

## Zones to Feature
1. Main Zone
2. VIP Zone
3. PS5 Room

## Tasks

### 4.1 Main Zone Section
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Section title and description
- High-quality images (multiple angles)
- Features list:
  - Number of stations
  - PC specifications highlight
  - Available peripherals
  - Atmosphere description
- Pricing quick reference link

---

### 4.2 VIP Zone Section
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Section title and premium positioning
- High-quality images showcasing exclusivity
- Features list:
  - Private/semi-private setup
  - Enhanced amenities
  - Premium peripherals
  - Comfort features
- Pricing quick reference link
- "Book VIP" CTA

---

### 4.3 PS5 Room Section
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Section title and description
- High-quality images of PS5 setup
- Features list:
  - PS5 console details
  - TV/Monitor specifications
  - Controller availability
  - Game library preview
  - Room capacity
- Pricing quick reference link
- "Book PS5 Room" CTA

---

### 4.4 Image Gallery Implementation
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Lightbox functionality for full-size images
- Lazy loading for performance
- Image optimization (WebP format)
- Alt text for accessibility
- Responsive grid layout

**Technical Implementation:**
```javascript
// Consider using:
// - Native <dialog> element for lightbox
// - Intersection Observer for lazy loading
// - Astro Image component for optimization
```

---

## Page Structure
```
/zones (or /venue)
├── Hero Section (Zone overview)
├── Main Zone Section
│   ├── Description
│   ├── Image Gallery
│   └── Features Grid
├── VIP Zone Section
│   ├── Description
│   ├── Image Gallery
│   └── Features Grid
├── PS5 Room Section
│   ├── Description
│   ├── Image Gallery
│   └── Features Grid
└── CTA Section (Book Now)
```

## Component Files
```
src/
├── components/
│   ├── ZoneCard.astro
│   ├── ImageGallery.astro
│   ├── FeatureGrid.astro
│   └── ZoneCTA.astro
└── pages/
    └── zones.astro
```

## Acceptance Criteria
- [ ] All three zones clearly differentiated
- [ ] High-quality images displayed properly
- [ ] Image gallery/lightbox functional
- [ ] Mobile responsive layout
- [ ] CTAs link to WhatsApp/booking
- [ ] Page load time < 3 seconds

## Content Needed
- [ ] Main Zone description copy
- [ ] VIP Zone description copy
- [ ] PS5 Room description copy
- [ ] 4-6 high-res images per zone
- [ ] Feature lists for each zone
