export function create(opts?: {
  canvas?: HTMLCanvasElement
  attributes?: CanvasRenderingContext2DSettings
}): CanvasRenderingContext2D | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null
  }

  const canvas = opts?.canvas || document.createElement('canvas')
  const dpr = window.devicePixelRatio

  const ctx = canvas.getContext('2d', opts?.attributes ?? {})

  if (ctx == null) {
    return null
  }

  const width = ctx.canvas.width
  const height = ctx.canvas.height
  canvas.width = width * 2
  canvas.height = height * 2
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  ctx.scale(dpr, dpr)
  return ctx
}
