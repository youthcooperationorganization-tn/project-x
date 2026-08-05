import type { Language, Translations } from '../types';
import { ar } from './ar';
import { en } from './en';
import { fr } from './fr';

const translations: Record<Language, Translations> = {
  EN: en,
  FR: fr,
  AR: ar,
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}

export { en, fr, ar };
