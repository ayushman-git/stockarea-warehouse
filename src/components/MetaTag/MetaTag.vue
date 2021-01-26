<template>
  <div class="meta-tag">{{ showTitle }}</div>
</template>

<script>
export default {
  name: "MetaTag",
  props: {
    isRegistered: {
      type: Boolean,
      default: false,
    },
    metaType: {
      type: String,
      default: "registered",
    },
  },
  computed: {
    showTitle() {
      if (this.metaType === "registered") {
        if (this.isRegistered) {
          return "Registered";
        }
        return "Not Registered";
      }
      return "Undefined";
    },
  },
};
</script>

<style scoped>
.meta-tag {
  user-select: none;
  background-color: rgba(207, 207, 207, 0.4);
  border-radius: 999px;
  padding: 1rem;
  font-size: 1.2rem;
}
</style>