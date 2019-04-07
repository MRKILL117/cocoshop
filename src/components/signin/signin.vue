<template>
  <div>
    <v-layout row wrap align-center justify-center mt-5>
      <v-flex xs6>
        <v-card>
          <v-layout row wrap>
            <v-card-title primary-title>
              <div class="headline">Crear una cuenta</div>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Nombre"
                box
                prepend-inner-icon="person"
                maxlength="25"
                v-model="user.nombre"
              ></v-text-field>
              <v-text-field
                label="Apellido"
                box
                prepend-inner-icon="person"
                maxlength="25"
                v-model="user.apellido"
              ></v-text-field>
              <v-text-field
                label="email"
                box
                prepend-inner-icon="mail"
                maxlength="35"
                v-model="user.email"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                box
                type="password"
                prepend-inner-icon="lock"
                v-model="user.password"
              ></v-text-field>
              <v-text-field
                label="Telefono"
                box
                prepend-inner-icon="call"
                maxlength="10"
                v-model="user.telefono"
              ></v-text-field>
              <v-text-field
                label="Direccion"
                box
                prepend-inner-icon="home"
                maxlength="200"
                v-model="user.direccion"
              ></v-text-field>
              <v-text-field
                label="pais"
                box
                prepend-inner-icon="room"
                maxlength="200"
                v-model="user.pais"
              ></v-text-field>
              <v-text-field
                label="estado"
                box
                prepend-inner-icon="filter_hdr"
                maxlength="200"
                v-model="user.estado"
              ></v-text-field>
              <v-text-field
                label="ciudad"
                box
                prepend-inner-icon="location_city"
                maxlength="200"
                v-model="user.ciudad"
              ></v-text-field>
              <v-text-field
                label="cp"
                box
                prepend-inner-icon="markunread_mailbox"
                maxlength="200"
                v-model="user.codigoPostal"
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
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        password: "",
        codigoPostal: "",
        ciudad: "",
        estado: ""
      }
    };
  },
  methods: {
    crearUser() {
      this.$store.dispatch("crearUser", this.user);
      this.goToRoute("login");
    },
    goToRoute(route) {
      this.$router.push("/" + route);
    }
  },
  computed: {}
};
</script>
