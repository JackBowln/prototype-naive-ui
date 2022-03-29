<template>
  <div class="flex shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-md p-3 mb-3">
    <v-chart class="chart" autoresize :option="option" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue"

  import { use } from "echarts/core"
  import { CanvasRenderer } from "echarts/renderers"
  import { BarChart } from "echarts/charts"
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from "echarts/components"
  import VChart, { THEME_KEY } from "vue-echarts"
  import { ref } from "vue"

  use([
    CanvasRenderer,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    BarChart,
  ])

  export default defineComponent({
    setup() {
      const option = ref({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [],
          },
        ],
        yAxis: [
          {
            type: "",
          },
        ],
        series: [
          {
            name: "Aguardando aprovação",
            type: "bar",
            stack: "Ad",
            barWidth: 50,
            animation: true,
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Aprovação/Manual",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Aprovado/Auto",
            type: "bar",
            barWidth: 50,
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [62, 73, 71, 74, 109, 113, 110],
          },
          {
            name: "Descartado/Manual",
            type: "bar",
            stack: "Ad",
            barWidth: 50,
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 290, 230, 220],
          },
          {
            name: "Descartado/Auto",
            type: "bar",
            stack: "Ad",
            barWidth: 50,
            emphasis: {
              focus: "series",
            },
            data: [70, 72, 71, 74, 190, 130, 110],
          },
        ],
      })
      return {
        option,
      }
    },
  })
</script>

<style scoped>
  .chart {
    height: 200px;
    width: 100%;
  }
</style>
