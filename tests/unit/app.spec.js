import { mount } from "@vue/test-utils"
import App from "@/App.vue"
const { createTransformer } = require("ts-jest")
const tr = createTransformer()
const configSet = tr.configsFor(config)
const tsConfig = configSet.typescript || configSet.parsedTsConfig
// describe("App", () => {
//   // Inspect the raw component options
//   it("has data", () => {
//     expect(wrapper).toBe("function");
//   });
// });

describe("Mounted App", () => {
    const wrapper = mount(App)

    it("should have text", () => {
        expect(wrapper.text()).toBeGreaterThan(0)
    })

    // test("is a Vue instance", () => {
    //   expect(wrapper.isVueInstance()).toBeTruthy();
    // });

    // it("renders the correct markup", () => {
    //   expect(wrapper.html()).toContain(
    //     "<p>What is the sum of the two numbers?</p>"
    //   );
    // });

    // it's also easy to check for the existence of elements
    // it("has a buttons", () => {
    //   expect(wrapper.contains("button")).toBe(true);
    // });
})
