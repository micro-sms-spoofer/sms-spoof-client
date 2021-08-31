import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

Vue.config.productionTip = false


// load the token from localStorage
Vue.prototype.$http = axios
const token  = localStorage.getItem('token')
// Injecet token to axios
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  const raw_token = localStorage.getItem('token').replace('Bearer ', '')
  const decoded = jwt.decode(raw_token);
  Vue.prototype.$http.defaults.headers.common['X-Username'] = decoded.username


}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
