<template lang="pug">
  .center
    h1.title aktk1910.pw
    a(href="https://twitter.com/nomber1910" target="_blank" aria-label="twitter")
      fa(:icon='faTwitter').icon
    a(href="https://github.com/Akatsuki1910" target="_blank" aria-label="github")
      fa(:icon='faGithub').icon
</template>

<script lang="ts">
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Index extends Vue {
  // computed()
  get faTwitter() {
    return faTwitter
  }

  get faGithub() {
    return faGithub
  }
}
</script>

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
