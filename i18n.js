import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {nextI18NextConfig} from './next-i18next.config.mjs';

i18n
  // .use(HttpApi)
  // .use(LanguageDetector)
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    ...nextI18NextConfig,
    supportedLngs: ['en', 'vi'],
    fallbackLng: 'en',
    debug: true,
    // Configuration options for your backend, language detection, etc.
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
    detection: {
      order: ['cookie', 'localStorage', 'querystring', 'sessionStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;
