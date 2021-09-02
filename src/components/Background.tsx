import React, { FC, useEffect, useRef } from 'react'
// import p5 from 'p5'
import styles from '../../styles/Background.module.scss'

let p5Global
let p5
class BgContent {
  pX: number
  pY: number
  width: number
  height: number
  angle: number
  generation: number
  speed: number
  size: number
  life: number
  constructor(obj: any = []) {
    this.pX = obj.pX || p5Global.width / 2
    this.pY = obj.pY || p5Global.height / 2
    this.width = p5Global.width
    this.height = p5Global.height
    this.angle = this.rRandom(obj.angle)
    this.generation = obj.generation ? obj.generation + 1 : 1
    this.speed = 10 - this.generation
    this.size = 10 - this.generation
    this.life = obj.life + 50 || p5Global.max(this.width, this.height) / 2 / 3
  }

  rRandom = (p: number) => {
    let num = p ? p : -1
    do {
      num = Math.floor(p5Global.random(0, 8))
    } while (num === p)
    return num
  }

  animation = (t: number) => {
    if (this.life >= 0) {
      this.pX += this.speed * p5Global.cos((this.angle * p5Global.PI) / 4)
      this.pY += this.speed * p5Global.sin((this.angle * p5Global.PI) / 4)
      if (0 === Math.floor(p5Global.random(0, 100))) {
        this.angle = this.rRandom(this.angle)
      }
      this.draw(t)
    }
    this.life--
  }

  draw = (t: number) => {
    p5Global.push()
    p5Global.colorMode('hsb', 100)
    if (this.angle % 2 === 1) {
      p5Global.translate(this.pX, this.pY)
      p5Global.rotate((p5Global.PI / 4) * (this.angle % 2))
      p5Global.translate(-this.pX, -this.pY)
    }
    p5Global.fill(((this.pX / p5Global.width) * 100 + t / 3) % 100, 100, 100)
    p5Global.rect(this.pX, this.pY, this.size, this.size)
    p5Global.pop()
  }

  destroy = () => {
    let flag = false
    if (this.pX < 0) {
      flag = true
    }
    if (this.pX > this.width) {
      flag = true
    }
    if (this.pY < 0) {
      flag = true
    }
    if (this.pY > this.height) {
      flag = true
    }
    if (this.life <= -100) {
      flag = true
    }
    return flag
  }
}

const Bgobj: FC = () => {
  const bgObj = []
  const renderRef = useRef(null)
  const drawCanvas = (p: typeof p5) => {
    p5Global = p
    p.setup = () => {
      const canvas = p
        .createCanvas(p.windowWidth, p.windowHeight)
        .parent(renderRef.current)
      canvas.position(0, 0)
      canvas.style('z-index', '-1')
      p.background(0)
      p.colorMode('rgb')
      p.rectMode('center')
      p.noStroke()
    }
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
    p.draw = () => {
      p.push()
      p.fill(0, 45)
      p.rect(p.width / 2, p.height / 2, p.width, p.height)
      p.pop()

      if (0 === Math.floor(p.random(0, 2))) {
        bgObj.push(new BgContent())
      }
      for (let i = 0; i < bgObj.length; i++) {
        bgObj[i].animation(p.frameCount)
        if (bgObj[i].generation <= 5 && 0 === Math.floor(p.random(0, 100))) {
          bgObj.push(new BgContent(bgObj[i]))
        }
        if (bgObj[i].destroy()) {
          bgObj.splice(i, 1)
        }
      }
    }
  }

  useEffect(() => {
    if (!renderRef.current) return
    p5 = require('p5/lib/p5.min')
    new p5(drawCanvas)
  }, [])
  return (
    <div className={styles.canvasWrapper}>
      <div ref={renderRef} className={styles.canvas} />
    </div>
  )
}

export default Bgobj
