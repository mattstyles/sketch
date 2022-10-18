import {create} from 'sketch-canvas'
import {setCanvasSize} from 'sketch-canvas-size'
import {create as createContext} from 'sketch-context'

// type Application = {
//   canvas: HTMLCanvasElement,
//   ctx: CanvasRenderingContext2D,
//   shape: [number, number],
//   disposeResizeListener: () => void
// }
export function fit(opts?: {
  canvas?: HTMLCanvasElement
  container?: HTMLElement
}): Application {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('Can not create canvas')
  }

  if (opts?.canvas == null && opts?.container == null) {
    throw new Error('Canvas fit requires a canvas or a container to work with')
  }

  let container = opts?.container as HTMLElement
  if (opts?.canvas != null) {
    if (opts.canvas.parentElement == null) {
      throw new Error('Can not fit canvas without a parent element')
    }
    container = opts.canvas.parentElement
  }

  let canvas = opts?.canvas as HTMLCanvasElement
  if (opts?.canvas == null) {
    canvas = create()
    container.appendChild(canvas)
  }

  return new Application(canvas, container)
}

function setToSize(canvas: HTMLCanvasElement, container: HTMLElement) {
  const width = container.offsetWidth
  const height = container.offsetHeight
  setCanvasSize({
    canvas,
    width,
    height,
  })
}

// @TODO this API is highly subject to change
class Application {
  canvas: HTMLCanvasElement
  container: HTMLElement
  ctx: CanvasRenderingContext2D
  dispose: () => void
  private resizeFunc: () => void

  constructor(canvas: HTMLCanvasElement, container: HTMLElement) {
    this.canvas = canvas
    this.container = container
    this.resizeFunc = () => {}

    setToSize(this.canvas, this.container)
    const ctx = createContext({canvas: this.canvas})
    if (ctx == null) {
      throw new Error('Erroring creating context')
    }
    this.ctx = ctx

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect
        setCanvasSize({
          canvas: this.canvas,
          width: cr.width,
          height: cr.height,
        })

        this.resizeFunc()
      }
    })

    resizeObserver.observe(container)
    this.dispose = () => {
      resizeObserver.disconnect()
    }
  }

  onResize(cb: () => void) {
    this.resizeFunc = cb
  }
}
