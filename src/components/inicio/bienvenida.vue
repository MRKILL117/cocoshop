<template>
    <div>
        Bienvenido {{nombre}}
    </div>
</template>


<script>
export default {
    data () {
        return {
            
        }
    },
    methods:{

    },
    computed: {

    },
    props: {
        nombre: {
            type: String,
            default: null
        }
    }
}
</script>