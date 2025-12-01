# Phase 3.7: Contact Us Page

**Timeline:** Week 4 (Dec 23 - Dec 29, 2025)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7h3

## Objective
Create contact page with all necessary information for customer conversion. This page directly facilitates Key Objective 1: Increase online booking inquiries.

## Tasks

### 9.1 Contact Information Display
**Priority:** High
**Status:** [ ] Not Started

**Information to Display:**
- **Email:** info@cyberpunkcanggu.com
- **Phone/WhatsApp:** +62 XXX XXXX XXXX
- **Operating Hours:** Open 24/7

**Design Requirements:**
- Clickable email (mailto:)
- Clickable phone (tel:)
- Clear visual hierarchy
- Icons for each contact method

---

### 9.2 Location Details with Address
**Priority:** High
**Status:** [ ] Not Started

**Information to Display:**
- Full street address
- Area/neighborhood (Canggu, Bali)
- Nearby landmarks
- Parking information
- Directions from key locations

**Example Format:**
```
Cyberpunk Canggu
Jl. [Street Name] No. XX
Canggu, Badung, Bali 80361
Indonesia

Landmarks: Near [Notable Place]
Parking: Available on-site / Street parking
```

---

### 9.3 Google Maps Integration
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Embedded Google Map
- Pin on exact location
- Clickable to open in Google Maps app
- Responsive sizing

**Implementation Options:**

1. **Iframe Embed (Simple)**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18..."
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

2. **Static Map Image (Performance)**
```html
<a href="https://maps.google.com/?q=...">
  <img src="https://maps.googleapis.com/maps/api/staticmap?..." 
       alt="Cyberpunk Canggu Location">
</a>
```

---

### 9.4 WhatsApp "Book Now" Button (Prominent Placement)
**Priority:** High
**Status:** [ ] Not Started

**Critical:** Primary CTA for conversion - Target 7% CTR

**Requirements:**
- Large, prominent button
- WhatsApp green or cyberpunk-themed
- Pre-filled message
- Click tracking for analytics
- Above the fold placement

**Implementation:**
```html
<a href="https://wa.me/62XXXXXXXXXX?text=Hi%20Cyberpunk%20Canggu%2C%20I%27d%20like%20to%20inquire%20about%20booking"
   class="whatsapp-cta-large"
   data-analytics="contact-page-whatsapp">
  <WhatsAppIcon />
  Book Now on WhatsApp
</a>
```

**Button States:**
- Default: Prominent, attention-grabbing
- Hover: Subtle animation/glow effect
- Active: Click feedback

---

### 9.5 Social Media Links
**Priority:** Normal
**Status:** [ ] Not Started

**Platforms to Include:**
- Instagram
- TikTok
- Facebook (if applicable)
- Twitter/X (if applicable)
- YouTube (if applicable)

**Requirements:**
- Recognizable icons
- Open in new tab
- Consistent styling with theme
- Click tracking (optional)

---

## Page Structure
```
/contact
├── Hero Section (Get in Touch)
├── Contact Info Section
│   ├── WhatsApp CTA (Primary)
│   ├── Email
│   ├── Phone
│   └── Operating Hours
├── Location Section
│   ├── Address Details
│   ├── Google Map
│   └── Directions/Landmarks
├── Social Media Section
└── FAQ Section (optional)
```

## Component Files
```
src/
├── components/
│   ├── ContactInfo.astro
│   ├── WhatsAppButton.astro
│   ├── GoogleMap.astro
│   ├── SocialLinks.astro
│   └── AddressCard.astro
└── pages/
    └── contact.astro
```

## Analytics Events to Track
```javascript
// WhatsApp click
gtag('event', 'click', {
  'event_category': 'Contact',
  'event_label': 'WhatsApp CTA',
  'event_location': 'contact_page'
});

// Email click
gtag('event', 'click', {
  'event_category': 'Contact',
  'event_label': 'Email Link'
});

// Map click
gtag('event', 'click', {
  'event_category': 'Contact',
  'event_label': 'Google Maps'
});
```

## Acceptance Criteria
- [ ] All contact methods displayed
- [ ] WhatsApp CTA prominent and functional
- [ ] Google Map embedded correctly
- [ ] Address complete and accurate
- [ ] Social links working
- [ ] Analytics tracking implemented
- [ ] Mobile responsive
- [ ] Page loads quickly

## Content Needed
- [ ] Complete address
- [ ] Phone/WhatsApp number
- [ ] Email address
- [ ] Social media URLs
- [ ] Google Maps embed code
- [ ] Operating hours confirmation (24/7)
