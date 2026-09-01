# Product Requirements Document (PRD) — Content-Maxxing Edition
## Multi-Page Programmatic SEO Engine for `rattitocarat.com`

---

## 1. Vision & Strategy: Total SERP Domination

### 🎯 The Core Philosophy: "Content Maxxing & Programmatic Domination"
Existing competitors (The Vedic Crystals, AstroSage, GemPundit) rely on **a single generic page** or bury their tools inside massive e-commerce catalogs. When a user searches for a specific high-intent long-tail query like:
* `"5.25 ratti in carat"` (6,500/mo)
* `"pukhraj ratti to carat calculator"`
* `"6.25 ratti in carat"` (5,200/mo)
* `"how many carats is 5 ratti ruby"`

...Google currently has to serve generic pages with high bounce rates.

**Our Winning Strategy:**  
We are building a **massively scalable, multi-page programmatic SEO tool** with **500+ dedicated, lightning-fast static pages** using Astro's `getStaticPaths()`. Every single weight permutation, Sawa fraction, gemstone type, and unit pair will have a **dedicated, indexable, hyper-optimized landing page** with its own:
1. Pre-populated live interactive calculator.
2. Google Position 0 "Quick Answer" snippet box.
3. Astrological Sawa analysis & body-weight compatibility chart.
4. Semantic FAQ & JSON-LD structured data.
5. Internal linking cluster connecting neighboring weights and related gemstones.

---

## 2. Complete Multi-Page URL Architecture & Hierarchy

```
rattitocarat.com/
│
├── 🏠 Tier 1: Core Hubs
│   ├── /                                    (Master Bidirectional Calculator)
│   ├── /carat-to-ratti                      (Dedicated Carat → Ratti Hub)
│   ├── /ratti-to-carat                      (Dedicated Ratti → Carat Hub)
│   ├── /body-weight-gemstone-calculator     (Vedic Dosage Calculator Hub)
│   └── /sitemap-index                       (HTML Crawl Hub for Search Bots)
│
├── ⚡ Tier 2: Programmatic Value Pages (~200+ Pages)
│   ├── /ratti-to-carat/[value]             (e.g. /ratti-to-carat/5-25, /ratti-to-carat/6-25, /ratti-to-carat/7)
│   └── /carat-to-ratti/[value]             (e.g. /carat-to-ratti/1, /carat-to-ratti/5, /carat-to-ratti/10)
│
├── 💎 Tier 3: Navratna Gemstone Dedicated Tools (9 Pages)
│   ├── /pukhraj-ratti-to-carat              (Yellow Sapphire Weight & Astrological Calculator)
│   ├── /neelam-ratti-to-carat               (Blue Sapphire Weight Calculator)
│   ├── /manik-ratti-to-carat                (Ruby Weight Calculator)
│   ├── /panna-ratti-to-carat                (Emerald Weight Calculator)
│   ├── /moti-ratti-to-carat                 (Pearl Weight Calculator)
│   ├── /heera-ratti-to-carat                (Diamond / Opal Weight Calculator)
│   ├── /moonga-ratti-to-carat               (Red Coral Weight Calculator)
│   ├── /gomed-ratti-to-carat                (Hessonite Weight Calculator)
│   └── /lehsuniya-ratti-to-carat            (Cat's Eye Weight Calculator)
│
├── 🌟 Tier 4: Astrological Sawa Ratti Pages (12 Pages)
│   ├── /sawa/sawa-ek-ratti                  (1.25 Ratti in Carats — Shukra / Diamond)
│   ├── /sawa/sawa-do-ratti                  (2.25 Ratti in Carats — Budh / Emerald)
│   ├── /sawa/sawa-teen-ratti                (3.25 Ratti in Carats — Shani / Neelam)
│   ├── /sawa/sawa-chaar-ratti               (4.25 Ratti in Carats — Surya / Ruby)
│   ├── /sawa/sawa-paanch-ratti              (5.25 Ratti in Carats — Guru / Pukhraj)
│   ├── /sawa/sawa-chhah-ratti               (6.25 Ratti in Carats — Chandra / Pearl)
│   ├── /sawa/sawa-saat-ratti                (7.25 Ratti in Carats — Mangal / Moonga)
│   ├── /sawa/sawa-aath-ratti                (8.25 Ratti in Carats — Rahu / Gomed)
│   └── /sawa/sawa-nau-ratti                 (9.25 Ratti in Carats — Ketu / Lehsuniya)
│
├── 📐 Tier 5: Unit & Metric Sub-Converters (10 Pages)
│   ├── /ratti-to-mg                         (Ratti to Milligrams Converter)
│   ├── /carat-to-mg                         (Carat to Milligrams Converter)
│   ├── /ratti-to-grams                      (Ratti to Grams Converter)
│   ├── /carat-to-grams                      (Carat to Grams Converter)
│   ├── /ratti-to-cents                      (Ratti to Cents / Points)
│   └── /carat-to-cents                      (Carat to Cents / Points)
│
└── 📖 Tier 6: High-Authority Pillar Guides (6 Core Guides)
    ├── /guide/what-is-ratti                 ("What is Ratti? Complete Indian Gemstone Guide")
    ├── /guide/pakka-ratti-vs-sunee-ratti    ("Pakka Ratti vs Sunee Ratti: 0.91 vs 0.90 Explained")
    ├── /guide/sawa-ratti-meaning-astrology  ("Why Astrologers Prescribe Sawa Weights")
    ├── /guide/carat-vs-ratti-difference     ("Why Your Astrologer and Jeweler Use Different Units")
    └── /guide/gemstone-weight-by-body-weight ("How to Calculate Gemstone Dosage by Body Mass")
```

---

## 3. On-Page Structure for Programmatic Pages (The SEO Template)

Every programmatic page (e.g. `/ratti-to-carat/5-25` or `/pukhraj-ratti-to-carat`) will be dynamically constructed with high content density:

### 1. Dynamic Hero & Pre-filled Calculator Island
* **H1:** `5.25 Ratti to Carat (Sawa Paanch) | Exact 0.91 Conversion`
* **Preloaded Input:** `5.25` already typed in, outputting `4.778 Carats (955.5 mg)` instantly.
* **Featured Snippet Box (Position 0 Target):**
  > **Quick Answer:** 5.25 Ratti (Sawa Paanch) is equal to **4.778 Carats** (or **955.5 milligrams**) under the standard certified Pakka Ratti ratio (`1 Ratti = 0.91 Carats`). Under the traditional trade Sunee ratio (`0.90`), it equals **4.725 Carats**.

### 2. Astrological & Sawa Breakdown Matrix
* Auspicious Meaning: *Sawa Paanch (+0.25 Ratti) signifies growth, expansion, and prosperity.*
* Planetary Ruler: *Jupiter (Brihaspati / Guru)*.
* Primary Gemstone: *Yellow Sapphire (Pukhraj) & Topaz*.
* Recommended Body Weight: *Compatible with persons weighing 52 kg to 63 kg*.

### 3. Granular Conversion Table for Neighboring Fractions
A static comparison table showing:
| Unit | Standard (0.91) | Trade (0.90) | Milligrams | Grams | Cents |
|---|---|---|---|---|---|
| **5.00 Ratti** | 4.550 Ct | 4.500 Ct | 910.0 mg | 0.910 g | 455 Cts |
| **5.25 Ratti (Current)** | **4.778 Ct** | **4.725 Ct** | **955.5 mg** | **0.955 g** | **478 Cts** |
| **5.50 Ratti (Saadhe)** | 5.005 Ct | 4.950 Ct | 1001.0 mg | 1.001 g | 501 Cts |
| **5.75 Ratti (Paune)** | 5.233 Ct | 5.175 Ct | 1046.5 mg | 1.047 g | 523 Cts |

### 4. Dense Internal Linking Mesh (Spoke-to-Spoke)
* **Previous Weight:** `← 5.00 Ratti to Carat` (`/ratti-to-carat/5`)
* **Next Weight:** `5.50 Ratti to Carat →` (`/ratti-to-carat/5-5`)
* **Associated Gemstone Hub:** `Pukhraj Weight Guide →` (`/pukhraj-ratti-to-carat`)
* **Inverted Calculation:** `4.78 Carats to Ratti →` (`/carat-to-ratti/4-78`)

### 5. Page-Specific JSON-LD Schema
* `WebApplication` schema targeting that exact conversion pair.
* `FAQPage` schema answering `"How many carats is 5.25 ratti?"` and `"Is 5.25 ratti auspicious?"`.
* `BreadcrumbList` schema: `Home > Ratti to Carat > 5.25 Ratti`.

---

## 4. Competitor Takeover Strategy: Why This Crushes the Top 10

| Competitor | Their Strategy | Our Content-Maxxing Edge |
|---|---|---|
| **1. The Vedic Crystals** | 1 single calculator page with long text | We have **500+ dedicated landing pages** ranking for every exact query (e.g. `5.25 ratti in carat`). |
| **2. AstroSage Shop** | Tool buried in e-commerce shop | Standalone, instant load ($\le 0.8\text{s}$), zero product clutter, pure utility focus. |
| **3. GemPundit** | Uses rounded `0.9` ratio | We own both **0.91 Pakka** and **0.90 Sunee** on every programmatic page with full transparency. |
| **4. GemsMantra** | 1 blog post with conversion table | We provide dedicated interactive tools for every Navratna gemstone (`/pukhraj-ratti-to-carat`, `/neelam-ratti-to-carat`). |
| **5. GemRishi** | Zodiac sign long-tail text | We have dedicated Sawa Ratti pages with planetary associations (`/sawa/sawa-paanch-ratti`). |
| **6. Pramogh to 10. Shiv Parvati** | Thin static content | Full programmatic silo mesh with rich JSON-LD on every single URL. |

---

## 5. Technical Implementation Blueprint

### 1. Astro Static Generation Engine (`getStaticPaths`)
* `src/pages/ratti-to-carat/[val].astro`: Generates all standard values:
  - Whole numbers: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20`
  - Fractional steps: `.25` (Sawa), `.50` (Saadhe), `.75` (Paune) for every whole number.
  - Granular micro-steps (`0.25` to `15.00` in `0.25` increments = ~60 dedicated pages).
* `src/pages/carat-to-ratti/[val].astro`: Generates all standard carat values (`0.25, 0.5, 0.75, 1.0, 1.25, ... 15.0`).
* `src/pages/gemstones/[gem].astro`: Generates 9 Navratna gemstone pages.
* `src/pages/sawa/[fraction].astro`: Generates 12 Auspicious Sawa pages.
* `src/pages/guide/[slug].astro`: Content collection for deep educational pillar articles.

### 2. Crawlability & XML Sitemaps
* Programmatic generation of `sitemap.xml` listing all 500+ URLs with priority weighting:
  - Core Hubs: `1.0`
  - Gemstone Hubs & High-Volume Sawa Pages: `0.9`
  - Programmatic Value Pages: `0.8`
  - Educational Pillar Guides: `0.7`
* HTML Sitemap Directory Page (`/sitemap-index`) linking every spoke for search engine spiders.

---

## 6. Phased Execution Plan

- [ ] **Phase 1: PRD & Architectural Alignment (Current Step)**
- [ ] **Phase 2: Programmatic Data Vault & Routing Engine** (Build `data/gemstones.ts`, `data/sawaData.ts`, `data/values.ts`)
- [ ] **Phase 3: Programmatic Page Templates** (Build dynamic Astro route templates `[val].astro`, `[gem].astro`, `[fraction].astro`)
- [ ] **Phase 4: High-Yield Pillar Content & Guides** (Build the 5 educational authority markdown guides)
- [ ] **Phase 5: Internal Linking Silo & XML/HTML Sitemaps** (Connect every page with breadcrumbs and related neighbor links)
- [ ] **Phase 6: Verification, Static Build & Lighthouse Audit** (Verify 500+ static HTML pages build in $\le 5\text{s}$ with 100 PageSpeed)
