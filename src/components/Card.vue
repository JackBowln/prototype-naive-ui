<template>
    <div>{{cardData}}</div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"
    export default defineComponent({
        setup() {
            const cardData = ref("CARD")
        },
    })
</script>
