/**
 * @jest-environment jsdom
 */

import {test, expect} from '@jest/globals'

import {create} from './'

test('Returns a rendering context', () => {
  const ctx = create()

  // js-dom and canvas does not expose CanvasRenderingContext2D so we can not check for instanceof, lets fallback to duck-typing
  expect(ctx).toBe(ctx?.canvas.getContext('2d'))
  expect(ctx?.arc).toBeDefined()
  expect(ctx?.drawImage).toBeDefined()
})

test('Can pass an existing canvas', () => {
  const canvas = document.createElement('canvas')
  const ctx = create({
    canvas,
  })

  expect(ctx).toBe(canvas.getContext('2d'))
  // expect(ctx?.clearRect).toBeDefined()
})

// node-canvas does not support inspecting attributes using ctx.getContextAttributes so we will just check the function is called and does not throw. This is a bit rubbish to be honest.
test('Can pass attributes to the context creation function', () => {
  expect(() => {
    create({
      attributes: {
        alpha: false,
      },
    })
  }).not.toThrow()
})
