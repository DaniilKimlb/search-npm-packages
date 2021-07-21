<template>
  <div class="modal-wrapper" @click="hiddenModal" v-if="show">
    <div class="modal-content" @click.stop>
      <div class="modal-close" @click="hiddenModal">X</div>
      <div class="modal-header" v-if="title">
        {{ title }}
      </div>
      <div class="modal-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    title: String,
    show: {
      required: true,
      type: Boolean
    }
  },
  setup(props, {emit}) {
    const hiddenModal = () => {
      emit('setModal', false)
    }
    return {hiddenModal}
  }
}


</script>

<style scoped lang="scss">
.modal {
  &-wrapper {
    position: fixed;
    z-index: 1000;
    left: 0;
    overflow: auto;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &-close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }

  &-content {
    position: relative;
    padding: 12px;
    min-height: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.1), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  }

  &-header {
    font-size: 33px;
    line-height: 36px
  }

  &-text {
    margin: 15px 0;
  }
}
</style>
