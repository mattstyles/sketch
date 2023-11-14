import type {
  TickHandler,
  ResizeHandler,
  InteractionEvent,
  InteractionHandler,
  ActionHandler,
} from 'sketch-application'
import type {ApplicationInstance} from 'sketch-loop'
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {loop} from 'sketch-loop'

export type {ApplicationInstance} from 'sketch-loop'

// Re-export events
export type {
  ResizeEvent,
  TickEvent,
  InteractionEvent,
  TickHandler,
  ResizeHandler,
  InteractionHandler,
} from 'sketch-application'

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

export function useSketchTick(
  onTick: TickHandler | TickHandler<ApplicationInstance>
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

type InteractionActionParams = Parameters<InteractionHandler>[0]
interface InteractionParams extends InteractionActionParams {
  type: InteractionEvent['type']
}
export interface InteractionAction extends ActionHandler<InteractionParams> {}
export function useSketchInteraction(onInteraction: InteractionAction): void {
  const app = useSketchApp()
  useEffect(() => {
    if (app == null) {
      return
    }

    const subscriptions = new Set<ReturnType<typeof app.on>>()

    subscriptions.add(
      app.on({
        type: 'pointerdown',
        action: createInteractionHandler('pointerdown', onInteraction),
      })
    )
    subscriptions.add(
      app.on({
        type: 'pointermove',
        action: createInteractionHandler('pointermove', onInteraction),
      })
    )
    subscriptions.add(
      app.on({
        type: 'pointerup',
        action: createInteractionHandler('pointerup', onInteraction),
      })
    )

    return () => {
      subscriptions.forEach((fn) => fn())
      subscriptions.clear()
    }
  }, [onInteraction, app])
}

function createInteractionHandler(
  type: InteractionEvent<ApplicationInstance>['type'],
  handler: InteractionAction
) {
  return function interactionHandler(arg: InteractionActionParams) {
    if (handler != null) {
      handler({
        type: type,
        ...arg,
      })
    }
  }
}

export function useSketchResize(onResize: ResizeHandler): void {
  const app = useSketchApp()
  useEffect(() => {
    if (app == null) {
      return
    }

    const unsubscribe = app.on({
      type: 'resize',
      action: onResize,
    })

    return () => {
      unsubscribe()
    }
  }, [onResize, app])
}
