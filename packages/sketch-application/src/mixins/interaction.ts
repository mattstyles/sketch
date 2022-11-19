import type {Event} from '../application'
import type {Constructor} from '../constructor'

import {BaseApplication} from '../application'

export type Point = {x: number; y: number}
export interface InteractionEvent<T = InteractiveApplication> extends Event {
  type: 'pointerdown' | 'pointerup' | 'pointermove'
  action: ({app, point}: {app: T; point: Point}) => void
}
export type InteractiveApplication = ReturnType<typeof withInteraction>
export function withInteraction<
  E extends Event,
  T extends Constructor<BaseApplication<E>>
>(Base: T) {
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
  }
}
