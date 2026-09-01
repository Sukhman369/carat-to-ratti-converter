# Product Requirements Document (PRD)
## Carat ↔ Ratti Converter & Vedic Gemstone Tool (`rattitocarat.com`)

---

## 1. Executive Summary & Vision

### 🎯 The Problem
Gemstone buyers in India, the Middle East, the UK, and the US struggle with conversion between **traditional astrological units (Ratti)** and **certified international lab weights (Carats)**. Existing online converters are either:
1. Cluttered with heavy ads and intrusive sales funnels.
2. Mathematically inaccurate (using loose approximations like `0.9` instead of standard `0.91` Pakka Ratti).
3. Hard to use on mobile devices (where 70%+ of Indian searches originate).
4. Missing essential Vedic astrological context (*Sawa Ratti*, body-weight dosage rules).

### 💡 The Solution
A standalone, ultra-fast, ADHD-friendly, mobile-first web app built on **Astro 5 + Tailwind CSS v4**. It delivers instant bidirectional conversions, multi-unit breakdown, astrological guidance, and bilingual (English + Hindi) support.

---

## 2. Competitor Benchmark & Intelligence

Based on in-depth SERP analysis documented in [`docs/competitors_and_inspirations.md`](file:///c:/Users/harma/Documents/Repos/carat%20to%20ratti/docs/competitors_and_inspirations.md), here is how the top 10 competitors stack up and where our advantage lies:

| # | Competitor | Ranking | Key USPs | Major Weakness / Our Opportunity |
|---|---|---|---|---|
| 1 | **The Vedic Crystals** (`thevediccrystals.com`) | #1–2 | Pre-built conversion tables, deep educational articles | Dated aesthetic, mediocre mobile UX, slow load |
| 2 | **AstroSage Shop** (`astrosage.shop`) | #2–3 | Multi-unit conversion, massive brand domain authority | Tool is buried inside an e-commerce maze; not dedicated |
| 3 | **GemPundit** (`gempundit.com`) | #3–5 | High E-E-A-T, rich static tables, high trust | Uses inaccurate rounded ratio (`0.90`), product-push heavy |
| 4 | **GemsMantra** (`gemsmantra.com`) | #4–6 | Uses accurate `0.91` ratio, real gemstone examples | Embedded in blog post; lacks standalone app feel |
| 5 | **GemRishi** (`gemrishi.com`) | #5–7 | Zodiac sign & gemstone specific long-tail targeting | Basic web design, low domain authority, poor responsiveness |
| 6 | **Pramogh** (`pramogh.com`) | #6–8 | Gemstone consultation context | Uses `0.90` ratio, thin content around the tool |
| 7 | **GemAstro** (`gemastro.com`) | #7–9 | Astrology-first angle, buying guides | Cluttered UI, slow on mobile |
| 8 | **Rashi Ratan Jaipur** (`rashiratanjaipur.net`) | #8–10 | Jaipur gem market trust signal | No interactive calculator (static table only) |
| 9 | **NamGems** (`namgems.in`) | Page 1 | Lean formula page with fast load | Pure static text, no interactive UI |
| 10 | **Shiv Parvati Gems** (`shivparvatigems.com`) | Page 2 | Honest about Pakka vs Sunee ratio variations | Minimal SEO backlinks, low engagement layout |

---

## 3. Our Unfair Advantages (Why We Win)

1. **⚡ Zero-Distraction / ADHD-Friendly UI:** Modern glassmorphism, high visual contrast, zero intrusive popups.
2. **📐 Mathematical Precision & Standard Switch:** Support both **Pakka Ratti** (`0.91 ct / 182 mg`) and **Sunee Ratti** (`0.90 ct / 180 mg`).
3. **📊 Multi-Unit Live Breakdown:** One single keystroke outputs **Carats, Ratti, Grams, Milligrams, Grains, and Cents (Points)**.
4. **🧘 Sawa Ratti Astrological Decoder:** Identifies auspicious fractions (*Sawa Ek, Sawa Teen, Sawa Paanch*) automatically.
5. **⚖️ Vedic Body-Weight Gem Recommender:** Suggests ideal gemstone weight range based on user's body weight (`kg / 10 to 12`).
6. **🌐 Bilingual Toggle:** Instant English $\leftrightarrow$ Hindi (हिन्दी) UI switch.
7. **📲 1-Click WhatsApp Share:** Formatted snippet ready to send to jewelers or astrologers.

---

## 4. Core Features & Functional Requirements

### Feature 1: Live Bidirectional Converter (Hero Island)
* **Inputs:** Numeric input field + Unit Toggle (`Carat → Ratti` or `Ratti → Carat`).
* **Standard Selector:** Toggle between *Pakka Ratti (0.91)* [Default] and *Sunee Ratti (0.90)*.
* **Instant Calculation:** Real-time keystroke calculation without form submission.
* **Outputs Card:**
  * Primary Result (large font, copyable).
  * Astrological Label (e.g., `5.25 Ratti = Sawa Paanch Ratti` 🌟 Auspicious).

### Feature 2: Multi-Unit Metric Matrix
Displays synchronous weight conversions in real time:
* **Milligrams (mg):** $\text{Carats} \times 200\text{ mg}$
* **Grams (g):** $\frac{\text{mg}}{1000}$
* **Cents / Points:** $\text{Carats} \times 100$
* **Grains (gr):** $\text{Carats} \times 3.08647$

### Feature 3: Body-Weight Gemstone Dosage Recommender
* **Interactive Slider / Input:** Body weight in kg (or lbs with auto-conversion).
* **Formula:** $\text{Weight (kg)} / 12$ to $\text{Weight (kg)} / 10$.
* **Output:** Recommended gemstone weight range in both Ratti and Carats with the closest *Sawa* recommendation.

### Feature 4: High-Yield SEO Conversion Tables
* Static HTML tables for Google Featured Snippets:
  * Carat to Ratti Table (`0.25 Ct` to `15.00 Ct` in `0.25 Ct` steps).
  * Ratti to Carat Table (`1.00 Ratti` to `15.00 Ratti`).
  * Sawa Ratti Reference Table (Sawa Ek to Sawa Barah with planetary associations).

### Feature 5: FAQ & Knowledge Base (Accordion)
* Semantic `<details>` / `<summary>` tags for 100% crawlable FAQ schemas.
* Topics: Difference between Pakka and Sunee Ratti, Sawa Ratti rules, why astrologers prescribe in Ratti while labs certify in Carats.

---

## 5. Technical & SEO Architecture

* **Framework:** Astro v5 (Static Site Generation for Core Web Vitals score $\ge 95$).
* **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` with `@theme` design tokens.
* **Structured Data Suite (JSON-LD):**
  * `WebApplication` Schema (for rich tool cards).
  * `FAQPage` Schema (for Google People Also Ask & answer box dominance).
  * `HowTo` Schema (step-by-step conversion guide).
* **Performance Target:** $\le 0.8\text{s}$ LCP, $0$ CLS, $\le 50\text{ms}$ INP.

---

## 6. Monetization & Growth Roadmap

| Phase | Milestone | Focus Areas |
|---|---|---|
| **Phase 1 (Day 1–14)** | MVP Launch | Core Calculator + SEO Tables + Google Search Console indexing |
| **Phase 2 (Month 1)** | Engagement | Hindi UI toggle, WhatsApp share button, Body-weight calculator |
| **Phase 3 (Month 2–3)** | Programmatic SEO | Individual gemstone pages (`/pukhraj-ratti-calculator`, `/ruby-carat-to-ratti`) |
| **Phase 4 (Month 3+)** | Monetization | Certified Lab & Astrologer affiliate banners, Google AdSense |
