<template>
  <div
    class="flex w-100% items-center h-12 container m-auto justify-between text-sm"
  >
    <div class="text-white">Lorem Ipsum</div>
    <div class="flex items-center gap-3">
      <div class="flex text-white">
        <div class="font-light">Última atualização:</div>
        08/03/2021 - 14h 31m 21s
      </div>
      <n-button color="#30A7CF" class="bg-[#30A7CF]" @click="handleLoading">
        <template #icon>
          <n-icon
            ><svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4997 12.0002C13.709 9.7909 13.709 6.20893 11.4997 3.99964L9.31774 1.81767M3.49916 3.99964C1.28986 6.20893 1.28986 9.7909 3.49916 12.0002L5.68113 14.1822M1.31719 14.1822H5.68113M5.68113 14.1822V9.81822M9.31774 6.18161V1.81767M9.31774 1.81767H13.6817"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </n-icon>
        </template>
        Atualizar
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue"
  import { useLoadingBar } from "naive-ui"

  const value = ref(null)
  const options = [
    {
      label: "Everybody's Got Something to Hide Except Me and My Monkey",
      value: "song0",
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
  ]

  const loadingBar = useLoadingBar()

  const handleLoading = () => {
    loadingBar.start()
    const random = Math.random()*100

    random > 50 ?
    setTimeout(() => {
      loadingBar.finish()
    }, 2000)
    : loadingBar.error()

    console.log(Math.random()*100)
  }
</script>
<style lang="scss" scoped>
  .select {
    &::v-deep(.n-base-selection-label) {
      background-color: transparent;
    }
    &::v-deep(.n-base-selection__border) {
      border-color: transparent;
    }
  }
</style>
