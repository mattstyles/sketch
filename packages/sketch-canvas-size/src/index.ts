export function setCanvasSize(opts: {
  canvas: HTMLCanvasElement
  width: number
  height: number
}): HTMLCanvasElement {
  if (typeof window === 'undefined') {
    throw new Error('Can not access window')
  }

  const dpr = window.devicePixelRatio

  opts.canvas.width = opts.width
  opts.canvas.height = opts.height
  return setCanvasDpr({
    canvas: opts.canvas,
    dpr,
  })
}

export function setCanvasDpr(opts: {
  canvas: HTMLCanvasElement
  dpr: number
}): HTMLCanvasElement {
  const canvas = opts.canvas
  const width = canvas.width
  const height = canvas.height
  canvas.width = width * opts.dpr
  canvas.height = height * opts.dpr
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  return canvas
}
