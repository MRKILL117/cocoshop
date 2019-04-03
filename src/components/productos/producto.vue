<template>
    <div>
        <v-menu
        v-model="showMenu"
        offset-y absolute :close-on-content-click="false"
        style="max-width: 600px"
        >
        <template v-slot:activator="{ on }">
            <v-hover>
                <v-card v-on="on" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 0}`" class="mx-2 px-2 my-2" height="350">
                    <v-layout column style="cursor: pointer;" class="mt-2" fill-height>
                        
                        <v-flex xs12>
                            <v-img max-height="200" contain class="mt-2"
                            :src="imagen"/>
                        </v-flex>
                        <v-flex xs12>
                            <div class="subheading font-weight-regular mt-2 tituloProducto">
                                {{titulo}}
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div style="font-size: 9pt;" class="grey--text autorProducto">
                                {{autor}}
                            </div>
                        </v-flex>
                        <v-flex xs12 class="align-baseline">
                            <v-divider class="my-2"></v-divider>
                            <v-layout row wrap class="headline">
                                ${{precio}}<div class="body-3 ml-2">MXN</div>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-hover>
        </template>
        <!-- Este es el que se abre al dar click en el producto -->
        <v-card width="600" max-height="650">
            <v-card-text>
                <v-layout column style="cursor: pointer;" class="mt-2" fill-height>
                    <v-flex xs12>
                        <v-layout row class="my-2 myContainer">
                            <v-flex xs12 lg4 v-for="(img, index) in imagenes" :key="index" class="mx-3">
                                <v-img contain width="220" height="250"
                                    :src="img.src">
                                </v-img>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs10>
                        <v-layout row wrap fill-height align-center>
                            <v-flex xs12 class="mt-3">
                                <v-divider></v-divider>
                            </v-flex>

                            <v-flex xs4>
                                <v-layout row wrap class="headline" align-center fill-height>
                                    ${{precio}}<div class="body-3 ml-2">MXN</div>
                                </v-layout>
                            </v-flex>
                            
                            <v-flex xs8>
                                <div class="subheading font-weight-regular mt-2 tituloProducto">
                                    {{titulo}}
                                </div>
                                <div style="font-size: 9pt;" class="grey--text autorProducto">
                                    de {{autor}}
                                </div>
                            </v-flex>

                            <v-flex xs12 class="mt-2">
                                <v-divider></v-divider>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <!-- Descripcion del producto -->
                    <v-flex xs12 class="mt-2" v-html="descripcion">
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="añadirCarrito">
                    <v-icon class="mr-1">add</v-icon>Add to cart
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String
        },
        autor: {
            type: String
        },
        precio: {
            type: String
        },
        url: {
            type: String
        },
        imagen: {
            type: String
        },
        descripcion: {
            type: String
        },
        imagenes: {
            type: Array,
            default: function () { return [] }
        }
    },
    data () {
        return {
            showMenu: false,
        }
    },
    methods: {
        añadirCarrito () {

        }
    }
}
</script>

<style>
    /* styles for '...' */ 
    /* mixin for multiline */
.tituloProducto {
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  text-align: justify;
  padding-right: 1em;
}
.tituloProducto:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}
.tituloProducto:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}

.autorProducto {
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 2.4em;
  text-align: justify;
  padding-right: 1em;
}
.autorProducto:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}
.autorProducto:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
    .myContainer{
        overflow-y: hidden;
        overflow-x: auto;
    }
</style>
