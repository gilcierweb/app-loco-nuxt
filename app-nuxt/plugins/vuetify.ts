// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import {light} from '@/utils/vuetify/themes'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,  

    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark: {}
      }
    }
  })
  app.vueApp.use(vuetify)
})
