/**
 * @jest-environment jsdom
 */

import {test, expect} from '@jest/globals'

import {create} from './'

test('Should create a canvas element', () => {
  const canvas = create()
  expect(canvas instanceof HTMLCanvasElement).toBeTruthy()
})

test('Should size the canvas correctly', () => {
  const width = 400
  const height = 300
  const canvas = create({
    width,
    height,
  })
  const dpr = window.devicePixelRatio
  expect(canvas.width).toEqual(width * dpr)
  expect(canvas.height).toEqual(height * dpr)
})
