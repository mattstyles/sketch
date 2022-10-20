import type {ResizeApplication} from 'sketch-application'
import type {Attachment} from 'sketch-attach'
import {attach} from 'sketch-attach'
import {withResize, BaseApplication} from 'sketch-application'

export function fit(opts?: Attachment) {
  const {canvas} = attach(opts)
  return new Application(canvas)
}

const Application = withResize(BaseApplication)
export type Application = ResizeApplication
