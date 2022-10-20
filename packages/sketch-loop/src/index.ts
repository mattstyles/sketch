import type {Attachment} from 'sketch-attach'
import {attach} from 'sketch-attach'
import {withTick, withResize, BaseApplication} from 'sketch-application'

export function loop(opts?: Attachment) {
  const {canvas} = attach(opts)
  return new Application(canvas)
}

const Application = withTick(withResize(BaseApplication))
