import type {Attachment} from 'sketch-attach'
import type {IApplicationOptions} from 'pixi.js'

import {Application} from './application'

import {attach} from 'sketch-attach'

export function sketch(opts?: Attachment, pixiOptions?: IApplicationOptions) {
  // const app = loop(opts)
  const {canvas} = attach(opts)

  const app = new Application(canvas, pixiOptions)
  app.on({
    type: 'resize',
    // @TODO callback supplies an app but does not know whether it is a pixi or ctx app i..e app.pixi is unknown, need to supply correct type for events
    action: () => {
      app.pixi.renderer.resize(app.canvas.width, app.canvas.height)
    },
  })

  return app
}
