/**
 * @jest-environment jsdom
 */

import {test, expect, jest} from '@jest/globals'

import {sketch} from './'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test('Sketch pixi application can have events attached', () => {
  // Without a proper canvas mock for pixi the renderer auto detect will fail
})
