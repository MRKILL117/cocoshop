<template>
    <div>
        <v-menu offset-y :close-on-content-click="false">
            <v-btn icon slot="activator">
                <v-icon>shopping_cart</v-icon>
            </v-btn>

            <v-card width="500" max-height="600">
                <v-card-title primary-title>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <h3 class="headline mb-0">Carrito</h3>
                            <v-divider></v-divider>
                        </v-flex>
                    </v-layout>
                </v-card-title>

                <v-card-text>
                    <div class="title" v-if="!hayProductos">
                        <v-icon>sentiment_very_dissatisfied</v-icon> Carrito Vacio
                    </div>
                    <v-layout row wrap v-else>
                        <v-flex xs12>
                            <v-list two-line>
                                <v-list-tile avatar v-for="(producto, index) in productos" :key="index">
                                    <v-list-tile-avatar>
                                        <img :src="producto.imagenes[0].src">
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ producto.titulo }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ producto.autor }} - ${{ producto.precio }} MXN</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-btn color="success" icon small @click="removeProducto (producto)">
                                            <v-icon>remove</v-icon>
                                        </v-btn>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                        <v-flex xs12>
                            <div class="headline">Total: ${{precioTotal}} MXN</div>
                        </v-flex>
                    </v-layout>
                </v-card-text>

                <v-card-actions v-if="hayProductos">
                    <v-btn color="success" @click="comprar ()">
                        <v-icon class="mr-2">shop</v-icon> Comprar
                    </v-btn>
                    <!-- <v-btn color="danger" class="mr-2" @click="removeAll ()">
                        <v-icon>remove</v-icon> Limpiar Carrito
                    </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: {
        productos () {
            let aux = this.$store.getters.getCarrito
            if (aux.length > 0) {
                return aux
            } else {
                return []
            }
        },
        precioTotal () {
            let sum = 0
            this.productos.forEach(productos => {
                let auxPrecio = productos.precio
                // El precio a veces tiene comas asi que ps se la quitamos
                auxPrecio = auxPrecio.replace(',','')
                sum += parseFloat(auxPrecio)
            });
            return sum.toFixed(3);
        },
        hayProductos () {
            return (this.productos.length > 0)
        },
        ...mapGetters({
            userData: 'getUserData'
        }),
    },
    methods: {
        removeProducto (producto) {
            this.$store.commit('removeProducto', producto)
            this.$store.commit('addStock', producto)
        },
        removeAll () {
            this.$store.commit('removeAll')
        },
        comprar () {
            
            this.$store.dispatch('comprar')
        }
    }
}
</script>