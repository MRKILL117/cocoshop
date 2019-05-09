import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';

Vue.use(Vuex)

export default({
  state: {
      cargando: false
  },
  mutations: {
      setCargando (state, value) {
          state.cargando = value
      }
  },
  actions: {
  },
  getters: {
      getCargando (state) {
          return state.cargando
      }
  }
})
