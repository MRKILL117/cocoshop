<template>
    <div>
        <v-layout row wrap mt-5 justify-center mb-5>
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
            userData: 'getUserData'
        }),
    },
    methods: {
        goToRoute (route) {
            this.$router.push('/' + route)
        }
    }
}
</script>
