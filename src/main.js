import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/scss/modules/button.scss'
import '@/scss/modules/input.scss'
import '@/scss/globals.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
