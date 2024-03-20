import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import languageDetector from './languageDetector';
import {ru, en, arm} from './index';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  arm: {
    translation: arm,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
