<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-if="!toLink" >{{
          title
        }}
      </v-list-item-title>
      <v-list-item-title v-else><a :href="toLink" rel="noopener noreferrer" target="_blank">{{ title }}</a>
      </v-list-item-title>
      <v-list-item-subtitle v-if="subtitle">{{ subtitle }}</v-list-item-subtitle>
      <v-list-item-subtitle v-if="username">Username: {{ username }}</v-list-item-subtitle>
      <v-list-item-subtitle v-if="email">Email: {{ email }}</v-list-item-subtitle>
      <div v-if="maintainers && maintainers.length" class="mb-2" v-for="(v, idx) in maintainers" :key="idx">
        <v-list-item-subtitle>Username: {{ v.username }}</v-list-item-subtitle>
        <v-list-item-subtitle>Email: {{ v.email }}</v-list-item-subtitle>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DList",
  props: {
    title: String,
    subtitle: String,
    toLink: String,
    username: String,
    email: String,
    maintainers: Array
  }
}
</script>

<style scoped>
a{
  color: #42B883;
}
</style>
