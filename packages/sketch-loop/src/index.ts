import type {Attachment} from 'sketch-attach'
import type {
  ResizeEvent,
  TickEvent,
  InteractionEvent,
  TickApplication,
} from 'sketch-application'

import {attach} from 'sketch-attach'
import {
  withTick,
  withResize,
  withInteraction,
  CtxApplication,
} from 'sketch-application'

export function loop(opts?: Attachment) {
  const {canvas} = attach(opts)
  return new Application(canvas)
}

export const Application = withInteraction<
  ResizeEvent | TickEvent | InteractionEvent,
  TickApplication & typeof CtxApplication
>(withTick(withResize(CtxApplication)))
