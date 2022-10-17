/**
 * @jest-environment jsdom
 */

import {test, expect} from '@jest/globals'

import {create} from './'

test('Test the dom', () => {
  const ctx = create()
  expect(ctx instanceof CanvasRenderingContext2D).toBeTruthy()
})
