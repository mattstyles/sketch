import type {Application} from 'sketch-loop'
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {loop} from 'sketch-loop'

export type {Application} from 'sketch-loop'

type ApplicationContext = {
  app: Application | null
  setApp: (app: Application | null) => void
} | null
const applicationContext = createContext<ApplicationContext>(null)

export function SketchProvider({children}: {children: React.ReactNode}) {
  const [app, setApp] = useState<Application | null>(null)
  return (
    <applicationContext.Provider
      value={{
        app,
        setApp,
      }}>
      {children}
    </applicationContext.Provider>
  )
}

export function SketchAttachment() {
  const ctx = useContext(applicationContext)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (ctx == null) {
      throw new Error('Sketch attachment must be a child of a sketch provider')
    }

    if (canvas == null || canvas.current == null) {
      return
    }

    if (ctx.app == null) {
      const app = loop({canvas: canvas.current})
      app.start()
      ctx.setApp(app)
    } else {
      ctx.app.start()
    }

    return () => {
      if (ctx && ctx.app != null) {
        ctx.app.dispose()
      }
    }
  }, [canvas, ctx])
  return <canvas ref={canvas}></canvas>
}

export function useSketchApp(): Application | null {
  const ctx = useContext(applicationContext)
  return ctx?.app ?? null
}

export function useSketchTick(
  onTick: ({dt, app}: {dt: number; app: Application}) => void
): void {
  const app = useSketchApp()
  useEffect(() => {
    if (app == null) {
      return
    }

    const unsubscribe = app.on({
      type: 'tick',
      action: onTick,
    })

    return () => {
      unsubscribe()
    }
  }, [onTick, app])
}
