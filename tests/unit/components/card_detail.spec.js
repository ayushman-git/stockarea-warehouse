import { shallowMount } from "@vue/test-utils";
import CardDetail from "@/components/CardDetail/CardDetail";

describe("Card Detail", () => {
  let wrapper;
  const prop = {
    warehouseDetail: { city: "Chennai" },
  };
  beforeEach(() => {
    wrapper = shallowMount(CardDetail, {
      propsData: prop,
    });
  });
  afterEach(() => {
    wrapper = null;
  });
  it("[CardDetail] displaying prop", () => {
    expect(wrapper.text()).toContain(prop.warehouseDetail.city);
  });
  it("[CardDetail] displaying title with first letter being uppercase", () => {
    expect(wrapper.vm.detailTitle).toBe("City");
  });
});
