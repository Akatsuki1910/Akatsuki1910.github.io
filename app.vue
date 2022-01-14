<script setup lang="ts">
import Background from "./components/Background.vue";
</script>

<template lang="pug">
div
  NuxtPage
  Background
</template>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#__layout > div {
  overflow: hidden;
  height: 100%;
}
body {
  margin: 0;
  overflow: hidden;
}
</style>
