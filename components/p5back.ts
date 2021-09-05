import p5 from 'p5'
export default class BgContent {
  p5: p5
  pX: number
  pY: number
  width: number
  height: number
  angle: number
  generation: number
  speed: number
  size: number
  life: number
  constructor(p: p5, obj: any = []) {
    this.p5 = p
    this.pX = obj.pX || p.width / 2
    this.pY = obj.pY || p.height / 2
    this.width = p.width
    this.height = p.height
    this.angle = this.rRandom(obj.angle)
    this.generation = obj.generation ? obj.generation + 1 : 1
    this.speed = 10 - this.generation
    this.size = 10 - this.generation
    this.life = obj.life + 50 || p.max(this.width, this.height) / 2 / 3
  }

  rRandom = (ang: number) => {
    let num = ang ? ang : -1
    do {
      num = Math.floor(this.p5.random(0, 8))
    } while (num === ang)
    return num
  }

  animation = (t: number) => {
    if (this.life >= 0) {
      this.pX += this.speed * this.p5.cos((this.angle * this.p5.PI) / 4)
      this.pY += this.speed * this.p5.sin((this.angle * this.p5.PI) / 4)
      if (0 === Math.floor(this.p5.random(0, 100))) {
        this.angle = this.rRandom(this.angle)
      }
      this.draw(t)
    }
    this.life--
  }

  draw = (t: number) => {
    this.p5.push()
    this.p5.colorMode('hsb', 100)
    if (this.angle % 2 === 1) {
      this.p5.translate(this.pX, this.pY)
      this.p5.rotate((this.p5.PI / 4) * (this.angle % 2))
      this.p5.translate(-this.pX, -this.pY)
    }
    this.p5.fill(((this.pX / this.p5.width) * 100 + t / 3) % 100, 100, 100)
    this.p5.rect(this.pX, this.pY, this.size, this.size)
    this.p5.pop()
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
