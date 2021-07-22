<template>
  <v-app-bar density="compact" class="header">
    <v-app-bar-title><h1><span>Npm</span>Packages</h1></v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderApp"
}
</script>

<style scoped lang="scss">
.header {
  background-color: #2C3D4E;

  h1 {
    color: #FFF;
    font-weight: 800;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}
</style>
