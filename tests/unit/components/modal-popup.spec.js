import { shallowMount } from "@vue/test-utils";
import ModalPopup from "@/components/ModalPopup/ModalPopup";

describe("ModalPopup", () => {
  it("[ModalPopup] is loaded", () => {
    const wrapper = shallowMount(ModalPopup);

    expect(wrapper.exists()).toBeTruthy();
  });

  it("[ModalPopup] closeModal is emitted on backdrop click", async () => {
    const wrapper = shallowMount(ModalPopup);
    const backdrop = wrapper.find(".backdrop");
    await backdrop.trigger("click");
    expect(wrapper.emitted().closeModal).toBeTruthy();
  });

  it("[ModalPopup] closeModal is emitted on backdrop click", async () => {
    const wrapper = shallowMount(ModalPopup);
    const backdrop = wrapper.find(".backdrop");
    await backdrop.trigger("click");
    expect(wrapper.emitted().closeModal).toBeTruthy();
  });
});
