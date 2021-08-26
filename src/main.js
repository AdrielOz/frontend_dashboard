import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://192.168.56.1:81'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
