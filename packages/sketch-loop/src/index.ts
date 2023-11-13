import type {Attachment} from 'sketch-attach'
import type {
  ResizeEvent,
  TickEvent,
  InteractionEvent,
  TickApplication,
  ResizeApplication,
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
  | ResizeEvent<CtxApplication<ResizeEvent>>
  | TickEvent<CtxApplication<TickEvent>>
  | InteractionEvent<CtxApplication<InteractionEvent>>,
  TickApplication & ResizeApplication & typeof CtxApplication
>(withTick(withResize(CtxApplication)))
export type ApplicationInstance = InstanceType<typeof Application>
