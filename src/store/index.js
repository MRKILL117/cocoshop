import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Dividir el store en modulos
/* Se crea la carpeta del modulo y dentro un index.js con todo lo que lleva su store esto para
tener ordenado el alamcenamiento por "temas" ej: dentro de Usuario solo abra data relacionada con el
usuario*/
import Usuarios from './Usuarios'
import Tienda from './Tienda'
import Carrito from './Carrito'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        usuarios: Usuarios,
        tienda: Tienda,
        carrito: Carrito,
    }
})
