import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';

Vue.use(Vuex)

export default({
  state: {
      cargando: false,
      urlBase: 'http://localhost:81/Cocoshop/'
  },
  mutations: {
      setCargando (state, value) {
          state.cargando = value
      }
  },
  actions: {
  },
  getters: {
      getUrlBase (state) {
          return state.urlBase
      },
      getCargando (state) {
          return state.cargando
      }
  }
})
