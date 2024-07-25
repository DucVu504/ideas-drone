import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

i18n
  // .use(HttpApi)
  .use(HttpBackend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    ns: ['common', 'homepage', 'login','user'],
    defaultNS: 'common',
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
      await: true,
    },
  });

export default i18n;