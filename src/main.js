import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import LoginComponent from './components/inicio/login.vue'
import Bienvenido from './components/inicio/bienvenida.vue'

Vue.component('login-component', LoginComponent)
Vue.component('bienvenida-component', Bienvenido)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
