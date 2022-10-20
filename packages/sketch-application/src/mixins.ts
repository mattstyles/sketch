import type {Event} from './application'

import {BaseApplication} from './application'
import {setCanvasSize} from 'sketch-canvas-size'

type Constructor<T = {}> = new (...args: any[]) => T

export interface ResizeEvent extends Event {
  type: 'resize'
  action: () => void
}
export function withResize<T extends Constructor<BaseApplication>>(Base: T) {
  return class Resize extends Base {
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
              fn()
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

    override on(event: ResizeEvent) {
      return super.on(event)
    }
  }
}

export interface TickEvent extends Event {
  type: 'tick'
  action: (dt: number) => void
}
export function withTick<T extends Constructor<BaseApplication>>(Base: T) {
  return class Ticker extends Base {
    static mapKey = 'tick'

    #last: number
    #tickID: number | null
    #isRunning: boolean = false

    constructor(...args: any[]) {
      super(...args)

      this.#tickID = null
      // @TODO might need to shim this to run in node
      this.#last = window.performance.now()
      this._events.set(Ticker.mapKey, new Map())

      this._disposers.add(() => {
        if (this.#tickID) {
          window.cancelAnimationFrame(this.#tickID)
        }
      })
    }

    #tick = () => {
      if (this.#isRunning === false) {
        return
      }

      const map = this._events.get(Ticker.mapKey)
      if (map != null) {
        const now = window.performance.now()
        for (let [_, fn] of map) {
          fn(now - this.#last)
        }

        this.#last = now
      }

      this.#tickID = window.requestAnimationFrame(this.#tick)
    }

    start() {
      this.#isRunning = true
      this.#last = window.performance.now()
      this.#tick()
    }

    stop() {
      this.#isRunning = false
    }
  }
}
