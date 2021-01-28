import { shallowMount } from "@vue/test-utils";
import ModalPin from "@/components/ModalPin/ModalPin";

describe("ModalPin", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ModalPin);
  });
  afterEach(() => {
    wrapper = null;
  });
  it("[ModalPin] pin is loaded", () => {
    const pin = wrapper.find(".edit-pin");
    expect(pin.exists()).toBeTruthy();
  });
  it("[ModalPin] emitting click event", async () => {
    const pin = wrapper.find(".edit-pin");
    await pin.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
