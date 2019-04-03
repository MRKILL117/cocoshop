import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default({
  state: {
  },
  mutations: {
  },
  actions: {
    crearUser({commit}, user) {
      console.log("Este el usuario:", user)
      firebase.auth().createUserWithEmailAndPassword(user.correo, user.password).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  getters: {

  }
})
