<template>
    <v-toolbar light color="white">
        <v-toolbar-side-icon class=""></v-toolbar-side-icon>

        <v-toolbar-title class="">CocoShop</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-layout row wrap>
        <v-flex xs12 md3>
            <v-autocomplete flat :items="categorias" v-model="categoria" @change="setCategoria"
            class="mt-2" solo background-color="blue-grey lighten-3"
            placeholder="Categorias" prepend-inner-icon="category">
            </v-autocomplete>
        </v-flex>
        <v-flex xs12 md9>
            <v-autocomplete flat :items="productosFiltrados" item-text="titulo" 
            class="mt-2" solo background-color="blue-grey lighten-3" placeholder="Buscar"
            prepend-inner-icon="search">
            </v-autocomplete>
        </v-flex>
        </v-layout>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>person</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>exit_to_app</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>lock_open</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>shopping_cart</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
    data () {
        return {
            search: "",
            sideMenu: false,
            categoria: ''
        }
    },
    computed: {
        categorias () {
            let categs = this.$store.getters.getCategorias
            if (categs.length > 0)
                return categs
            else {
                return []
            }
        },
        productos () {
            let products = this.$store.getters.getProductos
            if (products.length > 0)
                return products
            else {
                return []
            }
        },
        filtro () {
            let filter = this.$store.getters.getProductos
            if (filter.length > 0)
                return filter
            else {
                return {}
            }
        },
        productosFiltrados () {
            let resultado = []
            let filtroCategoria = this.$store.getters.getFiltro.categoria
            console.log('Categoria', filtroCategoria)

            if (filtroCategoria != ' ' && filtroCategoria != 'Todo') {
                this.productos.forEach(producto => {
                    if (producto.categoria == filtroCategoria) {
                        resultado.push(producto)
                    }
                });
            } else {
                resultado = this.productos
            }

            return resultado
        }
    },
    methods: {
        setCategoria () {
            console.log('cambio el filtro')
            let filtro = {
                categoria: this.categoria
            }
            this.$store.commit('setFiltro', filtro)
        }
    }
}
</script>