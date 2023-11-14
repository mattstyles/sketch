import {loop} from 'sketch-loop'
import type {TickHandler, ApplicationInstance} from 'sketch-loop'

const app = loop({container: document.body})

function render({app}: Parameters<TickHandler<ApplicationInstance>>[0]) {
  const gradient = app.ctx.createLinearGradient(
    0,
    app.ctx.canvas.height * 0.85,
    app.ctx.canvas.width,
    app.ctx.canvas.height * 0.25
  )
  gradient.addColorStop(0, '#fbab7e')
  gradient.addColorStop(1, '#f7ce68')
  app.ctx.fillStyle = gradient
  app.ctx.fillRect(0, 0, app.ctx.canvas.width, app.ctx.canvas.height)

  for (let i = 0; i <= 8; i++) {
    const baseSize = Math.min(app.canvas.width, app.canvas.height) * 0.25
    const size = baseSize * sizeFactor
    app.ctx.beginPath()
    app.ctx.strokeStyle = `rgba(255, 250, 248, ${1 - i / 9})`
    app.ctx.lineWidth = 4 + (1 - i / 8) * 4
    app.ctx.arc(
      app.canvas.width * 0.5,
      app.canvas.height * 0.5,
      size - i * (size * 0.05),
      0,
      Math.PI * 2
    )
    app.ctx.stroke()
  }

  app.ctx.beginPath()
  app.ctx.fillStyle = '#fff'
  app.ctx.arc(gx, gy, 20, 0, Math.PI * 2)
  app.ctx.fill()
}

let sizeFactor = 1
let time = 0
let gx = 0
let gy = 0
app.on({
  type: 'resize',
  action: render,
})
app.on({
  type: 'tick',
  action: ({dt}) => {
    time = time + dt / 500
    sizeFactor = 1 + Math.sin(time) * 0.35
  },
})
app.on({
  type: 'tick',
  action: render,
})
const pointerEl = document.querySelector('.js-pointer') as HTMLElement
const pointerX = document.querySelector('.js-pointer-x') as HTMLElement
const pointerY = document.querySelector('.js-pointer-y') as HTMLElement
app.on({
  type: 'pointerdown',
  action: ({point}) => {
    // console.log('pointer down', point)
    pointerEl.innerHTML = 'down'
  },
})
app.on({
  type: 'pointerup',
  action: ({point}) => {
    // console.log('pointer up', point)
    pointerEl.innerHTML = 'up'
  },
})
app.on({
  type: 'pointermove',
  action: ({point}) => {
    // console.log('pointer move', point)
    pointerX.innerHTML = point.x.toFixed(2)
    pointerY.innerHTML = point.y.toFixed(2)

    gx = point.x
    gy = point.y
  },
})

app.start()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      console.log('disposing')
      app.dispose()
      break
    case 's':
      console.log('starting')
      app.start()
      break
    case 'p':
      console.log('pausing')
      app.stop()
      break
  }
})
