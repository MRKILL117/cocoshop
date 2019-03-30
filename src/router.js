import Vue from "vue";
import Router from "vue-router";
import LoginComponent from "./components/login/login.vue";
import SigninComponent from "./components/signin/signin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginComponent
    },
    {
      path: "/signin",
      name: "Signin",
      component: SigninComponent
    }
  ]
});
