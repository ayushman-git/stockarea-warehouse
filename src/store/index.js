import { createStore } from "vuex";
import warehouses from "../assets/warehouse/warehouses.json";

export default createStore({
  state: {
    warehouses: warehouses,
  },
  mutations: {},
  actions: {},
  modules: {},
});
