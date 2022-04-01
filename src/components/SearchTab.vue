<template>
    <div class="w-[25%] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-3">
        <div class="flex flex-col gap-2">
            <n-select
                class="select--blue"
                v-model:value="value"
                :options="options"
                :default-value="options[0].value"
                :fallback-value="trim(options[0].label)"
            />
            <n-input round placeholder="Flash">
                <template #suffix>
                    <n-icon :component="Search" />
                </template>
            </n-input>
            <n-select v-model:value="value" :options="options" size="small" />
        </div>
        <n-table class="max-h-[600px] mt-3">
            <n-scrollbar
                tag="teste"
                y-scrollable
                class="max-h-[500px] relative"
            >
                <thead class="w-full">
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>População</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr v-for="(data, i) in countries" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ data.name.common }}</td>
                        <td>
                            {{
                                new Intl.NumberFormat("pt-PT", {
                                    style: "unit",
                                    unit: "kilometer",
                                }).format(data.area)
                            }}²
                        </td>
                        <td class="text-center">
                            {{ (data.population / 1000000).toFixed(2) }} M
                        </td>
                    </tr>
                </tbody>
            </n-scrollbar>
        </n-table>
        <n-data-table ref="table" :columns="columns" :data="countries" />
    </div>
</template>
<script setup lang="ts">
    import { computed, reactive, ref } from "vue"
    import { Search } from "@vicons/ionicons5"
    import { SelectOption } from "naive-ui"
    import { useApi } from "../stores/api"

    const store = useApi()
    store.fetchCountries()
    const countries = computed(() => store.countriesData)

    const columns = [
        {
            title: "Nome",
            key: "name",
            sorter: "default",
        },
        {
            title: "Area",
            key: "area",
            sorter: "default",
        },
        {
            title: "População",
            key: "population",
            sorter: (
                row1: { population: number },
                row2: { population: number }
            ) => row1.population - row2.population,
        },
    ]
    const value = ref(null)
    const options = reactive([
        {
            label: "Analistas por Aprovação",
            value: 0,
        },
        {
            label: "Aguardando por Aprovação",
            value: 1,
        },
    ])
    const trim = (value: string): SelectOption => {
        return {
            label: "teste",
            value,
        }
    }
</script>
<style lang="scss" scoped>
    .select--blue {
        &::v-deep(.n-base-selection-label) {
            background-color: #30a7cf;
        }
        &::v-deep(.n-base-selection__border) {
            border-color: transparent;
        }
    }
    .select--blue {
        ::v-deep(.n-base-selection-placeholder) {
            color: #fff;
        }
    }
</style>
