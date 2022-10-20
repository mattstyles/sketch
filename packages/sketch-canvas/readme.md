# Sketch-canvas

[![npm](https://img.shields.io/npm/v/sketch-canvas.svg?style=flat)](https://www.npmjs.com/package/sketch-canvas)

> Creates a canvas element

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-canvas
```

Sketch-canvas will size the canvas based on the screen dpi so that higher dpi screens remain sharp.

```js
import {create} from 'sketch-canvas'

const canvas = create({
  width: 320,
  height: 240,
})
```

## API

```
const canvas = create(opts?)
```

- **width?** `number`
- **height?** `number`

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
