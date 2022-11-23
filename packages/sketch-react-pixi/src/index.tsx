import type {ApplicationInstance} from 'sketch-pixi-app'

import {createContext, useContext, useEffect, useRef, useState} from 'react'

import {sketch} from 'sketch-pixi-app'

export type {ApplicationInstance} from 'sketch-pixi-app'

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
  app?: ApplicationInstance | null
}) {
  const [application, setApp] = useState<ApplicationInstance | null>(
    app ?? null
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
      const app = sketch({canvas: canvas.current})
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

export function useSketchTick(
  onTick: ({dt, app}: {dt: number; app: ApplicationInstance}) => void
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
