/**
 * Ratti to Carat & Carat to Ratti Mathematical & Astrological Engine
 * Master Reference: docs/ratti_carat_tool_data_vault.md
 */

export type ConversionMode = 'caratToRatti' | 'rattiToCarat';
export type RattiStandard = 'pakka' | 'sunee';

export interface SawaInfo {
  isSawa: boolean;
  isSaadhe: boolean;
  isPaune: boolean;
  name: string;
  hindiName: string;
  planet: string;
  hindiPlanet: string;
  gemstone: string;
  hindiGemstone: string;
  auspiciousStatus: 'auspicious' | 'neutral' | 'inauspicious' | 'standard';
  description: string;
  hindiDescription: string;
}

export interface GemstoneConversionResult {
  inputVal: number;
  inputUnit: 'carat' | 'ratti';
  standard: RattiStandard;
  ratio: number;
  carats: number;
  ratti: number;
  milligrams: number;
  grams: number;
  grains: number;
  cents: number;
  sawaInfo: SawaInfo;
}

export const RATTI_STANDARDS = {
  pakka: {
    ratio: 0.91,
    name: 'Pakka Ratti (Standard)',
    hindiName: 'पक्की रत्ती (मानक)',
    description: '1 Pakka Ratti = 0.91 Carats (182 mg). Standard used across certified labs & Vedic astrology.',
  },
  sunee: {
    ratio: 0.90,
    name: 'Sunee / Kachha Ratti (Trade)',
    hindiName: 'सुनी / कच्ची रत्ती (व्यापारिक)',
    description: '1 Sunee Ratti = 0.90 Carats (180 mg). Traditional North Indian jeweler trade measure.',
  },
};

const SAWA_NAMES_MAP: Record<number, { name: string; hindi: string; planet: string; hindiPlanet: string; gem: string; hindiGem: string }> = {
  1: { name: 'Sawa Ek', hindi: 'सवा एक', planet: 'Venus (Shukra)', hindiPlanet: 'शुक्र', gem: 'Diamond / Opal', hindiGem: 'हीरा / ओपल' },
  2: { name: 'Sawa Do', hindi: 'सवा दो', planet: 'Mercury (Budh)', hindiPlanet: 'बुध', gem: 'Emerald (Panna)', hindiGem: 'पन्ना' },
  3: { name: 'Sawa Teen', hindi: 'सवा तीन', planet: 'Saturn (Shani)', hindiPlanet: 'शनि', gem: 'Blue Sapphire (Neelam)', hindiGem: 'नीलम' },
  4: { name: 'Sawa Chaar', hindi: 'सवा चार', planet: 'Sun (Surya)', hindiPlanet: 'सूर्य', gem: 'Ruby (Manik)', hindiGem: 'माणिक' },
  5: { name: 'Sawa Paanch', hindi: 'सवा पांच', planet: 'Jupiter (Guru)', hindiPlanet: 'बृहस्पति / गुरु', gem: 'Yellow Sapphire (Pukhraj)', hindiGem: 'पुखराज' },
  6: { name: 'Sawa Chhah', hindi: 'सवा छह', planet: 'Moon (Chandra)', hindiPlanet: 'चंद्रमा', gem: 'Pearl (Moti)', hindiGem: 'मोती' },
  7: { name: 'Sawa Saat', hindi: 'सवा सात', planet: 'Mars (Mangal)', hindiPlanet: 'मंगल', gem: 'Red Coral (Moonga)', hindiGem: 'मूंगा' },
  8: { name: 'Sawa Aath', hindi: 'सवा आठ', planet: 'Rahu', hindiPlanet: 'राहु', gem: 'Hessonite (Gomed)', hindiGem: 'गोमेद' },
  9: { name: 'Sawa Nau', hindi: 'सवा नौ', planet: 'Ketu', hindiPlanet: 'केतु', gem: "Cat's Eye (Lehsuniya)", hindiGem: 'लहसुनिया' },
  10: { name: 'Sawa Dus', hindi: 'सवा दस', planet: 'High Potency', hindiPlanet: 'उच्च प्रभाव', gem: 'High-Impact Remedy', hindiGem: 'विशेष रत्न' },
  11: { name: 'Sawa Ghyarah', hindi: 'सवा ग्यारह', planet: 'High Potency', hindiPlanet: 'उच्च प्रभाव', gem: 'Heavy Remedy', hindiGem: 'विशेष रत्न' },
  12: { name: 'Sawa Barah', hindi: 'सवा बारह', planet: 'Altar/Special', hindiPlanet: 'विशेष साधना', gem: 'Heavy Gemstone', hindiGem: 'विशाल रत्न' },
};

/**
 * Decode Vedic astrological fractions (Sawa, Saadhe, Paune)
 */
export function getSawaInfo(rattiVal: number): SawaInfo {
  const whole = Math.floor(rattiVal);
  const frac = Number((rattiVal - whole).toFixed(2));

  // Check Sawa (+0.25)
  if (Math.abs(frac - 0.25) < 0.03) {
    const data = SAWA_NAMES_MAP[whole] || {
      name: `Sawa ${whole}`,
      hindi: `सवा ${whole}`,
      planet: 'Auspicious Vedic Measure',
      hindiPlanet: 'शुभ वैदिक माप',
      gem: 'Universal Auspicious Gem',
      hindiGem: 'सर्वकार्य शुभ रत्न',
    };
    return {
      isSawa: true,
      isSaadhe: false,
      isPaune: false,
      name: data.name,
      hindiName: data.hindi,
      planet: data.planet,
      hindiPlanet: data.hindiPlanet,
      gemstone: data.gem,
      hindiGemstone: data.hindiGem,
      auspiciousStatus: 'auspicious',
      description: 'Auspicious (+0.25 Ratti). Signifies growth, prosperity, and expansive energy in Vedic astrology.',
      hindiDescription: 'अत्यंत शुभ (+0.25 रत्ती)। वैदिक ज्योतिष में यह वृद्धि, समृद्धि और सकारात्मक ऊर्जा का प्रतीक है।',
    };
  }

  // Check Saadhe (+0.50)
  if (Math.abs(frac - 0.50) < 0.03) {
    return {
      isSawa: false,
      isSaadhe: true,
      isPaune: false,
      name: `Saadhe ${whole}`,
      hindi: `साढ़े ${whole}`,
      planet: 'Neutral Energy',
      hindiPlanet: 'संतुलित प्रभाव',
      gemstone: 'Standard Gemstone Weight',
      hindiGemstone: 'मानक रत्न भार',
      auspiciousStatus: 'neutral',
      description: 'Neutral (+0.50 Ratti). Considered stable and acceptable for standard astrological wear.',
      hindiDescription: 'संतुलित (+0.50 रत्ती)। सामान्य रूप से स्वीकार्य एवं स्थिर ऊर्जा वाला माना जाता है।',
    };
  }

  // Check Paune (+0.75)
  if (Math.abs(frac - 0.75) < 0.03) {
    return {
      isSawa: false,
      isSaadhe: false,
      isPaune: true,
      name: `Paune ${whole + 1}`,
      hindi: `पौने ${whole + 1}`,
      planet: 'Historically Avoided',
      hindiPlanet: 'अशुभ / त्याज्य',
      gemstone: 'Incomplete Fraction',
      hindiGemstone: 'अपूर्ण भार',
      auspiciousStatus: 'inauspicious',
      description: 'Paune (+0.75 Ratti). Historically avoided by orthodox astrologers as an incomplete fraction.',
      hindiDescription: 'पौने (+0.75 रत्ती)। पारंपरिक वैदिक ज्योतिष में इसे अधूरा या क्षयकारी मानकर टाला जाता है।',
    };
  }

  return {
    isSawa: false,
    isSaadhe: false,
    isPaune: false,
    name: `${rattiVal.toFixed(2)} Ratti`,
    hindiName: `${rattiVal.toFixed(2)} रत्ती`,
    planet: 'Standard Vedic Measure',
    hindiPlanet: 'मानक वैदिक भार',
    gemstone: 'Standard Gemstone',
    hindiGemstone: 'मानक रत्न',
    auspiciousStatus: 'standard',
    description: 'Exact weight conversion calculated with full scientific precision.',
    hindiDescription: 'वैज्ञानिक शुद्धता के साथ सटीक वजन की गणना।',
  };
}

/**
 * Main Conversion Function
 */
export function convertWeight(
  value: number,
  mode: ConversionMode,
  standard: RattiStandard = 'pakka'
): GemstoneConversionResult {
  const safeVal = Math.max(0, isNaN(value) ? 0 : value);
  const ratio = RATTI_STANDARDS[standard].ratio;

  let carats = 0;
  let ratti = 0;

  if (mode === 'rattiToCarat') {
    ratti = safeVal;
    carats = safeVal * ratio;
  } else {
    carats = safeVal;
    ratti = ratio > 0 ? safeVal / ratio : 0;
  }

  const milligrams = carats * 200;
  const grams = milligrams / 1000;
  const grains = carats * 3.08647;
  const cents = carats * 100;

  return {
    inputVal: safeVal,
    inputUnit: mode === 'rattiToCarat' ? 'ratti' : 'carat',
    standard,
    ratio,
    carats: Number(carats.toFixed(3)),
    ratti: Number(ratti.toFixed(3)),
    milligrams: Number(milligrams.toFixed(1)),
    grams: Number(grams.toFixed(4)),
    grains: Number(grains.toFixed(2)),
    cents: Number(cents.toFixed(1)),
    sawaInfo: getSawaInfo(ratti),
  };
}

/**
 * Vedic Body Weight Dosage Calculation
 * Formula: Minimum Ratti = Body Weight in kg / (10 to 12)
 */
export interface BodyWeightRecommendation {
  bodyWeightKg: number;
  minRatti: number;
  maxRatti: number;
  minCarat: number;
  maxCarat: number;
  recommendedSawa: {
    ratti: number;
    carats: number;
    name: string;
    hindiName: string;
    description: string;
    hindiDescription: string;
  };
}

export function calculateBodyWeightDosage(weightKg: number, standard: RattiStandard = 'pakka'): BodyWeightRecommendation {
  const safeKg = Math.max(30, Math.min(150, weightKg));
  const ratio = RATTI_STANDARDS[standard].ratio;

  const minRatti = Number((safeKg / 12).toFixed(2));
  const maxRatti = Number((safeKg / 10).toFixed(2));

  const minCarat = Number((minRatti * ratio).toFixed(2));
  const maxCarat = Number((maxRatti * ratio).toFixed(2));

  // Find nearest Sawa (+0.25) in this range or just above min
  const baseWhole = Math.floor(minRatti);
  let recommendedRatti = baseWhole + 0.25;
  if (recommendedRatti < minRatti) {
    recommendedRatti = baseWhole + 1.25;
  }

  const recommendedCarats = Number((recommendedRatti * ratio).toFixed(2));
  const wholeVal = Math.floor(recommendedRatti);
  const sawaData = SAWA_NAMES_MAP[wholeVal] || { name: `Sawa ${wholeVal}`, hindi: `सवा ${wholeVal}` };

  return {
    bodyWeightKg: safeKg,
    minRatti,
    maxRatti,
    minCarat,
    maxCarat,
    recommendedSawa: {
      ratti: recommendedRatti,
      carats: recommendedCarats,
      name: sawaData.name,
      hindiName: sawaData.hindi,
      description: `Recommended for ${safeKg} kg body weight for optimal astrological efficacy.`,
      hindiDescription: `${safeKg} किग्रा वजन के लिए सर्वश्रेष्ठ ज्योतिषीय परिणाम हेतु अनुशंसित भार।`,
    },
  };
}

/**
 * Precomputed Static Conversion Tables Data (for SEO Featured Snippet dominance)
 */
export interface ConversionRow {
  carats: number;
  pakkaRatti: number;
  suneeRatti: number;
  mg: number;
  grams: number;
  cents: number;
  sawaTag?: string;
  sawaTagHindi?: string;
}

export function generateCaratToRattiTable(): ConversionRow[] {
  const rows: ConversionRow[] = [];
  const steps = [
    0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5,
    4.75, 5.0, 5.25, 5.5, 5.75, 6.0, 6.25, 6.5, 6.75, 7.0, 7.25, 7.5, 8.0, 8.5, 9.0, 10.0, 11.0, 12.0, 15.0
  ];

  for (const ct of steps) {
    const pakka = Number((ct / 0.91).toFixed(2));
    const sunee = Number((ct / 0.90).toFixed(2));
    const mg = Number((ct * 200).toFixed(1));
    const grams = Number((ct * 0.2).toFixed(3));
    const cents = Number((ct * 100).toFixed(0));

    const wholePakka = Math.floor(pakka);
    const frac = Number((pakka - wholePakka).toFixed(2));
    let sawaTag: string | undefined;
    let sawaTagHindi: string | undefined;

    if (Math.abs(frac - 0.25) < 0.05 && SAWA_NAMES_MAP[wholePakka]) {
      sawaTag = SAWA_NAMES_MAP[wholePakka].name;
      sawaTagHindi = SAWA_NAMES_MAP[wholePakka].hindi;
    }

    rows.push({
      carats: ct,
      pakkaRatti: pakka,
      suneeRatti: sunee,
      mg,
      grams,
      cents,
      sawaTag,
      sawaTagHindi,
    });
  }

  return rows;
}

export function generateRattiToCaratTable(): ConversionRow[] {
  const rows: ConversionRow[] = [];
  const steps = [
    1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 5.0,
    5.25, 5.5, 5.75, 6.0, 6.25, 6.5, 6.75, 7.0, 7.25, 7.5, 8.0, 8.25, 8.5, 9.0, 9.25, 10.0, 10.25, 11.0, 12.0, 15.0
  ];

  for (const rt of steps) {
    const ctPakka = Number((rt * 0.91).toFixed(2));
    const ctSunee = Number((rt * 0.90).toFixed(2));
    const mg = Number((ctPakka * 200).toFixed(1));
    const grams = Number((ctPakka * 0.2).toFixed(3));
    const cents = Number((ctPakka * 100).toFixed(0));

    const wholeRt = Math.floor(rt);
    const frac = Number((rt - wholeRt).toFixed(2));
    let sawaTag: string | undefined;
    let sawaTagHindi: string | undefined;

    if (Math.abs(frac - 0.25) < 0.03 && SAWA_NAMES_MAP[wholeRt]) {
      sawaTag = SAWA_NAMES_MAP[wholeRt].name;
      sawaTagHindi = SAWA_NAMES_MAP[wholeRt].hindi;
    }

    rows.push({
      carats: ctPakka,
      pakkaRatti: rt,
      suneeRatti: ctSunee,
      mg,
      grams,
      cents,
      sawaTag,
      sawaTagHindi,
    });
  }

  return rows;
}

export const SAWA_RATTI_TABLE = [
  { ratti: 1.25, name: 'Sawa Ek', hindiName: 'सवा एक', carat: 1.14, mg: 227.5, planet: 'Venus (Shukra)', hindiPlanet: 'शुक्र', gem: 'Diamond / Opal', hindiGem: 'हीरा / ओपल' },
  { ratti: 2.25, name: 'Sawa Do', hindiName: 'सवा दो', carat: 2.05, mg: 409.5, planet: 'Mercury (Budh)', hindiPlanet: 'बुध', gem: 'Emerald (Panna)', hindiGem: 'पन्ना' },
  { ratti: 3.25, name: 'Sawa Teen', hindiName: 'सवा तीन', carat: 2.96, mg: 591.5, planet: 'Saturn (Shani)', hindiPlanet: 'शनि', gem: 'Blue Sapphire (Neelam)', hindiGem: 'नीलम' },
  { ratti: 4.25, name: 'Sawa Chaar', hindiName: 'सवा चार', carat: 3.87, mg: 773.5, planet: 'Sun (Surya)', hindiPlanet: 'सूर्य', gem: 'Ruby (Manik)', hindiGem: 'माणिक' },
  { ratti: 5.25, name: 'Sawa Paanch', hindiName: 'सवा पांच', carat: 4.78, mg: 955.5, planet: 'Jupiter (Guru)', hindiPlanet: 'बृहस्पति / गुरु', gem: 'Yellow Sapphire (Pukhraj)', hindiGem: 'पुखराज' },
  { ratti: 6.25, name: 'Sawa Chhah', hindiName: 'सवा छह', carat: 5.69, mg: 1137.5, planet: 'Moon (Chandra)', hindiPlanet: 'चंद्रमा', gem: 'Pearl (Moti)', hindiGem: 'मोती' },
  { ratti: 7.25, name: 'Sawa Saat', hindiName: 'सवा सात', carat: 6.60, mg: 1319.5, planet: 'Mars (Mangal)', hindiPlanet: 'मंगल', gem: 'Red Coral (Moonga)', hindiGem: 'मूंगा' },
  { ratti: 8.25, name: 'Sawa Aath', hindiName: 'सवा आठ', carat: 7.51, mg: 1501.5, planet: 'Rahu', hindiPlanet: 'राहु', gem: 'Hessonite (Gomed)', hindiGem: 'गोमेद' },
  { ratti: 9.25, name: 'Sawa Nau', hindiName: 'सवा नौ', carat: 8.42, mg: 1683.5, planet: 'Ketu', hindiPlanet: 'केतु', gem: "Cat's Eye (Lehsuniya)", hindiGem: 'लहसुनिया' },
  { ratti: 10.25, name: 'Sawa Dus', hindiName: 'सवा दस', carat: 9.33, mg: 1865.5, planet: 'High Dosage', hindiPlanet: 'उच्च प्रभाव', gem: 'Remedial Heavy Gem', hindiGem: 'विशेष उपचार' },
  { ratti: 11.25, name: 'Sawa Ghyarah', hindiName: 'सवा ग्यारह', carat: 10.24, mg: 2047.5, planet: 'High Dosage', hindiPlanet: 'उच्च प्रभाव', gem: 'Heavy Ring / Altar', hindiGem: 'विशेष धारण' },
  { ratti: 12.25, name: 'Sawa Barah', hindiName: 'सवा बारह', carat: 11.15, mg: 2229.5, planet: 'Altar Worship', hindiPlanet: 'पूजा स्थान', gem: 'Sacred Altar Gem', hindiGem: 'विशाल सिद्ध रत्न' },
];
