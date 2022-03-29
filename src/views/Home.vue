<template>
  <div class="font-['Open_Sans']">
    <Header title="123" />
    <div class="container flex flex-col gap-5 mx-auto my-2">
      <Card :Card="CardData" title="Indicadores de coleta" />
      <div class="flex gap-5">
        <div class="w-[75%]">
          <Graphs />
          <GridCards />
          <div id="3d-graph"></div>
        </div>
        <SearchTab />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // @ is an alias to /src
  import Header from "../components/Header.vue"
  import Graphs from "../components/Graphs.vue"
  import Card from "../components/Card.vue"
  import GridCards from "../components/GridCards.vue"
  import SearchTab from "../components/SearchTab.vue"

  import { reactive } from "vue"

  const CardData = reactive([
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: true
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: true

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false

    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: true
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: true
    },
    {
      title: "Telegram",
      label: "Messenger",
      collects: "0",
      approves: "0",
      disaproves: "0",
      lastCollect: new Date().toLocaleString(),
      isDisabled: false
    },
  ])
</script>
