<template>
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>
<script lang="ts">
  import { defineComponent } from "vue"
  import AppProvider from "./components/AppProvider.vue"

  export default defineComponent({
    name: "App",
    components: {
      AppProvider,
    },
  })
</script>
<style></style>
