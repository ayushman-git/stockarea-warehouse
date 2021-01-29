import getters from "@/store/getters/getters";

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
  it("[Getters] get warehouse using id", () => {
    const warehouse = getters.getWarehouseById(state)(2);
    expect(warehouse).toMatchObject(state.warehouses[1]);
  });
});
