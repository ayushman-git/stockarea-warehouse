<template>
  <aside class="filter-tool">
    <form>
      <DropdownFilter filterType="city" />
      <DropdownFilter filterType="cluster" />
      <DropdownFilter filterType="type" />
      <SliderFilter filterType="space" />
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
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>