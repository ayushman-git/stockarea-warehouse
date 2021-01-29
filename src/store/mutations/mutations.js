export default {
  EDIT_WAREHOUSE_DETAIL(state, payload) {
    const warehouseIndex = state.warehouses.findIndex(
      (warehouse) => warehouse.id == payload.id
    );

    for (const detail in payload) {
      state.warehouses[warehouseIndex][detail] = payload[detail];
    }
  },
};
