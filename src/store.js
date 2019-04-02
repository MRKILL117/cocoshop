import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';

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
        let formData = new FormData()
        console.log("Respuesta de firebase", response)
        formData.set('email', user.correo)
        formData.set('tipoDeUsuario', 1)
        formData.set('nombre', user.nombre)
        formData.set('apellido', user.apellido)
        formData.set('telefono', user.telefono)
        formData.set('direccion', user.direccion)

        axios.post('http://localhost/cocoshop_php/registerUser.php', formData).then(response => {
          console.log("creacion usuario exitosamente")
        }).catch(error => {
          console.log("Creacion de usuario fallido MYSQL", error)
        })

      }).catch(error => {
        console.log("Creacion de usuario fallido", error)
      })
    },
    signIn({commit}, user){
      console.log("Este es el usuario:", user)
      firebase.auth().signInWithEmailAndPassword(user.correo, user.password).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })

    }
  },
  getters: {

  }
})
