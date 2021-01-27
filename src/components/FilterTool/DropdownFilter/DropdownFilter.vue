<template>
  <label>
    {{ filterType.charAt(0).toUpperCase() + filterType.slice(1) }}
    <select @change="dropdownHandler" v-model="selectedOption">
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
    return {
      selectedOption: "",
    };
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
  methods: {
    dropdownHandler() {
      this.$emit("inp", { [this.filterType]: this.selectedOption });
    },
  },
};
</script>

<style scoped>
.filter-tool {
  position: fixed;
}
</style>