<template>
  <div>
    <div v-if="isNothingFound && !packages?.length && !isLoader">Nothing found</div>
    <v-loader v-if="isLoader"></v-loader>
    <div v-else>
      <v-card
          v-for="(p, idx) of packages"
          :key="p?.package?.date"
          class="mx-auto mt-5"
      >
        <d-list :title="p?.package?.name" :subtitle="p?.package?.description" :isTitleBold="true"></d-list>
        <v-card-actions>
          <v-btn
              @click="setModal(true, idx)"
              rounded
              text
          >
            More details
          </v-btn>
        </v-card-actions>
        <v-modal v-if="idx === idxShowModal" :show="showModal" @setModal="setModal">
          <detail :package="p?.package"></detail>
        </v-modal>
      </v-card>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import Detail from "./Detail";

export default {
  components: {Detail},
  setup() {
    const {getters} = useStore()
    const packages = computed(() => getters['getPackages'])
    const isLoader = computed(() => getters['getIsLoader'])
    const isNothingFound = computed(() => getters['getNothingFound'])
    const showModal = ref(false)
    const idxShowModal = ref()
    const setModal = (val, idx) => {
      showModal.value = val
      idxShowModal.value = idx
    }
    return {
      packages,
      isLoader,
      isNothingFound,
      showModal,
      setModal,
      idxShowModal
    }
  }
}
</script>

<style scoped>

</style>
