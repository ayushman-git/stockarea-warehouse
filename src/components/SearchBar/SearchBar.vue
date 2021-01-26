<template>
  <input class="search-box" type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "SeachBar",
  props: {
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.search-box {
  width: 50%;
  max-width: 700px;
  margin: 2rem auto;
}
</style>