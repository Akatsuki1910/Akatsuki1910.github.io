<template lang="pug">
.center
  h1.title エラーが発生しました
  nuxt-link(to="/").link 戻る
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

.link {
  color: white;
  font-family: sans-serif;
}
</style>
