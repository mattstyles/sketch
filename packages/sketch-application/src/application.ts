import {v4 as uuid} from 'uuid'
import {create as createContext} from 'sketch-context'

export interface Event {
  type: string
  action: (...args: any[]) => void
}

// @TODO this API is highly subject to change
export class BaseApplication {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  // @TODO this would be better a protected which we should be able to do but our current TS config moans about it as protected can not be expressed in d.ts
  _events: Map<string, Map<string, (...args: any[]) => void>>

  // This should also be protected
  _disposers: Set<() => void>

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this._events = new Map()
    this._disposers = new Set()

    const ctx = createContext({canvas: this.canvas})
    if (ctx == null) {
      throw new Error('Erroring creating context')
    }
    this.ctx = ctx
  }

  on(event: Event): () => void {
    const id = uuid()
    if (!this._events.has(event.type)) {
      this._events.set(event.type, new Map())
    }

    const map = this._events.get(event.type)

    if (map == null) {
      throw new Error(`Can not get event map for ${event.type}`)
    }

    map.set(id, event.action)

    return () => {
      map.delete(id)
    }
  }

  dispose() {
    for (let fn of this._disposers) {
      fn()
    }
  }
}
