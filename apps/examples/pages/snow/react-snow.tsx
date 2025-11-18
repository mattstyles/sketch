import * as React from 'react'
import type {Props, InteractionAction, TickHandler, ResizeHandler} from 'sketch-react-loop'
import type {ApplicationInstance} from 'sketch-react-app'

import {createRoot} from 'react-dom/client'
import {SketchLoop} from 'sketch-react-loop'

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <Container>
      <SketchLoop onTick={render} onInteraction={onInteractionEvent} onResize={({app}) => {
        create(app.canvas.width, app.canvas.height, flakes)
      }} />
    </Container>
  )
}

function Container({children}: React.PropsWithChildren) {
  return <div style={{width: '100vw', height: '100vh'}}>{children}</div>
}

function onInteractionEvent({
  type,
  app,
  point,
}: Parameters<InteractionAction>[0]) {
  console.log(type, '::', point, ',,')
}



type Flake = {
  x: number
  y: number
  size: number
  speed: number
}

let time = 0
let flakes: Flake[] = Array.from({length: 100})
function render({app, dt}: Parameters<Props['onTick']>[0]) {
  // const render: TickHandler<ApplicationInstance> = ({app, dt}) => {
  time = time + dt / 500

  app.ctx.fillStyle = '#232527'
  app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height)

  for (const flake of flakes) {
    if (flake == undefined) {
      return
    }
    app.ctx.beginPath()
    app.ctx.fillStyle = '#fff'
    app.ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
    app.ctx.fill()
  }

  update(app.canvas.width, app.canvas.height, flakes)
}

function create(w: number, h: number, flakes: Flake[]) {
  for (let i = 0; i < flakes.length; i++) {
    flakes[i] = {
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 0.5 + 0.5,
    }
  }
}

function update(w: number, h: number, flakes: Flake[]) {
  for (let i = 0; i < flakes.length; i++) {
    flakes[i].y += flakes[i].speed
    if (flakes[i].y > h) {
      flakes[i].y = 0
    }
  }
}