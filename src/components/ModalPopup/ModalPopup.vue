<template>
  <section class="modal-wrap">
    <div class="backdrop" @click="closeHandler"></div>
    <article class="slot-wrap">
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {
  name: "ModalPopup",
  methods: {
    closeHandler() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.modal-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.backdrop {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
}
.slot-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  max-width: 740px;
  background-color: rgb(24, 24, 24);
  border-radius: 30px;
}
</style>