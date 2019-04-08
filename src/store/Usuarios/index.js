import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';
import { store } from '..';

Vue.use(Vuex)

export default({
  state: {
    userData: {
      
    }
  },
  mutations: {
    setUserData(state, data){
      console.log("Entrando al setter")
      state.userData=data;
    }
  },
  actions: {
    crearUser({commit}, user) {
      console.log("Este el usuario:", user)
      firebase.auth().createUserWithEmailAndPassword(user.correo, user.password).then(response => {
        let formData = new FormData()
        console.log("Respuesta de firebase", response)
        let userId = firebase.auth().currentUser.uid;
        formData.set('idUsuario', userId)
        formData.set('email', user.correo)
        formData.set('tipoDeUsuario', 0)
        formData.set('nombre', user.nombre)
        formData.set('apellido', user.apellido)
        formData.set('telefono', user.telefono)
        formData.set('direccion', user.direccion)
        formData.set('pais', 'Mexico')
        formData.set('estado', 'Jalisco')
        formData.set('ciudad', 'Guadalajara')
        formData.set('codigoPostal', '45159')

        axios.post('http://localhost:81/cocoshop_php/registerUser.php', formData).then(response => {
          console.log("creacion usuario exitosamente", response)
          console.log("Respuesta de php", response)
        }).catch(error => {
          console.log("Creacion de usuario fallido MYSQL", error)
        })

      }).catch(error => {
        console.log("Creacion de usuario fallido", error)
      })
    },
    logIn({commit, getters}, user){
      firebase.auth().signInWithEmailAndPassword(user.correo, user.password).then(response => {
        let userId = firebase.auth().currentUser.uid;
        let formData = new FormData()
        formData.set('idUsuario', userId)
        axios.post('http://localhost:81/cocoshop_php/consultUser.php', formData).then(response => {
          commit('setUserData', response.data)
          console.log("Estos son los datos guardados:", getters.getUserData)
          //console.log(state.userData.nombre)
          //getter
          //getters.getUserData
        }).catch(error => {

        })
        this.$router.push("/")
      }).catch(error => {
        console.log(error)
        alert("Datos incorrectos")
      })
    },
    autoLogIn ({commit, getters}, payload){
      let userId = payload.uid;
      let formData = new FormData()
      formData.set('idUsuario', userId)
      axios.post('http://localhost:81/cocoshop_php/consultUser.php', formData).then(response => {
        commit('setUserData', response.data)
        console.log("Estos son los datos guardados:", getters.getUserData)
        //console.log(state.userData.nombre)
        //getter
        //getters.getUserData
      }).catch(error => {

      })      
    },

    logOut(){
      firebase.auth().signOut().then(function() {
        window.location.reload()
        console.log("Cierre de sesión exitoso")
      }).catch(function(error) {
        console.log("Error en cierre de sesión")
      });      
    }
  },
  getters: {
    getUserData(state){
      console.log("Entrando al getter")
      return state.userData;
    }
  }
})
