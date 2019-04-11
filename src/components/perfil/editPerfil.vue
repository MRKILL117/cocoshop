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
                        id="id"
                        v-model="userData.nombre"
                    ></v-text-field>
                    <v-text-field
                        label="Apellido"
                        id="id"
                        v-model="userData.apellido"
                    ></v-text-field>
                    <v-alert type="info">
                        El correo no se puede editar                        
                    </v-alert>
                        <v-text-field
                        label="Correo"
                        id="id"
                        :readonly="true"
                        v-model="userData.email"
                    ></v-text-field>
                    <v-text-field
                        label="Telefono"
                        id="id"
                        v-model="userData.telefono"
                    ></v-text-field>
                    <v-text-field
                        label="Pais"
                        id="id"
                        v-model="userData.pais"
                    ></v-text-field>
                    <v-text-field
                        label="Estado"
                        id="id"
                        v-model="userData.estado"
                    ></v-text-field>
                    <v-text-field
                        label="Ciudad"
                        id="id"
                        v-model="userData.ciudad"
                    ></v-text-field>
                    <v-text-field
                        label="Direccion"
                        id="id"
                        v-model="userData.direccion"
                    ></v-text-field>
                    <v-text-field
                        label="Codigo Postal"
                        id="id"
                        v-model="userData.codigoPostal"
                    ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="error" block @click="goToRoute('perfil')">Cancelar</v-btn>
                        <v-btn color="success" block @click="saveChanges">Guardar</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn color="error" @click="deleteAccount()">Eliminar Perfil</v-btn>
                        <!-- {{historial}} -->
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
    updated () {
        if (this.historial.length <= 0) 
            this.$store.dispatch('loadHistory', this.userData)
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
        saveChanges(){
            this.$store.dispatch("updateUser", this.user)
            this.goToRoute('perfil');
        },
        deleteAccount(){
            let puedeBorrar = true
            this.historial.forEach(element => {
                if (element.estatus == 1) {
                    puedeBorrar = false
                    return
                }
            });
            let des = confirm("Estas seguro que deseas realizar esta accion?")
            if (des && puedeBorrar) {
                this.$store.dispatch("deleteUser")
                this.$router.push('/')
            } else
                alert('NO puedes borrar tu cuenta, tienes productos pendientes')
        }
    }
}
</script>