import * as React from 'react'
import type {Props, InteractionAction} from 'sketch-react-loop'

import {createRoot} from 'react-dom/client'
import {SketchLoop} from 'sketch-react-loop'

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <Container>
      <SketchLoop onTick={render} onInteraction={onInteractionEvent}/>
    </Container>
  )
}

function Container({children}: React.PropsWithChildren) {
  return <div style={{width: '100vw', height: '100vh'}}>{children}</div>
}

function onInteractionEvent({type, app, point}: Parameters<InteractionAction>[0]) {
  console.log(type, '::', point, ',,')
}

let time = 0
function render({app, dt}: Parameters<Props['onTick']>[0]) {
  time = time + dt / 500

  app.ctx.fillStyle = '#232527'
  app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height)

  app.ctx.beginPath()
  app.ctx.strokeStyle = '#ff7034'
  app.ctx.lineWidth = 4
  app.ctx.arc(
    app.canvas.width * 0.5,
    app.canvas.height * 0.5,
    Math.min(app.canvas.width, app.canvas.height) *
      0.25 *
      (1 + Math.sin(time) * 0.2),
    0,
    Math.PI * 2
  )
  app.ctx.stroke()
}
