/**
 * @jest-environment jsdom
 */

import {test, expect, jest} from '@jest/globals'

import {loop} from './'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test('Loop application can have events attached', () => {
  const app = loop({container: document.body})

  const action = jest.fn()
  app.on({
    type: 'tick',
    action: action,
  })

  app.start()
  expect(action).toHaveBeenCalled()
  app.dispose()
})
