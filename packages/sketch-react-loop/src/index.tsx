import type {ApplicationInstance} from 'sketch-loop'
import type {
  InteractionEvent,
  TickHandler,
  ResizeHandler,
  InteractionHandler,
} from 'sketch-application'
import {useEffect, useRef} from 'react'
import {loop} from 'sketch-loop'

export type {Application} from 'sketch-loop'

// Re-export events
export type {
  ResizeEvent,
  TickEvent,
  InteractionEvent,
  TickHandler,
  ResizeHandler,
  InteractionHandler,
} from 'sketch-application'

type InteractionActionParams = Parameters<InteractionHandler>[0]
interface InteractionParams extends InteractionActionParams {
  type: InteractionEvent['type']
}
export type InteractionAction = (arg: InteractionParams) => void
export type Props = {
  onTick: TickHandler
  onResize?: ResizeHandler
  onInteraction?: InteractionAction
}
export function SketchLoop({onTick, onResize, onInteraction}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (ref == null || ref.current == null) {
      return
    }

    const app = loop({
      canvas: ref.current,
    })
    app.on({
      type: 'tick',
      action: onTick,
    })
    if (onResize != null) {
      app.on({
        type: 'resize',
        action: onResize,
      })
    }
    if (onInteraction != null) {
      function createInteractionEvent(type: InteractionParams['type']) {
        return function onInteractionEvent(args: InteractionActionParams) {
          if (onInteraction != null) {
            onInteraction({
              type: type,
              ...args,
            })
          }
        }
      }
      app.on({
        type: 'pointerdown',
        action: createInteractionEvent('pointerdown'),
      })
      app.on({
        type: 'pointermove',
        action: createInteractionEvent('pointermove'),
      })
      app.on({
        type: 'pointerup',
        action: createInteractionEvent('pointerup'),
      })
    }
    app.start()

    return () => {
      app.dispose()
    }
  }, [ref, onTick, onInteraction, onResize])
  return <canvas ref={ref}></canvas>
}
