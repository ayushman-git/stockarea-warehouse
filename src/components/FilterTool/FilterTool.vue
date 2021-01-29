<template>
  <aside class="filter-tool">
    <form>
      <DropdownFilter @inp="inputHandler" :reset="reset" filterType="city" />
      <DropdownFilter @inp="inputHandler" :reset="reset" filterType="cluster" />
      <DropdownFilter @inp="inputHandler" :reset="reset" filterType="type" />
      <SliderFilter @inp="inputHandler" :reset="reset" filterType="space" />
      <button class="reset-btn" @click.prevent="resetHandler" :reset="reset">
        Reset
      </button>
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
  emits: ["dropdown", "reset"],
  data() {
    return {
      reset: false,
    };
  },
  methods: {
    inputHandler(inpParam) {
      this.reset = false;
      this.$emit("dropdown", inpParam);
    },
    resetHandler() {
      this.reset = true;
      this.$emit("reset");
    },
  },
};
</script>

<style scoped>
.filter-tool {
  position: sticky;
  top: 5rem;
}
.reset-btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>