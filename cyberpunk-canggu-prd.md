# Product Requirements Document (PRD) - Cyberpunk Canggu Website v1.0 Launch

## Metadata & Sign-Off

**PRD Title:** Cyberpunk Canggu Professional Website v1.0 Launch
**Author:** Adam Almahdi
**Team:** [List team members: Engineering Lead, Designer, Marketing]
**Date:** 02 December, 2025

| | |
| :--- | :--- |
| **Product Manager** | [Your Name] |
| **Engineering Lead/Team Lead** | TBD |
| **Designer** | TBD |
| **Approvers/Sign-Off** | [Executive/Owner Name] |

**PM Epic:** https://app.clickup.com/90182122151/v/li/901813906072
**Status of PRD:** Locked - Ready for Development

---

## One Pager (Executive Summary)

### Overview
This project is the development and launch of a professional, high-performance static website for **Cyberpunk Canggu**, a premier 24/7 gaming lounge located in Canggu, Bali. The goal is to establish a dominant and credible digital presence that accurately reflects the venue's premium hardware, unique cyberpunk atmosphere, and competitive value proposition to its core target market.

### Problem
Prospective customers (Digital Nomads and Tourists) in Canggu currently lack a professional, reliable, and consolidated source of information (pricing, hardware specs, zone details, availability) for Cyberpunk Canggu. This ambiguity leads to a poor first digital impression, inefficiency in answering customer inquiries, and the potential loss of high-value bookings and walk-in visits.

### Objectives
1.  **Conversion Goal:** Increase online booking inquiries or trackable conversion actions (WhatsApp Clicks) by a minimum of X% within the first three months post-launch.
2.  **Market Dominance:** Establish a clear digital brand identity to support the goal of becoming the \#1 premium gaming lounge in Canggu and, subsequently, Bali.
3.  **Brand Image:** Solidify the perception of Cyberpunk Canggu as the highest quality, most reliable, and most comfortable gaming destination in the area.

### Constraints
1.  **Timeline:** The website must be developed and launched within **1–2 months**.
2.  **Budget:** Development and design costs are capped at **IDR 10–15 Million**.
3.  **Technical Stack:** The solution must utilize **Cloudflare Pages** connected to a **GitHub Repository**, restricting complex server-side functionalities.

### Persona
| | |
| :--- | :--- |
| **Key Persona** | **The Burned-out Digital Nomad / Tourist** |
| **Description** | A professional or tourist on vacation in Bali, seeking temporary, high-quality, and reliable escapism from work or routine. They prioritize the premium experience, demanding verified information about the *Best Gaming Gear & Setup* and connection stability before visiting. |

### Use Cases
#### Scenario 1: Vetting Quality before Visit
A digital nomad opens the website, navigates directly to the **Gear & Setup** page to quickly confirm the quality of the peripherals and the internet speed. Convinced by the high specs, they proceed to the **Contact Us** page for directions.

#### Scenario 2: Quick Price and Zone Comparison
A local competitive gamer checks the website to plan a session. They navigate to the **Pricelist** to compare the costs of the **VIP Zone** vs. **Main Zone** and the **PS5 Room** rates, quickly reviewing the **Booking Notes** before deciding to visit.

---

## Full PRD Details

### Features In (v1.0 MVP Scope)
These are the distinct, prioritized features along with a short explanation as to why this feature is important.

| Feature Area | Key Requirement / Scope | Rationale |
| :--- | :--- | :--- |
| **1. Homepage / Branding** | High-impact visuals reflecting the Cyberpunk vibe (dark, neon accents, solid design) and clear display of key value props ("Open 24/7," "Premium Hardware," "High-Speed Internet"). | Establish immediate brand trust and unique atmosphere. |
| **2. Venue & Zones** | Dedicated page with sections for: Main Zone, VIP Zone, and PS5 Room. Must include high-quality images and specific zone descriptions. | Clarify the differentiated premium offering and justify the pricing structure. |
| **3. Games Library** | Two dedicated content layouts (PC Games, PS5 Games) listing the *Massive Library* (100+ AAA titles and indie games). | Appeal directly to the *Competitive Gamer* and showcase breadth of offering. |
| **4. Pricelist & Booking Notes** | Dedicated page with clear, comparative tables for PS5 Room, Gaming PC Main Zone, and VIP Zone. Includes a dedicated section for detailed *Booking Notes*. | Address the *competitive pricing* objective and reduce operational confusion from user questions. |
| **5. Gear & Setup** | Detailed breakdown (specs, photos) of: PS5 Room setup, Gaming PC specs (CPU, GPU, RAM), Pro Peripherals (keyboard, mouse, headset), Amenities (*AC Comfort*), and *Network & Connectivity* details. | Directly addresses the **Key Persona's** concern about quality and justifies the "Premium Hardware" claim. |
| **6. About Us** | Page to tell the story of "Why Cyberpunk?" and highlight the brand commitment. | Build an emotional connection and reinforce the *Unique Atmosphere*. |
| **7. Contact Us** | All necessary contact information (email: *info@cyberpunkcanggu.com*), location details (address, map integration), and prominently displayed **WhatsApp "Book Now" Button** for conversion. | Facilitate immediate conversion and visit (Key Objective 1). |

### Features Out (Explicitly Excluded from v1.0)
What features have you explicitly decided not to do and why?

* **Real-time PC/PS5 Availability Status:** Excluded due to the **Constraint** of using a Static Site (Cloudflare Pages), as this requires complex server-side integration and constant database polling. (Deferred to v2.0/v3.0).
* **Fully Integrated Payment Gateway/Booking System:** Excluded to meet the **1-2 month Timeline Constraint** and low **Budget**. Conversion will be handled via the high-touch, low-complexity WhatsApp link.

### Design
* **Theme:** Solid, dark, and highly professional Cyberpunk theme; utilize subtle neon accents without being "cringe." Focus on high readability and visual hierarchy.
* **Asset Link:** [Link to Design Mockups/Figma]

### Technical Considerations
* **Platform:** Cloudflare Pages (Static Site Generation).
* **Repository:** GitHub Repo ([Link to Repo]).
* **CMS (Optional):** If content needs frequent updates (e.g., Pricelist), consider a Headless CMS (e.g., Contentful, Sanity) integrated with the SSG framework.
* **Analytics:** Google Analytics or Cloudflare Analytics must be implemented on day one.

### Success Metrics
What are the success metrics that indicate you’re achieving your internal goals for the project?

| Objective | Key Metric (KPI) | Goal (OKR) | Tracking Tool |
| :--- | :--- | :--- | :--- |
| **Conversion (Booking)** | WhatsApp Conversion Rate (Clicks on "Book Now" CTA / Total Sessions) | Achieve **7%** WhatsApp Click-Through Rate (CTR) within 90 days. | Google Analytics / ClickUp (Goals) |
| **Brand (Engagement)** | VPH (Page Views per Session) | Maintain an average **3.0 VPH** or higher. | Google Analytics |
| **Market Dominance** | Organic Search Rank for "Gaming Lounge Canggu" | Achieve **Top 3** ranking within 6 months. | Google Search Console |

### GTM Approach (Go-to-Market)
How do you plan to launch this product to the market with marketing and sales teams?

1.  **Technical SEO Optimization:** Focus on optimizing core content (Pricelist, Gear Specs) for long-tail, high-intent keywords (e.g., "PS5 room rental Canggu," "best internet cafe Bali specs").
2.  **Social Media Hype:** Launch an announcement campaign across Instagram/TikTok, directing traffic exclusively to the new professional website to maximize traffic for day-one analytics.
3.  **Physical Integration:** Update all physical promotional materials, business cards, and in-lounge QR codes to prominently display the new website URL.

### Open Issues
* **High-Res Photography:** High-quality photos of all Zones and Gear must be secured before development completion to maximize the "Premium" brand image.
* **Design Finalization:** Final Cyberpunk color palette and typography need approval from the owner.

### Q&A
| Asked by | Question | Answer |
| :--- | :--- | :--- |
| Engineering | How do we handle Price/Game updates? | Must be implemented via an easy-to-update mechanism (e.g., markdown file in the repo or Headless CMS). |
| Marketing | What is the primary CTA on the homepage? | The WhatsApp "Book Now" button, placed above the fold. |

### Feature Timeline and Phasing (ClickUp Task Reference)
Task tracking will be managed in **ClickUp**.

| Feature | Status (ClickUp Tag) | Dates |
| :--- | :--- | :--- |
| 1. Wireframing & Design Finalization | In Progress | Week 1 - 2 |
| 2. Static Site Setup (Cloudflare/GitHub) | In Progress | Week 2 |
| 3. Homepage & Nav Bar Implementation | In Development | Week 3 |
| 4. Pricelist & Gear Pages (Content Heavy) | In Development | Week 4 - 5 |
| 5. Final QA, SEO Audit, GA Setup | In Review | Week 6 |
| **Launch v1.0** | Shipped | **[Target Date: Day 60]** |