import type {ApplicationInstance} from 'sketch-loop'
import type {CtxApplication, TickEvent as TickHandler} from 'sketch-application'
import {useEffect, useRef} from 'react'
import {loop} from 'sketch-loop'

export type {Application} from 'sketch-loop'

export type TickEvent = Parameters<
  TickHandler<ApplicationInstance>['action']
>[0]
export type Props = {
  onTick: (opts: TickEvent) => void
}
export function SketchLoop({onTick}: Props) {
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
    app.start()

    return () => {
      app.dispose()
    }
  }, [ref, onTick])
  return <canvas ref={ref}></canvas>
}
