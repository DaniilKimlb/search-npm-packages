<template>
  <div>
    <v-list-item v-for="(p, idx) in packageArr" :key="idx">
      <v-list-item-content >
        <v-list-item-title>{{capitalize(p)}}</v-list-item-title>
        <v-list-item-subtitle>{{ package[p] }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
    <v-list-item-content>
      <v-list-item-title>Date</v-list-item-title>
      <v-list-item-subtitle>{{ toDate(package.date) }}</v-list-item-subtitle>
    </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Publisher</v-list-item-title>
        <v-list-item-subtitle>Username: {{ package.publisher.username }}</v-list-item-subtitle>
        <v-list-item-subtitle>Email: {{ package.publisher.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Maintainers</v-list-item-title>
        <div class="mb-2" v-for="(v, idx)  in Object.values(package.maintainers)" :key="idx">
          <v-list-item-subtitle>Username: {{ v.username }}</v-list-item-subtitle>
          <v-list-item-subtitle>Email: {{ v.email }}</v-list-item-subtitle>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <a :href="package?.links?.npm" rel="noopener noreferrer" target="_blank">Link to npm</a>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import {capitalize, toDate} from "../utility";

export default {
  name: "Detail",
  props: {
    package: {
      default: {},
      required: true
    },
  },
  setup(props) {
    const packageArr = Object.keys(props.package).filter(el => typeof props.package[el] !== "object" && el !== 'date')
    return {packageArr, toDate, capitalize}
  }
}
</script>

<style scoped>

</style>
