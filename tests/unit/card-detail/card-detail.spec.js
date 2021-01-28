import { shallowMount } from "@vue/test-utils";
import CardDetail from "@/components/CardDetail/CardDetail";

test("[CardDetail] displaying prop", () => {
  const prop = {
    warehouseDetail: { city: "Chennai" },
  };
  const wrapper = shallowMount(CardDetail, {
    propsData: prop,
  });

  expect(wrapper.text()).toContain(prop.warehouseDetail.city);
});

test("[CardDetail] displaying title with first letter being uppercase", () => {
  const prop = {
    warehouseDetail: { city: "Chennai" },
  };
  const wrapper = shallowMount(CardDetail, {
    propsData: prop,
  });

  expect(wrapper.vm.detailTitle).toBe("City");
});
