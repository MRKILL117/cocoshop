import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
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
    },
    signIn(user){
      console.log("Este es el usuario:", user)
      firebase.auth().signInWithEmailAndPassword(user.username, user.password).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })

    }
  },
  getters: {

  }
})
