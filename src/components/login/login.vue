<template>
    <div>
        <v-layout row wrap justify-center align-center fill-height>
            <v-flex xs6>
                <v-card class="">
                    <v-layout row wrap>
                        <v-card-title primary-title>
                            <div class="headline">Login</div>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                name="name"
                                label="Username"
                                box
                                prepend-inner-icon="mail">
                            </v-text-field>
                            <v-text-field
                                name="name"
                                label="Password"
                                box type="password" 
                                prepend-inner-icon="lock">
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="deep-purple darken-2" block>Register</v-btn>
                            <v-btn color="indigo darken-2" block>Login</v-btn>
                        </v-card-actions>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs10>
                <v-layout row wrap>
                    <v-card v-for="(producto, index) in productos" :key="index">
                        <v-card-title primary-title>
                            {{producto.nombre}}
                        </v-card-title>
                        <v-card-text>
                            <v-img :src="producto.imagen"></v-img>
                            Precio: ${{producto.precio}}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primaty">Comprar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-layout>
                {{numero}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data () {
        return {
            productos: [
                {nombre: 'Platano Chiapas', precio: '9.90', 
                imagen: 'https://homuapp.000webhostapp.com/Imagenes/4-1-2019-22-24-45.jpg'},
                {nombre: 'Gato Negro', precio: '15.00', 
                imagen: 'https://homuapp.000webhostapp.com/Imagenes/24-11-2018-14-54-14.jpg', url:"comprar"},
            ]
        }
    },
    computed: {
        numero () {
            return this.$route.params.numero
        }
    }
}
</script>
