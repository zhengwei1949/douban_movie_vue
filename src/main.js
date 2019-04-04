import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'
import './assets/css/wap.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
