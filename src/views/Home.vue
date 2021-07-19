<template>
  <div>
    <div>
      <input type="text" :value="displayValue" @input="debounceListener"
             placeholder="Which package do you want to find?"/>
    </div>
    <list-app/>
  </div>
</template>

<script>
import {watch} from 'vue'
import useDebounce from "../hooks/debounce";
import {useStore} from 'vuex'

import ListApp from "./ListApp";

export default {
  name: 'Home',
  components: {ListApp},
  setup() {
    const {dispatch} = useStore()
    const {displayValue, debounceListener, debouncedValue} = useDebounce(700)
    watch(debouncedValue, () => {
      dispatch('changePackages', debouncedValue.value)
    })
    return {
      displayValue,
      debounceListener,
    }
  }
};
</script>
<style lang="scss">
input {
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  &[type="text"] {
    width: 100%;
    color: #000;
    background-color: #fff;
    font-size: 20px;
    padding: 10px 16px;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: 0.4s;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: #000;
    }
  }
}
</style>
