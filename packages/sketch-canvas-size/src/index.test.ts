/**
 * @jest-environment jsdom
 */

import {test, expect} from '@jest/globals'

import {setCanvasSize, setCanvasDpr} from './'

test('Should set the size of the canvas element', () => {
  const canvas = setCanvasSize({
    canvas: document.createElement('canvas'),
    width: 600,
    height: 400,
  })
  const dpr = window.devicePixelRatio
  expect(canvas instanceof HTMLCanvasElement).toBeTruthy()
  expect(canvas.width).toBe(600 * dpr)
  expect(canvas.height).toBe(400 * dpr)
})

test('Should use the dpr to set the canvas size', () => {
  const width = 400
  const height = 300
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  setCanvasDpr({canvas, dpr: 1})
  expect(canvas.width).toEqual(width)
  expect(canvas.height).toEqual(height)

  setCanvasDpr({canvas, dpr: 2})
  expect(canvas.width).toEqual(width * 2)
  expect(canvas.height).toEqual(height * 2)
})
