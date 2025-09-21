import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal loader for properties-like file already in public
async function loadProperties(): Promise<Record<string, string>> {
  try {
    const res = await fetch('/i18n.properties');
    const text = await res.text();
    const lines = text.split(/\r?\n/);
    const map: Record<string, string> = {};
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx === -1) continue;
      const key = trimmed.substring(0, idx).trim();
      const val = trimmed.substring(idx + 1).trim();
      map[key] = val;
    }
    return map;
  } catch (e) {
    console.error('Failed to load i18n.properties', e);
    return {};
  }
}

export async function initI18n() {
  const resources = { pt: { translation: await loadProperties() } };

  await i18n.use(initReactI18next).init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });
}

export default i18n;
