import type {TickEvent as TickHandler} from 'sketch-application'
import type {ApplicationInstance} from 'sketch-loop'
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {loop} from 'sketch-loop'

export type {ApplicationInstance} from 'sketch-loop'

type ApplicationContext = {
  app: ApplicationInstance | null
  setApp: (app: ApplicationInstance | null) => void
} | null
const applicationContext = createContext<ApplicationContext>(null)

export function SketchProvider({
  children,
  app,
}: {
  children: React.ReactNode
  app?: ApplicationInstance
}) {
  const [application, setApp] = useState<ApplicationInstance | null>(
    app ?? null,
  )
  return (
    <applicationContext.Provider
      value={{
        app: application,
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

export function useSketchApp(): ApplicationInstance | null {
  const ctx = useContext(applicationContext)
  return ctx?.app ?? null
}

export type TickEvent = Parameters<
  TickHandler<ApplicationInstance>['action']
>[0]
export function useSketchTick(onTick: ({dt, app}: TickEvent) => void): void {
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
