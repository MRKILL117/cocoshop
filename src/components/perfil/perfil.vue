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
                        v-model="user.nombre"
                    ></v-text-field>
                    <v-text-field
                        label="Apellido"
                        :readonly="true"
                        id="id"
                        v-model="user.apellido"
                    ></v-text-field>
                        <v-text-field
                        label="Correo"
                        :readonly="true"
                        id="id"
                        v-model="user.correo"
                    ></v-text-field>
                    <v-text-field
                        label="Telefono"
                        :readonly="true"
                        id="id"
                        v-model="user.telefono"
                    ></v-text-field>
                    <v-text-field
                        label="Pais"
                        :readonly="true"
                        id="id"
                        v-model="user.pais"
                    ></v-text-field>
                    <v-text-field
                        label="Estado"
                        :readonly="true"
                        id="id"
                        v-model="user.estado"
                    ></v-text-field>
                    <v-text-field
                        label="Ciudad"
                        :readonly="true"
                        id="id"
                        v-model="user.ciudad"
                    ></v-text-field>
                    <v-text-field
                        label="Direccion"
                        :readonly="true"
                        id="id"
                        v-model="user.direccion"
                    ></v-text-field>
                    <v-text-field
                        label="Codigo Postal"
                        :readonly="true"
                        id="id"
                        v-model="user.cp"
                    ></v-text-field>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                correo: "",
                nombre: "",
                apellido: "",
                telefono: "",
                direccion: "",
                password: "",
                pais: "",
                estado: "",
                ciudad: "",
                cp: ""
            }
        }
    },
    created(){

    }
}
</script>