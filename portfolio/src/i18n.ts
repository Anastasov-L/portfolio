import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Load translations
import enTranslations from './locales/en/translations.json'
import nlTranslations from './locales/nl/translations.json'
import deTranslations from './locales/de/translations.json'
import frTranslations from './locales/fr/translations.json'


//import LanguageDetector from "i18next-browser-languagedetector";

i18n
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      nl: { translation: nlTranslations },
      fr: { translation: frTranslations },
      de: { translation: deTranslations },
    },
    lng: 'nl', // default language
    fallbackLng: 'nl',
    supportedLngs: ["en", "nl", "fr", "de"],
 //   detection: {
 //     order: ["querystring", "localStorage", "cookie", "navigator"],
//      lookupQuerystring: "lang",         
//      caches: ["localStorage", "cookie"], 
 //     cookieMinutes: 60 * 24 * 365,
 //   },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n

