import {setCanvasSize} from 'sketch-canvas-size'

export function create(opts?: {
  width?: number
  height?: number
}): HTMLCanvasElement {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('Can not create canvas element')
  }

  const canvas = document.createElement('canvas')
  const width = opts?.width ?? canvas.width
  const height = opts?.height ?? canvas.height

  setCanvasSize({
    canvas,
    width,
    height,
  })

  return canvas
}
