import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';

Vue.use(Vuex)

export default({
  state: {
      cargando: false,
      urlBase: 'http://192.168.84.37/Cocoshop/'
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
