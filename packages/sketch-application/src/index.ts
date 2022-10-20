export type {Event} from './application'
export type {ResizeEvent, TickEvent} from './mixins'

import {BaseApplication} from './application'
import {withResize, withTick} from './mixins'
export type {ResizeApplication, TickApplication} from './mixins'

// export const ResizeApplication = withResize(BaseApplication)
// export const TickApplication = withTick(BaseApplication)

export {BaseApplication, withResize, withTick}
