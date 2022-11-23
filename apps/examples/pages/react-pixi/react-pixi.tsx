import * as React from 'react'

import type {ApplicationInstance} from 'sketch-react-pixi'

import {Graphics, Assets, Sprite, SCALE_MODES} from 'pixi.js'
import {useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import {SketchProvider, SketchAttachment, useSketchApp} from 'sketch-react-pixi'

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <SketchProvider>
      <Container>
        <Sketch />
      </Container>
    </SketchProvider>
  )
}

function Container({children}: {children: React.ReactNode}) {
  return <div className='screen'>{children}</div>
}

const baseRadius = 20
const growFactor = 8
const circle = new Graphics()
circle.beginFill(0xffffff, 1)
circle.drawCircle(0, 0, baseRadius)
circle.endFill()

function Sketch() {
  const app = useSketchApp()
  useEffect(() => {
    if (app == null) {
      return
    }

    // Apply render function to each frame
    app.on({
      type: 'tick',
      action: render,
    })
    const imageUrl = new URL(
      '~/public/tiles.png?as=webp&width=100',
      import.meta.url
    )
    async function load() {
      Assets.add('image', imageUrl.toString(), {scaleMode: SCALE_MODES.NEAREST})
      const asset = await Assets.load('image')
      console.log('loaded', asset)
      const sprite = Sprite.from(asset)
      sprite.setTransform(100, 100, 2, 2)
      if (app != null) {
        app.pixi.stage.addChild(sprite)
      }
    }

    load().then(() => {
      console.log('async useeffect loaded, this is a horrible pattern')
    })

    // Initiate pixi stage objects
    app.pixi.stage.addChild(circle)
  }, [app])
  return <SketchAttachment />
}

let time = 0
function render({app, dt}: {app: ApplicationInstance; dt: number}) {
  time = time + dt / 500

  const scale = growFactor + 1 + Math.sin(time) * growFactor
  circle.setTransform(
    app.canvas.width * 0.5,
    app.canvas.height * 0.5,
    scale,
    scale
  )
}
