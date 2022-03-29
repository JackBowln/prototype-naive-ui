import Card from "@/components/Card.vue"
import { mount } from "@vue/test-utils"
describe("render card", () => {
    const wrapper = mount(Card)
    it("should be vue instance =", () => {
        expect(wrapper.text()).toBe("CARD")
    })
})
