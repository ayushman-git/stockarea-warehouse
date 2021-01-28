import { shallowMount } from "@vue/test-utils";
import LiveStatus from "@/components/LiveStatus/LiveStatus";

describe("LiveStatus", () => {
  it("[LiveStatus] is loaded", () => {
    const wrapper = shallowMount(LiveStatus);

    expect(wrapper.exists()).toBeTruthy();
  });

  it("[LiveStatus] is green if prop is true", () => {
    const wrapper = shallowMount(LiveStatus, {
      propsData: { isLive: true },
    });

    expect(wrapper.vm.colorStatus).toMatchObject({
      "background-color": "green",
    });
  });

  it("[LiveStatus] is red if prop is false", () => {
    const wrapper = shallowMount(LiveStatus, {
      propsData: { isLive: false },
    });

    expect(wrapper.vm.colorStatus).toMatchObject({
      "background-color": "red",
    });
  });
});
