import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationFI from './translations/fi'
import translationEN from './translations/en'
import translationFR from './translations/fr'

const fallbackLng = ['en']
const availableLanguages = ['fi', 'en', 'fr']

const resources = {
  fi: {
    translation: translationFI
  },
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  })

export const getCurrentLocale = () => {
  return i18n.languages[0]
}

export default i18n
