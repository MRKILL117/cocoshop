<template>
  <div>
    <v-layout row wrap align-center justify-center mt-5>
      <v-flex xs6>
        <v-card>
          <v-layout row wrap>
            <v-card-title primary-title>
              <div class="headline">Inicio de sesion</div>
            </v-card-title>
            <v-card-text>
              <v-text-field label="Correo" box prepend-inner-icon="mail" v-model="user.correo"></v-text-field>
              <v-text-field
                v-model="user.password"
                label="Contraseña"
                box
                type="password"
                prepend-inner-icon="lock"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" block @click="goToRoute('signin')">Registrarse</v-btn>
              <v-btn color="light-blue" block @click="logIn">Entrar</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        correo: "",
        password: ""
      }
    }
  },
  methods: {
    logIn(){
      this.$store.dispatch("logIn", this.user);
      if(status){
        this.goToRoute('')
      }
    },
    goToRoute(route){
      this.$router.push("/" + route)
    }
  },
  computed: {

  }
};
</script>
