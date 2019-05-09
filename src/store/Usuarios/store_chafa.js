import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';
import router from '../../router';
import { store } from '..';

Vue.use(Vuex)

export default({
  state: {
    userData: {
      
    },
    status: false,
    history: []
  },
  mutations: {
    setUserData(state, data){
      console.log("Entrando al setter user data")
      state.userData=data;
    },
    setStatus(state, data){
      console.log("Entrando al setter status")
      state.status=data;
    },
    addSaldo (state, saldo) {
      state.userData.saldo = saldo
      alert('añadido')
    },
    setHistory (state, history) {
      state.history = history
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

        axios.post('http://localhost/Cocoshop/conexiones/usuarios/registerUser.php', formData).then(response => {
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
        axios.post('http://localhost/Cocoshop/conexiones/usuarios/consultUser.php', formData).then(response => {
          commit('setUserData', response.data)
          commit('setStatus', true)
          console.log("then the axios")
          console.log("Estos son los datos guardados:", getters.getUserData)
        }).catch(error => {
          console.log("catch de axios")
        })
        router.push("/")
      }).catch(error => {
        console.log(error)
        alert("Datos incorrectos")
      })
    },
    autoLogIn ({commit, getters}, payload){
      let userId = payload.uid;
      let formData = new FormData()
      formData.set('idUsuario', userId)
      axios.post('http://localhost/Cocoshop/conexiones/usuarios/consultUser.php', formData).then(response => {
        commit('setUserData', response.data)
        console.log("Estos son los datos guardados:", getters.getUserData)
        //console.log(state.userData.nombre)
        //getter
        //getters.getUserData
      }).catch(error => {

      })
    },
    addSaldo ({commit}, payload) {
      let formData = new FormData ()
      console.log('payload', payload)
      formData.set('idUsuario', payload.idUsuario)
      formData.set('saldo', payload.saldo)
      axios.post('http://localhost/Cocoshop/conexiones/usuarios/addSaldo.php', formData).then(response => {
        console.log(response.data)
        if (response.data.status.includes('OK')){
          commit('addSaldo', payload.saldo)
        } else {
          alert('error al añadir el saldo')
        }
      }).catch(error => {
        console.log(error)
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
      axios.post('http://localhost/Cocoshop/conexiones/usuarios/updateUser.php', formData).then(response => {
        console.log("Los datos se han actualizado correctamente")
      }).catch(error => {

      })
    },
    logOut(){
      firebase.auth().signOut().then(function() {
        window.location.reload()
        router.push("/")
        console.log("Cierre de sesión exitoso")
      }).catch(function(error) {
        console.log("Error en cierre de sesión")
      });      
    },
    deleteUser({commit, getters}){
      let userId = firebase.auth().currentUser.uid;
      let cUser = firebase.auth().currentUser;
      let idUsuario = getters.getUserData.idUsuario
      let formData = new FormData()
      formData.set('idUsuario', idUsuario)      
      // Prompt the user to re-provide their sign-in credentials      
        cUser.delete().then(function() {
          axios.post('http://localhost/Cocoshop/conexiones/usuarios/deleteUser.php', formData).then(response =>{
            if (response.data.status.includes('OK')){
              alert('SE HA BORRADO EL USUARIO CORRECTAMENTE')
            } else console.log ("Error php")
  
          }).catch(error=> {
            console.log(error)
          })        
          logOut()
        }).catch(function(error) {
            console.log(error)
          // An error happened.
        }); 
    },
    loadHistory ({commit, getters}, usuario) {
      let formData = new FormData ()
      formData.set('idUsuario', usuario.idUsuario)
      console.log(usuario.idUsuario)

      axios.post('http://localhost/cocoshop/conexiones/usuarios/getHistory.php', formData).then(response => {
        console.log(response)
        commit('setHistory', response.data.history)
      }).catch( error => {
        console.log(error)
      })
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
    },
    getHistorialProductos (state) {
      return state.history
    }
  }
})
