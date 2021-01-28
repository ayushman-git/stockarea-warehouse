import { shallowMount } from "@vue/test-utils";
import MetaTag from "@/components/MetaTag/MetaTag";

describe("MetaTag", () => {
  it("[MetaTag] is loaded", () => {
    const wrapper = shallowMount(MetaTag);

    expect(wrapper.exists()).toBeTruthy();
  });
  it("[MetaTag] display status if prop is true", () => {
    const wrapper = shallowMount(MetaTag, {
      propsData: { isRegistered: true },
    });

    expect(wrapper.text()).toContain("Registered");
  });

  it("[MetaTag] display status if prop is false", () => {
    const wrapper = shallowMount(MetaTag, {
      propsData: { isRegistered: false },
    });

    expect(wrapper.text()).toContain("Not Registered");
  });

  it("[MetaTag] display prop if metaType is incorrect", () => {
    const wrapper = shallowMount(MetaTag, {
      propsData: { isRegistered: false, metaType: "Regulated" },
    });

    expect(wrapper.vm.showTitle).toContain("Regulated");
  });
});
