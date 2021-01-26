<template>
  <div @click="changeStatus" :style="colorStatus"></div>
</template>

<script>
export default {
  name: "LiveStatus",
  props: {
    isLive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorStatus() {
      if (this.isLive) {
        return { "background-color": "green" };
      } else return { "background-color": "red" };
    },
  },
  methods: {},
};
</script>

<style scoped>
div {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: black;
  margin: 0 2rem;
}
</style>