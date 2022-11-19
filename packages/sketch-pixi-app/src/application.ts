import type {
  ResizeEvent,
  TickEvent,
  InteractionEvent,
  TickApplication,
  Event,
} from 'sketch-application'
import type {IApplicationOptions} from 'pixi.js'

import {Application as PixiApp} from 'pixi.js'

import {
  BaseApplication,
  withTick,
  withResize,
  withInteraction,
} from 'sketch-application'

export class PixiApplication<E extends Event> extends BaseApplication<E> {
  pixi: PixiApp

  constructor(
    canvas: HTMLCanvasElement,
    pixiOptions: IApplicationOptions = {}
  ) {
    super(canvas)

    // Resolution of 1 and autoDensity: false should be set here as sketch attach takes care of scaling the canvas element for dpr > 1. By setting 1 here we get resolution dependence but the screen coords will equal the renderer coords without worrying about scaling
    this.pixi = new PixiApp({
      resolution: 1,
      autoDensity: false,
      view: canvas,
      ...pixiOptions,
    })
  }
}

export const Application = withInteraction<
  | ResizeEvent<PixiApplication<ResizeEvent>>
  | TickEvent<PixiApplication<TickEvent>>
  | InteractionEvent<PixiApplication<InteractionEvent>>,
  TickApplication & typeof PixiApplication
>(withTick(withResize(PixiApplication)))
