<template>
  <aside class="filter-tool">
    <form>
      <DropdownFilter filterType="city" />
      <DropdownFilter filterType="cluster" />
      <DropdownFilter filterType="type" />
    </form>
  </aside>
</template>

<script>
import DropdownFilter from "@/components/DropdownFilter/DropdownFilter";
export default {
  name: "FilterTool",
  components: {
    DropdownFilter,
  },
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>