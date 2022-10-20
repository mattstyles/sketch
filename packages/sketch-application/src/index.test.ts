/**
 * @jest-environment jsdom
 */

import {describe, test, expect, jest} from '@jest/globals'

import {BaseApplication} from './'

describe('Expose mixin functionality for shared infra', () => {
  test('Application can run dispose methods when called', () => {
    const app = new BaseApplication(document.createElement('canvas'))

    const dispose = jest.fn()
    app._disposers.add(dispose)

    app.dispose()
    expect(dispose).toHaveBeenCalled()

    const dispose2 = jest.fn()
    app._disposers.add(dispose2)
    app.dispose()
    expect(dispose).toHaveBeenCalledTimes(2)
    expect(dispose2).toHaveBeenCalled()
  })

  test('Events can be applied and unsubscribed from', () => {
    const app = new BaseApplication(document.createElement('canvas'))

    const cb = jest.fn()
    app._events.set('foo', new Map())
    const unsubscribe = app.on({
      type: 'foo',
      action: cb,
    })

    for (let [_, fn] of app._events.get('foo') ?? new Map()) {
      fn()
    }

    expect(cb).toHaveBeenCalled()
    unsubscribe()
    for (let [_, fn] of app._events.get('foo') ?? new Map()) {
      fn()
    }
    expect(cb).toHaveBeenCalledTimes(1)
  })
})
