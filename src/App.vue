<template>
  <v-app background-color="">

    <v-toolbar color="primary" fixed app>
      <v-layout row wrap fill-height align-center>
        <v-toolbar-side-icon @click="sideMenu = !sideMenu"></v-toolbar-side-icon>
        <v-toolbar-title>Coco Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-autocomplete class="mt-2" pl-1 background-color="white" placeholder="Search" prepend-inner-icon="search" v-model="search"></v-autocomplete>
        <v-btn @click="searchItem"><v-icon>search</v-icon></v-btn>
        <v-btn color="success" @click="signIn">Log In</v-btn>
      </v-layout>
    </v-toolbar>

    <v-navigation-drawer background-color="primary" app v-model="sideMenu" temporary>
      <v-layout row wrap mt-4 column text-xs-center>
        <v-flex xs12>
          <v-list>
          <v-list-tile
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <v-list-tile-action>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-tile-action>
            
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>


          </v-list-tile>
        </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

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
      search: "",
      sideMenu: false,
      menuItems: [
        { icon: 'home', title: 'Home' },
        { icon: 'info', title: 'Productos' },
        { icon: 'warning', title: 'Saldo' }
      ]
    }
  },
  methods: {
    signIn(){
      alert("iniciando sesion")
      this.goToRoute('login');
    },
    searchItem(){
      alert("Buscar...")
    },
    goToRoute(route){
      this.$router.push("/" + route)
    }
  },
}
</script>
