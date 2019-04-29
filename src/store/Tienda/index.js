import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default({
  state: {
      statusUpload: '',
      categorias: new Set (['Todo']),
      productos: [
        //   {
        //       id: '1',
        //       titulo: 'Puella Magi Madoka Magica the Different Story 1',
        //       autor: 'Magica Quartet y Hanokage',
        //       precio: '208',
        //       imagen: 'https://images-na.ssl-images-amazon.com/images/I/51QI8y0h9QL._SX331_BO1,204,203,200_.jpg',
        //       imagenes: [
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/51QI8y0h9QL._SX331_BO1,204,203,200_.jpg'}
        //       ],
        //       descripcion: "Mami's warm personality has made it difficult for her to adjust to her solitary life as a magical girl, where survival often takes precedence over kindness. When she meets Kyouko Sakura, a fellow lone wolf, she is excited at the prospect of working together with another magical girl and forging a friendship built on ultimate trust. But many are the sacrifices all magical girls must make, and the consequences of Kyouko's choice are only just becoming clear to her. When the pain becomes unbearable, will Kyouko remain standing beside Mami as a force for the greater good...?",
        //       url: '',
        //       categoria: 'Manga',
        //   },
        //   {
        //       id: '2',
        //       titulo: 'Puella Magi Madoka Magica the Different Story 2',
        //       autor: 'Magica Quartet y Hanokage',
        //       precio: '202',
        //       imagen: 'https://images-na.ssl-images-amazon.com/images/I/51IW9I1kIoL._SX331_BO1,204,203,200_.jpg',
        //       imagenes: [
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/51IW9I1kIoL._SX331_BO1,204,203,200_.jpg'}
        //           ],
        //       descripcion: "While Madoka continues to deliberate over the decision to join Akemi as a magical girl, her best friend, Sayaka, seizes the chance to wish for the recovery of the boy she loves. But when Sayaka is caught in a territory dispute with a more experienced (and more deadly) magical girl named Kyouko, Madoka is reminded that being a magical girl is more than a matter of donning a frilly costume and fighting evil...it is also a matter of life and death!",
        //       url: '',
        //       categoria: 'Manga',
        //   },
        //   {
        //       id: '3',
        //       titulo: "pHat 5.5 Puella Magi Madoka Magica Side Story: Magia Record: Sana Futaba 1: 8 Scale PVC Figure",
        //       autor: 'pHat 5.5',
        //       precio: '4,149.83',
        //       imagen: 'https://images-na.ssl-images-amazon.com/images/I/51SaCjNsWPL.jpg',
        //       imagenes: [
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/61HIppgRqhL._SL1000_.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/51ruoALQoiL.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/51SaCjNsWPL.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/51t7IoCQu3L.jpg'},
        //       ],
        //       descripcion: "An import from Phat<br>From the hit smartphone game<br>Posed wielding her shield<br>Her iconic armor has been captured in careful detail<br>The cape she wears is made with semi-translucent parts for a light and airy appearance",
        //       url: '',
        //       categoria: 'Figura',
        //   },
        //   {
        //       id: '4',
        //       titulo: "figma Magical Girl Madoka ™ Magica Madoka Kaname",
        //       autor: 'Max Factory',
        //       precio: '986.61 ',
        //       imagen: 'https://images-na.ssl-images-amazon.com/images/I/61jqw4AkSYL._SL1455_.jpg',
        //       imagenes: [
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/61jqw4AkSYL._SL1455_.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/610A3a2%2BgEL._SL1500_.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/71Z1JNz53-L._SL1500_.jpg'},
        //           {src: 'https://images-na.ssl-images-amazon.com/images/I/61rjaJ9L0DL._SL1333_.jpg'}

        //       ],
        //       descripcion: "[Puella Magi Madoka Magica]<br>Altura: alrededor de 120 mm<br>Figuras acabadas pintadas ABS y PVC<br>Escaleras: sin escaleras<br>Escultor: Masaki Asai (Fábrica máxima)",
        //       url: '',
        //       categoria: 'Figura',
        //   },
      ],
      filtro: {
          categoria: 'Todo',
       },
       // Esto guarda el producto a editar
       productoEditar: {
       }
  },
  mutations: {
      setFiltro (state, payload) {
          state.filtro = payload
      },
      setStatus (state, status) {
          state.statusUpload = status
      },
      setProductos (state, payload) {
          state.productos = payload
      },
      addProducto (state, producto) {
          state.productos.push(producto)
      },
      subStock (state, producto) {
          let aux = state.productos.find(auxFind => {
              return auxFind.id == producto.id
          })
          aux.stock--;
      },
      addStock (state, producto) {
          let aux = state.productos.find(auxFind => {
              return auxFind.id == producto.id
          })
          aux.stock++;
      },
      setEditarProducto (state, editable) {
          state.productoEditar = editable
      },
      setProducto (state, producto) {
          let index = state.productos.findIndex(auxFind => auxFind.id == producto.id)
          state.productos[index] = {...producto}
      },
      deleteProducto (state, id) {
          let index = state.productos.findIndex(auxFind => auxFind.id == id)
          state.productos.splice(index, 1)
          console.log('El index', index)
      },
      addCategoria (state, categ) {
          state.categorias.add(categ)
      }
  },
  actions: {
      crearProducto ({commit, getters}, newProducto) {
          let urlBase = getters.getUrlBase
          commit('setCargando', true)
          let formData = new FormData ()
          formData.set('titulo', newProducto.titulo)
          formData.set('descripcion', newProducto.descripcion)
          formData.set('creador', newProducto.creador)
          formData.set('stock', newProducto.stock)
          formData.set('categoria', newProducto.categoria)
          formData.set('precio', newProducto.precio)
          formData.set('nFotos', newProducto.imagenes.length)
          formData.set('imagenes', JSON.stringify(newProducto.imagenes))
          
          axios.post(urlBase + 'conexiones/productos/crearProducto.php', formData).then(response => {
              commit('setCargando', false)
              let data = response.data
              if (data.status.includes('OK')){
                  commit('setStatus', "Uploaded")
                  let id = data.id
                  // Auxiliar para guardar las url generadas
                  let auxUrls = []
                  for(let i = 1; i <= newProducto.imagenes.length; i++) {
                      auxUrls.push({
                          src: urlBaes + 'productos/' + id + '/' + i + '.jpg'
                          })
                   }
                   
                   let aux = {
                       id: id,
                       titulo: newProducto.titulo,
                       autor: newProducto.creador,
                       stock: newProducto.stock,
                       precio: newProducto.precio,
                       descripcion: newProducto.descripcion,
                       categoria: newProducto.categoria,
                       imagenes: auxUrls,
                    }
                    commit('addCategoria', newProducto.categoria)
                    commit('addProducto', aux)
              } else {
                  commit('setStatus', "Not Uploaded")
              }

              console.log(response.data)
          }).catch(error => {
              commit('setCargando', false)
              commit('setStatus', "Not Uploaded")
          }) 
      },
      cargarProductos ({commit, getters}) {
        let urlBase = getters.getUrlBase
          axios.post(urlBase + 'conexiones/productos/getAllProductos.php').then(response => {
              let data = response.data
              if (data.status.includes('OK')) {
                  let newProductos = []
                  data.productos.forEach(producto => {
                      // Generar la url de las imagenes
                      /*La base almacena la cantidad de imagenes que tiene un objeto por lo que
                      en la carpeta productos/idDelProducto/ hay n imagenes asi que se obtiene
                      la url de la siguiente forma: */

                      // Auxiliar para guardar las url generadas
                      let auxUrls = []
                      for(let i = 1; i <= producto.numeroElemento; i++) {
                           auxUrls.push({
                               src: urlBase + 'productos/' + producto.idProducto + '/' + i + '.jpg'
                           })
                      }

                      let aux = {
                          id: producto.idProducto,
                          titulo: producto.nombreProducto,
                          autor: producto.creadorDelObjeto,
                          precio: producto.precio,
                          stock: producto.cantidad,
                          descripcion: producto.descripcion,
                          categoria: producto.categoria,
                          imagenes: auxUrls,
                      }
                      commit('addCategoria', producto.categoria)
                      newProductos.push(aux)
                  });
                  console.log("Nuevos", newProductos)
                  commit('setProductos', newProductos)
              }
          }).catch(error => {

          })
      },
      editarProducto ({commit, getters}, newProducto) {
        let urlBase = getters.getUrlBase
          commit('setCargando', true)
          let formData = new FormData ()
          formData.set('id', newProducto.id)
          formData.set('titulo', newProducto.titulo)
          formData.set('descripcion', newProducto.descripcion)
          formData.set('creador', newProducto.creador)
          formData.set('stock', newProducto.stock)
          formData.set('categoria', newProducto.categoria)
          formData.set('precio', newProducto.precio)
          formData.set('nFotos', newProducto.imagenes.length)
          formData.set('imagenes', JSON.stringify(newProducto.imagenes))
          
          axios.post(urlBase + 'conexiones/productos/editarProducto.php', formData).then(response => {
              let data = response.data
              if (data.status.includes('OK')) {
                  commit('setStatus', "Uploaded")
                  let id = data.id
                  // Auxiliar para guardar las url generadas
                  let auxUrls = []
                  for(let i = 1; i <= newProducto.imagenes.length; i++) {
                      auxUrls.push({
                          src: urlBase + 'productos/' + id + '/' + i + '.jpg'
                          })
                   }
                   
                   let aux = {
                       id: id,
                       titulo: newProducto.titulo,
                       autor: newProducto.creador,
                       stock: newProducto.stock,
                       precio: newProducto.precio,
                       descripcion: newProducto.descripcion,
                       categoria: newProducto.categoria,
                       imagenes: auxUrls,
                    }
                    commit('addCategoria', newProducto.categoria)
                    commit('setCargando', false)
                    commit('setProducto', aux)
                    commit('setStatus', "Edited")
              }
          }).catch(error => {
              console.log(error)
              commit('setCargando', false)
              commit('setStatus', "Not Edited")
          })
      },
      eliminarProducto ({commit, getters}, id) {
        let urlBase = getters.getUrlBase
          commit('setCargando', true)
          let formData = new FormData ()
          formData.set('id', id)
        //   commit('deleteProducto', id)
          
          axios.post(urlBase + 'conexiones/productos/eliminarProducto.php', formData).then(response => {
              let data = response.data
              if (data.status.includes('OK')) {
                  commit('setStatus', "Deleted")
                  commit('setCargando', false)
                  commit('deleteProducto', id)
              }
          }).catch(error => {
              console.log(error)
              commit('setCargando', false)
              commit('setStatus', "Not Deleted")
          })
      }
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
      },
      getStatusUpload (state) {
          return state.statusUpload
      },
      getEditableProducto (state) {
          return state.productoEditar
      }
  }
})
