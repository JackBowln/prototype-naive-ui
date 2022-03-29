<template>
  <div class="bg-gray-900">
    <header class="container flex items-center justify-between h-24 p-3 m-auto">
      <div class="text-white">logo</div>

      <div class="flex gap-3">
        <n-button> Dashboard</n-button>
        <n-dropdown
          trigger="hover"
          :options="options"
          @select="handleSelect"
          class="border-none text-gray-400"
          v-for="text in menuItems"
        >
          <n-button
            >{{text}}
            <n-icon size="20" color="#fff">
              <IosArrowDown />
            </n-icon>
          </n-button>
        </n-dropdown>
      </div>
      <div class="w-auto flex items-center text-white gap-3">
        <div>lorem.ipsum@ish.com.br</div>
        <n-dropdown :options="options">
          <n-badge dot type="success">
            <n-avatar
              round
              size="large"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </n-badge>
        </n-dropdown>
      </div>
    </header>
    <div class="bg-gray-700">
      <VueMenu />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { h, reactive, ref } from "vue"
  import type { Component } from "vue"
  import { NIcon, useMessage } from "naive-ui"
  import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon,
  } from "@vicons/ionicons5"
  import { IosArrowDown } from "@vicons/ionicons4"
  import VueMenu from "../components/Menu.vue"

  const renderIcon = (icon: Component) => {
    return () => {
      return h(NIcon, null, {
        default: () => h(icon),
      })
    }
  }
  const message = useMessage()
  const showDropdownRef = ref(false)
  const menuItems = reactive([
    "Registrations", "Eventes", "Revision", "Discarded", "Rules", "Support"
  ])
  const options = reactive([
    {
      label: "Marina Bay Sands",
      key: "marina bay sands",
      props: {
        onClick: () => {
          message.success("Good!")
        },
      },
    },
    {
      label: "Brown's Hotel, London",
      key: "brown's hotel, london",
      children: [
        {
          label: "Chicken",
          key: "chicken",
          disabled: true,
          props: {
            onClick: () => {
              message.info("Okay")
            },
          },
        },
        {
          label: "Beef",
          key: "beef",
        },
      ],
    },
    {
      label: "Atlantis Bahamas, Nassau",
      key: "atlantis nahamas, nassau",
      props: {
        onMousedown: () => {
          message.warning("Key down")
        },
      },
    },
  ])
  const handleSelect = (key: string | number) => {
    message.info(String(key))
  }
</script>
<style lang="scss" scoped>
  ::v-deep(.n-button__content) {
    color: #c4c4c4;
  }

  ::v-deep(.n-button__border) {
    border: none;
  }
</style>
