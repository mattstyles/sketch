import {sketch, PixiApplication} from 'sketch-pixi-app'

import {Container, Graphics} from 'pixi.js'

const app = sketch(
  {
    container: document.body,
  },
  {
    backgroundColor: 0x232120,
  }
)

const stage = new Container()
const graphic = new Graphics()

// graphic.lineStyle(2, 0xfbab7e, 1)
graphic.beginFill(0xffffff, 1)
graphic.drawCircle(0, 0, 20)
graphic.endFill()

app.pixi.stage.addChild(stage)
stage.addChild(graphic)

let radius = 30
let gx = 300
let gy = 300
function render({app}: {app: PixiApplication<any>}) {
  let x = Math.sin(time) * radius
  let y = Math.cos(time) * radius
  graphic.position.set(x + gx, y + gy)
}

let time = 0
app.on({
  type: 'tick',
  action: ({dt}) => {
    time = time + dt / 200
  },
})
app.on({
  type: 'tick',
  action: render,
})

const pointerX = document.querySelector('.js-pointer-x') as HTMLElement
const pointerY = document.querySelector('.js-pointer-y') as HTMLElement
app.on({
  type: 'pointermove',
  action: ({point}) => {
    gx = point.x
    gy = point.y

    pointerX.innerHTML = point.x.toFixed(2)
    pointerY.innerHTML = point.y.toFixed(2)
  },
})

app.start()

// @ts-ignore
window.app = app
