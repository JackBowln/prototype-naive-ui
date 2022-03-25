<template>
  <div>
    <header class="bg-black flex p-3">
      <div class="text-white">logo</div>
      <div class="text-gray-400">
        {{ title }}
        {{ msg }}
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
  const props = defineProps<{ msg: string; title: string }>()
</script>
