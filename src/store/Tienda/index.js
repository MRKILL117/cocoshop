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
              imagenes: [
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/51QI8y0h9QL._SX331_BO1,204,203,200_.jpg'}
              ],
              descripcion: "Mami's warm personality has made it difficult for her to adjust to her solitary life as a magical girl, where survival often takes precedence over kindness. When she meets Kyouko Sakura, a fellow lone wolf, she is excited at the prospect of working together with another magical girl and forging a friendship built on ultimate trust. But many are the sacrifices all magical girls must make, and the consequences of Kyouko's choice are only just becoming clear to her. When the pain becomes unbearable, will Kyouko remain standing beside Mami as a force for the greater good...?",
              url: '',
              categoria: 'Manga',
          },
          {
              titulo: 'Puella Magi Madoka Magica the Different Story 2',
              autor: 'Magica Quartet y Hanokage',
              precio: '202',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51IW9I1kIoL._SX331_BO1,204,203,200_.jpg',
              imagenes: [
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/51IW9I1kIoL._SX331_BO1,204,203,200_.jpg'}
                  ],
              descripcion: "While Madoka continues to deliberate over the decision to join Akemi as a magical girl, her best friend, Sayaka, seizes the chance to wish for the recovery of the boy she loves. But when Sayaka is caught in a territory dispute with a more experienced (and more deadly) magical girl named Kyouko, Madoka is reminded that being a magical girl is more than a matter of donning a frilly costume and fighting evil...it is also a matter of life and death!",
              url: '',
              categoria: 'Manga',
          },
          {
              titulo: "pHat 5.5 Puella Magi Madoka Magica Side Story: Magia Record: Sana Futaba 1: 8 Scale PVC Figure",
              autor: 'pHat 5.5',
              precio: '4,149.83',
              imagen: 'https://images-na.ssl-images-amazon.com/images/I/51SaCjNsWPL.jpg',
              imagenes: [
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/61HIppgRqhL._SL1000_.jpg'},
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/51ruoALQoiL.jpg'},
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/51SaCjNsWPL.jpg'},
                  {src: 'https://images-na.ssl-images-amazon.com/images/I/51t7IoCQu3L.jpg'},
              ],
              descripcion: "An import from Phat<br>From the hit smartphone game<br>Posed wielding her shield<br>Her iconic armor has been captured in careful detail<br>The cape she wears is made with semi-translucent parts for a light and airy appearance",
              url: '',
              categoria: 'Figura',
          },
          {
            titulo: "figma Magical Girl Madoka ™ Magica Madoka Kaname",
            autor: 'Max Factory',
            precio: '986.61 ',
            imagen: 'https://images-na.ssl-images-amazon.com/images/I/61jqw4AkSYL._SL1455_.jpg',
            imagenes: [
                {src: 'https://images-na.ssl-images-amazon.com/images/I/61jqw4AkSYL._SL1455_.jpg'},
                {src: 'https://images-na.ssl-images-amazon.com/images/I/610A3a2%2BgEL._SL1500_.jpg'},
                {src: 'https://images-na.ssl-images-amazon.com/images/I/71Z1JNz53-L._SL1500_.jpg'},
                {src: 'https://images-na.ssl-images-amazon.com/images/I/61rjaJ9L0DL._SL1333_.jpg'}

            ],
            descripcion: "[Puella Magi Madoka Magica]<br>Altura: alrededor de 120 mm<br>Figuras acabadas pintadas ABS y PVC<br>Escaleras: sin escaleras<br>Escultor: Masaki Asai (Fábrica máxima)",
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
