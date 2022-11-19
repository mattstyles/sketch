import type {Attachment} from 'sketch-attach'
import {attach} from 'sketch-attach'
import {withResize, CtxApplication, ResizeEvent} from 'sketch-application'

export function fit(opts?: Attachment) {
  const {canvas} = attach(opts)
  return new Application(canvas)
}

const Application = withResize<
  ResizeEvent<CtxApplication<ResizeEvent>>,
  typeof CtxApplication
>(CtxApplication)
