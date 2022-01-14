<script setup lang="ts">
import BG from './ts/index'
const bg: { value: HTMLDivElement | null } = ref(null)
onMounted(() => {
  if (bg.value) {
    const b = new BG(bg.value)
    b.start()
  }
})
</script>

<template lang="pug">
div(ref="bg")
</template>
