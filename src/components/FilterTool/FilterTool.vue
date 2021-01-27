<template>
  <aside class="filter-tool">
    <form>
      <DropdownFilter @inp="inputHandler" filterType="city" />
      <DropdownFilter @inp="inputHandler" filterType="cluster" />
      <DropdownFilter @inp="inputHandler" filterType="type" />
      <SliderFilter @inp="inputHandler" filterType="space" />
    </form>
  </aside>
</template>

<script>
import DropdownFilter from "./DropdownFilter/DropdownFilter";
import SliderFilter from "./SliderFilter/SliderFilter";
export default {
  name: "FilterTool",
  components: {
    DropdownFilter,
    SliderFilter,
  },
  methods: {
    inputHandler(inpParam) {
      this.$emit("dropdown", inpParam);
    },
  },
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>