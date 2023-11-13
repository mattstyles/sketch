import type {Event, ActionHandler} from '../application'
import type {Constructor} from '../constructor'

import {BaseApplication} from '../application'

export interface TickHandler<T = TickApplication>
  extends ActionHandler<{
    app: T
    dt: number
  }> {}
export interface TickEvent<T = TickApplication> extends Event {
  type: 'tick'
  action: TickHandler<T>
}
export type TickApplication = ReturnType<typeof withTick>
export function withTick<
  E extends Event,
  T extends Constructor<BaseApplication<E>>
>(Base: T) {
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
  }
}
