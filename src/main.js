import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";

import LoginComponent from "./components/login/login.vue";

import SigninComponent from "./components/signin/signin.vue";

Vue.component("login-component", LoginComponent);

Vue.component("signin-component", SigninComponent);

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDx-j5gIqZbwxVl6vYMBOaJo3pgw2XVL3I",
  authDomain: "cocoshop-17c26.firebaseapp.com",
  databaseURL: "https://cocoshop-17c26.firebaseio.com",
  projectId: "cocoshop-17c26",
  storageBucket: "cocoshop-17c26.appspot.com",
  messagingSenderId: "63358257345"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
