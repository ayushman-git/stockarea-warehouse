<template>
  <div class="warehouse-view">
    <h1>Warehouse Detail</h1>
    <section class="warehosue-view-card-wrap">
      <WarehouseCard
        :card="false"
        :name="getWarehouseDetail.name"
        :isLive="getWarehouseDetail.is_live"
        :isRegistered="getWarehouseDetail.is_registered"
        :city="getWarehouseDetail.city"
        :space="getWarehouseDetail.space_available"
        :type="getWarehouseDetail.type"
        :cluster="getWarehouseDetail.cluster"
        @pinClick="showModal = true"
      />
    </section>
    <WarehouseEditForm
      :getWarehouseDetail="getWarehouseDetail"
      :showModal="showModal"
      @closeModal="showModal = false"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import WarehouseCard from "@/components/WarehouseCard/WarehouseCard";
import WarehouseEditForm from "../components/ModalPopup/WarehouseEditForm/WarehosueEditForm";
export default {
  name: "Warehouse",
  props: ["id"],
  components: {
    WarehouseCard,
    WarehouseEditForm,
  },
  data() {
    return {
      showModal: false,
    };
  },

  computed: {
    ...mapGetters(["getWarehouseById"]),
    getWarehouseDetail() {
      return this.getWarehouseById(this.id);
    },
  },
};
</script>

<style scoped>
.warehouse-view {
  color: rgb(221, 221, 221);
}

.warehouse-view > h1 {
  text-align: center;
}

.warehosue-view-card-wrap {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
