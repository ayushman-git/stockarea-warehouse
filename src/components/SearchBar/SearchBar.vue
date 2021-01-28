<template>
  <input
    class="search-box"
    type="text"
    v-model="searchParam"
    :placeholder="placeholder"
    @keyup="searchBarHandler"
  />
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
  data() {
    return {
      searchParam: "",
    };
  },
  methods: {
    searchBarHandler() {
      this.searchParam = this.searchParam.toLowerCase();
      this.$emit("search", this.searchParam);
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