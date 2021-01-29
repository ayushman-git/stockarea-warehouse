import { createStore } from "vuex";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

import warehouses from "../assets/warehouse/warehouses.json";

export default createStore({
  state: {
    warehouses: warehouses,
  },
  getters: getters,
  mutations: mutations,
});
