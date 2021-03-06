import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index.js";
import * as firebase from "firebase";

import Producto from "./components/productos/producto.vue";
import Toolbar from "./components/common/mainToolbar.vue";
import MainCarrito from "./components/carrito/mainCarrito.vue";
import CrearProducto from "./components/productos/crearProducto.vue";
import ImagesSelector from './components/common/imagesSelector.vue'
import EditarProducto from './components/productos/editarProducto.vue'
import Tests from './components/tests/tests.vue'

Vue.component("producto-component", Producto);
Vue.component("toolbar-component", Toolbar);
Vue.component("carrito-component", MainCarrito);
Vue.component("crear-producto-component", CrearProducto);
Vue.component('images-selector-carousel', ImagesSelector)
Vue.component('editar-producto-component', EditarProducto)
Vue.component('tests-component', Tests)

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
  render: h => h(App),
  created(){
    store.dispatch('cargarProductos')
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.$store.dispatch('autoLogIn', user)
      }
    })    
  }
}).$mount("#app");
//Comentario perrón
