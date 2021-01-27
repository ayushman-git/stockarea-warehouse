<template>
  <label>
    {{ filterType.charAt(0).toUpperCase() + filterType.slice(1) }} <br />
    <input
      class="slider-filter"
      type="range"
      min="1"
      :max="getHighestValue"
      v-model="selectedValue"
      @change="sliderHandler"
    />
    <p class="slider-value">
      {{ selectedValue }}
    </p>
  </label>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SliderFilter",
  props: {
    filterType: {
      type: String,
      required: true,
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sliderValue: this.filterType === "space" ? "space_available" : "",
      selectedValue: 1,
    };
  },
  computed: {
    getHighestValue() {
      const numArr = this.warehouses.map((warehouse) => {
        return warehouse[this.sliderValue];
      });
      return Math.max(...numArr);
    },
    ...mapState(["warehouses"]),
  },
  methods: {
    sliderHandler() {
      this.$emit("inp", { space: this.selectedValue });
    },
  },
  beforeUpdate() {
    if (this.reset) {
      this.selectedValue = 1;
    }
  },
};
</script>

<style scoped>
.slider-filter {
  width: 100%;
}

.slider-value {
  text-align: center;
}
</style>