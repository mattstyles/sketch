/**
 * @jest-environment jsdom
 */

import {test, expect} from '@jest/globals'

import {attach} from './'

test('Should attach a given canvas to a given container', () => {
  const canvas = document.createElement('canvas')
  const container = document.createElement('div')
  attach({canvas, container})

  expect(canvas.parentElement).toBe(container)
})

test('Should create and attach a canvas to a given container', () => {
  const container = document.createElement('div')
  const {canvas} = attach({container})
  expect(canvas.parentElement).toBe(container)
})

test('Should check that a given canvas has a parent when no container is supplied', () => {
  const canvas = document.createElement('canvas')

  expect(() => {
    attach({canvas})
  }).toThrow()
})
