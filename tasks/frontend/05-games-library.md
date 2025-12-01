# Phase 3.3: Games Library Pages

**Timeline:** Week 4 (Dec 23 - Dec 29, 2025)
**Status:** Planning
**ClickUp Task:** https://app.clickup.com/t/86evqb7gx

## Objective
Create dedicated content layouts for PC Games and PS5 Games library showcasing the massive collection (100+ AAA titles and indie games) to appeal directly to competitive gamers.

## Tasks

### 5.1 PC Games Library Layout and Content
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Grid layout for game cards
- Game information display:
  - Game title
  - Cover image
  - Genre tags
  - Optional: Rating/popularity indicator
- Category/genre filters
- Search functionality (optional)

**Game Categories:**
- FPS (Counter-Strike 2, Valorant, etc.)
- MOBA (Dota 2, League of Legends)
- Battle Royale (PUBG, Apex Legends, Fortnite)
- Racing
- Sports (FIFA, NBA 2K)
- RPG
- Strategy
- Indie

---

### 5.2 PS5 Games Library Layout and Content
**Priority:** Normal
**Status:** [ ] Not Started

**Requirements:**
- Similar grid layout to PC games
- PS5-specific categorization
- Exclusive titles highlighted
- Game information display:
  - Game title
  - Cover image
  - Genre
  - Single/Multiplayer indicator

**Popular PS5 Categories:**
- Action/Adventure
- Sports
- Racing
- Fighting
- Party Games
- Exclusive Titles

---

### 5.3 Search/Filter Functionality (Optional)
**Priority:** Low
**Status:** [ ] Not Started

**Features (if implemented):**
- Text search by game name
- Filter by genre
- Filter by platform (PC/PS5)
- Sort options (alphabetical, popular, recent)

**Note:** For static site, consider client-side filtering with JavaScript or pre-filtered category pages.

---

## Page Structure
```
/games
├── Hero Section (Games Library intro)
├── Platform Tabs (PC / PS5)
├── Filter/Search Bar (optional)
├── Games Grid
│   └── GameCard components
└── CTA Section

/games/pc (alternative: separate pages)
/games/ps5
```

## Component Files
```
src/
├── components/
│   ├── GameCard.astro
│   ├── GamesGrid.astro
│   ├── GameFilter.astro (optional)
│   └── PlatformTabs.astro
├── content/
│   └── games/
│       ├── pc-games.json
│       └── ps5-games.json
└── pages/
    ├── games.astro
    └── games/
        ├── pc.astro
        └── ps5.astro
```

## Data Structure
```json
// pc-games.json
{
  "games": [
    {
      "id": "cs2",
      "title": "Counter-Strike 2",
      "genre": ["FPS", "Competitive"],
      "image": "/images/games/cs2.jpg",
      "popular": true
    },
    // ... more games
  ]
}
```

## Acceptance Criteria
- [ ] All games displayed in organized grid
- [ ] Games categorized by genre
- [ ] PC and PS5 libraries separated
- [ ] Images load efficiently (lazy loading)
- [ ] Mobile responsive grid
- [ ] Optional: Filter/search works correctly

## Content Needed
- [ ] Complete list of PC games available
- [ ] Complete list of PS5 games available
- [ ] Game cover images (can use placeholder/generic)
- [ ] Genre categorization for each game
