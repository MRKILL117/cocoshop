import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index.js";
import { mapGetters } from 'vuex'
import * as firebase from "firebase";

import Producto from "./components/productos/producto.vue";
import Toolbar from "./components/common/mainToolbar.vue";
import MainCarrito from "./components/carrito/mainCarrito.vue";
import CrearProducto from "./components/productos/crearProducto.vue";
import ImagesSelector from './components/common/imagesSelector.vue'
import EditarProducto from './components/productos/editarProducto.vue'

Vue.component("producto-component", Producto);
Vue.component("toolbar-component", Toolbar);
Vue.component("carrito-component", MainCarrito);
Vue.component("crear-producto-component", CrearProducto);
Vue.component('images-selector-carousel', ImagesSelector)
Vue.component('editar-producto-component', EditarProducto)

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
  data: {
    return: {
      storedToken: 'HOLA',
    }
  },
  // Se añaden computed 
  computed: {
    ...mapGetters({
        userData: 'getUserData',
        sessionToken: 'getSessionToken'
    }),
  },
  watch: {
    sessionToken: {
      handler: function(newVal, oldVal) {
        console.log('En el watch', newVal, oldVal)
          if (newVal && oldVal) {
            if (newVal !== oldVal) {
              alert('Se cerro la sesion!!!!')
              this.$store.dispatch('logOut')
            } else {
            }
          } else if (newVal) {
            let token;
            if (localStorage.getItem("sesionToken")) {
              token = localStorage.getItem("sesionToken")
            }
            console.log("Alguno es null")
          }
      },
      deep: true,
      immediate: true
    }
  },
  created(){
    store.dispatch('cargarProductos')
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.$store.dispatch('autoLogIn', user)
        //this.$store.dispatch('loadSessionToken', user)
      }
    })
  },
  methods: {
    registarToken (uid) {
      let token = this.generateToken()
      firebase.database().ref('sesiones/' + uid + "/").set({token: token}).then(response => {
        console.log("Registro de sesion response: ", response)
        // Guardarla en el localStorage
        localStorage.setItem("sesionToken", token)
      }).catch(error => {
        console.log("Registro de sesion error: ", error)
      })
      console.log("Fin de registro")
    },
    generateToken() {
        let n = 20
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var token = '';
        for(var i = 0; i < n; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }
        console.log("Token generado:", token)
        return token;
    },
  },
}).$mount("#app");
//Comentario perrón
