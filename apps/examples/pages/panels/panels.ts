import type {TickEvent, TickHandler} from 'sketch-application'
import type {ApplicationInstance} from 'sketch-loop'
import {loop} from 'sketch-loop'

const panel1El = document.querySelector('.js-panel-1') as HTMLDivElement
const panel2El = document.querySelector('.js-panel-2') as HTMLDivElement
const panel3El = document.querySelector('.js-panel-3') as HTMLDivElement
const panel4El = document.querySelector('.js-panel-4') as HTMLDivElement

class Panel {
  app: ApplicationInstance
  time: number = 0
  size: number = 1

  constructor(el: HTMLDivElement, start: string, stop: string) {
    this.app = loop({container: el})
    this.app.on({
      type: 'tick',
      action: createRenderer(start, stop, this),
    })
    this.app.on({
      type: 'tick',
      action: ({dt}) => {
        this.time = this.time + dt / 500
        this.size = 1 + Math.sin(this.time) * 0.35
      },
    })

    this.app.start()
  }
}

function createRenderer(
  start: string,
  stop: string,
  panel: Panel
): TickHandler<ApplicationInstance> {
  return function render({
    dt,
    app,
  }: Parameters<TickHandler<ApplicationInstance>>[0]) {
    const gradient = app.ctx.createLinearGradient(
      0,
      app.ctx.canvas.height * 0.85,
      app.ctx.canvas.width,
      app.ctx.canvas.height * 0.25
    )
    gradient.addColorStop(0, start)
    gradient.addColorStop(1, stop)
    app.ctx.fillStyle = gradient
    app.ctx.fillRect(0, 0, app.ctx.canvas.width, app.ctx.canvas.height)

    for (let i = 0; i <= 8; i++) {
      const baseSize = Math.min(app.canvas.width, app.canvas.height) * 0.25
      const size = baseSize * panel.size
      app.ctx.beginPath()
      app.ctx.strokeStyle = `rgba(255, 250, 248, ${1 - i / 9})`
      app.ctx.lineWidth = 4 + (1 - i / 8) * 4
      app.ctx.arc(
        app.canvas.width * 0.5,
        app.canvas.height * 0.5,
        size - i * (size * 0.05),
        0,
        Math.PI * 2
      )
      app.ctx.stroke()
    }
  }
}

const panel1 = new Panel(panel1El, '#fbab7e', '#f7ce68')
const panel2 = new Panel(panel2El, '#00dbde', '#fc00ff')
const panel3 = new Panel(panel3El, '#009245', '#FCEE21')
const panel4 = new Panel(panel4El, '#662D8C', '#ED1E79')
