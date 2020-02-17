import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

import './registerServiceWorker'


let SENTRY_DSN = process.env.VUE_APP_SENTRY_DSN
if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
