import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
import axios from 'axios';
import router from '../../router';
import { store } from '..';
Vue.use(Vuex)

export default({
  state: {
      carrito: []
  },
  mutations: {
      addCarrito (state, payload) {
          state.carrito.push(payload)
      },
      removeProducto (state, producto) {
          let auxProducto = state.carrito.indexOf (producto)
          state.carrito.splice (auxProducto, 1)
      },
      removeAll (state) {
          state.carrito = []
      }
  },
  actions: {
      comprar ({commit, getters}) {
        let formData = new FormData ()
        let productos = getters.getCarrito
        let idUsuario = getters.getUserData.idUsuario
        let usuario = getters.getUserData
        let ids = new Set()
        let cantidad = 0
        let totalCant = 0
        let newProductos = []
        // Añadir ids al arreglo unico
        productos.forEach(element => {
            ids.add(element.id)
        });

        console.log("Set", ids)
        ids.forEach(id => {
            cantidad += productos.reduce(function(n, val) {
                return n + (val.id === id);
            }, 0);
            let currProd = productos.find(auxFind => {
                return auxFind.id == id
            })
            console.log('currProd', currProd)
            newProductos.push({
                id: id,
                cantidad: cantidad,
                precio: (currProd.precio * cantidad)
            })
            totalCant += cantidad
            cantidad = 0
        });
        console.log('new productos', newProductos)
        formData.set('productos', JSON.stringify(newProductos))
        formData.set('idUsuario', idUsuario)
        formData.set('currSaldo', usuario.saldo)
        if (usuario.saldo < totalCant) {
            alert('No tienes suficiente saldo')
            return
        }
        axios.post('http://localhost/Cocoshop/conexiones/productos/comprar.php', formData).then(response => {
            console.log("comprado", response.data)
            let data = response.data
            if (data.status.includes('OK')) {
                alert('Todos los productos fueron comprados exitosamente')
            } else {
                console.log ("Los siguientes productos no pudieron ser comprados: ", data.prodError)
            }
        }).catch(error => {
            console.log(error)
        })
      }
  },
  getters: {
      getCarrito (state) {
          return state.carrito
      }
  }
})