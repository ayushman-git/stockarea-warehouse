import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import { shallowMount, flushPromises } from "@vue/test-utils";
import Home from "@/views/Home";

const filteredWarehouses = [
  {
    name: "Warehouse-3039",
    code: "W-00003",
    id: 3,
    city: "Indore",
    space_available: 134,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-324",
    code: "W-00004",
    id: 4,
    city: "Chennai",
    space_available: 12,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: {
        template: "Home",
      },
    },
    {
      path: "/warehouse/:id",
      name: "Warehouse",
      component: {
        template: "Warehouse",
      },
    },
  ],
});

const store = createStore({
  state() {
    return {
      warehouses: [],
    };
  },
  getters: {
    getFilteredWarehouses: () => () => {
      return filteredWarehouses;
    },
  },
});

describe("Home", () => {
  let wrapper;
  beforeEach(async () => {
    router.push("/");
    await router.isReady();
    wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router],
      },
    });
  });
  it("[Home] is loaded", async () => {
    await flushPromises();
    expect(wrapper.exists()).toBeTruthy();
  });

  it("[Home] changing payload based on search params", async () => {
    wrapper.vm.searchFilterParam = "16";
    wrapper.vm.cityFilterParam = "Chennai";
    await flushPromises();
    expect(wrapper.vm.filterParams).toMatchObject({
      name: ["16"],
      city: ["Chennai"],
    });
  });

  it("[Home] get filtered warehouses based on filterParams", async () => {
    wrapper.vm.searchFilterParam = "16";
    wrapper.vm.cityFilterParam = "Chennai";
    await flushPromises();
    expect(wrapper.vm.filteredWarehouses).toMatchObject(filteredWarehouses);
  });

  it("[Home] reset variables", async () => {
    wrapper.vm.cityFilterParam = "Chennai";
    await wrapper.vm.reset();
    await flushPromises();
    expect(wrapper.vm.cityFilterParam).toBeFalsy();
  });

  it("[Home] save search variable in searchParams", async () => {
    await wrapper.vm.searchHandler("16");
    await flushPromises();
    expect(wrapper.vm.searchFilterParam).toBe("16");
  });

  it("[Home] saving in the correct variable based on dropdown type", async () => {
    await wrapper.vm.dropdownHandler({ city: "Pune" });
    await flushPromises();
    expect(wrapper.vm.cityFilterParam).toBe("Pune");
  });
});
