<template>
  <div class="home">
    <Header title="123" msg="penis" />
    <Graphs />
    <Card :CardProps="CardData" />
  </div>
</template>

<script lang="ts" setup>
  // @ is an alias to /src
  import Header from "../components/Header.vue"
  import Graphs from "../components/Graphs.vue"
  import Card from "../components/Card.vue"
  import { reactive } from "vue"

  const CardData = reactive({
    title: "Telegram",
    label: "Messenger",
    collects: "0",
    approves: "0",
    disaproves: "0",
    lastCollect: new Date(),
  })
  console.log(CardData.title);
</script>
