<template>
  <div class="flex flex-col gap-3 text-white">
    <div class="flex gap-3">
      <div
        class="bg-gradient-to-r from-[#2490ff] to-[#54c5eb] p-4 rounded-md w-[70%]"
      >
        <div class="flex justify-between">
          <h2 class="text-white">Fila de Eventos</h2>

          <n-select
            class="w-[132px] select"
            v-model:value="value"
            :options="options"
            size="small"
            placeholder="Semanal/7 dias"
          />
        </div>
        <div class="flex">
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient-to-r from-[#964FEF] to-[#5C05CA] p-4 rounded-md w-[30%]"
      >
        <div class="flex justify-between">
          <h2 class="text-white">Automatização</h2>
          <n-select
            class="w-[132px] select"
            v-model:value="value"
            size="small"
            :options="options"
            placeholder="Semanal/7 dias"
          />
        </div>
        <div class="flex">
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-3">
      <div
        class="bg-gradient-to-r from-[#1ECF70] to-[#06A948] p-4 rounded-md w-[33%]"
      >
        <div class="flex items-center justify-start gap-3">
          <h2 class="text-white">Fila de Eventos</h2>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button
                class="flex w-3 h-3 p-2 text-xs font-bold text-white rounded-full"
                >!</n-button
              >
            </template>
            <span> LOREM IPSUM </span>
          </n-tooltip>
        </div>
        <div class="flex">
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient-to-r from-[#F39034] to-[#FF2927] p-4 rounded-md w-[33%]"
      >
        <div class="flex items-center justify-start gap-3">
          <h2 class="text-white">Fila de Eventos</h2>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button
                class="flex w-3 h-3 p-2 text-xs font-bold text-white rounded-full"
                >!</n-button
              >
            </template>
            <span> LOREM IPSUM </span>
          </n-tooltip>
        </div>
        <div class="flex">
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
        </div>
      </div>
      <div
        class="bg-gradient-to-r from-[#CF24B9] to-[#9A0098] p-4 rounded-md w-[33%]"
      >
        <div class="flex items-center gap-2 hover:text-white">
          <h2 class="text-white">Automatização</h2>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button
                class="flex w-3 h-3 p-2 text-xs font-bold text-white rounded-full"
                >!</n-button
              >
            </template>
            <span> LOREM IPSUM </span>
          </n-tooltip>
        </div>
        <div class="flex">
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
          <div class="p-5 px-7">
            <strong>Coleta Bruta</strong>
            <div>320k</div>
            <small>Eventos</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"

  export default defineComponent({
    setup() {
      return {
        value: ref(null),
        options: [
          {
            label: "Everybody's Got Something to Hide Except Me and My Monkey",
            value: "song0",
            disabled: true,
          },
          {
            label: "Drive My Car",
            value: "song1",
          },
          {
            label: "Norwegian Wood",
            value: "song2",
          },
          {
            label: "You Won't See",
            value: "song3",
            disabled: true,
          },
          {
            label: "Nowhere Man",
            value: "song4",
          },
          {
            label: "Think For Yourself",
            value: "song5",
          },
          {
            label: "The Word",
            value: "song6",
          },
          {
            label: "Michelle",
            value: "song7",
            disabled: true,
          },
          {
            label: "What goes on",
            value: "song8",
          },
          {
            label: "Girl",
            value: "song9",
          },
          {
            label: "I'm looking through you",
            value: "song10",
          },
          {
            label: "In My Life",
            value: "song11",
          },
          {
            label: "Wait",
            value: "song12",
          },
        ],
      }
    },
  })
</script>
<style lang="scss" scoped>
  .select {
    &::v-deep(.n-base-selection-label),
    &::v-deep(.n-base-selection-active) {
      background-color: transparent !important;
    }
    &::v-deep(.n-base-selection-placeholder) {
      color: #fff;
    }
    &::v-deep(.n-base-selection__border) {
      border-color: transparent;
    }
  }
</style>
