# Sketch

Sketch exposes a number of utility functions (all in their own packages) for handling canvas and a 2d rendering context.

Wherever possible functions share a common API and patterns.

See [examples](https://mattstyles.github.io/sketch).

## Getting started

Sketch is great at setting up demos or small rendering environments for canvas elements and provides a number of helpers to smooth out the experience such as setting up the rendering environment for high dpi screens and managing the size of the rendering area.

Use [sketch-loop](https://github.com/mattstyles/sketch/blob/master/packages/sketch-loop) to quickly scaffold a rendering environment.

```html
<style>
  body {
    width: 100vw;
    height: 100vh;
  }
</style>
```

```js
import {loop} from 'sketch-loop'

const app = loop({
  container: document.body,
})

let time = 0
app.on({
  type: 'tick',
  action: (dt) => {
    time = time + dt

    app.ctx.fillStyle = '#232527'
    app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height)

    app.ctx.beginPath()
    app.ctx.strokeStyle = '#ff7034'
    app.ctx.lineWidth = 4
    app.ctx.arc(
      app.canvas.width * 0.5,
      app.canvas.height * 0.5,
      Math.min(app.canvas.width, app.canvas.height) *
        0.25 *
        (1 + Math.sin(time) * 0.2),
      0,
      Math.PI * 2
    )
    app.ctx.stroke()
  },
})
```
