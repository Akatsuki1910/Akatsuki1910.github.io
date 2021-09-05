<template lang="pug">
  div
    .center
      h1.title aktk1910.pw
      a(href="https://twitter.com/nomber1910" target="_blank")
        fa(:icon='faTwitter').icon
      a(href="https://github.com/Akatsuki1910" target="_blank")
        fa(:icon='faGithub').icon
    Background
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

<style lang="stylus" scoped>
.center
  text-align center
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)

.title
  color blue

.icon
  font-size 3rem
  transition all 0.3s
  margin 5px
  color blue
  &:hover
    transform scale(1.2)
</style>
