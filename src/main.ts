import { createApp } from "vue"
import { createPinia } from 'pinia'

import App from "./App.vue"
import "./index.css"
import router from "./router"
import ECharts from "vue-echarts"
import naive from "naive-ui"

import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { BarChart } from "echarts/charts"
import { GridComponent, TooltipComponent } from "echarts/components"

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
const app = createApp(App)
app.component("v-chart", ECharts)
app.use(router)
app.use(naive);
app.mount("#app")
app.use(createPinia())
