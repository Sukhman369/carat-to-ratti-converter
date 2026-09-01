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
  status: 'auspicious' | 'neutral' | 'inauspicious' | 'standard';
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
  10: { name: 'Sawa Dus', hindi: 'सवा दस', planet: 'High Dosage', hindiPlanet: 'उच्च प्रभाव', gem: 'Remedial Heavy Gem', hindiGem: 'विशेष उपचार' },
  11: { name: 'Sawa Ghyarah', hindi: 'सवा ग्यारह', planet: 'High Dosage', hindiPlanet: 'उच्च प्रभाव', gem: 'Heavy Ring / Altar', hindiGem: 'विशेष धारण' },
  12: { name: 'Sawa Barah', hindi: 'सवा बारह', planet: 'Altar Worship', hindiPlanet: 'पूजा स्थान', gem: 'Sacred Altar Gem', hindiGem: 'विशाल सिद्ध रत्न' },
};

/**
 * Astrological Sawa Decoder
 */
export function getSawaInfo(rattiVal: number): SawaInfo {
  if (isNaN(rattiVal) || rattiVal <= 0) {
    return {
      isSawa: false,
      isSaadhe: false,
      isPaune: false,
      name: '0.00 Ratti',
      hindiName: '०.०० रत्ती',
      planet: 'Universal',
      hindiPlanet: 'सामान्य',
      gemstone: 'All Gemstones',
      hindiGemstone: 'समस्त रत्न',
      status: 'standard',
      description: 'Enter a weight above 0 to see astrological Sawa analysis.',
      hindiDescription: 'ज्योतिषीय सवा विश्लेषण देखने के लिए 0 से अधिक वजन दर्ज करें।',
    };
  }

  const whole = Math.floor(rattiVal);
  const frac = Number((rattiVal - whole).toFixed(2));

  // Check Sawa (+0.25)
  if (Math.abs(frac - 0.25) < 0.04) {
    const data = SAWA_NAMES_MAP[whole] || {
      name: `Sawa ${whole}`,
      hindi: `सवा ${whole}`,
      planet: 'Jupiter (Brihaspati)',
      hindiPlanet: 'बृहस्पति / गुरु',
      gem: 'Yellow Sapphire',
      hindiGem: 'पुखराज',
    };

    return {
      isSawa: true,
      isSaadhe: false,
      isPaune: false,
      name: `${data.name} Ratti`,
      hindiName: `${data.hindi} रत्ती`,
      planet: data.planet,
      hindiPlanet: data.hindiPlanet,
      gemstone: data.gem,
      hindiGemstone: data.hindiGem,
      status: 'auspicious',
      description: `Auspicious (+0.25 Ratti). Governed by ${data.planet}. Ideal for ${data.gem}.`,
      hindiDescription: `शुभ सवा भार (+0.25 रत्ती)। कारक ग्रह: ${data.hindiPlanet}। श्रेष्ठ रत्न: ${data.hindiGem}।`,
    };
  }

  // Check Saadhe (+0.50)
  if (Math.abs(frac - 0.50) < 0.04) {
    return {
      isSawa: false,
      isSaadhe: true,
      isPaune: false,
      name: `Saadhe ${whole} Ratti`,
      hindiName: `साढ़े ${whole} रत्ती`,
      planet: 'Neutral Energy',
      hindiPlanet: 'संतुलित प्रभाव',
      gemstone: 'Standard Gemstone Weight',
      hindiGemstone: 'मानक रत्न भार',
      status: 'neutral',
      description: 'Neutral (+0.50 Ratti). Considered stable and acceptable for standard astrological wear.',
      hindiDescription: 'संतुलित (+0.50 रत्ती)। सामान्य रूप से स्वीकार्य एवं स्थिर ऊर्जा वाला माना जाता है।',
    };
  }

  // Check Paune (+0.75)
  if (Math.abs(frac - 0.75) < 0.04) {
    return {
      isSawa: false,
      isSaadhe: false,
      isPaune: true,
      name: `Paune ${whole + 1} Ratti`,
      hindiName: `पौने ${whole + 1} रत्ती`,
      planet: 'Historically Avoided',
      hindiPlanet: 'अशुभ / त्याज्य',
      gemstone: 'Incomplete Fraction',
      hindiGemstone: 'अपूर्ण भार',
      status: 'inauspicious',
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
    status: 'standard',
    description: 'Exact weight conversion calculated with full scientific precision.',
    hindiDescription: 'वैज्ञानिक शुद्धता के साथ सटीक वजन की गणना।',
  };
}

/**
 * Synchronous Multi-Unit Calculator
 */
export function calculateAllUnits(
  val: number,
  unit: 'ratti' | 'carat',
  ratio: number = 0.91
) {
  const safeVal = Math.max(0, isNaN(val) ? 0 : val);
  let caratsPakka = 0;
  let rattiPakka = 0;

  if (unit === 'ratti') {
    rattiPakka = safeVal;
    caratsPakka = safeVal * ratio;
  } else {
    caratsPakka = safeVal;
    rattiPakka = ratio > 0 ? safeVal / ratio : 0;
  }

  const mg = caratsPakka * 200;
  const grams = mg / 1000;
  const grains = caratsPakka * 3.08647;
  const cents = caratsPakka * 100;

  return {
    caratsPakka,
    rattiPakka,
    mg,
    grams,
    grains,
    cents,
  };
}

/**
 * Vedic Body Weight Dosage Calculation
 */
export interface BodyWeightRecommendation {
  bodyWeightKg: number;
  minRatti: number;
  maxRatti: number;
  minCarat: number;
  maxCarat: number;
  recommendedSawaRatti: number;
  recommendedCarats: number;
  sawaInfo: SawaInfo;
}

export function calculateBodyWeightDosage(weightKg: number, ratio: number = 0.91): BodyWeightRecommendation {
  const safeKg = Math.max(30, Math.min(150, isNaN(weightKg) ? 65 : weightKg));

  const minRatti = Number((safeKg / 12).toFixed(2));
  const maxRatti = Number((safeKg / 10).toFixed(2));

  const minCarat = Number((minRatti * ratio).toFixed(2));
  const maxCarat = Number((maxRatti * ratio).toFixed(2));

  // Nearest Sawa (+0.25)
  const baseWhole = Math.floor(minRatti);
  let recommendedSawaRatti = baseWhole + 0.25;
  if (recommendedSawaRatti < minRatti) {
    recommendedSawaRatti = baseWhole + 1.25;
  }

  const recommendedCarats = Number((recommendedSawaRatti * ratio).toFixed(2));
  const sawaInfo = getSawaInfo(recommendedSawaRatti);

  return {
    bodyWeightKg: safeKg,
    minRatti,
    maxRatti,
    minCarat,
    maxCarat,
    recommendedSawaRatti,
    recommendedCarats,
    sawaInfo,
  };
}

/**
 * 7 Sacred Navratna Gemstone Presets
 */
export const GEMSTONE_PRESETS = [
  { name: 'Pukhraj', hindiName: 'पुखराज', icon: '🟡', recommendedRatti: 5.25, rattiRange: '5.25 - 7.25 Rt', planet: 'Jupiter', color: '#fbbf24' },
  { name: 'Neelam', hindiName: 'नीलम', icon: '🔵', recommendedRatti: 4.25, rattiRange: '4.25 - 6.25 Rt', planet: 'Saturn', color: '#3b82f6' },
  { name: 'Manik', hindiName: 'माणिक', icon: '🔴', recommendedRatti: 4.25, rattiRange: '3.25 - 5.25 Rt', planet: 'Sun', color: '#f43f5e' },
  { name: 'Panna', hindiName: 'पन्ना', icon: '🟢', recommendedRatti: 5.25, rattiRange: '4.25 - 6.25 Rt', planet: 'Mercury', color: '#10b981' },
  { name: 'Moti', hindiName: 'मोती', icon: '⚪', recommendedRatti: 6.25, rattiRange: '5.25 - 8.25 Rt', planet: 'Moon', color: '#94a3b8' },
  { name: 'Heera', hindiName: 'हीरा / ओपल', icon: '💎', recommendedRatti: 1.25, rattiRange: '1.25 - 2.25 Rt', planet: 'Venus', color: '#38bdf8' },
  { name: 'Moonga', hindiName: 'मूंगा', icon: '🟠', recommendedRatti: 7.25, rattiRange: '6.25 - 9.25 Rt', planet: 'Mars', color: '#fb923c' },
];

/**
 * Static Precomputed Tables
 */
export const STATIC_CARAT_TO_RATTI = [
  0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00,
  4.25, 4.50, 4.75, 5.00, 5.25, 5.50, 5.75, 6.00, 6.25, 6.50, 6.75, 7.00, 7.25, 7.50, 8.00, 9.00, 10.00, 12.00, 15.00
].map(ct => {
  const rPakka = ct / 0.91;
  const rSunee = ct / 0.90;
  return {
    carats: ct,
    rattiPakka: rPakka,
    rattiSunee: rSunee,
    mg: ct * 200,
    sawaInfo: getSawaInfo(rPakka)
  };
});

export const STATIC_RATTI_TO_CARAT = [
  1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00, 4.25, 4.50, 4.75,
  5.00, 5.25, 5.50, 5.75, 6.00, 6.25, 6.50, 6.75, 7.00, 7.25, 7.50, 8.00, 8.25, 8.50, 9.00, 9.25, 10.00, 10.25, 12.00, 15.00
].map(rt => {
  const ctPakka = rt * 0.91;
  const ctSunee = rt * 0.90;
  return {
    ratti: rt,
    caratsPakka: ctPakka,
    caratsSunee: ctSunee,
    mg: ctPakka * 200,
    sawaInfo: getSawaInfo(rt)
  };
});

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
