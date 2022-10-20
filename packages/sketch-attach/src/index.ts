import {create} from 'sketch-canvas'

export type Attachment = {
  canvas?: HTMLCanvasElement
  container?: HTMLElement
}
export function attach(opts?: Attachment) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('Can not attach canvas')
  }

  const canvas = opts?.canvas || create()
  const container = opts?.container || canvas.parentElement

  if (container == null) {
    throw new Error(
      'Must supply a container to attach the canvas to if not already appended'
    )
  }

  container.appendChild(canvas)

  // Handle special case for document body
  // Canvas defaults display method creates a small margin, which causes body to grow each time the canvas is resized which triggers the observer again
  if (container === document.body) {
    canvas.style.display = 'block'
  }

  return {
    canvas,
    container,
  }
}
