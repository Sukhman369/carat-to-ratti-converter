# Product Requirements Document (PRD) — Clean Multi-Page Architecture
## Standalone Web Application for `rattitocarat.com`

---

## 1. Executive Summary & Vision

### 🎯 Objective
Build a high-performance, non-repetitive, multi-page tool website on **Astro v5 + Tailwind CSS v4** adhering to the **Vercel Geist Design Language** ([`DESIGN.md`](file:///c:/Users/harma/Documents/Repos/carat%20to%20ratti/DESIGN.md)).

### 🚫 Strict Rule: Zero Thin / Duplicate Content
No auto-generated mass programmatic doorway pages (no `/5-25-ratti-to-carat`, no duplicate thin pages). Every single page must be a **distinct, high-utility, fully functional standalone tool or comprehensive reference**.

---

## 2. Core Multi-Page Sitemap & Page Definitions

A focused, high-authority 5-page structure where each page serves a unique user intent:

```
rattitocarat.com/
│
├── 1. / (Homepage — Master Bidirectional Converter)
│      Primary interactive tool with instant keystroke calculation, unit swap, 
│      and synchronous 6-unit live metric matrix.
│
├── 2. /carat-to-ratti (Dedicated Carat → Ratti Converter)
│      Targeting exact search intent for buyers converting certified lab weights 
│      to astrological Ratti with Carat-first conversion tables (0.25 to 15.00 Ct).
│
├── 3. /ratti-to-carat (Dedicated Ratti → Carat Converter)
│      Targeting buyers converting astrological prescriptions to certified lab carats 
│      with Ratti-first conversion tables (1.00 to 15.00 Ratti) and Pakka vs Sunee toggle.
│
├── 4. /body-weight-calculator (Vedic Body-Mass Dosage Tool)
│      Dedicated interactive slider tool calculating gemstone weight requirement 
│      based on body mass (1 Ratti per 10–12 kg rule) and nearest Sawa weight fit.
│
└── 5. /sawa-ratti-chart (The Complete Astrological Sawa Reference)
       Authoritative astrological reference table covering all Sawa (+0.25), Saadhe (+0.50), 
       and Paune (+0.75) weights, ruling planets, and Navratna gemstone associations.
```

---

## 3. Detailed Page Breakdown & Functionality

### Page 1: Homepage (`/`) — Master Hub
* **Hero Calculator:** Bidirectional converter with live unit swap ($\rightleftharpoons$) and Pakka (`0.91`) vs Sunee (`0.90`) standards switch.
* **Synchronous 6-Unit Matrix:** Carats, Ratti, Milligrams, Grams, Cents, and Grains.
* **Quick Tools Strip:** Direct navigation to Body-Weight Tool, Carat $\to$ Ratti, Ratti $\to$ Carat, and Sawa Charts.
* **1-Click Actions:** Copy Result & WhatsApp Formatted Share.
* **Bilingual Toggle:** Instant English $\leftrightarrow$ हिन्दी switch across all UI elements.

### Page 2: `/carat-to-ratti` — Dedicated Carat to Ratti Tool
* **Intent:** Users searching specifically for `"carat to ratti converter"`, `"1 carat in ratti"`, or `"5 carat in ratti"`.
* **Features:**
  * Carat-first input pre-focused.
  * Static exhaustive conversion table ($0.25\text{ Ct}$ to $15.00\text{ Ct}$ in $0.25\text{ Ct}$ increments) optimized for Google Position 0 featured snippets.
  * Laboratory explainer on why GIA/IGI certificates use Metric Carats ($200\text{ mg}$).

### Page 3: `/ratti-to-carat` — Dedicated Ratti to Carat Tool
* **Intent:** Users searching specifically for `"ratti to carat converter"`, `"1 ratti in carat"`, or `"5 ratti in carat"`.
* **Features:**
  * Ratti-first input pre-focused.
  * Static conversion table ($1.00\text{ Ratti}$ to $15.00\text{ Ratti}$) with live Pakka vs Sunee standard comparison.
  * Guide explaining the origin of Gunja seeds and the historical shift from traditional trade to metric units.

### Page 4: `/body-weight-calculator` — Vedic Body-Mass Dosage Tool
* **Intent:** Users searching for `"gemstone weight by body weight"`, `"how many ratti for 65 kg"`.
* **Features:**
  * Full-width interactive weight slider ($35\text{--}140\text{ kg}$) + direct numeric entry.
  * Live dosage matrix: Baseline ($\text{kg} / 12$), Full Potency ($\text{kg} / 10$), and Recommended Sawa Target.
  * Navratna gemstone minimum weight guidelines.

### Page 5: `/sawa-ratti-chart` — Astrological Reference & Vedic Scale
* **Intent:** Users searching for `"sawa ratti meaning"`, `"sawa paanch ratti"`, `"sawa saat ratti"`.
* **Features:**
  * Complete, searchable reference matrix from Sawa Ek ($1.25\text{ Rt}$) to Sawa Barah ($12.25\text{ Rt}$).
  * Detailed breakdown of Auspicious Sawa ($+0.25$), Neutral Saadhe ($+0.50$), and Paune ($+0.75$) astrological principles.
  * Direct "Load into Calculator" action on every row.

---

## 4. Design & UI Specifications (Vercel Geist System)

* **Canvas & Color:** Deep ink background (`#000000` / `#090d16`), 1px hairline borders (`rgba(255, 255, 255, 0.08)`), amber/gold glowing highlights, high-contrast typography.
* **Typography:** `Geist Mono` / `Outfit` for display headings and monospaced technical figures; `Inter` for clear body readability.
* **Zero Distractions:** No third-party advertisements, no intrusive popups, instantaneous response times ($\le 0.8\text{s}$ LCP).

---

## 5. Technical & SEO Architecture

* **Framework:** Astro v5 (Static Site Generation for 100/100 Core Web Vitals).
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) via `@theme` design tokens.
* **Structured Data (JSON-LD):**
  * `WebApplication` Schema on tools.
  * `FAQPage` Schema on question sections.
  * `BreadcrumbList` Schema across all secondary pages.
* **Internal Linking:** Clean header navigation and contextual footer links seamlessly binding the 5 core tools together.
