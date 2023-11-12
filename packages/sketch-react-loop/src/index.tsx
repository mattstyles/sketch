import type {ApplicationInstance} from 'sketch-loop'
import type {TickEvent, ResizeEvent, InteractionEvent} from 'sketch-application'
import {useEffect, useRef} from 'react'
import {loop} from 'sketch-loop'

export type {Application} from 'sketch-loop'

export type TickAction = TickEvent<ApplicationInstance>['action']
export type ResizeAction = ResizeEvent<ApplicationInstance>['action']
type InteractionActionParams = Parameters<InteractionEvent<ApplicationInstance>['action']>[0]
interface InteractionParams extends InteractionActionParams {
  type: InteractionEvent<ApplicationInstance>['type']
}
export type InteractionAction = (args: InteractionParams) => void
export type Props = {
  onTick: TickAction
  onResize?: ResizeAction
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
        action: onResize
      })
    }
    if (onInteraction != null) {
      function createInteractionEvent(type: InteractionParams['type']) {
        return function onInteractionEvent(args: InteractionActionParams) {
          if (onInteraction != null) {
            onInteraction({
              type: type,
              ...args
            })
          }
        }
      }
      app.on({
        type: 'pointerdown',
        action: createInteractionEvent('pointerdown')
      })
      app.on({
        type: 'pointermove',
        action: createInteractionEvent('pointermove')
      })
      app.on({
        type: 'pointerup',
        action: createInteractionEvent('pointerup')
      })
    }
    app.start()

    return () => {
      app.dispose()
    }
  }, [ref, onTick])
  return <canvas ref={ref}></canvas>
}
