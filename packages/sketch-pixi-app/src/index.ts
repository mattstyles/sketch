import type {Attachment} from 'sketch-attach'
import type {IApplicationOptions} from 'pixi.js'
export type {ApplicationInstance} from './application'

import {Application} from './application'

import {attach} from 'sketch-attach'

export {PixiApplication} from './application'

export function sketch(opts?: Attachment, pixiOptions?: IApplicationOptions) {
  const {canvas} = attach(opts)

  const app = new Application(canvas, pixiOptions)
  app.on({
    type: 'resize',
    action: ({app}) => {
      app.pixi.renderer.resize(app.canvas.width, app.canvas.height)
      app.pixi.render()
    },
  })

  return app
}
