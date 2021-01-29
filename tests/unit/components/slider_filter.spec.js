import { shallowMount } from "@vue/test-utils";
import SliderFilter from "@/components/FilterTool/SliderFilter/SliderFilter";

describe("SliderFilter", () => {
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
      filterType: "space",
    };
    wrapper = shallowMount(SliderFilter, {
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
  it("[SliderFilter] is loaded", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("[SliderFilter] filterType first letter is upper case", () => {
    expect(wrapper.text()).toContain("Space");
  });

  it("[SliderFilter] get maximum space_available value from store", () => {
    expect(wrapper.vm.getHighestValue).toBe(1234);
  });

  it("[SliderFilter] emits when slider is changed", async () => {
    const slider = wrapper.find(".slider-filter");
    await slider.setValue(50);

    expect(wrapper.emitted()).toHaveProperty("inp");
  });

  it("[SliderFilter] reset value to 1 when reset prop is true", async () => {
    const slider = wrapper.find(".slider-filter");
    await slider.setValue(50);
    await wrapper.setProps({ reset: true });
    await wrapper.vm.resetSlider();
    expect(wrapper.vm.selectedValue).toBe(1);
  });
});
