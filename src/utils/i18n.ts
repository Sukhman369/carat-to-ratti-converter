import { TRANSLATIONS } from './translations';

export type SupportedLanguage = 'en' | 'hi';

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('site_lang');
    if (saved === 'hi' || saved === 'en') {
      return saved;
    }
  }
  return 'en';
}

export function setStoredLanguage(lang: SupportedLanguage): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('site_lang', lang);
  }
}

export function applyLanguage(lang: SupportedLanguage): void {
  if (typeof document === 'undefined') return;

  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // 1. Translate all data-i18n elements
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && (dict as any)[key]) {
      el.innerText = (dict as any)[key];
    }
  });

  // 2. Translate all data-i18n-placeholder elements
  const placeholders = document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]');
  placeholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && (dict as any)[key]) {
      el.placeholder = (dict as any)[key];
    }
  });

  // 3. Update navbar toggle label
  const langTextEl = document.getElementById('current-lang-text');
  if (langTextEl) {
    langTextEl.innerText = lang === 'en' ? 'EN / हिन्दी' : 'हिन्दी / EN';
  }

  // 4. Update html lang attribute
  document.documentElement.lang = lang;

  // 5. Notify any listening reactive islands
  window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));
}

export function initLanguageSystem(): void {
  if (typeof window === 'undefined') return;

  let currentLang = getStoredLanguage();
  applyLanguage(currentLang);

  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      setStoredLanguage(currentLang);
      applyLanguage(currentLang);
    });
  }
}
