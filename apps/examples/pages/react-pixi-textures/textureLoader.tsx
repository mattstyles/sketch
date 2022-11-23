import {Assets, SCALE_MODES, BaseTexture, Texture, Rectangle} from 'pixi.js'
import {createContext, useContext} from 'react'

import {Resource} from './resource'

const imageUrl = new URL(
  '~/public/tiles.png?as=webp&width=100',
  import.meta.url
)

export type Resources = Map<string, Texture>
const resource = new Resource<Resources>(async () => {
  Assets.add('sprites', imageUrl.toString(), {scaleMode: SCALE_MODES.NEAREST})
  const sheet = await Assets.load<Texture>('sprites')
  const textures = new Map<string, Texture>()

  // @TODO fix to use a padding buffer in the sprite sheet to avoid rendering artefacts
  textures.set(
    'wall',
    new Texture(sheet.baseTexture as BaseTexture, new Rectangle(0, 20, 10, 10))
  )
  textures.set(
    'blob',
    new Texture(sheet.baseTexture as BaseTexture, new Rectangle(0, 0, 10, 10))
  )
  return textures
})

type TextureContext = {
  textures: Resources
}
const textureContext = createContext<TextureContext>({
  textures: new Map(),
})

export function TextureLoader({children}: {children: React.ReactNode}) {
  const textures = resource.read()
  console.log(textures)
  // return children as React.ReactElement
  return (
    <textureContext.Provider value={{textures: textures ?? new Map()}}>
      {children}
    </textureContext.Provider>
  )
}

export function useTextures() {
  const ctx = useContext(textureContext)
  return ctx.textures
}
