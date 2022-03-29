// import Input from "@/components/Input"
import Input from "../../src/components/Input.vue"
import { mount } from "@vue/test-utils";

describe('Mount input', () => {
    const wrapper = mount(Input)
    // it('should be vue instance', () => {
    //     expect(wrapper.isVueInstance()).toBeTruthy();
    // });
    it('should exists', () => {
        expect(wrapper.text()).toContain("<input")
    });
});
