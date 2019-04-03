import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default({
  state: {
      carrito: []
  },
  mutations: {
      setCarrito (state, payload) {

      }
  },
  actions: {
  },
  getters: {
      getCarrito (state) {

      }
  }
})