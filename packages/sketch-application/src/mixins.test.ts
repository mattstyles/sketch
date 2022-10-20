/**
 * @jest-environment jsdom
 */

import {describe, test, expect, jest} from '@jest/globals'

import {ResizeApplication, TickApplication} from './'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Resize mixin', () => {
  test('Resize events are setup', () => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const app = new ResizeApplication(canvas)

    expect(app._events.get(ResizeApplication.mapKey)).toBeTruthy()

    const dispose = app.on({
      type: 'resize',
      action: () => {},
    })
    const eventMap = app._events.get(ResizeApplication.mapKey)
    expect(eventMap?.size).toEqual(1)

    dispose()
    expect(eventMap?.size).toEqual(0)
  })

  test.skip('Events are dispatched', () => {
    // Without a more comprehensive observer mock we can't test triggering events
  })

  test('ResizeObserver disposer is attached', () => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const app = new ResizeApplication(canvas)

    expect(app._disposers.size).toEqual(1)
  })
})

describe('Tick mixin', () => {
  test('Tick events are setup', () => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const app = new TickApplication(canvas)

    expect(app._events.get(TickApplication.mapKey)).toBeTruthy()

    const dispose = app.on({
      type: 'tick',
      action: () => {},
    })
    const eventMap = app._events.get(TickApplication.mapKey)
    expect(eventMap?.size).toEqual(1)

    dispose()
    expect(eventMap?.size).toEqual(0)
  })

  test('Only tick events are registered', () => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const app = new TickApplication(canvas)

    app.on({type: 'foo', action: () => {}})

    const eventMap = app._events.get(TickApplication.mapKey)
    expect(eventMap?.size).toEqual(0)
  })

  test('Tick events are triggered', () => {
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const app = new TickApplication(canvas)

    const action = jest.fn()
    app.on({type: 'tick', action: action})

    app.start()
    expect(action).toHaveBeenCalled()
    app.dispose()
  })
})
