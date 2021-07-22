<template>
  <v-app-bar density="compact"  class="header align-center justify-center ">
    <v-app-bar-title class="flex"><h1><span>Npm</span>Packages</h1></v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderApp"
}
</script>

<style lang="scss">
.v-app-bar__content {
  flex-direction: column;
}

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
