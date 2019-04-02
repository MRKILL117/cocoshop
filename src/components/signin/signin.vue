<template>
  <div>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-layout row wrap>
            <v-card-title primary-title>
              <div class="headline" >Crear una cuenta</div>
            </v-card-title>
            <v-card-text>
              <v-text-field  label="Nombre" box prepend-inner-icon="person" maxlength="25" v-model="user.nombre"></v-text-field>
               <v-text-field  label="Apellido" box prepend-inner-icon="person" maxlength="25" v-model="user.apellido"></v-text-field>
              <v-text-field  label="Correo" box prepend-inner-icon="mail" maxlength="35" v-model="user.correo"></v-text-field>
              <v-text-field  label="Direccion" box prepend-inner-icon="location_city" maxlength="200" v-model="user.direccion"></v-text-field>
              <v-text-field  label="Telefono" box prepend-inner-icon="call" maxlength="10" v-model="user.telefono"></v-text-field>
              <v-text-field
                label="Contraseña"
                box
                type="password"
                prepend-inner-icon="lock"
                v-model="user.password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" block @click="crearUser">Registrarse</v-btn>
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
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        password: ""
      }
    };
  },
  methods: {
    crearUser() {
      this.$store.dispatch("crearUser", this.user)
      this.goToRoute('login');
    },
    goToRoute(route){
      this.$router.push("/" + route)
    }
  },
  computed: {}
};
</script>
