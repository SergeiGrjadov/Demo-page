import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxt) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
    })
    nuxt.vueApp.use(vuetify);
}) 

     createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })