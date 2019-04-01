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
              <v-text-field name="Nombre" label="Nombre" box prepend-inner-icon="person" v-model="user.Nombre"></v-text-field>
               <v-text-field name="Apellido" label="Apellido" box prepend-inner-icon="person" v-model="user.Apellido"></v-text-field>
              <v-text-field name="Correo" label="Correo" box prepend-inner-icon="mail" v-model="user.correo"></v-text-field>
              <v-text-field name="Direccion" label="Direccion" box prepend-inner-icon="location_city" v-model="user.Direccion"></v-text-field>
              <v-text-field name="Telefono" label="Telefono" box prepend-inner-icon="call" v-model="user.Nombre"></v-text-field>
              <v-text-field
                name="Contraseña"
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
        Nombre: "",
        Apellido: "",
        Direccion: "",
        password: ""
      }
    };
  },
  methods: {
    crearUser() {
      this.$store.dispatch("crearUser", this.user)
    }
  },
  computed: {}
};
</script>
