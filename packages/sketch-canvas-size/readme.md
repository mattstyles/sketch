# Sketch-canvas-size

[![npm](https://img.shields.io/npm/v/sketch-canvas-size.svg?style=flat)](https://www.npmjs.com/package/sketch-canvas-size)

> Sets a canvas element to a specified size, honouring device pixel ratio

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-canvas-size
```

Will set the size of a canvas element whilst honouring screen dpi to keep canvas rendering sharp on higher dpi devices

```js
import {setCanvasSize} from 'sketch-canvas-size'

const canvas = document.createElement('canvas')
setCanvasSize({
  canvas: canvas,
  width: 400,
  height: 300,
})
```

A function for supplying the dpr is also exposed:

```js
import {setCanvasDpr} from 'sketch-canvas-size'

const canvas = document.createElement('canvas')
setCanvasSize({
  canvas: canvas,
  dpr: 1,
})
```

## API

```
const canvas = setCanvasSize(opts)
```

- **canvas** `HTMLCanvasElement`
- **width** `number`
- **height** `number`

## Examples

Sketch smoothes out the experience of creating and rendering on to a canvas.

```js
import {create as createCanvas} from 'sketch-canvas'
import {create as createContext} from 'sketch-context'
import {setCanvasSize} from 'sketch-canvas-size'

const canvas = createCanvas({
  width: 640,
  height: 480,
})
const ctx = createContext({canvas})

ctx.fillStyle = '#f7ce68'
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

setCanvasSize({
  canvas,
  width: 800,
  height: 600,
})
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
```

## License

MIT
