import type {Application} from 'sketch-loop'
import {useEffect, useRef} from 'react'
import {loop} from 'sketch-loop'

export type Props = {
  onTick: (opts: {app: Application; dt: number}) => void
}
export function SketchLoop({onTick = ({}) => {}}: Props) {
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
      action: (dt) => {
        onTick({
          dt,
          app,
        })
      },
    })
    app.start()

    return () => {
      app.dispose()
    }
  }, [ref, onTick])
  return <canvas ref={ref}></canvas>
}
