import { shallowMount } from "@vue/test-utils";
import FilterTool from "@/components/FilterTool/FilterTool";

describe("FilterTool", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(FilterTool);
  });
  afterEach(() => {
    wrapper = null;
  });
  it("[FilterTool] is laoded", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("[FilterTool] emitting selected input when childs emit input", async () => {
    wrapper.vm.inputHandler();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().dropdown).toBeTruthy();
  });

  it("[FilterTool] emitting reset when user click button", async () => {
    const button = wrapper.find(".reset-btn");
    await button.trigger("click");
    expect(wrapper.emitted().reset).toBeTruthy();
  });

  it("[FilterTool] reset equals to false when input event captured", () => {
    wrapper.vm.inputHandler();
    expect(wrapper.vm.reset).toBeFalsy();
  });

  it("[FilterTool] reset equals to true when reset button is clicked", async () => {
    const button = wrapper.find(".reset-btn");
    await button.trigger("click");
    expect(wrapper.vm.reset).toBeTruthy();
  });
});
