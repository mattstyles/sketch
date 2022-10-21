import type {TickApplication, ResizeApplication} from 'sketch-application'
import type {Attachment} from 'sketch-attach'
import {attach} from 'sketch-attach'
import {withTick, withResize, BaseApplication} from 'sketch-application'

export function loop(opts?: Attachment): Application {
  const {canvas} = attach(opts)
  const app = new Application(canvas)
  return app
}

export const Application = withTick(withResize(BaseApplication))
export type Application = TickApplication & ResizeApplication
