<template>
  <section class="warehouse-card">
    <header class="warehouse-card-header">
      <div class="warehouse-card-name-status">
        <h2>{{ name }}</h2>
        <LiveStatus :isLive="isLive" />
      </div>
      <MetaTag :isRegistered="isRegistered" />
    </header>
  </section>
</template>

<script>
import LiveStatus from "@/components/LiveStatus/LiveStatus";
import MetaTag from "@/components/MetaTag/MetaTag";
export default {
  name: "WarehouseCard",
  components: { LiveStatus, MetaTag },
  props: {
    name: {
      type: String,
      required: true,
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.warehouse-card {
  background-color: white;
  border-radius: 20px;
  width: 800px;
  padding: 1rem;
  transition: all 0.4s ease 0s;
  margin: 2rem;
}

.warehouse-card:hover {
  box-shadow: rgba(52, 55, 65, 0.12) 0px 15px 15px 0px,
    rgba(52, 55, 65, 0.17) 0px 4px 8px 0px;
}
.warehouse-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.warehouse-card-name-status {
  display: flex;
  align-items: center;
}

.warehouse-card-name-status > h2 {
  margin-bottom: 0;
}
</style>