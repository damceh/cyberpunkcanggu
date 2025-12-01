# Phase 3.4: Pricelist & Booking Notes Page

**Timeline:** Week 4-5 (Dec 23, 2025 - Jan 5, 2026)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7gz

## Objective
Create dedicated pricing page with clear, comparative tables and booking information to address competitive pricing objective and reduce operational confusion from customer questions.

## Tasks

### 6.1 PS5 Room Pricing Table
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Clear pricing structure
- Hourly rates
- Package deals (if applicable)
- What's included list
- Capacity information
- Book now CTA

**Table Structure:**
| Duration | Price | Notes |
|----------|-------|-------|
| 1 Hour | IDR XXX | |
| 2 Hours | IDR XXX | |
| 3 Hours | IDR XXX | Best Value |
| Full Day | IDR XXX | |

---

### 6.2 Gaming PC Main Zone Pricing Table
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Hourly rates
- Package deals
- Member vs non-member pricing (if applicable)
- What's included

---

### 6.3 VIP Zone Pricing Table
**Priority:** High
**Status:** [ ] Not Started

**Requirements:**
- Premium pricing display
- Comparison with Main Zone (value proposition)
- Additional amenities included
- Reservation requirements

---

### 6.4 Booking Notes Section
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Reservation policy
- Payment methods accepted
- Cancellation policy
- Walk-in vs reservation
- Peak hours information
- Special requirements/rules
- Contact for group bookings
- Age restrictions (if any)

---

### 6.5 Easy-to-Update Content Mechanism
**Priority:** High
**Status:** [ ] Not Started

**Requirement:** Price/Game updates must be easy to manage

**Options:**

1. **Markdown Files (Recommended for v1.0)**
```markdown
// src/content/pricing.md
---
title: Pricelist
lastUpdated: 2025-12-01
---

## PS5 Room
| Duration | Price |
|----------|-------|
| 1 Hour | IDR 75,000 |
```

2. **JSON Data Files**
```json
// src/data/pricing.json
{
  "ps5Room": [
    { "duration": "1 Hour", "price": 75000 }
  ]
}
```

3. **Headless CMS (Future v2.0)**
- Contentful
- Sanity
- Strapi

---

## Page Structure
```
/pricelist (or /pricing)
├── Hero Section (Pricing overview)
├── Quick Comparison Table
├── PS5 Room Section
│   ├── Pricing Table
│   └── Includes List
├── Main Zone Section
│   ├── Pricing Table
│   └── Includes List
├── VIP Zone Section
│   ├── Pricing Table
│   └── Includes List
├── Booking Notes Section
└── CTA Section (Book via WhatsApp)
```

## Component Files
```
src/
├── components/
│   ├── PricingTable.astro
│   ├── PricingCard.astro
│   ├── BookingNotes.astro
│   └── ComparisonTable.astro
├── content/
│   └── pricing.json
└── pages/
    └── pricelist.astro
```

## Design Considerations
- Use clear visual hierarchy
- Highlight best value options
- Make prices scannable
- Include currency (IDR)
- Mobile-friendly tables (horizontal scroll or card layout)

## Acceptance Criteria
- [ ] All pricing clearly displayed
- [ ] Tables readable on mobile
- [ ] Booking notes comprehensive
- [ ] Easy to update pricing data
- [ ] WhatsApp CTA prominent
- [ ] Last updated date shown

## Content Needed
- [ ] Complete pricing for all zones
- [ ] Package deals and promotions
- [ ] Booking policy text
- [ ] Payment methods list
- [ ] Terms and conditions
