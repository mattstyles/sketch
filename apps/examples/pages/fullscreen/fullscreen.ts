import {fit} from 'sketch-fit'

const app = fit({container: document.body})

function render() {
  const gradient = app.ctx.createLinearGradient(
    0,
    app.ctx.canvas.height * 0.85,
    app.ctx.canvas.width,
    app.ctx.canvas.height * 0.25
  )
  gradient.addColorStop(0, '#00dbde')
  gradient.addColorStop(1, '#fc00ff')
  app.ctx.fillStyle = gradient
  app.ctx.fillRect(0, 0, app.ctx.canvas.width, app.ctx.canvas.height)

  for (let i = 0; i <= 8; i++) {
    const size = Math.min(app.canvas.width, app.canvas.height) * 0.25
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

app.on({
  type: 'resize',
  action: render,
})
