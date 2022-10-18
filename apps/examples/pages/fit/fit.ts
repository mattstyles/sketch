import {fit} from 'sketch-fit'

const canvas = document.querySelector<HTMLCanvasElement>('.js-canvas')
if (canvas == null) {
  throw new Error('Can not find canvas element')
}

const app = fit({canvas})

const padding = 20
function render() {
  app.ctx.fillStyle = '#232527'
  app.ctx.fillRect(
    0 + padding,
    0 + padding,
    app.canvas.width - padding * 2,
    app.canvas.height - padding * 2
  )

  for (let i = 0; i <= 8; i++) {
    const size = Math.min(app.canvas.width, app.canvas.height) * 0.25
    app.ctx.beginPath()
    app.ctx.strokeStyle = `rgba(255, 64, 12, ${1 - i / 9})`
    app.ctx.lineWidth = 4
    app.ctx.arc(
      app.canvas.width * 0.5,
      app.canvas.height * 0.5,
      size - i * (size * 0.05),
      0,
      Math.PI * 2
    )
    app.ctx.stroke()
  }

  // window.requestAnimationFrame(render)
}
// render()

app.onResize(render)

const button = document.querySelector('.js-button')
button?.addEventListener('click', () => {
  if (canvas.parentElement == null) {
    return
  }

  if (canvas.parentElement.offsetWidth < 300) {
    canvas.parentElement.style.width = '640px'
  } else {
    canvas.parentElement.style.width = '200px'
  }
})
