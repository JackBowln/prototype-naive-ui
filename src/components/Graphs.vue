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
                        data: [128.9, 140.9, 129.9, 130.9, 135.9, 118.9, 120.9],

                        itemStyle: {
                            barBorderRadius: [10, 10, 0, 0],
                        },
                    },
                    {
                        name: "Aprovação/Manual",
                        type: "bar",
                        stack: "Ad",
                        emphasis: {
                            focus: "series",
                        },
                        data: [90.2, 98.2, 97.2, 98.2, 102.2, 83.2, 80.2],
                    },
                    {
                        name: "Aprovado/Auto",
                        type: "bar",
                        barWidth: 50,
                        stack: "Ad",
                        emphasis: {
                            focus: "series",
                        },
                        data: [52, 67, 58, 59, 64, 47, 49],
                    },
                    {
                        name: "Descartado/Manual",
                        type: "bar",
                        stack: "Ad",
                        barWidth: 50,
                        emphasis: {
                            focus: "series",
                        },
                        data: [30, 45, 36, 37, 42, 25, 27],
                    },
                    {
                        name: "Descartado/Auto",
                        type: "bar",
                        stack: "Ad",
                        barWidth: 50,
                        emphasis: {
                            focus: "series",
                        },
                        data: [10, 25, 16, 17, 22, 5, 7],
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
