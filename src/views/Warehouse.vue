<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Warehouse",
  props: ["id"],
  computed: {
    ...mapGetters(["getWarehouseById"]),
    getWarehouseDetail() {
      return this.getWarehouseById(this.id);
    },
  },
  mounted() {},
};
</script>
