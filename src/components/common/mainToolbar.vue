<template>
    <v-toolbar light color="white">
        <!-- <v-toolbar-side-icon class=""></v-toolbar-side-icon> -->

        <v-toolbar-title class="" @click="goToRoute ('')" style="cursor: pointer">
            CocoShop
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-layout row wrap>
        <v-flex xs12 md3>
            <v-autocomplete flat :items="categorias" v-model="categoria" @change="setCategoria"
            class="mt-2" solo background-color="blue-grey lighten-3"
            placeholder="Categories" prepend-inner-icon="category">
            </v-autocomplete>
        </v-flex>
        <v-flex xs12 md9>
            <v-autocomplete flat :items="productosFiltrados" item-text="titulo" 
            class="mt-2" solo background-color="blue-grey lighten-3" placeholder="Search"
            prepend-inner-icon="search">
            </v-autocomplete>
        </v-flex>
        </v-layout>

        <v-spacer></v-spacer>

        <v-menu offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on }">
                <div class="body-2" v-on="on">
                    <v-icon small>attach_money</v-icon>300
                </div>
            </template>
            <v-card width="600" max-height="250">
                <v-card-title primary-title>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="headline">Money</div>
                        </v-flex>
                        <v-flex xs12 class="mt-2">
                            <v-divider></v-divider>
                        </v-flex>
                    </v-layout>
                </v-card-title>
                <v-card-text>
                    <v-layout row wrap fill-height align-center>
                        <v-flex xs11>
                            <v-text-field
                                prepend-inner-icon="attach_money"
                                label="Adding Money"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs1>
                            <v-btn color="success" icon flat class="my-auto">
                                <v-icon>add</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-menu>
        

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>person</v-icon>
                </v-btn>
            </template>
            <span>My Profile</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>exit_to_app</v-icon>
                </v-btn>
            </template>
            <span>Logout</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon @click="goToRoute ('login')">lock_open</v-icon>
                </v-btn>
            </template>
            <span>Login</span>
        </v-tooltip>
        
        <carrito-component></carrito-component>

    </v-toolbar>
</template>

<script>
export default {
    data () {
        return {
            search: "",
            sideMenu: false,
            categoria: '',
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
        },
        goToRoute (route) {
            this.$router.push('/' + route)
        }
    }
}
</script>