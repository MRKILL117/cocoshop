<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-layout row wrap>
                        <v-card-title primary-title>
                            <div class="headline">Login</div>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                name="name"
                                label="Username"
                                v-model="username"
                                id="id"
                            ></v-text-field>
                            <v-text-field
                                name="name"
                                label="Password"
                                id="id"
                                v-model="password"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="success" @click="login()">Login</v-btn>
                        </v-card-actions>
                    </v-layout>
                </v-card>
                El username es: {{username}} <br>
                El password es: {{password}} <br>
                <hr>
                <bienvenida-component :nombre="parametro"></bienvenida-component>
                La suma es {{suma}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
        data () {
        return {
            // Variables del componente
            username: '',
            password: '',
            parametro: '',
        }
    },
    methods: {
        login () {
            this.parametro = this.username
        }
    },
    computed: {
        suma () {
            return Number(this.username) + Number(this.password)
        }
    }
}
</script>