import Vue from 'vue'
import Router from 'vue-router'

import LoginComponent from './components/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login/:numero',
      name: 'Login',
      component: LoginComponent
    },
  ]
})
