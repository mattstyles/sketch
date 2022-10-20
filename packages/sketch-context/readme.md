# Sketch-context

[![npm](https://img.shields.io/npm/v/sketch-context.svg?style=flat)](https://www.npmjs.com/package/sketch-context)

> Creates a 2d rendering context

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-context
```

Given a canvas element this function will return a 2d rendering context associated with it.

It will sort out setting the size of the canvas based on the device pixel ratio of the screen meaning that the context will look sharp on higher dpi devices.

```js
import {create} from 'sketch-context'

const canvas = document.querySelector('.js-canvas')
const ctx = create({
  canvas,
})
```

It will create a canvas element if you do not supply one.

```js
import {create} from 'sketch-context'
const ctx = create({
  attributes: {
    alpha: false,
  },
})
```

## API

```
const ctx = create(opts?)
```

- `canvas?` HTMLCanvasElement to use.
- `attributes?` CanvasRenderingContext2DSettings to pass to getContext, such as alpha.

## Examples

Sketch smoothes out the experience of creating and rendering on to a canvas.

```js
import {create as createCanvas} from 'sketch-canvas'
import {create as createContext} from 'sketch-context'

const canvas = createCanvas({
  width: 640,
  height: 480,
})
const ctx = createContext({canvas})

ctx.fillStyle = '#f7ce68'
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
```

## License

MIT
