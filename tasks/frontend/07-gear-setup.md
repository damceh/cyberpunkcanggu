# Phase 3.5: Gear & Setup Page

**Timeline:** Week 4-5 (Dec 23, 2025 - Jan 5, 2026)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7gy

## Objective
Create detailed breakdown page for all hardware specifications and amenities to directly address the Key Persona's concern about quality and justify the "Premium Hardware" claim.

## Key Persona Context
> "The Burned-out Digital Nomad / Tourist... prioritizes the premium experience, demanding verified information about the *Best Gaming Gear & Setup* and connection stability before visiting."

## Tasks

### 7.1 PS5 Room Setup Specifications
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- PS5 Console details (version, storage)
- TV/Monitor specifications
  - Brand and model
  - Screen size
  - Resolution (4K)
  - Refresh rate
- Audio setup
- Controller details
- Room features (seating, ambiance)

---

### 7.2 Gaming PC Specs (CPU, GPU, RAM)
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Detailed specifications for each station type
- Main Zone PC specs
- VIP Zone PC specs (if different)

**Specification Template:**
```
Gaming PC Specifications
├── Processor: Intel Core i7-XXXXX / AMD Ryzen 7 XXXX
├── Graphics: NVIDIA RTX XXXX / AMD RX XXXX
├── Memory: XX GB DDR4/DDR5
├── Storage: XXX GB SSD
├── Monitor: XX" XXXX Hz Gaming Monitor
└── OS: Windows 11
```

---

### 7.3 Pro Peripherals Section
**Priority:** High
**Status:** [ ] Not Started

**Content Requirements:**
- Keyboard specifications
  - Brand and model
  - Switch type (mechanical)
  - Features
- Mouse specifications
  - Brand and model
  - DPI
  - Weight
- Headset specifications
  - Brand and model
  - Audio quality
  - Mic quality
- Mousepad details

**Popular Gaming Brand Examples:**
- Logitech G Pro
- Razer BlackWidow/DeathAdder
- SteelSeries Arctis
- HyperX

---

### 7.4 Amenities Section (AC Comfort)
**Priority:** Normal
**Status:** [ ] Not Started

**Content Requirements:**
- Air conditioning details
- Seating comfort (gaming chairs)
- Lighting (ambient, adjustable)
- Snack/beverage availability
- Restroom facilities
- Parking information
- WiFi for personal devices

---

### 7.5 Network & Connectivity Details
**Priority:** High
**Status:** [ ] Not Started

**Critical:** High-Speed Internet specs - critical for Key Persona verification

**Content Requirements:**
- Internet speed (download/upload)
- ISP information
- Latency/ping (typical)
- Backup connection (if any)
- Network stability guarantees
- Dedicated gaming network

**Display Format:**
```
Network Specifications
├── Connection: Fiber Optic
├── Speed: XXX Mbps Download / XXX Mbps Upload
├── Latency: < XX ms to SG/JP servers
├── Provider: [ISP Name]
└── Backup: Yes/No
```

---

## Page Structure
```
/gear (or /setup)
├── Hero Section (Premium Hardware intro)
├── PC Specifications Section
│   ├── Specs Table/Cards
│   └── Images
├── Peripherals Section
│   ├── Keyboard specs
│   ├── Mouse specs
│   └── Headset specs
├── PS5 Setup Section
│   ├── Console details
│   └── Display specs
├── Network Section
│   ├── Speed stats
│   └── Reliability info
├── Amenities Section
│   ├── Comfort features
│   └── Facilities
└── CTA Section
```

## Component Files
```
src/
├── components/
│   ├── SpecCard.astro
│   ├── SpecTable.astro
│   ├── PeripheralCard.astro
│   ├── NetworkStats.astro
│   └── AmenitiesList.astro
├── content/
│   └── gear-specs.json
└── pages/
    └── gear.astro
```

## Design Considerations
- Use tech-style cards/tables
- Include brand logos (with permission)
- High-quality product images
- Comparison with standard setups (optional)
- Trust badges/certifications

## Acceptance Criteria
- [ ] All PC specs accurately listed
- [ ] Peripheral brands and models shown
- [ ] Network speeds prominently displayed
- [ ] PS5 setup detailed
- [ ] Amenities listed
- [ ] Mobile responsive layout
- [ ] Images optimized

## Content Needed
- [ ] Exact PC specifications for all stations
- [ ] Peripheral brand/model information
- [ ] Network speed test results
- [ ] PS5 room setup details
- [ ] Amenities list
- [ ] High-quality hardware photos
