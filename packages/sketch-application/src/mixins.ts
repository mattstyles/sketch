import type {Event} from './application'

import {BaseApplication} from './application'
import {setCanvasSize} from 'sketch-canvas-size'

type Constructor<T = {}> = new (...args: any[]) => T

export interface ResizeEvent extends Event {
  type: 'resize'
  action: ({app}: {app: ResizeApplication}) => void
}
export type ResizeApplication = InstanceType<ReturnType<typeof withResize>>
export function withResize<T extends Constructor<BaseApplication>>(Base: T) {
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

    override on(event: ResizeEvent) {
      return super.on(event)
    }
  }
}

export interface TickEvent extends Event {
  type: 'tick'
  action: ({dt, app}: {dt: number; app: TickApplication}) => void
}
export type TickApplication = InstanceType<ReturnType<typeof withTick>>
export function withTick<T extends Constructor<BaseApplication>>(Base: T) {
  return class Ticker extends Base {
    static mapKey = 'tick'

    #last: number
    #tickID: number | null
    isRunning: boolean = false

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
      if (this.isRunning === false) {
        return
      }

      const map = this._events.get(Ticker.mapKey)
      if (map != null) {
        const now = window.performance.now()
        for (let [_, fn] of map) {
          fn({
            dt: now - this.#last,
            app: this,
          })
        }

        this.#last = now
      }

      this.#tickID = window.requestAnimationFrame(this.#tick)
    }

    start() {
      this.isRunning = true
      this.#last = window.performance.now()
      this.#tick()
    }

    stop() {
      this.isRunning = false
    }

    override on(event: ResizeEvent | TickEvent | InteractionEvent) {
      return super.on(event)
    }
  }
}

// @TODO we should probably expose more information about touches here, for now just use it as we would mouse events and ignore multitouch etc
export type Point = {x: number; y: number}
export interface InteractionEvent extends Event {
  type: 'pointerdown' | 'pointerup' | 'pointermove'
  action: ({point, app}: {point: Point; app: TickApplication}) => void
}
export type InteractiveApplication = InstanceType<ReturnType<typeof withTick>>
export function withInteraction<T extends Constructor<BaseApplication>>(
  Base: T
) {
  return class Interactive extends Base {
    constructor(...args: any[]) {
      super(...args)

      this._events.set('pointerdown', new Map())
      this._events.set('pointerup', new Map())
      this._events.set('pointermove', new Map())

      this.canvas.addEventListener('pointerdown', this.#onPointerdown)
      this.canvas.addEventListener('pointerup', this.#onPointerup)
      this.canvas.addEventListener('pointermove', this.#onPointermove)

      this._disposers.add(() => {
        this.canvas.removeEventListener('pointerdown', this.#onPointerdown)
        this.canvas.removeEventListener('pointerup', this.#onPointerup)
        this.canvas.removeEventListener('pointermove', this.#onPointermove)
      })
    }

    #onPointerdown = (event: PointerEvent) => {
      const map = this._events.get('pointerdown')
      const scale = window.devicePixelRatio
      if (map != null) {
        for (let [_, fn] of map) {
          fn({
            point: {x: event.clientX * scale, y: event.clientY * scale},
            app: this,
          })
        }
      }
    }

    #onPointerup = (event: PointerEvent) => {
      const map = this._events.get('pointerup')
      const scale = window.devicePixelRatio
      if (map != null) {
        for (let [_, fn] of map) {
          fn({
            point: {x: event.clientX * scale, y: event.clientY * scale},
            app: this,
          })
        }
      }
    }

    #onPointermove = (event: PointerEvent) => {
      const map = this._events.get('pointermove')
      const scale = window.devicePixelRatio
      if (map != null) {
        for (let [_, fn] of map) {
          fn({
            point: {x: event.clientX * scale, y: event.clientY * scale},
            app: this,
          })
        }
      }
    }

    override on(event: ResizeEvent | TickEvent) {
      return super.on(event)
    }
  }
}
