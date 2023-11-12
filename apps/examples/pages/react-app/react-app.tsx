import * as React from 'react'
import {useState} from 'react'
import type {ApplicationInstance, TickEvent} from 'sketch-react-app'

import {createRoot} from 'react-dom/client'
import {
  SketchProvider,
  SketchAttachment,
  useSketchApp,
  useSketchTick,
} from 'sketch-react-app'

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <SketchProvider>
      <Container>
        <Sketch />
        <Controls />
      </Container>
    </SketchProvider>
  )
}

function Container({children}: {children: React.ReactNode}) {
  return <div style={{width: '100vw', height: '100vh'}}>{children}</div>
}

function Sketch() {
  useSketchTick(render)
  return <SketchAttachment />
}

function Controls() {
  const app = useSketchApp()
  const [isRunning, setIsRunning] = useState(true)

  return (
    <div className='overlay absolute top-right'>
      <button
        disabled={app == null}
        onClick={() => {
          if (app == null) {
            return
          }

          if (isRunning) {
            app.stop()
          } else {
            app.start()
          }

          setIsRunning(app.isRunning)
        }}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  )
}

let time = 0
function render({app, dt}: TickEvent) {
  time = time + dt / 500

  const padding = 16
  const gradient = app.ctx.createLinearGradient(
    0,
    app.ctx.canvas.height * 0.85,
    app.ctx.canvas.width,
    app.ctx.canvas.height * 0.25,
  )
  gradient.addColorStop(0, '#85ffbd')
  gradient.addColorStop(1, '#fffb7d')
  app.ctx.fillStyle = gradient
  app.ctx.fillRect(
    0 + padding,
    0 + padding,
    app.ctx.canvas.width - padding * 2,
    app.ctx.canvas.height - padding * 2,
  )

  app.ctx.beginPath()
  app.ctx.strokeStyle = '#484442'
  app.ctx.lineWidth = 4
  app.ctx.arc(
    app.canvas.width * 0.5,
    app.canvas.height * 0.5,
    Math.min(app.canvas.width, app.canvas.height) *
      0.25 *
      (1 + Math.sin(time) * 0.2),
    0,
    Math.PI * 2,
  )
  app.ctx.stroke()
}
