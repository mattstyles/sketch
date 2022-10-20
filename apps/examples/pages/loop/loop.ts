import {loop} from 'sketch-loop'

const app = loop({container: document.body})

function render() {
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
}

let sizeFactor = 1
let time = 0
app.on({
  type: 'resize',
  action: render,
})
app.on({
  type: 'tick',
  action: (dt) => {
    time = time + dt / 500
    sizeFactor = 1 + Math.sin(time) * 0.35
  },
})
app.on({
  type: 'tick',
  action: render,
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
