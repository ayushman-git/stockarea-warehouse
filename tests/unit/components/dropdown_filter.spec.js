import { shallowMount } from "@vue/test-utils";
import DropdownFilter from "@/components/FilterTool/DropdownFilter/DropdownFilter";

describe("DropdownFilter", () => {
  let $store;
  let wrapper;
  beforeEach(() => {
    $store = {
      state: {
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
      },
    };
    const props = {
      filterType: "city",
    };
    wrapper = shallowMount(DropdownFilter, {
      propsData: props,
      global: {
        mocks: {
          $store,
        },
      },
    });
  });
  afterEach(() => {
    wrapper = null;
    $store = null;
  });
  it("[DropdownFilter] is loaded", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("[DropdownFilter] filterType first letter is upper case", () => {
    expect(wrapper.text()).toContain("City");
  });

  it("[DropdownFilter] get unique city from the vuex store", () => {
    expect(wrapper.vm.getListDetail).toMatchObject(["Delhi", "Chennai"]);
  });

  it("[DropdownFilter] emits when dropdown is changed", async () => {
    const dropdown = wrapper.find(".dropdown-filter");
    await dropdown.setValue("Chennai");

    expect(wrapper.emitted()).toHaveProperty("inp");
  });

  it("[DropdownFilter] reset value to '' when reset prop is true", async () => {
    const dropdown = wrapper.find(".dropdown-filter");
    await dropdown.setValue("Chennai");
    await wrapper.setProps({ reset: true });
    await wrapper.vm.resetDropdown();
    expect(wrapper.vm.selectedOption).toBe("");
  });
});
