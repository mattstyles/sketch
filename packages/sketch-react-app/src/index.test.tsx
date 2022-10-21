/**
 * @jest-environment jsdom
 */

// Conflicts with testing library jest dom due to matchers, had to enable globals in the jest config. Couldn't get expect.extend to work.
import {useEffect} from 'react'
import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

import {SketchProvider, SketchAttachment, useSketchApp, useSketchTick} from './'

//@ts-ignore
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

test('Sketch app can be accessed via context', async () => {
  const tick = jest.fn()

  function Child() {
    const app = useSketchApp()
    useEffect(() => {
      if (app == null) {
        return
      }

      const unsubscribe = app.on({
        type: 'tick',
        action: tick,
      })

      return unsubscribe
    }, [app])
    return <SketchAttachment />
  }
  function Test() {
    return (
      <SketchProvider>
        <Child />
      </SketchProvider>
    )
  }

  render(<Test />)

  await waitFor(() => {
    expect(tick).toHaveBeenCalled()
  })
})

test('useSketchTick helper will fire', async () => {
  const tick = jest.fn()

  function Child() {
    useSketchTick(tick)
    return <SketchAttachment />
  }
  function Test() {
    return (
      <SketchProvider>
        <Child />
      </SketchProvider>
    )
  }

  render(<Test />)

  await waitFor(() => {
    expect(tick).toHaveBeenCalled()
  })
})
