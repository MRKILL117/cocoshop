<template>
<div>
<v-layout row wrap>
    <div v-if="mostrar">
    Bienvenido {{nombre}}
</div>
<div v-else>
    Sin usuario logeado
</div>
</v-layout>
</div>
</template>


<script>
export default {
    props:{
        //datos que se pasan por parametros
        nombre: {
            type: String,
            default: "Anonimo"
        },
        mostrar:{
            type: Boolean
        }
    },
    data(){
        return{

        }
    }
}
</script>