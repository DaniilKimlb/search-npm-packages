<template>
  <v-app>
    <header-app></header-app>
    <v-main>
      <v-container fluid class="container">
        <router-view></router-view>
      </v-container>
    </v-main>
      <v-footer >
        <v-card
            flat
            tile
            width="100%"
            class="red lighten-1 text-center"
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
<style scoped>
.container{
  min-height: 100vh
}
</style>
