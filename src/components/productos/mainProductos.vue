<template>
    <div>
        <v-layout row wrap justify-center mt-5 mb-5>
            <v-flex xs10 lg8>
                <v-card>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs1 md3 xl2 v-for="(item, index) in productosFiltrados" :key="index">
                                <producto-component :titulo="item.titulo" :autor="item.autor" 
                                :precio="item.precio" :imagen="item.imagenes[0].src" 
                                :descripcion="item.descripcion" :imagenes="item.imagenes"
                                :stock="Number(item.stock)" :id="item.id" :categoria="item.categoria"
                                :ref="'producto' + index"/>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
        }
    },
    methods: {
    },
    computed: {
        ...mapGetters({
            productos: 'getProductos',
        }),
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
    }
}
</script>