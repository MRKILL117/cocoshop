import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';
import { store } from '..';

Vue.use(Vuex)

export default({
  state: {
    userData: {
      
    },
    status: false
  },
  mutations: {
    setUserData(state, data){
      console.log("Entrando al setter user data")
      state.userData=data;
    },
    setStatus(state, data){
      console.log("Entrando al setter status")
      state.status=data;
    }
  },
  actions: {
    crearUser({commit}, user) {
      console.log("Este el usuario:", user)
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(response => {
        let formData = new FormData()
        console.log("Respuesta de firebase", response)
        let userId = firebase.auth().currentUser.uid;
        formData.set('idUsuario', userId)
        formData.set('email', user.email)
        formData.set('tipoDeUsuario', 0)
        formData.set('nombre', user.nombre)
        formData.set('apellido', user.apellido)
        formData.set('telefono', user.telefono)
        formData.set('direccion', user.direccion)
        formData.set('pais', user.pais)
        formData.set('estado', user.estado)
        formData.set('ciudad', user.ciudad)
        formData.set('codigoPostal', user.codigoPostal)

        axios.post('http://localhost/cocoshop_php/registerUser.php', formData).then(response => {
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
        console.log("then de firebase")
        axios.post('http://localhost/cocoshop_php/consultUser.php', formData).then(response => {
          commit('setUserData', response.data)
          commit('setStatus', true)
          console.log("then the axios")
          console.log("Estos son los datos guardados:", getters.getUserData)
        }).catch(error => {
          console.log("catch de axios")
        })
      }).catch(error => {
        console.log(error)
        commit('setStatus', false)
        console.log("catch de firebase")
        alert("Correo o contraseña invalidos")
      })
    },
    autoLogIn ({commit, getters}, payload){
      let userId = payload.uid;
      let formData = new FormData()
      formData.set('idUsuario', userId)
      axios.post('http://localhost/cocoshop_php/consultUser.php', formData).then(response => {
        commit('setUserData', response.data)
        console.log("Estos son los datos guardados:", getters.getUserData)
        //console.log(state.userData.nombre)
        //getter
        //getters.getUserData
      }).catch(error => {

      })
    },
    updateUser({commit, getters}, userData){
      let user = getters.getUserData;
      let formData = new FormData()
      formData.set('idUsuario', user.idUsuario)
      formData.set('email', user.email)
      formData.set('nombre', user.nombre)
      formData.set('apellido', user.apellido)
      formData.set('telefono', user.telefono)
      formData.set('direccion', user.direccion)
      formData.set('pais', user.pais)
      formData.set('estado', user.estado)
      formData.set('ciudad', user.ciudad)
      formData.set('codigoPostal', user.codigoPostal)
      axios.post('http://localhost/cocoshop_php/updateUser.php', formData).then(response => {
        console.log("Los datos se han actualizado correctamente")
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
      console.log("Entrando al getter user data")
      return state.userData;
    },
    getStatus(state){
      console.log("Entrando al getter status")
      return state.status;
    }
  }
})
