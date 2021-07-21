<template>
  <div>
    <d-list v-for="(p, idx) in packageArr" :key="idx" :title="capitalize(p)" :subtitle="package[p]"></d-list>
    <d-list title="Date" :subtitle=" toDate(package.date)"></d-list>
    <d-list title="Publisher" :username="package.publisher.username" :email="package.publisher.email"></d-list>
    <d-list title="Maintainers" :maintainers="Object.values(package.maintainers)"></d-list>
    <d-list :toLink="package?.links?.npm" title="Link to npm"></d-list>
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
