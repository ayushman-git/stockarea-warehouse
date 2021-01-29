export default {
  getWarehouseById: (state) => (id) => {
    return state.warehouses.find((warehouse) => warehouse.id == id);
  },
  getFilteredWarehouses: (state) => (filterParams) => {
    const filterKeys = Object.keys(filterParams);
    const result = state.warehouses.filter((warehouse) => {
      return filterKeys.every((key) => {
        if (!filterParams[key].length) {
          return true;
        }
        return filterParams[key].find((filter) => {
          if (key === "space_available") {
            return warehouse[key] >= filter;
          } else {
            return warehouse[key].toLowerCase().includes(filter.toLowerCase());
          }
        });
      });
    });
    return result;
  },
};
