import {
  BoxBufferGeometry,
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class BG {
  renderer: WebGLRenderer
  camera: PerspectiveCamera
  scene: Scene
  time: number
  width: number
  height: number
  controls: OrbitControls

  constructor(can: HTMLDivElement) {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer = new WebGLRenderer({ antialias: true })
    this.camera = new PerspectiveCamera(60, this.width / this.height)
    this.camera.position.set(0, 0, 3)
    this.scene = new Scene()

    this.setSize()

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enablePan = false
    this.controls.autoRotate = true

    const g = new BoxBufferGeometry(1, 1, 1)
    const m = new MeshBasicMaterial({ color: 0xf7ddc3 })
    const face = new Mesh(g, m)
    this.scene.add(face)

    const hairG = new Group()

    const g2 = new BoxBufferGeometry(1.2, 0.8, 1)
    const m2 = new MeshBasicMaterial({ color: 0xacdcfe })
    const hair = new Mesh(g2, m2)
    hair.position.y = 0.2
    hair.position.z = -0.1
    hairG.add(hair)

    const g3 = new BoxBufferGeometry(1.2, 0.4, 0.2)
    const hair2 = new Mesh(g3, m2)
    hair2.position.y = 0.4
    hair2.position.z = 0.5
    hairG.add(hair2)

    const g4 = new BoxBufferGeometry(0.1, 0.8, 0.2)
    const hair3 = new Mesh(g4, m2)
    hair3.position.x = 0.55
    hair3.position.y = -0.2
    hair3.position.z = 0.5
    hairG.add(hair3)

    const hair4 = new Mesh(g4, m2)
    hair4.position.x = -0.55
    hair4.position.y = -0.2
    hair4.position.z = 0.5
    hairG.add(hair4)

    this.scene.add(hairG)

    this.ribon()

    const g5 = new BoxBufferGeometry(0.1, 0.1, 0.1)
    const m3 = new MeshBasicMaterial({ color: 0x000000 })
    const eye = new Mesh(g5, m3)
    eye.position.x = 0.2
    eye.position.z = 0.5
    this.scene.add(eye)

    const eye2 = new Mesh(g5, m3)
    eye2.position.x = -0.2
    eye2.position.z = 0.5
    this.scene.add(eye2)

    const g6 = new BoxBufferGeometry(0.3, 0.1, 0.1)
    const mouth = new Mesh(g6, m3)
    mouth.position.y = -0.2
    mouth.position.z = 0.5
    this.scene.add(mouth)

    window.onresize = () => {
      this.setSize()
    }
    this.time = 0

    can.appendChild(this.renderer.domElement)
  }

  ribon() {
    const rg = new Group()
    const geometry = new BufferGeometry()
    const c = 0.3
    const a = c * 0.5
    const b = c * 0.1
    const d = 0.2
    const e = 0.2
    const f = 0.2
    const aa = [
      ...this.square([c, 0, e], [b, 0, e], [c, d, e], [a, d, e]),
      ...this.square([c, d, e], [a, d, e], [c, d, -e], [a, d, -e]),
      ...this.square([c, 0, -e], [b, 0, -e], [c, d, -e], [a, d, -e]),
      ...this.square([c, -f, e], [c, d, e], [c, -f, -e], [c, d, -e]),
      ...this.square([a, d, e], [b, 0, e], [a, d, -e], [b, 0, -e]),
    ]
    const ab = this.pointSymmetry(aa, 0)
    const ac = [
      ...this.square([c, 0, e], [-c, 0, e], [c, -f, e], [-c, -f, e]),
      ...this.square([c, 0, -e], [-c, 0, -e], [c, -f, -e], [-c, -f, -e]),
      ...this.square([b, 0, e], [-b, 0, e], [b, 0, -e], [-b, 0, -e]),
    ]
    const vertices = new Float32Array([...aa, ...ab, ...ac])

    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    const material = new MeshBasicMaterial({
      color: 0xff0000,
      side: DoubleSide,
    })
    const mesh = new Mesh(geometry, material)
    mesh.position.y = 0.7
    rg.add(mesh)

    this.scene.add(rg)
  }

  pointSymmetry(a: number[], b: number) {
    // b 0x 1y 2z
    const c = [...a]
    for (let i = b; i < a.length; i += 3) {
      c[i] *= -1
    }
    return c
  }

  setSize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1,
    )
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  square(a: number[], b: number[], c: number[], d: number[]) {
    return [...a, ...b, ...c, ...c, ...b, ...d]
  }

  public start() {
    this.animation()
  }

  animation() {
    requestAnimationFrame(this.animation.bind(this))
    this.renderer.render(this.scene, this.camera)
    this.controls.update()
    this.time++
  }
}
