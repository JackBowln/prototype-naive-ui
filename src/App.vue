<template>
  <AppProvider>
    <Internacionalization>
      <router-view></router-view>
    </Internacionalization>
  </AppProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppProvider from "./Providers/AppProvider.vue";
import Internacionalization from "./Providers/Internacionalization.vue";

export default defineComponent({
  name: "App",
  components: {
    AppProvider,
  },
});
</script>
<style></style>
