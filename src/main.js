import Vue from 'vue'
import App from './App.vue'
import { Router as router } from './views'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
