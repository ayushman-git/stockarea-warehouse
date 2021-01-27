import { createStore } from "vuex";
import warehouses from "../assets/warehouse/warehouses.json";

export default createStore({
  state: {
    warehouses: warehouses,
  },
  getters: {
    getWarehouseById: (state) => (id) => {
      return state.warehouses.find((warehouse) => warehouse.id == id);
    },
  },
  mutations: {
    EDIT_WAREHOUSE_DETAIL(state, payload) {
      const warehouseIndex = state.warehouses.findIndex(
        (warehouse) => warehouse.id == payload.id
      );

      for (const detail in payload) {
        state.warehouses[warehouseIndex][detail] = payload[detail];
      }

      console.log(state.warehouses);

      // state.warehouses[warehouseIndex] = { ...payload };
    },
  },
  actions: {},
  modules: {},
});
