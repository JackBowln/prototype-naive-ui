<template>
  <div>
    <h4 class="first-letter:uppercase">{{ Card.title }}</h4>
  </div>
</template>

<script setup lang="ts">
  import type { CardProps } from "../types/index"

  defineProps<CardProps>()
  // console.log(Card)
</script>
