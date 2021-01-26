<template>
  <section class="warehouse-card">
    <header class="warehouse-card-header">
      <div class="warehouse-card-name-status">
        <h2>{{ name }}</h2>
        <LiveStatus :isLive="isLive" />
      </div>
      <MetaTag :isRegistered="isRegistered" />
    </header>
    <section class="warehouse-detail-wrap">
      <CardDetail :warehouseDetail="{ city: city }" />
      <CardDetail :warehouseDetail="{ space: space }" />
      <CardDetail :warehouseDetail="{ type: type }" />
      <CardDetail :warehouseDetail="{ cluster: cluster }" />
    </section>
  </section>
</template>

<script>
import LiveStatus from "@/components/LiveStatus/LiveStatus";
import MetaTag from "@/components/MetaTag/MetaTag";
import CardDetail from "@/components/CardDetail/CardDetail";
export default {
  name: "WarehouseCard",
  components: { LiveStatus, MetaTag, CardDetail },
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
    city: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    cluster: {
      type: String,
      required: true,
    },
    space: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.warehouse-card {
  background-color: white;
  border-radius: 20px;
  padding: 3rem 4rem;
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
  margin-bottom: 1rem;
}
.warehouse-card-name-status {
  display: flex;
  align-items: center;
}

.warehouse-card-name-status > h2 {
  margin-bottom: 0;
}

.warehouse-detail-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>