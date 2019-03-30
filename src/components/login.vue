<template>
    <div>
        <v-layout row wrap justify-center>
            <v-flex xs10>
            <v-text-field
                v-model="username"
                label="Username"
                id="usrname"
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="Password"
                id="password"
            ></v-text-field>
            <v-flex>
                <v-btn color="success" @click="signIn">SIGN IN</v-btn>
            </v-flex>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
            Username: {{username}} <br>
            Password: {{password}}
        </v-layout>
        <v-layout row wrap>
            <ben-component :nombre="username" :mostrar="logeado"></ben-component>
        </v-layout>
    </div>
</template>

<script>
export default {
    //Variables del componente
    data(){
       return{
           username: '',
           password: '',
           registrados: [
               {username: 'Antonio', password: '123'},
               {username: 'Danny', password: '321'},
           ],
           logeado: false,
       }
    },
    methods: {
        signIn(){
            // dispatch hace referencia a los actions
            let user = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('loginUsuario', user)
            // let user = this.registrados.find(iterador =>{
            //     let user
            //     return (iterador.username == this.username && iterador.password == this.password)
            // })
            // if(user){
            //     alert('Usuario existe')
            //     this.logeado = true
            // } else {
            //     alert('Usuario invalido')
            // }
        }
    },
    computed: {
        
    }
}
</script>

<style lang="">
    
</style>