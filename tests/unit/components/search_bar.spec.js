import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar/SearchBar";

describe("SearchBar", () => {
  let wrapper;
  const prop = {
    placeholder: "Enter warehouse name",
  };
  beforeEach(() => {
    wrapper = shallowMount(SearchBar, {
      propsData: prop,
    });
  });
  afterEach(() => {
    wrapper = null;
  });
  it("[SearchBar] entering in input field updates searchParam", async () => {
    const input = wrapper.find("input");
    await input.setValue("16");
    expect(wrapper.vm.searchParam).toEqual("16");
  });
  it("[SearchBar] search parameter gets lower cased", async () => {
    const input = wrapper.find("input");
    await input.setValue("Warehouse");
    wrapper.vm.searchBarHandler();
    expect(wrapper.vm.searchParam).toEqual("warehouse");
  });
  it("[SearchBar] emitting search parameter", async () => {
    const input = wrapper.find("input");
    await input.setValue("Warehouse");
    wrapper.vm.searchBarHandler();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().search[0]).toEqual(["warehouse"]);
  });
});
