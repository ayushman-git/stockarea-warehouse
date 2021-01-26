<template>
  <label>
    {{ filterType.charAt(0).toUpperCase() + filterType.slice(1) }}
    <select>
      <option
        v-for="(el, index) in getListDetail"
        :key="{ index }"
        :value="el.toLowerCase()"
      >
        {{ el }}
      </option>
    </select>
  </label>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DropdownFilter",
  props: {
    filterType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getListDetail() {
      const result = [];
      this.warehouses.forEach((warehouse) => {
        if (!result.includes(warehouse[this.filterType]))
          result.push(warehouse[this.filterType]);
      });
      return result;
    },
    ...mapState(["warehouses"]),
  },
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>