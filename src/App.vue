<template>
  <v-app class="container">
    <header-app></header-app>
    <v-main>
      <v-container fluid class="container">
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer max-height="50" class="footer">
      <v-card
          flat
          tile
          width="100%"
          class="footer lighten-1 text-center"
      >
        <v-divider></v-divider>
        <v-card-text class="white--text">
          <strong>Daniil Kim&#60;dan.kim.04lb@gmail.com&#62;</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>

import HeaderApp from "./components/HeaderApp";

export default {
  name: 'App',
  components: {HeaderApp},
}
</script>
<style>
.container, body {
  background-color: #35495E;
}
.footer{
  color: #fff;
  overflow: hidden;
  background-color: #2C3D4E;

}
</style>
