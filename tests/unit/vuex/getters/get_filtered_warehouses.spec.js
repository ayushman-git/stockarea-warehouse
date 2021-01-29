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
    {
      name: "Warehouse-324",
      code: "W-00004",
      id: 3,
      city: "Chennai",
      space_available: 12,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
  ],
};

describe("getFilteredWarehouses", () => {
  it("[Getters] filter warehouses based on parameters", () => {
    const payload = { city: ["Chennai"] };
    const warehouse = getters.getFilteredWarehouses(state)(payload);
    expect(warehouse).toMatchObject([
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
      {
        name: "Warehouse-324",
        code: "W-00004",
        id: 3,
        city: "Chennai",
        space_available: 12,
        type: "Leasable Space",
        cluster: "cluster-a-21",
        is_registered: true,
        is_live: false,
      },
    ]);
  });
});
