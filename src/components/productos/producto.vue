<template>
    <div>
        <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 0}`" class="mx-2 px-2 my-2" height="350">
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
                            de {{autor}}
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
        }
    },
    data () {
        return {
            
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
</style>
