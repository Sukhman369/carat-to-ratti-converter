# Ratti to Carat & Carat to Ratti: Comprehensive Data & Feature Vault
*Master Reference Repository for Building Standalone High-Performance AstroJS Static Tool*

---

## 1. Domain Mathematics & Conversion Formulas

### Primary Conversion Constants
| Unit Pair | Ratio / Formula | Description |
| :--- | :--- | :--- |
| **Pakka Ratti $\leftrightarrow$ Carat (Ct)** | `1 Pakka Ratti = 0.9100 Carats` | Standard astrological and gemological standard used across India. |
| **Carat (Ct) $\leftrightarrow$ Pakka Ratti** | `1 Carat = 1.0989 Pakka Ratti` (`1 / 0.91`) | Global certified carat to standard Vedic ratti. |
| **Sunee / Kachha Ratti $\leftrightarrow$ Carat** | `1 Sunee Ratti = 0.9000 Carats` | Traditional local trade standard (180 mg). |
| **Old Kachha Ratti $\leftrightarrow$ Carat** | `1 Kachha Ratti = 0.6000 Carats` (120 mg) | Historical North Indian regional measure. |
| **Carat $\leftrightarrow$ Milligrams (mg)** | `1 Carat = 200.0 mg` | International SI Standard (1907 metric carat). |
| **Carat $\leftrightarrow$ Grams (g)** | `1 Carat = 0.2000 g` | Metric conversion (`mg / 1000`). |
| **Pakka Ratti $\leftrightarrow$ Milligrams (mg)** | `1 Pakka Ratti = 182.0 mg` | Standard seed mass calibration (`0.91 * 200`). |
| **Pakka Ratti $\leftrightarrow$ Grams (g)** | `1 Pakka Ratti = 0.1820 g` | (`182 / 1000`). |
| **Carat $\leftrightarrow$ Grains (gr)** | `1 Carat = 3.08647 Grains` | US / UK imperial gemological trade measure. |
| **Pakka Ratti $\leftrightarrow$ Grains (gr)** | `1 Pakka Ratti = 2.8087 Grains` | Traditional jeweler conversion. |
| **Carat $\leftrightarrow$ Tola** | `1 Tola = 58.319 Carats` (11.6638 g) | Indian gold/precious metals metric. |
| **Pakka Ratti $\leftrightarrow$ Tola** | `1 Tola = 64.087 Pakka Ratti` (or 96 traditional ratti) | Ancient Vedic Ayurvedic scaling. |
| **Surkhi / Chawal Sub-units** | `1 Ratti = 8 Chawal (Rice Grains)` | Ancient micro-weight metric. |
| **Cent / Point (gemological)** | `1 Carat = 100 Cents / Points` | Diamond and gemstone grading fractional metric. |
| **Pakka Ratti $\leftrightarrow$ Cents/Points** | `1 Pakka Ratti = 91 Cents` | `0.91 * 100`. |

### Precision Calculation Algorithms (TypeScript / JS for Astro)
```typescript
export interface GemstoneConversionResult {
  inputVal: number;
  inputUnit: 'ratti' | 'carat';
  standardRatio: number; // 0.91 for Pakka, 0.90 for Sunee
  carats: number;
  ratti: number;
  milligrams: number;
  grams: number;
  grains: number;
  cents: number;
  astrologicalSawaLabel: string;
}

export function convertGemstoneWeight(
  val: number,
  mode: 'rattiToCarat' | 'caratToRatti',
  ratio: number = 0.91
): GemstoneConversionResult {
  const safeVal = Math.max(0, val);
  let carats = 0;
  let ratti = 0;

  if (mode === 'rattiToCarat') {
    ratti = safeVal;
    carats = safeVal * ratio;
  } else {
    carats = safeVal;
    ratti = safeVal / ratio;
  }

  const milligrams = carats * 200;
  const grams = milligrams / 1000;
  const grains = carats * 3.08647;
  const cents = carats * 100;

  return {
    inputVal: safeVal,
    inputUnit: mode === 'rattiToCarat' ? 'ratti' : 'carat',
    standardRatio: ratio,
    carats: Number(carats.toFixed(4)),
    ratti: Number(ratti.toFixed(4)),
    milligrams: Number(milligrams.toFixed(2)),
    grams: Number(grams.toFixed(4)),
    grains: Number(grains.toFixed(3)),
    cents: Number(cents.toFixed(1)),
    astrologicalSawaLabel: getSawaRattiLabel(ratti)
  };
}
```

---

## 2. Vedic Astrological Weight Calculation Rules (The "Sawa" & Body Weight Logic)

### The Body Weight Rule of Thumb
* **Vedic Formula:** $\text{Minimum Gemstone Weight (Ratti)} = \frac{\text{Body Weight in kg}}{10 \text{ to } 12}$
* **Example:** 65 kg person $\rightarrow$ $65 / 12 = 5.41\text{ Ratti}$ to $65 / 10 = 6.50\text{ Ratti}$ ($\approx 4.92\text{ to } 5.91\text{ Carats}$).

### Astrological "Sawa" Weight Standard (Why Fractions Matter)
In Vedic astrology, gemstones are prescribed with auspicious suffixes:
* **Sawa (+0.25 Ratti):** Considered most auspicious (growth, expansion). E.g., Sawa Paanch (5.25 Ratti), Sawa Chhah (6.25 Ratti), Sawa Saat (7.25 Ratti).
* **Saadhe (+0.50 Ratti):** Neutral/Stable. E.g., Saadhe Paanch (5.50 Ratti).
* **Paune (+0.75 Ratti):** Historically avoided in North Indian astrology (considered incomplete/loss-bearing by orthodox practitioners).

### Complete Sawa Ratti Reference Map
| Traditional Name | Ratti Value | Carat Equivalent (0.91 Ratio) | Milligrams | Grams | Common Planets |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sawa Ek** | 1.25 Ratti | 1.14 Ct | 227.5 mg | 0.228 g | Diamond / Shukra |
| **Sawa Do** | 2.25 Ratti | 2.05 Ct | 409.5 mg | 0.410 g | Emerald / Budh |
| **Sawa Teen** | 3.25 Ratti | 2.96 Ct | 591.5 mg | 0.592 g | Blue Sapphire / Shani |
| **Sawa Chaar** | 4.25 Ratti | 3.87 Ct | 773.5 mg | 0.774 g | Ruby / Surya |
| **Sawa Paanch** | 5.25 Ratti | 4.78 Ct | 955.5 mg | 0.956 g | Yellow Sapphire / Guru |
| **Sawa Chhah** | 6.25 Ratti | 5.69 Ct | 1137.5 mg | 1.138 g | Pearl / Chandra |
| **Sawa Saat** | 7.25 Ratti | 6.60 Ct | 1319.5 mg | 1.320 g | Red Coral / Mangal |
| **Sawa Aath** | 8.25 Ratti | 7.51 Ct | 1501.5 mg | 1.502 g | Hessonite / Rahu |
| **Sawa Nau** | 9.25 Ratti | 8.42 Ct | 1683.5 mg | 1.684 g | Cat's Eye / Ketu |
| **Sawa Dus** | 10.25 Ratti | 9.33 Ct | 1865.5 mg | 1.866 g | Heavy Body Weight Remedies |
| **Sawa Ghyarah** | 11.25 Ratti | 10.24 Ct | 2047.5 mg | 2.048 g | High-Impact Altars / Rings |
| **Sawa Barah** | 12.25 Ratti | 11.15 Ct | 2229.5 mg | 2.230 g | Heavy Gemstones |

---

## 3. High-Resolution Exhaustive Conversion Tables

### Table A: Carat to Ratti (0.25 Ct to 15.00 Ct in 0.25 Ct steps)
| Carats (Ct) | Pakka Ratti (0.91) | Sunee Ratti (0.90) | Milligrams (mg) | Grams (g) | Cents (Points) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0.25 Ct** | 0.27 Ratti | 0.28 Ratti | 50.0 mg | 0.050 g | 25 Cts |
| **0.50 Ct** | 0.55 Ratti | 0.56 Ratti | 100.0 mg | 0.100 g | 50 Cts |
| **0.75 Ct** | 0.82 Ratti | 0.83 Ratti | 150.0 mg | 0.150 g | 75 Cts |
| **1.00 Ct** | 1.10 Ratti | 1.11 Ratti | 200.0 mg | 0.200 g | 100 Cts |
| **1.25 Ct** | 1.37 Ratti | 1.39 Ratti | 250.0 mg | 0.250 g | 125 Cts |
| **1.50 Ct** | 1.65 Ratti | 1.67 Ratti | 300.0 mg | 0.300 g | 150 Cts |
| **1.75 Ct** | 1.92 Ratti | 1.94 Ratti | 350.0 mg | 0.350 g | 175 Cts |
| **2.00 Ct** | 2.20 Ratti | 2.22 Ratti | 400.0 mg | 0.400 g | 200 Cts |
| **2.25 Ct** | 2.47 Ratti | 2.50 Ratti | 450.0 mg | 0.450 g | 225 Cts |
| **2.50 Ct** | 2.75 Ratti | 2.78 Ratti | 500.0 mg | 0.500 g | 250 Cts |
| **2.75 Ct** | 3.02 Ratti | 3.06 Ratti | 550.0 mg | 0.550 g | 275 Cts |
| **3.00 Ct** | 3.30 Ratti | 3.33 Ratti | 600.0 mg | 0.600 g | 300 Cts |
| **3.25 Ct** | 3.57 Ratti | 3.61 Ratti | 650.0 mg | 0.650 g | 325 Cts |
| **3.50 Ct** | 3.85 Ratti | 3.89 Ratti | 700.0 mg | 0.700 g | 350 Cts |
| **3.75 Ct** | 4.12 Ratti | 4.17 Ratti | 750.0 mg | 0.750 g | 375 Cts |
| **4.00 Ct** | 4.40 Ratti | 4.44 Ratti | 800.0 mg | 0.800 g | 400 Cts |
| **4.25 Ct** | 4.67 Ratti | 4.72 Ratti | 850.0 mg | 0.850 g | 425 Cts |
| **4.50 Ct** | 4.95 Ratti | 5.00 Ratti | 900.0 mg | 0.900 g | 450 Cts |
| **4.75 Ct** | 5.22 Ratti | 5.28 Ratti | 950.0 mg | 0.950 g | 475 Cts |
| **5.00 Ct** | 5.49 Ratti | 5.56 Ratti | 1000.0 mg | 1.000 g | 500 Cts |
| **5.25 Ct** | 5.77 Ratti | 5.83 Ratti | 1050.0 mg | 1.050 g | 525 Cts |
| **5.50 Ct** | 6.04 Ratti | 6.11 Ratti | 1100.0 mg | 1.100 g | 550 Cts |
| **5.75 Ct** | 6.32 Ratti | 6.39 Ratti | 1150.0 mg | 1.150 g | 575 Cts |
| **6.00 Ct** | 6.59 Ratti | 6.67 Ratti | 1200.0 mg | 1.200 g | 600 Cts |
| **6.50 Ct** | 7.14 Ratti | 7.22 Ratti | 1300.0 mg | 1.300 g | 650 Cts |
| **7.00 Ct** | 7.69 Ratti | 7.78 Ratti | 1400.0 mg | 1.400 g | 700 Cts |
| **7.50 Ct** | 8.24 Ratti | 8.33 Ratti | 1500.0 mg | 1.500 g | 750 Cts |
| **8.00 Ct** | 8.79 Ratti | 8.89 Ratti | 1600.0 mg | 1.600 g | 800 Cts |
| **8.50 Ct** | 9.34 Ratti | 9.44 Ratti | 1700.0 mg | 1.700 g | 850 Cts |
| **9.00 Ct** | 9.89 Ratti | 10.00 Ratti | 1800.0 mg | 1.800 g | 900 Cts |
| **10.00 Ct** | 10.99 Ratti | 11.11 Ratti | 2000.0 mg | 2.000 g | 1000 Cts |
| **11.00 Ct** | 12.09 Ratti | 12.22 Ratti | 2200.0 mg | 2.200 g | 1100 Cts |
| **12.00 Ct** | 13.19 Ratti | 13.33 Ratti | 2400.0 mg | 2.400 g | 1200 Cts |
| **15.00 Ct** | 16.48 Ratti | 16.67 Ratti | 3000.0 mg | 3.000 g | 1500 Cts |

---

## 4. Complete SEO & Keyword Matrix

### Target High-Volume Search Queries (India + US + UK + UAE)
* **Tier 1 (High Intent / Converter):**
  * `carat to ratti converter` (MSV: ~45,000/mo)
  * `ratti to carat converter` (MSV: ~38,000/mo)
  * `1 carat in ratti` / `1 carat to ratti` (MSV: ~22,000/mo)
  * `1 ratti in carat` / `1 ratti to carat` (MSV: ~18,000/mo)
  * `carat to ratti calculator` (MSV: ~14,000/mo)
  * `ratti to carat calculator` (MSV: ~12,000/mo)
* **Tier 2 (Specific Fractional & Value Queries):**
  * `5.25 ratti in carat` (MSV: ~6,500/mo)
  * `6.25 ratti in carat` (MSV: ~5,200/mo)
  * `7.25 ratti in carat` (MSV: ~4,800/mo)
  * `4.25 ratti in carat` (MSV: ~4,100/mo)
  * `5 carat in ratti` (MSV: ~5,400/mo)
  * `7 carat in ratti` (MSV: ~3,900/mo)
* **Tier 3 (Informational & Standards):**
  * `difference between pakka ratti and sunee ratti`
  * `how many mg in 1 ratti`
  * `how many grams in 1 ratti`
  * `sawa ratti meaning in astrology`
  * `gemstone weight calculator by body weight`

### Complete JSON-LD Schema Suite for Astro Tool
1. **WebApplication Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Carat to Ratti Converter & Gemstone Weight Calculator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Instant Carat to Ratti Conversion",
    "Instant Ratti to Carat Conversion",
    "Pakka Ratti & Sunee Ratti Standards",
    "Milligram & Gram breakdown",
    "Astrological Body Weight Gem Calculator",
    "Sawa Ratti Reference Charts"
  ]
}
```

2. **FAQPage Schema:** (5 core high-CTR Google Answer rich snippets)
3. **HowTo Schema:** (Step-by-step conversion guide for featured snippet dominance)
4. **BreadcrumbList Schema:** (Clean root tool indexing)

---

## 5. AstroJS Architecture & Features Blueprint

### Planned Astro Components
1. **`HeroCalculator.astro`**: Zero-JS baseline HTML fallback + reactive client-side AlpineJS/Svelte micro-island for zero-latency keystroke recalculation.
2. **`QuickAnswerSnippet.astro`**: Static HTML formula card for Google Position 0.
3. **`BodyWeightGemCalculator.astro`**: Interactive slider (*"Enter your body weight in kg/lbs $\rightarrow$ get recommended Ratti/Carat range"*).
4. **`ConversionTablesTabs.astro`**: Static, fast-loading, searchable tables (Carat $\rightarrow$ Ratti, Ratti $\rightarrow$ Carat, Sawa Ratti Scale).
5. **`GemstoneSpecificCards.astro`**: Quick links/calculators tailored per gemstone (Ruby, Emerald, Yellow Sapphire, Blue Sapphire, Diamond).
6. **`SponsorBannerSlot.astro`**: Configurable ad/sponsor placeholder slots:
   * Header Top Bar Sponsor
   * Mid-Calculator Certified Lab / Astrologer Sponsor Card
   * Sticky Bottom Lead Gen / Affiliate Banner
7. **`FaqAccordion.astro`**: Semantic `<details>` HTML for instant crawlability and zero client-side JavaScript overhead.

---

## 6. Sponsor & Monetization Integration Architecture

### Planned Sponsor Slot Types
1. **Certified Lab Sponsor:** *"Verify your gemstone with [Sponsor Lab Name]"* (Native card under result box).
2. **Astrology Consultation Sponsor:** *"Need your personalized Kundli Gemstone prescription? Book [Sponsor Astrologer]"*.
3. **Certified Retail Gemstone Sponsor:** Direct affiliate buy links (`Ruby (5.25 Ratti) starting at ₹X,XXX`).
4. **Google AdSense / Mediavine Banner Containers:** Responsive fixed-aspect-ratio ad units (300x250, 728x90, sticky bottom anchor).

---

## 7. Next Steps for PRD & TRD Alignment
* [ ] **Review Product Requirements Document (PRD):** Target audience, user journeys, Core Web Vitals targets, programmatic SEO pages (e.g. `/5-carat-in-ratti`, `/5-25-ratti-in-carat`).
* [ ] **Review Technical Requirements Document (TRD):** Astro 5 / Starlight / Tailwind vs Vanilla CSS, client islands (Preact/Svelte/Alpine), deployment pipeline (Cloudflare Pages / Vercel), programmatic page generation logic.
