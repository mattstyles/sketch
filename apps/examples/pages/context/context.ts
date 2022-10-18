import {create} from 'sketch-context'

let rotation = 0
let rate = 0.02
function render(ctx: CanvasRenderingContext2D) {
  rotation = rotation + rate

  const period = 1 + Math.sin(rotation)
  const len = 1 + Math.sin(rotation) * 0.75
  const angle = period * Math.PI * 2
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.arc(100, 100, 20, angle, angle + Math.PI * len)
  ctx.stroke()

  window.requestAnimationFrame(() => render(ctx))
}

function renderWithNewCanvas() {
  const ctx = create()
  if (ctx == null) {
    return
  }

  console.log(ctx.canvas.width)

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
