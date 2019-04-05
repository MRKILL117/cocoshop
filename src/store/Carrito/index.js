import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

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
  },
  getters: {
      getCarrito (state) {
          return state.carrito
      }
  }
})