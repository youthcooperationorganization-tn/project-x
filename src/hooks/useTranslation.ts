// hooks/useTranslation.ts
import { useState } from 'react';
import { getTranslations } from '../i18n/translations';
import type { Language } from '../i18n/types';

export function useTranslation(defaultLang: Language = 'EN') {
  const [lang, setLang] = useState<Language>(defaultLang);
  const t = getTranslations(lang);
  return { t, lang, setLang };
}