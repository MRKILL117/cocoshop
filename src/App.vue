<template>
  <v-app background-color="">

    <v-toolbar color="primary" fixed app>

      <v-toolbar-side-icon @click="sideMenu = !sideMenu"></v-toolbar-side-icon>

      <v-toolbar-title>Coco Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field pl-1 background-color="white" placeholder="Search" v-model="search"></v-text-field>
      <v-btn @click="searchItem"><v-icon>search</v-icon></v-btn>
      <v-btn color="success" @click="signIn">Sign In</v-btn>
    </v-toolbar>

    <v-navigation-drawer background-color="primary" app v-model="sideMenu" temporary>
      <v-layout row wrap mt-4 ml-5 column text-xs-center>
        <v-flex xs12>
          <v-list>
            <v-list-tile-title><h2>Menu</h2></v-list-tile-title>
          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
          >
            <v-list-tile-content>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-tile-content>
            
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
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
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
