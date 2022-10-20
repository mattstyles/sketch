# Sketch-fit

[![npm](https://img.shields.io/npm/v/sketch-fit.svg?style=flat)](https://www.npmjs.com/package/sketch-fit)

> Sizes a canvas element to a container and uses a ResizeObserver to keep it the same size

Based on [canvas-fit](https://github.com/hughsk/canvas-fit) but with some modernisation to use a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) which allows the canvas to respond to changes in its container.

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-fit
```

Sketch-fit sorts out keeping a canvas element sized to its parent element. It returns an application object to interact with the canvas and context.

```js
import {fit} from 'sketch-fit'

const canvas = document.querySelector('.js-canvas')
const app = fit({canvas})

app.on({
  type: 'resize',
  action: () => {
    app.ctx.fillStyle = '#232527'
    app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height)
  },
})
```

## API

```
fit(opts?: {
  canvas?: HTMLCanvasElement
  container?: HTMLElement
}): ResizeApplication
```

The resize application exposes the `canvas` and the `ctx` for rendering.
It also exposes `on` and `dispose` methods for handling events.

A resize application uses a ResizeObserver to ensure that the canvas remains the same size as its container as things change. Use `dispose` to stop observing.

```
class ResizeApplication {
  constructor: (canvas: HTMLCanvasElement)
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  on: ({
    type: 'resize'
    action: () => void
  }) => () => void
  dispose: () => void
}
```

### Events

```
{
  type: 'resize',
  action: () => void
}
```

ResizeApplications expose only a 'resize' event. The callback receives no arguments.

`ResizeApplication::on` returns a function which can be used to dispose of the attached action handler.

## License

MIT
