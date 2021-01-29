<template>
  <modal-popup v-if="showModal" @closeModal="closeModalHandler">
    <form class="modal-form">
      <label>
        Name:
        <input type="text" v-model="newWarehouseName" />
      </label>
      <label>
        City:
        <input type="text" v-model="newWarehouseCity" />
      </label>
      <label>
        Type:
        <input type="text" v-model="newWarehouseType" />
      </label>
      <label>
        Cluster:
        <input type="text" v-model="newWarehouseCluster" />
      </label>
      <label>
        Space Available:
        <input type="number" v-model="newSpaceAmount" />
      </label>
      <label>
        Live:
        <input type="radio" name="live" v-model="newLiveStatus" :value="true" />
        True
        <input
          type="radio"
          name="live"
          v-model="newLiveStatus"
          :value="false"
        />
        False
      </label>
      <label>
        Registered:
        <input
          type="radio"
          name="registered"
          :value="true"
          v-model="newRegisteredValue"
        />
        True
        <input
          type="radio"
          name="registered"
          :value="false"
          v-model="newRegisteredValue"
        />
        False
      </label>
      <footer>
        <button @click.prevent="editWarehouse">Edit</button>
      </footer>
    </form>
  </modal-popup>
</template>

<script>
import { mapMutations } from "vuex";
import ModalPopup from "@/components/ModalPopup/ModalPopup";

export default {
  name: "WarehouseEditForm",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    getWarehouseDetail: {
      type: Object,
    },
  },
  emits: ["closeModal"],
  components: {
    "modal-popup": ModalPopup,
  },
  data() {
    return {
      newWarehouseName: "",
      newWarehouseCity: "",
      newWarehouseType: "",
      newWarehouseCluster: "",
      newSpaceAmount: null,
      newLiveStatus: false,
      newRegisteredValue: false,
    };
  },
  mounted() {
    this.revertChanges();
  },
  methods: {
    editWarehouse() {
      const payload = { id: this.getWarehouseDetail.id };
      if (this.getWarehouseDetail.name != this.newWarehouseName) {
        payload.name = this.newWarehouseName;
      }
      if (this.getWarehouseDetail.city != this.newWarehouseCity) {
        payload.city = this.newWarehouseCity;
      }
      if (this.getWarehouseDetail.type != this.newWarehouseType) {
        payload.type = this.newWarehouseType;
      }
      if (this.getWarehouseDetail.cluster != this.newWarehouseCluster) {
        payload.cluster = this.newWarehouseCluster;
      }
      if (this.getWarehouseDetail.is_registered != this.newRegisteredValue) {
        payload.is_registered = this.newRegisteredValue;
      }
      if (this.getWarehouseDetail.is_live != this.newLiveStatus) {
        payload.is_live = this.newLiveStatus;
      }
      if (this.getWarehouseDetail.space_available != this.newSpaceAmount) {
        payload.space_available = Number(this.newSpaceAmount);
      }
      this.editWarehouseDetail(payload);
      this.closeModalHandler();
    },
    closeModalHandler() {
      this.revertChanges();
      this.$emit("closeModal");
    },
    revertChanges() {
      this.newWarehouseName = this.getWarehouseDetail.name;
      this.newWarehouseCity = this.getWarehouseDetail.city;
      this.newWarehouseType = this.getWarehouseDetail.type;
      this.newWarehouseCluster = this.getWarehouseDetail.cluster;
      this.newSpaceAmount = this.getWarehouseDetail.space_available;
      this.newLiveStatus = this.getWarehouseDetail.is_live;
      this.newRegisteredValue = this.getWarehouseDetail.is_registered;
    },
    ...mapMutations({ editWarehouseDetail: "EDIT_WAREHOUSE_DETAIL" }),
  },
};
</script>

<style scoped>
.modal-form {
  padding: 2rem;
  color: white;
  /* display: flex;
  flex-flow: column nowrap;
  align-items: center; */
}
.modal-form input {
  color: white;
}

footer {
  display: flex;
  justify-content: center;
}
</style>