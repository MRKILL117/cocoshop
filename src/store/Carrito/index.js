import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import Axios from 'axios';

Vue.use(Vuex)

export default({
  state: {
      carrito: []
  },
  mutations: {
      addCarrito (state, payload) {
          state.carrito.push(payload)
      },
      removeProducto (state, producto) {
          let auxProducto = state.carrito.indexOf (producto)
          state.carrito.splice (auxProducto, 1)
      },
      removeAll (state) {
          state.carrito = []
      }
  },
  actions: {
      comprar ({commit, getters}) {
        let formData = new FormData ()
        let productos = getters.getCarrito
        let ids = new Set()
        let cantidad = 0;
        let newProductos = []
        // Añadir ids al arreglo unico
        productos.forEach(element => {
            ids.add(element.id)
        });

        console.log("Set", ids)
        ids.forEach(id => {
            cantidad += productos.reduce(function(n, val) {
                return n + (val.id === id);
            }, 0);
            newProductos.push({
                id: id,
                cantidad: cantidad
            })
            cantidad = 0
        });
        console.log('new productos', newProductos)
        console.log('carrito', getters.getCarrito)
        // formData.set('cantidad', getters('getCarrito'))
        axios.post('http://localhost/Cocoshop/conexiones/productos/comprar.php', formData).then(response => {
            
        }).catch(error => {

        })
      }
  },
  getters: {
      getCarrito (state) {
          return state.carrito
      }
  }
})