import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default({
  state: {
      categorias: ['Todo', 'Manga', 'Figura'],
      productos: [
          {
              titulo: 'Puella Magi Madoka Magica the Different Story 1',
              autor: 'Magica Quartet y Hanokage',
              precio: '208',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51QI8y0h9QL._SX331_BO1,204,203,200_.jpg',
              url: '',
              categoria: 'Manga',
          },
          {
              titulo: 'Puella Magi Madoka Magica the Different Story 2',
              autor: 'Magica Quartet y Hanokage',
              precio: '202',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51IW9I1kIoL._SX331_BO1,204,203,200_.jpg',
              url: '',
              categoria: 'Manga',
          },
          {
              titulo: "Puella Magi Madoka Magica: Homura's Revenge!, Volume 2",
              autor: 'Magica Quartet, Kawazukuu, et ál.',
              precio: '211.48',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51JOot-s-eL._SX331_BO1,204,203,200_.jpg',
              url: '',
              categoria: 'Manga',
          },
          {
              titulo: "pHat 5.5 Puella Magi Madoka Magica Side Story: Magia Record: Sana Futaba 1: 8 Scale PVC Figure",
              autor: 'pHat 5.5',
              precio: '4,149.83',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51SaCjNsWPL.jpg',
              url: '',
              categoria: 'Figura',
          },
          {
              titulo: "figma Magical Girl Madoka ™ Magica Madoka Kaname",
              autor: 'Max Factory',
              precio: '986.61 ',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/61jqw4AkSYL._SL1455_.jpg',
              url: '',
              categoria: 'Figura',
          },
      ],
      filtro: {
          categoria: 'Todo',
        }
  },
  mutations: {
      setFiltro (state, payload) {
          state.filtro = payload
      }
  },
  actions: {
  },
  getters: {
      getCategorias (state) {
          return state.categorias
      },
      getProductos (state) {
          return state.productos
      },
      getFiltro (state) {
          return state.filtro
      }
  }
})
