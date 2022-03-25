import { mount } from '@vue/test-utils'
import Header from "@/components/Header.vue"
describe('Header.vue', () => {
  const wrapper = mount(Header)
  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toBe("Header")
  })
})
