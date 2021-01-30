import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";
import Warehouse from "@/views/Warehouse";

const store = createStore({
  state() {
    return {
      warehouses: [],
    };
  },
  getters: {
    getWarehouseById: () => () => {
      return {
        name: "Warehouse-324",
        code: "W-00004",
        id: 4,
        city: "Chennai",
        space_available: 12,
        type: "Leasable Space",
        cluster: "cluster-a-21",
        is_registered: true,
        is_live: false,
      };
    },
  },
});

describe("Warehouse", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Warehouse, {
      global: {
        plugins: [store],
      },
    });
  });
  afterEach(() => {
    wrapper = null;
  });
  it("[Warehouse] is loaded", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("[Warehouse] gets correct object based on id", () => {
    expect(wrapper.vm.getWarehouseDetail).toMatchObject({
      name: "Warehouse-324",
      code: "W-00004",
      id: 4,
      city: "Chennai",
      space_available: 12,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    });
  });
});
