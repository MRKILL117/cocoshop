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
                                <!-- {{historial}} -->
                                <v-expansion-panel v-if="historial.length > 0">
                                    <v-expansion-panel-content
                                    v-for="(item,i) in historial" :key="i">
                                    <template v-slot:header>
                                        <v-avatar :size="30" :src= "getURL (item)" >
                                        </v-avatar>
                                        <div>ID Compra: {{item.idCompra}} - Status: 
                                            <div v-if="item.estatus == 1">
                                                   Activo
                                            </div>
                                            <div v-if="item.estatus == 2">
                                                    Procesando 
                                            </div>
                                            <div v-if="item.estatus == 3">
                                                    Cancelar 
                                            </div>
                                        </div>
                                    </template>
                                    <v-card>
                                        <v-card-text>
                                            <v-layout row wrap>
                                                <v-flex xs12 v-for="(item2, index) in item.productos" :key="index">
                                                    {{item2.nombreProducto}} - Total: ${{item2.precio}}
                                                </v-flex>
                                            </v-layout>
                                        </v-card-text>
                                    </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
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
import { timeout } from 'q';
export default {
    data () {
        return {
            
        }
    },
    created () {
        setTimeout(() => {
           this.$store.dispatch('loadHistory', this.userData) 
        }, 0);
    },
    updated () {
        // if (this.historial.length <= 0) 
        //     this.$store.dispatch('loadHistory', this.userData)
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
        },
        removeCompra (idCompra) {
            let des = confirm("Estas seguro que deseas realizar esta accion?")
            if (!des)
                return

            let aux = this.historial.find(auxFind => {
                return auxFind.idCompra == idCompra
            })
            console.log("Borrar compra", aux)
        }
    }
}
</script>
