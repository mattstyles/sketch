# Sketch-attach

[![npm](https://img.shields.io/npm/v/sketch-attach.svg?style=flat)](https://www.npmjs.com/package/sketch-attach)

> Attaches a canvas element to a container

## Getting started

Install from [npm](https://npmjs.com)

```sh
npm i -S sketch-attach
```

Provides a consistent optional API for attaching a canvas element to a container. It will create a canvas element if you do not supply one.

```js
import {attach} from 'sketch-attach'

const canvas = document.createElement('canvas')
const {canvas, container} = attach({
  canvas: canvas,
  container: document.body,
})
```

## API

```
const canvas = create(opts?)
```

- **canvas?** `HTMLCanvasElement`
- **container?** `HTMLElement`

## Examples

Sketch smoothes out the experience of creating and rendering on to a canvas.

```js
import {create as createCanvas} from 'sketch-canvas'
import {create as createContext} from 'sketch-context'
import {attach} from 'sketch-attach'

const canvas = createCanvas({
  width: 640,
  height: 480,
})
const ctx = createContext({canvas})
attach({canvas, container: document.body})

ctx.fillStyle = '#f7ce68'
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
```

## License

MIT
