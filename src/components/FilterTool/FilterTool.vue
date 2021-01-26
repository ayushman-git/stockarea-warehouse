<template>
  <aside class="filter-tool">
    <form>
      <label>
        City:
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FilterTool",
  computed: {
    // getListDetail() {},
    ...mapState(["warehouses"]),
  },
  mounted() {
    console.log();
  },
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>