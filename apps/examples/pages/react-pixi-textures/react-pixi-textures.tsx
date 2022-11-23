import * as React from 'react'

import type {ApplicationInstance} from 'sketch-react-pixi'

import {Sprite} from 'pixi.js'
import {useEffect, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import {SketchProvider, SketchAttachment, useSketchApp} from 'sketch-react-pixi'

import {ErrorBoundary} from './errorBoundary'
import {TextureLoader, useTextures} from './textureLoader'

const container = document.querySelector('.js-app') as HTMLElement
const root = createRoot(container)
root.render(<App />)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <TextureLoader>
          <SketchProvider>
            <Container>
              <Sketch />
            </Container>
          </SketchProvider>
        </TextureLoader>
      </ErrorBoundary>
    </Suspense>
  )
}

function Container({children}: {children: React.ReactNode}) {
  return <div className='screen'>{children}</div>
}

let time = 0
function Sketch() {
  const app = useSketchApp()
  const textures = useTextures()
  useEffect(() => {
    if (app == null) {
      return
    }

    const blob = textures.get('blob')
    if (blob == null) {
      return
    }

    const sprite = Sprite.from(blob)
    const center = [app.canvas.width * 0.5, app.canvas.height * 0.5]
    const size = 10
    const scale = 40
    const position = [
      center[0] - size * scale * 0.5,
      center[1] - size * scale * 0.5,
    ]
    sprite.setTransform(position[0], position[1], scale, scale)
    app.pixi.stage.addChild(sprite)

    app.on({
      type: 'tick',
      action: ({dt}) => {
        time = time + dt / 500

        sprite.setTransform(
          position[0],
          position[1] - Math.sin(time) * 10 * scale,
          scale,
          scale
        )
      },
    })
  }, [app, textures])
  return <SketchAttachment />
}
