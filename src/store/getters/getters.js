export default {
  getWarehouseById: (state) => (id) => {
    return state.warehouses.find((warehouse) => warehouse.id == id);
  },
};
