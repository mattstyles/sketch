/**
 * @jest-environment jsdom
 */

// Conflicts with testing library jest dom due to matchers, had to enable globals in the jest config. Couldn't get expect.extend to work.
// import {test, expect, jest} from '@jest/globals'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import {SketchLoop} from './'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test('Sketch loop component triggers tick event', () => {
  const tick = jest.fn()

  render(<SketchLoop onTick={tick} />)

  expect(tick).toHaveBeenCalled()
})
