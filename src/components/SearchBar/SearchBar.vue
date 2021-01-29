<template>
  <input
    class="search-box"
    type="text"
    v-model="searchParam"
    :placeholder="placeholder"
    @keyup="addTimeout"
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
  emits: ["search"],
  data() {
    return {
      searchParam: "",
      intervalHolder: null,
    };
  },
  methods: {
    addTimeout() {
      clearTimeout(this.intervalHolder);
      this.intervalHolder = setTimeout(() => {
        this.searchBarHandler();
      }, 1000);
    },
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
  margin-top: 5rem;
  background-color: rgb(236, 236, 236);
}
</style>