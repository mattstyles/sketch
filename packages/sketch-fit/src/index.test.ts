/**
 * @jest-environment jsdom
 */

import {test, expect, jest} from '@jest/globals'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test.skip('Check that canvas matches container size', () => {
  // Without a proper observer mock the sizing logic will not get triggered so we can not test it this way
})
