<template>
  <div @click="clickHandler" class="edit-pin">
    <img src="../../assets/icons/edit.svg" alt="edit" />
  </div>
</template>

<script>
export default {
  name: "ModalPin",
  emits: ["click"],
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.edit-pin {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgb(155, 77, 202);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.edit-pin:hover {
  background-color: rgb(110, 45, 150);
}

.edit-pin > img {
  width: 45%;
}
</style>