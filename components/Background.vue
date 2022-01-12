<template lang="pug">
  div.bg(ref="bg")
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator'
import BG from './ts/index'

@Component({})
export default class Background extends Vue {
  @Ref() bg!: HTMLDivElement

  b: BG | null = null

  mounted() {
    this.b = new BG(this.bg)
    this.b.start()
  }
}
</script>
