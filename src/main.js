import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import LoginComponent from "./components/login/login.vue";

import SigninComponent from "./components/signin/signin.vue";

Vue.component("login-component", LoginComponent);

Vue.component("signin-component", SigninComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
