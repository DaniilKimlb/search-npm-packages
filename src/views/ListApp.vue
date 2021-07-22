<template>
  <div>
    <div v-if="isNothingFound && !packages?.length && !isLoader" style="color: #fff">Nothing found</div>
    <v-loader v-if="isLoader"></v-loader>
    <div v-if="!isLoader && packages?.length ">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(p, idx) of packages"
                  :key="p?.package?.date"
        >
          <tr
              @click="setModal(true, idx)"
              class="mx-auto mt-5"
          >
            <td>{{ p?.package?.name }}@{{p.package.version}}</td>
            <td>{{ p?.package?.description }}</td>
            <td>{{ toDate(p?.package?.date) }}</td>
          </tr>
          <v-modal v-if="idx === idxShowModal" :show="showModal" @setModal="setModal">
            <detail :package="p?.package"></detail>
          </v-modal>
        </template>
        </tbody>
      </table>
      <v-pagination v-model="currentPage" :length="lengthPagination || 1" color="#42B883"></v-pagination>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";
import Detail from "./Detail";
import {toDate} from "../utility";

export default {
  components: {Detail},
  setup() {
    const {getters, commit} = useStore()
    const packages = computed(() => getters['getPackages'])
    const lengthPagination = computed(() => getters['getLengthPagination'])
    const isLoader = computed(() => getters['getIsLoader'])
    const isNothingFound = computed(() => getters['getNothingFound'])
    const showModal = ref(false)
    const idxShowModal = ref()
    const setModal = (val, idx) => {
      showModal.value = val
      idxShowModal.value = idx
    }
    const currentPage = ref(1)
    watch(currentPage, () => {
      commit('changeCurrentPage', currentPage)
    })

    return {
      packages,
      isLoader,
      isNothingFound,
      showModal,
      setModal,
      idxShowModal,
      toDate,
      lengthPagination,
      currentPage
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}

.table th {
  font-weight: bold;
  padding: 5px;
  background-color: #2C3D4E;
  color: #42B883;
  border: 2px solid #496583;
}

.table td {
  max-width: 50px;
  color: #fff;
  cursor: pointer;
  border: 2px solid #496583;
  padding: 5px;
}

</style>
