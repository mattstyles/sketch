import type {Event} from '../application'
import type {Constructor} from '../constructor'

import {setCanvasSize} from 'sketch-canvas-size'

import {BaseApplication} from '../application'

export interface ResizeEvent<T = ResizeApplication> extends Event {
  type: 'resize'
  action: ({
    app,
    width,
    height,
  }: {
    app: T
    width: number
    height: number
  }) => void
}

export type ResizeApplication = ReturnType<typeof withResize>
export function withResize<
  E extends Event,
  T extends Constructor<BaseApplication<E>>
>(Base: T) {
  return class Resize extends Base {
    // Had to remove as typing for the class did not match with the return type
    static mapKey = 'resize'

    constructor(...args: any[]) {
      super(...args)

      this._events.set(Resize.mapKey, new Map())

      const resizeObserver = new ResizeObserver((entries) => {
        const map = this._events.get(Resize.mapKey)

        for (const entry of entries) {
          const cr = entry.contentRect
          setCanvasSize({
            canvas: this.canvas,
            width: cr.width,
            height: cr.height,
          })

          if (map != null) {
            for (let [_, fn] of map) {
              fn({
                app: this,
                width: cr.width,
                height: cr.height,
              })
            }
          }

          // This solves an issue with canvas clear flickering
          // Not mad keen on the solution though
          if (this._events.has('tick')) {
            const m = this._events.get('tick')
            if (m != null) {
              for (let [_, fn] of m) {
                fn({
                  dt: 0,
                  app: this,
                })
              }
            }
          }
        }
      })

      const container = this.canvas.parentElement
      if (container != null) {
        resizeObserver.observe(container)
      }

      this._disposers.add(() => {
        resizeObserver.disconnect()
      })
    }
  }
}
