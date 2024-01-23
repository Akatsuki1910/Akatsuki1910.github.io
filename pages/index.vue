<template lang="pug">
.center
  h1.title aktk1910.com
  a(href="https://twitter.com/nomber1910" target="_blank" aria-label="twitter")
    Twitter.icon
  a(href="https://github.com/Akatsuki1910" target="_blank" aria-label="github")
    Github.icon
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 0 4px;
}

.title {
  color: white;
  font-family: sans-serif;
}

.icon {
  font-size: 3rem;
  transition: all 0.3s;
  margin: 5px;
  color: white;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
