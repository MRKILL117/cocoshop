<template>
    <div>
        <v-text-field
            v-model="saldo"
            label="Saldo"
            type="number"
        ></v-text-field>
        has escrito este saldo: {{saldo}}
        <v-text-field
        v-model="idUsuario"
            label="ID"
        ></v-text-field>
        has escrito esta ID: {{idUsuario}}
        <v-btn color="success" @click="agregarSaldo">Agregar</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            saldo: "",
            idUsuario: ""
        }
    },
    methods: {
        agregarSaldo(){
            let aux = {
                idUsuario: "",
                saldo: ""
            }
            aux.idUsuario = this.idUsuario
            aux.saldo = this.saldo
            //Esto es para acceder a ls funciones (Actions) del store
            this.$store.dispatch('addSaldo', aux)
        }
    }
}
</script>