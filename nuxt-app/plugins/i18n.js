import { createI18n } from 'vue-i18n'
import en from '../locales/en.json' 
import et from '../locales/et.json' 

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'et',
    messages: {
      et,
      en,
    }
  })

  vueApp.use(i18n)
})