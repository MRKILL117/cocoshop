<template>
    <div>
        <v-layout row wrap mt-5 justify-space-around>
            <v-flex xs5>
                <v-card>
                    <v-card-title primary-title>
                        Usuario
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                        label="Nombre"
                        :readonly="true"
                        id="id"
                        v-model="userData.nombre"
                    ></v-text-field>
                    <v-text-field
                        label="Apellido"
                        :readonly="true"
                        id="id"
                        v-model="userData.apellido"
                    ></v-text-field>
                        <v-text-field
                        label="Correo"
                        :readonly="true"
                        id="id"
                        v-model="userData.email"
                    ></v-text-field>
                    <v-text-field
                        label="Telefono"
                        :readonly="true"
                        id="id"
                        v-model="userData.telefono"
                    ></v-text-field>
                    <v-text-field
                        label="Pais"
                        :readonly="true"
                        id="id"
                        v-model="userData.pais"
                    ></v-text-field>
                    <v-text-field
                        label="Estado"
                        :readonly="true"
                        id="id"
                        v-model="userData.estado"
                    ></v-text-field>
                    <v-text-field
                        label="Ciudad"
                        :readonly="true"
                        id="id"
                        v-model="userData.ciudad"
                    ></v-text-field>
                    <v-text-field
                        label="Direccion"
                        :readonly="true"
                        id="id"
                        v-model="userData.direccion"
                    ></v-text-field>
                    <v-text-field
                        label="Codigo Postal"
                        :readonly="true"
                        id="id"
                        v-model="userData.codigoPostal"
                    ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green" block @click="goToRoute('editPerfil')">Editar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs5>
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">Historial</div>
                    </v-card-title>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-list two-line>
                                    <v-list-tile avatar v-for="(producto, index) in historial" :key="index">
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
    computed: {
        ...mapGetters({
            userData: 'getUserData',
            historial: 'getHistorialProductos',
        }),
    },
    methods: {
        goToRoute (route) {
            this.$router.push('/' + route)
        }
    }
}
</script>
