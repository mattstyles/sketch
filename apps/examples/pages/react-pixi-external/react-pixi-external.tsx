import {createRoot} from 'react-dom/client'
import {Sprite, BaseTexture} from 'pixi.js'

import {sketch} from 'sketch-pixi-app'
import {SketchProvider, useSketchApp} from 'sketch-react-pixi'

const app = sketch(
  {
    container: document.body,
  },
  {
    backgroundColor: 0x2a2922,
  }
)

const texture = generate()
const sprite = Sprite.from(texture)
app.pixi.stage.addChild(sprite)

let time = 0
let radius = 64
app.on({
  type: 'tick',
  action: ({dt}) => {
    time = time + dt / 200
    let position = [
      app.canvas.width * 0.5 - radius * 0.5,
      app.canvas.height * 0.5 - radius * 0.5,
    ]
    sprite.setTransform(
      position[0] + Math.sin(time) * radius,
      position[1] + Math.cos(time) * radius,
      0.2,
      0.2
    )
  },
})
app.start()

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <SketchProvider app={app}>
      <Sketch />
    </SketchProvider>
  )
}

function Sketch() {
  const app = useSketchApp()
  return (
    <div className='overlay absolute top-right text-on-dark'>
      isRunning: {app?.isRunning ? 'true' : 'false'}
    </div>
  )
}

function generate() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx == null) {
    throw new Error('Unable to generate particle texture')
  }

  const dpr = window.devicePixelRatio
  ctx.scale(dpr, dpr)
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 16)
  gradient.addColorStop(0, '#fff')
  gradient.addColorStop(1, '#ffffff00')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  const base = BaseTexture.from(canvas)
  return base
}
