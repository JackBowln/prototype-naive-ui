<template>
    <div class="rounded-md p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
        <div class="flex justify-between mb-4 font-bold">
            <div class="pt-2 text-xl leading-3">{{ title }}</div>
            <div class="flex gap-3 w-[50%]">
                <n-input
                    round
                    placeholder="Buscar"
                    size="small"
                    class="h-8 w-40[!important]"
                >
                    <template #suffix>
                        <n-icon :component="Search" />
                    </template>
                </n-input>
                <div class="flex items-center gap-2">
                    <div class="font-light w-[98px]">Somente Ativos</div>
                    <n-switch
                        size="small"
                        v-model:value="isOnlyActives"
                        @update:value="handleChange"
                    />
                </div>
                <n-select
                    class="select--blue"
                    v-model:value="value"
                    :options="options"
                    :default-value="options[0].value"
                    size="small"
                />
                <n-select
                    v-model:value="value2"
                    :options="options"
                    size="small"
                />
            </div>
        </div>
        <n-scrollbar x-scrollable class="py-3">
            <div
                class="flex flex-row overflow-x-auto overflow-y-hidden text-xs"
            >
                <n-skeleton
                    v-for="i in Card.length"
                    v-if="loading"
                    :width="146"
                    :height="186"
                    :sharp="false"
                    class="mr-4"
                    size="medium"
                />
                <div
                    v-for="(item, i) in Card"
                    class="w-[165px] mx-1 border border-gray-300 rounded-xl h-[186px] flex flex-col gap-2 relative"
                    v-show="showDisabled(item.isDisabled)"
                >
                    <div
                        v-if="item.isDisabled"
                        class="absolute w-full h-full bg-gray-300 opacity-60 rounded-xl"
                    ></div>
                    <div class="p-2 border-b border-gray-300">
                        <h4 class="font-bold first-letter:uppercase">
                            {{ item.title }} {{ i }}
                        </h4>
                        <small
                            :class="
                                item.isDisabled
                                    ? 'text-gray-300 z-10'
                                    : 'text-gray-300'
                            "
                            >{{ item.label }}</small
                        >
                    </div>
                    <div class="px-4">
                        <div class="flex items-center border-b border-gray-300">
                            <div class="flex items-cente">
                                <strong class="mr-1 text-lg">{{
                                    item.collects
                                }}</strong>
                                <div
                                    :class="
                                        item.isDisabled
                                            ? 'text-white z-10'
                                            : 'text-gray-300'
                                    "
                                >
                                    Coletas
                                </div>
                            </div>
                            <div class="ml-5" v-show="item.isDisabled">
                                <DisabledIcon />
                            </div>
                        </div>
                        <div
                            class="flex justify-between py-2 border-b border-gray-300"
                        >
                            <div class="flex flex-col">
                                <strong class="text-sm">{{
                                    item.approves
                                }}</strong>
                                <div
                                    :class="
                                        item.isDisabled
                                            ? 'text-white z-10'
                                            : 'text-gray-300'
                                    "
                                >
                                    Aprovações
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <strong class="text-sm">{{
                                    item.disaproves
                                }}</strong>
                                <div
                                    :class="
                                        item.isDisabled
                                            ? 'text-white z-10'
                                            : 'text-gray-300'
                                    "
                                >
                                    Descartes
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div
                                :class="
                                    item.isDisabled
                                        ? 'text-white z-10'
                                        : 'text-gray-300'
                                "
                            >
                                Ultima Coleta
                            </div>
                            <strong class="text-right">
                                {{ item.lastCollect }}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </n-scrollbar>
    </div>
</template>

<script setup lang="ts">
    import { onUpdated, onMounted, reactive, Ref, ref } from "vue"
    import DisabledIcon from "./icons/DisabledIcon.vue"
    import { Search } from "@vicons/ionicons5"
    import type { iCard } from "../types/index"
    interface Props {
        Card: iCard[]
        title: string
    }
    defineProps<Props>()
    const isOnlyActives: Ref<Boolean> = ref(false)
    let loading: Ref<Boolean> = ref(true)
    const value = ref(null)
    const value2 = ref(null)
    const handleChange = () => {
        loading.value = true
        hideSkeleton()
    }
    const showDisabled = (isDisabled) => {
        if (isDisabled && isOnlyActives.value) {
            return false
        }
        return true
    }
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
    const hideSkeleton = () => {
        setTimeout(() => (loading.value = false), 500)
        console.log("loading ", loading)
    }
    onMounted(() => {
        setTimeout(() => (loading.value = false), 500)
    })
    onUpdated(() => {
        setTimeout(() => (loading.value = false), 500)
    })
</script>

<style lang="scss" scoped></style>
