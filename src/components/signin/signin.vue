<template>
  <div>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-layout row wrap>
            <v-card-title primary-title>
              <div class="headline">Crear una cuenta</div>
            </v-card-title>
            <v-card-text>
              <v-text-field name="Nick" label="Nick" box prepend-inner-icon="mood"></v-text-field>
              <v-text-field name="Correo" label="Correo" box prepend-inner-icon="mail"></v-text-field>
              <v-text-field
                name="Contraseña"
                label="Contraseña"
                box
                type="password"
                prepend-inner-icon="lock"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" block>Registrarse</v-btn>
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
    return {};
  },
  computed: {}
};
</script>
