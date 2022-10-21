# Sketch-loop

[![npm](https://img.shields.io/npm/v/sketch-loop.svg?style=flat)](https://www.npmjs.com/package/sketch-loop)

> Returns an application which exposes a canvas and a context. The canvas will stay the same size as its container and the application exposes a tick event which is tied to requestAnimationFrame.

Based on [canvas-loop](https://github.com/mattdesl/canvas-loop) but with some modernisation:

- Uses a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) which allows the canvas to fit a container and be responsive to changes.
- Exposes methods for detaching handlers enabling interop with UI frameworks that own the lifecycle of components.

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-loop
```

Sketch-loop is great for setting up demos or small canvas animations, it has a couple of features:

- Creates a rendering context and canvas ready for high dpi screens
- Exposes an event tied to requestAnimationFrame
- Ensures the canvas remains the same size as the container

```js
import {loop} from 'sketch-loop'

const canvas = document.querySelector('.js-canvas')
const app = loop({canvas})

app.on({
  type: 'tick',
  action: (dt) => {
    app.ctx.fillStyle = '#232527'
    app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height)
  },
})

app.start()
```

## API

```
loop(opts?: {
  canvas?: HTMLCanvasElement
  container?: HTMLElement
}): Application
```

The application exposes the `canvas` and the `ctx` for rendering.
It also exposes `on` and `dispose` methods for handling events.
Animations are handled via `start` and `stop` methods.
The `dispose` method handles unobserving size changes and calls `cancelAnimationFrame` to halt animations.

```
class Application {
  constructor: (canvas: HTMLCanvasElement)
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  on: ({
    type: 'resize'
    action: () => void
  } | {
    type: 'tick'
    action: (dt: number) => void
  }) => () => void
  dispose(): void
  start(): void
  stop(): void
}
```

### Events

`Application::on` always returns a function which can be used to dispose of the attached action handler.

#### tick

```
{
  type: 'tick',
  action: (dt: number) => void
}
```

The tick event exposes the elapsed time between calls. Calling `start` always resets this timer so you can `stop` and `start` an animation and get the elapsed time from the last rendered frame.

#### resize

```
{
  type: 'resize',
  action: () => void
}
```

## License

MIT
