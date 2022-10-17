import {create} from 'sketch-context'

let rotation = 0
function render(ctx: CanvasRenderingContext2D) {
  rotation = rotation + 0.05

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.arc(100, 100, 20, rotation, rotation * 0.5 + Math.PI)
  ctx.stroke()

  window.requestAnimationFrame(() => render(ctx))
}

function renderWithNewCanvas() {
  const ctx = create()
  if (ctx == null) {
    return
  }

  document.body.appendChild(ctx.canvas)

  render(ctx)
}

function renderWithExistingCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>('.js-canvas')
  if (canvas == null) {
    return
  }

  const ctx = create({
    canvas: canvas,
  })
  if (ctx == null) {
    return
  }

  render(ctx)
}

renderWithNewCanvas()
renderWithExistingCanvas()
