import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import AZ from '../Languages/AZ/AZ.json';
import EN from '../Languages/EN/EN.json';
import RU from '../Languages/RU/RU.json';

const resources = {
  az: {
    translation: AZ,
  },
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az', 
    fallbackLng: 'az', 
    supportedLngs: ['az', 'en', 'ru'],
    detection: {
      order: ['localStorage', 'navigator'], // İlk olaraq localStorage, sonra navigator.language
      caches: ['localStorage'], // Seçimi yadda saxla
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
