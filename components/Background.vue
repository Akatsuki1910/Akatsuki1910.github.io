<template lang="pug">
  div.bg(ref="bg")
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator'
import p5 from 'p5'
import BgContent from './p5back'

@Component({})
export default class Background extends Vue {
  @Ref() bg!: HTMLDivElement

  // mounted()
  mounted() {
    const bgObj: BgContent[] = []
    const drawCanvas = (p: p5) => {
      p.setup = () => {
        const canvas = p
          .createCanvas(p.windowWidth, p.windowHeight)
          .parent(this.bg)
        canvas.position(0, 0)
        canvas.style('z-index', '-1')
        p.background(0)
        p.colorMode('rgb')
        p.rectMode('center')
        p.noStroke()
      }
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        p.fill(0)
        p.rect(p.width / 2, p.height / 2, p.width, p.height)
      }
      p.draw = () => {
        p.push()
        p.fill(0, 45)
        p.rect(p.width / 2, p.height / 2, p.width, p.height)
        p.pop()

        if (0 === Math.floor(p.random(0, 2))) {
          bgObj.push(new BgContent(p))
        }
        for (let i = 0; i < bgObj.length; i++) {
          bgObj[i].animation(p.frameCount)
          if (bgObj[i].generation <= 5 && 0 === Math.floor(p.random(0, 100))) {
            bgObj.push(new BgContent(p, bgObj[i]))
          }
          if (bgObj[i].destroy()) {
            bgObj.splice(i, 1)
          }
        }
      }
    }
    new p5(drawCanvas)
  }
}
</script>
