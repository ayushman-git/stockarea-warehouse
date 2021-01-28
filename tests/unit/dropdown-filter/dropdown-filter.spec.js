import { shallowMount } from "@vue/test-utils";
import DropdownFilter from "@/components/FilterTool/DropdownFilter/DropdownFilter";

test("[DropdownFilter] displaying label with first letter being uppercase", () => {
  const prop = {
    filterType: "cluster",
  };
  const wrapper = shallowMount(DropdownFilter, {
    propsData: prop,
    mocks: {
      $store: {
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
    },
  });

  expect(wrapper.text()).toContain("Cluster");
});
