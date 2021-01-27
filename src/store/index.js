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
  mutations: {},
  actions: {},
  modules: {},
});
