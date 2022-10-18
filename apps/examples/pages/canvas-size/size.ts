import {setCanvasSize, setCanvasDpr} from 'sketch-canvas-size'

function render(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (ctx == null) {
    throw new Error('Can not create rendering context')
  }

  ctx.strokeStyle = 'red'
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.arc(300, 100, 100, 0, Math.PI * 2)
  ctx.stroke()
}

const canvasSharp = document.querySelector<HTMLCanvasElement>('.js-canvas-1')
if (canvasSharp == null) {
  throw new Error('Can not find canvas')
}
canvasSharp.style.border = '1px solid red'
setCanvasSize({
  canvas: canvasSharp,
  width: 600,
  height: 200,
})
render(canvasSharp)

const canvasBlur = document.querySelector<HTMLCanvasElement>('.js-canvas-2')
if (canvasBlur == null) {
  throw new Error('Can not find canvas')
}
canvasBlur.style.border = '1px solid green'
setCanvasDpr({canvas: canvasBlur, dpr: 1})
render(canvasBlur)
