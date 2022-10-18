import {setCanvasSize} from 'sketch-canvas-size'

export function create(opts?: {
  canvas?: HTMLCanvasElement
  attributes?: CanvasRenderingContext2DSettings
}): CanvasRenderingContext2D | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null
  }

  const canvas = opts?.canvas ?? document.createElement('canvas')
  const dpr = window.devicePixelRatio

  const ctx = canvas.getContext('2d', opts?.attributes ?? {})

  if (ctx == null) {
    return null
  }

  setCanvasSize({
    canvas,
    width: ctx.canvas.width,
    height: ctx.canvas.height,
  })

  ctx.scale(dpr, dpr)
  return ctx
}
