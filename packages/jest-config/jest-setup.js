/**
 * Jest setup file to mock Canvas API for jsdom environment
 * This avoids the need for the native 'canvas' package
 */

// Helper to create a no-op function
const noop = () => {}

// Cache contexts per canvas element to ensure the same context is returned
const contextCache = new WeakMap()

// Mock HTMLCanvasElement.getContext for jsdom
HTMLCanvasElement.prototype.getContext = function (contextType, contextAttributes) {
  if (contextType === '2d') {
    // Return cached context if it exists
    if (contextCache.has(this)) {
      return contextCache.get(this)
    }

    // Create a mock 2D context with all the methods canvas code might use
    const context = {
      canvas: this,
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 1,
      lineCap: 'butt',
      lineJoin: 'miter',
      miterLimit: 10,
      lineDashOffset: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 0,
      shadowColor: 'transparent',
      globalAlpha: 1,
      globalCompositeOperation: 'source-over',
      font: '10px sans-serif',
      textAlign: 'start',
      textBaseline: 'alphabetic',
      direction: 'inherit',
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'low',

      // Drawing rectangles
      clearRect: noop,
      fillRect: noop,
      strokeRect: noop,

      // Drawing text
      fillText: noop,
      strokeText: noop,
      measureText: () => ({ width: 0 }),

      // Line methods
      beginPath: noop,
      closePath: noop,
      moveTo: noop,
      lineTo: noop,

      // Bezier and curves
      bezierCurveTo: noop,
      quadraticCurveTo: noop,
      arc: noop,
      arcTo: noop,
      ellipse: noop,
      rect: noop,

      // Path drawing
      fill: noop,
      stroke: noop,
      clip: noop,
      isPointInPath: noop,
      isPointInStroke: noop,

      // Transformations
      rotate: noop,
      scale: noop,
      translate: noop,
      transform: noop,
      setTransform: noop,
      resetTransform: noop,
      getTransform: noop,

      // Drawing images
      drawImage: noop,

      // Pixel manipulation
      createImageData: noop,
      getImageData: noop,
      putImageData: noop,

      // Compositing
      save: noop,
      restore: noop,

      // Line styles
      setLineDash: noop,
      getLineDash: () => [],

      // Gradients and patterns
      createLinearGradient: noop,
      createRadialGradient: noop,
      createPattern: noop,

      // Focus
      drawFocusIfNeeded: noop,

      // Context attributes
      getContextAttributes: () => contextAttributes || {},
    }

    // Cache the context for this canvas element
    contextCache.set(this, context)
    return context
  }
  return null
}

// Mock other canvas methods if needed
HTMLCanvasElement.prototype.toDataURL = () => ''
HTMLCanvasElement.prototype.toBlob = noop

