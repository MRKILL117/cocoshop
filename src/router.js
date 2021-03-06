import Vue from "vue";
import Router from "vue-router";

import LoginComponent from "./components/login/login.vue";
import SigninComponent from "./components/signin/signin.vue";
import MainProductos from "./components/productos/mainProductos.vue";
import perfil from "./components/perfil/perfil.vue";
import editPerfil from "./components/perfil/editPerfil.vue";
import Tests from "./components/tests/tests.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: MainProductos
    },
    {
      path: "/login",
      name: "Login",
      component: LoginComponent
    },
    {
      path: "/signin",
      name: "Signin",
      component: SigninComponent
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: perfil
    },
    {
      path: "/editPerfil",
      name: "Editar Perfil",
      component: editPerfil
    },
    {
      path: "/test",
      name: "Test",
      component: Tests
    },
  ]
});
