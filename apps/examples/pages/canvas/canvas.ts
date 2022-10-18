import {create} from 'sketch-canvas'

const el = document.querySelector('.js-app')
if (el == null) {
  throw new Error('Can not find root')
}

const canvas = create({
  width: 640,
  height: 480,
})

canvas.style.border = '1px solid red'
document.body.appendChild(canvas)
