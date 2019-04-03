<template>
  <v-app background-color="">

    <toolbar-component></toolbar-component>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
    }
  },
  methods: {
    signIn(){
      alert("iniciando sesion")
    },
    searchItem(){
      alert("Buscar...")
    }
  },
}
</script>

<style>
</style>
