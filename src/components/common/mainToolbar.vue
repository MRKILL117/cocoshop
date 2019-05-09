<template>
    <v-toolbar light color="white">
        <!-- <v-toolbar-side-icon class=""></v-toolbar-side-icon> -->

        <v-toolbar-title class="" @click="goToRoute ('')" style="cursor: pointer">
            CocoShop
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-layout row wrap>
        <v-flex xs12 md12>
            <v-autocomplete  flat :items="Array.from(categorias)" v-model="categoria" @change="setCategoria"
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

        <crear-producto-component v-if="isAdmin">
        </crear-producto-component>
        <!-- {{userData}} -->
        
        <v-tooltip bottom >
            <template v-slot:activator="{ on }" v-if="checkUser">
                <div class="body-2" v-on="on">
                    <v-btn color="success" @click="addSaldo" flat small icon>
                        <v-icon small>attach_money</v-icon>{{userData.saldo}}
                    </v-btn>
                </div>
            </template>
            <span>Balance</span>
        </v-tooltip>
        

        <v-tooltip bottom v-if="checkUser">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon @click="goToRoute('perfil')">person</v-icon>
                </v-btn>
            </template>
            <span>My Profile</span>
        </v-tooltip>

        <v-tooltip bottom v-if="checkUser">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon @click="logout()">exit_to_app</v-icon>
                </v-btn>
            </template>
            <span>Logout</span>
        </v-tooltip>

        <v-tooltip bottom v-if="!checkUser">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon @click="goToRoute ('login')">lock_open</v-icon>
                </v-btn>
            </template>
            <span>Login</span>
        </v-tooltip>
        
        <carrito-component v-if="checkUser"></carrito-component>

    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            search: "",
            sideMenu: false,
            categoria: '',
        }
    },
    computed: {
        ...mapGetters({
            userData: 'getUserData',
            categorias: 'getCategorias'
        }),
        checkUser (){
            return (this.userData.idUsuario!==undefined)
        },
        isAdmin () {
            return this.userData.nombretipodeusuario == 'Administrador'
        },
        // categorias () {
        //     let categs = this.$store.getters.getCategorias
        //     console.log(Array.from(categs))
        //     if (categs.length > 0)
        //         return categs
        //     else {
        //         return []
        //     }
        // },
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
        },

    },
    methods: {
        logout(){
            this.$store.dispatch('logOut')
            goToRoute('')
        },
        setCategoria () {
            console.log('cambio el filtro')
            let filtro = {
                categoria: this.categoria
            }
            this.$store.commit('setFiltro', filtro)
        },
        goToRoute (route) {
            this.$router.push('/' + route)
        },
        showMenu (item) {
            console.log("Item", item)
        },
        addSaldo () {
            let saldo = prompt('Nuevo saldo')
            let saldoF = parseFloat(saldo)
            if (saldoF < 1) {
                alert("No se puede ingresar saldo negativo")
            } else {
                let saldoAnt = parseFloat(this.userData.saldo)
                let saldoFinal = saldoF + saldoAnt
                console.log(saldoF)
                console.log(saldoFinal)
                let payload = {
                    idUsuario: this.userData.idUsuario,
                    saldo: saldoFinal
                }
                this.$store.dispatch('addSaldo', payload)
            }
        }
    }
}
</script>