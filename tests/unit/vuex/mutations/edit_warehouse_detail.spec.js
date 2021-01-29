import mutations from "@/store/mutations/mutations";

const state = {
  warehouses: [
    {
      name: "Warehouse-165",
      code: "W-00001",
      id: 1,
      city: "Delhi",
      space_available: 1234,
      type: "Leasable Space",
      cluster: "cluster-a-32",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-276",
      code: "W-00002",
      id: 2,
      city: "Chennai",
      space_available: 124,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
  ],
};

describe("getWarehouseById", () => {
  it("[Mutations] edit warehouse based on input", () => {
    const payload = {
      name: "Warehouse-276",
      code: "W-00002",
      id: 2,
      city: "Pune",
      space_available: 3213,
      type: "Warehouse Service",
      cluster: "cluster-a-777",
      is_registered: true,
      is_live: true,
    };
    mutations.EDIT_WAREHOUSE_DETAIL(state, payload);
    expect(state.warehouses[1]).toMatchObject(payload);
  });
});
