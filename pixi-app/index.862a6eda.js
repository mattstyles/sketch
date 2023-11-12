function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=globalThis,i={},s={},n=r.parcelRequireedcf;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},r.parcelRequireedcf=n);var a=n.register;a("bIxrZ",function(t,r){e(t.exports,"sketch",()=>m),n("eQBmg");var i=n("7nNKe"),s=n("7XNOC"),a=n("io0Tf"),o=Object.defineProperty,l=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&d(e,r,t[r]);return e},p=class extends s.BaseApplication{constructor(e,t={}){super(e),this.pixi=new i.Application(c({resolution:1,autoDensity:!1,view:e},t))}},f=(0,s.withInteraction)((0,s.withTick)((0,s.withResize)(p)));function m(e,t){let{canvas:r}=(0,a.attach)(e),i=new f(r,t);return i.on({type:"resize",action:({app:e})=>{e.pixi.renderer.resize(e.canvas.width,e.canvas.height),e.pixi.render()}}),i}}),a("eQBmg",function(t,r){e(t.exports,"Application",()=>n("7nNKe").Application),e(t.exports,"Assets",()=>n("3Fqd3").Assets),e(t.exports,"BaseTexture",()=>n("2Am4Q").BaseTexture),e(t.exports,"Rectangle",()=>n("6OnST").Rectangle),e(t.exports,"SCALE_MODES",()=>n("jetUE").SCALE_MODES),e(t.exports,"Texture",()=>n("7eheB").Texture),e(t.exports,"Container",()=>n("7uhWd").Container),e(t.exports,"Graphics",()=>n("7qA1V").Graphics),e(t.exports,"Sprite",()=>n("OYVnz").Sprite),n("cPI92"),n("kIsda"),n("a6vMi"),n("49CXl"),n("k6gpf"),n("lcscO"),n("9t9WZ"),n("hO5Ga"),n("2AhlO"),n("dyEru"),n("ebTHV"),n("9veqA"),n("aTvPy"),n("lTWDV"),n("3qSPq"),n("9bQIa"),n("2th6e"),n("57RIq"),n("9qNwV"),n("9w5R4"),n("jTmzx"),n("5cF2e"),n("9EHCK"),n("cJJeG"),n("4OMix"),n("4Qt6g"),n("ozRkb"),n("6SstR"),n("hJAby"),n("g4t4U")}),a("cPI92",function(e,t){n("2AhlO");var r=n("fhlwZ"),i=n("6OnST"),s=n("23Rkv"),a=n("MiLFw"),o=n("2Am4Q"),l=n("7eheB");n("dyEru");var h=n("7h4dW");n("cJJeG");var u=n("OYVnz");let d=new r.Matrix;h.DisplayObject.prototype._cacheAsBitmap=!1,h.DisplayObject.prototype._cacheData=null,h.DisplayObject.prototype._cacheAsBitmapResolution=null,h.DisplayObject.prototype._cacheAsBitmapMultisample=null;class c{constructor(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}}Object.defineProperties(h.DisplayObject.prototype,{/**
   * The resolution to use for cacheAsBitmap. By default this will use the renderer's resolution
   * but can be overriden for performance. Lower values will reduce memory usage at the expense
   * of render quality. A falsey value of `null` or `0` will default to the renderer's resolution.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new resolution.
   * @member {number|null} cacheAsBitmapResolution
   * @memberof PIXI.DisplayObject#
   * @default null
   */cacheAsBitmapResolution:{get(){return this._cacheAsBitmapResolution},set(e){e!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},/**
   * The number of samples to use for cacheAsBitmap. If set to `null`, the renderer's
   * sample count is used.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new number of samples.
   * @member {number|null} cacheAsBitmapMultisample
   * @memberof PIXI.DisplayObject#
   * @default null
   */cacheAsBitmapMultisample:{get(){return this._cacheAsBitmapMultisample},set(e){e!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},/**
   * Set this to true if you want this display object to be cached as a bitmap.
   * This basically takes a snapshot of the display object as it is at that moment. It can
   * provide a performance benefit for complex static displayObjects.
   * To remove simply set this property to `false`
   *
   * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
   * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */cacheAsBitmap:{get(){return this._cacheAsBitmap},set(e){let t;this._cacheAsBitmap!==e&&(this._cacheAsBitmap=e,e?(this._cacheData||(this._cacheData=new c),(t=this._cacheData).originalRender=this.render,t.originalRenderCanvas=this.renderCanvas,t.originalUpdateTransform=this.updateTransform,t.originalCalculateBounds=this.calculateBounds,t.originalGetLocalBounds=this.getLocalBounds,t.originalDestroy=this.destroy,t.originalContainsPoint=this.containsPoint,t.originalMask=this._mask,t.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):((t=this._cacheData).sprite&&this._destroyCachedDisplayObject(),this.render=t.originalRender,this.renderCanvas=t.originalRenderCanvas,this.calculateBounds=t.originalCalculateBounds,this.getLocalBounds=t.originalGetLocalBounds,this.destroy=t.originalDestroy,this.updateTransform=t.originalUpdateTransform,this.containsPoint=t.originalContainsPoint,this._mask=t.originalMask,this.filterArea=t.originalFilterArea))}}}),h.DisplayObject.prototype._renderCached=function(e){this.visible&&!(this.worldAlpha<=0)&&this.renderable&&(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))},h.DisplayObject.prototype._initCachedDisplayObject=function(e){if(this._cacheData?.sprite)return;let t=this.alpha;this.alpha=1,e.batch.flush();let r=this.getLocalBounds(new i.Rectangle,!0);if(this.filters?.length){let e=this.filters[0].padding;r.pad(e)}let n=this.cacheAsBitmapResolution||e.resolution;r.ceil(n),r.width=Math.max(r.width,1/n),r.height=Math.max(r.height,1/n);let h=e.renderTexture.current,c=e.renderTexture.sourceFrame.clone(),p=e.renderTexture.destinationFrame.clone(),f=e.projection.transform,m=(0,s.RenderTexture).create({width:r.width,height:r.height,resolution:n,multisample:this.cacheAsBitmapMultisample??e.multisample}),g=`cacheAsBitmap_${a.uid()}`;this._cacheData.textureCacheId=g,(0,o.BaseTexture).addToCache(m.baseTexture,g),(0,l.Texture).addToCache(m,g);let x=this.transform.localTransform.copyTo(d).invert().translate(-r.x,-r.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:m,clear:!0,transform:x,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=f,e.renderTexture.bind(h,c,p),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=t;let _=new u.Sprite(m);_.transform.worldTransform=this.transform.worldTransform,_.anchor.x=-(r.x/r.width),_.anchor.y=-(r.y/r.height),_.alpha=t,_._bounds=this._bounds,this._cacheData.sprite=_,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=_.containsPoint.bind(_)},h.DisplayObject.prototype._renderCachedCanvas=function(e){this.visible&&!(this.worldAlpha<=0)&&this.renderable&&(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))},h.DisplayObject.prototype._initCachedDisplayObjectCanvas=function(e){if(this._cacheData?.sprite)return;let t=this.getLocalBounds(new i.Rectangle,!0),r=this.alpha;this.alpha=1;let n=e.canvasContext.activeContext,h=e._projTransform,c=this.cacheAsBitmapResolution||e.resolution;t.ceil(c),t.width=Math.max(t.width,1/c),t.height=Math.max(t.height,1/c);let p=(0,s.RenderTexture).create({width:t.width,height:t.height,resolution:c}),f=`cacheAsBitmap_${a.uid()}`;this._cacheData.textureCacheId=f,(0,o.BaseTexture).addToCache(p.baseTexture,f),(0,l.Texture).addToCache(p,f),this.transform.localTransform.copyTo(d),d.invert(),d.tx-=t.x,d.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:p,clear:!0,transform:d,skipUpdateTransform:!1}),e.canvasContext.activeContext=n,e._projTransform=h,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;let m=new u.Sprite(p);m.transform.worldTransform=this.transform.worldTransform,m.anchor.x=-(t.x/t.width),m.anchor.y=-(t.y/t.height),m.alpha=r,m._bounds=this._bounds,this._cacheData.sprite=m,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=m.containsPoint.bind(m)},h.DisplayObject.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID},h.DisplayObject.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)},h.DisplayObject.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,(0,o.BaseTexture).removeFromCache(this._cacheData.textureCacheId),(0,l.Texture).removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null},h.DisplayObject.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)}}),a("2AhlO",function(t,r){e(t.exports,"Color",()=>n("5xg5I").Color),e(t.exports,"ALPHA_MODES",()=>n("jetUE").ALPHA_MODES),e(t.exports,"BLEND_MODES",()=>n("jetUE").BLEND_MODES),e(t.exports,"CLEAR_MODES",()=>n("jetUE").CLEAR_MODES),e(t.exports,"DRAW_MODES",()=>n("jetUE").DRAW_MODES),e(t.exports,"FORMATS",()=>n("jetUE").FORMATS),e(t.exports,"MASK_TYPES",()=>n("jetUE").MASK_TYPES),e(t.exports,"MIPMAP_MODES",()=>n("jetUE").MIPMAP_MODES),e(t.exports,"SCALE_MODES",()=>n("jetUE").SCALE_MODES),e(t.exports,"TYPES",()=>n("jetUE").TYPES),e(t.exports,"WRAP_MODES",()=>n("jetUE").WRAP_MODES),e(t.exports,"extensions",()=>n("glXXo").extensions),e(t.exports,"ExtensionType",()=>n("glXXo").ExtensionType),e(t.exports,"Circle",()=>n("kKCy0").Circle),e(t.exports,"DEG_TO_RAD",()=>n("lkqjp").DEG_TO_RAD),e(t.exports,"Ellipse",()=>n("96DUo").Ellipse),e(t.exports,"Matrix",()=>n("fhlwZ").Matrix),e(t.exports,"ObservablePoint",()=>n("lEibW").ObservablePoint),e(t.exports,"PI_2",()=>n("lkqjp").PI_2),e(t.exports,"Point",()=>n("iVQEG").Point),e(t.exports,"Polygon",()=>n("707aK").Polygon),e(t.exports,"RAD_TO_DEG",()=>n("lkqjp").RAD_TO_DEG),e(t.exports,"Rectangle",()=>n("6OnST").Rectangle),e(t.exports,"RoundedRectangle",()=>n("4lIrM").RoundedRectangle),e(t.exports,"SHAPES",()=>n("lkqjp").SHAPES),e(t.exports,"Transform",()=>n("9wIYY").Transform),e(t.exports,"settings",()=>n("8oqCw").settings),e(t.exports,"Ticker",()=>n("54AzN").Ticker),e(t.exports,"UPDATE_PRIORITY",()=>n("g7L3i").UPDATE_PRIORITY),e(t.exports,"BaseTexture",()=>n("2Am4Q").BaseTexture),e(t.exports,"BatchDrawCall",()=>n("fTFNy").BatchDrawCall),e(t.exports,"BatchGeometry",()=>n("i9Brf").BatchGeometry),e(t.exports,"BatchTextureArray",()=>n("g6z8m").BatchTextureArray),e(t.exports,"Buffer",()=>n("ckQUf").Buffer),e(t.exports,"BufferResource",()=>n("1ClQS").BufferResource),e(t.exports,"Filter",()=>n("5Knew").Filter),e(t.exports,"Geometry",()=>n("82wLZ").Geometry),e(t.exports,"ObjectRenderer",()=>n("9P40c").ObjectRenderer),e(t.exports,"Program",()=>n("e1ifo").Program),e(t.exports,"QuadUv",()=>n("d5fCV").QuadUv),e(t.exports,"RenderTexture",()=>n("23Rkv").RenderTexture),e(t.exports,"SVGResource",()=>n("50JGb").SVGResource),e(t.exports,"Shader",()=>n("4Tbkk").Shader),e(t.exports,"State",()=>n("glF38").State),e(t.exports,"Texture",()=>n("7eheB").Texture),e(t.exports,"TextureMatrix",()=>n("9VGTl").TextureMatrix),e(t.exports,"UniformGroup",()=>n("ltmWw").UniformGroup),e(t.exports,"VideoResource",()=>n("9vyZs").VideoResource),e(t.exports,"ViewableBuffer",()=>n("k8R80").ViewableBuffer),e(t.exports,"autoDetectRenderer",()=>n("fRY25").autoDetectRenderer),e(t.exports,"defaultFilterVertex",()=>n("cG6vK").defaultFilterVertex),e(t.exports,"defaultVertex",()=>n("cG6vK").defaultVertex),e(t.exports,"utils",()=>n("MiLFw")),n("3Nqye"),n("1BmAR"),n("jetUE"),n("glXXo"),n("a1P4O"),n("A1ho4"),n("iEiSW"),n("bP1xa"),n("MiLFw"),n("fRY25"),n("afahW"),n("fTFNy"),n("i9Brf"),n("emCHW"),n("aj5uY"),n("l7pH3"),n("g6z8m"),n("9P40c"),n("gntK7"),n("5Knew"),n("81Egr"),n("axu8V"),n("4z7SM"),n("cvmQp"),n("cG6vK"),n("bZM2f"),n("99ekb"),n("lulFS"),n("9dwwg"),n("erBUo"),n("ckQUf"),n("kjfBg"),n("82wLZ"),n("ieXnL"),n("k8R80"),n("16ViG"),n("5FJZl"),n("218Dz"),n("fsGAU"),n("kufGd"),n("b7yas"),n("3mYCB"),n("iygap"),n("2o5zn"),n("hVEXM"),n("2V2fb"),n("23Rkv"),n("avsVf"),n("jyowR"),n("9q0iS"),n("e1ifo"),n("4Tbkk"),n("g9KwK"),n("ltmWw"),n("k2H3u"),n("7Ygfs"),n("bnuRS"),n("fxLeR"),n("cPRmq"),n("5pg2g"),n("dGc9J"),n("glF38"),n("7e2Gc"),n("6BUsG"),n("l4kcN"),n("2Am4Q"),n("4w9q7"),n("4I2Eb"),n("7eheB"),n("9WJQp"),n("9VGTl"),n("3P6PW"),n("34biG"),n("lbTas"),n("2ebp7"),n("k4zJJ"),n("d5fCV"),n("cLqYk"),n("64vl1"),n("c7FgM"),n("glvjk"),n("klLr6"),n("1S50W"),n("lIUKC"),n("1ClQS"),n("4Urjd"),n("4JUwQ"),n("knhlo"),n("5Y90x"),n("50JGb"),n("9vyZs")}),a("3Nqye",function(e,t){var r=n("jetUE");n("iEiSW");var i=n("8oqCw");n("MiLFw");var s=n("k9Wja"),a=n("emCHW"),o=n("5Knew"),l=n("e1ifo");n("l4kcN");var h=n("2Am4Q"),u=n("gntK7"),d=n("afahW"),c=n("cLqYk"),p=n("dGc9J"),f=n("9WJQp");i.settings.PREFER_ENV=r.ENV.WEBGL2,i.settings.STRICT_TEXTURE_CACHE=!1,i.settings.RENDER_OPTIONS={...u.ContextSystem.defaultOptions,...d.BackgroundSystem.defaultOptions,...c.ViewSystem.defaultOptions,...p.StartupSystem.defaultOptions},Object.defineProperties(i.settings,{/**
   * @static
   * @name WRAP_MODE
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.wrapMode
   */WRAP_MODE:{get:()=>h.BaseTexture.defaultOptions.wrapMode,set(e){(0,s.deprecation)("7.1.0","settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"),h.BaseTexture.defaultOptions.wrapMode=e}},/**
   * @static
   * @name SCALE_MODE
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.scaleMode
   */SCALE_MODE:{get:()=>h.BaseTexture.defaultOptions.scaleMode,set(e){(0,s.deprecation)("7.1.0","settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"),h.BaseTexture.defaultOptions.scaleMode=e}},/**
   * @static
   * @name MIPMAP_TEXTURES
   * @memberof PIXI.settings
   * @type {PIXI.MIPMAP_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.mipmap
   */MIPMAP_TEXTURES:{get:()=>h.BaseTexture.defaultOptions.mipmap,set(e){(0,s.deprecation)("7.1.0","settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"),h.BaseTexture.defaultOptions.mipmap=e}},/**
   * @static
   * @name ANISOTROPIC_LEVEL
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.anisotropicLevel
   */ANISOTROPIC_LEVEL:{get:()=>h.BaseTexture.defaultOptions.anisotropicLevel,set(e){(0,s.deprecation)("7.1.0","settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"),h.BaseTexture.defaultOptions.anisotropicLevel=e}},/**
   * Default filter resolution.
   * @static
   * @name FILTER_RESOLUTION
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {number|null}
   * @see PIXI.Filter.defaultResolution
   */FILTER_RESOLUTION:{get:()=>((0,s.deprecation)("7.1.0","settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"),o.Filter.defaultResolution),set(e){o.Filter.defaultResolution=e}},/**
   * Default filter samples.
   * @static
   * @name FILTER_MULTISAMPLE
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {PIXI.MSAA_QUALITY}
   * @see PIXI.Filter.defaultMultisample
   */FILTER_MULTISAMPLE:{get:()=>((0,s.deprecation)("7.1.0","settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"),o.Filter.defaultMultisample),set(e){o.Filter.defaultMultisample=e}},/**
   * The maximum textures that this device supports.
   * @static
   * @name SPRITE_MAX_TEXTURES
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @see PIXI.BatchRenderer.defaultMaxTextures
   * @type {number}
   */SPRITE_MAX_TEXTURES:{get:()=>a.BatchRenderer.defaultMaxTextures,set(e){(0,s.deprecation)("7.1.0","settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),a.BatchRenderer.defaultMaxTextures=e}},/**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   * @static
   * @name SPRITE_BATCH_SIZE
   * @memberof PIXI.settings
   * @see PIXI.BatchRenderer.defaultBatchSize
   * @deprecated since 7.1.0
   * @type {number}
   */SPRITE_BATCH_SIZE:{get:()=>a.BatchRenderer.defaultBatchSize,set(e){(0,s.deprecation)("7.1.0","settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),a.BatchRenderer.defaultBatchSize=e}},/**
   * Can we upload the same buffer in a single frame?
   * @static
   * @name CAN_UPLOAD_SAME_BUFFER
   * @memberof PIXI.settings
   * @see PIXI.BatchRenderer.canUploadSameBuffer
   * @deprecated since 7.1.0
   * @type {boolean}
   */CAN_UPLOAD_SAME_BUFFER:{get:()=>a.BatchRenderer.canUploadSameBuffer,set(e){(0,s.deprecation)("7.1.0","settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),a.BatchRenderer.canUploadSameBuffer=e}},/**
   * Default Garbage Collection mode.
   * @static
   * @name GC_MODE
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultMode
   */GC_MODE:{get:()=>f.TextureGCSystem.defaultMode,set(e){(0,s.deprecation)("7.1.0","settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),f.TextureGCSystem.defaultMode=e}},/**
   * Default Garbage Collection max idle.
   * @static
   * @name GC_MAX_IDLE
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultMaxIdle
   */GC_MAX_IDLE:{get:()=>f.TextureGCSystem.defaultMaxIdle,set(e){(0,s.deprecation)("7.1.0","settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),f.TextureGCSystem.defaultMaxIdle=e}},/**
   * Default Garbage Collection maximum check count.
   * @static
   * @name GC_MAX_CHECK_COUNT
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultCheckCountMax
   */GC_MAX_CHECK_COUNT:{get:()=>f.TextureGCSystem.defaultCheckCountMax,set(e){(0,s.deprecation)("7.1.0","settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),f.TextureGCSystem.defaultCheckCountMax=e}},/**
   * Default specify float precision in vertex shader.
   * @static
   * @name PRECISION_VERTEX
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @deprecated since 7.1.0
   * @see PIXI.Program.defaultVertexPrecision
   */PRECISION_VERTEX:{get:()=>l.Program.defaultVertexPrecision,set(e){(0,s.deprecation)("7.1.0","settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),l.Program.defaultVertexPrecision=e}},/**
   * Default specify float precision in fragment shader.
   * @static
   * @name PRECISION_FRAGMENT
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @deprecated since 7.1.0
   * @see PIXI.Program.defaultFragmentPrecision
   */PRECISION_FRAGMENT:{get:()=>l.Program.defaultFragmentPrecision,set(e){(0,s.deprecation)("7.1.0","settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),l.Program.defaultFragmentPrecision=e}}})}),a("jetUE",function(t,r){e(t.exports,"ENV",()=>A),e(t.exports,"RENDERER_TYPE",()=>b),e(t.exports,"BUFFER_BITS",()=>S),e(t.exports,"BLEND_MODES",()=>R),e(t.exports,"DRAW_MODES",()=>w),e(t.exports,"FORMATS",()=>M),e(t.exports,"TARGETS",()=>P),e(t.exports,"TYPES",()=>I),e(t.exports,"SAMPLER_TYPES",()=>C),e(t.exports,"SCALE_MODES",()=>D),e(t.exports,"WRAP_MODES",()=>O),e(t.exports,"MIPMAP_MODES",()=>B),e(t.exports,"ALPHA_MODES",()=>F),e(t.exports,"CLEAR_MODES",()=>L),e(t.exports,"GC_MODES",()=>N),e(t.exports,"PRECISION",()=>k),e(t.exports,"MASK_TYPES",()=>U),e(t.exports,"MSAA_QUALITY",()=>H),e(t.exports,"BUFFER_TYPE",()=>X);var i,s,n,a,o,l,h,u,d,c,p,f,m,g,x,_,v,E,T,y,A=((i=A||{})[i.WEBGL_LEGACY=0]="WEBGL_LEGACY",i[i.WEBGL=1]="WEBGL",i[i.WEBGL2=2]="WEBGL2",i),b=((s=b||{})[s.UNKNOWN=0]="UNKNOWN",s[s.WEBGL=1]="WEBGL",s[s.CANVAS=2]="CANVAS",s),S=((n=S||{})[n.COLOR=16384]="COLOR",n[n.DEPTH=256]="DEPTH",n[n.STENCIL=1024]="STENCIL",n),R=((a=R||{})[a.NORMAL=0]="NORMAL",a[a.ADD=1]="ADD",a[a.MULTIPLY=2]="MULTIPLY",a[a.SCREEN=3]="SCREEN",a[a.OVERLAY=4]="OVERLAY",a[a.DARKEN=5]="DARKEN",a[a.LIGHTEN=6]="LIGHTEN",a[a.COLOR_DODGE=7]="COLOR_DODGE",a[a.COLOR_BURN=8]="COLOR_BURN",a[a.HARD_LIGHT=9]="HARD_LIGHT",a[a.SOFT_LIGHT=10]="SOFT_LIGHT",a[a.DIFFERENCE=11]="DIFFERENCE",a[a.EXCLUSION=12]="EXCLUSION",a[a.HUE=13]="HUE",a[a.SATURATION=14]="SATURATION",a[a.COLOR=15]="COLOR",a[a.LUMINOSITY=16]="LUMINOSITY",a[a.NORMAL_NPM=17]="NORMAL_NPM",a[a.ADD_NPM=18]="ADD_NPM",a[a.SCREEN_NPM=19]="SCREEN_NPM",a[a.NONE=20]="NONE",a[a.SRC_OVER=0]="SRC_OVER",a[a.SRC_IN=21]="SRC_IN",a[a.SRC_OUT=22]="SRC_OUT",a[a.SRC_ATOP=23]="SRC_ATOP",a[a.DST_OVER=24]="DST_OVER",a[a.DST_IN=25]="DST_IN",a[a.DST_OUT=26]="DST_OUT",a[a.DST_ATOP=27]="DST_ATOP",a[a.ERASE=26]="ERASE",a[a.SUBTRACT=28]="SUBTRACT",a[a.XOR=29]="XOR",a),w=((o=w||{})[o.POINTS=0]="POINTS",o[o.LINES=1]="LINES",o[o.LINE_LOOP=2]="LINE_LOOP",o[o.LINE_STRIP=3]="LINE_STRIP",o[o.TRIANGLES=4]="TRIANGLES",o[o.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",o[o.TRIANGLE_FAN=6]="TRIANGLE_FAN",o),M=((l=M||{})[l.RGBA=6408]="RGBA",l[l.RGB=6407]="RGB",l[l.RG=33319]="RG",l[l.RED=6403]="RED",l[l.RGBA_INTEGER=36249]="RGBA_INTEGER",l[l.RGB_INTEGER=36248]="RGB_INTEGER",l[l.RG_INTEGER=33320]="RG_INTEGER",l[l.RED_INTEGER=36244]="RED_INTEGER",l[l.ALPHA=6406]="ALPHA",l[l.LUMINANCE=6409]="LUMINANCE",l[l.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",l[l.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",l[l.DEPTH_STENCIL=34041]="DEPTH_STENCIL",l),P=((h=P||{})[h.TEXTURE_2D=3553]="TEXTURE_2D",h[h.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",h[h.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",h[h.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",h[h.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",h[h.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",h[h.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",h[h.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",h[h.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",h),I=((u=I||{})[u.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",u[u.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",u[u.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",u[u.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",u[u.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",u[u.UNSIGNED_INT=5125]="UNSIGNED_INT",u[u.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",u[u.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",u[u.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",u[u.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",u[u.BYTE=5120]="BYTE",u[u.SHORT=5122]="SHORT",u[u.INT=5124]="INT",u[u.FLOAT=5126]="FLOAT",u[u.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",u[u.HALF_FLOAT=36193]="HALF_FLOAT",u),C=((d=C||{})[d.FLOAT=0]="FLOAT",d[d.INT=1]="INT",d[d.UINT=2]="UINT",d),D=((c=D||{})[c.NEAREST=0]="NEAREST",c[c.LINEAR=1]="LINEAR",c),O=((p=O||{})[p.CLAMP=33071]="CLAMP",p[p.REPEAT=10497]="REPEAT",p[p.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",p),B=((f=B||{})[f.OFF=0]="OFF",f[f.POW2=1]="POW2",f[f.ON=2]="ON",f[f.ON_MANUAL=3]="ON_MANUAL",f),F=((m=F||{})[m.NPM=0]="NPM",m[m.UNPACK=1]="UNPACK",m[m.PMA=2]="PMA",m[m.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",m[m.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",m[m.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA",m),L=((g=L||{})[g.NO=0]="NO",g[g.YES=1]="YES",g[g.AUTO=2]="AUTO",g[g.BLEND=0]="BLEND",g[g.CLEAR=1]="CLEAR",g[g.BLIT=2]="BLIT",g),N=((x=N||{})[x.AUTO=0]="AUTO",x[x.MANUAL=1]="MANUAL",x),k=((_=k||{}).LOW="lowp",_.MEDIUM="mediump",_.HIGH="highp",_),U=((v=U||{})[v.NONE=0]="NONE",v[v.SCISSOR=1]="SCISSOR",v[v.STENCIL=2]="STENCIL",v[v.SPRITE=3]="SPRITE",v[v.COLOR=4]="COLOR",v),G=((E=G||{})[E.RED=1]="RED",E[E.GREEN=2]="GREEN",E[E.BLUE=4]="BLUE",E[E.ALPHA=8]="ALPHA",E),H=((T=H||{})[T.NONE=0]="NONE",T[T.LOW=2]="LOW",T[T.MEDIUM=4]="MEDIUM",T[T.HIGH=8]="HIGH",T),X=((y=X||{})[y.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",y[y.ARRAY_BUFFER=34962]="ARRAY_BUFFER",y[y.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",y)}),a("iEiSW",function(t,r){e(t.exports,"isMobile",()=>n("fgYxT").isMobile),e(t.exports,"settings",()=>n("8oqCw").settings),n("iHHMG"),n("anHXF"),n("3nHrk"),n("8oqCw"),n("fgYxT")}),a("iHHMG",function(t,r){e(t.exports,"BrowserAdapter",()=>i);let i={/**
   * Creates a canvas element of the given size.
   * This canvas is created using the browser's native canvas element.
   * @param width - width of the canvas
   * @param height - height of the canvas
   */createCanvas:(e,t)=>{let r=document.createElement("canvas");return r.width=e,r.height=t,r},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")}}),a("anHXF",function(e,t){}),a("3nHrk",function(e,t){}),a("8oqCw",function(t,r){e(t.exports,"settings",()=>s);var i=n("iHHMG");let s={/**
   * This adapter is used to call methods that are platform dependent.
   * For example `document.createElement` only runs on the web but fails in node environments.
   * This allows us to support more platforms by abstracting away specific implementations per platform.
   *
   * By default the adapter is set to work in the browser. However you can create your own
   * by implementing the `IAdapter` interface. See `IAdapter` for more information.
   * @name ADAPTER
   * @memberof PIXI.settings
   * @type {PIXI.IAdapter}
   * @default PIXI.BrowserAdapter
   */ADAPTER:i.BrowserAdapter,/**
   * Default resolution / device pixel ratio of the renderer.
   * @static
   * @name RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */RESOLUTION:1,/**
   * Enables bitmap creation before image load. This feature is experimental.
   * @static
   * @name CREATE_IMAGE_BITMAP
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */CREATE_IMAGE_BITMAP:!1,/**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * @static
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */ROUND_PIXELS:!1}}),a("fgYxT",function(t,r){e(t.exports,"isMobile",()=>a),n("3FAem");var i=n("kOAor");let s=i.default.default??i.default,a=s(globalThis.navigator)}),a("3FAem",function(t,r){e(t.exports,"default",()=>n("kOAor").default),n("kOAor")}),a("kOAor",function(t,r){e(t.exports,"default",()=>v);var i=/iPhone/i,s=/iPod/i,n=/iPad/i,a=/\biOS-universal(?:.+)Mac\b/i,o=/\bAndroid(?:.+)Mobile\b/i,l=/Android/i,h=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,u=/Silk/i,d=/Windows Phone/i,c=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,f=/BB10/i,m=/Opera Mini/i,g=/\b(CriOS|Chrome)(?:.+)Mobile/i,x=/Mobile(?:.+)Firefox\b/i,_=function(e){return void 0!==e&&"MacIntel"===e.platform&&"number"==typeof e.maxTouchPoints&&e.maxTouchPoints>1&&"undefined"==typeof MSStream};function v(e){var t,r={userAgent:"",platform:"",maxTouchPoints:0};e||"undefined"==typeof navigator?"string"==typeof e?r.userAgent=e:e&&e.userAgent&&(r={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}):r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var v=r.userAgent,E=v.split("[FBAN");void 0!==E[1]&&(v=E[0]),void 0!==(E=v.split("Twitter"))[1]&&(v=E[0]);var T=(t=v,function(e){return e.test(t)}),y={apple:{phone:T(i)&&!T(d),ipod:T(s),tablet:!T(i)&&(T(n)||_(r))&&!T(d),universal:T(a),device:(T(i)||T(s)||T(n)||T(a)||_(r))&&!T(d)},amazon:{phone:T(h),tablet:!T(h)&&T(u),device:T(h)||T(u)},android:{phone:!T(d)&&T(h)||!T(d)&&T(o),tablet:!T(d)&&!T(h)&&!T(o)&&(T(u)||T(l)),device:!T(d)&&(T(h)||T(u)||T(o)||T(l))||T(/\bokhttp\b/i)},windows:{phone:T(d),tablet:T(c),device:T(d)||T(c)},other:{blackberry:T(p),blackberry10:T(f),opera:T(m),firefox:T(x),chrome:T(g),device:T(p)||T(f)||T(m)||T(x)||T(g)},any:!1,phone:!1,tablet:!1};return y.any=y.apple.device||y.android.device||y.windows.device||y.other.device,y.phone=y.apple.phone||y.android.phone||y.windows.phone,y.tablet=y.apple.tablet||y.android.tablet||y.windows.tablet,y}}),a("MiLFw",function(r,i){e(r.exports,"BaseTextureCache",()=>n("bfI44").BaseTextureCache),e(r.exports,"BoundingBox",()=>n("h3M7E").BoundingBox),e(r.exports,"CanvasRenderTarget",()=>n("iBWHO").CanvasRenderTarget),e(r.exports,"DATA_URI",()=>n("cWqdq").DATA_URI),e(r.exports,"EventEmitter",()=>/*@__PURE__*/t(n("1PbQI"))),e(r.exports,"ProgramCache",()=>n("bfI44").ProgramCache),e(r.exports,"TextureCache",()=>n("bfI44").TextureCache),e(r.exports,"clearTextureCache",()=>n("bfI44").clearTextureCache),e(r.exports,"correctBlendMode",()=>n("8QVmd").correctBlendMode),e(r.exports,"createIndicesForQuads",()=>n("cZc1F").createIndicesForQuads),e(r.exports,"decomposeDataUri",()=>n("d123l").decomposeDataUri),e(r.exports,"deprecation",()=>n("k9Wja").deprecation),e(r.exports,"destroyTextureCache",()=>n("bfI44").destroyTextureCache),e(r.exports,"detectVideoAlphaMode",()=>n("4sylO").detectVideoAlphaMode),e(r.exports,"determineCrossOrigin",()=>n("45hvB").determineCrossOrigin),e(r.exports,"earcut",()=>/*@__PURE__*/t(n("eH7tg"))),e(r.exports,"getBufferType",()=>n("kjbzP").getBufferType),e(r.exports,"getCanvasBoundingBox",()=>n("hjLiM").getCanvasBoundingBox),e(r.exports,"getResolutionOfUrl",()=>n("jEE4L").getResolutionOfUrl),e(r.exports,"hex2rgb",()=>n("h8rmg").hex2rgb),e(r.exports,"hex2string",()=>n("h8rmg").hex2string),e(r.exports,"interleaveTypedArrays",()=>n("2ickO").interleaveTypedArrays),e(r.exports,"isMobile",()=>n("fgYxT").isMobile),e(r.exports,"isPow2",()=>n("5HyIA").isPow2),e(r.exports,"isWebGLSupported",()=>n("luXjE").isWebGLSupported),e(r.exports,"log2",()=>n("5HyIA").log2),e(r.exports,"nextPow2",()=>n("5HyIA").nextPow2),e(r.exports,"path",()=>n("7AGZ9").path),e(r.exports,"premultiplyBlendMode",()=>n("8QVmd").premultiplyBlendMode),e(r.exports,"premultiplyRgba",()=>n("8QVmd").premultiplyRgba),e(r.exports,"premultiplyTint",()=>n("8QVmd").premultiplyTint),e(r.exports,"premultiplyTintToRgba",()=>n("8QVmd").premultiplyTintToRgba),e(r.exports,"removeItems",()=>n("ccZ4r").removeItems),e(r.exports,"rgb2hex",()=>n("h8rmg").rgb2hex),e(r.exports,"sayHello",()=>n("5kdjR").sayHello),e(r.exports,"sign",()=>n("lFELI").sign),e(r.exports,"skipHello",()=>n("5kdjR").skipHello),e(r.exports,"string2hex",()=>n("h8rmg").string2hex),e(r.exports,"trimCanvas",()=>n("5SuFD").trimCanvas),e(r.exports,"uid",()=>n("XaHk7").uid),e(r.exports,"url",()=>n("dpY4F").url),n("37rzC"),n("iEiSW"),n("fgYxT"),n("1PbQI"),n("eH7tg"),n("dpY4F"),n("7AGZ9"),n("4sylO"),n("5kdjR"),n("luXjE"),n("h8rmg"),n("8QVmd"),n("cWqdq"),n("cZc1F"),n("kjbzP"),n("2ickO"),n("5HyIA"),n("ccZ4r"),n("lFELI"),n("XaHk7"),n("k9Wja"),n("h3M7E"),n("bfI44"),n("iBWHO"),n("hjLiM"),n("5SuFD"),n("d123l"),n("45hvB"),n("jEE4L"),n("htkkI")}),a("37rzC",function(e,t){n("iEiSW");var r=n("8oqCw");r.settings.RETINA_PREFIX=/@([0-9\.]+)x/,r.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1}),a("1PbQI",function(e,t){var r=Object.prototype.hasOwnProperty,i="~";/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */function s(){}/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */function a(e,t,r,s,a){if("function"!=typeof r)throw TypeError("The listener must be a function");var o=new n(r,s||e,a),l=i?i+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],o]:e._events[l].push(o):(e._events[l]=o,e._eventsCount++),e}/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */function o(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */function l(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(i=!1)),/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */l.prototype.eventNames=function(){var e,t,s=[];if(0===this._eventsCount)return s;for(t in e=this._events)r.call(e,t)&&s.push(i?t.slice(1):t);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(e)):s},/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */l.prototype.listeners=function(e){var t=i?i+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var s=0,n=r.length,a=Array(n);s<n;s++)a[s]=r[s].fn;return a},/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */l.prototype.listenerCount=function(e){var t=i?i+e:e,r=this._events[t];return r?r.fn?1:r.length:0},/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */l.prototype.emit=function(e,t,r,s,n,a){var o=i?i+e:e;if(!this._events[o])return!1;var l,h,u=this._events[o],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,s),!0;case 5:return u.fn.call(u.context,t,r,s,n),!0;case 6:return u.fn.call(u.context,t,r,s,n,a),!0}for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u.fn.apply(u.context,l)}else{var c,p=u.length;for(h=0;h<p;h++)switch(u[h].once&&this.removeListener(e,u[h].fn,void 0,!0),d){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,t);break;case 3:u[h].fn.call(u[h].context,t,r);break;case 4:u[h].fn.call(u[h].context,t,r,s);break;default:if(!l)for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u[h].fn.apply(u[h].context,l)}}return!0},/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */l.prototype.on=function(e,t,r){return a(this,e,t,r,!1)},/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */l.prototype.once=function(e,t,r){return a(this,e,t,r,!0)},/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */l.prototype.removeListener=function(e,t,r,s){var n=i?i+e:e;if(!this._events[n])return this;if(!t)return o(this,n),this;var a=this._events[n];if(a.fn)a.fn!==t||s&&!a.once||r&&a.context!==r||o(this,n);else{for(var l=0,h=[],u=a.length;l<u;l++)(a[l].fn!==t||s&&!a[l].once||r&&a[l].context!==r)&&h.push(a[l]);//
// Reset the array, or remove it completely if we have no more listeners.
//
h.length?this._events[n]=1===h.length?h[0]:h:o(this,n)}return this},/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */l.prototype.removeAllListeners=function(e){var t;return e?(t=i?i+e:e,this._events[t]&&o(this,t)):(this._events=new s,this._eventsCount=0),this},//
// Alias methods names because people roll like that.
//
l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,//
// Expose the prefix.
//
l.prefixed=i,//
// Allow `EventEmitter` to be imported as module namespace.
//
l.EventEmitter=l,e.exports=l}),a("eH7tg",function(e,t){function r(e,t,r){r=r||2;var d,c,m,x,_,v,E,T=t&&t.length,y=T?t[0]*r:e.length,A=i(e,0,y,r,!0),b=[];if(!A||A.next===A.prev)return b;// if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
if(T&&(A=// link every hole into the outer loop, producing a single-ring polygon without holes
function(e,t,r,a){var h,u,d,c,m,g=[];for(h=0,u=t.length;h<u;h++)d=t[h]*a,c=h<u-1?t[h+1]*a:e.length,(m=i(e,d,c,a,!1))===m.next&&(m.steiner=!0),g.push(// find the leftmost node of a polygon ring
function(e){var t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e)return r}(m));// process holes from left to right
for(g.sort(n),h=0;h<g.length;h++)r=// find a bridge between vertices that connects hole with an outer ring and and link it
function(e,t){var r=// David Eberly's algorithm for finding a bridge between hole and outer polygon
function(e,t){var r,i,s,n=t,a=e.x,h=e.y,u=-1/0;// find a segment intersected by a ray from the hole's leftmost point to the left;
// segment's endpoint with lesser x will be potential connection point
do{if(h<=n.y&&h>=n.next.y&&n.next.y!==n.y){var d=n.x+(h-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=a&&d>u&&(u=d,s=n.x<n.next.x?n:n.next,d===a))return s;// hole touches outer segment; pick leftmost endpoint
}n=n.next}while(n!==t)if(!s)return null;// look for points inside the triangle of hole point, segment intersection and endpoint;
// if there are no points found, we have a valid connection;
// otherwise choose the point of the minimum angle with the ray as connection point
var c,f=s,m=s.x,g=s.y,x=1/0;n=s;do a>=n.x&&n.x>=m&&a!==n.x&&o(h<g?a:u,h,m,g,h<g?u:a,h,n.x,n.y)&&(c=Math.abs(h-n.y)/(a-n.x),p(n,e)&&(c<x||c===x&&(n.x>s.x||n.x===s.x&&(r=s,i=n,0>l(r.prev,r,i.prev)&&0>l(i.next,r,r.next))))&&(s=n,x=c)),n=n.next;while(n!==f)return s}(e,t);if(!r)return t;var i=f(r,e);return(// filter collinear points around the cuts
s(i,i.next),s(r,r.next))}(g[h],r);return r}(e,t,A,r)),e.length>80*r){d=m=e[0],c=x=e[1];for(var S=r;S<y;S+=r)_=e[S],v=e[S+1],_<d&&(d=_),v<c&&(c=v),_>m&&(m=_),v>x&&(x=v);E=0!==// minX, minY and invSize are later used to transform coords into integers for z-order calculation
(E=Math.max(m-d,x-c))?32767/E:0}return(// main ear slicing loop which triangulates a polygon (given as a linked list)
function e(t,r,i,n,d,c,m){if(t){// interlink polygon nodes in z-order
!m&&c&&// interlink polygon nodes in z-order
function(e,t,r,i){var s=e;do 0===s.z&&(s.z=a(s.x,s.y,t,r,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e)s.prevZ.nextZ=null,s.prevZ=null,// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function(e){var t,r,i,s,n,a,o,l,h=1;do{for(r=e,e=null,n=null,a=0;r;){for(a++,i=r,o=0,t=0;t<h&&(o++,i=i.nextZ);t++);for(l=h;o>0||l>0&&i;)0!==o&&(0===l||!i||r.z<=i.z)?(s=r,r=r.nextZ,o--):(s=i,i=i.nextZ,l--),n?n.nextZ=s:e=s,s.prevZ=n,n=s;r=i}n.nextZ=null,h*=2}while(a>1)}(s)}(t,n,d,c);// iterate through ears, slicing them one by one
for(var x,_,v=t;t.prev!==t.next;){if(x=t.prev,_=t.next,c?function(e,t,r,i){var s=e.prev,n=e.next;if(l(s,e,n)>=0)return!1;// reflex, can't be an ear
// look for points inside the triangle in both directions
for(var h=s.x,u=e.x,d=n.x,c=s.y,p=e.y,f=n.y,m=h<u?h<d?h:d:u<d?u:d,g=c<p?c<f?c:f:p<f?p:f,x=h>u?h>d?h:d:u>d?u:d,_=c>p?c>f?c:f:p>f?p:f,v=a(m,g,t,r,i),E=a(x,_,t,r,i),T=e.prevZ,y=e.nextZ;T&&T.z>=v&&y&&y.z<=E;){if(T.x>=m&&T.x<=x&&T.y>=g&&T.y<=_&&T!==s&&T!==n&&o(h,c,u,p,d,f,T.x,T.y)&&l(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=m&&y.x<=x&&y.y>=g&&y.y<=_&&y!==s&&y!==n&&o(h,c,u,p,d,f,y.x,y.y)&&l(y.prev,y,y.next)>=0))return!1;y=y.nextZ}// look for remaining points in decreasing z-order
for(;T&&T.z>=v;){if(T.x>=m&&T.x<=x&&T.y>=g&&T.y<=_&&T!==s&&T!==n&&o(h,c,u,p,d,f,T.x,T.y)&&l(T.prev,T,T.next)>=0)return!1;T=T.prevZ}// look for remaining points in increasing z-order
for(;y&&y.z<=E;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=_&&y!==s&&y!==n&&o(h,c,u,p,d,f,y.x,y.y)&&l(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}(t,n,d,c):// check whether a polygon node forms a valid ear with adjacent nodes
function(e){var t=e.prev,r=e.next;if(l(t,e,r)>=0)return!1;// reflex, can't be an ear
for(// now make sure we don't have other points inside the potential ear
var i=t.x,s=e.x,n=r.x,a=t.y,h=e.y,u=r.y,d=i<s?i<n?i:n:s<n?s:n,c=a<h?a<u?a:u:h<u?h:u,p=i>s?i>n?i:n:s>n?s:n,f=a>h?a>u?a:u:h>u?h:u,m=r.next;m!==t;){if(m.x>=d&&m.x<=p&&m.y>=c&&m.y<=f&&o(i,a,s,h,n,u,m.x,m.y)&&l(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}(t)){// cut off the triangle
r.push(x.i/i|0),r.push(t.i/i|0),r.push(_.i/i|0),g(t),// skipping the next vertex leads to less sliver triangles
t=_.next,v=_.next;continue}// if we looped through the whole remaining polygon and can't find any more ears
if((t=_)===v){// try filtering points and slicing again
m?1===m?e(t=// go through all polygon nodes and cure small local self-intersections
function(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!h(n,a)&&u(n,i,i.next,a)&&p(n,a)&&p(a,n)&&(t.push(n.i/r|0),t.push(i.i/r|0),t.push(a.i/r|0),// remove two nodes involved
g(i),g(i.next),i=e=a),i=i.next}while(i!==e)return s(i)}(s(t),r,i),r,i,n,d,c,2):2===m&&// try splitting polygon into two and triangulate them independently
function(t,r,i,n,a,o){// look for a valid diagonal that divides the polygon into two
var d=t;do{for(var c,m,g=d.next.next;g!==d.prev;){if(d.i!==g.i&&(c=d,m=g,c.next.i!==m.i&&c.prev.i!==m.i&&!// check if a polygon diagonal intersects any polygon segments
function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&u(r,r.next,e,t))return!0;r=r.next}while(r!==e)return!1}(c,m)&&// dones't intersect other edges
(p(c,m)&&p(m,c)&&// check if the middle point of a polygon diagonal is inside the polygon
function(e,t){var r=e,i=!1,s=(e.x+t.x)/2,n=(e.y+t.y)/2;do r.y>n!=r.next.y>n&&r.next.y!==r.y&&s<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e)return i}(c,m)&&// locally visible
(l(c.prev,c,m.prev)||l(c,m.prev,m))||// does not create opposite-facing sectors
h(c,m)&&l(c.prev,c,c.next)>0&&l(m.prev,m,m.next)>0))){// split the polygon in two by the diagonal
var x=f(d,g);// filter colinear points around the cuts
d=s(d,d.next),x=s(x,x.next),// run earcut on each half
e(d,r,i,n,a,o,0),e(x,r,i,n,a,o,0);return}g=g.next}d=d.next}while(d!==t)}(t,r,i,n,d,c):e(s(t),r,i,n,d,c,1);break}}}}(A,b,r,d,c,E,0),b)}// create a circular doubly linked list from polygon points in the specified winding order
function i(e,t,r,i,s){var n,a;if(s===_(e,t,r,i)>0)for(n=t;n<r;n+=i)a=m(n,e[n],e[n+1],a);else for(n=r-i;n>=t;n-=i)a=m(n,e[n],e[n+1],a);return a&&h(a,a.next)&&(g(a),a=a.next),a}// eliminate colinear or duplicate points
function s(e,t){if(!e)return e;t||(t=e);var r,i=e;do if(r=!1,!i.steiner&&(h(i,i.next)||0===l(i.prev,i,i.next))){if(g(i),(i=t=i.prev)===i.next)break;r=!0}else i=i.next;while(r||i!==t)return t}function n(e,t){return e.x-t.x}// z-order of a point given coords and inverse of the longer side of data bbox
function a(e,t,r,i,s){return(e=((e=((e=((e=(// coords are transformed into non-negative 15-bit integer range
(e=(e-r)*s|0)|e<<8)&16711935)|e<<4)&252645135)|e<<2)&858993459)|e<<1)&1431655765)|(t=((t=((t=((t=((t=(t-i)*s|0)|t<<8)&16711935)|t<<4)&252645135)|t<<2)&858993459)|t<<1)&1431655765)<<1}// check if a point lies within a convex triangle
function o(e,t,r,i,s,n,a,o){return(s-a)*(t-o)>=(e-a)*(n-o)&&(e-a)*(i-o)>=(r-a)*(t-o)&&(r-a)*(n-o)>=(s-a)*(i-o)}// signed area of a triangle
function l(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}// check if two points are equal
function h(e,t){return e.x===t.x&&e.y===t.y}// check if two segments intersect
function u(e,t,r,i){var s=c(l(e,t,r)),n=c(l(e,t,i)),a=c(l(r,i,e)),o=c(l(r,i,t));return!!(s!==n&&a!==o||0===s&&d(e,r,t)||0===n&&d(e,i,t)||0===a&&d(r,e,i)||0===o&&d(r,t,i))}// for collinear points p, q, r, check if point q lies on segment pr
function d(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function c(e){return e>0?1:e<0?-1:0}// check if a polygon diagonal is locally inside the polygon
function p(e,t){return 0>l(e.prev,e,e.next)?l(e,t,e.next)>=0&&l(e,e.prev,t)>=0:0>l(e,t,e.prev)||0>l(e,e.next,t)}// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function f(e,t){var r=new x(e.i,e.x,e.y),i=new x(t.i,t.x,t.y),s=e.next,n=t.prev;return e.next=t,t.prev=e,r.next=s,s.prev=r,i.next=r,r.prev=i,n.next=i,i.prev=n,i}// create a node and optionally link it with previous one (in a circular doubly linked list)
function m(e,t,r,i){var s=new x(e,t,r);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function g(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function x(e,t,r){// vertex index in coordinates array
this.i=e,// vertex coordinates
this.x=t,this.y=r,// previous and next vertex nodes in a polygon ring
this.prev=null,this.next=null,// z-order curve value
this.z=0,// previous and next nodes in z-order
this.prevZ=null,this.nextZ=null,// indicates whether this is a steiner point
this.steiner=!1}function _(e,t,r,i){for(var s=0,n=t,a=r-i;n<r;n+=i)s+=(e[a]-e[n])*(e[n+1]+e[a+1]),a=n;return s}e.exports=r,e.exports.default=r,// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
r.deviation=function(e,t,r,i){var s=t&&t.length,n=s?t[0]*r:e.length,a=Math.abs(_(e,0,n,r));if(s)for(var o=0,l=t.length;o<l;o++){var h=t[o]*r,u=o<l-1?t[o+1]*r:e.length;a-=Math.abs(_(e,h,u,r))}var d=0;for(o=0;o<i.length;o+=3){var c=i[o]*r,p=i[o+1]*r,f=i[o+2]*r;d+=Math.abs((e[c]-e[f])*(e[p+1]-e[c+1])-(e[c]-e[p])*(e[f+1]-e[c+1]))}return 0===a&&0===d?0:Math.abs((d-a)/a)},// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
r.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},i=0,s=0;s<e.length;s++){for(var n=0;n<e[s].length;n++)for(var a=0;a<t;a++)r.vertices.push(e[s][n][a]);s>0&&(i+=e[s-1].length,r.holes.push(i))}return r}}),a("dpY4F",function(t,r){e(t.exports,"url",()=>a);var i=n("6skuB"),s=n("k9Wja");let a={/**
   * @deprecated since 7.3.0
   */get parse(){return(0,s.deprecation)("7.3.0","utils.url.parse is deprecated, use native URL API instead."),i.parse},/**
   * @deprecated since 7.3.0
   */get format(){return(0,s.deprecation)("7.3.0","utils.url.format is deprecated, use native URL API instead."),i.format},/**
   * @deprecated since 7.3.0
   */get resolve(){return(0,s.deprecation)("7.3.0","utils.url.resolve is deprecated, use native URL API instead."),i.resolve}}}),a("6skuB",function(e,t){}),a("k9Wja",function(t,r){e(t.exports,"deprecation",()=>s);let i={};function s(e,t,r=3){if(i[t])return;let s=Error().stack;typeof s>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(s=s.split(`
`).splice(r).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(s))),i[t]=!0}}),a("7AGZ9",function(t,r){e(t.exports,"path",()=>o),n("iEiSW");var i=n("8oqCw");function s(e){if("string"!=typeof e)throw TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function a(e){return e.split("?")[0].split("#")[0]}let o={/**
   * Converts a path to posix format.
   * @param path - The path to convert to posix
   */toPosix:e=>e.replace(RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),"/"),/**
   * Checks if the path is a URL e.g. http://, https://
   * @param path - The path to check
   */isUrl(e){return/^https?:/.test(this.toPosix(e))},/**
   * Checks if the path is a data URL
   * @param path - The path to check
   */isDataUrl:e=>/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e),/**
   * Checks if the path is a blob URL
   * @param path - The path to check
   */isBlobUrl:e=>e.startsWith("blob:"),/**
   * Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
   * This will return true for windows file paths
   * @param path - The path to check
   */hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},/**
   * Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/
   * @param path - The path to get the protocol from
   */getProtocol(e){s(e),e=this.toPosix(e);let t=/^file:\/\/\//.exec(e);if(t)return t[0];let r=/^[^/:]+:\/{0,2}/.exec(e);return r?r[0]:""},/**
   * Converts URL to an absolute path.
   * When loading from a Web Worker, we must use absolute paths.
   * If the URL is already absolute we return it as is
   * If it's not, we convert it
   * @param url - The URL to test
   * @param customBaseUrl - The base URL to use
   * @param customRootUrl - The root URL to use
   */toAbsolute(e,t,r){if(s(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;let n=a(this.toPosix(t??(0,i.settings).ADAPTER.getBaseUrl())),l=a(this.toPosix(r??this.rootname(n)));return(e=this.toPosix(e)).startsWith("/")?o.join(l,e.slice(1)):this.isAbsolute(e)?e:this.join(n,e)},/**
   * Normalizes the given path, resolving '..' and '.' segments
   * @param path - The path to normalize
   */normalize(e){if(s(e),0===e.length)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="",r=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));let i=e.endsWith("/");return(e=function(e,t){let r="",i=0,s=-1,n=0,a=-1;for(let o=0;o<=e.length;++o){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(!(s===o-1||1===n)){if(s!==o-1&&2===n){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){let e=r.lastIndexOf("/");if(e!==r.length-1){-1===e?(r="",i=0):i=(r=r.slice(0,e)).length-1-r.lastIndexOf("/"),s=o,n=0;continue}}else if(2===r.length||1===r.length){r="",i=0,s=o,n=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+=`/${e.slice(s+1,o)}`:r=e.slice(s+1,o),i=o-s-1}s=o,n=0}else 46===a&&-1!==n?++n:n=-1}return r}(e,!1)).length>0&&i&&(e+="/"),r?`/${e}`:t+e},/**
   * Determines if path is an absolute path.
   * Absolute paths can be urls, data urls, or paths on disk
   * @param path - The path to test
   */isAbsolute(e){return s(e),e=this.toPosix(e),!!this.hasProtocol(e)||e.startsWith("/")},/**
   * Joins all given path segments together using the platform-specific separator as a delimiter,
   * then normalizes the resulting path
   * @param segments - The segments of the path to join
   */join(...e){let t;if(0===e.length)return".";for(let r=0;r<e.length;++r){let i=e[r];if(s(i),i.length>0){if(void 0===t)t=i;else{let s=e[r-1]??"";this.extname(s)?t+=`/../${i}`:t+=`/${i}`}}}return void 0===t?".":this.normalize(t)},/**
   * Returns the directory name of a path
   * @param path - The path to parse
   */dirname(e){if(s(e),0===e.length)return".";let t=(e=this.toPosix(e)).charCodeAt(0),r=47===t,i=-1,n=!0,a=this.getProtocol(e),o=e;e=e.slice(a.length);for(let r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!n){i=r;break}}else n=!1;return -1===i?r?"/":this.isUrl(o)?a+e:a:r&&1===i?"//":a+e.slice(0,i)},/**
   * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
   * @param path - The path to parse
   */rootname(e){s(e);let t="";if(t=(e=this.toPosix(e)).startsWith("/")?"/":this.getProtocol(e),this.isUrl(e)){let r=e.indexOf("/",t.length);(t=-1!==r?e.slice(0,r):e).endsWith("/")||(t+="/")}return t},/**
   * Returns the last portion of a path
   * @param path - The path to test
   * @param ext - Optional extension to remove
   */basename(e,t){s(e),t&&s(t),e=a(this.toPosix(e));let r=0,i=-1,n=!0,o;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let s=t.length-1,a=-1;for(o=e.length-1;o>=0;--o){let l=e.charCodeAt(o);if(47===l){if(!n){r=o+1;break}}else -1===a&&(n=!1,a=o+1),s>=0&&(l===t.charCodeAt(s)?-1==--s&&(i=o):(s=-1,i=a))}return r===i?i=a:-1===i&&(i=e.length),e.slice(r,i)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!n){r=o+1;break}}else -1===i&&(n=!1,i=o+1);return -1===i?"":e.slice(r,i)},/**
   * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
   * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
   * the first character of the basename of path, an empty string is returned.
   * @param path - The path to parse
   */extname(e){s(e),e=a(this.toPosix(e));let t=-1,r=0,i=-1,n=!0,o=0;for(let s=e.length-1;s>=0;--s){let a=e.charCodeAt(s);if(47===a){if(!n){r=s+1;break}continue}-1===i&&(n=!1,i=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1)}return -1===t||-1===i||0===o||1===o&&t===i-1&&t===r+1?"":e.slice(t,i)},/**
   * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
   * @param path - The path to parse
   */parse(e){let t;s(e);let r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;let i=(e=a(this.toPosix(e))).charCodeAt(0),n=this.isAbsolute(e);r.root=this.rootname(e),t=n||this.hasProtocol(e)?1:0;let o=-1,l=0,h=-1,u=!0,d=e.length-1,c=0;for(;d>=t;--d){if(47===(i=e.charCodeAt(d))){if(!u){l=d+1;break}continue}-1===h&&(u=!1,h=d+1),46===i?-1===o?o=d:1!==c&&(c=1):-1!==o&&(c=-1)}return -1===o||-1===h||0===c||1===c&&o===h-1&&o===l+1?-1!==h&&(0===l&&n?r.base=r.name=e.slice(1,h):r.base=r.name=e.slice(l,h)):(0===l&&n?(r.name=e.slice(1,o),r.base=e.slice(1,h)):(r.name=e.slice(l,o),r.base=e.slice(l,h)),r.ext=e.slice(o,h)),r.dir=this.dirname(e),r},sep:"/",delimiter:":"}}),a("4sylO",function(t,r){let i;e(t.exports,"detectVideoAlphaMode",()=>a);var s=n("jetUE");async function a(){return i??(i=(async()=>{let e=document.createElement("canvas").getContext("webgl");if(!e)return s.ALPHA_MODES.UNPACK;let t=await new Promise(e=>{let t=document.createElement("video");t.onloadeddata=()=>e(t),t.onerror=()=>e(null),t.autoplay=!1,t.crossOrigin="anonymous",t.preload="auto",t.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",t.load()});if(!t)return s.ALPHA_MODES.UNPACK;let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);let n=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,n),e.deleteFramebuffer(i),e.deleteTexture(r),e.getExtension("WEBGL_lose_context")?.loseContext(),n[0]<=n[3]?s.ALPHA_MODES.PMA:s.ALPHA_MODES.UNPACK})()),i}}),a("5kdjR",function(t,r){e(t.exports,"skipHello",()=>s),e(t.exports,"sayHello",()=>a);var i=n("k9Wja");function s(){(0,i.deprecation)("7.0.0","skipHello is deprecated, please use settings.RENDER_OPTIONS.hello")}function a(){(0,i.deprecation)("7.0.0",'sayHello is deprecated, please use Renderer\'s "hello" option')}}),a("luXjE",function(t,r){let i;e(t.exports,"isWebGLSupported",()=>a),n("37rzC"),n("iEiSW");var s=n("8oqCw");function a(){return typeof i>"u"&&(i=function(){let e={stencil:!0,failIfMajorPerformanceCaveat:s.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!(0,s.settings).ADAPTER.getWebGLRenderingContext())return!1;let t=(0,s.settings).ADAPTER.createCanvas(),r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),i=!!r?.getContextAttributes()?.stencil;if(r){let e=r.getExtension("WEBGL_lose_context");e&&e.loseContext()}return r=null,i}catch{return!1}}()),i}}),a("h8rmg",function(t,r){e(t.exports,"hex2rgb",()=>a),e(t.exports,"hex2string",()=>o),e(t.exports,"string2hex",()=>l),e(t.exports,"rgb2hex",()=>h),n("1BmAR");var i=n("5xg5I"),s=n("k9Wja");function a(e,t=[]){return(0,s.deprecation)("7.2.0","utils.hex2rgb is deprecated, use Color#toRgbArray instead"),(0,i.Color).shared.setValue(e).toRgbArray(t)}function o(e){return(0,s.deprecation)("7.2.0","utils.hex2string is deprecated, use Color#toHex instead"),(0,i.Color).shared.setValue(e).toHex()}function l(e){return(0,s.deprecation)("7.2.0","utils.string2hex is deprecated, use Color#toNumber instead"),(0,i.Color).shared.setValue(e).toNumber()}function h(e){return(0,s.deprecation)("7.2.0","utils.rgb2hex is deprecated, use Color#toNumber instead"),(0,i.Color).shared.setValue(e).toNumber()}}),a("1BmAR",function(t,r){e(t.exports,"Color",()=>n("5xg5I").Color),n("5xg5I")}),a("5xg5I",function(t,r){e(t.exports,"Color",()=>o);var i=n("jyvmC"),s=n("flk9m");(0,i.extend)([s.default]);let a=class e{/**
   * @param {PIXI.ColorSource} value - Optional value to use, if not provided, white is used.
   */constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}/** Get red component (0 - 1) */get red(){return this._components[0]}/** Get green component (0 - 1) */get green(){return this._components[1]}/** Get blue component (0 - 1) */get blue(){return this._components[2]}/** Get alpha component (0 - 1) */get alpha(){return this._components[3]}/**
   * Set the value, suitable for chaining
   * @param value
   * @see PIXI.Color.value
   */setValue(e){return this.value=e,this}/**
   * The current color source.
   *
   * When setting:
   * - Setting to an instance of `Color` will copy its color source and components.
   * - Otherwise, `Color` will try to normalize the color source and set the components.
   *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
   *
   * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
   * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
   *
   * When getting:
   * - A return value of `null` means the previous value was overridden (e.g., {@link PIXI.Color.multiply multiply},
   *   {@link PIXI.Color.premultiply premultiply} or {@link PIXI.Color.round round}).
   * - Otherwise, the color source used when setting is returned.
   * @type {PIXI.ColorSource}
   */set value(t){if(t instanceof e)this._value=this.cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(null===t)throw Error("Cannot set PIXI.Color#value to null");null!==this._value&&this.isSourceEqual(this._value,t)||(this.normalize(t),this._value=this.cloneSource(t))}}get value(){return this._value}/**
   * Copy a color source internally.
   * @param value - Color source
   */cloneSource(e){return"string"==typeof e||"number"==typeof e||e instanceof Number||null===e?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):"object"==typeof e&&null!==e?{...e}:e}/**
   * Equality check for color sources.
   * @param value1 - First color source
   * @param value2 - Second color source
   * @returns `true` if the color sources are equal, `false` otherwise.
   */isSourceEqual(e,t){let r=typeof e;if(r!==typeof t)return!1;if("number"===r||"string"===r||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length===t.length&&e.every((e,r)=>e===t[r]);if(null!==e&&null!==t){let r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&r.every(r=>e[r]===t[r])}return e===t}/**
   * Convert to a RGBA color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
   */toRgba(){let[e,t,r,i]=this._components;return{r:e,g:t,b:r,a:i}}/**
   * Convert to a RGB color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
   */toRgb(){let[e,t,r]=this._components;return{r:e,g:t,b:r}}/** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */toRgbaString(){let[e,t,r]=this.toUint8RgbArray();return`rgba(${e},${t},${r},${this.alpha})`}toUint8RgbArray(e){let[t,r,i]=this._components;return(e=e??[])[0]=Math.round(255*t),e[1]=Math.round(255*r),e[2]=Math.round(255*i),e}toRgbArray(e){e=e??[];let[t,r,i]=this._components;return e[0]=t,e[1]=r,e[2]=i,e}/**
   * Convert to a hexadecimal number.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toNumber(); // returns 16777215
   */toNumber(){return this._int}/**
   * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
   * @returns {number} - The color as a number in little endian format.
   */toLittleEndianNumber(){let e=this._int;return(e>>16)+(65280&e)+((255&e)<<16)}/**
   * Multiply with another color. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param {PIXI.ColorSource} value - The color to multiply by.
   */multiply(t){let[r,i,s,n]=e.temp.setValue(t)._components;return this._components[0]*=r,this._components[1]*=i,this._components[2]*=s,this._components[3]*=n,this.refreshInt(),this._value=null,this}/**
   * Converts color to a premultiplied alpha format. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {PIXI.Color} - Itself.
   */premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this.refreshInt(),this._value=null,this}/**
   * Premultiplies alpha with current color.
   * @param {number} alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {number} tint multiplied by alpha
   */toPremultiplied(e,t=!0){if(1===e)return -16777216+this._int;if(0===e)return t?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=255&this._int;return t&&(r=r*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(255*e<<24)+(r<<16)+(i<<8)+s}/**
   * Convert to a hexidecimal string.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHex(); // returns "#ffffff"
   */toHex(){let e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}/**
   * Convert to a hexidecimal string with alpha.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHexa(); // returns "#ffffffff"
   */toHexa(){let e=Math.round(255*this._components[3]).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}/**
   * Set alpha, suitable for chaining.
   * @param alpha
   */setAlpha(e){return this._components[3]=this._clamp(e),this}/**
   * Rounds the specified color according to the step. This action is destructive, and will
   * override the previous `value` property to be `null`. The alpha component is not rounded.
   * @param steps - Number of steps which will be used as a cap when rounding colors
   * @deprecated since 7.3.0
   */round(e){let[t,r,i]=this._components;return this._components[0]=Math.round(t*e)/e,this._components[1]=Math.round(r*e)/e,this._components[2]=Math.round(i*e)/e,this.refreshInt(),this._value=null,this}toArray(e){e=e??[];let[t,r,i,s]=this._components;return e[0]=t,e[1]=r,e[2]=i,e[3]=s,e}/**
   * Normalize the input value into rgba
   * @param value - Input value
   */normalize(t){let r,s,n,a;if(("number"==typeof t||t instanceof Number)&&t>=0&&t<=16777215){let e=t;r=(e>>16&255)/255,s=(e>>8&255)/255,n=(255&e)/255,a=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[r,s,n,a=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[r,s,n,a=255]=t,r/=255,s/=255,n/=255,a/=255;else if("string"==typeof t||"object"==typeof t){if("string"==typeof t){let r=e.HEX_PATTERN.exec(t);r&&(t=`#${r[2]}`)}let o=(0,i.colord)(t);o.isValid()&&({r:r,g:s,b:n,a:a}=o.rgba,r/=255,s/=255,n/=255)}if(void 0!==r)this._components[0]=r,this._components[1]=s,this._components[2]=n,this._components[3]=a,this.refreshInt();else throw Error(`Unable to convert color ${t}`)}/** Refresh the internal color rgb number */refreshInt(){this._clamp(this._components);let[e,t,r]=this._components;this._int=(255*e<<16)+(255*t<<8)+(255*r|0)}/**
   * Clamps values to a range. Will override original values
   * @param value - Value(s) to clamp
   * @param min - Minimum value
   * @param max - Maximum value
   */_clamp(e,t=0,r=1){return"number"==typeof e?Math.min(Math.max(e,t),r):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),r)}),e)}};a.shared=new a,/**
* Temporary Color object for static uses internally.
* As to not conflict with Color.shared.
* @ignore
*/a.temp=new a,/** Pattern for hex strings */a.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let o=a}),a("jyvmC",function(t,r){e(t.exports,"colord",()=>M),e(t.exports,"extend",()=>I);var i={grad:.9,turn:360,rad:360/(2*Math.PI)},s=function(e){return"string"==typeof e?e.length>0:"number"==typeof e},n=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},a=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e>t?e:t},o=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},l=function(e){return{r:a(e.r,0,255),g:a(e.g,0,255),b:a(e.b,0,255),a:a(e.a)}},h=function(e){return{r:n(e.r),g:n(e.g),b:n(e.b),a:n(e.a,3)}},u=/^#([0-9a-f]{3,8})$/i,d=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},c=function(e){var t=e.r,r=e.g,i=e.b,s=e.a,n=Math.max(t,r,i),a=n-Math.min(t,r,i),o=a?n===t?(r-i)/a:n===r?2+(i-t)/a:4+(t-r)/a:0;return{h:60*(o<0?o+6:o),s:n?a/n*100:0,v:n/255*100,a:s}},p=function(e){var t=e.h,r=e.s,i=e.v,s=e.a;t=t/360*6,r/=100,i/=100;var n=Math.floor(t),a=i*(1-r),o=i*(1-(t-n)*r),l=i*(1-(1-t+n)*r),h=n%6;return{r:255*[i,o,a,a,l,i][h],g:255*[l,i,i,o,a,a][h],b:255*[a,a,l,i,i,o][h],a:s}},f=function(e){return{h:o(e.h),s:a(e.s,0,100),l:a(e.l,0,100),a:a(e.a)}},m=function(e){return{h:n(e.h),s:n(e.s),l:n(e.l),a:n(e.a,3)}},g=function(e){var t,r;return p((t=e.s,{h:e.h,s:(t*=((r=e.l)<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}))},x=function(e){var t,r,i,s;return{h:(t=c(e)).h,s:(s=(200-(r=t.s))*(i=t.v)/100)>0&&s<200?r*i/100/(s<=100?s:200-s)*100:0,l:s/2,a:t.a}},_=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,E=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(e){var t=u.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?n(parseInt(e[3]+e[3],16)/255,2):1}:6===e.length||8===e.length?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:8===e.length?n(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=E.exec(e)||T.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:l({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t,r,s=_.exec(e)||v.exec(e);return s?g(f({h:(t=s[1],void 0===(r=s[2])&&(r="deg"),Number(t)*(i[r]||1)),s:Number(s[3]),l:Number(s[4]),a:void 0===s[5]?1:Number(s[5])/(s[6]?100:1)})):null},"hsl"]],object:[[function(e){var t=e.r,r=e.g,i=e.b,n=e.a;return s(t)&&s(r)&&s(i)?l({r:Number(t),g:Number(r),b:Number(i),a:Number(void 0===n?1:n)}):null},"rgb"],[function(e){var t=e.h,r=e.s,i=e.l,n=e.a;return s(t)&&s(r)&&s(i)?g(f({h:Number(t),s:Number(r),l:Number(i),a:Number(void 0===n?1:n)})):null},"hsl"],[function(e){var t,r=e.h,i=e.s,n=e.v,l=e.a;return s(r)&&s(i)&&s(n)?p({h:o((t={h:Number(r),s:Number(i),v:Number(n),a:Number(void 0===l?1:l)}).h),s:a(t.s,0,100),v:a(t.v,0,100),a:a(t.a)}):null},"hsv"]]},A=function(e,t){for(var r=0;r<t.length;r++){var i=t[r][0](e);if(i)return[i,t[r][1]]}return[null,void 0]},b=function(e,t){var r=x(e);return{h:r.h,s:a(r.s+100*t,0,100),l:r.l,a:r.a}},S=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},R=function(e,t){var r=x(e);return{h:r.h,s:r.s,l:a(r.l+100*t,0,100),a:r.a}},w=function(){function e(e){this.parsed=("string"==typeof e?A(e.trim(),y.string):"object"==typeof e&&null!==e?A(e,y.object):[null,void 0])[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return null!==this.parsed},e.prototype.brightness=function(){return n(S(this.rgba),2)},e.prototype.isDark=function(){return .5>S(this.rgba)},e.prototype.isLight=function(){return S(this.rgba)>=.5},e.prototype.toHex=function(){var e,t,r,i,s,a;return t=(e=h(this.rgba)).r,r=e.g,i=e.b,a=(s=e.a)<1?d(n(255*s)):"","#"+d(t)+d(r)+d(i)+a},e.prototype.toRgb=function(){return h(this.rgba)},e.prototype.toRgbString=function(){var e,t,r,i,s;return t=(e=h(this.rgba)).r,r=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+r+", "+i+", "+s+")":"rgb("+t+", "+r+", "+i+")"},e.prototype.toHsl=function(){return m(x(this.rgba))},e.prototype.toHslString=function(){var e,t,r,i,s;return t=(e=m(x(this.rgba))).h,r=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+r+"%, "+i+"%, "+s+")":"hsl("+t+", "+r+"%, "+i+"%)"},e.prototype.toHsv=function(){var e;return{h:n((e=c(this.rgba)).h),s:n(e.s),v:n(e.v),a:n(e.a,3)}},e.prototype.invert=function(){var e;return M({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a})},e.prototype.saturate=function(e){return void 0===e&&(e=.1),M(b(this.rgba,e))},e.prototype.desaturate=function(e){return void 0===e&&(e=.1),M(b(this.rgba,-e))},e.prototype.grayscale=function(){return M(b(this.rgba,-1))},e.prototype.lighten=function(e){return void 0===e&&(e=.1),M(R(this.rgba,e))},e.prototype.darken=function(e){return void 0===e&&(e=.1),M(R(this.rgba,-e))},e.prototype.rotate=function(e){return void 0===e&&(e=15),this.hue(this.hue()+e)},e.prototype.alpha=function(e){var t;return"number"==typeof e?M({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):n(this.rgba.a,3)},e.prototype.hue=function(e){var t=x(this.rgba);return"number"==typeof e?M({h:e,s:t.s,l:t.l,a:t.a}):n(t.h)},e.prototype.isEqual=function(e){return this.toHex()===M(e).toHex()},e}(),M=function(e){return e instanceof w?e:new w(e)},P=[],I=function(e){e.forEach(function(e){0>P.indexOf(e)&&(e(w,y),P.push(e))})}}),a("flk9m",function(t,r){e(t.exports,"default",()=>i);function i(e,t){var r={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var s in r)i[r[s]]=s;var n={};e.prototype.toName=function(t){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,a=i[this.toHex()];if(a)return a;if(null==t?void 0:t.closest){var o=this.toRgb(),l=1/0,h="black";if(!n.length)for(var u in r)n[u]=new e(r[u]).toRgb();for(var d in r){var c=(s=n[d],Math.pow(o.r-s.r,2)+Math.pow(o.g-s.g,2)+Math.pow(o.b-s.b,2));c<l&&(l=c,h=d)}return h}},t.string.push([function(t){var i=t.toLowerCase(),s="transparent"===i?"#0000":r[i];return s?new e(s).toRgb():null},"name"])}}),a("8QVmd",function(t,r){e(t.exports,"premultiplyBlendMode",()=>o),e(t.exports,"correctBlendMode",()=>l),e(t.exports,"premultiplyRgba",()=>h),e(t.exports,"premultiplyTint",()=>u),e(t.exports,"premultiplyTintToRgba",()=>d),n("1BmAR");var i=n("5xg5I"),s=n("jetUE"),a=n("k9Wja");let o=function(){let e=[],t=[];for(let r=0;r<32;r++)e[r]=r,t[r]=r;e[s.BLEND_MODES.NORMAL_NPM]=s.BLEND_MODES.NORMAL,e[s.BLEND_MODES.ADD_NPM]=s.BLEND_MODES.ADD,e[s.BLEND_MODES.SCREEN_NPM]=s.BLEND_MODES.SCREEN,t[s.BLEND_MODES.NORMAL]=s.BLEND_MODES.NORMAL_NPM,t[s.BLEND_MODES.ADD]=s.BLEND_MODES.ADD_NPM,t[s.BLEND_MODES.SCREEN]=s.BLEND_MODES.SCREEN_NPM;let r=[];return r.push(t),r.push(e),r}();function l(e,t){return o[t?1:0][e]}function h(e,t,r,s=!0){return(0,a.deprecation)("7.2.0","utils.premultiplyRgba has moved to Color.premultiply"),(0,i.Color).shared.setValue(e).premultiply(t,s).toArray(r??new Float32Array(4))}function u(e,t){return(0,a.deprecation)("7.2.0","utils.premultiplyTint has moved to Color.toPremultiplied"),(0,i.Color).shared.setValue(e).toPremultiplied(t)}function d(e,t,r,s=!0){return(0,a.deprecation)("7.2.0","utils.premultiplyTintToRgba has moved to Color.premultiply"),(0,i.Color).shared.setValue(e).premultiply(t,s).toArray(r??new Float32Array(4))}}),a("cWqdq",function(t,r){e(t.exports,"DATA_URI",()=>i);let i=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i}),a("cZc1F",function(t,r){e(t.exports,"createIndicesForQuads",()=>i);function i(e,t=null){let r=6*e;if((t=t||new Uint16Array(r)).length!==r)throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${r}`);for(let e=0,i=0;e<r;e+=6,i+=4)t[e+0]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3;return t}}),a("kjbzP",function(t,r){e(t.exports,"getBufferType",()=>i);function i(e){if(4===e.BYTES_PER_ELEMENT)return e instanceof Float32Array?"Float32Array":e instanceof Uint32Array?"Uint32Array":"Int32Array";if(2===e.BYTES_PER_ELEMENT){if(e instanceof Uint16Array)return"Uint16Array"}else if(1===e.BYTES_PER_ELEMENT&&e instanceof Uint8Array)return"Uint8Array";return null}}),a("2ickO",function(t,r){e(t.exports,"interleaveTypedArrays",()=>a);var i=n("kjbzP");let s={Float32Array:Float32Array,Uint32Array:Uint32Array,Int32Array:Int32Array,Uint8Array:Uint8Array};function a(e,t){let r=0,n=0,a={};for(let i=0;i<e.length;i++)n+=t[i],r+=e[i].length;let o=new ArrayBuffer(4*r),l=null,h=0;for(let r=0;r<e.length;r++){let u=t[r],d=e[r],c=(0,i.getBufferType)(d);a[c]||(a[c]=new s[c](o)),l=a[c];for(let e=0;e<d.length;e++){let t=(e/u|0)*n+h,r=e%u;l[t+r]=d[e]}h+=u}return new Float32Array(o)}}),a("5HyIA",function(t,r){function i(e){return e+=0===e?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)+1}function s(e){return!(e&e-1)&&!!e}function n(e){let t=(e>65535?1:0)<<4,r=((e>>>=t)>255?1:0)<<3;return e>>>=r,t|=r,r=(e>15?1:0)<<2,e>>>=r,t|=r,r=(e>3?1:0)<<1,e>>>=r,(t|=r)|e>>1}e(t.exports,"nextPow2",()=>i),e(t.exports,"isPow2",()=>s),e(t.exports,"log2",()=>n)}),a("ccZ4r",function(t,r){e(t.exports,"removeItems",()=>i);function i(e,t,r){let i;let s=e.length;if(t>=s||0===r)return;r=t+r>s?s-t:r;let n=s-r;for(i=t;i<n;++i)e[i]=e[i+r];e.length=n}}),a("lFELI",function(t,r){e(t.exports,"sign",()=>i);function i(e){return 0===e?0:e<0?-1:1}}),a("XaHk7",function(t,r){e(t.exports,"uid",()=>s);let i=0;function s(){return++i}}),a("h3M7E",function(t,r){e(t.exports,"BoundingBox",()=>s);let i=class{/**
   * @param left - The left coordinate value of the bounding box.
   * @param top - The top coordinate value of the bounding box.
   * @param right - The right coordinate value of the bounding box.
   * @param bottom - The bottom coordinate value of the bounding box.
   */constructor(e,t,r,i){this.left=e,this.top=t,this.right=r,this.bottom=i}/** The width of the bounding box. */get width(){return this.right-this.left}/** The height of the bounding box. */get height(){return this.bottom-this.top}/** Determines whether the BoundingBox is empty. */isEmpty(){return this.left===this.right||this.top===this.bottom}};i.EMPTY=new i(0,0,0,0);let s=i}),a("bfI44",function(t,r){e(t.exports,"ProgramCache",()=>i),e(t.exports,"TextureCache",()=>s),e(t.exports,"BaseTextureCache",()=>n),e(t.exports,"destroyTextureCache",()=>a),e(t.exports,"clearTextureCache",()=>o);let i={},s=/* @__PURE__ */Object.create(null),n=/* @__PURE__ */Object.create(null);function a(){let e;for(e in s)s[e].destroy();for(e in n)n[e].destroy()}function o(){let e;for(e in s)delete s[e];for(e in n)delete n[e]}}),a("iBWHO",function(t,r){e(t.exports,"CanvasRenderTarget",()=>s),n("iEiSW");var i=n("8oqCw");class s{/**
   * @param width - the width for the newly created canvas
   * @param height - the height for the newly created canvas
   * @param {number} [resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio of the canvas
   */constructor(e,t,r){this._canvas=(0,i.settings).ADAPTER.createCanvas(),this._context=this._canvas.getContext("2d"),this.resolution=r||i.settings.RESOLUTION,this.resize(e,t)}/**
   * Clears the canvas that was created by the CanvasRenderTarget class.
   * @private
   */clear(){this._checkDestroyed(),this._context.setTransform(1,0,0,1,0,0),this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}/**
   * Resizes the canvas to the specified width and height.
   * @param desiredWidth - the desired width of the canvas
   * @param desiredHeight - the desired height of the canvas
   */resize(e,t){this._checkDestroyed(),this._canvas.width=Math.round(e*this.resolution),this._canvas.height=Math.round(t*this.resolution)}/** Destroys this canvas. */destroy(){this._context=null,this._canvas=null}/**
   * The width of the canvas buffer in pixels.
   * @member {number}
   */get width(){return this._checkDestroyed(),this._canvas.width}set width(e){this._checkDestroyed(),this._canvas.width=Math.round(e)}/**
   * The height of the canvas buffer in pixels.
   * @member {number}
   */get height(){return this._checkDestroyed(),this._canvas.height}set height(e){this._checkDestroyed(),this._canvas.height=Math.round(e)}/** The Canvas object that belongs to this CanvasRenderTarget. */get canvas(){return this._checkDestroyed(),this._canvas}/** A CanvasRenderingContext2D object representing a two-dimensional rendering context. */get context(){return this._checkDestroyed(),this._context}_checkDestroyed(){if(null===this._canvas)throw TypeError("The CanvasRenderTarget has already been destroyed")}}}),a("hjLiM",function(t,r){e(t.exports,"getCanvasBoundingBox",()=>o);var i=n("h3M7E");function s(e,t,r){for(let i=0,s=4*r*t;i<t;++i,s+=4)if(0!==e[s+3])return!1;return!0}function a(e,t,r,i,s){let n=4*t;for(let t=i,a=i*n+4*r;t<=s;++t,a+=n)if(0!==e[a+3])return!1;return!0}function o(e){let{width:t,height:r}=e,n=e.getContext("2d",{willReadFrequently:!0});if(null===n)throw TypeError("Failed to get canvas 2D context");let o=n.getImageData(0,0,t,r).data,l=0,h=0,u=t-1,d=r-1;for(;h<r&&s(o,t,h);)++h;if(h===r)return i.BoundingBox.EMPTY;for(;s(o,t,d);)--d;for(;a(o,t,l,h,d);)++l;for(;a(o,t,u,h,d);)--u;return++u,++d,new i.BoundingBox(l,h,u,d)}}),a("5SuFD",function(t,r){e(t.exports,"trimCanvas",()=>s);var i=n("hjLiM");function s(e){let t=(0,i.getCanvasBoundingBox)(e),{width:r,height:s}=t,n=null;if(!t.isEmpty()){let i=e.getContext("2d");if(null===i)throw TypeError("Failed to get canvas 2D context");n=i.getImageData(t.left,t.top,r,s)}return{width:r,height:s,data:n}}}),a("d123l",function(t,r){e(t.exports,"decomposeDataUri",()=>s);var i=n("cWqdq");function s(e){let t=(0,i.DATA_URI).exec(e);if(t)return{mediaType:t[1]?t[1].toLowerCase():void 0,subType:t[2]?t[2].toLowerCase():void 0,charset:t[3]?t[3].toLowerCase():void 0,encoding:t[4]?t[4].toLowerCase():void 0,data:t[5]}}}),a("45hvB",function(t,r){e(t.exports,"determineCrossOrigin",()=>i);function i(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location;let r=new URL(e,document.baseURI);return r.hostname!==t.hostname||r.port!==t.port||r.protocol!==t.protocol?"anonymous":""}}),a("jEE4L",function(t,r){e(t.exports,"getResolutionOfUrl",()=>s),n("37rzC"),n("iEiSW");var i=n("8oqCw");function s(e,t=1){let r=i.settings.RETINA_PREFIX?.exec(e);return r?parseFloat(r[1]):t}}),a("htkkI",function(e,t){}),a("emCHW",function(t,r){e(t.exports,"BatchRenderer",()=>S),n("1BmAR");var i=n("5xg5I"),s=n("jetUE"),a=n("glXXo");n("iEiSW");var o=n("8oqCw");n("MiLFw");var l=n("k9Wja"),h=n("8QVmd"),u=n("5HyIA"),d=n("k8R80"),c=n("k2H3u"),p=n("glF38"),f=n("2Am4Q"),m=n("fTFNy"),g=n("i9Brf"),x=n("aj5uY"),_=n("g6z8m"),v=n("dqQsf"),E=n("jseKX"),T=n("9P40c"),y=n("jctGF"),A=n("iWgWO");let b=class e extends T.ObjectRenderer{/**
   * This will hook onto the renderer's `contextChange`
   * and `prerender` signals.
   * @param {PIXI.Renderer} renderer - The renderer this works for.
   */constructor(t){super(t),this.setShaderGenerator(),this.geometryClass=g.BatchGeometry,this.vertexSize=6,this.state=(0,p.State).for2d(),this.size=4*e.defaultBatchSize,this._vertexCount=0,this._indexCount=0,this._bufferedElements=[],this._bufferedTextures=[],this._bufferSize=0,this._shader=null,this._packedGeometries=[],this._packedGeometryPoolSize=2,this._flushId=0,this._aBuffers={},this._iBuffers={},this.maxTextures=1,this.renderer.on("prerender",this.onPrerender,this),t.runners.contextChange.add(this),this._dcIndex=0,this._aIndex=0,this._iIndex=0,this._attributeBuffer=null,this._indexBuffer=null,this._tempBoundTextures=[]}/**
   * The maximum textures that this device supports.
   * @static
   * @default 32
   */static get defaultMaxTextures(){return this._defaultMaxTextures=this._defaultMaxTextures??(0,E.maxRecommendedTextures)(32),this._defaultMaxTextures}static set defaultMaxTextures(e){this._defaultMaxTextures=e}/**
   * Can we upload the same buffer in a single frame?
   * @static
   */static get canUploadSameBuffer(){return this._canUploadSameBuffer=this._canUploadSameBuffer??(0,v.canUploadSameBuffer)(),this._canUploadSameBuffer}static set canUploadSameBuffer(e){this._canUploadSameBuffer=e}/**
   * @see PIXI.BatchRenderer#maxTextures
   * @deprecated since 7.1.0
   * @readonly
   */get MAX_TEXTURES(){return(0,l.deprecation)("7.1.0","BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),this.maxTextures}/**
   * The default vertex shader source
   * @readonly
   */static get defaultVertexSrc(){return A.default}/**
   * The default fragment shader source
   * @readonly
   */static get defaultFragmentTemplate(){return y.default}/**
   * Set the shader generator.
   * @param {object} [options]
   * @param {string} [options.vertex=PIXI.BatchRenderer.defaultVertexSrc] - Vertex shader source
   * @param {string} [options.fragment=PIXI.BatchRenderer.defaultFragmentTemplate] - Fragment shader template
   */setShaderGenerator({vertex:t=e.defaultVertexSrc,fragment:r=e.defaultFragmentTemplate}={}){this.shaderGenerator=new x.BatchShaderGenerator(t,r)}/**
   * Handles the `contextChange` signal.
   *
   * It calculates `this.maxTextures` and allocating the packed-geometry object pool.
   */contextChange(){let t=this.renderer.gl;o.settings.PREFER_ENV===s.ENV.WEBGL_LEGACY?this.maxTextures=1:(this.maxTextures=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),e.defaultMaxTextures),this.maxTextures=(0,c.checkMaxIfStatementsInShader)(this.maxTextures,t)),this._shader=this.shaderGenerator.generateShader(this.maxTextures);for(let e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]=new this.geometryClass;this.initFlushBuffers()}/** Makes sure that static and dynamic flush pooled objects have correct dimensions. */initFlushBuffers(){let{_drawCallPool:t,_textureArrayPool:r}=e,i=this.size/4,s=Math.floor(i/this.maxTextures)+1;for(;t.length<i;)t.push(new m.BatchDrawCall);for(;r.length<s;)r.push(new _.BatchTextureArray);for(let e=0;e<this.maxTextures;e++)this._tempBoundTextures[e]=null}/** Handles the `prerender` signal. It ensures that flushes start from the first geometry object again. */onPrerender(){this._flushId=0}/**
   * Buffers the "batchable" object. It need not be rendered immediately.
   * @param {PIXI.DisplayObject} element - the element to render when
   *    using this renderer
   */render(e){e._texture.valid&&(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)}buildTexturesAndDrawCalls(){let{_bufferedTextures:t,maxTextures:r}=this,i=e._textureArrayPool,s=this.renderer.batch,n=this._tempBoundTextures,a=this.renderer.textureGC.count,o=++f.BaseTexture._globalBatch,l=0,h=i[0],u=0;s.copyBoundTextures(n,r);for(let e=0;e<this._bufferSize;++e){let d=t[e];t[e]=null,d._batchEnabled!==o&&(h.count>=r&&(s.boundArray(h,n,o,r),this.buildDrawCalls(h,u,e),u=e,h=i[++l],++o),d._batchEnabled=o,d.touched=a,h.elements[h.count++]=d)}h.count>0&&(s.boundArray(h,n,o,r),this.buildDrawCalls(h,u,this._bufferSize),++l,++o);for(let e=0;e<n.length;e++)n[e]=null;f.BaseTexture._globalBatch=o}/**
   * Populating drawcalls for rendering
   * @param texArray
   * @param start
   * @param finish
   */buildDrawCalls(t,r,i){let{_bufferedElements:s,_attributeBuffer:n,_indexBuffer:a,vertexSize:o}=this,l=e._drawCallPool,u=this._dcIndex,d=this._aIndex,c=this._iIndex,p=l[u];p.start=this._iIndex,p.texArray=t;for(let e=r;e<i;++e){let i=s[e],f=i._texture.baseTexture,m=h.premultiplyBlendMode[f.alphaMode?1:0][i.blendMode];s[e]=null,r<e&&p.blend!==m&&(p.size=c-p.start,r=e,(p=l[++u]).texArray=t,p.start=c),this.packInterleavedGeometry(i,n,a,d,c),d+=i.vertexData.length/2*o,c+=i.indices.length,p.blend=m}r<i&&(p.size=c-p.start,++u),this._dcIndex=u,this._aIndex=d,this._iIndex=c}/**
   * Bind textures for current rendering
   * @param texArray
   */bindAndClearTexArray(e){let t=this.renderer.texture;for(let r=0;r<e.count;r++)t.bind(e.elements[r],e.ids[r]),e.elements[r]=null;e.count=0}updateGeometry(){let{_packedGeometries:t,_attributeBuffer:r,_indexBuffer:i}=this;e.canUploadSameBuffer?(t[this._flushId]._buffer.update(r.rawBinaryData),t[this._flushId]._indexBuffer.update(i),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,t[this._flushId]=new this.geometryClass),t[this._flushId]._buffer.update(r.rawBinaryData),t[this._flushId]._indexBuffer.update(i),this.renderer.geometry.bind(t[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)}drawBatches(){let t=this._dcIndex,{gl:r,state:i}=this.renderer,s=e._drawCallPool,n=null;for(let e=0;e<t;e++){let{texArray:t,type:a,size:o,start:l,blend:h}=s[e];n!==t&&(n=t,this.bindAndClearTexArray(t)),this.state.blendMode=h,i.set(this.state),r.drawElements(a,o,r.UNSIGNED_SHORT,2*l)}}/** Renders the content _now_ and empties the current batch. */flush(){0!==this._vertexCount&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)}/** Starts a new sprite batch. */start(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.maxTextures),this.renderer.shader.bind(this._shader),e.canUploadSameBuffer&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])}/** Stops and flushes the current batch. */stop(){this.flush()}/** Destroys this `BatchRenderer`. It cannot be used again. */destroy(){for(let e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),super.destroy()}/**
   * Fetches an attribute buffer from `this._aBuffers` that can hold atleast `size` floats.
   * @param size - minimum capacity required
   * @returns - buffer than can hold atleast `size` floats
   */getAttributeBuffer(e){let t=(0,u.nextPow2)(Math.ceil(e/8)),r=(0,u.log2)(t),i=8*t;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);let s=this._aBuffers[i];return s||(this._aBuffers[i]=s=new d.ViewableBuffer(i*this.vertexSize*4)),s}/**
   * Fetches an index buffer from `this._iBuffers` that can
   * have at least `size` capacity.
   * @param size - minimum required capacity
   * @returns - buffer that can fit `size` indices.
   */getIndexBuffer(e){let t=(0,u.nextPow2)(Math.ceil(e/12)),r=(0,u.log2)(t);this._iBuffers.length<=r&&(this._iBuffers.length=r+1);let i=this._iBuffers[r];return i||(this._iBuffers[r]=i=new Uint16Array(12*t)),i}/**
   * Takes the four batching parameters of `element`, interleaves
   * and pushes them into the batching attribute/index buffers given.
   *
   * It uses these properties: `vertexData` `uvs`, `textureId` and
   * `indicies`. It also uses the "tint" of the base-texture, if
   * present.
   * @param {PIXI.DisplayObject} element - element being rendered
   * @param attributeBuffer - attribute buffer.
   * @param indexBuffer - index buffer
   * @param aIndex - number of floats already in the attribute buffer
   * @param iIndex - number of indices already in `indexBuffer`
   */packInterleavedGeometry(e,t,r,s,n){let{uint32View:a,float32View:o}=t,l=s/this.vertexSize,h=e.uvs,u=e.indices,d=e.vertexData,c=e._texture.baseTexture._batchLocation,p=Math.min(e.worldAlpha,1),f=(0,i.Color).shared.setValue(e._tintRGB).toPremultiplied(p,e._texture.baseTexture.alphaMode>0);for(let e=0;e<d.length;e+=2)o[s++]=d[e],o[s++]=d[e+1],o[s++]=h[e],o[s++]=h[e+1],a[s++]=f,o[s++]=c;for(let e=0;e<u.length;e++)r[n++]=l+u[e]}};b.defaultBatchSize=4096,/** @ignore */b.extension={name:"batch",type:a.ExtensionType.RendererPlugin},/**
* Pool of `BatchDrawCall` objects that `flush` used
* to create "batches" of the objects being rendered.
*
* These are never re-allocated again.
* Shared between all batch renderers because it can be only one "flush" working at the moment.
* @member {PIXI.BatchDrawCall[]}
*/b._drawCallPool=[],/**
* Pool of `BatchDrawCall` objects that `flush` used
* to create "batches" of the objects being rendered.
*
* These are never re-allocated again.
* Shared between all batch renderers because it can be only one "flush" working at the moment.
* @member {PIXI.BatchTextureArray[]}
*/b._textureArrayPool=[];let S=b;(0,a.extensions).add(S)}),a("glXXo",function(t,r){e(t.exports,"ExtensionType",()=>s),e(t.exports,"extensions",()=>o);var i,s=((i=s||{}).Renderer="renderer",i.Application="application",i.RendererSystem="renderer-webgl-system",i.RendererPlugin="renderer-webgl-plugin",i.CanvasRendererSystem="renderer-canvas-system",i.CanvasRendererPlugin="renderer-canvas-plugin",i.Asset="asset",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser",i);let n=e=>{if("function"==typeof e||"object"==typeof e&&e.extension){if(!e.extension)throw Error("Extension class must have an extension object");e={..."object"!=typeof e.extension?{type:e.extension}:e.extension,ref:e}}if("object"==typeof e)e={...e};else throw Error("Invalid extension type");return"string"==typeof e.type&&(e.type=[e.type]),e},a=(e,t)=>n(e).priority??t,o={/** @ignore */_addHandlers:{},/** @ignore */_removeHandlers:{},/** @ignore */_queue:{},/**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed.
   * @returns {PIXI.extensions} For chaining.
   */remove(...e){return e.map(n).forEach(e=>{e.type.forEach(t=>this._removeHandlers[t]?.(e))}),this},/**
   * Register new extensions with PixiJS.
   * @param extensions - The spread of extensions to add to PixiJS.
   * @returns {PIXI.extensions} For chaining.
   */add(...e){return e.map(n).forEach(e=>{e.type.forEach(t=>{let r=this._addHandlers,i=this._queue;r[t]?r[t](e):(i[t]=i[t]||[],i[t].push(e))})}),this},/**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function for handling when extensions are added/registered passes {@link PIXI.ExtensionFormat}.
   * @param onRemove  - Function for handling when extensions are removed/unregistered passes {@link PIXI.ExtensionFormat}.
   * @returns {PIXI.extensions} For chaining.
   */handle(e,t,r){let i=this._addHandlers,s=this._removeHandlers;if(i[e]||s[e])throw Error(`Extension type ${e} already has a handler`);i[e]=t,s[e]=r;let n=this._queue;return n[e]&&(n[e].forEach(e=>t(e)),delete n[e]),this},/**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns {PIXI.extensions} For chaining.
   */handleByMap(e,t){return this.handle(e,e=>{t[e.name]=e.ref},e=>{delete t[e.name]})},/**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @param defaultPriority - The default priority to use if none is specified.
   * @returns {PIXI.extensions} For chaining.
   */handleByList(e,t,r=-1){return this.handle(e,e=>{t.includes(e.ref)||(t.push(e.ref),t.sort((e,t)=>a(t,r)-a(e,r)))},e=>{let r=t.indexOf(e.ref);-1!==r&&t.splice(r,1)})}}}),a("k8R80",function(t,r){e(t.exports,"ViewableBuffer",()=>i);class i{constructor(e){"number"==typeof e?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}/** View on the raw binary data as a `Int8Array`. */get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}/** View on the raw binary data as a `Uint8Array`. */get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}/**  View on the raw binary data as a `Int16Array`. */get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}/** View on the raw binary data as a `Uint16Array`. */get uint16View(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View}/** View on the raw binary data as a `Int32Array`. */get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}/**
   * Returns the view of the given type.
   * @param type - One of `int8`, `uint8`, `int16`,
   *    `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - typed array of given type
   */view(e){return this[`${e}View`]}/** Destroys all buffer references. Do not use after calling this. */destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw Error(`${e} isn't a valid view type`)}}}}),a("k2H3u",function(t,r){e(t.exports,"checkMaxIfStatementsInShader",()=>s);let i=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function s(e,t){if(0===e)throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");let r=t.createShader(t.FRAGMENT_SHADER);for(;;){let s=i.replace(/%forloop%/gi,function(e){let t="";for(let r=0;r<e;++r)r>0&&(t+=`
else `),r<e-1&&(t+=`if(test == ${r}.0){}`);return t}(e));if(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))break;e=e/2|0}return e}}),a("glF38",function(t,r){e(t.exports,"State",()=>s);var i=n("jetUE");class s{constructor(){this.data=0,this.blendMode=i.BLEND_MODES.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}/**
   * Activates blending of the computed fragment color values.
   * @default true
   */get blend(){return!!(1&this.data)}set blend(e){!!(1&this.data)!==e&&(this.data^=1)}/**
   * Activates adding an offset to depth values of polygon's fragments
   * @default false
   */get offsets(){return!!(2&this.data)}set offsets(e){!!(2&this.data)!==e&&(this.data^=2)}/**
   * Activates culling of polygons.
   * @default false
   */get culling(){return!!(4&this.data)}set culling(e){!!(4&this.data)!==e&&(this.data^=4)}/**
   * Activates depth comparisons and updates to the depth buffer.
   * @default false
   */get depthTest(){return!!(8&this.data)}set depthTest(e){!!(8&this.data)!==e&&(this.data^=8)}/**
   * Enables or disables writing to the depth buffer.
   * @default true
   */get depthMask(){return!!(32&this.data)}set depthMask(e){!!(32&this.data)!==e&&(this.data^=32)}/**
   * Specifies whether or not front or back-facing polygons can be culled.
   * @default false
   */get clockwiseFrontFace(){return!!(16&this.data)}set clockwiseFrontFace(e){!!(16&this.data)!==e&&(this.data^=16)}/**
   * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
   * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
   * @default PIXI.BLEND_MODES.NORMAL
   */get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!==i.BLEND_MODES.NONE,this._blendMode=e}/**
   * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
   * @default 0
   */get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}static for2d(){let e=new s;return e.depthTest=!1,e.blend=!0,e}}s.prototype.toString=function(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}}),a("2Am4Q",function(r,i){e(r.exports,"BaseTexture",()=>g);var s=n("jetUE");n("iEiSW");var a=n("8oqCw");n("MiLFw");var o=n("XaHk7"),l=n("5HyIA"),h=n("bfI44"),u=n("1PbQI"),d=n("lIUKC"),c=n("1ClQS"),p=n("glvjk");let f={scaleMode:s.SCALE_MODES.NEAREST,alphaMode:s.ALPHA_MODES.NPM},m=class e extends /*@__PURE__*/t(u){/**
   * @param {PIXI.Resource|HTMLImageElement|HTMLVideoElement|ImageBitmap|ICanvas|string} [resource=null] -
   *        The current resource to use, for things that aren't Resource objects, will be converted
   *        into a Resource.
   * @param options - Collection of options, default options inherited from {@link PIXI.BaseTexture.defaultOptions}.
   * @param {PIXI.MIPMAP_MODES} [options.mipmap] - If mipmapping is enabled for texture
   * @param {number} [options.anisotropicLevel] - Anisotropic filtering level of texture
   * @param {PIXI.WRAP_MODES} [options.wrapMode] - Wrap mode for textures
   * @param {PIXI.SCALE_MODES} [options.scaleMode] - Default scale mode, linear, nearest
   * @param {PIXI.FORMATS} [options.format] - GL format type
   * @param {PIXI.TYPES} [options.type] - GL data type
   * @param {PIXI.TARGETS} [options.target] - GL texture target
   * @param {PIXI.ALPHA_MODES} [options.alphaMode] - Pre multiply the image alpha
   * @param {number} [options.width=0] - Width of the texture
   * @param {number} [options.height=0] - Height of the texture
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - Resolution of the base texture
   * @param {object} [options.resourceOptions] - Optional resource options,
   *        see {@link PIXI.autoDetectResource autoDetectResource}
   */constructor(t=null,r=null){super(),r=Object.assign({},e.defaultOptions,r);let{alphaMode:i,mipmap:s,anisotropicLevel:n,scaleMode:l,width:h,height:u,wrapMode:c,format:f,type:m,target:g,resolution:x,resourceOptions:_}=r;!t||t instanceof p.Resource||((t=(0,d.autoDetectResource)(t,_)).internal=!0),this.resolution=x||a.settings.RESOLUTION,this.width=Math.round((h||0)*this.resolution)/this.resolution,this.height=Math.round((u||0)*this.resolution)/this.resolution,this._mipmap=s,this.anisotropicLevel=n,this._wrapMode=c,this._scaleMode=l,this.format=f,this.type=m,this.target=g,this.alphaMode=i,this.uid=(0,o.uid)(),this.touched=0,this.isPowerOfTwo=!1,this._refreshPOT(),this._glTextures={},this.dirtyId=0,this.dirtyStyleId=0,this.cacheId=null,this.valid=h>0&&u>0,this.textureCacheIds=[],this.destroyed=!1,this.resource=null,this._batchEnabled=0,this._batchLocation=0,this.parentTextureArray=null,this.setResource(t)}/**
   * Pixel width of the source of this texture
   * @readonly
   */get realWidth(){return Math.round(this.width*this.resolution)}/**
   * Pixel height of the source of this texture
   * @readonly
   */get realHeight(){return Math.round(this.height*this.resolution)}/**
   * Mipmap mode of the texture, affects downscaled images
   * @default PIXI.MIPMAP_MODES.POW2
   */get mipmap(){return this._mipmap}set mipmap(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)}/**
   * The scale mode to apply when scaling this texture
   * @default PIXI.SCALE_MODES.LINEAR
   */get scaleMode(){return this._scaleMode}set scaleMode(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)}/**
   * How the texture wraps
   * @default PIXI.WRAP_MODES.CLAMP
   */get wrapMode(){return this._wrapMode}set wrapMode(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)}/**
   * Changes style options of BaseTexture
   * @param scaleMode - Pixi scalemode
   * @param mipmap - enable mipmaps
   * @returns - this
   */setStyle(e,t){let r;return void 0!==e&&e!==this.scaleMode&&(this.scaleMode=e,r=!0),void 0!==t&&t!==this.mipmap&&(this.mipmap=t,r=!0),r&&this.dirtyStyleId++,this}/**
   * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
   * @param desiredWidth - Desired visual width
   * @param desiredHeight - Desired visual height
   * @param resolution - Optionally set resolution
   * @returns - this
   */setSize(e,t,r){return r=r||this.resolution,this.setRealSize(e*r,t*r,r)}/**
   * Sets real size of baseTexture, preserves current resolution.
   * @param realWidth - Full rendered width
   * @param realHeight - Full rendered height
   * @param resolution - Optionally set resolution
   * @returns - this
   */setRealSize(e,t,r){return this.resolution=r||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(t)/this.resolution,this._refreshPOT(),this.update(),this}/**
   * Refresh check for isPowerOfTwo texture based on size
   * @private
   */_refreshPOT(){this.isPowerOfTwo=(0,l.isPow2)(this.realWidth)&&(0,l.isPow2)(this.realHeight)}/**
   * Changes resolution
   * @param resolution - res
   * @returns - this
   */setResolution(e){let t=this.resolution;return t===e||(this.resolution=e,this.valid&&(this.width=Math.round(this.width*t)/e,this.height=Math.round(this.height*t)/e,this.emit("update",this)),this._refreshPOT()),this}/**
   * Sets the resource if it wasn't set. Throws error if resource already present
   * @param resource - that is managing this BaseTexture
   * @returns - this
   */setResource(e){if(this.resource===e)return this;if(this.resource)throw Error("Resource can be set only once");return e.bind(this),this.resource=e,this}/** Invalidates the object. Texture becomes valid if width and height are greater than zero. */update(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))}/**
   * Handle errors with resources.
   * @private
   * @param event - Error event emitted.
   */onError(e){this.emit("error",this,e)}/**
   * Destroys this base texture.
   * The method stops if resource doesn't want this texture to be destroyed.
   * Removes texture from all caches.
   * @fires PIXI.BaseTexture#destroyed
   */destroy(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete h.BaseTextureCache[this.cacheId],delete h.TextureCache[this.cacheId],this.cacheId=null),this.valid=!1,this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0,this.emit("destroyed",this),this.removeAllListeners()}/**
   * Frees the texture from WebGL memory without destroying this texture object.
   * This means you can still use the texture later which will upload it to GPU
   * memory again.
   * @fires PIXI.BaseTexture#dispose
   */dispose(){this.emit("dispose",this)}/** Utility function for BaseTexture|Texture cast. */castToBaseTexture(){return this}/**
   * Helper function that creates a base texture based on the source you provide.
   * The source can be - image url, image element, canvas element. If the
   * source is an image url or an image element and not in the base texture
   * cache, it will be created and loaded.
   * @static
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas|string|string[]} source - The
   *        source to create base texture from.
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
   * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
   * @returns {PIXI.BaseTexture} The new base texture.
   */static from(t,r,i=a.settings.STRICT_TEXTURE_CACHE){let s="string"==typeof t,n=null;if(s)n=t;else{if(!t._pixiId){let e=r?.pixiIdPrefix||"pixiid";t._pixiId=`${e}_${(0,o.uid)()}`}n=t._pixiId}let l=h.BaseTextureCache[n];if(s&&i&&!l)throw Error(`The cacheId "${n}" does not exist in BaseTextureCache.`);return l||((l=new e(t,r)).cacheId=n,e.addToCache(l,n)),l}/**
   * Create a new Texture with a BufferResource from a typed array.
   * @param buffer - The optional array to use. If no data is provided, a new Float32Array is created.
   * @param width - Width of the resource
   * @param height - Height of the resource
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   *        Default properties are different from the constructor's defaults.
   * @param {PIXI.FORMATS} [options.format] - The format is not given, the type is inferred from the
   *        type of the buffer: `RGBA` if Float32Array, Int8Array, Uint8Array, or Uint8ClampedArray,
   *        otherwise `RGBA_INTEGER`.
   * @param {PIXI.TYPES} [options.type] - The type is not given, the type is inferred from the
   *        type of the buffer. Maps Float32Array to `FLOAT`, Int32Array to `INT`, Uint32Array to
   *        `UNSIGNED_INT`, Int16Array to `SHORT`, Uint16Array to `UNSIGNED_SHORT`, Int8Array to `BYTE`,
   *        Uint8Array/Uint8ClampedArray to `UNSIGNED_BYTE`.
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.NPM]
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.SCALE_MODES.NEAREST]
   * @returns - The resulting new BaseTexture
   */static fromBuffer(t,r,i,n){let a,o;t=t||new Float32Array(r*i*4);let l=new c.BufferResource(t,{width:r,height:i,...n?.resourceOptions});return t instanceof Float32Array?(a=s.FORMATS.RGBA,o=s.TYPES.FLOAT):t instanceof Int32Array?(a=s.FORMATS.RGBA_INTEGER,o=s.TYPES.INT):t instanceof Uint32Array?(a=s.FORMATS.RGBA_INTEGER,o=s.TYPES.UNSIGNED_INT):t instanceof Int16Array?(a=s.FORMATS.RGBA_INTEGER,o=s.TYPES.SHORT):t instanceof Uint16Array?(a=s.FORMATS.RGBA_INTEGER,o=s.TYPES.UNSIGNED_SHORT):t instanceof Int8Array?(a=s.FORMATS.RGBA,o=s.TYPES.BYTE):(a=s.FORMATS.RGBA,o=s.TYPES.UNSIGNED_BYTE),l.internal=!0,new e(l,Object.assign({},f,{type:o,format:a},n))}/**
   * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
   * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
   * @param {string} id - The id that the BaseTexture will be stored against.
   */static addToCache(e,t){t&&(e.textureCacheIds.includes(t)||e.textureCacheIds.push(t),h.BaseTextureCache[t]&&h.BaseTextureCache[t]!==e&&console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`),h.BaseTextureCache[t]=e)}/**
   * Remove a BaseTexture from the global BaseTextureCache.
   * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
   * @returns {PIXI.BaseTexture|null} The BaseTexture that was removed.
   */static removeFromCache(e){if("string"==typeof e){let t=h.BaseTextureCache[e];if(t){let r=t.textureCacheIds.indexOf(e);return r>-1&&t.textureCacheIds.splice(r,1),delete h.BaseTextureCache[e],t}}else if(e?.textureCacheIds){for(let t=0;t<e.textureCacheIds.length;++t)delete h.BaseTextureCache[e.textureCacheIds[t]];return e.textureCacheIds.length=0,e}return null}};m.defaultOptions={/**
   * If mipmapping is enabled for texture.
   * @type {PIXI.MIPMAP_MODES}
   * @default PIXI.MIPMAP_MODES.POW2
   */mipmap:s.MIPMAP_MODES.POW2,/** Anisotropic filtering level of texture */anisotropicLevel:0,/**
   * Default scale mode, linear, nearest.
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */scaleMode:s.SCALE_MODES.LINEAR,/**
   * Wrap mode for textures.
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */wrapMode:s.WRAP_MODES.CLAMP,/**
   * Pre multiply the image alpha
   * @type {PIXI.ALPHA_MODES}
   * @default PIXI.ALPHA_MODES.UNPACK
   */alphaMode:s.ALPHA_MODES.UNPACK,/**
   * GL texture target
   * @type {PIXI.TARGETS}
   * @default PIXI.TARGETS.TEXTURE_2D
   */target:s.TARGETS.TEXTURE_2D,/**
   * GL format type
   * @type {PIXI.FORMATS}
   * @default PIXI.FORMATS.RGBA
   */format:s.FORMATS.RGBA,/**
   * GL data type
   * @type {PIXI.TYPES}
   * @default PIXI.TYPES.UNSIGNED_BYTE
   */type:s.TYPES.UNSIGNED_BYTE},/** Global number of the texture batch, used by multi-texture renderers. */m._globalBatch=0;let g=m}),a("lIUKC",function(t,r){e(t.exports,"INSTALLED",()=>i),e(t.exports,"autoDetectResource",()=>s);let i=[];function s(e,t){if(!e)return null;let r="";if("string"==typeof e){let t=/\.(\w{3,4})(?:$|\?|#)/i.exec(e);t&&(r=t[1].toLowerCase())}for(let s=i.length-1;s>=0;--s){let n=i[s];if(n.test&&n.test(e,r))return new n(e,t)}throw Error("Unrecognized source type to auto-detect Resource")}}),a("1ClQS",function(t,r){e(t.exports,"BufferResource",()=>a);var i=n("jetUE"),s=n("glvjk");class a extends s.Resource{/**
   * @param source - Source buffer
   * @param options - Options
   * @param {number} options.width - Width of the texture
   * @param {number} options.height - Height of the texture
   * @param {1|2|4|8} [options.unpackAlignment=4] - The alignment of the pixel rows.
   */constructor(e,t){let{width:r,height:i}=t||{};if(!r||!i)throw Error("BufferResource width or height invalid");super(r,i),this.data=e,this.unpackAlignment=t.unpackAlignment??4}/**
   * Upload the texture to the GPU.
   * @param renderer - Upload to the renderer
   * @param baseTexture - Reference to parent texture
   * @param glTexture - glTexture
   * @returns - true is success
   */upload(e,t,r){let s=e.gl;s.pixelStorei(s.UNPACK_ALIGNMENT,this.unpackAlignment),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.alphaMode===i.ALPHA_MODES.UNPACK);let n=t.realWidth,a=t.realHeight;return r.width===n&&r.height===a?s.texSubImage2D(t.target,0,0,0,n,a,t.format,r.type,this.data):(r.width=n,r.height=a,s.texImage2D(t.target,0,r.internalFormat,n,a,0,t.format,r.type,this.data)),!0}/** Destroy and don't use after this. */dispose(){this.data=null}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if buffer source
   */static test(e){return null===e||e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}}),a("glvjk",function(t,r){e(t.exports,"Resource",()=>s),n("A1ho4");var i=n("lmeMj");class s{/**
   * @param width - Width of the resource
   * @param height - Height of the resource
   */constructor(e=0,t=0){this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new i.Runner("setRealSize"),this.onUpdate=new i.Runner("update"),this.onError=new i.Runner("onError")}/**
   * Bind to a parent BaseTexture
   * @param baseTexture - Parent texture
   */bind(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)}/**
   * Unbind to a parent BaseTexture
   * @param baseTexture - Parent texture
   */unbind(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)}/**
   * Trigger a resize event
   * @param width - X dimension
   * @param height - Y dimension
   */resize(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))}/**
   * Has been validated
   * @readonly
   */get valid(){return!!this._width&&!!this._height}/** Has been updated trigger event. */update(){this.destroyed||this.onUpdate.emit()}/**
   * This can be overridden to start preloading a resource
   * or do any other prepare step.
   * @protected
   * @returns Handle the validate event
   */load(){return Promise.resolve(this)}/**
   * The width of the resource.
   * @readonly
   */get width(){return this._width}/**
   * The height of the resource.
   * @readonly
   */get height(){return this._height}/**
   * Set the style, optional to override
   * @param _renderer - yeah, renderer!
   * @param _baseTexture - the texture
   * @param _glTexture - texture instance for this webgl context
   * @returns - `true` is success
   */style(e,t,r){return!1}/** Clean up anything, this happens when destroying is ready. */dispose(){}/**
   * Call when destroying resource, unbind any BaseTexture object
   * before calling this method, as reference counts are maintained
   * internally.
   */destroy(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)}/**
   * Abstract, used to auto-detect resource type.
   * @param {*} _source - The source object
   * @param {string} _extension - The extension of source, if set
   */static test(e,t){return!1}}}),a("A1ho4",function(t,r){e(t.exports,"Runner",()=>n("lmeMj").Runner),n("lmeMj")}),a("lmeMj",function(t,r){e(t.exports,"Runner",()=>i);class i{/**
   * @param name - The function name that will be executed on the listeners added to this Runner.
   */constructor(e){this.items=[],this._name=e,this._aliasCount=0}/* eslint-disable jsdoc/require-param, jsdoc/check-param-names *//**
   * Dispatch/Broadcast Runner to all listeners added to the queue.
   * @param {...any} params - (optional) parameters to pass to each listener
   *//*  eslint-enable jsdoc/require-param, jsdoc/check-param-names */emit(e,t,r,i,s,n,a,o){if(arguments.length>8)throw Error("max arguments reached");let{name:l,items:h}=this;this._aliasCount++;for(let u=0,d=h.length;u<d;u++)h[u][l](e,t,r,i,s,n,a,o);return h===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}/**
   * Add a listener to the Runner
   *
   * Runners do not need to have scope or functions passed to them.
   * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
   * as the name provided to the Runner when it was created.
   *
   * E.g. A listener passed to this Runner will require a 'complete' function.
   *
   * ```js
   * import { Runner } from '@pixi/runner';
   *
   * const complete = new Runner('complete');
   * ```
   *
   * The scope used will be the object itself.
   * @param {any} item - The object that will be listening.
   */add(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this}/**
   * Remove a single listener from the dispatch queue.
   * @param {any} item - The listener that you would like to remove.
   */remove(e){let t=this.items.indexOf(e);return -1!==t&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this}/**
   * Check to see if the listener is already in the Runner
   * @param {any} item - The listener that you would like to check.
   */contains(e){return this.items.includes(e)}/** Remove all listeners from the Runner */removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}/** Remove all references, don't use after this. */destroy(){this.removeAll(),this.items=null,this._name=null}/**
   * `true` if there are no this Runner contains no listeners
   * @readonly
   */get empty(){return 0===this.items.length}/**
   * The name of the runner.
   * @readonly
   */get name(){return this._name}}Object.defineProperties(i.prototype,{/**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method dispatch
   * @see PIXI.Runner#emit
   */dispatch:{value:i.prototype.emit},/**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method run
   * @see PIXI.Runner#emit
   */run:{value:i.prototype.emit}})}),a("fTFNy",function(t,r){e(t.exports,"BatchDrawCall",()=>s);var i=n("jetUE");class s{constructor(){this.texArray=null,this.blend=0,this.type=i.DRAW_MODES.TRIANGLES,this.start=0,this.size=0,this.data=null}}}),a("i9Brf",function(t,r){e(t.exports,"BatchGeometry",()=>o);var i=n("jetUE"),s=n("ckQUf"),a=n("82wLZ");class o extends a.Geometry{/**
   * @param {boolean} [_static=false] - Optimization flag, where `false`
   *        is updated every frame, `true` doesn't change frame-to-frame.
   */constructor(e=!1){super(),this._buffer=new s.Buffer(null,e,!1),this._indexBuffer=new s.Buffer(null,e,!0),this.addAttribute("aVertexPosition",this._buffer,2,!1,i.TYPES.FLOAT).addAttribute("aTextureCoord",this._buffer,2,!1,i.TYPES.FLOAT).addAttribute("aColor",this._buffer,4,!0,i.TYPES.UNSIGNED_BYTE).addAttribute("aTextureId",this._buffer,1,!0,i.TYPES.FLOAT).addIndex(this._indexBuffer)}}}),a("ckQUf",function(t,r){e(t.exports,"Buffer",()=>o);var i=n("jetUE");n("A1ho4");var s=n("lmeMj");let a=0;class o{/**
   * @param {PIXI.IArrayBuffer} data - the data to store in the buffer.
   * @param _static - `true` for static buffer
   * @param index - `true` for index buffer
   */constructor(e,t=!0,r=!1){this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=r,this.static=t,this.id=a++,this.disposeRunner=new s.Runner("disposeBuffer")}// TODO could explore flagging only a partial upload?
/**
   * Flags this buffer as requiring an upload to the GPU.
   * @param {PIXI.IArrayBuffer|number[]} [data] - the data to update in the buffer.
   */update(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++}/** Disposes WebGL resources that are connected to this geometry. */dispose(){this.disposeRunner.emit(this,!1)}/** Destroys the buffer. */destroy(){this.dispose(),this.data=null}/**
   * Flags whether this is an index buffer.
   *
   * Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
   * the buffer of type `ARRAY_BUFFER`.
   *
   * For backwards compatibility.
   */set index(e){this.type=e?i.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER:i.BUFFER_TYPE.ARRAY_BUFFER}get index(){return this.type===i.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER}/**
   * Helper function that creates a buffer based on an array or TypedArray
   * @param {ArrayBufferView | number[]} data - the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
   * @returns - A new Buffer based on the data provided.
   */static from(e){return e instanceof Array&&(e=new Float32Array(e)),new o(e)}}}),a("82wLZ",function(t,r){e(t.exports,"Geometry",()=>p);var i=n("jetUE");n("A1ho4");var s=n("lmeMj");n("MiLFw");var a=n("kjbzP"),o=n("erBUo"),l=n("ckQUf"),h=n("cEEbc");let u={5126:4,5123:2,5121:1},d=0,c={Float32Array:Float32Array,Uint32Array:Uint32Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array};class p{/**
   * @param buffers - An array of buffers. optional.
   * @param attributes - Of the geometry, optional structure of the attributes layout
   */constructor(e=[],t={}){this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=d++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new s.Runner("disposeGeometry"),this.refCount=0}/**
   *
   * Adds an attribute to the geometry
   * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
   * @param id - the name of the attribute (matching up to a shader)
   * @param {PIXI.Buffer|number[]} buffer - the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
   * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
   * @param normalized - should the data be normalized.
   * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @param [start=0] - How far into the array to start reading values (used for interleaving data)
   * @param instance - Instancing flag
   * @returns - Returns self, useful for chaining.
   */addAttribute(e,t,r=0,i=!1,s,n,a,h=!1){if(!t)throw Error("You must pass a buffer when creating an attribute");t instanceof l.Buffer||(t instanceof Array&&(t=new Float32Array(t)),t=new l.Buffer(t));let u=e.split("|");if(u.length>1){for(let e=0;e<u.length;e++)this.addAttribute(u[e],t,r,i,s);return this}let d=this.buffers.indexOf(t);return -1===d&&(this.buffers.push(t),d=this.buffers.length-1),this.attributes[e]=new o.Attribute(d,r,i,s,n,a,h),this.instanced=this.instanced||h,this}/**
   * Returns the requested attribute.
   * @param id - The name of the attribute required
   * @returns - The attribute requested.
   */getAttribute(e){return this.attributes[e]}/**
   * Returns the requested buffer.
   * @param id - The name of the buffer required.
   * @returns - The buffer requested.
   */getBuffer(e){return this.buffers[this.getAttribute(e).buffer]}/**
   *
   * Adds an index buffer to the geometry
   * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
   * @param {PIXI.Buffer|number[]} [buffer] - The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
   * @returns - Returns self, useful for chaining.
   */addIndex(e){return e instanceof l.Buffer||(e instanceof Array&&(e=new Uint16Array(e)),e=new l.Buffer(e)),e.type=i.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.includes(e)||this.buffers.push(e),this}/**
   * Returns the index buffer
   * @returns - The index buffer.
   */getIndex(){return this.indexBuffer}/**
   * This function modifies the structure so that all current attributes become interleaved into a single buffer
   * This can be useful if your model remains static as it offers a little performance boost
   * @returns - Returns self, useful for chaining.
   */interleave(){let e;if(1===this.buffers.length||2===this.buffers.length&&this.indexBuffer)return this;let t=[],r=[],i=new l.Buffer;for(e in this.attributes){let i=this.attributes[e],s=this.buffers[i.buffer];t.push(s.data),r.push(i.size*u[i.type]/4),i.buffer=0}for(i.data=(0,h.interleaveTypedArrays)(t,r),e=0;e<this.buffers.length;e++)this.buffers[e]!==this.indexBuffer&&this.buffers[e].destroy();return this.buffers=[i],this.indexBuffer&&this.buffers.push(this.indexBuffer),this}/** Get the size of the geometries, in vertices. */getSize(){for(let e in this.attributes){let t=this.attributes[e];return this.buffers[t.buffer].data.length/(t.stride/4||t.size)}return 0}/** Disposes WebGL resources that are connected to this geometry. */dispose(){this.disposeRunner.emit(this,!1)}/** Destroys the geometry. */destroy(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null}/**
   * Returns a clone of the geometry.
   * @returns - A new clone of this geometry.
   */clone(){let e=new p;for(let t=0;t<this.buffers.length;t++)e.buffers[t]=new l.Buffer(this.buffers[t].data.slice(0));for(let t in this.attributes){let r=this.attributes[t];e.attributes[t]=new o.Attribute(r.buffer,r.size,r.normalized,r.type,r.stride,r.start,r.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=i.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER),e}/**
   * Merges an array of geometries into a new single one.
   *
   * Geometry attribute styles must match for this operation to work.
   * @param geometries - array of geometries to merge
   * @returns - Shiny new geometry!
   */static merge(e){let t;let r=new p,s=[],n=[],o=[];for(let r=0;r<e.length;r++){t=e[r];for(let e=0;e<t.buffers.length;e++)n[e]=n[e]||0,n[e]+=t.buffers[e].data.length,o[e]=0}for(let e=0;e<t.buffers.length;e++)s[e]=new c[(0,a.getBufferType)(t.buffers[e].data)](n[e]),r.buffers[e]=new l.Buffer(s[e]);for(let r=0;r<e.length;r++){t=e[r];for(let e=0;e<t.buffers.length;e++)s[e].set(t.buffers[e].data,o[e]),o[e]+=t.buffers[e].data.length}if(r.attributes=t.attributes,t.indexBuffer){r.indexBuffer=r.buffers[t.buffers.indexOf(t.indexBuffer)],r.indexBuffer.type=i.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;let s=0,n=0,a=0,o=0;for(let e=0;e<t.buffers.length;e++)if(t.buffers[e]!==t.indexBuffer){o=e;break}for(let e in t.attributes){let r=t.attributes[e];(0|r.buffer)===o&&(n+=r.size*u[r.type]/4)}for(let t=0;t<e.length;t++){let i=e[t].indexBuffer.data;for(let e=0;e<i.length;e++)r.indexBuffer.data[e+a]+=s;s+=e[t].buffers[o].data.length/n,a+=i.length}}return r}}}),a("erBUo",function(t,r){e(t.exports,"Attribute",()=>s);var i=n("jetUE");class s{/**
   * @param buffer - the id of the buffer that this attribute will look for
   * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2.
   * @param normalized - should the data be normalized.
   * @param {PIXI.TYPES} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @param [start=0] - How far into the array to start reading values (used for interleaving data)
   * @param [instance=false] - Whether the geometry is instanced.
   * @param [divisor=1] - Divisor to use when doing instanced rendering
   */constructor(e,t=0,r=!1,s=i.TYPES.FLOAT,n,a,o,l=1){this.buffer=e,this.size=t,this.normalized=r,this.type=s,this.stride=n,this.start=a,this.instance=o,this.divisor=l}/** Destroys the Attribute. */destroy(){this.buffer=null}/**
   * Helper function that creates an Attribute based on the information provided
   * @param buffer - the id of the buffer that this attribute will look for
   * @param [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
   * @param [normalized=false] - should the data be normalized.
   * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @returns - A new {@link PIXI.Attribute} based on the information provided
   */static from(e,t,r,i,n){return new s(e,t,r,i,n)}}}),a("cEEbc",function(t,r){e(t.exports,"interleaveTypedArrays",()=>a),n("MiLFw");var i=n("kjbzP");let s={Float32Array:Float32Array,Uint32Array:Uint32Array,Int32Array:Int32Array,Uint8Array:Uint8Array};function a(e,t){let r=0,n=0,a={};for(let i=0;i<e.length;i++)n+=t[i],r+=e[i].length;let o=new ArrayBuffer(4*r),l=null,h=0;for(let r=0;r<e.length;r++){let u=t[r],d=e[r],c=(0,i.getBufferType)(d);a[c]||(a[c]=new s[c](o)),l=a[c];for(let e=0;e<d.length;e++){let t=(e/u|0)*n+h,r=e%u;l[t+r]=d[e]}h+=u}return new Float32Array(o)}}),a("aj5uY",function(t,r){e(t.exports,"BatchShaderGenerator",()=>l),n("a1P4O");var i=n("fhlwZ"),s=n("e1ifo"),a=n("4Tbkk"),o=n("ltmWw");class l{/**
   * @param vertexSrc - Vertex shader
   * @param fragTemplate - Fragment shader template
   */constructor(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},!t.includes("%count%"))throw Error('Fragment template must contain "%count%".');if(!t.includes("%forloop%"))throw Error('Fragment template must contain "%forloop%".')}generateShader(e){if(!this.programCache[e]){let t=new Int32Array(e);for(let r=0;r<e;r++)t[r]=r;this.defaultGroupCache[e]=(0,o.UniformGroup).from({uSamplers:t},!0);let r=this.fragTemplate;r=(r=r.replace(/%count%/gi,`${e}`)).replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new s.Program(this.vertexSrc,r)}let t={tint:new Float32Array([1,1,1,1]),translationMatrix:new i.Matrix,default:this.defaultGroupCache[e]};return new a.Shader(this.programCache[e],t)}generateSampleSrc(e){let t="";t+=`

`;for(let r=0;r<e;r++)r>0&&(t+=`
else `),r<e-1&&(t+=`if(vTextureId < ${r}.5)`),t+=`
{
	color = texture2D(uSamplers[${r}], vTextureCoord);
}`;return t+`

`}}}),a("a1P4O",function(t,r){e(t.exports,"Circle",()=>n("kKCy0").Circle),e(t.exports,"DEG_TO_RAD",()=>n("lkqjp").DEG_TO_RAD),e(t.exports,"Ellipse",()=>n("96DUo").Ellipse),e(t.exports,"Matrix",()=>n("fhlwZ").Matrix),e(t.exports,"ObservablePoint",()=>n("lEibW").ObservablePoint),e(t.exports,"PI_2",()=>n("lkqjp").PI_2),e(t.exports,"Point",()=>n("iVQEG").Point),e(t.exports,"Polygon",()=>n("707aK").Polygon),e(t.exports,"RAD_TO_DEG",()=>n("lkqjp").RAD_TO_DEG),e(t.exports,"Rectangle",()=>n("6OnST").Rectangle),e(t.exports,"RoundedRectangle",()=>n("4lIrM").RoundedRectangle),e(t.exports,"SHAPES",()=>n("lkqjp").SHAPES),e(t.exports,"Transform",()=>n("9wIYY").Transform),e(t.exports,"groupD8",()=>n("10xzZ").groupD8),n("kKCy0"),n("96DUo"),n("707aK"),n("6OnST"),n("4lIrM"),n("10xzZ"),n("93R3M"),n("7W5aS"),n("fhlwZ"),n("lEibW"),n("iVQEG"),n("9wIYY"),n("lkqjp")}),a("kKCy0",function(t,r){e(t.exports,"Circle",()=>a);var i=n("lkqjp"),s=n("6OnST");class a{/**
   * @param x - The X coordinate of the center of this circle
   * @param y - The Y coordinate of the center of this circle
   * @param radius - The radius of the circle
   */constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.radius=r,this.type=i.SHAPES.CIRC}/**
   * Creates a clone of this Circle instance
   * @returns A copy of the Circle
   */clone(){return new a(this.x,this.y,this.radius)}/**
   * Checks whether the x and y coordinates given are contained within this circle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Circle
   */contains(e,t){if(this.radius<=0)return!1;let r=this.radius*this.radius,i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=r}/**
   * Returns the framing rectangle of the circle as a Rectangle object
   * @returns The framing rectangle
   */getBounds(){return new s.Rectangle(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)}}a.prototype.toString=function(){return`[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}),a("lkqjp",function(t,r){e(t.exports,"PI_2",()=>i),e(t.exports,"RAD_TO_DEG",()=>s),e(t.exports,"DEG_TO_RAD",()=>n),e(t.exports,"SHAPES",()=>o);let i=2*Math.PI,s=180/Math.PI,n=Math.PI/180;var a,o=((a=o||{})[a.POLY=0]="POLY",a[a.RECT=1]="RECT",a[a.CIRC=2]="CIRC",a[a.ELIP=3]="ELIP",a[a.RREC=4]="RREC",a)}),a("6OnST",function(t,r){e(t.exports,"Rectangle",()=>o);var i=n("lkqjp"),s=n("iVQEG");let a=[new s.Point,new s.Point,new s.Point,new s.Point];class o{/**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */constructor(e=0,t=0,r=0,s=0){this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(s),this.type=i.SHAPES.RECT}/** Returns the left edge of the rectangle. */get left(){return this.x}/** Returns the right edge of the rectangle. */get right(){return this.x+this.width}/** Returns the top edge of the rectangle. */get top(){return this.y}/** Returns the bottom edge of the rectangle. */get bottom(){return this.y+this.height}/** A constant empty rectangle. */static get EMPTY(){return new o(0,0,0,0)}/**
   * Creates a clone of this Rectangle
   * @returns a copy of the rectangle
   */clone(){return new o(this.x,this.y,this.width,this.height)}/**
   * Copies another rectangle to this one.
   * @param rectangle - The rectangle to copy from.
   * @returns Returns itself.
   */copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}/**
   * Copies this rectangle to another one.
   * @param rectangle - The rectangle to copy to.
   * @returns Returns given parameter.
   */copyTo(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}/**
   * Checks whether the x and y coordinates given are contained within this Rectangle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rectangle
   */contains(e,t){return!(this.width<=0)&&!(this.height<=0)&&e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}/**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   * Returns true only if the area of the intersection is >0, this means that Rectangles
   * sharing a side are not overlapping. Another side effect is that an arealess rectangle
   * (width or height equal to zero) can't intersect any other rectangle.
   * @param {Rectangle} other - The Rectangle to intersect with `this`.
   * @param {Matrix} transform - The transformation matrix of `other`.
   * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
   */intersects(e,t){if(!t){let t=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=t)return!1;let r=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>r}let r=this.left,i=this.right,s=this.top,n=this.bottom;if(i<=r||n<=s)return!1;let o=a[0].set(e.left,e.top),l=a[1].set(e.left,e.bottom),h=a[2].set(e.right,e.top),u=a[3].set(e.right,e.bottom);if(h.x<=o.x||l.y<=o.y)return!1;let d=Math.sign(t.a*t.d-t.b*t.c);if(0===d||(t.apply(o,o),t.apply(l,l),t.apply(h,h),t.apply(u,u),Math.max(o.x,l.x,h.x,u.x)<=r||Math.min(o.x,l.x,h.x,u.x)>=i||Math.max(o.y,l.y,h.y,u.y)<=s||Math.min(o.y,l.y,h.y,u.y)>=n))return!1;let c=d*(l.y-o.y),p=d*(o.x-l.x),f=c*r+p*s,m=c*i+p*s,g=c*r+p*n,x=c*i+p*n;if(Math.max(f,m,g,x)<=c*o.x+p*o.y||Math.min(f,m,g,x)>=c*u.x+p*u.y)return!1;let _=d*(o.y-h.y),v=d*(h.x-o.x),E=_*r+v*s,T=_*i+v*s,y=_*r+v*n,A=_*i+v*n;return!(Math.max(E,T,y,A)<=_*o.x+v*o.y||Math.min(E,T,y,A)>=_*u.x+v*u.y)}/**
   * Pads the rectangle making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   * @returns Returns itself.
   */pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=2*e,this.height+=2*t,this}/**
   * Fits this rectangle around the passed one.
   * @param rectangle - The rectangle to fit.
   * @returns Returns itself.
   */fit(e){let t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=i,this.height=Math.max(s-i,0),this}/**
   * Enlarges rectangle that way its corners lie on grid
   * @param resolution - resolution
   * @param eps - precision
   * @returns Returns itself.
   */ceil(e=1,t=.001){let r=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=i-this.y,this}/**
   * Enlarges this rectangle to include the passed rectangle.
   * @param rectangle - The rectangle to include.
   * @returns Returns itself.
   */enlarge(e){let t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=i,this.height=s-i,this}}o.prototype.toString=function(){return`[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}),a("iVQEG",function(t,r){e(t.exports,"Point",()=>i);class i{/**
   * Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}/**
   * Creates a clone of this point
   * @returns A clone of this point
   */clone(){return new i(this.x,this.y)}/**
   * Copies `x` and `y` from the given point into this point
   * @param p - The point to copy from
   * @returns The point instance itself
   */copyFrom(e){return this.set(e.x,e.y),this}/**
   * Copies this point's x and y into the given point (`p`).
   * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
   * @returns The point (`p`) with values updated
   */copyTo(e){return e.set(this.x,this.y),e}/**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */equals(e){return e.x===this.x&&e.y===this.y}/**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the `x` axis
   * @param {number} [y=x] - position of the point on the `y` axis
   * @returns The point instance itself
   */set(e=0,t=e){return this.x=e,this.y=t,this}}i.prototype.toString=function(){return`[@pixi/math:Point x=${this.x} y=${this.y}]`}}),a("96DUo",function(t,r){e(t.exports,"Ellipse",()=>a);var i=n("lkqjp"),s=n("6OnST");class a{/**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */constructor(e=0,t=0,r=0,s=0){this.x=e,this.y=t,this.width=r,this.height=s,this.type=i.SHAPES.ELIP}/**
   * Creates a clone of this Ellipse instance
   * @returns {PIXI.Ellipse} A copy of the ellipse
   */clone(){return new a(this.x,this.y,this.width,this.height)}/**
   * Checks whether the x and y coordinates given are contained within this ellipse
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coords are within this ellipse
   */contains(e,t){if(this.width<=0||this.height<=0)return!1;let r=(e-this.x)/this.width,i=(t-this.y)/this.height;return r*=r,i*=i,r+i<=1}/**
   * Returns the framing rectangle of the ellipse as a Rectangle object
   * @returns The framing rectangle
   */getBounds(){return new s.Rectangle(this.x-this.width,this.y-this.height,this.width,this.height)}}a.prototype.toString=function(){return`[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}),a("707aK",function(t,r){e(t.exports,"Polygon",()=>s);var i=n("lkqjp");class s{/**
   * @param {PIXI.IPointData[]|number[]} points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */constructor(...e){let t=Array.isArray(e[0])?e[0]:e;if("number"!=typeof t[0]){let e=[];for(let r=0,i=t.length;r<i;r++)e.push(t[r].x,t[r].y);t=e}this.points=t,this.type=i.SHAPES.POLY,this.closeStroke=!0}/**
   * Creates a clone of this polygon.
   * @returns - A copy of the polygon.
   */clone(){let e=this.points.slice(),t=new s(e);return t.closeStroke=this.closeStroke,t}/**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon.
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this polygon.
   */contains(e,t){let r=!1,i=this.points.length/2;for(let s=0,n=i-1;s<i;n=s++){let i=this.points[2*s],a=this.points[2*s+1],o=this.points[2*n],l=this.points[2*n+1];a>t!=l>t&&e<(o-i)*((t-a)/(l-a))+i&&(r=!r)}return r}}s.prototype.toString=function(){return`[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}}),a("4lIrM",function(t,r){e(t.exports,"RoundedRectangle",()=>s);var i=n("lkqjp");class s{/**
   * @param x - The X coordinate of the upper-left corner of the rounded rectangle
   * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param width - The overall width of this rounded rectangle
   * @param height - The overall height of this rounded rectangle
   * @param radius - Controls the radius of the rounded corners
   */constructor(e=0,t=0,r=0,s=0,n=20){this.x=e,this.y=t,this.width=r,this.height=s,this.radius=n,this.type=i.SHAPES.RREC}/**
   * Creates a clone of this Rounded Rectangle.
   * @returns - A copy of the rounded rectangle.
   */clone(){return new s(this.x,this.y,this.width,this.height,this.radius)}/**
   * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this Rounded Rectangle.
   */contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){let r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;let i=e-(this.x+r),s=t-(this.y+r),n=r*r;if(i*i+s*s<=n||(i=e-(this.x+this.width-r))*i+s*s<=n||i*i+(s=t-(this.y+this.height-r))*s<=n||(i=e-(this.x+r))*i+s*s<=n)return!0}return!1}}s.prototype.toString=function(){return`[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}),a("10xzZ",function(t,r){e(t.exports,"groupD8",()=>c);var i=n("fhlwZ");let s=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],a=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],o=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],l=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],h=[],u=[],d=Math.sign;!function(){for(let e=0;e<16;e++){let t=[];h.push(t);for(let r=0;r<16;r++){let i=d(s[e]*s[r]+o[e]*a[r]),n=d(a[e]*s[r]+l[e]*a[r]),h=d(s[e]*o[r]+o[e]*l[r]),u=d(a[e]*o[r]+l[e]*l[r]);for(let e=0;e<16;e++)if(s[e]===i&&a[e]===n&&o[e]===h&&l[e]===u){t.push(e);break}}}for(let e=0;e<16;e++){let t=new i.Matrix;t.set(s[e],a[e],o[e],l[e],0,0),u.push(t)}}();let c={/**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 0°       | East      |
   * @readonly
   */E:0,/**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 45°↻     | Southeast |
   * @readonly
   */SE:1,/**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 90°↻     | South     |
   * @readonly
   */S:2,/**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 135°↻    | Southwest |
   * @readonly
   */SW:3,/**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 180°     | West      |
   * @readonly
   */W:4,/**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -135°/225°↻ | Northwest    |
   * @readonly
   */NW:5,/**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -90°/270°↻  | North        |
   * @readonly
   */N:6,/**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -45°/315°↻  | Northeast    |
   * @readonly
   */NE:7,/**
   * Reflection about Y-axis.
   * @readonly
   */MIRROR_VERTICAL:8,/**
   * Reflection about the main diagonal.
   * @readonly
   */MAIN_DIAGONAL:10,/**
   * Reflection about X-axis.
   * @readonly
   */MIRROR_HORIZONTAL:12,/**
   * Reflection about reverse diagonal.
   * @readonly
   */REVERSE_DIAGONAL:14,/**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the U-axis
   *    after rotating the axes.
   */uX:e=>s[e],/**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */uY:e=>a[e],/**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */vX:e=>o[e],/**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */vY:e=>l[e],/**
   * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
   */inv:e=>8&e?15&e:7&-e,/**
   * Composes the two D8 operations.
   *
   * Taking `^` as reflection:
   *
   * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
   * |-------|-----|-----|-----|-----|------|-------|-------|-------|
   * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
   * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
   * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
   * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
   * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
   * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
   * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
   * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
   *
   * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
   *   is the row in the above cayley table.
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
   *   is the column in the above cayley table.
   * @returns {PIXI.GD8Symmetry} Composed operation
   */add:(e,t)=>h[e][t],/**
   * Reverse of `add`.
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation
   * @returns {PIXI.GD8Symmetry} Result
   */sub:(e,t)=>h[e][c.inv(t)],/**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */rotate180:e=>4^e,/**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @param {PIXI.GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */isVertical:e=>(3&e)==2,// rotation % 4 === 2
/**
   * Approximates the vector `V(dx,dy)` into one of the
   * eight directions provided by `groupD8`.
   * @param {number} dx - X-component of the vector
   * @param {number} dy - Y-component of the vector
   * @returns {PIXI.GD8Symmetry} Approximation of the vector into
   *  one of the eight symmetries.
   */byDirection:(e,t)=>2*Math.abs(e)<=Math.abs(t)?t>=0?c.S:c.N:2*Math.abs(t)<=Math.abs(e)?e>0?c.E:c.W:t>0?e>0?c.SE:c.SW:e>0?c.NE:c.NW,/**
   * Helps sprite to compensate texture packer rotation.
   * @param {PIXI.Matrix} matrix - sprite world matrix
   * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */matrixAppendRotationInv:(e,t,r=0,i=0)=>{let s=u[c.inv(t)];s.tx=r,s.ty=i,e.append(s)}}}),a("fhlwZ",function(t,r){e(t.exports,"Matrix",()=>a);var i=n("lkqjp"),s=n("iVQEG");class a{/**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */constructor(e=1,t=0,r=0,i=1,s=0,n=0){this.array=null,this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=n}/**
   * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
   *
   * a = array[0]
   * b = array[1]
   * c = array[3]
   * d = array[4]
   * tx = array[2]
   * ty = array[5]
   * @param array - The array that the matrix will be populated from.
   */fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}/**
   * Sets the matrix properties.
   * @param a - Matrix component
   * @param b - Matrix component
   * @param c - Matrix component
   * @param d - Matrix component
   * @param tx - Matrix component
   * @param ty - Matrix component
   * @returns This matrix. Good for chaining method calls.
   */set(e,t,r,i,s,n){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=n,this}/**
   * Creates an array from the current Matrix object.
   * @param transpose - Whether we need to transpose the matrix or not
   * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
   * @returns The newly created array which contains the matrix
   */toArray(e,t){this.array||(this.array=new Float32Array(9));let r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0),r[8]=1,r}/**
   * Get a new position with the current transformation applied.
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   * @param pos - The origin
   * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {PIXI.Point} The new point, transformed through this matrix
   */apply(e,t){t=t||new s.Point;let r=e.x,i=e.y;return t.x=this.a*r+this.c*i+this.tx,t.y=this.b*r+this.d*i+this.ty,t}/**
   * Get a new position with the inverse of the current transformation applied.
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   * @param pos - The origin
   * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {PIXI.Point} The new point, inverse-transformed through this matrix
   */applyInverse(e,t){t=t||new s.Point;let r=1/(this.a*this.d+-(this.c*this.b)),i=e.x,n=e.y;return t.x=this.d*r*i+-this.c*r*n+(this.ty*this.c-this.tx*this.d)*r,t.y=this.a*r*n+-this.b*r*i+(-this.ty*this.a+this.tx*this.b)*r,t}/**
   * Translates the matrix on the x and y.
   * @param x - How much to translate x by
   * @param y - How much to translate y by
   * @returns This matrix. Good for chaining method calls.
   */translate(e,t){return this.tx+=e,this.ty+=t,this}/**
   * Applies a scale transformation to the matrix.
   * @param x - The amount to scale horizontally
   * @param y - The amount to scale vertically
   * @returns This matrix. Good for chaining method calls.
   */scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}/**
   * Applies a rotation transformation to the matrix.
   * @param angle - The angle in radians.
   * @returns This matrix. Good for chaining method calls.
   */rotate(e){let t=Math.cos(e),r=Math.sin(e),i=this.a,s=this.c,n=this.tx;return this.a=i*t-this.b*r,this.b=i*r+this.b*t,this.c=s*t-this.d*r,this.d=s*r+this.d*t,this.tx=n*t-this.ty*r,this.ty=n*r+this.ty*t,this}/**
   * Appends the given Matrix to this Matrix.
   * @param matrix - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */append(e){let t=this.a,r=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*s+this.ty,this}/**
   * Sets the matrix based on all the available properties
   * @param x - Position on the x axis
   * @param y - Position on the y axis
   * @param pivotX - Pivot on the x axis
   * @param pivotY - Pivot on the y axis
   * @param scaleX - Scale on the x axis
   * @param scaleY - Scale on the y axis
   * @param rotation - Rotation in radians
   * @param skewX - Skew on the x axis
   * @param skewY - Skew on the y axis
   * @returns This matrix. Good for chaining method calls.
   */setTransform(e,t,r,i,s,n,a,o,l){return this.a=Math.cos(a+l)*s,this.b=Math.sin(a+l)*s,this.c=-Math.sin(a-o)*n,this.d=Math.cos(a-o)*n,this.tx=e-(r*this.a+i*this.c),this.ty=t-(r*this.b+i*this.d),this}/**
   * Prepends the given Matrix to this Matrix.
   * @param matrix - The matrix to prepend
   * @returns This matrix. Good for chaining method calls.
   */prepend(e){let t=this.tx;if(1!==e.a||0!==e.b||0!==e.c||1!==e.d){let t=this.a,r=this.c;this.a=t*e.a+this.b*e.c,this.b=t*e.b+this.b*e.d,this.c=r*e.a+this.d*e.c,this.d=r*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}/**
   * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
   * @param transform - The transform to apply the properties to.
   * @returns The transform with the newly applied properties
   */decompose(e){let t=this.a,r=this.b,s=this.c,n=this.d,a=e.pivot,o=-Math.atan2(-s,n),l=Math.atan2(r,t),h=Math.abs(o+l);return h<1e-5||1e-5>Math.abs(i.PI_2-h)?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=o,e.skew.y=l),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(s*s+n*n),e.position.x=this.tx+(a.x*t+a.y*s),e.position.y=this.ty+(a.x*r+a.y*n),e}/**
   * Inverts this matrix
   * @returns This matrix. Good for chaining method calls.
   */invert(){let e=this.a,t=this.b,r=this.c,i=this.d,s=this.tx,n=e*i-t*r;return this.a=i/n,this.b=-t/n,this.c=-r/n,this.d=e/n,this.tx=(r*this.ty-i*s)/n,this.ty=-(e*this.ty-t*s)/n,this}/**
   * Resets this Matrix to an identity (default) matrix.
   * @returns This matrix. Good for chaining method calls.
   */identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}/**
   * Creates a new Matrix object with the same values as this one.
   * @returns A copy of this matrix. Good for chaining method calls.
   */clone(){let e=new a;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}/**
   * Changes the values of the given matrix to be the same as the ones in this matrix
   * @param matrix - The matrix to copy to.
   * @returns The matrix given in parameter with its values updated.
   */copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}/**
   * Changes the values of the matrix to be the same as the ones in given matrix
   * @param {PIXI.Matrix} matrix - The matrix to copy from.
   * @returns {PIXI.Matrix} this
   */copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}/**
   * A default (identity) matrix
   * @readonly
   */static get IDENTITY(){return new a}/**
   * A temp matrix
   * @readonly
   */static get TEMP_MATRIX(){return new a}}a.prototype.toString=function(){return`[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}}),a("93R3M",function(e,t){}),a("7W5aS",function(e,t){}),a("lEibW",function(t,r){e(t.exports,"ObservablePoint",()=>i);class i{/**
   * Creates a new `ObservablePoint`
   * @param cb - callback function triggered when `x` and/or `y` are changed
   * @param scope - owner of callback
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */constructor(e,t,r=0,i=0){this._x=r,this._y=i,this.cb=e,this.scope=t}/**
   * Creates a clone of this point.
   * The callback and scope params can be overridden otherwise they will default
   * to the clone object's values.
   * @override
   * @param cb - The callback function triggered when `x` and/or `y` are changed
   * @param scope - The owner of the callback
   * @returns a copy of this observable point
   */clone(e=this.cb,t=this.scope){return new i(e,t,this._x,this._y)}/**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=x] - position of the point on the y axis
   * @returns The observable point instance itself
   */set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this}/**
   * Copies x and y from the given point (`p`)
   * @param p - The point to copy from. Can be any of type that is or extends `IPointData`
   * @returns The observable point instance itself
   */copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this}/**
   * Copies this point's x and y into that of the given point (`p`)
   * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
   * @returns The point (`p`) with values updated
   */copyTo(e){return e.set(this._x,this._y),e}/**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */equals(e){return e.x===this._x&&e.y===this._y}/** Position of the observable point on the x axis. */get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))}/** Position of the observable point on the y axis. */get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))}}i.prototype.toString=function(){return`[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`}}),a("9wIYY",function(t,r){e(t.exports,"Transform",()=>o);var i=n("fhlwZ"),s=n("lEibW");let a=class{constructor(){this.worldTransform=new i.Matrix,this.localTransform=new i.Matrix,this.position=new s.ObservablePoint(this.onChange,this,0,0),this.scale=new s.ObservablePoint(this.onChange,this,1,1),this.pivot=new s.ObservablePoint(this.onChange,this,0,0),this.skew=new s.ObservablePoint(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}/** Called when a value changes. */onChange(){this._localID++}/** Called when the skew or the rotation changes. */updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++}/** Updates the local transformation matrix. */updateLocalTransform(){let e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)}/**
   * Updates the local and the world transformation matrices.
   * @param parentTransform - The parent transform
   */updateTransform(e){let t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){let r=e.worldTransform,i=this.worldTransform;i.a=t.a*r.a+t.b*r.c,i.b=t.a*r.b+t.b*r.d,i.c=t.c*r.a+t.d*r.c,i.d=t.c*r.b+t.d*r.d,i.tx=t.tx*r.a+t.ty*r.c+r.tx,i.ty=t.tx*r.b+t.ty*r.d+r.ty,this._parentID=e._worldID,this._worldID++}}/**
   * Decomposes a matrix and sets the transforms properties based on it.
   * @param matrix - The matrix to decompose
   */setFromMatrix(e){e.decompose(this),this._localID++}/** The rotation of the object in radians. */get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())}};a.IDENTITY=new a;let o=a;o.prototype.toString=function(){return`[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}}),a("e1ifo",function(t,r){e(t.exports,"Program",()=>f);var i=n("jetUE");n("MiLFw");var s=n("bfI44"),a=n("fgYxT"),o=n("l6KQM"),l=n("hfWvh");n("6NGIb");var h=n("fzW9L"),u=n("eKhOz");let d=0,c={},p=class e{/**
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param name - Name for shader
   * @param extra - Extra data for shader
   */constructor(t,r,s="pixi-shader",n={}){this.extra={},this.id=d++,this.vertexSrc=t||e.defaultVertexSrc,this.fragmentSrc=r||e.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.extra=n,"#version"!==this.vertexSrc.substring(0,8)&&(c[s=s.replace(/\s+/g,"-")]?(c[s]++,s+=`-${c[s]}`):c[s]=1,this.vertexSrc=`#define SHADER_NAME ${s}
${this.vertexSrc}`,this.fragmentSrc=`#define SHADER_NAME ${s}
${this.fragmentSrc}`,this.vertexSrc=(0,h.setPrecision)(this.vertexSrc,e.defaultVertexPrecision,i.PRECISION.HIGH),this.fragmentSrc=(0,h.setPrecision)(this.fragmentSrc,e.defaultFragmentPrecision,(0,u.getMaxFragmentPrecision)())),this.glPrograms={},this.syncUniforms=null}/**
   * The default vertex shader source.
   * @readonly
   */static get defaultVertexSrc(){return l.default}/**
   * The default fragment shader source.
   * @readonly
   */static get defaultFragmentSrc(){return o.default}/**
   * A short hand function to create a program based of a vertex and fragment shader.
   *
   * This method will also check to see if there is a cached program.
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param name - Name for shader
   * @returns A shiny new PixiJS shader program!
   */static from(t,r,i){let n=t+r,a=s.ProgramCache[n];return a||(s.ProgramCache[n]=a=new e(t,r,i)),a}};p.defaultVertexPrecision=i.PRECISION.HIGH,/**
* Default specify float precision in fragment shader.
* iOS is best set at highp due to https://github.com/pixijs/pixijs/issues/3742
* @static
* @type {PIXI.PRECISION}
* @default PIXI.PRECISION.MEDIUM
*/p.defaultFragmentPrecision=a.isMobile.apple.device?i.PRECISION.HIGH:i.PRECISION.MEDIUM;let f=p}),a("l6KQM",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`}),a("hfWvh",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`}),a("6NGIb",function(e,t){n("k2H3u"),n("laDPc"),n("3bkbq"),n("7YvFy"),n("eKhOz"),n("fxLeR"),n("LSPno"),n("73ARh"),n("currf"),n("fzW9L"),n("cPRmq"),n("5pg2g")}),a("laDPc",function(t,r){e(t.exports,"compileShader",()=>i);function i(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}}),a("3bkbq",function(t,r){function i(e){let t=Array(e);for(let e=0;e<t.length;e++)t[e]=!1;return t}function s(e,t){switch(e){case"float":case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return!1;case"bvec2":return i(2*t);case"bvec3":return i(3*t);case"bvec4":return i(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}e(t.exports,"defaultValue",()=>s)}),a("7YvFy",function(t,r){e(t.exports,"generateUniformsSync",()=>o);var i=n("cPRmq");let s={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},a={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function o(e,t){let r=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(let n in e.uniforms){let o=t[n];if(!o){e.uniforms[n]?.group===!0&&(e.uniforms[n].ubo?r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${n}, '${n}');
                    `):r.push(`
                        renderer.shader.syncUniformGroup(uv.${n}, syncData);
                    `));continue}let l=e.uniforms[n],h=!1;for(let e=0;e<i.uniformParsers.length;e++)if((0,i.uniformParsers)[e].test(o,l)){r.push((0,i.uniformParsers)[e].code(n,l)),h=!0;break}if(!h){let e=(1!==o.size||o.isArray?a:s)[o.type].replace("location",`ud["${n}"].location`);r.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${e};`)}}return Function("ud","uv","renderer","syncData",r.join(`
`))}}),a("cPRmq",function(t,r){e(t.exports,"uniformParsers",()=>i);let i=[// a float cache layer
{test:e=>"float"===e.type&&1===e.size&&!e.isArray,code:e=>`
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `},// handling samplers
{test:(e,t)=>("sampler2D"===e.type||"samplerCube"===e.type||"sampler2DArray"===e.type)&&1===e.size&&!e.isArray&&(null==t||void 0!==t.castToBaseTexture),code:e=>`t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`},// uploading pixi matrix object to mat3
{test:(e,t)=>"mat3"===e.type&&1===e.size&&!e.isArray&&void 0!==t.a,code:e=>`
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,codeUbo:e=>`
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `},// uploading a pixi point as a vec2 with caching layer
{test:(e,t)=>"vec2"===e.type&&1===e.size&&!e.isArray&&void 0!==t.x,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,codeUbo:e=>`
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `},// caching layer for a vec2
{test:e=>"vec2"===e.type&&1===e.size&&!e.isArray,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `},// upload a pixi rectangle as a vec4 with caching layer
{test:(e,t)=>"vec4"===e.type&&1===e.size&&!e.isArray&&void 0!==t.width,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `},// upload a pixi color as vec4 with caching layer
{test:(e,t)=>"vec4"===e.type&&1===e.size&&!e.isArray&&void 0!==t.red,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `},// upload a pixi color as a vec3 with caching layer
{test:(e,t)=>"vec3"===e.type&&1===e.size&&!e.isArray&&void 0!==t.red,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `},// a caching layer for vec4 uploading
{test:e=>"vec4"===e.type&&1===e.size&&!e.isArray,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`}]}),a("eKhOz",function(t,r){let i;e(t.exports,"getMaxFragmentPrecision",()=>o);var s=n("jetUE"),a=n("fxLeR");function o(){if(!i){i=s.PRECISION.MEDIUM;let e=(0,a.getTestContext)();if(e&&e.getShaderPrecisionFormat){let t=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT);t&&(i=t.precision?s.PRECISION.HIGH:s.PRECISION.MEDIUM)}}return i}}),a("fxLeR",function(t,r){e(t.exports,"getTestContext",()=>l);var i=n("jetUE");n("iEiSW");var s=n("8oqCw");let a={},o=a;function l(){if(o===a||o?.isContextLost()){let e;let t=(0,s.settings).ADAPTER.createCanvas();s.settings.PREFER_ENV>=i.ENV.WEBGL2&&(e=t.getContext("webgl2",{})),e||((e=t.getContext("webgl",{})||t.getContext("experimental-webgl",{}))?e.getExtension("WEBGL_draw_buffers"):e=null),o=e}return o}}),a("LSPno",function(t,r){function i(e,t){let r=e.getShaderSource(t).split(`
`).map((e,t)=>`${t}: ${e}`),i=e.getShaderInfoLog(t),s=i.split(`
`),n={},a=s.map(e=>parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(e=>!!e&&!n[e]&&(n[e]=!0,!0)),o=[""];a.forEach(e=>{r[e-1]=`%c${r[e-1]}%c`,o.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});let l=r.join(`
`);o[0]=l,console.error(i),console.groupCollapsed("click to view full shader code"),console.warn(...o),console.groupEnd()}function s(e,t,r,s){e.getProgramParameter(t,e.LINK_STATUS)||(e.getShaderParameter(r,e.COMPILE_STATUS)||i(e,r),e.getShaderParameter(s,e.COMPILE_STATUS)||i(e,s),console.error("PixiJS Error: Could not initialize shader."),""!==e.getProgramInfoLog(t)&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",e.getProgramInfoLog(t)))}e(t.exports,"logProgramError",()=>s)}),a("73ARh",function(t,r){e(t.exports,"mapSize",()=>s);let i={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function s(e){return i[e]}}),a("currf",function(t,r){e(t.exports,"mapType",()=>n);let i=null,s={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function n(e,t){if(!i){let t=Object.keys(s);i={};for(let r=0;r<t.length;++r){let n=t[r];i[e[n]]=s[n]}}return i[t]}}),a("fzW9L",function(t,r){e(t.exports,"setPrecision",()=>s);var i=n("jetUE");function s(e,t,r){if("precision"!==e.substring(0,9)){let s=t;return t===i.PRECISION.HIGH&&r!==i.PRECISION.HIGH&&(s=i.PRECISION.MEDIUM),`precision ${s} float;
${e}`}return r!==i.PRECISION.HIGH&&"precision highp"===e.substring(0,15)?e.replace("precision highp","precision mediump"):e}}),a("5pg2g",function(t,r){let i;function s(){if("boolean"==typeof i)return i;try{i=!0===Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")}catch{i=!1}return i}e(t.exports,"unsafeEvalSupported",()=>s)}),a("4Tbkk",function(t,r){e(t.exports,"Shader",()=>o),n("A1ho4");var i=n("lmeMj"),s=n("e1ifo"),a=n("ltmWw");class o{/**
   * @param program - The program the shader will use.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   */constructor(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof a.UniformGroup?this.uniformGroup=t:this.uniformGroup=new a.UniformGroup(t):this.uniformGroup=new a.UniformGroup({}),this.disposeRunner=new i.Runner("disposeShader")}// TODO move to shader system..
checkUniformExists(e,t){if(t.uniforms[e])return!0;for(let r in t.uniforms){let i=t.uniforms[r];if(!0===i.group&&this.checkUniformExists(e,i))return!0}return!1}destroy(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()}/**
   * Shader uniform values, shortcut for `uniformGroup.uniforms`.
   * @readonly
   */get uniforms(){return this.uniformGroup.uniforms}/**
   * A short hand function to create a shader based of a vertex and fragment shader.
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   * @returns A shiny new PixiJS shader!
   */static from(e,t,r){let i=(0,s.Program).from(e,t);return new o(i,r)}}}),a("ltmWw",function(t,r){e(t.exports,"UniformGroup",()=>o);var i=n("jetUE"),s=n("ckQUf");let a=0;class o{/**
   * @param {object | Buffer} [uniforms] - Custom uniforms to use to augment the built-in ones. Or a pixi buffer.
   * @param isStatic - Uniforms wont be changed after creation.
   * @param isUbo - If true, will treat this uniform group as a uniform buffer object.
   */constructor(e,t,r){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=a++,this.static=!!t,this.ubo=!!r,e instanceof s.Buffer?(this.buffer=e,this.buffer.type=i.BUFFER_TYPE.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new s.Buffer(new Float32Array(1)),this.buffer.type=i.BUFFER_TYPE.UNIFORM_BUFFER,this.autoManage=!0))}update(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()}add(e,t,r){if(this.ubo)throw Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");this.uniforms[e]=new o(t,r)}static from(e,t,r){return new o(e,t,r)}/**
   * A short hand function for creating a static UBO UniformGroup.
   * @param uniforms - the ubo item
   * @param _static - should this be updated each time it is used? defaults to true here!
   */static uboFrom(e,t){return new o(e,t??!0,!0)}}}),a("g6z8m",function(t,r){e(t.exports,"BatchTextureArray",()=>i);class i{constructor(){this.elements=[],this.ids=[],this.count=0}clear(){for(let e=0;e<this.count;e++)this.elements[e]=null;this.count=0}}}),a("dqQsf",function(t,r){e(t.exports,"canUploadSameBuffer",()=>s),n("iEiSW");var i=n("fgYxT");function s(){return!i.isMobile.apple.device}}),a("jseKX",function(t,r){e(t.exports,"maxRecommendedTextures",()=>a),n("iEiSW");var i=n("8oqCw"),s=n("fgYxT");function a(e){let t=!0,r=(0,i.settings).ADAPTER.getNavigator();if(s.isMobile.tablet||s.isMobile.phone){if(s.isMobile.apple.device){let e=r.userAgent.match(/OS (\d+)_(\d+)?/);e&&11>parseInt(e[1],10)&&(t=!1)}if(s.isMobile.android.device){let e=r.userAgent.match(/Android\s([0-9.]*)/);e&&7>parseInt(e[1],10)&&(t=!1)}}return t?e:4}}),a("9P40c",function(t,r){e(t.exports,"ObjectRenderer",()=>i);class i{/**
   * @param renderer - The renderer this manager works for.
   */constructor(e){this.renderer=e}/** Stub method that should be used to empty the current batch by rendering objects now. */flush(){}/** Generic destruction method that frees all resources. This should be called by subclasses. */destroy(){this.renderer=null}/**
   * Stub method that initializes any state required before
   * rendering starts. It is different from the `prerender`
   * signal, which occurs every frame, in that it is called
   * whenever an object requests _this_ renderer specifically.
   */start(){}/** Stops the renderer. It should free up any state and become dormant. */stop(){this.flush()}/**
   * Keeps the object to render. It doesn't have to be
   * rendered immediately.
   * @param {PIXI.DisplayObject} _object - The object to render.
   */render(e){}}}),a("jctGF",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`}),a("iWgWO",function(t,r){e(t.exports,"default",()=>i);var i=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`}),a("5Knew",function(t,r){e(t.exports,"Filter",()=>d);var i=n("jetUE"),s=n("e1ifo"),a=n("4Tbkk"),o=n("glF38"),l=n("96qOO"),h=n("67WhE");let u=class e extends a.Shader{/**
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   */constructor(t,r,i){let n=(0,s.Program).from(t||e.defaultVertexSrc,r||e.defaultFragmentSrc);super(n,i),this.padding=0,this.resolution=e.defaultResolution,this.multisample=e.defaultMultisample,this.enabled=!0,this.autoFit=!0,this.state=new o.State}/**
   * Applies the filter
   * @param {PIXI.FilterSystem} filterManager - The renderer to retrieve the filter from
   * @param {PIXI.RenderTexture} input - The input render target.
   * @param {PIXI.RenderTexture} output - The target to output to.
   * @param {PIXI.CLEAR_MODES} [clearMode] - Should the output be cleared before rendering to it.
   * @param {object} [_currentState] - It's current state of filter.
   *        There are some useful properties in the currentState :
   *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
   */apply(e,t,r,i,s){e.applyFilter(this,t,r,i)}/**
   * Sets the blend mode of the filter.
   * @default PIXI.BLEND_MODES.NORMAL
   */get blendMode(){return this.state.blendMode}set blendMode(e){this.state.blendMode=e}/**
   * The resolution of the filter. Setting this to be lower will lower the quality but
   * increase the performance of the filter.
   * If set to `null` or `0`, the resolution of the current render target is used.
   * @default PIXI.Filter.defaultResolution
   */get resolution(){return this._resolution}set resolution(e){this._resolution=e}/**
   * The default vertex shader source
   * @readonly
   */static get defaultVertexSrc(){return h.default}/**
   * The default fragment shader source
   * @readonly
   */static get defaultFragmentSrc(){return l.default}};u.defaultResolution=1,/**
* Default filter samples for any filter.
* @static
* @type {PIXI.MSAA_QUALITY|null}
* @default PIXI.MSAA_QUALITY.NONE
*/u.defaultMultisample=i.MSAA_QUALITY.NONE;let d=u}),a("96qOO",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`}),a("67WhE",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`}),a("l4kcN",function(e,t){n("afahW"),n("l7pH3"),n("gntK7"),n("axu8V"),n("99ekb"),n("ieXnL"),n("218Dz"),n("fsGAU"),n("kufGd"),n("b7yas"),n("3mYCB"),n("2V2fb"),n("jyowR"),n("g9KwK"),n("dGc9J"),n("7e2Gc"),n("64vl1"),n("9WJQp"),n("3P6PW"),n("2ebp7"),n("cLqYk")}),a("afahW",function(t,r){e(t.exports,"BackgroundSystem",()=>a),n("1BmAR");var i=n("5xg5I"),s=n("glXXo");class a{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new i.Color(0),this.alpha=1}/**
   * initiates the background system
   * @param {PIXI.IRendererOptions} options - the options for the background colors
   */init(e){this.clearBeforeRender=e.clearBeforeRender;let{backgroundColor:t,background:r,backgroundAlpha:i}=e,s=r??t;void 0!==s&&(this.color=s),this.alpha=i}/**
   * The background color to fill if not transparent.
   * @member {PIXI.ColorSource}
   */get color(){return this._backgroundColor.value}set color(e){this._backgroundColor.setValue(e)}/**
   * The background color alpha. Setting this to 0 will make the canvas transparent.
   * @member {number}
   */get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}/** The background color object. */get backgroundColor(){return this._backgroundColor}destroy(){}}a.defaultOptions={/**
   * {@link PIXI.IRendererOptions.backgroundAlpha}
   * @default 1
   * @memberof PIXI.settings.RENDER_OPTIONS
   */backgroundAlpha:1,/**
   * {@link PIXI.IRendererOptions.backgroundColor}
   * @default 0x000000
   * @memberof PIXI.settings.RENDER_OPTIONS
   */backgroundColor:0,/**
   * {@link PIXI.IRendererOptions.clearBeforeRender}
   * @default true
   * @memberof PIXI.settings.RENDER_OPTIONS
   */clearBeforeRender:!0},/** @ignore */a.extension={type:[s.ExtensionType.RendererSystem,s.ExtensionType.CanvasRendererSystem],name:"background"},(0,s.extensions).add(a)}),a("l7pH3",function(e,t){var r=n("glXXo"),i=n("9P40c");class s{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.emptyRenderer=new i.ObjectRenderer(e),this.currentRenderer=this.emptyRenderer}/**
   * Changes the current renderer to the one given in parameter
   * @param objectRenderer - The object renderer to use.
   */setObjectRenderer(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())}/**
   * This should be called if you wish to do some custom rendering
   * It will basically render anything that may be batched up such as sprites
   */flush(){this.setObjectRenderer(this.emptyRenderer)}/** Reset the system to an empty renderer */reset(){this.setObjectRenderer(this.emptyRenderer)}/**
   * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
   * sets actual _batchLocation for them
   * @param arr - arr copy destination
   * @param maxTextures - number of copied elements
   */copyBoundTextures(e,t){let{boundTextures:r}=this.renderer.texture;for(let i=t-1;i>=0;--i)e[i]=r[i]||null,e[i]&&(e[i]._batchLocation=i)}/**
   * Assigns batch locations to textures in array based on boundTextures state.
   * All textures in texArray should have `_batchEnabled = _batchId`,
   * and their count should be less than `maxTextures`.
   * @param texArray - textures to bound
   * @param boundTextures - current state of bound textures
   * @param batchId - marker for _batchEnabled param of textures in texArray
   * @param maxTextures - number of texture locations to manipulate
   */boundArray(e,t,r,i){let{elements:s,ids:n,count:a}=e,o=0;for(let e=0;e<a;e++){let a=s[e],l=a._batchLocation;if(l>=0&&l<i&&t[l]===a){n[e]=l;continue}for(;o<i;){let i=t[o];if(i&&i._batchEnabled===r&&i._batchLocation===o){o++;continue}n[e]=o,a._batchLocation=o,t[o]=a;break}}}/**
   * @ignore
   */destroy(){this.renderer=null}}s.extension={type:r.ExtensionType.RendererSystem,name:"batch"},(0,r.extensions).add(s)}),a("gntK7",function(t,r){e(t.exports,"ContextSystem",()=>l);var i=n("jetUE"),s=n("glXXo");n("iEiSW");var a=n("8oqCw");let o=0;class l{/** @param renderer - The renderer this System works for. */constructor(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}/**
   * `true` if the context is lost
   * @readonly
   */get isLost(){return!this.gl||this.gl.isContextLost()}/**
   * Handles the context change event.
   * @param {WebGLRenderingContext} gl - New WebGL context.
   */contextChange(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=o++}init(e){if(e.context)this.initFromContext(e.context);else{let t=this.renderer.background.alpha<1,r=e.premultipliedAlpha;this.preserveDrawingBuffer=e.preserveDrawingBuffer,this.useContextAlpha=e.useContextAlpha,this.powerPreference=e.powerPreference,this.initFromOptions({alpha:t,premultipliedAlpha:r,antialias:e.antialias,stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:e.powerPreference})}}/**
   * Initializes the context.
   * @protected
   * @param {WebGLRenderingContext} gl - WebGL context
   */initFromContext(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=o++,this.renderer.runners.contextChange.emit(e);let t=this.renderer.view;void 0!==t.addEventListener&&(t.addEventListener("webglcontextlost",this.handleContextLost,!1),t.addEventListener("webglcontextrestored",this.handleContextRestored,!1))}/**
   * Initialize from context options
   * @protected
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
   * @param {object} options - context attributes
   */initFromOptions(e){let t=this.createContext(this.renderer.view,e);this.initFromContext(t)}/**
   * Helper class to create a WebGL Context
   * @param canvas - the canvas element that we will get the context from
   * @param options - An options object that gets passed in to the canvas element containing the
   *    context attributes
   * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
   * @returns {WebGLRenderingContext} the WebGL context
   */createContext(e,t){let r;if(a.settings.PREFER_ENV>=i.ENV.WEBGL2&&(r=e.getContext("webgl2",t)),r)this.webGLVersion=2;else if(this.webGLVersion=1,!(r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t)))throw Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=r,this.getExtensions(),this.gl}/** Auto-populate the {@link PIXI.ContextSystem.extensions extensions}. */getExtensions(){let{gl:e}=this,t={loseContext:e.getExtension("WEBGL_lose_context"),anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),// eslint-disable-line camelcase
etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};1===this.webGLVersion?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),// Floats and half-floats
floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):2===this.webGLVersion&&Object.assign(this.extensions,t,{// Floats and half-floats
colorBufferFloat:e.getExtension("EXT_color_buffer_float")})}/**
   * Handles a lost webgl context
   * @param {WebGLContextEvent} event - The context lost event.
   */handleContextLost(e){e.preventDefault(),setTimeout(()=>{this.gl.isContextLost()&&this.extensions.loseContext&&this.extensions.loseContext.restoreContext()},0)}/** Handles a restored webgl context. */handleContextRestored(){this.renderer.runners.contextChange.emit(this.gl)}destroy(){let e=this.renderer.view;this.renderer=null,void 0!==e.removeEventListener&&(e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored)),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()}/** Handle the post-render runner event. */postrender(){this.renderer.objectRenderer.renderingToScreen&&this.gl.flush()}/**
   * Validate context.
   * @param {WebGLRenderingContext} gl - Render context.
   */validateContext(e){let t=e.getContextAttributes(),r="WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext;r&&(this.webGLVersion=2),t&&!t.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");let i=r||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")}}l.defaultOptions={/**
   * {@link PIXI.IRendererOptions.context}
   * @default null
   * @memberof PIXI.settings.RENDER_OPTIONS
   */context:null,/**
   * {@link PIXI.IRendererOptions.antialias}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */antialias:!1,/**
   * {@link PIXI.IRendererOptions.premultipliedAlpha}
   * @default true
   * @memberof PIXI.settings.RENDER_OPTIONS
   */premultipliedAlpha:!0,/**
   * {@link PIXI.IRendererOptions.preserveDrawingBuffer}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */preserveDrawingBuffer:!1,/**
   * {@link PIXI.IRendererOptions.powerPreference}
   * @default default
   * @memberof PIXI.settings.RENDER_OPTIONS
   */powerPreference:"default"},/** @ignore */l.extension={type:s.ExtensionType.RendererSystem,name:"context"},(0,s.extensions).add(l)}),a("axu8V",function(e,t){var r=n("jetUE"),i=n("glXXo");n("a1P4O");var s=n("iVQEG"),a=n("fhlwZ"),o=n("6OnST"),l=n("avsVf"),h=n("ltmWw"),u=n("k4zJJ"),d=n("d5fCV"),c=n("81Egr");let p=[new s.Point,new s.Point,new s.Point,new s.Point],f=new a.Matrix;class m{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new l.RenderTexturePool,this.statePool=[],this.quad=new u.Quad,this.quadUv=new d.QuadUv,this.tempRect=new o.Rectangle,this.activeState={},this.globalUniforms=new h.UniformGroup({outputFrame:new o.Rectangle,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,// legacy variables
filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}init(){this.texturePool.setScreenSize(this.renderer.view)}/**
   * Pushes a set of filters to be applied later to the system. This will redirect further rendering into an
   * input render-texture for the rest of the filtering pipeline.
   * @param {PIXI.DisplayObject} target - The target of the filter to render.
   * @param filters - The filters to apply.
   */push(e,t){let r,i;let s=this.renderer,n=this.defaultFilterStack,a=this.statePool.pop()||new c.FilterState,o=s.renderTexture;if(o.current){let e=o.current;r=e.resolution,i=e.multisample}else r=s.resolution,i=s.multisample;let l=t[0].resolution||r,h=t[0].multisample??i,u=t[0].padding,d=t[0].autoFit,p=t[0].legacy??!0;for(let e=1;e<t.length;e++){let s=t[e];l=Math.min(l,s.resolution||r),h=Math.min(h,s.multisample??i),u=this.useMaxPadding?Math.max(u,s.padding):u+s.padding,d=d&&s.autoFit,p=p||(s.legacy??!0)}1===n.length&&(this.defaultFilterStack[0].renderTexture=o.current),n.push(a),a.resolution=l,a.multisample=h,a.legacy=p,a.target=e,a.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),a.sourceFrame.pad(u);let m=this.tempRect.copyFrom(o.sourceFrame);s.projection.transform&&this.transformAABB(f.copyFrom(s.projection.transform).invert(),m),d?(a.sourceFrame.fit(m),(a.sourceFrame.width<=0||a.sourceFrame.height<=0)&&(a.sourceFrame.width=0,a.sourceFrame.height=0)):a.sourceFrame.intersects(m)||(a.sourceFrame.width=0,a.sourceFrame.height=0),this.roundFrame(a.sourceFrame,o.current?o.current.resolution:s.resolution,o.sourceFrame,o.destinationFrame,s.projection.transform),a.renderTexture=this.getOptimalFilterTexture(a.sourceFrame.width,a.sourceFrame.height,l,h),a.filters=t,a.destinationFrame.width=a.renderTexture.width,a.destinationFrame.height=a.renderTexture.height;let g=this.tempRect;g.x=0,g.y=0,g.width=a.sourceFrame.width,g.height=a.sourceFrame.height,a.renderTexture.filterFrame=a.sourceFrame,a.bindingSourceFrame.copyFrom(o.sourceFrame),a.bindingDestinationFrame.copyFrom(o.destinationFrame),a.transform=s.projection.transform,s.projection.transform=null,o.bind(a.renderTexture,a.sourceFrame,g),s.framebuffer.clear(0,0,0,0)}/** Pops off the filter and applies it. */pop(){let e=this.defaultFilterStack,t=e.pop(),i=t.filters;this.activeState=t;let s=this.globalUniforms.uniforms;s.outputFrame=t.sourceFrame,s.resolution=t.resolution;let n=s.inputSize,a=s.inputPixel,o=s.inputClamp;if(n[0]=t.destinationFrame.width,n[1]=t.destinationFrame.height,n[2]=1/n[0],n[3]=1/n[1],a[0]=Math.round(n[0]*t.resolution),a[1]=Math.round(n[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],o[0]=.5*a[2],o[1]=.5*a[3],o[2]=t.sourceFrame.width*n[2]-.5*a[2],o[3]=t.sourceFrame.height*n[3]-.5*a[3],t.legacy){let e=s.filterArea;e[0]=t.destinationFrame.width,e[1]=t.destinationFrame.height,e[2]=t.sourceFrame.x,e[3]=t.sourceFrame.y,s.filterClamp=s.inputClamp}this.globalUniforms.update();let l=e[e.length-1];if(this.renderer.framebuffer.blit(),1===i.length)i[0].apply(this,t.renderTexture,l.renderTexture,r.CLEAR_MODES.BLEND,t),this.returnFilterTexture(t.renderTexture);else{let e=t.renderTexture,s=this.getOptimalFilterTexture(e.width,e.height,t.resolution);s.filterFrame=e.filterFrame;let n=0;for(n=0;n<i.length-1;++n){1===n&&t.multisample>1&&((s=this.getOptimalFilterTexture(e.width,e.height,t.resolution)).filterFrame=e.filterFrame),i[n].apply(this,e,s,r.CLEAR_MODES.CLEAR,t);let a=e;e=s,s=a}i[n].apply(this,e,l.renderTexture,r.CLEAR_MODES.BLEND,t),n>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(e),this.returnFilterTexture(s)}t.clear(),this.statePool.push(t)}/**
   * Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.
   * @param filterTexture - renderTexture to bind, should belong to filter pool or filter stack
   * @param clearMode - clearMode, by default its CLEAR/YES. See {@link PIXI.CLEAR_MODES}
   */bindAndClear(e,t=r.CLEAR_MODES.CLEAR){let{renderTexture:i,state:s}=this.renderer;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e?.filterFrame){let t=this.tempRect;t.x=0,t.y=0,t.width=e.filterFrame.width,t.height=e.filterFrame.height,i.bind(e,e.filterFrame,t)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);let n=1&s.stateId||this.forceClear;(t===r.CLEAR_MODES.CLEAR||t===r.CLEAR_MODES.BLIT&&n)&&this.renderer.framebuffer.clear(0,0,0,0)}/**
   * Draws a filter using the default rendering process.
   *
   * This should be called only by {@link PIXI.Filter#apply}.
   * @param filter - The filter to draw.
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it
   */applyFilter(e,t,i,s){let n=this.renderer;n.state.set(e.state),this.bindAndClear(i,s),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,n.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),n.geometry.bind(this.quadUv),n.geometry.draw(r.DRAW_MODES.TRIANGLES)):(n.geometry.bind(this.quad),n.geometry.draw(r.DRAW_MODES.TRIANGLE_STRIP))}/**
   * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
   *
   * Use `outputMatrix * vTextureCoord` in the shader.
   * @param outputMatrix - The matrix to output to.
   * @param {PIXI.Sprite} sprite - The sprite to map to.
   * @returns The mapped matrix.
   */calculateSpriteMatrix(e,t){let{sourceFrame:r,destinationFrame:i}=this.activeState,{orig:s}=t._texture,n=e.set(i.width,0,0,i.height,r.x,r.y),o=t.worldTransform.copyTo(a.Matrix.TEMP_MATRIX);return o.invert(),n.prepend(o),n.scale(1/s.width,1/s.height),n.translate(t.anchor.x,t.anchor.y),n}/** Destroys this Filter System. */destroy(){this.renderer=null,this.texturePool.clear(!1)}/**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture in real pixels.
   * @param minHeight - The minimum height of the render texture in real pixels.
   * @param resolution - The resolution of the render texture.
   * @param multisample - Number of samples of the render texture.
   * @returns - The new render texture.
   */getOptimalFilterTexture(e,t,i=1,s=r.MSAA_QUALITY.NONE){return this.texturePool.getOptimalTexture(e,t,i,s)}/**
   * Gets extra render texture to use inside current filter
   * To be compliant with older filters, you can use params in any order
   * @param input - renderTexture from which size and resolution will be copied
   * @param resolution - override resolution of the renderTexture
   * @param multisample - number of samples of the renderTexture
   */getFilterTexture(e,t,i){if("number"==typeof e){let r=e;e=t,t=r}e=e||this.activeState.renderTexture;let s=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,i||r.MSAA_QUALITY.NONE);return s.filterFrame=e.filterFrame,s}/**
   * Frees a render texture back into the pool.
   * @param renderTexture - The renderTarget to free
   */returnFilterTexture(e){this.texturePool.returnTexture(e)}/** Empties the texture pool. */emptyPool(){this.texturePool.clear(!0)}/** Calls `texturePool.resize()`, affects fullScreen renderTextures. */resize(){this.texturePool.setScreenSize(this.renderer.view)}/**
   * @param matrix - first param
   * @param rect - second param
   */transformAABB(e,t){let r=p[0],i=p[1],s=p[2],n=p[3];r.set(t.left,t.top),i.set(t.left,t.bottom),s.set(t.right,t.top),n.set(t.right,t.bottom),e.apply(r,r),e.apply(i,i),e.apply(s,s),e.apply(n,n);let a=Math.min(r.x,i.x,s.x,n.x),o=Math.min(r.y,i.y,s.y,n.y),l=Math.max(r.x,i.x,s.x,n.x),h=Math.max(r.y,i.y,s.y,n.y);t.x=a,t.y=o,t.width=l-a,t.height=h-o}roundFrame(e,t,r,i,s){if(!(e.width<=0||e.height<=0||r.width<=0||r.height<=0)){if(s){let{a:e,b:t,c:r,d:i}=s;if((Math.abs(t)>1e-4||Math.abs(r)>1e-4)&&(Math.abs(e)>1e-4||Math.abs(i)>1e-4))return}(s=s?f.copyFrom(s):f.identity()).translate(-r.x,-r.y).scale(i.width/r.width,i.height/r.height).translate(i.x,i.y),this.transformAABB(s,e),e.ceil(t),this.transformAABB(s.invert(),e)}}}m.extension={type:i.ExtensionType.RendererSystem,name:"filter"},(0,i.extensions).add(m)}),a("avsVf",function(t,r){e(t.exports,"RenderTexturePool",()=>l);var i=n("jetUE");n("MiLFw");var s=n("5HyIA"),a=n("hVEXM"),o=n("23Rkv");class l{/**
   * @param textureOptions - options that will be passed to BaseRenderTexture constructor
   * @param {PIXI.SCALE_MODES} [textureOptions.scaleMode] - See {@link PIXI.SCALE_MODES} for possible values.
   */constructor(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}/**
   * Creates texture with params that were specified in pool constructor.
   * @param realWidth - Width of texture in pixels.
   * @param realHeight - Height of texture in pixels.
   * @param multisample - Number of samples of the framebuffer.
   */createTexture(e,t,r=i.MSAA_QUALITY.NONE){let s=new a.BaseRenderTexture(Object.assign({width:e,height:t,resolution:1,multisample:r},this.textureOptions));return new o.RenderTexture(s)}/**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @param multisample - Number of samples of the render texture.
   * @returns The new render texture.
   */getOptimalTexture(e,t,r=1,n=i.MSAA_QUALITY.NONE){let a;e=Math.max(Math.ceil(e*r-1e-6),1),t=Math.max(Math.ceil(t*r-1e-6),1),this.enableFullScreen&&e===this._pixelsWidth&&t===this._pixelsHeight?a=n>1?-n:-1:(e=(0,s.nextPow2)(e),t=(0,s.nextPow2)(t),a=((65535&e)<<16|65535&t)>>>0,n>1&&(a+=4294967296*n)),this.texturePool[a]||(this.texturePool[a]=[]);let o=this.texturePool[a].pop();return o||(o=this.createTexture(e,t,n)),o.filterPoolKey=a,o.setResolution(r),o}/**
   * Gets extra texture of the same size as input renderTexture
   *
   * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
   * @param input - renderTexture from which size and resolution will be copied
   * @param resolution - override resolution of the renderTexture
   *  It overrides, it does not multiply
   * @param multisample - number of samples of the renderTexture
   */getFilterTexture(e,t,r){let s=this.getOptimalTexture(e.width,e.height,t||e.resolution,r||i.MSAA_QUALITY.NONE);return s.filterFrame=e.filterFrame,s}/**
   * Place a render texture back into the pool.
   * @param renderTexture - The renderTexture to free
   */returnTexture(e){let t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)}/**
   * Alias for returnTexture, to be compliant with FilterSystem interface.
   * @param renderTexture - The renderTexture to free
   */returnFilterTexture(e){this.returnTexture(e)}/**
   * Clears the pool.
   * @param destroyTextures - Destroy all stored textures.
   */clear(e){if(e=!1!==e)for(let e in this.texturePool){let t=this.texturePool[e];if(t)for(let e=0;e<t.length;e++)t[e].destroy(!0)}this.texturePool={}}/**
   * If screen size was changed, drops all screen-sized textures,
   * sets new screen size, sets `enableFullScreen` to true
   *
   * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
   * @param size - Initial size of screen.
   */setScreenSize(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){for(let t in this.enableFullScreen=e.width>0&&e.height>0,this.texturePool){if(!(0>Number(t)))continue;let e=this.texturePool[t];if(e)for(let t=0;t<e.length;t++)e[t].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}}}l.SCREEN_KEY=-1}),a("hVEXM",function(t,r){e(t.exports,"BaseRenderTexture",()=>l),n("1BmAR");var i=n("5xg5I"),s=n("jetUE"),a=n("bZM2f"),o=n("2Am4Q");class l extends o.BaseTexture{/**
   * @param options
   * @param {number} [options.width=100] - The width of the base render texture.
   * @param {number} [options.height=100] - The height of the base render texture.
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.BaseTexture.defaultOptions.scaleMode] - See {@link PIXI.SCALE_MODES}
   *   for possible values.
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio
   *   of the texture being generated.
   * @param {PIXI.MSAA_QUALITY} [options.multisample=PIXI.MSAA_QUALITY.NONE] - The number of samples of the frame buffer.
   */constructor(e={}){if("number"==typeof e){let t=arguments[0],r=arguments[1],i=arguments[2],s=arguments[3];e={width:t,height:r,scaleMode:i,resolution:s}}e.width=e.width??100,e.height=e.height??100,e.multisample??(e.multisample=s.MSAA_QUALITY.NONE),super(null,e),this.mipmap=s.MIPMAP_MODES.OFF,this.valid=!0,this._clear=new i.Color([0,0,0,0]),this.framebuffer=new(0,a.Framebuffer)(this.realWidth,this.realHeight).addColorTexture(0,this),this.framebuffer.multisample=e.multisample,this.maskStack=[],this.filterStack=[{}]}/** Color when clearning the texture. */set clearColor(e){this._clear.setValue(e)}get clearColor(){return this._clear.value}/**
   * Color object when clearning the texture.
   * @readonly
   * @since 7.2.0
   */get clear(){return this._clear}/**
   * Shortcut to `this.framebuffer.multisample`.
   * @default PIXI.MSAA_QUALITY.NONE
   */get multisample(){return this.framebuffer.multisample}set multisample(e){this.framebuffer.multisample=e}/**
   * Resizes the BaseRenderTexture.
   * @param desiredWidth - The desired width to resize to.
   * @param desiredHeight - The desired height to resize to.
   */resize(e,t){this.framebuffer.resize(e*this.resolution,t*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)}/**
   * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
   * This means you can still use the texture later which will upload it to GPU
   * memory again.
   * @fires PIXI.BaseTexture#dispose
   */dispose(){this.framebuffer.dispose(),super.dispose()}/** Destroys this texture. */destroy(){super.destroy(),this.framebuffer.destroyDepthTexture(),this.framebuffer=null}}}),a("bZM2f",function(t,r){e(t.exports,"Framebuffer",()=>o);var i=n("jetUE");n("A1ho4");var s=n("lmeMj"),a=n("2Am4Q");class o{/**
   * @param width - Width of the frame buffer
   * @param height - Height of the frame buffer
   */constructor(e,t){if(this.width=Math.round(e),this.height=Math.round(t),!this.width||!this.height)throw Error("Framebuffer width or height is zero");this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new s.Runner("disposeFramebuffer"),this.multisample=i.MSAA_QUALITY.NONE}/**
   * Reference to the colorTexture.
   * @readonly
   */get colorTexture(){return this.colorTextures[0]}/**
   * Add texture to the colorTexture array.
   * @param index - Index of the array to add the texture to
   * @param texture - Texture to add to the array
   */addColorTexture(e=0,t){return this.colorTextures[e]=t||new a.BaseTexture(null,{scaleMode:i.SCALE_MODES.NEAREST,resolution:1,mipmap:i.MIPMAP_MODES.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this}/**
   * Add a depth texture to the frame buffer.
   * @param texture - Texture to add.
   */addDepthTexture(e){return this.depthTexture=e||new a.BaseTexture(null,{scaleMode:i.SCALE_MODES.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:i.MIPMAP_MODES.OFF,format:i.FORMATS.DEPTH_COMPONENT,type:i.TYPES.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this}/** Enable depth on the frame buffer. */enableDepth(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this}/** Enable stencil on the frame buffer. */enableStencil(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this}/**
   * Resize the frame buffer
   * @param width - Width of the frame buffer to resize to
   * @param height - Height of the frame buffer to resize to
   */resize(e,t){if(e=Math.round(e),t=Math.round(t),!e||!t)throw Error("Framebuffer width and height must not be zero");if(!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(let r=0;r<this.colorTextures.length;r++){let i=this.colorTextures[r],s=i.resolution;i.setSize(e/s,t/s)}if(this.depthTexture){let r=this.depthTexture.resolution;this.depthTexture.setSize(e/r,t/r)}}}/** Disposes WebGL resources that are connected to this geometry. */dispose(){this.disposeRunner.emit(this,!1)}/** Destroys and removes the depth texture added to this framebuffer. */destroyDepthTexture(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)}}}),a("23Rkv",function(t,r){e(t.exports,"RenderTexture",()=>a);var i=n("7eheB"),s=n("hVEXM");class a extends i.Texture{/**
   * @param baseRenderTexture - The base texture object that this texture uses.
   * @param frame - The rectangle frame of the texture to show.
   */constructor(e,t){super(e,t),this.valid=!0,this.filterFrame=null,this.filterPoolKey=null,this.updateUvs()}/**
   * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
   * @readonly
   */get framebuffer(){return this.baseTexture.framebuffer}/**
   * Shortcut to `this.framebuffer.multisample`.
   * @default PIXI.MSAA_QUALITY.NONE
   */get multisample(){return this.framebuffer.multisample}set multisample(e){this.framebuffer.multisample=e}/**
   * Resizes the RenderTexture.
   * @param desiredWidth - The desired width to resize to.
   * @param desiredHeight - The desired height to resize to.
   * @param resizeBaseTexture - Should the baseTexture.width and height values be resized as well?
   */resize(e,t,r=!0){let i=this.baseTexture.resolution,s=Math.round(e*i)/i,n=Math.round(t*i)/i;this.valid=s>0&&n>0,this._frame.width=this.orig.width=s,this._frame.height=this.orig.height=n,r&&this.baseTexture.resize(s,n),this.updateUvs()}/**
   * Changes the resolution of baseTexture, but does not change framebuffer size.
   * @param resolution - The new resolution to apply to RenderTexture
   */setResolution(e){let{baseTexture:t}=this;t.resolution!==e&&(t.setResolution(e),this.resize(t.width,t.height,!1))}/**
   * A short hand way of creating a render texture.
   * @param options - Options
   * @param {number} [options.width=100] - The width of the render texture
   * @param {number} [options.height=100] - The height of the render texture
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.BaseTexture.defaultOptions.scaleMode] - See {@link PIXI.SCALE_MODES}
   *    for possible values
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio of the texture
   *    being generated
   * @param {PIXI.MSAA_QUALITY} [options.multisample=PIXI.MSAA_QUALITY.NONE] - The number of samples of the frame buffer
   * @returns The new render texture
   */static create(e){return new a(new s.BaseRenderTexture(e))}}}),a("7eheB",function(r,i){e(r.exports,"Texture",()=>x),n("a1P4O");var s=n("6OnST"),a=n("iVQEG");n("iEiSW");var o=n("8oqCw");n("MiLFw");var l=n("bfI44"),h=n("XaHk7"),u=n("jEE4L"),d=n("1PbQI"),c=n("2Am4Q"),p=n("5Y90x"),f=n("34biG");let m=new f.TextureUvs;function g(e){e.destroy=function(){},e.on=function(){},e.once=function(){},e.emit=function(){}}class x extends /*@__PURE__*/t(d){/**
   * @param baseTexture - The base texture source to create the texture from
   * @param frame - The rectangle frame of the texture to show
   * @param orig - The area of original texture
   * @param trim - Trimmed rectangle of original texture
   * @param rotate - indicates how the texture was rotated by texture packer. See {@link PIXI.groupD8}
   * @param anchor - Default anchor point used for sprite placement / rotation
   * @param borders - Default borders used for 9-slice scaling. See {@link PIXI.NineSlicePlane}
   */constructor(e,t,r,i,n,o,l){if(super(),this.noFrame=!1,t||(this.noFrame=!0,t=new s.Rectangle(0,0,1,1)),e instanceof x&&(e=e.baseTexture),this.baseTexture=e,this._frame=t,this.trim=i,this.valid=!1,this.destroyed=!1,this._uvs=m,this.uvMatrix=null,this.orig=r||t,this._rotate=Number(n||0),!0===n)this._rotate=2;else if(this._rotate%2!=0)throw Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");this.defaultAnchor=o?new a.Point(o.x,o.y):new a.Point(0,0),this.defaultBorders=l,this._updateID=0,this.textureCacheIds=[],e.valid?this.noFrame?e.valid&&this.onBaseTextureUpdated(e):this.frame=t:e.once("loaded",this.onBaseTextureUpdated,this),this.noFrame&&e.on("update",this.onBaseTextureUpdated,this)}/**
   * Updates this texture on the gpu.
   *
   * Calls the TextureResource update.
   *
   * If you adjusted `frame` manually, please call `updateUvs()` instead.
   */update(){this.baseTexture.resource&&this.baseTexture.resource.update()}/**
   * Called when the base texture is updated
   * @protected
   * @param baseTexture - The base texture.
   */onBaseTextureUpdated(e){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=e.width,this._frame.height=e.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)}/**
   * Destroys this texture
   * @param [destroyBase=false] - Whether to destroy the base texture as well
   * @fires PIXI.Texture#destroyed
   */destroy(e){if(this.baseTexture){if(e){let{resource:e}=this.baseTexture;e?.url&&l.TextureCache[e.url]&&x.removeFromCache(e.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,x.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0,this.emit("destroyed",this),this.removeAllListeners()}/**
   * Creates a new texture object that acts the same as this one.
   * @returns - The new texture
   */clone(){let e=this._frame.clone(),t=this._frame===this.orig?e:this.orig.clone(),r=new x(this.baseTexture,!this.noFrame&&e,t,this.trim?.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);return this.noFrame&&(r._frame=e),r}/**
   * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
   * Call it after changing the frame
   */updateUvs(){this._uvs===m&&(this._uvs=new f.TextureUvs),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++}/**
   * Helper function that creates a new Texture based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @param {string|PIXI.BaseTexture|HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} source -
   *        Source or array of sources to create texture from
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
   * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
   * @returns {PIXI.Texture} The newly created texture
   */static from(e,t={},r=o.settings.STRICT_TEXTURE_CACHE){let i="string"==typeof e,s=null;if(i)s=e;else if(e instanceof c.BaseTexture){if(!e.cacheId){let r=t?.pixiIdPrefix||"pixiid";e.cacheId=`${r}-${(0,h.uid)()}`,(0,c.BaseTexture).addToCache(e,e.cacheId)}s=e.cacheId}else{if(!e._pixiId){let r=t?.pixiIdPrefix||"pixiid";e._pixiId=`${r}_${(0,h.uid)()}`}s=e._pixiId}let n=l.TextureCache[s];if(i&&r&&!n)throw Error(`The cacheId "${s}" does not exist in TextureCache.`);return n||e instanceof c.BaseTexture?!n&&e instanceof c.BaseTexture&&(n=new x(e),x.addToCache(n,s)):(t.resolution||(t.resolution=(0,u.getResolutionOfUrl)(e)),(n=new x(new c.BaseTexture(e,t))).baseTexture.cacheId=s,(0,c.BaseTexture).addToCache(n.baseTexture,s),x.addToCache(n,s)),n}/**
   * Useful for loading textures via URLs. Use instead of `Texture.from` because
   * it does a better job of handling failed URLs more effectively. This also ignores
   * `PIXI.settings.STRICT_TEXTURE_CACHE`. Works for Videos, SVGs, Images.
   * @param url - The remote URL or array of URLs to load.
   * @param options - Optional options to include
   * @returns - A Promise that resolves to a Texture.
   */static fromURL(e,t){let r=Object.assign({autoLoad:!1},t?.resourceOptions),i=x.from(e,Object.assign({resourceOptions:r},t),!1),s=i.baseTexture.resource;return i.baseTexture.valid?Promise.resolve(i):s.load().then(()=>Promise.resolve(i))}/**
   * Create a new Texture with a BufferResource from a typed array.
   * @param buffer - The optional array to use. If no data is provided, a new Float32Array is created.
   * @param width - Width of the resource
   * @param height - Height of the resource
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   *        Default properties are different from the constructor's defaults.
   * @param {PIXI.FORMATS} [options.format] - The format is not given, the type is inferred from the
   *        type of the buffer: `RGBA` if Float32Array, Int8Array, Uint8Array, or Uint8ClampedArray,
   *        otherwise `RGBA_INTEGER`.
   * @param {PIXI.TYPES} [options.type] - The type is not given, the type is inferred from the
   *        type of the buffer. Maps Float32Array to `FLOAT`, Int32Array to `INT`, Uint32Array to
   *        `UNSIGNED_INT`, Int16Array to `SHORT`, Uint16Array to `UNSIGNED_SHORT`, Int8Array to `BYTE`,
   *        Uint8Array/Uint8ClampedArray to `UNSIGNED_BYTE`.
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.NPM]
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.SCALE_MODES.NEAREST]
   * @returns - The resulting new BaseTexture
   */static fromBuffer(e,t,r,i){return new x((0,c.BaseTexture).fromBuffer(e,t,r,i))}/**
   * Create a texture from a source and add to the cache.
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas|string} source - The input source.
   * @param imageUrl - File name of texture, for cache and resolving resolution.
   * @param name - Human readable name for the texture cache. If no name is
   *        specified, only `imageUrl` will be used as the cache ID.
   * @param options
   * @returns - Output texture
   */static fromLoader(e,t,r,i){let s=new c.BaseTexture(e,Object.assign({scaleMode:c.BaseTexture.defaultOptions.scaleMode,resolution:(0,u.getResolutionOfUrl)(t)},i)),{resource:n}=s;n instanceof p.ImageResource&&(n.url=t);let a=new x(s);return r||(r=t),(0,c.BaseTexture).addToCache(a.baseTexture,r),x.addToCache(a,r),r!==t&&((0,c.BaseTexture).addToCache(a.baseTexture,t),x.addToCache(a,t)),a.baseTexture.valid?Promise.resolve(a):new Promise(e=>{a.baseTexture.once("loaded",()=>e(a))})}/**
   * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
   * @param texture - The Texture to add to the cache.
   * @param id - The id that the Texture will be stored against.
   */static addToCache(e,t){t&&(e.textureCacheIds.includes(t)||e.textureCacheIds.push(t),l.TextureCache[t]&&l.TextureCache[t]!==e&&console.warn(`Texture added to the cache with an id [${t}] that already had an entry`),l.TextureCache[t]=e)}/**
   * Remove a Texture from the global TextureCache.
   * @param texture - id of a Texture to be removed, or a Texture instance itself
   * @returns - The Texture that was removed
   */static removeFromCache(e){if("string"==typeof e){let t=l.TextureCache[e];if(t){let r=t.textureCacheIds.indexOf(e);return r>-1&&t.textureCacheIds.splice(r,1),delete l.TextureCache[e],t}}else if(e?.textureCacheIds){for(let t=0;t<e.textureCacheIds.length;++t)l.TextureCache[e.textureCacheIds[t]]===e&&delete l.TextureCache[e.textureCacheIds[t]];return e.textureCacheIds.length=0,e}return null}/**
   * Returns resolution of baseTexture
   * @readonly
   */get resolution(){return this.baseTexture.resolution}/**
   * The frame specifies the region of the base texture that this texture uses.
   * Please call `updateUvs()` after you change coordinates of `frame` manually.
   */get frame(){return this._frame}set frame(e){this._frame=e,this.noFrame=!1;let{x:t,y:r,width:i,height:s}=e,n=t+i>this.baseTexture.width,a=r+s>this.baseTexture.height;if(n||a){let e=`X: ${t} + ${i} = ${t+i} > ${this.baseTexture.width}`,o=`Y: ${r} + ${s} = ${r+s} > ${this.baseTexture.height}`;throw Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${e} ${n&&a?"and":"or"} ${o}`)}this.valid=i&&s&&this.baseTexture.valid,this.trim||this.rotate||(this.orig=e),this.valid&&this.updateUvs()}/**
   * Indicates whether the texture is rotated inside the atlas
   * set to 2 to compensate for texture packer rotation
   * set to 6 to compensate for spine packer rotation
   * can be used to rotate or mirror sprites
   * See {@link PIXI.groupD8} for explanation
   */get rotate(){return this._rotate}set rotate(e){this._rotate=e,this.valid&&this.updateUvs()}/** The width of the Texture in pixels. */get width(){return this.orig.width}/** The height of the Texture in pixels. */get height(){return this.orig.height}/** Utility function for BaseTexture|Texture cast. */castToBaseTexture(){return this.baseTexture}/** An empty texture, used often to not have to create multiple empty textures. Can not be destroyed. */static get EMPTY(){return x._EMPTY||(x._EMPTY=new x(new c.BaseTexture),g(x._EMPTY),g(x._EMPTY.baseTexture)),x._EMPTY}/** A white texture of 16x16 size, used for graphics and other things Can not be destroyed. */static get WHITE(){if(!x._WHITE){let e=(0,o.settings).ADAPTER.createCanvas(16,16),t=e.getContext("2d");e.width=16,e.height=16,t.fillStyle="white",t.fillRect(0,0,16,16),x._WHITE=new x((0,c.BaseTexture).from(e)),g(x._WHITE),g(x._WHITE.baseTexture)}return x._WHITE}}}),a("5Y90x",function(t,r){e(t.exports,"ImageResource",()=>o);var i=n("jetUE");n("iEiSW");var s=n("8oqCw"),a=n("c7FgM");class o extends a.BaseImageResource{/**
   * @param source - image source or URL
   * @param options
   * @param {boolean} [options.autoLoad=true] - start loading process
   * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - whether its required to create
   *        a bitmap before upload
   * @param {boolean} [options.crossorigin=true] - Load image using cross origin
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Premultiply image alpha in bitmap
   */constructor(e,t){if(t=t||{},"string"==typeof e){let r=new Image;(0,a.BaseImageResource).crossOrigin(r,e,t.crossorigin),r.src=e,e=r}super(e),!e.complete&&this._width&&this._height&&(this._width=0,this._height=0),this.url=e.src,this._process=null,this.preserveBitmap=!1,this.createBitmap=(t.createBitmap??s.settings.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,this.alphaMode="number"==typeof t.alphaMode?t.alphaMode:null,this.bitmap=null,this._load=null,!1!==t.autoLoad&&this.load()}/**
   * Returns a promise when image will be loaded and processed.
   * @param createBitmap - whether process image into bitmap
   */load(e){return this._load||(void 0!==e&&(this.createBitmap=e),this._load=new Promise((e,t)=>{let r=this.source;this.url=r.src;let i=()=>{this.destroyed||(r.onload=null,r.onerror=null,this.update(),this._load=null,this.createBitmap?e(this.process()):e(this))};r.complete&&r.src?i():(r.onload=i,r.onerror=e=>{t(e),this.onError.emit(e)})})),this._load}/**
   * Called when we need to convert image into BitmapImage.
   * Can be called multiple times, real promise is cached inside.
   * @returns - Cached promise to fill that bitmap
   */process(){let e=this.source;if(null!==this._process)return this._process;if(null!==this.bitmap||!globalThis.createImageBitmap)return Promise.resolve(this);let t=globalThis.createImageBitmap,r=!e.crossOrigin||"anonymous"===e.crossOrigin;return this._process=fetch(e.src,{mode:r?"cors":"no-cors"}).then(e=>e.blob()).then(r=>t(r,0,0,e.width,e.height,{premultiplyAlpha:null===this.alphaMode||this.alphaMode===i.ALPHA_MODES.UNPACK?"premultiply":"none"})).then(e=>this.destroyed?Promise.reject():(this.bitmap=e,this.update(),this._process=null,Promise.resolve(this))),this._process}/**
   * Upload the image resource to GPU.
   * @param renderer - Renderer to upload to
   * @param baseTexture - BaseTexture for this resource
   * @param glTexture - GLTexture to use
   * @returns {boolean} true is success
   */upload(e,t,r){if("number"==typeof this.alphaMode&&(t.alphaMode=this.alphaMode),!this.createBitmap)return super.upload(e,t,r);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(super.upload(e,t,r,this.bitmap),!this.preserveBitmap){let e=!0,i=t._glTextures;for(let s in i){let n=i[s];if(n!==r&&n.dirtyId!==t.dirtyId){e=!1;break}}e&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0}/** Destroys this resource. */dispose(){this.source.onload=null,this.source.onerror=null,super.dispose(),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if current environment support HTMLImageElement, and source is string or HTMLImageElement
   */static test(e){return"u">typeof HTMLImageElement&&("string"==typeof e||e instanceof HTMLImageElement)}}}),a("c7FgM",function(t,r){e(t.exports,"BaseImageResource",()=>o);var i=n("jetUE");n("MiLFw");var s=n("45hvB"),a=n("glvjk");class o extends a.Resource{/**
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} source
   */constructor(e){let t=e.naturalWidth||e.videoWidth||e.width,r=e.naturalHeight||e.videoHeight||e.height;super(t,r),this.source=e,this.noSubImage=!1}/**
   * Set cross origin based detecting the url and the crossorigin
   * @param element - Element to apply crossOrigin
   * @param url - URL to check
   * @param crossorigin - Cross origin value to use
   */static crossOrigin(e,t,r){void 0!==r||t.startsWith("data:")?!1!==r&&(e.crossOrigin="string"==typeof r?r:"anonymous"):e.crossOrigin=(0,s.determineCrossOrigin)(t)}/**
   * Upload the texture to the GPU.
   * @param renderer - Upload to the renderer
   * @param baseTexture - Reference to parent texture
   * @param glTexture
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} [source] - (optional)
   * @returns - true is success
   */upload(e,t,r,s){let n=e.gl,a=t.realWidth,o=t.realHeight;if(s=s||this.source,"u">typeof HTMLImageElement&&s instanceof HTMLImageElement){if(!s.complete||0===s.naturalWidth)return!1}else if("u">typeof HTMLVideoElement&&s instanceof HTMLVideoElement&&s.readyState<=1)return!1;return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.alphaMode===i.ALPHA_MODES.UNPACK),this.noSubImage||t.target!==n.TEXTURE_2D||r.width!==a||r.height!==o?(r.width=a,r.height=o,n.texImage2D(t.target,0,r.internalFormat,t.format,r.type,s)):n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.format,r.type,s),!0}/**
   * Checks if source width/height was changed, resize can cause extra baseTexture update.
   * Triggers one update in any case.
   */update(){if(this.destroyed)return;let e=this.source,t=e.naturalWidth||e.videoWidth||e.width,r=e.naturalHeight||e.videoHeight||e.height;this.resize(t,r),super.update()}/** Destroy this {@link PIXI.BaseImageResource} */dispose(){this.source=null}}}),a("34biG",function(t,r){e(t.exports,"TextureUvs",()=>s),n("a1P4O");var i=n("10xzZ");class s{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}/**
   * Sets the texture Uvs based on the given frame information.
   * @protected
   * @param frame - The frame of the texture
   * @param baseFrame - The base frame of the texture
   * @param rotate - Rotation of frame, see {@link PIXI.groupD8}
   */set(e,t,r){let s=t.width,n=t.height;if(r){let t=e.width/2/s,a=e.height/2/n,o=e.x/s+t,l=e.y/n+a;r=(0,i.groupD8).add(r,i.groupD8.NW),this.x0=o+t*(0,i.groupD8).uX(r),this.y0=l+a*(0,i.groupD8).uY(r),r=(0,i.groupD8).add(r,2),this.x1=o+t*(0,i.groupD8).uX(r),this.y1=l+a*(0,i.groupD8).uY(r),r=(0,i.groupD8).add(r,2),this.x2=o+t*(0,i.groupD8).uX(r),this.y2=l+a*(0,i.groupD8).uY(r),r=(0,i.groupD8).add(r,2),this.x3=o+t*(0,i.groupD8).uX(r),this.y3=l+a*(0,i.groupD8).uY(r)}else this.x0=e.x/s,this.y0=e.y/n,this.x1=(e.x+e.width)/s,this.y1=e.y/n,this.x2=(e.x+e.width)/s,this.y2=(e.y+e.height)/n,this.x3=e.x/s,this.y3=(e.y+e.height)/n;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}}s.prototype.toString=function(){return`[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`}}),a("k4zJJ",function(t,r){e(t.exports,"Quad",()=>s);var i=n("82wLZ");class s extends i.Geometry{constructor(){super(),this.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2])}}}),a("d5fCV",function(t,r){e(t.exports,"QuadUv",()=>a);var i=n("ckQUf"),s=n("82wLZ");class a extends s.Geometry{constructor(){super(),this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.vertexBuffer=new i.Buffer(this.vertices),this.uvBuffer=new i.Buffer(this.uvs),this.addAttribute("aVertexPosition",this.vertexBuffer).addAttribute("aTextureCoord",this.uvBuffer).addIndex([0,1,2,0,2,3])}/**
   * Maps two Rectangle to the quad.
   * @param targetTextureFrame - The first rectangle
   * @param destinationFrame - The second rectangle
   * @returns - Returns itself.
   */map(e,t){let r=0,i=0;return this.uvs[0]=r,this.uvs[1]=i,this.uvs[2]=r+t.width/e.width,this.uvs[3]=i,this.uvs[4]=r+t.width/e.width,this.uvs[5]=i+t.height/e.height,this.uvs[6]=r,this.uvs[7]=i+t.height/e.height,r=t.x,i=t.y,this.vertices[0]=r,this.vertices[1]=i,this.vertices[2]=r+t.width,this.vertices[3]=i,this.vertices[4]=r+t.width,this.vertices[5]=i+t.height,this.vertices[6]=r,this.vertices[7]=i+t.height,this.invalidate(),this}/**
   * Legacy upload method, just marks buffers dirty.
   * @returns - Returns itself.
   */invalidate(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this}}}),a("81Egr",function(t,r){e(t.exports,"FilterState",()=>a);var i=n("jetUE");n("a1P4O");var s=n("6OnST");class a{constructor(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=i.MSAA_QUALITY.NONE,this.sourceFrame=new s.Rectangle,this.destinationFrame=new s.Rectangle,this.bindingSourceFrame=new s.Rectangle,this.bindingDestinationFrame=new s.Rectangle,this.filters=[],this.transform=null}/** Clears the state */clear(){this.target=null,this.filters=null,this.renderTexture=null}}}),a("99ekb",function(e,t){var r=n("jetUE"),i=n("glXXo");n("a1P4O");var s=n("6OnST");n("iEiSW");var a=n("8oqCw"),o=n("bZM2f"),l=n("lulFS");let h=new s.Rectangle;class u{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new o.Framebuffer(10,10),this.msaaSamples=null}/** Sets up the renderer context and necessary buffers. */contextChange(){this.disposeAll(!0);let e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new s.Rectangle,this.hasMRT=!0,this.writeDepthTexture=!0,1===this.renderer.context.webGLVersion){let t=this.renderer.context.extensions.drawBuffers,i=this.renderer.context.extensions.depthTexture;a.settings.PREFER_ENV===r.ENV.WEBGL_LEGACY&&(t=null,i=null),t?e.drawBuffers=e=>t.drawBuffersWEBGL(e):(this.hasMRT=!1,e.drawBuffers=()=>{}),i||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)}/**
   * Bind a framebuffer.
   * @param framebuffer
   * @param frame - frame, default is framebuffer size
   * @param mipLevel - optional mip level to set on the framebuffer - defaults to 0
   */bind(e,t,r=0){let{gl:i}=this;if(e){let s=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,i.bindFramebuffer(i.FRAMEBUFFER,s.framebuffer)),s.mipLevel!==r&&(e.dirtyId++,e.dirtyFormat++,s.mipLevel=r),s.dirtyId!==e.dirtyId&&(s.dirtyId=e.dirtyId,s.dirtyFormat!==e.dirtyFormat?(s.dirtyFormat=e.dirtyFormat,s.dirtySize=e.dirtySize,this.updateFramebuffer(e,r)):s.dirtySize!==e.dirtySize&&(s.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(let t=0;t<e.colorTextures.length;t++){let r=e.colorTextures[t];this.renderer.texture.unbind(r.parentTextureArray||r)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){let e=t.width>>r,i=t.height>>r,s=e/t.width;this.setViewport(t.x*s,t.y*s,e,i)}else{let t=e.width>>r,i=e.height>>r;this.setViewport(0,0,t,i)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)}/**
   * Set the WebGLRenderingContext's viewport.
   * @param x - X position of viewport
   * @param y - Y position of viewport
   * @param width - Width of viewport
   * @param height - Height of viewport
   */setViewport(e,t,r,i){let s=this.viewport;e=Math.round(e),t=Math.round(t),r=Math.round(r),i=Math.round(i),(s.width!==r||s.height!==i||s.x!==e||s.y!==t)&&(s.x=e,s.y=t,s.width=r,s.height=i,this.gl.viewport(e,t,r,i))}/**
   * Get the size of the current width and height. Returns object with `width` and `height` values.
   * @readonly
   */get size(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}}/**
   * Clear the color of the context
   * @param r - Red value from 0 to 1
   * @param g - Green value from 0 to 1
   * @param b - Blue value from 0 to 1
   * @param a - Alpha value from 0 to 1
   * @param {PIXI.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
   *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
   */clear(e,t,i,s,n=r.BUFFER_BITS.COLOR|r.BUFFER_BITS.DEPTH){let{gl:a}=this;a.clearColor(e,t,i,s),a.clear(n)}/**
   * Initialize framebuffer for this context
   * @protected
   * @param framebuffer
   * @returns - created GLFramebuffer
   */initFramebuffer(e){let{gl:t}=this,r=new l.GLFramebuffer(t.createFramebuffer());return r.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=r,this.managedFramebuffers.push(e),e.disposeRunner.add(this),r}/**
   * Resize the framebuffer
   * @param framebuffer
   * @protected
   */resizeFramebuffer(e){let{gl:t}=this,r=e.glFramebuffers[this.CONTEXT_UID];if(r.stencil){let i;t.bindRenderbuffer(t.RENDERBUFFER,r.stencil),i=1===this.renderer.context.webGLVersion?t.DEPTH_STENCIL:e.depth&&e.stencil?t.DEPTH24_STENCIL8:e.depth?t.DEPTH_COMPONENT24:t.STENCIL_INDEX8,r.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,r.multisample,i,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,i,e.width,e.height)}let i=e.colorTextures,s=i.length;t.drawBuffers||(s=Math.min(s,1));for(let n=0;n<s;n++){let s=i[n],a=s.parentTextureArray||s;this.renderer.texture.bind(a,0),0===n&&r.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,r.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,r.multisample,a._glTextures[this.CONTEXT_UID].internalFormat,e.width,e.height))}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)}/**
   * Update the framebuffer
   * @param framebuffer
   * @param mipLevel
   * @protected
   */updateFramebuffer(e,t){let{gl:r}=this,i=e.glFramebuffers[this.CONTEXT_UID],s=e.colorTextures,n=s.length;r.drawBuffers||(n=Math.min(n,1)),i.multisample>1&&this.canMultisampleFramebuffer(e)?i.msaaBuffer=i.msaaBuffer||r.createRenderbuffer():i.msaaBuffer&&(r.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));let a=[];for(let o=0;o<n;o++){let n=s[o],l=n.parentTextureArray||n;this.renderer.texture.bind(l,0),0===o&&i.msaaBuffer?(r.bindRenderbuffer(r.RENDERBUFFER,i.msaaBuffer),r.renderbufferStorageMultisample(r.RENDERBUFFER,i.multisample,l._glTextures[this.CONTEXT_UID].internalFormat,e.width,e.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,i.msaaBuffer)):(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+o,n.target,l._glTextures[this.CONTEXT_UID].texture,t),a.push(r.COLOR_ATTACHMENT0+o))}if(a.length>1&&r.drawBuffers(a),e.depthTexture&&this.writeDepthTexture){let i=e.depthTexture;this.renderer.texture.bind(i,0),r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,i._glTextures[this.CONTEXT_UID].texture,t)}if((e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)){let t,s;i.stencil=i.stencil||r.createRenderbuffer(),1===this.renderer.context.webGLVersion?(t=r.DEPTH_STENCIL_ATTACHMENT,s=r.DEPTH_STENCIL):e.depth&&e.stencil?(t=r.DEPTH_STENCIL_ATTACHMENT,s=r.DEPTH24_STENCIL8):e.depth?(t=r.DEPTH_ATTACHMENT,s=r.DEPTH_COMPONENT24):(t=r.STENCIL_ATTACHMENT,s=r.STENCIL_INDEX8),r.bindRenderbuffer(r.RENDERBUFFER,i.stencil),i.msaaBuffer?r.renderbufferStorageMultisample(r.RENDERBUFFER,i.multisample,s,e.width,e.height):r.renderbufferStorage(r.RENDERBUFFER,s,e.width,e.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,t,r.RENDERBUFFER,i.stencil)}else i.stencil&&(r.deleteRenderbuffer(i.stencil),i.stencil=null)}/**
   * Returns true if the frame buffer can be multisampled.
   * @param framebuffer
   */canMultisampleFramebuffer(e){return 1!==this.renderer.context.webGLVersion&&e.colorTextures.length<=1&&!e.depthTexture}/**
   * Detects number of samples that is not more than a param but as close to it as possible
   * @param samples - number of samples
   * @returns - recommended number of samples
   */detectSamples(e){let{msaaSamples:t}=this,i=r.MSAA_QUALITY.NONE;if(e<=1||null===t)return i;for(let r=0;r<t.length;r++)if(t[r]<=e){i=t[r];break}return 1===i&&(i=r.MSAA_QUALITY.NONE),i}/**
   * Only works with WebGL2
   *
   * blits framebuffer to another of the same or bigger size
   * after that target framebuffer is bound
   *
   * Fails with WebGL warning if blits multisample framebuffer to different size
   * @param framebuffer - by default it blits "into itself", from renderBuffer to texture.
   * @param sourcePixels - source rectangle in pixels
   * @param destPixels - dest rectangle in pixels, assumed to be the same as sourcePixels
   */blit(e,t,r){let{current:i,renderer:s,gl:n,CONTEXT_UID:a}=this;if(2!==s.context.webGLVersion||!i)return;let l=i.glFramebuffers[a];if(!l)return;if(!e){if(!l.msaaBuffer)return;let t=i.colorTextures[0];if(!t)return;l.blitFramebuffer||(l.blitFramebuffer=new o.Framebuffer(i.width,i.height),l.blitFramebuffer.addColorTexture(0,t)),(e=l.blitFramebuffer).colorTextures[0]!==t&&(e.colorTextures[0]=t,e.dirtyId++,e.dirtyFormat++),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height,e.dirtyId++,e.dirtySize++)}t||((t=h).width=i.width,t.height=i.height),r||(r=t);let u=t.width===r.width&&t.height===r.height;this.bind(e),n.bindFramebuffer(n.READ_FRAMEBUFFER,l.framebuffer),n.blitFramebuffer(t.left,t.top,t.right,t.bottom,r.left,r.top,r.right,r.bottom,n.COLOR_BUFFER_BIT,u?n.NEAREST:n.LINEAR),n.bindFramebuffer(n.READ_FRAMEBUFFER,e.glFramebuffers[this.CONTEXT_UID].framebuffer)}/**
   * Disposes framebuffer.
   * @param framebuffer - framebuffer that has to be disposed of
   * @param contextLost - If context was lost, we suppress all delete function calls
   */disposeFramebuffer(e,t){let r=e.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!r)return;delete e.glFramebuffers[this.CONTEXT_UID];let s=this.managedFramebuffers.indexOf(e);s>=0&&this.managedFramebuffers.splice(s,1),e.disposeRunner.remove(this),t||(i.deleteFramebuffer(r.framebuffer),r.msaaBuffer&&i.deleteRenderbuffer(r.msaaBuffer),r.stencil&&i.deleteRenderbuffer(r.stencil)),r.blitFramebuffer&&this.disposeFramebuffer(r.blitFramebuffer,t)}/**
   * Disposes all framebuffers, but not textures bound to them.
   * @param [contextLost=false] - If context was lost, we suppress all delete function calls
   */disposeAll(e){let t=this.managedFramebuffers;this.managedFramebuffers=[];for(let r=0;r<t.length;r++)this.disposeFramebuffer(t[r],e)}/**
   * Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
   * Used by MaskSystem, when its time to use stencil mask for Graphics element.
   *
   * Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.
   * @private
   */forceStencil(){let e,t;let r=this.current;if(!r)return;let i=r.glFramebuffers[this.CONTEXT_UID];if(!i||i.stencil&&r.stencil)return;r.stencil=!0;let s=r.width,n=r.height,a=this.gl,o=i.stencil=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,o),1===this.renderer.context.webGLVersion?(e=a.DEPTH_STENCIL_ATTACHMENT,t=a.DEPTH_STENCIL):r.depth?(e=a.DEPTH_STENCIL_ATTACHMENT,t=a.DEPTH24_STENCIL8):(e=a.STENCIL_ATTACHMENT,t=a.STENCIL_INDEX8),i.msaaBuffer?a.renderbufferStorageMultisample(a.RENDERBUFFER,i.multisample,t,s,n):a.renderbufferStorage(a.RENDERBUFFER,t,s,n),a.framebufferRenderbuffer(a.FRAMEBUFFER,e,a.RENDERBUFFER,o)}/** Resets framebuffer stored state, binds screen framebuffer. Should be called before renderTexture reset(). */reset(){this.current=this.unknownFramebuffer,this.viewport=new s.Rectangle}destroy(){this.renderer=null}}u.extension={type:i.ExtensionType.RendererSystem,name:"framebuffer"},(0,i.extensions).add(u)}),a("lulFS",function(t,r){e(t.exports,"GLFramebuffer",()=>s);var i=n("jetUE");class s{constructor(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=i.MSAA_QUALITY.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}}}),a("ieXnL",function(e,t){var r=n("jetUE"),i=n("glXXo");n("iEiSW");var s=n("8oqCw");let a={5126:4,5123:2,5121:1};class o{/** @param renderer - The renderer this System works for. */constructor(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}/** Sets up the renderer context and necessary buffers. */contextChange(){this.disposeAll(!0);let e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,2!==t.webGLVersion){let t=this.renderer.context.extensions.vertexArrayObject;s.settings.PREFER_ENV===r.ENV.WEBGL_LEGACY&&(t=null),t?(e.createVertexArray=()=>t.createVertexArrayOES(),e.bindVertexArray=e=>t.bindVertexArrayOES(e),e.deleteVertexArray=e=>t.deleteVertexArrayOES(e)):(this.hasVao=!1,e.createVertexArray=()=>null,e.bindVertexArray=()=>null,e.deleteVertexArray=()=>null)}if(2!==t.webGLVersion){let t=e.getExtension("ANGLE_instanced_arrays");t?(e.vertexAttribDivisor=(e,r)=>t.vertexAttribDivisorANGLE(e,r),e.drawElementsInstanced=(e,r,i,s,n)=>t.drawElementsInstancedANGLE(e,r,i,s,n),e.drawArraysInstanced=(e,r,i,s)=>t.drawArraysInstancedANGLE(e,r,i,s)):this.hasInstance=!1}this.canUseUInt32ElementIndex=2===t.webGLVersion||!!t.extensions.uint32ElementIndex}/**
   * Binds geometry so that is can be drawn. Creating a Vao if required
   * @param geometry - Instance of geometry to bind.
   * @param shader - Instance of shader to use vao for.
   */bind(e,t){t=t||this.renderer.shader.shader;let{gl:r}=this,i=e.glVertexArrayObjects[this.CONTEXT_UID],s=!1;i||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=i={},s=!0);let n=i[t.program.id]||this.initGeometryVao(e,t,s);this._activeGeometry=e,this._activeVao!==n&&(this._activeVao=n,this.hasVao?r.bindVertexArray(n):this.activateVao(e,t.program)),this.updateBuffers()}/** Reset and unbind any active VAO and geometry. */reset(){this.unbind()}/** Update buffers of the currently bound geometry. */updateBuffers(){let e=this._activeGeometry,t=this.renderer.buffer;for(let r=0;r<e.buffers.length;r++){let i=e.buffers[r];t.update(i)}}/**
   * Check compatibility between a geometry and a program
   * @param geometry - Geometry instance.
   * @param program - Program instance.
   */checkCompatibility(e,t){let r=e.attributes,i=t.attributeData;for(let e in i)if(!r[e])throw Error(`shader and geometry incompatible, geometry missing the "${e}" attribute`)}/**
   * Takes a geometry and program and generates a unique signature for them.
   * @param geometry - To get signature from.
   * @param program - To test geometry against.
   * @returns - Unique signature of the geometry and program
   */getSignature(e,t){let r=e.attributes,i=t.attributeData,s=["g",e.id];for(let e in r)i[e]&&s.push(e,i[e].location);return s.join("-")}/**
   * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
   * If vao is created, it is bound automatically. We use a shader to infer what and how to set up the
   * attribute locations.
   * @param geometry - Instance of geometry to to generate Vao for.
   * @param shader - Instance of the shader.
   * @param incRefCount - Increment refCount of all geometry buffers.
   */initGeometryVao(e,t,i=!0){let s=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,l=t.program;l.glPrograms[n]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,l);let h=this.getSignature(e,l),u=e.glVertexArrayObjects[this.CONTEXT_UID],d=u[h];if(d)return u[l.id]=d,d;let c=e.buffers,p=e.attributes,f={},m={};for(let e in c)f[e]=0,m[e]=0;for(let e in p)!p[e].size&&l.attributeData[e]?p[e].size=l.attributeData[e].size:p[e].size||console.warn(`PIXI Geometry attribute '${e}' size cannot be determined (likely the bound shader does not have the attribute)`),f[p[e].buffer]+=p[e].size*a[p[e].type];for(let e in p){let t=p[e],r=t.size;void 0===t.stride&&(f[t.buffer]===r*a[t.type]?t.stride=0:t.stride=f[t.buffer]),void 0===t.start&&(t.start=m[t.buffer],m[t.buffer]+=r*a[t.type])}d=s.createVertexArray(),s.bindVertexArray(d);for(let e=0;e<c.length;e++){let t=c[e];o.bind(t),i&&t._glBuffers[n].refCount++}return this.activateVao(e,l),u[l.id]=d,u[h]=d,s.bindVertexArray(null),o.unbind(r.BUFFER_TYPE.ARRAY_BUFFER),d}/**
   * Disposes geometry.
   * @param geometry - Geometry with buffers. Only VAO will be disposed
   * @param [contextLost=false] - If context was lost, we suppress deleteVertexArray
   */disposeGeometry(e,t){if(!this.managedGeometries[e.id])return;delete this.managedGeometries[e.id];let r=e.glVertexArrayObjects[this.CONTEXT_UID],i=this.gl,s=e.buffers,n=this.renderer?.buffer;if(e.disposeRunner.remove(this),r){if(n)for(let e=0;e<s.length;e++){let r=s[e]._glBuffers[this.CONTEXT_UID];r&&(r.refCount--,0!==r.refCount||t||n.dispose(s[e],t))}if(!t){for(let e in r)if("g"===e[0]){let t=r[e];this._activeVao===t&&this.unbind(),i.deleteVertexArray(t)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}/**
   * Dispose all WebGL resources of all managed geometries.
   * @param [contextLost=false] - If context was lost, we suppress `gl.delete` calls
   */disposeAll(e){let t=Object.keys(this.managedGeometries);for(let r=0;r<t.length;r++)this.disposeGeometry(this.managedGeometries[t[r]],e)}/**
   * Activate vertex array object.
   * @param geometry - Geometry instance.
   * @param program - Shader program instance.
   */activateVao(e,t){let r=this.gl,i=this.CONTEXT_UID,s=this.renderer.buffer,n=e.buffers,a=e.attributes;e.indexBuffer&&s.bind(e.indexBuffer);let o=null;for(let e in a){let l=a[e],h=n[l.buffer],u=h._glBuffers[i];if(t.attributeData[e]){o!==u&&(s.bind(h),o=u);let i=t.attributeData[e].location;if(r.enableVertexAttribArray(i),r.vertexAttribPointer(i,l.size,l.type||r.FLOAT,l.normalized,l.stride,l.start),l.instance){if(this.hasInstance)r.vertexAttribDivisor(i,l.divisor);else throw Error("geometry error, GPU Instancing is not supported on this device")}}}}/**
   * Draws the currently bound geometry.
   * @param type - The type primitive to render.
   * @param size - The number of elements to be rendered. If not specified, all vertices after the
   *  starting vertex will be drawn.
   * @param start - The starting vertex in the geometry to start drawing from. If not specified,
   *  drawing will start from the first vertex.
   * @param instanceCount - The number of instances of the set of elements to execute. If not specified,
   *  all instances will be drawn.
   */draw(e,t,r,i){let{gl:s}=this,n=this._activeGeometry;if(n.indexBuffer){let a=n.indexBuffer.data.BYTES_PER_ELEMENT,o=2===a?s.UNSIGNED_SHORT:s.UNSIGNED_INT;2===a||4===a&&this.canUseUInt32ElementIndex?n.instanced?s.drawElementsInstanced(e,t||n.indexBuffer.data.length,o,(r||0)*a,i||1):s.drawElements(e,t||n.indexBuffer.data.length,o,(r||0)*a):console.warn("unsupported index buffer type: uint32")}else n.instanced?s.drawArraysInstanced(e,r,t||n.getSize(),i||1):s.drawArrays(e,r,t||n.getSize());return this}/** Unbind/reset everything. */unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this.renderer=null}}o.extension={type:i.ExtensionType.RendererSystem,name:"geometry"},(0,i.extensions).add(o)}),a("218Dz",function(e,t){var r=n("jetUE"),i=n("glXXo"),s=n("cvmQp"),a=n("5FJZl");class o{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}/**
   * Changes the mask stack that is used by this System.
   * @param maskStack - The mask stack
   */setMaskStack(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)}/**
   * Enables the mask and appends it to the current mask stack.
   *
   * NOTE: The batch renderer should be flushed beforehand to prevent pending renders from being masked.
   * @param {PIXI.DisplayObject} target - Display Object to push the mask to
   * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskDataOrTarget - The masking data.
   */push(e,t){let i=t;if(!i.isMaskData){let e=this.maskDataPool.pop()||new a.MaskData;e.pooled=!0,e.maskObject=t,i=e}let s=0!==this.maskStack.length?this.maskStack[this.maskStack.length-1]:null;if(i.copyCountersOrReset(s),i._colorMask=s?s._colorMask:15,i.autoDetect&&this.detect(i),i._target=e,i.type!==r.MASK_TYPES.SPRITE&&this.maskStack.push(i),i.enabled)switch(i.type){case r.MASK_TYPES.SCISSOR:this.renderer.scissor.push(i);break;case r.MASK_TYPES.STENCIL:this.renderer.stencil.push(i);break;case r.MASK_TYPES.SPRITE:i.copyCountersOrReset(null),this.pushSpriteMask(i);break;case r.MASK_TYPES.COLOR:this.pushColorMask(i)}i.type===r.MASK_TYPES.SPRITE&&this.maskStack.push(i)}/**
   * Removes the last mask from the mask stack and doesn't return it.
   *
   * NOTE: The batch renderer should be flushed beforehand to render the masked contents before the mask is removed.
   * @param {PIXI.IMaskTarget} target - Display Object to pop the mask from
   */pop(e){let t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case r.MASK_TYPES.SCISSOR:this.renderer.scissor.pop(t);break;case r.MASK_TYPES.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case r.MASK_TYPES.SPRITE:this.popSpriteMask(t);break;case r.MASK_TYPES.COLOR:this.popColorMask(t)}if(t.reset(),t.pooled&&this.maskDataPool.push(t),0!==this.maskStack.length){let e=this.maskStack[this.maskStack.length-1];e.type===r.MASK_TYPES.SPRITE&&e._filters&&(e._filters[0].maskSprite=e.maskObject)}}}/**
   * Sets type of MaskData based on its maskObject.
   * @param maskData
   */detect(e){let t=e.maskObject;t?t.isSprite?e.type=r.MASK_TYPES.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=r.MASK_TYPES.SCISSOR:e.type=r.MASK_TYPES.STENCIL:e.type=r.MASK_TYPES.COLOR}/**
   * Applies the Mask and adds it to the current filter stack.
   * @param maskData - Sprite to be used as the mask.
   */pushSpriteMask(e){let{maskObject:t}=e,r=e._target,i=e._filters;i||(i=this.alphaMaskPool[this.alphaMaskIndex])||(i=this.alphaMaskPool[this.alphaMaskIndex]=[new s.SpriteMaskFilter]),i[0].resolution=e.resolution,i[0].multisample=e.multisample,i[0].maskSprite=t;let n=r.filterArea;r.filterArea=t.getBounds(!0),this.renderer.filter.push(r,i),r.filterArea=n,e._filters||this.alphaMaskIndex++}/**
   * Removes the last filter from the filter stack and doesn't return it.
   * @param maskData - Sprite to be used as the mask.
   */popSpriteMask(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)}/**
   * Pushes the color mask.
   * @param maskData - The mask data
   */pushColorMask(e){let t=e._colorMask,r=e._colorMask=t&e.colorMask;r!==t&&this.renderer.gl.colorMask((1&r)!=0,(2&r)!=0,(4&r)!=0,(8&r)!=0)}/**
   * Pops the color mask.
   * @param maskData - The mask data
   */popColorMask(e){let t=e._colorMask,r=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;r!==t&&this.renderer.gl.colorMask((1&r)!=0,(2&r)!=0,(4&r)!=0,(8&r)!=0)}destroy(){this.renderer=null}}o.extension={type:i.ExtensionType.RendererSystem,name:"mask"},(0,i.extensions).add(o)}),a("cvmQp",function(t,r){e(t.exports,"SpriteMaskFilter",()=>h),n("a1P4O");var i=n("fhlwZ"),s=n("9VGTl"),a=n("5Knew"),o=n("k0xh5"),l=n("45vIZ");class h extends a.Filter{/** @ignore */constructor(e,t,r){let s=null;"string"!=typeof e&&void 0===t&&void 0===r&&(s=e,e=void 0,t=void 0,r=void 0),super(e||l.default,t||o.default,r),this.maskSprite=s,this.maskMatrix=new i.Matrix}/**
   * Sprite mask
   * @type {PIXI.DisplayObject}
   */get maskSprite(){return this._maskSprite}set maskSprite(e){this._maskSprite=e,this._maskSprite&&(this._maskSprite.renderable=!1)}/**
   * Applies the filter
   * @param filterManager - The renderer to retrieve the filter from
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it.
   */apply(e,t,r,i){let n=this._maskSprite,a=n._texture;a.valid&&(a.uvMatrix||(a.uvMatrix=new s.TextureMatrix(a,0)),a.uvMatrix.update(),this.uniforms.npmAlpha=a.baseTexture.alphaMode?0:1,this.uniforms.mask=a,this.uniforms.otherMatrix=e.calculateSpriteMatrix(this.maskMatrix,n).prepend(a.uvMatrix.mapCoord),this.uniforms.alpha=n.worldAlpha,this.uniforms.maskClamp=a.uvMatrix.uClampFrame,e.applyFilter(this,t,r,i))}}}),a("9VGTl",function(t,r){e(t.exports,"TextureMatrix",()=>a),n("a1P4O");var i=n("fhlwZ");let s=new i.Matrix;class a{/**
   * @param texture - observed texture
   * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   */constructor(e,t){this._texture=e,this.mapCoord=new i.Matrix,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t>"u"?.5:t,this.isSimple=!1}/** Texture property. */get texture(){return this._texture}set texture(e){this._texture=e,this._textureID=-1}/**
   * Multiplies uvs array to transform
   * @param uvs - mesh uvs
   * @param [out=uvs] - output
   * @returns - output
   */multiplyUvs(e,t){void 0===t&&(t=e);let r=this.mapCoord;for(let i=0;i<e.length;i+=2){let s=e[i],n=e[i+1];t[i]=s*r.a+n*r.c+r.tx,t[i+1]=s*r.b+n*r.d+r.ty}return t}/**
   * Updates matrices if texture was changed.
   * @param [forceUpdate=false] - if true, matrices will be updated any case
   * @returns - Whether or not it was updated
   */update(e){let t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;let r=t._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);let i=t.orig,n=t.trim;n&&(s.set(i.width/n.width,0,0,i.height/n.height,-n.x/n.width,-n.y/n.height),this.mapCoord.append(s));let a=t.baseTexture,o=this.uClampFrame,l=this.clampMargin/a.resolution,h=this.clampOffset;return o[0]=(t._frame.x+l+h)/a.width,o[1]=(t._frame.y+l+h)/a.height,o[2]=(t._frame.x+t._frame.width-l+h)/a.width,o[3]=(t._frame.y+t._frame.height-l+h)/a.height,this.uClampOffset[0]=h/a.realWidth,this.uClampOffset[1]=h/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&0===t.rotate,!0}}}),a("k0xh5",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`}),a("45vIZ",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`}),a("5FJZl",function(t,r){e(t.exports,"MaskData",()=>a);var i=n("jetUE"),s=n("5Knew");class a{/**
   * Create MaskData
   * @param {PIXI.DisplayObject} [maskObject=null] - object that describes the mask
   */constructor(e=null){this.type=i.MASK_TYPES.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=s.Filter.defaultMultisample,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}/**
   * The sprite mask filter.
   * If set to `null`, the default sprite mask filter is used.
   * @default null
   */get filter(){return this._filters?this._filters[0]:null}set filter(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null}/** Resets the mask data after popMask(). */reset(){this.pooled&&(this.maskObject=null,this.type=i.MASK_TYPES.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null}/**
   * Copies counters from maskData above, called from pushMask().
   * @param maskAbove
   */copyCountersOrReset(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)}}}),a("fsGAU",function(e,t){var r=n("glXXo");n("a1P4O");var i=n("fhlwZ"),s=n("6OnST");n("iEiSW");var a=n("8oqCw"),o=n("7pQia");let l=new i.Matrix,h=[],u=class e extends o.AbstractMaskSystem{/**
   * @param {PIXI.Renderer} renderer - The renderer this System works for.
   */constructor(e){super(e),this.glConst=(0,a.settings).ADAPTER.getWebGLRenderingContext().SCISSOR_TEST}getStackLength(){let e=this.maskStack[this.maskStack.length-1];return e?e._scissorCounter:0}/**
   * evaluates _boundsTransformed, _scissorRect for MaskData
   * @param maskData
   */calcScissorRect(e){if(e._scissorRectLocal)return;let t=e._scissorRect,{maskObject:r}=e,{renderer:i}=this,n=i.renderTexture,a=r.getBounds(!0,h.pop()??new s.Rectangle);this.roundFrameToPixels(a,n.current?n.current.resolution:i.resolution,n.sourceFrame,n.destinationFrame,i.projection.transform),t&&a.fit(t),e._scissorRectLocal=a}static isMatrixRotated(e){if(!e)return!1;let{a:t,b:r,c:i,d:s}=e;return(Math.abs(r)>1e-4||Math.abs(i)>1e-4)&&(Math.abs(t)>1e-4||Math.abs(s)>1e-4)}/**
   * Test, whether the object can be scissor mask with current renderer projection.
   * Calls "calcScissorRect()" if its true.
   * @param maskData - mask data
   * @returns whether Whether the object can be scissor mask
   */testScissor(t){let{maskObject:r}=t;if(!r.isFastRect||!r.isFastRect()||e.isMatrixRotated(r.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);let i=t._scissorRectLocal;return i.width>0&&i.height>0}roundFrameToPixels(t,r,i,s,n){e.isMatrixRotated(n)||((n=n?l.copyFrom(n):l.identity()).translate(-i.x,-i.y).scale(s.width/i.width,s.height/i.height).translate(s.x,s.y),this.renderer.filter.transformAABB(n,t),t.fit(s),t.x=Math.round(t.x*r),t.y=Math.round(t.y*r),t.width=Math.round(t.width*r),t.height=Math.round(t.height*r))}/**
   * Applies the Mask and adds it to the current stencil stack.
   * @author alvin
   * @param maskData - The mask data.
   */push(e){e._scissorRectLocal||this.calcScissorRect(e);let{gl:t}=this.renderer;e._scissorRect||t.enable(t.SCISSOR_TEST),e._scissorCounter++,e._scissorRect=e._scissorRectLocal,this._useCurrent()}/**
   * This should be called after a mask is popped off the mask stack. It will rebind the scissor box to be latest with the
   * last mask in the stack.
   *
   * This can also be called when you directly modify the scissor box and want to restore PixiJS state.
   * @param maskData - The mask data.
   */pop(e){let{gl:t}=this.renderer;e&&h.push(e._scissorRectLocal),this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)}/**
   * Setup renderer to use the current scissor data.
   * @private
   */_useCurrent(){let e;let t=this.maskStack[this.maskStack.length-1]._scissorRect;e=this.renderer.renderTexture.current?t.y:this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,e,t.width,t.height)}};u.extension={type:r.ExtensionType.RendererSystem,name:"scissor"},(0,r.extensions).add(u)}),a("7pQia",function(t,r){e(t.exports,"AbstractMaskSystem",()=>i);class i{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.maskStack=[],this.glConst=0}/** Gets count of masks of certain type. */getStackLength(){return this.maskStack.length}/**
   * Changes the mask stack that is used by this System.
   * @param {PIXI.MaskData[]} maskStack - The mask stack
   */setMaskStack(e){let{gl:t}=this.renderer,r=this.getStackLength();this.maskStack=e;let i=this.getStackLength();i!==r&&(0===i?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))}/**
   * Setup renderer to use the current mask data.
   * @private
   */_useCurrent(){}/** Destroys the mask stack. */destroy(){this.renderer=null,this.maskStack=null}}}),a("kufGd",function(e,t){var r=n("glXXo");n("iEiSW");var i=n("8oqCw"),s=n("7pQia");class a extends s.AbstractMaskSystem{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){super(e),this.glConst=(0,i.settings).ADAPTER.getWebGLRenderingContext().STENCIL_TEST}getStackLength(){let e=this.maskStack[this.maskStack.length-1];return e?e._stencilCounter:0}/**
   * Applies the Mask and adds it to the current stencil stack.
   * @param maskData - The mask data
   */push(e){let t=e.maskObject,{gl:r}=this.renderer,i=e._stencilCounter;0===i&&(this.renderer.framebuffer.forceStencil(),r.clearStencil(0),r.clear(r.STENCIL_BUFFER_BIT),r.enable(r.STENCIL_TEST)),e._stencilCounter++;let s=e._colorMask;0!==s&&(e._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilFunc(r.EQUAL,i,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.INCR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,0!==s&&(e._colorMask=s,r.colorMask((1&s)!=0,(2&s)!=0,(4&s)!=0,(8&s)!=0)),this._useCurrent()}/**
   * Pops stencil mask. MaskData is already removed from stack
   * @param {PIXI.DisplayObject} maskObject - object of popped mask data
   */pop(e){let t=this.renderer.gl;if(0===this.getStackLength())t.disable(t.STENCIL_TEST);else{let r=0!==this.maskStack.length?this.maskStack[this.maskStack.length-1]:null,i=r?r._colorMask:15;0!==i&&(r._colorMask=0,t.colorMask(!1,!1,!1,!1)),t.stencilOp(t.KEEP,t.KEEP,t.DECR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,0!==i&&(r._colorMask=i,t.colorMask((1&i)!=0,(2&i)!=0,(4&i)!=0,(8&i)!=0)),this._useCurrent()}}/**
   * Setup renderer to use the current stencil data.
   * @private
   */_useCurrent(){let e=this.renderer.gl;e.stencilFunc(e.EQUAL,this.getStackLength(),4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}}a.extension={type:r.ExtensionType.RendererSystem,name:"stencil"},(0,r.extensions).add(a)}),a("b7yas",function(e,t){var r=n("glXXo");n("MiLFw");var i=n("k9Wja");class s{constructor(e){this.renderer=e,this.plugins={},Object.defineProperties(this.plugins,{extract:{enumerable:!1,get:()=>((0,i.deprecation)("7.0.0","renderer.plugins.extract has moved to renderer.extract"),e.extract)},prepare:{enumerable:!1,get:()=>((0,i.deprecation)("7.0.0","renderer.plugins.prepare has moved to renderer.prepare"),e.prepare)},interaction:{enumerable:!1,get:()=>((0,i.deprecation)("7.0.0","renderer.plugins.interaction has been deprecated, use renderer.events"),e.events)}})}/**
   * Initialize the plugins.
   * @protected
   */init(){let e=this.rendererPlugins;for(let t in e)this.plugins[t]=new e[t](this.renderer)}destroy(){for(let e in this.plugins)this.plugins[e].destroy(),this.plugins[e]=null}}s.extension={type:[r.ExtensionType.RendererSystem,r.ExtensionType.CanvasRendererSystem],name:"_plugin"},(0,r.extensions).add(s)}),a("3mYCB",function(e,t){var r=n("glXXo");n("a1P4O");var i=n("fhlwZ");class s{/** @param renderer - The renderer this System works for. */constructor(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new i.Matrix,this.transform=null}/**
   * Updates the projection-matrix based on the sourceFrame → destinationFrame mapping provided.
   *
   * NOTE: It is expected you call `renderer.framebuffer.setViewport(destinationFrame)` after this. This is because
   * the framebuffer viewport converts shader vertex output in normalized device coordinates to window coordinates.
   *
   * NOTE-2: {@link PIXI.RenderTextureSystem#bind} updates the projection-matrix when you bind a render-texture.
   * It is expected
   * that you dirty the current bindings when calling this manually.
   * @param destinationFrame - The rectangle in the render-target to render the contents into. If rendering to the canvas,
   *  the origin is on the top-left; if rendering to a render-texture, the origin is on the bottom-left.
   * @param sourceFrame - The rectangle in world space that contains the contents being rendered.
   * @param resolution - The resolution of the render-target, which is the ratio of
   *  world-space (or CSS) pixels to physical pixels.
   * @param root - Whether the render-target is the screen. This is required because rendering to textures
   *  is y-flipped (i.e. upside down relative to the screen).
   */update(e,t,r,i){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,r,i),this.transform&&this.projectionMatrix.append(this.transform);let s=this.renderer;s.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,s.globalUniforms.update(),s.shader.shader&&s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)}/**
   * Calculates the `projectionMatrix` to map points inside `sourceFrame` to inside `destinationFrame`.
   * @param _destinationFrame - The destination frame in the render-target.
   * @param sourceFrame - The source frame in world space.
   * @param _resolution - The render-target's resolution, i.e. ratio of CSS to physical pixels.
   * @param root - Whether rendering into the screen. Otherwise, if rendering to a framebuffer, the projection
   *  is y-flipped.
   */calculateProjection(e,t,r,i){let s=this.projectionMatrix,n=i?-1:1;s.identity(),s.a=1/t.width*2,s.d=n*(1/t.height*2),s.tx=-1-t.x*s.a,s.ty=-n-t.y*s.d}/**
   * Sets the transform of the active render target to the given matrix.
   * @param _matrix - The transformation matrix
   */setTransform(e){}destroy(){this.renderer=null}}s.extension={type:r.ExtensionType.RendererSystem,name:"projection"},(0,r.extensions).add(s)}),a("2V2fb",function(e,t){var r=n("glXXo");n("a1P4O");var i=n("9wIYY"),s=n("6OnST"),a=n("fhlwZ"),o=n("23Rkv");let l=new i.Transform,h=new s.Rectangle;class u{constructor(e){this.renderer=e,this._tempMatrix=new a.Matrix}/**
   * A Useful function that returns a texture of the display object that can then be used to create sprites
   * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
   * @param displayObject - The displayObject the object will be generated from.
   * @param {IGenerateTextureOptions} options - Generate texture options.
   * @param {PIXI.Rectangle} options.region - The region of the displayObject, that shall be rendered,
   *        if no region is specified, defaults to the local bounds of the displayObject.
   * @param {number} [options.resolution] - If not given, the renderer's resolution is used.
   * @param {PIXI.MSAA_QUALITY} [options.multisample] - If not given, the renderer's multisample is used.
   * @returns a shiny new texture of the display object passed in
   */generateTexture(e,t){let{region:r,...i}=t||{},s=r?.copyTo(h)||e.getLocalBounds(h,!0),n=i.resolution||this.renderer.resolution;s.width=Math.max(s.width,1/n),s.height=Math.max(s.height,1/n),i.width=s.width,i.height=s.height,i.resolution=n,i.multisample??(i.multisample=this.renderer.multisample);let a=(0,o.RenderTexture).create(i);this._tempMatrix.tx=-s.x,this._tempMatrix.ty=-s.y;let u=e.transform;return e.transform=l,this.renderer.render(e,{renderTexture:a,transform:this._tempMatrix,skipUpdateTransform:!!e.parent,blit:!0}),e.transform=u,a}destroy(){}}u.extension={type:[r.ExtensionType.RendererSystem,r.ExtensionType.CanvasRendererSystem],name:"textureGenerator"},(0,r.extensions).add(u)}),a("jyowR",function(e,t){n("1BmAR");var r=n("5xg5I"),i=n("glXXo");n("a1P4O");var s=n("6OnST");let a=new s.Rectangle,o=new s.Rectangle;class l{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new s.Rectangle,this.destinationFrame=new s.Rectangle,this.viewportFrame=new s.Rectangle}contextChange(){let e=this.renderer?.gl.getContextAttributes();this._rendererPremultipliedAlpha=!!(e&&e.alpha&&e.premultipliedAlpha)}/**
   * Bind the current render texture.
   * @param renderTexture - RenderTexture to bind, by default its `null` - the screen.
   * @param sourceFrame - Part of world that is mapped to the renderTexture.
   * @param destinationFrame - Part of renderTexture, by default it has the same size as sourceFrame.
   */bind(e=null,t,r){let i,s,n;let l=this.renderer;this.current=e,e?(n=(i=e.baseTexture).resolution,t||(a.width=e.frame.width,a.height=e.frame.height,t=a),r||(o.x=e.frame.x,o.y=e.frame.y,o.width=t.width,o.height=t.height,r=o),s=i.framebuffer):(n=l.resolution,t||(a.width=l._view.screen.width,a.height=l._view.screen.height,t=a),r||((r=a).width=t.width,r.height=t.height));let h=this.viewportFrame;h.x=r.x*n,h.y=r.y*n,h.width=r.width*n,h.height=r.height*n,e||(h.y=l.view.height-(h.y+h.height)),h.ceil(),this.renderer.framebuffer.bind(s,h),this.renderer.projection.update(r,t,n,!s),e?this.renderer.mask.setMaskStack(i.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(r)}/**
   * Erases the render texture and fills the drawing area with a colour.
   * @param clearColor - The color as rgba, default to use the renderer backgroundColor
   * @param [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
   *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
   */clear(e,t){let i=this.current?this.current.baseTexture.clear:this.renderer.background.backgroundColor,s=(0,r.Color).shared.setValue(e||i);(this.current&&this.current.baseTexture.alphaMode>0||!this.current&&this._rendererPremultipliedAlpha)&&s.premultiply(s.alpha);let n=this.destinationFrame,a=this.current?this.current.baseTexture:this.renderer._view.screen,o=n.width!==a.width||n.height!==a.height;if(o){let{x:e,y:t,width:r,height:i}=this.viewportFrame;e=Math.round(e),t=Math.round(t),r=Math.round(r),i=Math.round(i),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(e,t,r,i)}this.renderer.framebuffer.clear(s.red,s.green,s.blue,s.alpha,t),o&&this.renderer.scissor.pop()}resize(){this.bind(null)}/** Resets render-texture state. */reset(){this.bind(null)}destroy(){this.renderer=null}}l.extension={type:i.ExtensionType.RendererSystem,name:"renderTexture"},(0,i.extensions).add(l)}),a("g9KwK",function(e,t){var r=n("glXXo");n("6NGIb");var i=n("7Ygfs"),s=n("bnuRS"),a=n("5pg2g"),o=n("7YvFy");let l=0,h={textureCount:0,uboCount:0};class u{/** @param renderer - The renderer this System works for. */constructor(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=l++}/**
   * Overrideable function by `@pixi/unsafe-eval` to silence
   * throwing an error if platform doesn't support unsafe-evals.
   * @private
   */systemCheck(){if(!(0,a.unsafeEvalSupported)())throw Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")}contextChange(e){this.gl=e,this.reset()}/**
   * Changes the current shader to the one given in parameter.
   * @param shader - the new shader
   * @param dontSync - false if the shader should automatically sync its uniforms.
   * @returns the glProgram that belongs to the shader.
   */bind(e,t){e.disposeRunner.add(this),e.uniforms.globals=this.renderer.globalUniforms;let r=e.program,i=r.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==r&&(this.program=r,this.gl.useProgram(i.program)),t||(h.textureCount=0,h.uboCount=0,this.syncUniformGroup(e.uniformGroup,h)),i}/**
   * Uploads the uniforms values to the currently bound shader.
   * @param uniforms - the uniforms values that be applied to the current shader
   */setUniforms(e){let t=this.shader.program,r=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(r.uniformData,e,this.renderer)}/* eslint-disable @typescript-eslint/explicit-module-boundary-types *//**
   * Syncs uniforms on the group
   * @param group - the uniform group to sync
   * @param syncData - this is data that is passed to the sync function and any nested sync functions
   */syncUniformGroup(e,t){let r=this.getGlProgram();e.static&&e.dirtyId===r.uniformDirtyGroups[e.id]||(r.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,r,t))}/**
   * Overrideable by the @pixi/unsafe-eval package to use static syncUniforms instead.
   * @param group
   * @param glProgram
   * @param syncData
   */syncUniforms(e,t,r){(e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e))(t.uniformData,e.uniforms,this.renderer,r)}createSyncGroups(e){let t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=(0,o.generateUniformsSync)(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]}/**
   * Syncs uniform buffers
   * @param group - the uniform buffer group to sync
   * @param name - the name of the uniform buffer
   */syncUniformBufferGroup(e,t){let r=this.getGlProgram();if(!e.static||0!==e.dirtyId||!r.uniformGroups[e.id]){e.dirtyId=0;let i=r.uniformGroups[e.id]||this.createSyncBufferGroup(e,r,t);e.buffer.update(),i(r.uniformData,e.uniforms,this.renderer,h,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,r.uniformBufferBindings[t])}/**
   * Will create a function that uploads a uniform buffer using the STD140 standard.
   * The upload function will then be cached for future calls
   * If a group is manually managed, then a simple upload function is generated
   * @param group - the uniform buffer group to sync
   * @param glProgram - the gl program to attach the uniform bindings to
   * @param name - the name of the uniform buffer (must exist on the shader)
   */createSyncBufferGroup(e,t,r){let{gl:i}=this.renderer;this.renderer.buffer.bind(e.buffer);let n=this.gl.getUniformBlockIndex(t.program,r);t.uniformBufferBindings[r]=this.shader.uniformBindCount,i.uniformBlockBinding(t.program,n,this.shader.uniformBindCount),this.shader.uniformBindCount++;let a=this.getSignature(e,this.shader.program.uniformData,"ubo"),o=this._uboCache[a];if(o||(o=this._uboCache[a]=(0,s.generateUniformBufferSync)(e,this.shader.program.uniformData)),e.autoManage){let t=new Float32Array(o.size/4);e.buffer.update(t)}return t.uniformGroups[e.id]=o.syncFunc,t.uniformGroups[e.id]}/**
   * Takes a uniform group and data and generates a unique signature for them.
   * @param group - The uniform group to get signature of
   * @param group.uniforms
   * @param uniformData - Uniform information generated by the shader
   * @param preFix
   * @returns Unique signature of the uniform group
   */getSignature(e,t,r){let i=e.uniforms,s=[`${r}-`];for(let e in i)s.push(e),t[e]&&s.push(t[e].type);return s.join("-")}/**
   * Returns the underlying GLShade rof the currently bound shader.
   *
   * This can be handy for when you to have a little more control over the setting of your uniforms.
   * @returns The glProgram for the currently bound Shader for this context
   */getGlProgram(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null}/**
   * Generates a glProgram version of the Shader provided.
   * @param shader - The shader that the glProgram will be based on.
   * @returns A shiny new glProgram!
   */generateProgram(e){let t=this.gl,r=e.program,s=(0,i.generateProgram)(t,r);return r.glPrograms[this.renderer.CONTEXT_UID]=s,s}/** Resets ShaderSystem state, does not affect WebGL state. */reset(){this.program=null,this.shader=null}/**
   * Disposes shader.
   * If disposing one equals with current shader, set current as null.
   * @param shader - Shader object
   */disposeShader(e){this.shader===e&&(this.shader=null)}/** Destroys this System and removes all its textures. */destroy(){this.renderer=null,this.destroyed=!0}}u.extension={type:r.ExtensionType.RendererSystem,name:"shader"},(0,r.extensions).add(u)}),a("7Ygfs",function(t,r){e(t.exports,"generateProgram",()=>u);var i=n("9q0iS"),s=n("laDPc"),a=n("3bkbq"),o=n("2EZj4"),l=n("kWz0K"),h=n("LSPno");function u(e,t){let r=(0,s.compileShader)(e,e.VERTEX_SHADER,t.vertexSrc),n=(0,s.compileShader)(e,e.FRAGMENT_SHADER,t.fragmentSrc),u=e.createProgram();e.attachShader(u,r),e.attachShader(u,n);let d=t.extra?.transformFeedbackVaryings;if(d&&("function"!=typeof e.transformFeedbackVaryings?console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given."):e.transformFeedbackVaryings(u,d.names,"separate"===d.bufferMode?e.SEPARATE_ATTRIBS:e.INTERLEAVED_ATTRIBS)),e.linkProgram(u),e.getProgramParameter(u,e.LINK_STATUS)||(0,h.logProgramError)(e,u,r,n),t.attributeData=(0,o.getAttributeData)(u,e),t.uniformData=(0,l.getUniformData)(u,e),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)){let r=Object.keys(t.attributeData);r.sort((e,t)=>e>t?1:-1);for(let i=0;i<r.length;i++)t.attributeData[r[i]].location=i,e.bindAttribLocation(u,i,r[i]);e.linkProgram(u)}e.deleteShader(r),e.deleteShader(n);let c={};for(let r in t.uniformData){let i=t.uniformData[r];c[r]={location:e.getUniformLocation(u,r),value:(0,a.defaultValue)(i.type,i.size)}}return new i.GLProgram(u,c)}}),a("9q0iS",function(t,r){e(t.exports,"GLProgram",()=>i);class i{/**
   * Makes a new Pixi program.
   * @param program - webgl program
   * @param uniformData - uniforms
   */constructor(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}/** Destroys this program. */destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null}}}),a("2EZj4",function(t,r){e(t.exports,"getAttributeData",()=>a);var i=n("73ARh"),s=n("currf");function a(e,t){let r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let n=t.getActiveAttrib(e,a);if(n.name.startsWith("gl_"))continue;let o=(0,s.mapType)(t,n.type),l={type:o,name:n.name,size:(0,i.mapSize)(o),location:t.getAttribLocation(e,n.name)};r[n.name]=l}return r}}),a("kWz0K",function(t,r){e(t.exports,"getUniformData",()=>a);var i=n("3bkbq"),s=n("currf");function a(e,t){let r={},n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;a++){let n=t.getActiveUniform(e,a),o=n.name.replace(/\[.*?\]$/,""),l=!!n.name.match(/\[.*?\]$/),h=(0,s.mapType)(t,n.type);r[o]={name:o,index:a,type:h,size:n.size,isArray:l,value:(0,i.defaultValue)(h,n.size)}}return r}}),a("bnuRS",function(t,r){e(t.exports,"generateUniformBufferSync",()=>h),n("6NGIb");var i=n("cPRmq"),s=n("73ARh");function a(e,t,r,i,s){r.buffer.update(s)}let o={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},l={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:32,mat3:48,mat4:64};function h(e,t){if(!e.autoManage)return{size:0,syncFunc:a};let r=function(e,t){let r=[];for(let i in e)t[i]&&r.push(t[i]);return r.sort((e,t)=>e.index-t.index),r}(e.uniforms,t),{uboElements:n,size:h}=function(e){let t=e.map(e=>({data:e,offset:0,dataLen:0,dirty:0})),r=0,i=0,s=0;for(let e=0;e<t.length;e++){let n=t[e];if(r=l[n.data.type],n.data.size>1&&(r=Math.max(r,16)*n.data.size),n.dataLen=r,i%r!=0&&i<16){let e=i%r%16;i+=e,s+=e}i+r>16?(s=16*Math.ceil(s/16),n.offset=s,s+=r,i=r):(n.offset=s,i+=r,s+=r)}return{uboElements:t,size:s=16*Math.ceil(s/16)}}(r),u=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];for(let t=0;t<n.length;t++){let r=n[t],a=e.uniforms[r.data.name],h=r.data.name,d=!1;for(let e=0;e<i.uniformParsers.length;e++){let t=i.uniformParsers[e];if(t.codeUbo&&t.test(r.data,a)){u.push(`offset = ${r.offset/4};`,(0,i.uniformParsers)[e].codeUbo(r.data.name,a)),d=!0;break}}if(!d){if(r.data.size>1){let e=(0,s.mapSize)(r.data.type),t=Math.max(l[r.data.type]/16,1),i=e/t,n=(4-i%4)%4;u.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${r.offset/4};

                t = 0;

                for(var i=0; i < ${r.data.size*t}; i++)
                {
                    for(var j = 0; j < ${i}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${n};
                }

                `)}else{let e=o[r.data.type];u.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${r.offset/4};
                ${e};
                `)}}}return u.push(`
       renderer.buffer.update(buffer);
    `),{size:h,// eslint-disable-next-line no-new-func
syncFunc:Function("ud","uv","renderer","syncData","buffer",u.join(`
`))}}}),a("dGc9J",function(t,r){e(t.exports,"StartupSystem",()=>s);var i=n("glXXo");class s{constructor(e){this.renderer=e}/**
   * It all starts here! This initiates every system, passing in the options for any system by name.
   * @param options - the config for the renderer and all its systems
   */run(e){let{renderer:t}=this;t.runners.init.emit(t.options),e.hello&&console.log(`PixiJS 7.3.2 - ${t.rendererLogId} - https://pixijs.com`),t.resize(t.screen.width,t.screen.height)}destroy(){}}s.defaultOptions={/**
   * {@link PIXI.IRendererOptions.hello}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */hello:!1},/** @ignore */s.extension={type:[i.ExtensionType.RendererSystem,i.ExtensionType.CanvasRendererSystem],name:"startup"},(0,i.extensions).add(s)}),a("7e2Gc",function(e,t){var r=n("jetUE"),i=n("glXXo"),s=n("glF38"),a=n("dopYa");let o=class e{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=r.BLEND_MODES.NONE,this._blendEq=!1,this.map=[],this.map[0]=this.setBlend,this.map[1]=this.setOffset,this.map[2]=this.setCullFace,this.map[3]=this.setDepthTest,this.map[4]=this.setFrontFace,this.map[5]=this.setDepthMask,this.checks=[],this.defaultState=new s.State,this.defaultState.blend=!0}contextChange(e){this.gl=e,this.blendModes=(0,a.mapWebGLBlendModesToPixi)(e),this.set(this.defaultState),this.reset()}/**
   * Sets the current state
   * @param {*} state - The state to set.
   */set(e){if(e=e||this.defaultState,this.stateId!==e.data){let t=this.stateId^e.data,r=0;for(;t;)1&t&&this.map[r].call(this,!!(e.data&1<<r)),t>>=1,r++;this.stateId=e.data}for(let t=0;t<this.checks.length;t++)this.checks[t](this,e)}/**
   * Sets the state, when previous state is unknown.
   * @param {*} state - The state to set
   */forceState(e){e=e||this.defaultState;for(let t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(let t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data}/**
   * Sets whether to enable or disable blending.
   * @param value - Turn on or off WebGl blending.
   */setBlend(t){this.updateCheck(e.checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND)}/**
   * Sets whether to enable or disable polygon offset fill.
   * @param value - Turn on or off webgl polygon offset testing.
   */setOffset(t){this.updateCheck(e.checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}/**
   * Sets whether to enable or disable depth test.
   * @param value - Turn on or off webgl depth testing.
   */setDepthTest(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)}/**
   * Sets whether to enable or disable depth mask.
   * @param value - Turn on or off webgl depth mask.
   */setDepthMask(e){this.gl.depthMask(e)}/**
   * Sets whether to enable or disable cull face.
   * @param {boolean} value - Turn on or off webgl cull face.
   */setCullFace(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)}/**
   * Sets the gl front face.
   * @param {boolean} value - true is clockwise and false is counter-clockwise
   */setFrontFace(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])}/**
   * Sets the blend mode.
   * @param {number} value - The blend mode to set to.
   */setBlendMode(e){if(e===this.blendMode)return;this.blendMode=e;let t=this.blendModes[e],r=this.gl;2===t.length?r.blendFunc(t[0],t[1]):r.blendFuncSeparate(t[0],t[1],t[2],t[3]),6===t.length?(this._blendEq=!0,r.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,r.blendEquationSeparate(r.FUNC_ADD,r.FUNC_ADD))}/**
   * Sets the polygon offset.
   * @param {number} value - the polygon offset
   * @param {number} scale - the polygon offset scale
   */setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}// used
/** Resets all the logic and disables the VAOs. */reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)}/**
   * Checks to see which updates should be checked based on which settings have been activated.
   *
   * For example, if blend is enabled then we should check the blend modes each time the state is changed
   * or if polygon fill is activated then we need to check if the polygon offset changes.
   * The idea is that we only check what we have too.
   * @param func - the checking function to add or remove
   * @param value - should the check function be added or removed.
   */updateCheck(e,t){let r=this.checks.indexOf(e);t&&-1===r?this.checks.push(e):t||-1===r||this.checks.splice(r,1)}/**
   * A private little wrapper function that we call to check the blend mode.
   * @param system - the System to perform the state check on
   * @param state - the state that the blendMode will pulled from
   */static checkBlendMode(e,t){e.setBlendMode(t.blendMode)}/**
   * A private little wrapper function that we call to check the polygon offset.
   * @param system - the System to perform the state check on
   * @param state - the state that the blendMode will pulled from
   */static checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}/**
   * @ignore
   */destroy(){this.gl=null}};o.extension={type:i.ExtensionType.RendererSystem,name:"state"},(0,i.extensions).add(o)}),a("dopYa",function(t,r){e(t.exports,"mapWebGLBlendModesToPixi",()=>s);var i=n("jetUE");function s(e,t=[]){return t[i.BLEND_MODES.NORMAL]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.ADD]=[e.ONE,e.ONE],t[i.BLEND_MODES.MULTIPLY]=[e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.SCREEN]=[e.ONE,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.OVERLAY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.DARKEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.LIGHTEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.COLOR_DODGE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.COLOR_BURN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.HARD_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.SOFT_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.DIFFERENCE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.EXCLUSION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.HUE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.SATURATION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.COLOR]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.LUMINOSITY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.NONE]=[0,0],t[i.BLEND_MODES.NORMAL_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.ADD_NPM]=[e.SRC_ALPHA,e.ONE,e.ONE,e.ONE],t[i.BLEND_MODES.SCREEN_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.SRC_IN]=[e.DST_ALPHA,e.ZERO],t[i.BLEND_MODES.SRC_OUT]=[e.ONE_MINUS_DST_ALPHA,e.ZERO],t[i.BLEND_MODES.SRC_ATOP]=[e.DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.DST_OVER]=[e.ONE_MINUS_DST_ALPHA,e.ONE],t[i.BLEND_MODES.DST_IN]=[e.ZERO,e.SRC_ALPHA],t[i.BLEND_MODES.DST_OUT]=[e.ZERO,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.DST_ATOP]=[e.ONE_MINUS_DST_ALPHA,e.SRC_ALPHA],t[i.BLEND_MODES.XOR]=[e.ONE_MINUS_DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],t[i.BLEND_MODES.SUBTRACT]=[e.ONE,e.ONE,e.ONE,e.ONE,e.FUNC_REVERSE_SUBTRACT,e.FUNC_ADD],t}}),a("64vl1",function(r,i){e(r.exports,"SystemManager",()=>o),n("A1ho4");var s=n("lmeMj");n("MiLFw");var a=n("1PbQI");class o extends /*@__PURE__*/t(a){constructor(){super(...arguments),this.runners={},this._systemsHash={}}/**
   * Set up a system with a collection of SystemClasses and runners.
   * Systems are attached dynamically to this class when added.
   * @param config - the config for the system manager
   */setup(e){this.addRunners(...e.runners);let t=(e.priority??[]).filter(t=>e.systems[t]),r=[...t,...Object.keys(e.systems).filter(e=>!t.includes(e))];for(let t of r)this.addSystem(e.systems[t],t)}/**
   * Create a bunch of runners based of a collection of ids
   * @param runnerIds - the runner ids to add
   */addRunners(...e){e.forEach(e=>{this.runners[e]=new s.Runner(e)})}/**
   * Add a new system to the renderer.
   * @param ClassRef - Class reference
   * @param name - Property name for system, if not specified
   *        will use a static `name` property on the class itself. This
   *        name will be assigned as s property on the Renderer so make
   *        sure it doesn't collide with properties on Renderer.
   * @returns Return instance of renderer
   */addSystem(e,t){let r=new e(this);if(this[t])throw Error(`Whoops! The name "${t}" is already in use`);for(let e in this[t]=r,this._systemsHash[t]=r,this.runners)this.runners[e].add(r);return this}/**
   * A function that will run a runner and call the runners function but pass in different options
   * to each system based on there name.
   *
   * E.g. If you have two systems added called `systemA` and `systemB` you could call do the following:
   *
   * ```js
   * system.emitWithCustomOptions(init, {
   *     systemA: {...optionsForA},
   *     systemB: {...optionsForB},
   * });
   * ```
   *
   * `init` would be called on system A passing `optionsForA` and on system B passing `optionsForB`.
   * @param runner - the runner to target
   * @param options - key value options for each system
   */emitWithCustomOptions(e,t){let r=Object.keys(this._systemsHash);e.items.forEach(i=>{let s=r.find(e=>this._systemsHash[e]===i);i[e.name](t[s])})}/** destroy the all runners and systems. Its apps job to */destroy(){Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash={}}}}),a("9WJQp",function(t,r){e(t.exports,"TextureGCSystem",()=>o);var i=n("jetUE"),s=n("glXXo");let a=class e{/** @param renderer - The renderer this System works for. */constructor(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=e.defaultMaxIdle,this.checkCountMax=e.defaultCheckCountMax,this.mode=e.defaultMode}/**
   * Checks to see when the last time a texture was used.
   * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
   */postrender(){this.renderer.objectRenderer.renderingToScreen&&(this.count++,this.mode!==i.GC_MODES.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}/**
   * Checks to see when the last time a texture was used.
   * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
   */run(){let e=this.renderer.texture,t=e.managedTextures,r=!1;for(let i=0;i<t.length;i++){let s=t[i];s.resource&&this.count-s.touched>this.maxIdle&&(e.destroyTexture(s,!0),t[i]=null,r=!0)}if(r){let e=0;for(let r=0;r<t.length;r++)null!==t[r]&&(t[e++]=t[r]);t.length=e}}/**
   * Removes all the textures within the specified displayObject and its children from the GPU.
   * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
   */unload(e){let t=this.renderer.texture,r=e._texture;r&&!r.framebuffer&&t.destroyTexture(r);for(let t=e.children.length-1;t>=0;t--)this.unload(e.children[t])}destroy(){this.renderer=null}};a.defaultMode=i.GC_MODES.AUTO,/**
* Default maximum idle frames before a texture is destroyed by garbage collection.
* @static
* @default 3600
* @see PIXI.TextureGCSystem#maxIdle
*/a.defaultMaxIdle=3600,/**
* Default frames between two garbage collections.
* @static
* @default 600
* @see PIXI.TextureGCSystem#checkCountMax
*/a.defaultCheckCountMax=600,/** @ignore */a.extension={type:s.ExtensionType.RendererSystem,name:"textureGC"};let o=a;(0,s.extensions).add(o)}),a("3P6PW",function(e,t){var r=n("jetUE"),i=n("glXXo");n("MiLFw");var s=n("ccZ4r"),a=n("2Am4Q"),o=n("4w9q7"),l=n("f7kd1"),h=n("25TZy");class u{/**
   * @param renderer - The renderer this system works for.
   */constructor(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new a.BaseTexture,this.hasIntegerTextures=!1}/** Sets up the renderer context and necessary buffers. */contextChange(){let e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=(0,h.mapTypeAndFormatToInternalFormat)(e),this.samplerTypes=(0,l.mapInternalFormatToSamplerType)(e);let t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(let e=0;e<t;e++)this.boundTextures[e]=null;this.emptyTextures={};let r=new o.GLTexture(e.createTexture());e.bindTexture(e.TEXTURE_2D,r.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=r,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new o.GLTexture(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(let t=0;t<6;t++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(let e=0;e<this.boundTextures.length;e++)this.bind(null,e)}/**
   * Bind a texture to a specific location
   *
   * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
   * @param texture - Texture to bind
   * @param [location=0] - Location to bind at
   */bind(e,t=0){let{gl:r}=this;if(e=e?.castToBaseTexture(),e?.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;let i=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),r.bindTexture(e.target,i.texture)),i.dirtyId!==e.dirtyId?(this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),this.updateTexture(e)):i.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(e),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,r.activeTexture(r.TEXTURE0+t)),r.bindTexture(r.TEXTURE_2D,this.emptyTextures[r.TEXTURE_2D].texture),this.boundTextures[t]=null}/** Resets texture location and bound textures Actual `bind(null, i)` calls will be performed at next `unbind()` call */reset(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(let e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture}/**
   * Unbind a texture.
   * @param texture - Texture to bind
   */unbind(e){let{gl:t,boundTextures:r}=this;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(let e=0;e<r.length;e++)r[e]===this.unknownTexture&&this.bind(null,e)}for(let i=0;i<r.length;i++)r[i]===e&&(this.currentLocation!==i&&(t.activeTexture(t.TEXTURE0+i),this.currentLocation=i),t.bindTexture(e.target,this.emptyTextures[e.target].texture),r[i]=null)}/**
   * Ensures that current boundTextures all have FLOAT sampler type,
   * see {@link PIXI.SAMPLER_TYPES} for explanation.
   * @param maxTextures - number of locations to check
   */ensureSamplerType(e){let{boundTextures:t,hasIntegerTextures:i,CONTEXT_UID:s}=this;if(i)for(let i=e-1;i>=0;--i){let e=t[i];e&&e._glTextures[s].samplerType!==r.SAMPLER_TYPES.FLOAT&&this.renderer.texture.unbind(e)}}/**
   * Initialize a texture
   * @private
   * @param texture - Texture to initialize
   */initTexture(e){let t=new o.GLTexture(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t}initTextureType(e,t){t.internalFormat=this.internalFormats[e.type]?.[e.format]??e.format,t.samplerType=this.samplerTypes[t.internalFormat]??r.SAMPLER_TYPES.FLOAT,2===this.webGLVersion&&e.type===r.TYPES.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type}/**
   * Update a texture
   * @private
   * @param {PIXI.BaseTexture} texture - Texture to initialize
   */updateTexture(e){let t=e._glTextures[this.CONTEXT_UID];if(!t)return;let i=this.renderer;if(this.initTextureType(e,t),e.resource?.upload(i,e,t))t.samplerType!==r.SAMPLER_TYPES.FLOAT&&(this.hasIntegerTextures=!0);else{let r=e.realWidth,s=e.realHeight,n=i.gl;(t.width!==r||t.height!==s||t.dirtyId<0)&&(t.width=r,t.height=s,n.texImage2D(e.target,0,t.internalFormat,r,s,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}/**
   * Deletes the texture from WebGL
   * @private
   * @param texture - the texture to destroy
   * @param [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
   */destroyTexture(e,t){let{gl:r}=this;if((e=e.castToBaseTexture())._glTextures[this.CONTEXT_UID]&&(this.unbind(e),r.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){let t=this.managedTextures.indexOf(e);-1!==t&&(0,s.removeItems)(this.managedTextures,t,1)}}/**
   * Update texture style such as mipmap flag
   * @private
   * @param {PIXI.BaseTexture} texture - Texture to update
   */updateTextureStyle(e){let t=e._glTextures[this.CONTEXT_UID];t&&(e.mipmap!==r.MIPMAP_MODES.POW2&&2===this.webGLVersion||e.isPowerOfTwo?t.mipmap=e.mipmap>=1:t.mipmap=!1,2===this.webGLVersion||e.isPowerOfTwo?t.wrapMode=e.wrapMode:t.wrapMode=r.WRAP_MODES.CLAMP,e.resource?.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)}/**
   * Set style for texture
   * @private
   * @param texture - Texture to update
   * @param glTexture
   */setStyle(e,t){let i=this.gl;if(t.mipmap&&e.mipmap!==r.MIPMAP_MODES.ON_MANUAL&&i.generateMipmap(e.target),i.texParameteri(e.target,i.TEXTURE_WRAP_S,t.wrapMode),i.texParameteri(e.target,i.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===r.SCALE_MODES.LINEAR?i.LINEAR_MIPMAP_LINEAR:i.NEAREST_MIPMAP_NEAREST);let t=this.renderer.context.extensions.anisotropicFiltering;if(t&&e.anisotropicLevel>0&&e.scaleMode===r.SCALE_MODES.LINEAR){let r=Math.min(e.anisotropicLevel,i.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT));i.texParameterf(e.target,t.TEXTURE_MAX_ANISOTROPY_EXT,r)}}else i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===r.SCALE_MODES.LINEAR?i.LINEAR:i.NEAREST);i.texParameteri(e.target,i.TEXTURE_MAG_FILTER,e.scaleMode===r.SCALE_MODES.LINEAR?i.LINEAR:i.NEAREST)}destroy(){this.renderer=null}}u.extension={type:i.ExtensionType.RendererSystem,name:"texture"},(0,i.extensions).add(u)}),a("4w9q7",function(t,r){e(t.exports,"GLTexture",()=>s);var i=n("jetUE");class s{constructor(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=i.TYPES.UNSIGNED_BYTE,this.internalFormat=i.FORMATS.RGBA,this.samplerType=0}}}),a("f7kd1",function(t,r){e(t.exports,"mapInternalFormatToSamplerType",()=>s);var i=n("jetUE");function s(e){return"WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext?{[e.RGB]:i.SAMPLER_TYPES.FLOAT,[e.RGBA]:i.SAMPLER_TYPES.FLOAT,[e.ALPHA]:i.SAMPLER_TYPES.FLOAT,[e.LUMINANCE]:i.SAMPLER_TYPES.FLOAT,[e.LUMINANCE_ALPHA]:i.SAMPLER_TYPES.FLOAT,[e.R8]:i.SAMPLER_TYPES.FLOAT,[e.R8_SNORM]:i.SAMPLER_TYPES.FLOAT,[e.RG8]:i.SAMPLER_TYPES.FLOAT,[e.RG8_SNORM]:i.SAMPLER_TYPES.FLOAT,[e.RGB8]:i.SAMPLER_TYPES.FLOAT,[e.RGB8_SNORM]:i.SAMPLER_TYPES.FLOAT,[e.RGB565]:i.SAMPLER_TYPES.FLOAT,[e.RGBA4]:i.SAMPLER_TYPES.FLOAT,[e.RGB5_A1]:i.SAMPLER_TYPES.FLOAT,[e.RGBA8]:i.SAMPLER_TYPES.FLOAT,[e.RGBA8_SNORM]:i.SAMPLER_TYPES.FLOAT,[e.RGB10_A2]:i.SAMPLER_TYPES.FLOAT,[e.RGB10_A2UI]:i.SAMPLER_TYPES.FLOAT,[e.SRGB8]:i.SAMPLER_TYPES.FLOAT,[e.SRGB8_ALPHA8]:i.SAMPLER_TYPES.FLOAT,[e.R16F]:i.SAMPLER_TYPES.FLOAT,[e.RG16F]:i.SAMPLER_TYPES.FLOAT,[e.RGB16F]:i.SAMPLER_TYPES.FLOAT,[e.RGBA16F]:i.SAMPLER_TYPES.FLOAT,[e.R32F]:i.SAMPLER_TYPES.FLOAT,[e.RG32F]:i.SAMPLER_TYPES.FLOAT,[e.RGB32F]:i.SAMPLER_TYPES.FLOAT,[e.RGBA32F]:i.SAMPLER_TYPES.FLOAT,[e.R11F_G11F_B10F]:i.SAMPLER_TYPES.FLOAT,[e.RGB9_E5]:i.SAMPLER_TYPES.FLOAT,[e.R8I]:i.SAMPLER_TYPES.INT,[e.R8UI]:i.SAMPLER_TYPES.UINT,[e.R16I]:i.SAMPLER_TYPES.INT,[e.R16UI]:i.SAMPLER_TYPES.UINT,[e.R32I]:i.SAMPLER_TYPES.INT,[e.R32UI]:i.SAMPLER_TYPES.UINT,[e.RG8I]:i.SAMPLER_TYPES.INT,[e.RG8UI]:i.SAMPLER_TYPES.UINT,[e.RG16I]:i.SAMPLER_TYPES.INT,[e.RG16UI]:i.SAMPLER_TYPES.UINT,[e.RG32I]:i.SAMPLER_TYPES.INT,[e.RG32UI]:i.SAMPLER_TYPES.UINT,[e.RGB8I]:i.SAMPLER_TYPES.INT,[e.RGB8UI]:i.SAMPLER_TYPES.UINT,[e.RGB16I]:i.SAMPLER_TYPES.INT,[e.RGB16UI]:i.SAMPLER_TYPES.UINT,[e.RGB32I]:i.SAMPLER_TYPES.INT,[e.RGB32UI]:i.SAMPLER_TYPES.UINT,[e.RGBA8I]:i.SAMPLER_TYPES.INT,[e.RGBA8UI]:i.SAMPLER_TYPES.UINT,[e.RGBA16I]:i.SAMPLER_TYPES.INT,[e.RGBA16UI]:i.SAMPLER_TYPES.UINT,[e.RGBA32I]:i.SAMPLER_TYPES.INT,[e.RGBA32UI]:i.SAMPLER_TYPES.UINT,[e.DEPTH_COMPONENT16]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH_COMPONENT24]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH_COMPONENT32F]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH_STENCIL]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH24_STENCIL8]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH32F_STENCIL8]:i.SAMPLER_TYPES.FLOAT}:{[e.RGB]:i.SAMPLER_TYPES.FLOAT,[e.RGBA]:i.SAMPLER_TYPES.FLOAT,[e.ALPHA]:i.SAMPLER_TYPES.FLOAT,[e.LUMINANCE]:i.SAMPLER_TYPES.FLOAT,[e.LUMINANCE_ALPHA]:i.SAMPLER_TYPES.FLOAT,[e.DEPTH_STENCIL]:i.SAMPLER_TYPES.FLOAT}}}),a("25TZy",function(t,r){e(t.exports,"mapTypeAndFormatToInternalFormat",()=>s);var i=n("jetUE");function s(e){return"WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext?{[i.TYPES.UNSIGNED_BYTE]:{[i.FORMATS.RGBA]:e.RGBA8,[i.FORMATS.RGB]:e.RGB8,[i.FORMATS.RG]:e.RG8,[i.FORMATS.RED]:e.R8,[i.FORMATS.RGBA_INTEGER]:e.RGBA8UI,[i.FORMATS.RGB_INTEGER]:e.RGB8UI,[i.FORMATS.RG_INTEGER]:e.RG8UI,[i.FORMATS.RED_INTEGER]:e.R8UI,[i.FORMATS.ALPHA]:e.ALPHA,[i.FORMATS.LUMINANCE]:e.LUMINANCE,[i.FORMATS.LUMINANCE_ALPHA]:e.LUMINANCE_ALPHA},[i.TYPES.BYTE]:{[i.FORMATS.RGBA]:e.RGBA8_SNORM,[i.FORMATS.RGB]:e.RGB8_SNORM,[i.FORMATS.RG]:e.RG8_SNORM,[i.FORMATS.RED]:e.R8_SNORM,[i.FORMATS.RGBA_INTEGER]:e.RGBA8I,[i.FORMATS.RGB_INTEGER]:e.RGB8I,[i.FORMATS.RG_INTEGER]:e.RG8I,[i.FORMATS.RED_INTEGER]:e.R8I},[i.TYPES.UNSIGNED_SHORT]:{[i.FORMATS.RGBA_INTEGER]:e.RGBA16UI,[i.FORMATS.RGB_INTEGER]:e.RGB16UI,[i.FORMATS.RG_INTEGER]:e.RG16UI,[i.FORMATS.RED_INTEGER]:e.R16UI,[i.FORMATS.DEPTH_COMPONENT]:e.DEPTH_COMPONENT16},[i.TYPES.SHORT]:{[i.FORMATS.RGBA_INTEGER]:e.RGBA16I,[i.FORMATS.RGB_INTEGER]:e.RGB16I,[i.FORMATS.RG_INTEGER]:e.RG16I,[i.FORMATS.RED_INTEGER]:e.R16I},[i.TYPES.UNSIGNED_INT]:{[i.FORMATS.RGBA_INTEGER]:e.RGBA32UI,[i.FORMATS.RGB_INTEGER]:e.RGB32UI,[i.FORMATS.RG_INTEGER]:e.RG32UI,[i.FORMATS.RED_INTEGER]:e.R32UI,[i.FORMATS.DEPTH_COMPONENT]:e.DEPTH_COMPONENT24},[i.TYPES.INT]:{[i.FORMATS.RGBA_INTEGER]:e.RGBA32I,[i.FORMATS.RGB_INTEGER]:e.RGB32I,[i.FORMATS.RG_INTEGER]:e.RG32I,[i.FORMATS.RED_INTEGER]:e.R32I},[i.TYPES.FLOAT]:{[i.FORMATS.RGBA]:e.RGBA32F,[i.FORMATS.RGB]:e.RGB32F,[i.FORMATS.RG]:e.RG32F,[i.FORMATS.RED]:e.R32F,[i.FORMATS.DEPTH_COMPONENT]:e.DEPTH_COMPONENT32F},[i.TYPES.HALF_FLOAT]:{[i.FORMATS.RGBA]:e.RGBA16F,[i.FORMATS.RGB]:e.RGB16F,[i.FORMATS.RG]:e.RG16F,[i.FORMATS.RED]:e.R16F},[i.TYPES.UNSIGNED_SHORT_5_6_5]:{[i.FORMATS.RGB]:e.RGB565},[i.TYPES.UNSIGNED_SHORT_4_4_4_4]:{[i.FORMATS.RGBA]:e.RGBA4},[i.TYPES.UNSIGNED_SHORT_5_5_5_1]:{[i.FORMATS.RGBA]:e.RGB5_A1},[i.TYPES.UNSIGNED_INT_2_10_10_10_REV]:{[i.FORMATS.RGBA]:e.RGB10_A2,[i.FORMATS.RGBA_INTEGER]:e.RGB10_A2UI},[i.TYPES.UNSIGNED_INT_10F_11F_11F_REV]:{[i.FORMATS.RGB]:e.R11F_G11F_B10F},[i.TYPES.UNSIGNED_INT_5_9_9_9_REV]:{[i.FORMATS.RGB]:e.RGB9_E5},[i.TYPES.UNSIGNED_INT_24_8]:{[i.FORMATS.DEPTH_STENCIL]:e.DEPTH24_STENCIL8},[i.TYPES.FLOAT_32_UNSIGNED_INT_24_8_REV]:{[i.FORMATS.DEPTH_STENCIL]:e.DEPTH32F_STENCIL8}}:{[i.TYPES.UNSIGNED_BYTE]:{[i.FORMATS.RGBA]:e.RGBA,[i.FORMATS.RGB]:e.RGB,[i.FORMATS.ALPHA]:e.ALPHA,[i.FORMATS.LUMINANCE]:e.LUMINANCE,[i.FORMATS.LUMINANCE_ALPHA]:e.LUMINANCE_ALPHA},[i.TYPES.UNSIGNED_SHORT_5_6_5]:{[i.FORMATS.RGB]:e.RGB},[i.TYPES.UNSIGNED_SHORT_4_4_4_4]:{[i.FORMATS.RGBA]:e.RGBA},[i.TYPES.UNSIGNED_SHORT_5_5_5_1]:{[i.FORMATS.RGBA]:e.RGBA}}}}),a("2ebp7",function(e,t){var r=n("glXXo");class i{/**
   * @param renderer - The renderer this System works for.
   */constructor(e){this.renderer=e}/** Sets up the renderer context and necessary buffers. */contextChange(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}/**
   * Bind TransformFeedback and buffers
   * @param transformFeedback - TransformFeedback to bind
   */bind(e){let{gl:t,CONTEXT_UID:r}=this,i=e._glTransformFeedbacks[r]||this.createGLTransformFeedback(e);t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,i)}/** Unbind TransformFeedback */unbind(){let{gl:e}=this;e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null)}/**
   * Begin TransformFeedback
   * @param drawMode - DrawMode for TransformFeedback
   * @param shader - A Shader used by TransformFeedback. Current bound shader will be used if not provided.
   */beginTransformFeedback(e,t){let{gl:r,renderer:i}=this;t&&i.shader.bind(t),r.beginTransformFeedback(e)}/** End TransformFeedback */endTransformFeedback(){let{gl:e}=this;e.endTransformFeedback()}/**
   * Create TransformFeedback and bind buffers
   * @param tf - TransformFeedback
   * @returns WebGLTransformFeedback
   */createGLTransformFeedback(e){let{gl:t,renderer:r,CONTEXT_UID:i}=this,s=t.createTransformFeedback();e._glTransformFeedbacks[i]=s,t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,s);for(let s=0;s<e.buffers.length;s++){let n=e.buffers[s];n&&(r.buffer.update(n),n._glBuffers[i].refCount++,t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,s,n._glBuffers[i].buffer||null))}return t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null),e.disposeRunner.add(this),s}/**
   * Disposes TransfromFeedback
   * @param {PIXI.TransformFeedback} tf - TransformFeedback
   * @param {boolean} [contextLost=false] - If context was lost, we suppress delete TransformFeedback
   */disposeTransformFeedback(e,t){let r=e._glTransformFeedbacks[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this);let s=this.renderer.buffer;if(s)for(let r=0;r<e.buffers.length;r++){let i=e.buffers[r];if(!i)continue;let n=i._glBuffers[this.CONTEXT_UID];n&&(n.refCount--,0!==n.refCount||t||s.dispose(i,t))}r&&(t||i.deleteTransformFeedback(r),delete e._glTransformFeedbacks[this.CONTEXT_UID])}destroy(){this.renderer=null}}i.extension={type:r.ExtensionType.RendererSystem,name:"transformFeedback"},(0,r.extensions).add(i)}),a("cLqYk",function(t,r){e(t.exports,"ViewSystem",()=>o);var i=n("glXXo");n("a1P4O");var s=n("6OnST");n("iEiSW");var a=n("8oqCw");class o{constructor(e){this.renderer=e}/**
   * initiates the view system
   * @param {PIXI.ViewOptions} options - the options for the view
   */init(e){this.screen=new s.Rectangle(0,0,e.width,e.height),this.element=e.view||(0,a.settings).ADAPTER.createCanvas(),this.resolution=e.resolution||a.settings.RESOLUTION,this.autoDensity=!!e.autoDensity}/**
   * Resizes the screen and canvas to the specified dimensions.
   * @param desiredScreenWidth - The new width of the screen.
   * @param desiredScreenHeight - The new height of the screen.
   */resizeView(e,t){this.element.width=Math.round(e*this.resolution),this.element.height=Math.round(t*this.resolution);let r=this.element.width/this.resolution,i=this.element.height/this.resolution;this.screen.width=r,this.screen.height=i,this.autoDensity&&(this.element.style.width=`${r}px`,this.element.style.height=`${i}px`),this.renderer.emit("resize",r,i),this.renderer.runners.resize.emit(this.screen.width,this.screen.height)}/**
   * Destroys this System and optionally removes the canvas from the dom.
   * @param {boolean} [removeView=false] - Whether to remove the canvas from the DOM.
   */destroy(e){e&&this.element.parentNode?.removeChild(this.element),this.renderer=null,this.element=null,this.screen=null}}o.defaultOptions={/**
   * {@link PIXI.IRendererOptions.width}
   * @default 800
   * @memberof PIXI.settings.RENDER_OPTIONS
   */width:800,/**
   * {@link PIXI.IRendererOptions.height}
   * @default 600
   * @memberof PIXI.settings.RENDER_OPTIONS
   */height:600,/**
   * {@link PIXI.IRendererOptions.resolution}
   * @type {number}
   * @default PIXI.settings.RESOLUTION
   * @memberof PIXI.settings.RENDER_OPTIONS
   */resolution:void 0,/**
   * {@link PIXI.IRendererOptions.autoDensity}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */autoDensity:!1},/** @ignore */o.extension={type:[i.ExtensionType.RendererSystem,i.ExtensionType.CanvasRendererSystem],name:"_view"},(0,i.extensions).add(o)}),a("bP1xa",function(t,r){e(t.exports,"Ticker",()=>n("54AzN").Ticker),e(t.exports,"UPDATE_PRIORITY",()=>n("g7L3i").UPDATE_PRIORITY),n("7iJti"),n("g7L3i"),n("54AzN"),n("b7Ub4")}),a("7iJti",function(e,t){n("iEiSW");var r=n("8oqCw");n("MiLFw");var i=n("k9Wja"),s=n("54AzN");Object.defineProperties(r.settings,{/**
   * Target frames per millisecond.
   * @static
   * @name TARGET_FPMS
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.Ticker.targetFPMS
   */TARGET_FPMS:{get:()=>s.Ticker.targetFPMS,set(e){(0,i.deprecation)("7.1.0","settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),s.Ticker.targetFPMS=e}}})}),a("54AzN",function(t,r){e(t.exports,"Ticker",()=>o);var i=n("g7L3i"),s=n("cNfNo");let a=class e{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new s.TickerListener(null,null,1/0),this.deltaMS=1/e.targetFPMS,this.elapsedMS=1/e.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&null===this._requestId&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}/**
   * Conditionally requests a new animation frame.
   * If a frame has not already been requested, and if the internal
   * emitter has listeners, a new frame is requested.
   * @private
   */_requestIfNeeded(){null===this._requestId&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}/**
   * Conditionally cancels a pending animation frame.
   * @private
   */_cancelIfNeeded(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)}/**
   * Conditionally requests a new animation frame.
   * If the ticker has been started it checks if a frame has not already
   * been requested, and if the internal emitter has listeners. If these
   * conditions are met, a new frame is requested. If the ticker has not
   * been started, but autoStart is `true`, then the ticker starts now,
   * and continues with the previous conditions to request a new frame.
   * @private
   */_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}/**
   * Register a handler for tick events. Calls continuously unless
   * it is removed or the ticker is stopped.
   * @param fn - The listener function to be added for updates
   * @param context - The listener context
   * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */add(e,t,r=i.UPDATE_PRIORITY.NORMAL){return this._addListener(new s.TickerListener(e,t,r))}/**
   * Add a handler for the tick event which is only execute once.
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */addOnce(e,t,r=i.UPDATE_PRIORITY.NORMAL){return this._addListener(new s.TickerListener(e,t,r,!0))}/**
   * Internally adds the event handler so that it can be sorted by priority.
   * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
   * before the rendering.
   * @private
   * @param listener - Current listener being added.
   * @returns This instance of a ticker
   */_addListener(e){let t=this._head.next,r=this._head;if(t){for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}else e.connect(r);return this._startIfPossible(),this}/**
   * Removes any handlers matching the function and context parameters.
   * If no handlers are left after removing, then it cancels the animation frame.
   * @param fn - The listener function to be removed
   * @param context - The listener context to be removed
   * @returns This instance of a ticker
   */remove(e,t){let r=this._head.next;for(;r;)r=r.match(e,t)?r.destroy():r.next;return this._head.next||this._cancelIfNeeded(),this}/**
   * The number of listeners on this ticker, calculated by walking through linked list
   * @readonly
   * @member {number}
   */get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}/** Starts the ticker. If the ticker has listeners a new animation frame is requested at this point. */start(){this.started||(this.started=!0,this._requestIfNeeded())}/** Stops the ticker. If the ticker has requested an animation frame it is canceled at this point. */stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}/** Destroy the ticker and don't use after this. Calling this method removes all references to internal events. */destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}/**
   * Triggers an update. An update entails setting the
   * current {@link PIXI.Ticker#elapsedMS},
   * the current {@link PIXI.Ticker#deltaTime},
   * invoking all listeners with current deltaTime,
   * and then finally setting {@link PIXI.Ticker#lastTime}
   * with the value of currentTime that was provided.
   * This method will be called automatically by animation
   * frame callbacks if the ticker instance has been started
   * and listeners are added.
   * @param {number} [currentTime=performance.now()] - the current time of execution
   */update(t=performance.now()){let r;if(t>this.lastTime){if((r=this.elapsedMS=t-this.lastTime)>this._maxElapsedMS&&(r=this._maxElapsedMS),r*=this.speed,this._minElapsedMS){let e=t-this._lastFrame|0;if(e<this._minElapsedMS)return;this._lastFrame=t-e%this._minElapsedMS}this.deltaMS=r,this.deltaTime=this.deltaMS*e.targetFPMS;let i=this._head,s=i.next;for(;s;)s=s.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}/**
   * The frames per second at which this ticker is running.
   * The default is approximately 60 in most modern browsers.
   * **Note:** This does not factor in the value of
   * {@link PIXI.Ticker#speed}, which is specific
   * to scaling {@link PIXI.Ticker#deltaTime}.
   * @member {number}
   * @readonly
   */get FPS(){return 1e3/this.elapsedMS}/**
   * Manages the maximum amount of milliseconds allowed to
   * elapse between invoking {@link PIXI.Ticker#update}.
   * This value is used to cap {@link PIXI.Ticker#deltaTime},
   * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
   * When setting this property it is clamped to a value between
   * `0` and `Ticker.targetFPMS * 1000`.
   * @member {number}
   * @default 10
   */get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){let r=Math.min(this.maxFPS,t),i=Math.min(Math.max(0,r)/1e3,e.targetFPMS);this._maxElapsedMS=1/i}/**
   * Manages the minimum amount of milliseconds required to
   * elapse between invoking {@link PIXI.Ticker#update}.
   * This will effect the measured value of {@link PIXI.Ticker#FPS}.
   * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
   * Otherwise it will be at least `minFPS`
   * @member {number}
   * @default 0
   */get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(0===e)this._minElapsedMS=0;else{let t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}/**
   * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
   * {@link PIXI.VideoResource} to update animation frames / video textures.
   *
   * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
   *
   * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
   * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
   * @example
   * import { Ticker } from 'pixi.js';
   *
   * const ticker = Ticker.shared;
   * // Set this to prevent starting this ticker when listeners are added.
   * // By default this is true only for the PIXI.Ticker.shared instance.
   * ticker.autoStart = false;
   *
   * // FYI, call this to ensure the ticker is stopped. It should be stopped
   * // if you have not attempted to render anything yet.
   * ticker.stop();
   *
   * // Call this when you are ready for a running shared ticker.
   * ticker.start();
   * @example
   * import { autoDetectRenderer, Container } from 'pixi.js';
   *
   * // You may use the shared ticker to render...
   * const renderer = autoDetectRenderer();
   * const stage = new Container();
   * document.body.appendChild(renderer.view);
   * ticker.add((time) => renderer.render(stage));
   *
   * // Or you can just update it manually.
   * ticker.autoStart = false;
   * ticker.stop();
   * const animate = (time) => {
   *     ticker.update(time);
   *     renderer.render(stage);
   *     requestAnimationFrame(animate);
   * };
   * animate(performance.now());
   * @member {PIXI.Ticker}
   * @static
   */static get shared(){if(!e._shared){let t=e._shared=new e;t.autoStart=!0,t._protected=!0}return e._shared}/**
   * The system ticker instance used by {@link PIXI.BasePrepare} for core timing
   * functionality that shouldn't usually need to be paused, unlike the `shared`
   * ticker which drives visual animations and rendering which may want to be paused.
   *
   * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
   * @member {PIXI.Ticker}
   * @static
   */static get system(){if(!e._system){let t=e._system=new e;t.autoStart=!0,t._protected=!0}return e._system}};a.targetFPMS=.06;let o=a}),a("g7L3i",function(t,r){e(t.exports,"UPDATE_PRIORITY",()=>s);var i,s=((i=s||{})[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY",i)}),a("cNfNo",function(t,r){e(t.exports,"TickerListener",()=>i);class i{/**
   * Constructor
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting
   * @param once - If the handler should fire once
   */constructor(e,t=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=r,this.once=i}/**
   * Simple compare function to figure out if a function and context match.
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @returns `true` if the listener match the arguments
   */match(e,t=null){return this.fn===e&&this.context===t}/**
   * Emit by calling the current function.
   * @private
   * @param deltaTime - time since the last emit.
   * @returns Next ticker
   */emit(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));let t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t}/**
   * Connect to the list.
   * @private
   * @param previous - Input node, previous listener
   */connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}/**
   * Destroy and don't use after this.
   * @private
   * @param hard - `true` to remove the `next` reference, this
   *        is considered a hard destroy. Soft destroy maintains the next reference.
   * @returns The listener to redirect while emitting or removing.
   */destroy(e=!1){this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);let t=this.next;return this.next=e?null:t,this.previous=null,t}}}),a("b7Ub4",function(e,t){var r=n("glXXo"),i=n("g7L3i"),s=n("54AzN");class a{/**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,i.UPDATE_PRIORITY.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?s.Ticker.shared:new s.Ticker,e.autoStart&&this.start()}/**
   * Clean up the ticker, scoped to application.
   * @static
   * @private
   */static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}}a.extension=r.ExtensionType.Application,(0,r.extensions).add(a)}),a("fRY25",function(t,r){e(t.exports,"autoDetectRenderer",()=>a);var i=n("glXXo");let s=[];function a(e){for(let t of s)if(t.test(e))return new t(e);throw Error("Unable to auto-detect a suitable renderer.")}(0,i.extensions).handleByList(i.ExtensionType.Renderer,s)}),a("4z7SM",function(e,t){}),a("cG6vK",function(t,r){e(t.exports,"defaultVertex",()=>a),e(t.exports,"defaultFilterVertex",()=>o);var i=n("3E6B7"),s=n("f4uw0");let a=i.default,o=s.default}),a("3E6B7",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`}),a("f4uw0",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`}),a("9dwwg",function(e,t){var r=n("jetUE"),i=n("glXXo");class s{constructor(e){this.renderer=e}contextChange(e){let t;if(1===this.renderer.context.webGLVersion){let r=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),t=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,r)}else{let r=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),t=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,r)}t>=r.MSAA_QUALITY.HIGH?this.multisample=r.MSAA_QUALITY.HIGH:t>=r.MSAA_QUALITY.MEDIUM?this.multisample=r.MSAA_QUALITY.MEDIUM:t>=r.MSAA_QUALITY.LOW?this.multisample=r.MSAA_QUALITY.LOW:this.multisample=r.MSAA_QUALITY.NONE}destroy(){}}s.extension={type:i.ExtensionType.RendererSystem,name:"_multisample"},(0,i.extensions).add(s)}),a("kjfBg",function(e,t){var r=n("glXXo"),i=n("7nKoG");class s{/**
   * @param {PIXI.Renderer} renderer - The renderer this System works for.
   */constructor(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}/**
   * @ignore
   */destroy(){this.renderer=null}/** Sets up the renderer context and necessary buffers. */contextChange(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}/**
   * This binds specified buffer. On first run, it will create the webGL buffers for the context too
   * @param buffer - the buffer to bind to the renderer
   */bind(e){let{gl:t,CONTEXT_UID:r}=this,i=e._glBuffers[r]||this.createGLBuffer(e);t.bindBuffer(e.type,i.buffer)}unbind(e){let{gl:t}=this;t.bindBuffer(e,null)}/**
   * Binds an uniform buffer to at the given index.
   *
   * A cache is used so a buffer will not be bound again if already bound.
   * @param buffer - the buffer to bind
   * @param index - the base index to bind it to.
   */bindBufferBase(e,t){let{gl:r,CONTEXT_UID:i}=this;if(this.boundBufferBases[t]!==e){let s=e._glBuffers[i]||this.createGLBuffer(e);this.boundBufferBases[t]=e,r.bindBufferBase(r.UNIFORM_BUFFER,t,s.buffer)}}/**
   * Binds a buffer whilst also binding its range.
   * This will make the buffer start from the offset supplied rather than 0 when it is read.
   * @param buffer - the buffer to bind
   * @param index - the base index to bind at, defaults to 0
   * @param offset - the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc
   */bindBufferRange(e,t,r){let{gl:i,CONTEXT_UID:s}=this;r=r||0;let n=e._glBuffers[s]||this.createGLBuffer(e);i.bindBufferRange(i.UNIFORM_BUFFER,t||0,n.buffer,256*r,256)}/**
   * Will ensure the data in the buffer is uploaded to the GPU.
   * @param {PIXI.Buffer} buffer - the buffer to update
   */update(e){let{gl:t,CONTEXT_UID:r}=this,i=e._glBuffers[r]||this.createGLBuffer(e);if(e._updateID!==i.updateID){if(i.updateID=e._updateID,t.bindBuffer(e.type,i.buffer),i.byteLength>=e.data.byteLength)t.bufferSubData(e.type,0,e.data);else{let r=e.static?t.STATIC_DRAW:t.DYNAMIC_DRAW;i.byteLength=e.data.byteLength,t.bufferData(e.type,e.data,r)}}}/**
   * Disposes buffer
   * @param {PIXI.Buffer} buffer - buffer with data
   * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
   */dispose(e,t){if(!this.managedBuffers[e.id])return;delete this.managedBuffers[e.id];let r=e._glBuffers[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this),r&&(t||i.deleteBuffer(r.buffer),delete e._glBuffers[this.CONTEXT_UID])}/**
   * dispose all WebGL resources of all managed buffers
   * @param {boolean} [contextLost=false] - If context was lost, we suppress `gl.delete` calls
   */disposeAll(e){let t=Object.keys(this.managedBuffers);for(let r=0;r<t.length;r++)this.dispose(this.managedBuffers[t[r]],e)}/**
   * creates and attaches a GLBuffer object tied to the current context.
   * @param buffer
   * @protected
   */createGLBuffer(e){let{CONTEXT_UID:t,gl:r}=this;return e._glBuffers[t]=new i.GLBuffer(r.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[t]}}s.extension={type:r.ExtensionType.RendererSystem,name:"buffer"},(0,r.extensions).add(s)}),a("7nKoG",function(t,r){e(t.exports,"GLBuffer",()=>i);class i{constructor(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}}}),a("16ViG",function(e,t){}),a("iygap",function(e,t){var r=n("glXXo");class i{// renderers scene graph!
constructor(e){this.renderer=e}/**
   * Renders the object to its WebGL view.
   * @param displayObject - The object to be rendered.
   * @param options - the options to be passed to the renderer
   */render(e,t){let r,i,s,n;let a=this.renderer;if(t&&(r=t.renderTexture,i=t.clear,s=t.transform,n=t.skipUpdateTransform),this.renderingToScreen=!r,a.runners.prerender.emit(),a.emit("prerender"),a.projection.transform=s,!a.context.isLost){if(r||(this.lastObjectRendered=e),!n){let t=e.enableTempParent();e.updateTransform(),e.disableTempParent(t)}a.renderTexture.bind(r),a.batch.currentRenderer.start(),(i??a.background.clearBeforeRender)&&a.renderTexture.clear(),e.render(a),a.batch.currentRenderer.flush(),r&&(t.blit&&a.framebuffer.blit(),r.baseTexture.update()),a.runners.postrender.emit(),a.projection.transform=null,a.emit("postrender")}}destroy(){this.renderer=null,this.lastObjectRendered=null}}i.extension={type:r.ExtensionType.RendererSystem,name:"objectRenderer"},(0,r.extensions).add(i)}),a("2o5zn",function(e,t){var r=n("jetUE"),i=n("glXXo");n("a1P4O");var s=n("fhlwZ");n("iEiSW");var a=n("8oqCw");n("MiLFw");var o=n("k9Wja"),l=n("luXjE"),h=n("ltmWw"),u=n("64vl1");let d=class e extends u.SystemManager{/**
   * @param {PIXI.IRendererOptions} [options] - See {@link PIXI.settings.RENDER_OPTIONS} for defaults.
   */constructor(t){super(),this.type=r.RENDERER_TYPE.WEBGL,t=Object.assign({},a.settings.RENDER_OPTIONS,t),this.gl=null,this.CONTEXT_UID=0,this.globalUniforms=new h.UniformGroup({projectionMatrix:new s.Matrix},!0);let i={runners:["init","destroy","contextChange","resolutionChange","reset","update","postrender","prerender","resize"],systems:e.__systems,priority:["_view","textureGenerator","background","_plugin","startup",// low level WebGL systems
"context","state","texture","buffer","geometry","framebuffer","transformFeedback",// high level pixi specific rendering
"mask","scissor","stencil","projection","textureGC","filter","renderTexture","batch","objectRenderer","_multisample"]};this.setup(i),"useContextAlpha"in t&&((0,o.deprecation)("7.0.0","options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),t.premultipliedAlpha=t.useContextAlpha&&"notMultiplied"!==t.useContextAlpha,t.backgroundAlpha=!1===t.useContextAlpha?1:t.backgroundAlpha),this._plugin.rendererPlugins=e.__plugins,this.options=t,this.startup.run(this.options)}/**
   * Create renderer if WebGL is available. Overrideable
   * by the **@pixi/canvas-renderer** package to allow fallback.
   * throws error if WebGL is not available.
   * @param options
   * @private
   */static test(e){return!e?.forceCanvas&&(0,l.isWebGLSupported)()}/**
   * Renders the object to its WebGL view.
   * @param displayObject - The object to be rendered.
   * @param {object} [options] - Object to use for render options.
   * @param {PIXI.RenderTexture} [options.renderTexture] - The render texture to render to.
   * @param {boolean} [options.clear=true] - Should the canvas be cleared before the new render.
   * @param {PIXI.Matrix} [options.transform] - A transform to apply to the render texture before rendering.
   * @param {boolean} [options.skipUpdateTransform=false] - Should we skip the update transform pass?
   */render(e,t){this.objectRenderer.render(e,t)}/**
   * Resizes the WebGL view to the specified width and height.
   * @param desiredScreenWidth - The desired width of the screen.
   * @param desiredScreenHeight - The desired height of the screen.
   */resize(e,t){this._view.resizeView(e,t)}/**
   * Resets the WebGL state so you can render things however you fancy!
   * @returns Returns itself.
   */reset(){return this.runners.reset.emit(),this}/** Clear the frame buffer. */clear(){this.renderTexture.bind(),this.renderTexture.clear()}/**
   * Removes everything from the renderer (event listeners, spritebatch, etc...)
   * @param [removeView=false] - Removes the Canvas element from the DOM.
   *  See: https://github.com/pixijs/pixijs/issues/2233
   */destroy(e=!1){this.runners.destroy.items.reverse(),this.emitWithCustomOptions(this.runners.destroy,{_view:e}),super.destroy()}/** Collection of plugins */get plugins(){return this._plugin.plugins}/** The number of msaa samples of the canvas. */get multisample(){return this._multisample.multisample}/**
   * Same as view.width, actual number of pixels in the canvas by horizontal.
   * @member {number}
   * @readonly
   * @default 800
   */get width(){return this._view.element.width}/**
   * Same as view.height, actual number of pixels in the canvas by vertical.
   * @default 600
   */get height(){return this._view.element.height}/** The resolution / device pixel ratio of the renderer. */get resolution(){return this._view.resolution}set resolution(e){this._view.resolution=e,this.runners.resolutionChange.emit(e)}/** Whether CSS dimensions of canvas view should be resized to screen dimensions automatically. */get autoDensity(){return this._view.autoDensity}/** The canvas element that everything is drawn to.*/get view(){return this._view.element}/**
   * Measurements of the screen. (0, 0, screenWidth, screenHeight).
   *
   * Its safe to use as filterArea or hitArea for the whole stage.
   * @member {PIXI.Rectangle}
   */get screen(){return this._view.screen}/** the last object rendered by the renderer. Useful for other plugins like interaction managers */get lastObjectRendered(){return this.objectRenderer.lastObjectRendered}/** Flag if we are rendering to the screen vs renderTexture */get renderingToScreen(){return this.objectRenderer.renderingToScreen}/** When logging Pixi to the console, this is the name we will show */get rendererLogId(){return`WebGL ${this.context.webGLVersion}`}/**
   * This sets weather the screen is totally cleared between each frame withthe background color and alpha
   * @deprecated since 7.0.0
   */get clearBeforeRender(){return(0,o.deprecation)("7.0.0","renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."),this.background.clearBeforeRender}/**
   * Pass-thru setting for the canvas' context `alpha` property. This is typically
   * not something you need to fiddle with. If you want transparency, use `backgroundAlpha`.
   * @deprecated since 7.0.0
   * @member {boolean}
   */get useContextAlpha(){return(0,o.deprecation)("7.0.0","renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."),this.context.useContextAlpha}/**
   * readonly drawing buffer preservation
   * we can only know this if Pixi created the context
   * @deprecated since 7.0.0
   */get preserveDrawingBuffer(){return(0,o.deprecation)("7.0.0","renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"),this.context.preserveDrawingBuffer}/**
   * The background color to fill if not transparent
   * @member {number}
   * @deprecated since 7.0.0
   */get backgroundColor(){return(0,o.deprecation)("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color}set backgroundColor(e){(0,o.deprecation)("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color=e}/**
   * The background color alpha. Setting this to 0 will make the canvas transparent.
   * @member {number}
   * @deprecated since 7.0.0
   */get backgroundAlpha(){return(0,o.deprecation)("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha}/**
   * @deprecated since 7.0.0
   */set backgroundAlpha(e){(0,o.deprecation)("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha=e}/**
   * @deprecated since 7.0.0
   */get powerPreference(){return(0,o.deprecation)("7.0.0","renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"),this.context.powerPreference}/**
   * Useful function that returns a texture of the display object that can then be used to create sprites
   * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
   * @param displayObject - The displayObject the object will be generated from.
   * @param {IGenerateTextureOptions} options - Generate texture options.
   * @param {PIXI.Rectangle} options.region - The region of the displayObject, that shall be rendered,
   *        if no region is specified, defaults to the local bounds of the displayObject.
   * @param {number} [options.resolution] - If not given, the renderer's resolution is used.
   * @param {PIXI.MSAA_QUALITY} [options.multisample] - If not given, the renderer's multisample is used.
   * @returns A texture of the graphics object.
   */generateTexture(e,t){return this.textureGenerator.generateTexture(e,t)}};d.extension={type:i.ExtensionType.Renderer,priority:1},/**
* Collection of installed plugins. These are included by default in PIXI, but can be excluded
* by creating a custom build. Consult the README for more information about creating custom
* builds and excluding plugins.
* @private
*/d.__plugins={},/**
* The collection of installed systems.
* @private
*/d.__systems={},(0,i.extensions).handleByMap(i.ExtensionType.RendererPlugin,d.__plugins),(0,i.extensions).handleByMap(i.ExtensionType.RendererSystem,d.__systems),(0,i.extensions).add(d)}),a("6BUsG",function(e,t){}),a("4I2Eb",function(e,t){var r=n("1S50W"),i=n("lIUKC"),s=n("1ClQS"),a=n("4Urjd"),o=n("4JUwQ"),l=n("knhlo"),h=n("5Y90x"),u=n("50JGb"),d=n("9vyZs");n("c7FgM"),n("glvjk"),n("klLr6"),(0,i.INSTALLED).push(l.ImageBitmapResource,h.ImageResource,a.CanvasResource,d.VideoResource,u.SVGResource,s.BufferResource,o.CubeResource,r.ArrayResource)}),a("1S50W",function(t,r){e(t.exports,"ArrayResource",()=>a);var i=n("jetUE"),s=n("klLr6");class a extends s.AbstractMultiResource{/**
   * @param source - Number of items in array or the collection
   *        of image URLs to use. Can also be resources, image elements, canvas, etc.
   * @param options - Options to apply to {@link PIXI.autoDetectResource}
   * @param {number} [options.width] - Width of the resource
   * @param {number} [options.height] - Height of the resource
   */constructor(e,t){let r,i;let{width:s,height:n}=t||{};Array.isArray(e)?(r=e,i=e.length):i=e,super(i,{width:s,height:n}),r&&this.initFromArray(r,t)}/**
   * Set a baseTexture by ID,
   * ArrayResource just takes resource from it, nothing more
   * @param baseTexture
   * @param index - Zero-based index of resource to set
   * @returns - Instance for chaining
   */addBaseTextureAt(e,t){if(e.resource)this.addResourceAt(e.resource,t);else throw Error("ArrayResource does not support RenderTexture");return this}/**
   * Add binding
   * @param baseTexture
   */bind(e){super.bind(e),e.target=i.TARGETS.TEXTURE_2D_ARRAY}/**
   * Upload the resources to the GPU.
   * @param renderer
   * @param texture
   * @param glTexture
   * @returns - whether texture was uploaded
   */upload(e,t,r){let{length:i,itemDirtyIds:s,items:n}=this,{gl:a}=e;r.dirtyId<0&&a.texImage3D(a.TEXTURE_2D_ARRAY,0,r.internalFormat,this._width,this._height,i,0,t.format,r.type,null);for(let e=0;e<i;e++){let i=n[e];s[e]<i.dirtyId&&(s[e]=i.dirtyId,i.valid&&a.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,e,i.resource.width,i.resource.height,1,t.format,r.type,i.resource.source))}return!0}}}),a("klLr6",function(t,r){e(t.exports,"AbstractMultiResource",()=>o);var i=n("2Am4Q"),s=n("lIUKC"),a=n("glvjk");class o extends a.Resource{/**
   * @param length
   * @param options - Options to for Resource constructor
   * @param {number} [options.width] - Width of the resource
   * @param {number} [options.height] - Height of the resource
   */constructor(e,t){let{width:r,height:s}=t||{};super(r,s),this.items=[],this.itemDirtyIds=[];for(let t=0;t<e;t++){let e=new i.BaseTexture;this.items.push(e),this.itemDirtyIds.push(-2)}this.length=e,this._load=null,this.baseTexture=null}/**
   * Used from ArrayResource and CubeResource constructors.
   * @param resources - Can be resources, image elements, canvas, etc. ,
   *  length should be same as constructor length
   * @param options - Detect options for resources
   */initFromArray(e,t){for(let r=0;r<this.length;r++)e[r]&&(e[r].castToBaseTexture?this.addBaseTextureAt(e[r].castToBaseTexture(),r):e[r]instanceof a.Resource?this.addResourceAt(e[r],r):this.addResourceAt((0,s.autoDetectResource)(e[r],t),r))}/** Destroy this BaseImageResource. */dispose(){for(let e=0,t=this.length;e<t;e++)this.items[e].destroy();this.items=null,this.itemDirtyIds=null,this._load=null}/**
   * Set a resource by ID
   * @param resource
   * @param index - Zero-based index of resource to set
   * @returns - Instance for chaining
   */addResourceAt(e,t){if(!this.items[t])throw Error(`Index ${t} is out of bounds`);return e.valid&&!this.valid&&this.resize(e.width,e.height),this.items[t].setResource(e),this}/**
   * Set the parent base texture.
   * @param baseTexture
   */bind(e){if(null!==this.baseTexture)throw Error("Only one base texture per TextureArray is allowed");super.bind(e);for(let t=0;t<this.length;t++)this.items[t].parentTextureArray=e,this.items[t].on("update",e.update,e)}/**
   * Unset the parent base texture.
   * @param baseTexture
   */unbind(e){super.unbind(e);for(let t=0;t<this.length;t++)this.items[t].parentTextureArray=null,this.items[t].off("update",e.update,e)}/**
   * Load all the resources simultaneously
   * @returns - When load is resolved
   */load(){if(this._load)return this._load;let e=this.items.map(e=>e.resource).filter(e=>e).map(e=>e.load());return this._load=Promise.all(e).then(()=>{let{realWidth:e,realHeight:t}=this.items[0];return this.resize(e,t),this.update(),Promise.resolve(this)}),this._load}}}),a("4Urjd",function(t,r){e(t.exports,"CanvasResource",()=>s);var i=n("c7FgM");class s extends i.BaseImageResource{/**
   * @param source - Canvas element to use
   */// eslint-disable-next-line @typescript-eslint/no-useless-constructor
constructor(e){super(e)}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
   */static test(e){let{OffscreenCanvas:t}=globalThis;return!!t&&e instanceof t||globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement}}}),a("4JUwQ",function(t,r){e(t.exports,"CubeResource",()=>o);var i=n("jetUE"),s=n("klLr6");let a=class e extends s.AbstractMultiResource{/**
   * @param {Array<string|PIXI.Resource>} [source] - Collection of URLs or resources
   *        to use as the sides of the cube.
   * @param options - ImageResource options
   * @param {number} [options.width] - Width of resource
   * @param {number} [options.height] - Height of resource
   * @param {number} [options.autoLoad=true] - Whether to auto-load resources
   * @param {number} [options.linkBaseTexture=true] - In case BaseTextures are supplied,
   *   whether to copy them or use
   */constructor(t,r){let{width:s,height:n,autoLoad:a,linkBaseTexture:o}=r||{};if(t&&t.length!==e.SIDES)throw Error(`Invalid length. Got ${t.length}, expected 6`);super(6,{width:s,height:n});for(let t=0;t<e.SIDES;t++)this.items[t].target=i.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X+t;this.linkBaseTexture=!1!==o,t&&this.initFromArray(t,r),!1!==a&&this.load()}/**
   * Add binding.
   * @param baseTexture - parent base texture
   */bind(e){super.bind(e),e.target=i.TARGETS.TEXTURE_CUBE_MAP}addBaseTextureAt(e,t,r){if(void 0===r&&(r=this.linkBaseTexture),!this.items[t])throw Error(`Index ${t} is out of bounds`);if(!this.linkBaseTexture||e.parentTextureArray||Object.keys(e._glTextures).length>0){if(e.resource)this.addResourceAt(e.resource,t);else throw Error("CubeResource does not support copying of renderTexture.")}else e.target=i.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X+t,e.parentTextureArray=this.baseTexture,this.items[t]=e;return e.valid&&!this.valid&&this.resize(e.realWidth,e.realHeight),this.items[t]=e,this}/**
   * Upload the resource
   * @param renderer
   * @param _baseTexture
   * @param glTexture
   * @returns {boolean} true is success
   */upload(t,r,i){let s=this.itemDirtyIds;for(let n=0;n<e.SIDES;n++){let e=this.items[n];(s[n]<e.dirtyId||i.dirtyId<r.dirtyId)&&(e.valid&&e.resource?(e.resource.upload(t,e,i),s[n]=e.dirtyId):s[n]<-1&&(t.gl.texImage2D(e.target,0,i.internalFormat,r.realWidth,r.realHeight,0,r.format,i.type,null),s[n]=-1))}return!0}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if source is an array of 6 elements
   */static test(t){return Array.isArray(t)&&t.length===e.SIDES}};a.SIDES=6;let o=a}),a("knhlo",function(t,r){e(t.exports,"ImageBitmapResource",()=>o);var i=n("jetUE");n("iEiSW");var s=n("8oqCw"),a=n("c7FgM");class o extends a.BaseImageResource{/**
   * @param source - ImageBitmap or URL to use.
   * @param options - Options to use.
   */constructor(e,t){let r,i,s;t=t||{},"string"==typeof e?(r=o.EMPTY,i=e,s=!0):(r=e,i=null,s=!1),super(r),this.url=i,this.crossOrigin=t.crossOrigin??!0,this.alphaMode="number"==typeof t.alphaMode?t.alphaMode:null,this.ownsImageBitmap=t.ownsImageBitmap??s,this._load=null,!1!==t.autoLoad&&this.load()}load(){return this._load||(this._load=new Promise(async(e,t)=>{if(null===this.url){e(this);return}try{let t=await (0,s.settings).ADAPTER.fetch(this.url,{mode:this.crossOrigin?"cors":"no-cors"});if(this.destroyed)return;let r=await t.blob();if(this.destroyed)return;let n=await createImageBitmap(r,{premultiplyAlpha:null===this.alphaMode||this.alphaMode===i.ALPHA_MODES.UNPACK?"premultiply":"none"});if(this.destroyed){n.close();return}this.source=n,this.update(),e(this)}catch(e){if(this.destroyed)return;t(e),this.onError.emit(e)}})),this._load}/**
   * Upload the image bitmap resource to GPU.
   * @param renderer - Renderer to upload to
   * @param baseTexture - BaseTexture for this resource
   * @param glTexture - GLTexture to use
   * @returns {boolean} true is success
   */upload(e,t,r){return this.source instanceof ImageBitmap?("number"==typeof this.alphaMode&&(t.alphaMode=this.alphaMode),super.upload(e,t,r)):(this.load(),!1)}/** Destroys this resource. */dispose(){this.ownsImageBitmap&&this.source instanceof ImageBitmap&&this.source.close(),super.dispose(),this._load=null}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if current environment support ImageBitmap, and source is string or ImageBitmap
   */static test(e){return!!globalThis.createImageBitmap&&"u">typeof ImageBitmap&&("string"==typeof e||e instanceof ImageBitmap)}/**
   * ImageBitmap cannot be created synchronously, so a empty placeholder canvas is needed when loading from URLs.
   * Only for internal usage.
   * @returns The cached placeholder canvas.
   */static get EMPTY(){return o._EMPTY=o._EMPTY??(0,s.settings).ADAPTER.createCanvas(0,0),o._EMPTY}}}),a("50JGb",function(t,r){e(t.exports,"SVGResource",()=>l),n("iEiSW");var i=n("8oqCw");n("MiLFw");var s=n("XaHk7"),a=n("c7FgM");let o=class e extends a.BaseImageResource{/**
   * @param sourceBase64 - Base64 encoded SVG element or URL for SVG file.
   * @param {object} [options] - Options to use
   * @param {number} [options.scale=1] - Scale to apply to SVG. Overridden by...
   * @param {number} [options.width] - Rasterize SVG this wide. Aspect ratio preserved if height not specified.
   * @param {number} [options.height] - Rasterize SVG this high. Aspect ratio preserved if width not specified.
   * @param {boolean} [options.autoLoad=true] - Start loading right away.
   */constructor(e,t){t=t||{},super((0,i.settings).ADAPTER.createCanvas()),this._width=0,this._height=0,this.svg=e,this.scale=t.scale||1,this._overrideWidth=t.width,this._overrideHeight=t.height,this._resolve=null,this._crossorigin=t.crossorigin,this._load=null,!1!==t.autoLoad&&this.load()}load(){return this._load||(this._load=new Promise(t=>{if(this._resolve=()=>{this.update(),t(this)},e.SVG_XML.test(this.svg.trim())){if(!btoa)throw Error("Your browser doesn't support base64 conversions.");this.svg=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`}this._loadSvg()})),this._load}/** Loads an SVG image from `imageUrl` or `data URL`. */_loadSvg(){let e=new Image;(0,a.BaseImageResource).crossOrigin(e,this.svg,this._crossorigin),e.src=this.svg,e.onerror=t=>{this._resolve&&(e.onerror=null,this.onError.emit(t))},e.onload=()=>{if(!this._resolve)return;let t=e.width,r=e.height;if(!t||!r)throw Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");let i=t*this.scale,n=r*this.scale;(this._overrideWidth||this._overrideHeight)&&(i=this._overrideWidth||this._overrideHeight/r*t,n=this._overrideHeight||this._overrideWidth/t*r),i=Math.round(i),n=Math.round(n);let a=this.source;a.width=i,a.height=n,a._pixiId=`canvas_${(0,s.uid)()}`,a.getContext("2d").drawImage(e,0,0,t,r,0,0,i,n),this._resolve(),this._resolve=null}}/**
   * Get size from an svg string using a regular expression.
   * @param svgString - a serialized svg element
   * @returns - image extension
   */static getSize(t){let r=e.SVG_SIZE.exec(t),i={};return r&&(i[r[1]]=Math.round(parseFloat(r[3])),i[r[5]]=Math.round(parseFloat(r[7]))),i}/** Destroys this texture. */dispose(){super.dispose(),this._resolve=null,this._crossorigin=null}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @param {string} extension - The extension of source, if set
   * @returns {boolean} - If the source is a SVG source or data file
   */static test(t,r){return"svg"===r||"string"==typeof t&&t.startsWith("data:image/svg+xml")||"string"==typeof t&&e.SVG_XML.test(t)}};o.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,/**
* Regular expression for SVG size.
* @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
* @readonly
*/o.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;let l=o}),a("9vyZs",function(t,r){e(t.exports,"VideoResource",()=>o),n("bP1xa");var i=n("54AzN"),s=n("c7FgM");let a=class e extends s.BaseImageResource{/**
   * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
   * @param {object} [options] - Options to use
   * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
   * @param {boolean} [options.autoPlay=true] - Start playing video immediately
   * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
   * Leave at 0 to update at every render.
   * @param {boolean} [options.crossorigin=true] - Load image using cross origin
   * @param {boolean} [options.loop=false] - Loops the video
   * @param {boolean} [options.muted=false] - Mutes the video audio, useful for autoplay
   * @param {boolean} [options.playsinline=true] - Prevents opening the video on mobile devices
   */constructor(t,r){if(r=r||{},!(t instanceof HTMLVideoElement)){let i=document.createElement("video");!1!==r.autoLoad&&i.setAttribute("preload","auto"),!1!==r.playsinline&&(i.setAttribute("webkit-playsinline",""),i.setAttribute("playsinline","")),!0===r.muted&&(i.setAttribute("muted",""),i.muted=!0),!0===r.loop&&i.setAttribute("loop",""),!1!==r.autoPlay&&i.setAttribute("autoplay",""),"string"==typeof t&&(t=[t]);let n=t[0].src||t[0];(0,s.BaseImageResource).crossOrigin(i,n,r.crossorigin);for(let r=0;r<t.length;++r){let s=document.createElement("source"),{src:n,mime:a}=t[r];if((n=n||t[r]).startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){let t=n.split("?").shift().toLowerCase(),r=t.slice(t.lastIndexOf(".")+1);a=a||e.MIME_TYPES[r]||`video/${r}`}s.src=n,a&&(s.type=a),i.appendChild(s)}t=i}super(t),this.noSubImage=!0,this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=r.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=!1!==r.autoPlay,this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),!1!==r.autoLoad&&this.load()}/**
   * Trigger updating of the texture.
   * @param _deltaTime - time delta since last tick
   */update(e=0){if(!this.destroyed){if(this._updateFPS){let e=i.Ticker.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(super.update(),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}}_videoFrameRequestCallback(){this.update(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback)}/**
   * Start preloading the video resource.
   * @returns {Promise<void>} Handle the validate event
   */load(){if(this._load)return this._load;let e=this.source;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._onCanPlay():(e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlay),e.addEventListener("error",this._onError,!0)),this._load=new Promise((t,r)=>{this.valid?t(this):(this._resolve=t,this._reject=r,e.load())}),this._load}/**
   * Handle video error events.
   * @param event
   */_onError(e){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}/**
   * Returns true if the underlying source is playing.
   * @returns - True if playing.
   */_isSourcePlaying(){let e=this.source;return!e.paused&&!e.ended}/**
   * Returns true if the underlying source is ready for playing.
   * @returns - True if ready.
   */_isSourceReady(){return this.source.readyState>2}/** Runs the update loop when the video is ready to play. */_onPlayStart(){this.valid||this._onCanPlay(),this._configureAutoUpdate()}/** Fired when a pause event is triggered, stops the update loop. */_onPlayStop(){this._configureAutoUpdate()}/** Fired when the video is completed seeking to the current playback position. */_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.update(),this._msToNextUpdate=0)}/** Fired when the video is loaded and ready to play. */_onCanPlay(){let e=this.source;e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay);let t=this.valid;this._msToNextUpdate=0,this.update(),this._msToNextUpdate=0,!t&&this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&e.play()}/** Destroys this texture. */dispose(){this._configureAutoUpdate();let e=this.source;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.dispose()}/** Should the base texture automatically update itself, set to true by default. */get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}/**
   * How many times a second to update the texture from the video. Leave at 0 to update at every render.
   * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
   */get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.source.requestVideoFrameCallback?(this._isConnectedToTicker&&((0,i.Ticker).shared.remove(this.update,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),null===this._videoFrameRequestCallbackHandle&&(this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))):(null!==this._videoFrameRequestCallbackHandle&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||((0,i.Ticker).shared.add(this.update,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(null!==this._videoFrameRequestCallbackHandle&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&((0,i.Ticker).shared.remove(this.update,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}/**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @param {string} extension - The extension of source, if set
   * @returns {boolean} `true` if video source
   */static test(t,r){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.includes(r)}};a.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],/**
* Map of video MIME types that can't be directly derived from file extensions.
* @readonly
*/a.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let o=a}),a("lbTas",function(e,t){n("A1ho4"),n("lmeMj")}),a("dyEru",function(t,r){e(t.exports,"Bounds",()=>n("4z4u1").Bounds),e(t.exports,"Container",()=>n("7uhWd").Container),e(t.exports,"DisplayObject",()=>n("7h4dW").DisplayObject),n("bVStc"),n("4z4u1"),n("7uhWd"),n("7h4dW")}),a("bVStc",function(e,t){n("2AhlO");var r=n("8oqCw"),i=n("MiLFw"),s=n("7uhWd");Object.defineProperties(r.settings,{/**
   * Sets the default value for the container property 'sortableChildren'.
   * @static
   * @name SORTABLE_CHILDREN
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {boolean}
   * @see PIXI.Container.defaultSortableChildren
   */SORTABLE_CHILDREN:{get:()=>s.Container.defaultSortableChildren,set(e){i.deprecation("7.1.0","settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"),s.Container.defaultSortableChildren=e}}})}),a("7uhWd",function(t,r){e(t.exports,"Container",()=>d),n("2AhlO");var i=n("fhlwZ"),s=n("MiLFw"),a=n("jetUE"),o=n("7h4dW");let l=new i.Matrix;function h(e,t){return e.zIndex===t.zIndex?e._lastSortedIndex-t._lastSortedIndex:e.zIndex-t.zIndex}let u=class e extends o.DisplayObject{constructor(){super(),this.children=[],this.sortableChildren=e.defaultSortableChildren,this.sortDirty=!1}/**
   * Overridable method that can be used by Container subclasses whenever the children array is modified.
   * @param _length
   */onChildrenChange(e){}/**
   * Adds one or more children to the container.
   *
   * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
   * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to add to the container
   * @returns {PIXI.DisplayObject} - The first child that was added.
   */addChild(...e){if(e.length>1)for(let t=0;t<e.length;t++)this.addChild(e[t]);else{let t=e[0];t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.push(t),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this)}return e[0]}/**
   * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
   * If the child is already in this container, it will be moved to the specified index.
   * @param {PIXI.DisplayObject} child - The child to add.
   * @param {number} index - The absolute index where the child will be positioned at the end of the operation.
   * @returns {PIXI.DisplayObject} The child that was added.
   */addChildAt(e,t){if(t<0||t>this.children.length)throw Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);return e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.splice(t,0,e),this._boundsID++,this.onChildrenChange(t),e.emit("added",this),this.emit("childAdded",e,this,t),e}/**
   * Swaps the position of 2 Display Objects within this container.
   * @param child - First display object to swap
   * @param child2 - Second display object to swap
   */swapChildren(e,t){if(e===t)return;let r=this.getChildIndex(e),i=this.getChildIndex(t);this.children[r]=t,this.children[i]=e,this.onChildrenChange(r<i?r:i)}/**
   * Returns the index position of a child DisplayObject instance
   * @param child - The DisplayObject instance to identify
   * @returns - The index position of the child display object to identify
   */getChildIndex(e){let t=this.children.indexOf(e);if(-1===t)throw Error("The supplied DisplayObject must be a child of the caller");return t}/**
   * Changes the position of an existing child in the display object container
   * @param child - The child DisplayObject instance for which you want to change the index number
   * @param index - The resulting index number for the child display object
   */setChildIndex(e,t){if(t<0||t>=this.children.length)throw Error(`The index ${t} supplied is out of bounds ${this.children.length}`);let r=this.getChildIndex(e);s.removeItems(this.children,r,1),this.children.splice(t,0,e),this.onChildrenChange(t)}/**
   * Returns the child at the specified index
   * @param index - The index to get the child at
   * @returns - The child at the given index, if any.
   */getChildAt(e){if(e<0||e>=this.children.length)throw Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]}/**
   * Removes one or more children from the container.
   * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to remove
   * @returns {PIXI.DisplayObject} The first child that was removed.
   */removeChild(...e){if(e.length>1)for(let t=0;t<e.length;t++)this.removeChild(e[t]);else{let t=e[0],r=this.children.indexOf(t);if(-1===r)return null;t.parent=null,t.transform._parentID=-1,s.removeItems(this.children,r,1),this._boundsID++,this.onChildrenChange(r),t.emit("removed",this),this.emit("childRemoved",t,this,r)}return e[0]}/**
   * Removes a child from the specified index position.
   * @param index - The index to get the child from
   * @returns The child that was removed.
   */removeChildAt(e){let t=this.getChildAt(e);return t.parent=null,t.transform._parentID=-1,s.removeItems(this.children,e,1),this._boundsID++,this.onChildrenChange(e),t.emit("removed",this),this.emit("childRemoved",t,this,e),t}/**
   * Removes all children from this container that are within the begin and end indexes.
   * @param beginIndex - The beginning position.
   * @param endIndex - The ending position. Default value is size of the container.
   * @returns - List of removed children
   */removeChildren(e=0,t=this.children.length){let r;let i=t-e;if(i>0&&i<=t){r=this.children.splice(e,i);for(let e=0;e<r.length;++e)r[e].parent=null,r[e].transform&&(r[e].transform._parentID=-1);this._boundsID++,this.onChildrenChange(e);for(let e=0;e<r.length;++e)r[e].emit("removed",this),this.emit("childRemoved",r[e],this,e);return r}if(0===i&&0===this.children.length)return[];throw RangeError("removeChildren: numeric values are outside the acceptable range.")}/** Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex. */sortChildren(){let e=!1;for(let t=0,r=this.children.length;t<r;++t){let r=this.children[t];r._lastSortedIndex=t,e||0===r.zIndex||(e=!0)}e&&this.children.length>1&&this.children.sort(h),this.sortDirty=!1}/** Updates the transform on all children of this container for rendering. */updateTransform(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(let e=0,t=this.children.length;e<t;++e){let t=this.children[e];t.visible&&t.updateTransform()}}/**
   * Recalculates the bounds of the container.
   *
   * This implementation will automatically fit the children's bounds into the calculation. Each child's bounds
   * is limited to its mask's bounds or filterArea, if any is applied.
   */calculateBounds(){this._bounds.clear(),this._calculateBounds();for(let e=0;e<this.children.length;e++){let t=this.children[e];if(!(!t.visible||!t.renderable)){if(t.calculateBounds(),t._mask){let e=t._mask.isMaskData?t._mask.maskObject:t._mask;e?(e.calculateBounds(),this._bounds.addBoundsMask(t._bounds,e._bounds)):this._bounds.addBounds(t._bounds)}else t.filterArea?this._bounds.addBoundsArea(t._bounds,t.filterArea):this._bounds.addBounds(t._bounds)}}this._bounds.updateID=this._boundsID}/**
   * Retrieves the local bounds of the displayObject as a rectangle object.
   *
   * Calling `getLocalBounds` may invalidate the `_bounds` of the whole subtree below. If using it inside a render()
   * call, it is advised to call `getBounds()` immediately after to recalculate the world bounds of the subtree.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @param skipChildrenUpdate - Setting to `true` will stop re-calculation of children transforms,
   *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
   * @returns - The rectangular bounding area.
   */getLocalBounds(e,t=!1){let r=super.getLocalBounds(e);if(!t)for(let e=0,t=this.children.length;e<t;++e){let t=this.children[e];t.visible&&t.updateTransform()}return r}/**
   * Recalculates the content bounds of this object. This should be overriden to
   * calculate the bounds of this specific object (not including children).
   * @protected
   */_calculateBounds(){}/**
   * Renders this object and its children with culling.
   * @protected
   * @param {PIXI.Renderer} renderer - The renderer
   */_renderWithCulling(t){let r,i;let s=t.renderTexture.sourceFrame;if(!(s.width>0&&s.height>0))return;this.cullArea?(r=this.cullArea,i=this.worldTransform):this._render!==e.prototype._render&&(r=this.getBounds(!0));let n=t.projection.transform;if(n&&(i?(i=l.copyFrom(i)).prepend(n):i=n),r&&s.intersects(r,i))this._render(t);else if(this.cullArea)return;for(let e=0,r=this.children.length;e<r;++e){let r=this.children[e],i=r.cullable;r.cullable=i||!this.cullArea,r.render(t),r.cullable=i}}/**
   * Renders the object using the WebGL renderer.
   *
   * The [_render]{@link PIXI.Container#_render} method is be overriden for rendering the contents of the
   * container itself. This `render` method will invoke it, and also invoke the `render` methods of all
   * children afterward.
   *
   * If `renderable` or `visible` is false or if `worldAlpha` is not positive or if `cullable` is true and
   * the bounds of this object are out of frame, this implementation will entirely skip rendering.
   * See {@link PIXI.DisplayObject} for choosing between `renderable` or `visible`. Generally,
   * setting alpha to zero is not recommended for purely skipping rendering.
   *
   * When your scene becomes large (especially when it is larger than can be viewed in a single screen), it is
   * advised to employ **culling** to automatically skip rendering objects outside of the current screen.
   * See [cullable]{@link PIXI.DisplayObject#cullable} and [cullArea]{@link PIXI.DisplayObject#cullArea}.
   * Other culling methods might be better suited for a large number static objects; see
   * [@pixi-essentials/cull]{@link https://www.npmjs.com/package/@pixi-essentials/cull} and
   * [pixi-cull]{@link https://www.npmjs.com/package/pixi-cull}.
   *
   * The [renderAdvanced]{@link PIXI.Container#renderAdvanced} method is internally used when when masking or
   * filtering is applied on a container. This does, however, break batching and can affect performance when
   * masking and filtering is applied extensively throughout the scene graph.
   * @param renderer - The renderer
   */render(e){if(!(!this.visible||this.worldAlpha<=0||!this.renderable)){if(this._mask||this.filters?.length)this.renderAdvanced(e);else if(this.cullable)this._renderWithCulling(e);else{this._render(e);for(let t=0,r=this.children.length;t<r;++t)this.children[t].render(e)}}}/**
   * Render the object using the WebGL renderer and advanced features.
   * @param renderer - The renderer
   */renderAdvanced(e){let t=this.filters,r=this._mask;if(t){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(let e=0;e<t.length;e++)t[e].enabled&&this._enabledFilters.push(t[e])}let i=t&&this._enabledFilters?.length||r&&(!r.isMaskData||r.enabled&&(r.autoDetect||r.type!==a.MASK_TYPES.NONE));if(i&&e.batch.flush(),t&&this._enabledFilters?.length&&e.filter.push(this,this._enabledFilters),r&&e.mask.push(this,this._mask),this.cullable)this._renderWithCulling(e);else{this._render(e);for(let t=0,r=this.children.length;t<r;++t)this.children[t].render(e)}i&&e.batch.flush(),r&&e.mask.pop(this),t&&this._enabledFilters?.length&&e.filter.pop()}/**
   * To be overridden by the subclasses.
   * @param _renderer - The renderer
   */_render(e){}/**
   * Removes all internal references and listeners as well as removes children from the display list.
   * Do not use a Container after calling `destroy`.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */destroy(e){super.destroy(),this.sortDirty=!1;let t="boolean"==typeof e?e:e?.children,r=this.removeChildren(0,this.children.length);if(t)for(let t=0;t<r.length;++t)r[t].destroy(e)}/** The width of the Container, setting this will actually modify the scale to achieve the value set. */get width(){return this.scale.x*this.getLocalBounds().width}set width(e){let t=this.getLocalBounds().width;0!==t?this.scale.x=e/t:this.scale.x=1,this._width=e}/** The height of the Container, setting this will actually modify the scale to achieve the value set. */get height(){return this.scale.y*this.getLocalBounds().height}set height(e){let t=this.getLocalBounds().height;0!==t?this.scale.y=e/t:this.scale.y=1,this._height=e}};u.defaultSortableChildren=!1;let d=u;d.prototype.containerUpdateTransform=d.prototype.updateTransform}),a("7h4dW",function(t,r){e(t.exports,"DisplayObject",()=>h),n("2AhlO");var i=n("9wIYY"),s=n("6OnST"),a=n("lkqjp"),o=n("MiLFw"),l=n("4z4u1");class h extends o.EventEmitter{constructor(){super(),this.tempDisplayObjectParent=null,this.transform=new i.Transform,this.alpha=1,this.visible=!0,this.renderable=!0,this.cullable=!1,this.cullArea=null,this.parent=null,this.worldAlpha=1,this._lastSortedIndex=0,this._zIndex=0,this.filterArea=null,this.filters=null,this._enabledFilters=null,this._bounds=new l.Bounds,this._localBounds=null,this._boundsID=0,this._boundsRect=null,this._localBoundsRect=null,this._mask=null,this._maskRefCount=0,this._destroyed=!1,this.isSprite=!1,this.isMask=!1}/**
   * Mixes all enumerable properties and methods from a source object to DisplayObject.
   * @param source - The source of properties and methods to mix in.
   */static mixin(e){let t=Object.keys(e);for(let r=0;r<t.length;++r){let i=t[r];Object.defineProperty(h.prototype,i,Object.getOwnPropertyDescriptor(e,i))}}/**
   * Fired when this DisplayObject is added to a Container.
   * @instance
   * @event added
   * @param {PIXI.Container} container - The container added to.
   *//**
   * Fired when this DisplayObject is removed from a Container.
   * @instance
   * @event removed
   * @param {PIXI.Container} container - The container removed from.
   *//**
   * Fired when this DisplayObject is destroyed. This event is emitted once
   * destroy is finished.
   * @instance
   * @event destroyed
   *//** Readonly flag for destroyed display objects. */get destroyed(){return this._destroyed}/** Recursively updates transform of all objects from the root to this one internal function for toLocal() */_recursivePostUpdateTransform(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)}/** Updates the object transform for rendering. TODO - Optimization pass! */updateTransform(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha}/**
   * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link PIXI.Rectangle}.
   *
   * This method is expensive on containers with a large subtree (like the stage). This is because the bounds
   * of a container depend on its children's bounds, which recursively causes all bounds in the subtree to
   * be recalculated. The upside, however, is that calling `getBounds` once on a container will indeed update
   * the bounds of all children (the whole subtree, in fact). This side effect should be exploited by using
   * `displayObject._bounds.getRectangle()` when traversing through all the bounds in a scene graph. Otherwise,
   * calling `getBounds` on each object in a subtree will cause the total cost to increase quadratically as
   * its height increases.
   *
   * The transforms of all objects in a container's **subtree** and of all **ancestors** are updated.
   * The world bounds of all display objects in a container's **subtree** will also be recalculated.
   *
   * The `_bounds` object stores the last calculation of the bounds. You can use to entirely skip bounds
   * calculation if needed.
   *
   * ```js
   * const lastCalculatedBounds = displayObject._bounds.getRectangle(optionalRect);
   * ```
   *
   * Do know that usage of `getLocalBounds` can corrupt the `_bounds` of children (the whole subtree, actually). This
   * is a known issue that has not been solved. See [getLocalBounds]{@link PIXI.DisplayObject#getLocalBounds} for more
   * details.
   *
   * `getBounds` should be called with `skipUpdate` equal to `true` in a render() call. This is because the transforms
   * are guaranteed to be update-to-date. In fact, recalculating inside a render() call may cause corruption in certain
   * cases.
   * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
   *  being updated. This means the calculation returned MAY be out of date BUT will give you a
   *  nice performance boost.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
   */getBounds(e,t){return e||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),t||(this._boundsRect||(this._boundsRect=new s.Rectangle),t=this._boundsRect),this._bounds.getRectangle(t)}/**
   * Retrieves the local bounds of the displayObject as a rectangle object.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @returns - The rectangular bounding area.
   */getLocalBounds(e){e||(this._localBoundsRect||(this._localBoundsRect=new s.Rectangle),e=this._localBoundsRect),this._localBounds||(this._localBounds=new l.Bounds);let t=this.transform,r=this.parent;this.parent=null,this._tempDisplayObjectParent.worldAlpha=r?.worldAlpha??1,this.transform=this._tempDisplayObjectParent.transform;let i=this._bounds,n=this._boundsID;this._bounds=this._localBounds;let a=this.getBounds(!1,e);return this.parent=r,this.transform=t,this._bounds=i,this._bounds.updateID+=this._boundsID-n,a}/**
   * Calculates the global position of the display object.
   * @param position - The world origin to calculate from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform.
   * @returns - A point object representing the position of this object.
   */toGlobal(e,t,r=!1){return r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(e,t)}/**
   * Calculates the local position of the display object relative to another point.
   * @param position - The world origin to calculate from.
   * @param from - The DisplayObject to calculate the global position from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform
   * @returns - A point object representing the position of this object
   */toLocal(e,t,r,i){return t&&(e=t.toGlobal(e,r,i)),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(e,r)}/**
   * Set the parent Container of this DisplayObject.
   * @param container - The Container to add this DisplayObject to.
   * @returns - The Container that this DisplayObject was added to.
   */setParent(e){if(!e||!e.addChild)throw Error("setParent: Argument must be a Container");return e.addChild(this),e}/** Remove the DisplayObject from its parent Container. If the DisplayObject has no parent, do nothing. */removeFromParent(){this.parent?.removeChild(this)}/**
   * Convenience function to set the position, scale, skew and pivot at once.
   * @param x - The X position
   * @param y - The Y position
   * @param scaleX - The X scale value
   * @param scaleY - The Y scale value
   * @param rotation - The rotation
   * @param skewX - The X skew value
   * @param skewY - The Y skew value
   * @param pivotX - The X pivot value
   * @param pivotY - The Y pivot value
   * @returns - The DisplayObject instance
   */setTransform(e=0,t=0,r=1,i=1,s=0,n=0,a=0,o=0,l=0){return this.position.x=e,this.position.y=t,this.scale.x=r||1,this.scale.y=i||1,this.rotation=s,this.skew.x=n,this.skew.y=a,this.pivot.x=o,this.pivot.y=l,this}/**
   * Base destroy method for generic display objects. This will automatically
   * remove the display object from its parent Container as well as remove
   * all current event listeners and internal references. Do not use a DisplayObject
   * after calling `destroy()`.
   * @param _options
   */destroy(e){this.removeFromParent(),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.eventMode="auto",this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()}/**
   * @protected
   * @member {PIXI.Container}
   */get _tempDisplayObjectParent(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new u),this.tempDisplayObjectParent}/**
   * Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root.
   *
   * ```js
   * const cacheParent = elem.enableTempParent();
   * elem.updateTransform();
   * elem.disableTempParent(cacheParent);
   * ```
   * @returns - Current parent
   */enableTempParent(){let e=this.parent;return this.parent=this._tempDisplayObjectParent,e}/**
   * Pair method for `enableTempParent`
   * @param cacheParent - Actual parent of element
   */disableTempParent(e){this.parent=e}/**
   * The position of the displayObject on the x axis relative to the local coordinates of the parent.
   * An alias to position.x
   */get x(){return this.position.x}set x(e){this.transform.position.x=e}/**
   * The position of the displayObject on the y axis relative to the local coordinates of the parent.
   * An alias to position.y
   */get y(){return this.position.y}set y(e){this.transform.position.y=e}/**
   * Current transform of the object based on world (parent) factors.
   * @readonly
   */get worldTransform(){return this.transform.worldTransform}/**
   * Current transform of the object based on local factors: position, scale, other stuff.
   * @readonly
   */get localTransform(){return this.transform.localTransform}/**
   * The coordinate of the object relative to the local coordinates of the parent.
   * @since 4.0.0
   */get position(){return this.transform.position}set position(e){this.transform.position.copyFrom(e)}/**
   * The scale factors of this object along the local coordinate axes.
   *
   * The default scale is (1, 1).
   * @since 4.0.0
   */get scale(){return this.transform.scale}set scale(e){this.transform.scale.copyFrom(e)}/**
   * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
   * is the projection of `pivot` in the parent's local space.
   *
   * By default, the pivot is the origin (0, 0).
   * @since 4.0.0
   */get pivot(){return this.transform.pivot}set pivot(e){this.transform.pivot.copyFrom(e)}/**
   * The skew factor for the object in radians.
   * @since 4.0.0
   */get skew(){return this.transform.skew}set skew(e){this.transform.skew.copyFrom(e)}/**
   * The rotation of the object in radians.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */get rotation(){return this.transform.rotation}set rotation(e){this.transform.rotation=e}/**
   * The angle of the object in degrees.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */get angle(){return this.transform.rotation*a.RAD_TO_DEG}set angle(e){this.transform.rotation=e*a.DEG_TO_RAD}/**
   * The zIndex of the displayObject.
   *
   * If a container has the sortableChildren property set to true, children will be automatically
   * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
   * and thus rendered on top of other display objects within the same container.
   * @see PIXI.Container#sortableChildren
   */get zIndex(){return this._zIndex}set zIndex(e){this._zIndex=e,this.parent&&(this.parent.sortDirty=!0)}/**
   * Indicates if the object is globally visible.
   * @readonly
   */get worldVisible(){let e=this;do{if(!e.visible)return!1;e=e.parent}while(e)return!0}/**
   * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
   * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
   * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
   * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
   * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
   * To remove a mask, set this property to `null`.
   *
   * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
   * @example
   * import { Graphics, Sprite } from 'pixi.js';
   *
   * const graphics = new Graphics();
   * graphics.beginFill(0xFF3300);
   * graphics.drawRect(50, 250, 100, 100);
   * graphics.endFill();
   *
   * const sprite = new Sprite(texture);
   * sprite.mask = graphics;
   * @todo At the moment, CanvasRenderer doesn't support Sprite as mask.
   */get mask(){return this._mask}set mask(e){if(this._mask!==e){if(this._mask){let e=this._mask.isMaskData?this._mask.maskObject:this._mask;e&&(e._maskRefCount--,0===e._maskRefCount&&(e.renderable=!0,e.isMask=!1))}if(this._mask=e,this._mask){let e=this._mask.isMaskData?this._mask.maskObject:this._mask;e&&(0===e._maskRefCount&&(e.renderable=!1,e.isMask=!0),e._maskRefCount++)}}}}class u extends h{constructor(){super(...arguments),this.sortDirty=null}}h.prototype.displayObjectUpdateTransform=h.prototype.updateTransform}),a("4z4u1",function(t,r){e(t.exports,"Bounds",()=>s),n("2AhlO");var i=n("6OnST");class s{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}/**
   * Checks if bounds are empty.
   * @returns - True if empty.
   */isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}/** Clears the bounds and resets. */clear(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}/**
   * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
   * It is not guaranteed that it will return tempRect
   * @param rect - Temporary object will be used if AABB is not empty
   * @returns - A rectangle of the bounds
   */getRectangle(e){return this.minX>this.maxX||this.minY>this.maxY?i.Rectangle.EMPTY:((e=e||new i.Rectangle(0,0,1,1)).x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)}/**
   * This function should be inlined when its possible.
   * @param point - The point to add.
   */addPoint(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)}/**
   * Adds a point, after transformed. This should be inlined when its possible.
   * @param matrix
   * @param point
   */addPointMatrix(e,t){let{a:r,b:i,c:s,d:n,tx:a,ty:o}=e,l=r*t.x+s*t.y+a,h=i*t.x+n*t.y+o;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,h),this.maxY=Math.max(this.maxY,h)}/**
   * Adds a quad, not transformed
   * @param vertices - The verts to add.
   */addQuad(e){let t=this.minX,r=this.minY,i=this.maxX,s=this.maxY,n=e[0],a=e[1];t=n<t?n:t,r=a<r?a:r,i=n>i?n:i,s=a>s?a:s,n=e[2],a=e[3],t=n<t?n:t,r=a<r?a:r,i=n>i?n:i,s=a>s?a:s,n=e[4],a=e[5],t=n<t?n:t,r=a<r?a:r,i=n>i?n:i,s=a>s?a:s,n=e[6],a=e[7],t=n<t?n:t,r=a<r?a:r,i=n>i?n:i,s=a>s?a:s,this.minX=t,this.minY=r,this.maxX=i,this.maxY=s}/**
   * Adds sprite frame, transformed.
   * @param transform - transform to apply
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */addFrame(e,t,r,i,s){this.addFrameMatrix(e.worldTransform,t,r,i,s)}/**
   * Adds sprite frame, multiplied by matrix
   * @param matrix - matrix to apply
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */addFrameMatrix(e,t,r,i,s){let n=e.a,a=e.b,o=e.c,l=e.d,h=e.tx,u=e.ty,d=this.minX,c=this.minY,p=this.maxX,f=this.maxY,m=n*t+o*r+h,g=a*t+l*r+u;d=m<d?m:d,c=g<c?g:c,p=m>p?m:p,f=g>f?g:f,m=n*i+o*r+h,g=a*i+l*r+u,d=m<d?m:d,c=g<c?g:c,p=m>p?m:p,f=g>f?g:f,m=n*t+o*s+h,g=a*t+l*s+u,d=m<d?m:d,c=g<c?g:c,p=m>p?m:p,f=g>f?g:f,m=n*i+o*s+h,g=a*i+l*s+u,d=m<d?m:d,c=g<c?g:c,p=m>p?m:p,f=g>f?g:f,this.minX=d,this.minY=c,this.maxX=p,this.maxY=f}/**
   * Adds screen vertices from array
   * @param vertexData - calculated vertices
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   */addVertexData(e,t,r){let i=this.minX,s=this.minY,n=this.maxX,a=this.maxY;for(let o=t;o<r;o+=2){let t=e[o],r=e[o+1];i=t<i?t:i,s=r<s?r:s,n=t>n?t:n,a=r>a?r:a}this.minX=i,this.minY=s,this.maxX=n,this.maxY=a}/**
   * Add an array of mesh vertices
   * @param transform - mesh transform
   * @param vertices - mesh coordinates in array
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   */addVertices(e,t,r,i){this.addVerticesMatrix(e.worldTransform,t,r,i)}/**
   * Add an array of mesh vertices.
   * @param matrix - mesh matrix
   * @param vertices - mesh coordinates in array
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   * @param padX - x padding
   * @param padY - y padding
   */addVerticesMatrix(e,t,r,i,s=0,n=s){let a=e.a,o=e.b,l=e.c,h=e.d,u=e.tx,d=e.ty,c=this.minX,p=this.minY,f=this.maxX,m=this.maxY;for(let e=r;e<i;e+=2){let r=t[e],i=t[e+1],g=a*r+l*i+u,x=h*i+o*r+d;c=Math.min(c,g-s),f=Math.max(f,g+s),p=Math.min(p,x-n),m=Math.max(m,x+n)}this.minX=c,this.minY=p,this.maxX=f,this.maxY=m}/**
   * Adds other {@link PIXI.Bounds}.
   * @param bounds - The Bounds to be added
   */addBounds(e){let t=this.minX,r=this.minY,i=this.maxX,s=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<r?e.minY:r,this.maxX=e.maxX>i?e.maxX:i,this.maxY=e.maxY>s?e.maxY:s}/**
   * Adds other Bounds, masked with Bounds.
   * @param bounds - The Bounds to be added.
   * @param mask - TODO
   */addBoundsMask(e,t){let r=e.minX>t.minX?e.minX:t.minX,i=e.minY>t.minY?e.minY:t.minY,s=e.maxX<t.maxX?e.maxX:t.maxX,n=e.maxY<t.maxY?e.maxY:t.maxY;if(r<=s&&i<=n){let e=this.minX,t=this.minY,a=this.maxX,o=this.maxY;this.minX=r<e?r:e,this.minY=i<t?i:t,this.maxX=s>a?s:a,this.maxY=n>o?n:o}}/**
   * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty.
   * @param bounds - other bounds
   * @param matrix - multiplicator
   */addBoundsMatrix(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)}/**
   * Adds other Bounds, masked with Rectangle.
   * @param bounds - TODO
   * @param area - TODO
   */addBoundsArea(e,t){let r=e.minX>t.x?e.minX:t.x,i=e.minY>t.y?e.minY:t.y,s=e.maxX<t.x+t.width?e.maxX:t.x+t.width,n=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(r<=s&&i<=n){let e=this.minX,t=this.minY,a=this.maxX,o=this.maxY;this.minX=r<e?r:e,this.minY=i<t?i:t,this.maxX=s>a?s:a,this.maxY=n>o?n:o}}/**
   * Pads bounds object, making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   */pad(e=0,t=e){this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)}/**
   * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   * @param padX - padding X
   * @param padY - padding Y
   */addFramePad(e,t,r,i,s,n){e-=s,t-=n,r+=s,i+=n,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>r?this.maxX:r,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>i?this.maxY:i}}}),a("cJJeG",function(t,r){e(t.exports,"Sprite",()=>n("OYVnz").Sprite),n("OYVnz")}),a("OYVnz",function(t,r){e(t.exports,"Sprite",()=>g),n("2AhlO");var i=n("iVQEG"),s=n("lEibW"),a=n("5xg5I"),o=n("jetUE"),l=n("7eheB"),h=n("8oqCw"),u=n("MiLFw"),d=n("6OnST");n("dyEru");var c=n("4z4u1"),p=n("7uhWd");let f=new i.Point,m=new Uint16Array([0,1,2,0,2,3]);class g extends p.Container{/** @param texture - The texture for this sprite. */constructor(e){super(),this._anchor=new s.ObservablePoint(this._onAnchorUpdate,this,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new a.Color(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=o.BLEND_MODES.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=e||l.Texture.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=m,this.pluginName="batch",this.isSprite=!0,this._roundPixels=h.settings.ROUND_PIXELS}/** When the texture is updated, this event will fire to update the scale and frame. */_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=u.sign(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=u.sign(this.scale.y)*this._height/this._texture.orig.height)}/** Called when the anchor position updates. */_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}/** Calculates worldTransform * vertices, store it in vertexData. */calculateVertices(){let e=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===e._updateID)return;this._textureID!==e._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=e._updateID;let t=this.transform.worldTransform,r=t.a,i=t.b,s=t.c,n=t.d,a=t.tx,o=t.ty,l=this.vertexData,u=e.trim,d=e.orig,c=this._anchor,p=0,f=0,m=0,g=0;if(u?(p=(f=u.x-c._x*d.width)+u.width,m=(g=u.y-c._y*d.height)+u.height):(p=(f=-c._x*d.width)+d.width,m=(g=-c._y*d.height)+d.height),l[0]=r*f+s*g+a,l[1]=n*g+i*f+o,l[2]=r*p+s*g+a,l[3]=n*g+i*p+o,l[4]=r*p+s*m+a,l[5]=n*m+i*p+o,l[6]=r*f+s*m+a,l[7]=n*m+i*f+o,this._roundPixels){let e=h.settings.RESOLUTION;for(let t=0;t<l.length;++t)l[t]=Math.round(l[t]*e)/e}}/**
   * Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.
   *
   * This is used to ensure that the true width and height of a trimmed texture is respected.
   */calculateTrimmedVertices(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;let e=this._texture,t=this.vertexTrimmedData,r=e.orig,i=this._anchor,s=this.transform.worldTransform,n=s.a,a=s.b,o=s.c,l=s.d,u=s.tx,d=s.ty,c=-i._x*r.width,p=c+r.width,f=-i._y*r.height,m=f+r.height;if(t[0]=n*c+o*f+u,t[1]=l*f+a*c+d,t[2]=n*p+o*f+u,t[3]=l*f+a*p+d,t[4]=n*p+o*m+u,t[5]=l*m+a*p+d,t[6]=n*c+o*m+u,t[7]=l*m+a*c+d,this._roundPixels){let e=h.settings.RESOLUTION;for(let r=0;r<t.length;++r)t[r]=Math.round(t[r]*e)/e}}/**
   *
   * Renders the object using the WebGL renderer
   * @param renderer - The webgl renderer to use.
   */_render(e){this.calculateVertices(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this)}/** Updates the bounds of the sprite. */_calculateBounds(){let e=this._texture.trim,t=this._texture.orig;e&&(e.width!==t.width||e.height!==t.height)?(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData)):(this.calculateVertices(),this._bounds.addQuad(this.vertexData))}/**
   * Gets the local bounds of the sprite object.
   * @param rect - Optional output rectangle.
   * @returns The bounds.
   */getLocalBounds(e){return 0===this.children.length?(this._localBounds||(this._localBounds=new c.Bounds),this._localBounds.minX=-(this._texture.orig.width*this._anchor._x),this._localBounds.minY=-(this._texture.orig.height*this._anchor._y),this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new d.Rectangle),e=this._localBoundsRect),this._localBounds.getRectangle(e)):super.getLocalBounds.call(this,e)}/**
   * Tests if a point is inside this sprite
   * @param point - the point to test
   * @returns The result of the test
   */containsPoint(e){this.worldTransform.applyInverse(e,f);let t=this._texture.orig.width,r=this._texture.orig.height,i=-t*this.anchor.x,s=0;return f.x>=i&&f.x<i+t&&(s=-r*this.anchor.y,f.y>=s&&f.y<s+r)}/**
   * Destroys this sprite and optionally its texture and children.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param [options.children=false] - if set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param [options.texture=false] - Should it destroy the current texture of the sprite as well
   * @param [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
   */destroy(e){if(super.destroy(e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof e?e:e?.texture){let t="boolean"==typeof e?e:e?.baseTexture;this._texture.destroy(!!t)}this._texture=null}// some helper functions..
/**
   * Helper function that creates a new sprite based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @param {string|PIXI.Texture|HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} source
   *     - Source to create texture from
   * @param {object} [options] - See {@link PIXI.BaseTexture}'s constructor for options.
   * @returns The newly created sprite
   */static from(e,t){let r=e instanceof l.Texture?e:(0,l.Texture).from(e,t);return new g(r)}/**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   *
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   *
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.
   * @default false
   */set roundPixels(e){this._roundPixels!==e&&(this._transformID=-1,this._transformTrimmedID=-1),this._roundPixels=e}get roundPixels(){return this._roundPixels}/** The width of the sprite, setting this will actually modify the scale to achieve the value set. */get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){let t=u.sign(this.scale.x)||1;this.scale.x=t*e/this._texture.orig.width,this._width=e}/** The height of the sprite, setting this will actually modify the scale to achieve the value set. */get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){let t=u.sign(this.scale.y)||1;this.scale.y=t*e/this._texture.orig.height,this._height=e}/**
   * The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
   * and passed to the constructor.
   *
   * The default is `(0,0)`, this means the sprite's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(Texture.WHITE);
   * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
   */get anchor(){return this._anchor}set anchor(e){this._anchor.copyFrom(e)}/**
   * The tint applied to the sprite. This is a hex value.
   *
   * A value of 0xFFFFFF will remove any tint effect.
   * @default 0xFFFFFF
   */get tint(){return this._tintColor.value}set tint(e){this._tintColor.setValue(e),this._tintRGB=this._tintColor.toLittleEndianNumber()}/**
   * Get the tint as a RGB integer.
   * @ignore
   */get tintValue(){return this._tintColor.toNumber()}/** The texture that the sprite is using. */get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=e||l.Texture.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,e&&(e.baseTexture.valid?this._onTextureUpdate():e.once("update",this._onTextureUpdate,this)))}}}),a("kIsda",function(e,t){n("dyEru");var r=n("7h4dW"),i=n("7uhWd");r.DisplayObject.prototype.name=null,i.Container.prototype.getChildByName=function(e,t){for(let t=0,r=this.children.length;t<r;t++)if(this.children[t].name===e)return this.children[t];if(t)for(let t=0,r=this.children.length;t<r;t++){let r=this.children[t];if(!r.getChildByName)continue;let i=r.getChildByName(e,!0);if(i)return i}return null}}),a("a6vMi",function(e,t){n("2AhlO");var r=n("iVQEG");n("dyEru"),n("7h4dW").DisplayObject.prototype.getGlobalPosition=function(e=new r.Point,t=!1){return this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e}}),a("49CXl",function(e,t){n("2AhlO");var r=n("MiLFw");n("aTvPy");var i=n("2Ib1l");n("lTWDV");var s=n("2n2Mw"),a=n("jxwZc");n("3qSPq");var o=n("7Yk2H");n("9bQIa");var l=n("2ImQ3");n("2th6e");var h=n("dm2t6");n("57RIq");var u=n("6E9gA");let d={AlphaFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.AlphaFilter
   */i.AlphaFilter,BlurFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilter
   */s.BlurFilter,BlurFilterPass:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilterPass
   */a.BlurFilterPass,ColorMatrixFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.ColorMatrixFilter
   */o.ColorMatrixFilter,DisplacementFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.DisplacementFilter
   */l.DisplacementFilter,FXAAFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.FXAAFilter
   */h.FXAAFilter,NoiseFilter:/**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.NoiseFilter
   */u.NoiseFilter};Object.entries(d).forEach(([e,t])=>{Object.defineProperty(d,e,{get:()=>(r.deprecation("7.1.0",`filters.${e} has moved to ${e}`),t)})})}),a("aTvPy",function(t,r){e(t.exports,"AlphaFilter",()=>n("2Ib1l").AlphaFilter),n("2Ib1l")}),a("2Ib1l",function(t,r){e(t.exports,"AlphaFilter",()=>o),n("2AhlO");var i=n("cG6vK"),s=n("5Knew"),a=n("3knAH");class o extends s.Filter{/**
   * @param alpha - Amount of alpha from 0 to 1, where 0 is transparent
   */constructor(e=1){super(i.defaultVertex,a.default,{uAlpha:1}),this.alpha=e}/**
   * Coefficient for alpha multiplication
   * @default 1
   */get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}}}),a("3knAH",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`}),a("lTWDV",function(t,r){e(t.exports,"BlurFilter",()=>n("2n2Mw").BlurFilter),e(t.exports,"BlurFilterPass",()=>n("jxwZc").BlurFilterPass),n("2n2Mw"),n("jxwZc")}),a("2n2Mw",function(t,r){e(t.exports,"BlurFilter",()=>o),n("2AhlO");var i=n("5Knew"),s=n("jetUE"),a=n("jxwZc");class o extends i.Filter{/**
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */constructor(e=8,t=4,r=i.Filter.defaultResolution,s=5){super(),this._repeatEdgePixels=!1,this.blurXFilter=new a.BlurFilterPass(!0,e,t,r,s),this.blurYFilter=new a.BlurFilterPass(!1,e,t,r,s),this.resolution=r,this.quality=t,this.blur=e,this.repeatEdgePixels=!1}/**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */apply(e,t,r,i){let n=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(n&&a){let n=e.getFilterTexture();this.blurXFilter.apply(e,t,n,s.CLEAR_MODES.CLEAR),this.blurYFilter.apply(e,n,r,i),e.returnFilterTexture(n)}else a?this.blurYFilter.apply(e,t,r,i):this.blurXFilter.apply(e,t,r,i)}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}/**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 2
   */get blur(){return this.blurXFilter.blur}set blur(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}/**
   * Sets the number of passes for blur. More passes means higher quality bluring.
   * @default 1
   */get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}/**
   * Sets the strength of the blurX property
   * @default 2
   */get blurX(){return this.blurXFilter.blur}set blurX(e){this.blurXFilter.blur=e,this.updatePadding()}/**
   * Sets the strength of the blurY property
   * @default 2
   */get blurY(){return this.blurYFilter.blur}set blurY(e){this.blurYFilter.blur=e,this.updatePadding()}/**
   * Sets the blendmode of the filter
   * @default PIXI.BLEND_MODES.NORMAL
   */get blendMode(){return this.blurYFilter.blendMode}set blendMode(e){this.blurYFilter.blendMode=e}/**
   * If set to true the edge of the target will be clamped
   * @default false
   */get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}}}),a("jxwZc",function(t,r){e(t.exports,"BlurFilterPass",()=>l),n("2AhlO");var i=n("5Knew"),s=n("jetUE"),a=n("dGxLT"),o=n("6d5AF");class l extends i.Filter{/**
   * @param horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */constructor(e,t=8,r=4,s=i.Filter.defaultResolution,n=5){let l=(0,o.generateBlurVertSource)(n,e),h=(0,a.generateBlurFragSource)(n);super(l,h),this.horizontal=e,this.resolution=s,this._quality=0,this.quality=r,this.blur=t}/**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */apply(e,t,r,i){if(r?this.horizontal?this.uniforms.strength=1/r.width*(r.width/t.width):this.uniforms.strength=1/r.height*(r.height/t.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/t.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/t.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)e.applyFilter(this,t,r,i);else{let n=e.getFilterTexture(),a=e.renderer,o=t,l=n;this.state.blend=!1,e.applyFilter(this,o,l,s.CLEAR_MODES.CLEAR);for(let t=1;t<this.passes-1;t++){e.bindAndClear(o,s.CLEAR_MODES.BLIT),this.uniforms.uSampler=l;let t=l;l=o,o=t,a.shader.bind(this),a.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,l,r,i),e.returnFilterTexture(n)}}/**
   * Sets the strength of both the blur.
   * @default 16
   */get blur(){return this.strength}set blur(e){this.padding=1+2*Math.abs(e),this.strength=e}/**
   * Sets the quality of the blur by modifying the number of passes. More passes means higher
   * quality bluring but the lower the performance.
   * @default 4
   */get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}}}),a("dGxLT",function(t,r){e(t.exports,"generateBlurFragSource",()=>n);let i={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},s=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function n(e){let t;let r=i[e],n=r.length,a=s,o="";for(let i=0;i<e;i++){let s="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%",i.toString());t=i,i>=n&&(t=e-i-1),o+=(s=s.replace("%value%",r[t].toString()))+`
`}return(a=a.replace("%blur%",o)).replace("%size%",e.toString())}}),a("6d5AF",function(t,r){e(t.exports,"generateBlurVertSource",()=>s);let i=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function s(e,t){let r=Math.ceil(e/2),s=i,n="",a;a=t?"vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":"vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(let t=0;t<e;t++){let e=a.replace("%index%",t.toString());n+=(e=e.replace("%sampleIndex%",`${t-(r-1)}.0`))+`
`}return(s=s.replace("%blur%",n)).replace("%size%",e.toString())}}),a("3qSPq",function(t,r){e(t.exports,"ColorMatrixFilter",()=>n("7Yk2H").ColorMatrixFilter),n("7Yk2H")}),a("7Yk2H",function(t,r){e(t.exports,"ColorMatrixFilter",()=>l),n("2AhlO");var i=n("cG6vK"),s=n("5xg5I"),a=n("5Knew"),o=n("6XTGu");class l extends a.Filter{constructor(){let e={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};super(i.defaultFilterVertex,o.default,e),this.alpha=1}/**
   * Transforms current matrix and set the new one
   * @param {number[]} matrix - 5x4 matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */_loadMatrix(e,t=!1){let r=e;t&&(this._multiply(r,this.uniforms.m,e),r=this._colorMatrix(r)),this.uniforms.m=r}/**
   * Multiplies two mat5's
   * @private
   * @param out - 5x4 matrix the receiving matrix
   * @param a - 5x4 matrix the first operand
   * @param b - 5x4 matrix the second operand
   * @returns {number[]} 5x4 matrix
   */_multiply(e,t,r){return e[0]=t[0]*r[0]+t[1]*r[5]+t[2]*r[10]+t[3]*r[15],e[1]=t[0]*r[1]+t[1]*r[6]+t[2]*r[11]+t[3]*r[16],e[2]=t[0]*r[2]+t[1]*r[7]+t[2]*r[12]+t[3]*r[17],e[3]=t[0]*r[3]+t[1]*r[8]+t[2]*r[13]+t[3]*r[18],e[4]=t[0]*r[4]+t[1]*r[9]+t[2]*r[14]+t[3]*r[19]+t[4],e[5]=t[5]*r[0]+t[6]*r[5]+t[7]*r[10]+t[8]*r[15],e[6]=t[5]*r[1]+t[6]*r[6]+t[7]*r[11]+t[8]*r[16],e[7]=t[5]*r[2]+t[6]*r[7]+t[7]*r[12]+t[8]*r[17],e[8]=t[5]*r[3]+t[6]*r[8]+t[7]*r[13]+t[8]*r[18],e[9]=t[5]*r[4]+t[6]*r[9]+t[7]*r[14]+t[8]*r[19]+t[9],e[10]=t[10]*r[0]+t[11]*r[5]+t[12]*r[10]+t[13]*r[15],e[11]=t[10]*r[1]+t[11]*r[6]+t[12]*r[11]+t[13]*r[16],e[12]=t[10]*r[2]+t[11]*r[7]+t[12]*r[12]+t[13]*r[17],e[13]=t[10]*r[3]+t[11]*r[8]+t[12]*r[13]+t[13]*r[18],e[14]=t[10]*r[4]+t[11]*r[9]+t[12]*r[14]+t[13]*r[19]+t[14],e[15]=t[15]*r[0]+t[16]*r[5]+t[17]*r[10]+t[18]*r[15],e[16]=t[15]*r[1]+t[16]*r[6]+t[17]*r[11]+t[18]*r[16],e[17]=t[15]*r[2]+t[16]*r[7]+t[17]*r[12]+t[18]*r[17],e[18]=t[15]*r[3]+t[16]*r[8]+t[17]*r[13]+t[18]*r[18],e[19]=t[15]*r[4]+t[16]*r[9]+t[17]*r[14]+t[18]*r[19]+t[19],e}/**
   * Create a Float32 Array and normalize the offset component to 0-1
   * @param {number[]} matrix - 5x4 matrix
   * @returns {number[]} 5x4 matrix with all values between 0-1
   */_colorMatrix(e){let t=new Float32Array(e);return t[4]/=255,t[9]/=255,t[14]/=255,t[19]/=255,t}/**
   * Adjusts brightness
   * @param b - value of the brigthness (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */brightness(e,t){this._loadMatrix([e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0],t)}/**
   * Sets each channel on the diagonal of the color matrix.
   * This can be used to achieve a tinting effect on Containers similar to the tint field of some
   * display objects like Sprite, Text, Graphics, and Mesh.
   * @param color - Color of the tint. This is a hex value.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */tint(e,t){let[r,i,n]=(0,s.Color).shared.setValue(e).toArray();this._loadMatrix([r,0,0,0,0,0,i,0,0,0,0,0,n,0,0,0,0,0,1,0],t)}/**
   * Set the matrices in grey scales
   * @param scale - value of the grey (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */greyscale(e,t){this._loadMatrix([e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0],t)}/**
   * Set the black and white matrice.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */blackAndWhite(e){this._loadMatrix([.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0],e)}/**
   * Set the hue property of the color
   * @param rotation - in degrees
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */hue(e,t){e=(e||0)/180*Math.PI;let r=Math.cos(e),i=Math.sin(e),s=1/3,n=(0,Math.sqrt)(s);this._loadMatrix([r+(1-r)*s,s*(1-r)-n*i,s*(1-r)+n*i,0,0,s*(1-r)+n*i,r+s*(1-r),s*(1-r)-n*i,0,0,s*(1-r)-n*i,s*(1-r)+n*i,r+s*(1-r),0,0,0,0,0,1,0],t)}/**
   * Set the contrast matrix, increase the separation between dark and bright
   * Increase contrast : shadows darker and highlights brighter
   * Decrease contrast : bring the shadows up and the highlights down
   * @param amount - value of the contrast (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */contrast(e,t){let r=(e||0)+1,i=-.5*(r-1);this._loadMatrix([r,0,0,0,i,0,r,0,0,i,0,0,r,0,i,0,0,0,1,0],t)}/**
   * Set the saturation matrix, increase the separation between colors
   * Increase saturation : increase contrast, brightness, and sharpness
   * @param amount - The saturation amount (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */saturate(e=0,t){let r=2*e/3+1,i=-((r-1)*.5);this._loadMatrix([r,i,i,0,0,i,r,i,0,0,i,i,r,0,0,0,0,0,1,0],t)}/** Desaturate image (remove color) Call the saturate function */desaturate(){this.saturate(-1)}/**
   * Negative image (inverse of classic rgb matrix)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */negative(e){this._loadMatrix([-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0],e)}/**
   * Sepia image
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */sepia(e){this._loadMatrix([.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0],e)}/**
   * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */technicolor(e){this._loadMatrix([1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0],e)}/**
   * Polaroid filter
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */polaroid(e){this._loadMatrix([1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],e)}/**
   * Filter who transforms : Red -> Blue and Blue -> Red
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */toBGR(e){this._loadMatrix([0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],e)}/**
   * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */kodachrome(e){this._loadMatrix([1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0],e)}/**
   * Brown delicious browni filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */browni(e){this._loadMatrix([.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0],e)}/**
   * Vintage filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */vintage(e){this._loadMatrix([.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0],e)}/**
   * We don't know exactly what it does, kind of gradient map, but funny to play with!
   * @param desaturation - Tone values.
   * @param toned - Tone values.
   * @param lightColor - Tone values, example: `0xFFE580`
   * @param darkColor - Tone values, example: `0xFFE580`
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */colorTone(e,t,r,i,n){e=e||.2,t=t||.15,r=r||16770432,i=i||3375104;let a=s.Color.shared,[o,l,h]=a.setValue(r).toArray(),[u,d,c]=a.setValue(i).toArray(),p=[.3,.59,.11,0,0,o,l,h,e,0,u,d,c,t,0,o-u,l-d,h-c,0,0];this._loadMatrix(p,n)}/**
   * Night effect
   * @param intensity - The intensity of the night effect.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */night(e,t){e=e||.1;let r=[-2*e,-e,0,0,0,-e,0,e,0,0,0,e,2*e,0,0,0,0,0,1,0];this._loadMatrix(r,t)}/**
   * Predator effect
   *
   * Erase the current matrix by setting a new indepent one
   * @param amount - how much the predator feels his future victim
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */predator(e,t){this._loadMatrix([// row 1
11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,// row 2
-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,// row 3
-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,// row 4
0,0,0,1,0],t)}/**
   * LSD effect
   *
   * Multiply the current matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */lsd(e){this._loadMatrix([2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0],e)}/** Erase the current matrix by setting the default one. */reset(){this._loadMatrix([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],!1)}/**
   * The matrix of the color matrix filter
   * @member {number[]}
   * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
   */get matrix(){return this.uniforms.m}set matrix(e){this.uniforms.m=e}/**
   * The opacity value to use when mixing the original and resultant colors.
   *
   * When the value is 0, the original color is used without modification.
   * When the value is 1, the result color is used.
   * When in the range (0, 1) the color is interpolated between the original and result by this amount.
   * @default 1
   */get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}}l.prototype.grayscale=l.prototype.greyscale}),a("6XTGu",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`}),a("9bQIa",function(t,r){e(t.exports,"DisplacementFilter",()=>n("2ImQ3").DisplacementFilter),n("2ImQ3")}),a("2ImQ3",function(t,r){e(t.exports,"DisplacementFilter",()=>h),n("2AhlO");var i=n("fhlwZ"),s=n("iVQEG"),a=n("5Knew"),o=n("4LtJr"),l=n("iVrhE");class h extends a.Filter{/**
   * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
   * @param scale - The scale of the displacement
   */constructor(e,t){let r=new i.Matrix;e.renderable=!1,super(l.default,o.default,{mapSampler:e._texture,filterMatrix:r,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])}),this.maskSprite=e,this.maskMatrix=r,null==t&&(t=20),this.scale=new s.Point(t,t)}/**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - clearMode.
   */apply(e,t,r,i){this.uniforms.filterMatrix=e.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;let s=this.maskSprite.worldTransform,n=Math.sqrt(s.a*s.a+s.b*s.b),a=Math.sqrt(s.c*s.c+s.d*s.d);0!==n&&0!==a&&(this.uniforms.rotation[0]=s.a/n,this.uniforms.rotation[1]=s.b/n,this.uniforms.rotation[2]=s.c/a,this.uniforms.rotation[3]=s.d/a),e.applyFilter(this,t,r,i)}/** The texture used for the displacement map. Must be power of 2 sized texture. */get map(){return this.uniforms.mapSampler}set map(e){this.uniforms.mapSampler=e}}}),a("4LtJr",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`}),a("iVrhE",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`}),a("2th6e",function(t,r){e(t.exports,"FXAAFilter",()=>n("dm2t6").FXAAFilter),n("dm2t6")}),a("dm2t6",function(t,r){e(t.exports,"FXAAFilter",()=>o),n("2AhlO");var i=n("5Knew"),s=n("41ZAG"),a=n("6ud4j");class o extends i.Filter{constructor(){super(a.default,s.default)}}}),a("41ZAG",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`}),a("6ud4j",function(t,r){e(t.exports,"default",()=>i);var i=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`}),a("57RIq",function(t,r){e(t.exports,"NoiseFilter",()=>n("6E9gA").NoiseFilter),n("6E9gA")}),a("6E9gA",function(t,r){e(t.exports,"NoiseFilter",()=>o),n("2AhlO");var i=n("cG6vK"),s=n("5Knew"),a=n("g3opZ");class o extends s.Filter{/**
   * @param {number} [noise=0.5] - The noise intensity, should be a normalized value in the range [0, 1].
   * @param {number} [seed] - A random seed for the noise generation. Default is `Math.random()`.
   */constructor(e=.5,t=Math.random()){super(i.defaultFilterVertex,a.default,{uNoise:0,uSeed:0}),this.noise=e,this.seed=t}/**
   * The amount of noise to apply, this value should be in the range (0, 1].
   * @default 0.5
   */get noise(){return this.uniforms.uNoise}set noise(e){this.uniforms.uNoise=e}/** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}}}),a("g3opZ",function(t,r){e(t.exports,"default",()=>i);var i=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`}),a("k6gpf",function(e,t){n("3weuK"),n("aeEqI")}),a("3weuK",function(e,t){n("2AhlO");var r=n("MiLFw"),i=n("glXXo");n("dyEru");var s=n("7h4dW");n("ebTHV");var a=n("k51aj"),o=n("aeEqI");(0,s.DisplayObject).mixin(o.accessibleTarget);class l{// 2fps
/**
   * @param {PIXI.CanvasRenderer|PIXI.Renderer} renderer - A reference to the current renderer
   */constructor(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(r.isMobile.tablet||r.isMobile.phone)&&this.createTouchHook();let t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="2",this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}/**
   * Value of `true` if accessibility is currently active and accessibility layers are showing.
   * @member {boolean}
   * @readonly
   */get isActive(){return this._isActive}/**
   * Value of `true` if accessibility is enabled for touch devices.
   * @member {boolean}
   * @readonly
   */get isMobileAccessibility(){return this._isMobileAccessibility}/**
   * Creates the touch hooks.
   * @private
   */createTouchHook(){let e=document.createElement("button");e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.left="-1000px",e.style.zIndex="2",e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this.activate(),this.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e}/**
   * Destroys the touch hooks.
   * @private
   */destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}/**
   * Activating will cause the Accessibility layer to be shown.
   * This is called when a user presses the tab key.
   * @private
   */activate(){this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),this.renderer.view.parentNode?.appendChild(this.div))}/**
   * Deactivating will cause the Accessibility layer to be hidden.
   * This is called when a user moves the mouse.
   * @private
   */deactivate(){!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),this.div.parentNode?.removeChild(this.div))}/**
   * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
   * @private
   * @param {PIXI.Container} displayObject - The DisplayObject to check.
   */updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);let t=e.children;if(t)for(let e=0;e<t.length;e++)this.updateAccessibleObjects(t[e])}/**
   * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
   * @private
   */update(){let e=performance.now();if(r.isMobile.android.device&&e<this.androidUpdateCount||(this.androidUpdateCount=e+this.androidUpdateFrequency,!this.renderer.renderingToScreen))return;this.renderer.lastObjectRendered&&this.updateAccessibleObjects(this.renderer.lastObjectRendered);let{x:t,y:i,width:s,height:n}=this.renderer.view.getBoundingClientRect(),{width:a,height:o,resolution:l}=this.renderer,h=s/a*l,u=n/o*l,d=this.div;d.style.left=`${t}px`,d.style.top=`${i}px`,d.style.width=`${a}px`,d.style.height=`${o}px`;for(let e=0;e<this.children.length;e++){let t=this.children[e];if(t.renderId!==this.renderId)t._accessibleActive=!1,r.removeItems(this.children,e,1),this.div.removeChild(t._accessibleDiv),this.pool.push(t._accessibleDiv),t._accessibleDiv=null,e--;else{d=t._accessibleDiv;let e=t.hitArea,r=t.worldTransform;t.hitArea?(d.style.left=`${(r.tx+e.x*r.a)*h}px`,d.style.top=`${(r.ty+e.y*r.d)*u}px`,d.style.width=`${e.width*r.a*h}px`,d.style.height=`${e.height*r.d*u}px`):(e=t.getBounds(),this.capHitArea(e),d.style.left=`${e.x*h}px`,d.style.top=`${e.y*u}px`,d.style.width=`${e.width*h}px`,d.style.height=`${e.height*u}px`,d.title!==t.accessibleTitle&&null!==t.accessibleTitle&&(d.title=t.accessibleTitle),d.getAttribute("aria-label")!==t.accessibleHint&&null!==t.accessibleHint&&d.setAttribute("aria-label",t.accessibleHint)),(t.accessibleTitle!==d.title||t.tabIndex!==d.tabIndex)&&(d.title=t.accessibleTitle,d.tabIndex=t.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}/**
   * private function that will visually add the information to the
   * accessability div
   * @param {HTMLElement} div -
   */updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}/**
   * Adjust the hit area based on the bounds of a display object
   * @param {PIXI.Rectangle} hitArea - Bounds of the child
   */capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);let{width:t,height:r}=this.renderer;e.x+e.width>t&&(e.width=t-e.x),e.y+e.height>r&&(e.height=r-e.y)}/**
   * Adds a DisplayObject to the accessibility manager
   * @private
   * @param {PIXI.DisplayObject} displayObject - The child to make accessible.
   */addChild(e){let t=this.pool.pop();t||((t=document.createElement("button")).style.width="100px",t.style.height="100px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex="2",t.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&null!==e.accessibleTitle?t.title=e.accessibleTitle:e.accessibleHint&&null!==e.accessibleHint||(t.title=`displayObject ${e.tabIndex}`),e.accessibleHint&&null!==e.accessibleHint&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex}/**
   * Dispatch events with the EventSystem.
   * @param e
   * @param type
   * @private
   */_dispatchEvent(e,t){let{displayObject:r}=e.target,i=this.renderer.events.rootBoundary,s=Object.assign(new a.FederatedEvent(i),{target:r});i.rootTarget=this.renderer.lastObjectRendered,t.forEach(e=>i.dispatchEvent(s,e))}/**
   * Maps the div button press to pixi's EventSystem (click)
   * @private
   * @param {MouseEvent} e - The click event.
   */_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}/**
   * Maps the div focus events to pixi's EventSystem (mouseover)
   * @private
   * @param {FocusEvent} e - The focus event.
   */_onFocus(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,["mouseover"])}/**
   * Maps the div focus events to pixi's EventSystem (mouseout)
   * @private
   * @param {FocusEvent} e - The focusout event.
   */_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite"),this._dispatchEvent(e,["mouseout"])}/**
   * Is called when a key is pressed
   * @private
   * @param {KeyboardEvent} e - The keydown event.
   */_onKeyDown(e){9===e.keyCode&&this.activate()}/**
   * Is called when the mouse moves across the renderer element
   * @private
   * @param {MouseEvent} e - The mouse event.
   */_onMouseMove(e){0===e.movementX&&0===e.movementY||this.deactivate()}/** Destroys the accessibility manager */destroy(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null}}l.extension={name:"accessibility",type:[i.ExtensionType.RendererPlugin,i.ExtensionType.CanvasRendererPlugin]},(0,i.extensions).add(l)}),a("ebTHV",function(t,r){e(t.exports,"FederatedEvent",()=>n("k51aj").FederatedEvent),n("3Dj1a"),n("eixbG"),n("k51aj"),n("dyvlu"),n("bvjOC"),n("e7J2h"),n("jBwgD"),n("jzacj")}),a("3Dj1a",function(t,r){e(t.exports,"EventBoundary",()=>c),n("2AhlO");var i=n("iVQEG"),s=n("MiLFw"),a=n("1x2P3"),o=n("e7J2h"),l=n("jBwgD"),h=n("jzacj");let u=new i.Point,d=new i.Point;class c{/**
   * @param rootTarget - The holder of the event boundary.
   */constructor(e){this.dispatch=new s.EventEmitter,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=/* @__PURE__ */new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=e,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}/**
   * Adds an event mapping for the event `type` handled by `fn`.
   *
   * Event mappings can be used to implement additional or custom events. They take an event
   * coming from the upstream scene (or directly from the {@link PIXI.EventSystem}) and dispatch new downstream events
   * generally trickling down and bubbling up to {@link PIXI.EventBoundary.rootTarget this.rootTarget}.
   *
   * To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
   * instead.
   * @param type - The type of upstream event to map.
   * @param fn - The mapping method. The context of this function must be bound manually, if desired.
   */addEventMapping(e,t){this.mappingTable[e]||(this.mappingTable[e]=[]),this.mappingTable[e].push({fn:t,priority:0}),this.mappingTable[e].sort((e,t)=>e.priority-t.priority)}/**
   * Dispatches the given event
   * @param e
   * @param type
   */dispatchEvent(e,t){e.propagationStopped=!1,e.propagationImmediatelyStopped=!1,this.propagate(e,t),this.dispatch.emit(t||e.type,e)}/**
   * Maps the given upstream event through the event boundary and propagates it downstream.
   * @param e
   */mapEvent(e){if(!this.rootTarget)return;let t=this.mappingTable[e.type];if(t)for(let r=0,i=t.length;r<i;r++)t[r].fn(e);else console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`)}/**
   * Finds the DisplayObject that is the target of a event at the given coordinates.
   *
   * The passed (x,y) coordinates are in the world space above this event boundary.
   * @param x
   * @param y
   */hitTest(e,t){a.EventsTicker.pauseUpdate=!0;let r=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",i=this[r](this.rootTarget,this.rootTarget.eventMode,u.set(e,t),this.hitTestFn,this.hitPruneFn);return i&&i[0]}/**
   * Propagate the passed event from from {@link PIXI.EventBoundary.rootTarget this.rootTarget} to its
   * target {@code e.target}.
   * @param e - The event to propagate.
   * @param type
   */propagate(e,t){if(!e.target)return;let r=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;for(let i=0,s=r.length-1;i<s;i++)if(e.currentTarget=r[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return;if(e.eventPhase=e.AT_TARGET,e.currentTarget=e.target,this.notifyTarget(e,t),!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let i=r.length-2;i>=0;i--)if(e.currentTarget=r[i],this.notifyTarget(e,t),e.propagationStopped||e.propagationImmediatelyStopped)return}}/**
   * Emits the event {@code e} to all interactive display objects. The event is propagated in the bubbling phase always.
   *
   * This is used in the `globalpointermove` event.
   * @param e - The emitted event.
   * @param type - The listeners to notify.
   * @param targets - The targets to notify.
   */all(e,t,r=this._allInteractiveElements){if(0===r.length)return;e.eventPhase=e.BUBBLING_PHASE;let i=Array.isArray(t)?t:[t];for(let t=r.length-1;t>=0;t--)i.forEach(i=>{e.currentTarget=r[t],this.notifyTarget(e,i)})}/**
   * Finds the propagation path from {@link PIXI.EventBoundary.rootTarget rootTarget} to the passed
   * {@code target}. The last element in the path is {@code target}.
   * @param target
   */propagationPath(e){let t=[e];for(let r=0;r<2048&&e!==this.rootTarget;r++){if(!e.parent)throw Error("Cannot find propagation path to disconnected target");t.push(e.parent),e=e.parent}return t.reverse(),t}hitTestMoveRecursive(e,t,r,i,s,n=!1){let o=!1;if(this._interactivePrune(e))return null;if(("dynamic"===e.eventMode||"dynamic"===t)&&(a.EventsTicker.pauseUpdate=!1),e.interactiveChildren&&e.children){let a=e.children;for(let l=a.length-1;l>=0;l--){let h=a[l],u=this.hitTestMoveRecursive(h,this._isInteractive(t)?t:h.eventMode,r,i,s,n||s(e,r));if(u){if(u.length>0&&!u[u.length-1].parent)continue;let t=e.isInteractive();(u.length>0||t)&&(t&&this._allInteractiveElements.push(e),u.push(e)),0===this._hitElements.length&&(this._hitElements=u),o=!0}}}let l=this._isInteractive(t),h=e.isInteractive();return l&&h&&this._allInteractiveElements.push(e),n||this._hitElements.length>0?null:o?this._hitElements:l&&!s(e,r)&&i(e,r)?h?[e]:[]:null}/**
   * Recursive implementation for {@link PIXI.EventBoundary.hitTest hitTest}.
   * @param currentTarget - The DisplayObject that is to be hit tested.
   * @param eventMode - The event mode for the `currentTarget` or one of its parents.
   * @param location - The location that is being tested for overlap.
   * @param testFn - Callback that determines whether the target passes hit testing. This callback
   *  can assume that `pruneFn` failed to prune the display object.
   * @param pruneFn - Callback that determiness whether the target and all of its children
   *  cannot pass the hit test. It is used as a preliminary optimization to prune entire subtrees
   *  of the scene graph.
   * @returns An array holding the hit testing target and all its ancestors in order. The first element
   *  is the target itself and the last is {@link PIXI.EventBoundary.rootTarget rootTarget}. This is the opposite
   *  order w.r.t. the propagation path. If no hit testing target is found, null is returned.
   */hitTestRecursive(e,t,r,i,s){if(this._interactivePrune(e)||s(e,r))return null;if(("dynamic"===e.eventMode||"dynamic"===t)&&(a.EventsTicker.pauseUpdate=!1),e.interactiveChildren&&e.children){let n=e.children;for(let a=n.length-1;a>=0;a--){let o=n[a],l=this.hitTestRecursive(o,this._isInteractive(t)?t:o.eventMode,r,i,s);if(l){if(l.length>0&&!l[l.length-1].parent)continue;let t=e.isInteractive();return(l.length>0||t)&&l.push(e),l}}}let n=this._isInteractive(t),o=e.isInteractive();return n&&i(e,r)?o?[e]:[]:null}_isInteractive(e){return"static"===e||"dynamic"===e}_interactivePrune(e){return!!(!e||e.isMask||!e.visible||!e.renderable||"none"===e.eventMode||"passive"===e.eventMode&&!e.interactiveChildren||e.isMask)}/**
   * Checks whether the display object or any of its children cannot pass the hit test at all.
   *
   * {@link PIXI.EventBoundary}'s implementation uses the {@link PIXI.DisplayObject.hitArea hitArea}
   * and {@link PIXI.DisplayObject._mask} for pruning.
   * @param displayObject
   * @param location
   */hitPruneFn(e,t){if(e.hitArea&&(e.worldTransform.applyInverse(t,d),!e.hitArea.contains(d.x,d.y)))return!0;if(e._mask){let r=e._mask.isMaskData?e._mask.maskObject:e._mask;if(r&&!r.containsPoint?.(t))return!0}return!1}/**
   * Checks whether the display object passes hit testing for the given location.
   * @param displayObject
   * @param location
   * @returns - Whether `displayObject` passes hit testing for `location`.
   */hitTestFn(e,t){return"passive"!==e.eventMode&&(!!e.hitArea||!!e.containsPoint&&e.containsPoint(t))}/**
   * Notify all the listeners to the event's `currentTarget`.
   *
   * If the `currentTarget` contains the property `on<type>`, then it is called here,
   * simulating the behavior from version 6.x and prior.
   * @param e - The event passed to the target.
   * @param type
   */notifyTarget(e,t){t=t??e.type;let r=`on${t}`;e.currentTarget[r]?.(e);let i=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${t}capture`:t;this.notifyListeners(e,i),e.eventPhase===e.AT_TARGET&&this.notifyListeners(e,t)}/**
   * Maps the upstream `pointerdown` events to a downstream `pointerdown` event.
   *
   * `touchstart`, `rightdown`, `mousedown` events are also dispatched for specific pointer types.
   * @param from
   */mapPointerDown(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}let t=this.createPointerEvent(e);if(this.dispatchEvent(t,"pointerdown"),"touch"===t.pointerType)this.dispatchEvent(t,"touchstart");else if("mouse"===t.pointerType||"pen"===t.pointerType){let e=2===t.button;this.dispatchEvent(t,e?"rightdown":"mousedown")}let r=this.trackingData(e.pointerId);r.pressTargetsByButton[e.button]=t.composedPath(),this.freeEvent(t)}/**
   * Maps the upstream `pointermove` to downstream `pointerout`, `pointerover`, and `pointermove` events, in that order.
   *
   * The tracking data for the specific pointer has an updated `overTarget`. `mouseout`, `mouseover`,
   * `mousemove`, and `touchmove` events are fired as well for specific pointer types.
   * @param from - The upstream `pointermove` event.
   */mapPointerMove(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;let t=this.createPointerEvent(e);this._isPointerMoveEvent=!1;let r="mouse"===t.pointerType||"pen"===t.pointerType,i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.overTargets);if(i.overTargets?.length>0&&s!==t.target){let i="mousemove"===e.type?"mouseout":"pointerout",n=this.createPointerEvent(e,i,s);if(this.dispatchEvent(n,"pointerout"),r&&this.dispatchEvent(n,"mouseout"),!t.composedPath().includes(s)){let i=this.createPointerEvent(e,"pointerleave",s);for(i.eventPhase=i.AT_TARGET;i.target&&!t.composedPath().includes(i.target);)i.currentTarget=i.target,this.notifyTarget(i),r&&this.notifyTarget(i,"mouseleave"),i.target=i.target.parent;this.freeEvent(i)}this.freeEvent(n)}if(s!==t.target){let i="mousemove"===e.type?"mouseover":"pointerover",n=this.clonePointerEvent(t,i);this.dispatchEvent(n,"pointerover"),r&&this.dispatchEvent(n,"mouseover");let a=s?.parent;for(;a&&a!==this.rootTarget.parent&&a!==t.target;)a=a.parent;if(!a||a===this.rootTarget.parent){let e=this.clonePointerEvent(t,"pointerenter");for(e.eventPhase=e.AT_TARGET;e.target&&e.target!==s&&e.target!==this.rootTarget.parent;)e.currentTarget=e.target,this.notifyTarget(e),r&&this.notifyTarget(e,"mouseenter"),e.target=e.target.parent;this.freeEvent(e)}this.freeEvent(n)}let n=[],a=this.enableGlobalMoveEvents??!0;this.moveOnAll?n.push("pointermove"):this.dispatchEvent(t,"pointermove"),a&&n.push("globalpointermove"),"touch"===t.pointerType&&(this.moveOnAll?n.splice(1,0,"touchmove"):this.dispatchEvent(t,"touchmove"),a&&n.push("globaltouchmove")),r&&(this.moveOnAll?n.splice(1,0,"mousemove"):this.dispatchEvent(t,"mousemove"),a&&n.push("globalmousemove"),this.cursor=t.target?.cursor),n.length>0&&this.all(t,n),this._allInteractiveElements.length=0,this._hitElements.length=0,i.overTargets=t.composedPath(),this.freeEvent(t)}/**
   * Maps the upstream `pointerover` to downstream `pointerover` and `pointerenter` events, in that order.
   *
   * The tracking data for the specific pointer gets a new `overTarget`.
   * @param from - The upstream `pointerover` event.
   */mapPointerOver(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}let t=this.trackingData(e.pointerId),r=this.createPointerEvent(e),i="mouse"===r.pointerType||"pen"===r.pointerType;this.dispatchEvent(r,"pointerover"),i&&this.dispatchEvent(r,"mouseover"),"mouse"===r.pointerType&&(this.cursor=r.target?.cursor);let s=this.clonePointerEvent(r,"pointerenter");for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),i&&this.notifyTarget(s,"mouseenter"),s.target=s.target.parent;t.overTargets=r.composedPath(),this.freeEvent(r),this.freeEvent(s)}/**
   * Maps the upstream `pointerout` to downstream `pointerout`, `pointerleave` events, in that order.
   *
   * The tracking data for the specific pointer is cleared of a `overTarget`.
   * @param from - The upstream `pointerout` event.
   */mapPointerOut(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}let t=this.trackingData(e.pointerId);if(t.overTargets){let r="mouse"===e.pointerType||"pen"===e.pointerType,i=this.findMountedTarget(t.overTargets),s=this.createPointerEvent(e,"pointerout",i);this.dispatchEvent(s),r&&this.dispatchEvent(s,"mouseout");let n=this.createPointerEvent(e,"pointerleave",i);for(n.eventPhase=n.AT_TARGET;n.target&&n.target!==this.rootTarget.parent;)n.currentTarget=n.target,this.notifyTarget(n),r&&this.notifyTarget(n,"mouseleave"),n.target=n.target.parent;t.overTargets=null,this.freeEvent(s),this.freeEvent(n)}this.cursor=null}/**
   * Maps the upstream `pointerup` event to downstream `pointerup`, `pointerupoutside`,
   * and `click`/`rightclick`/`pointertap` events, in that order.
   *
   * The `pointerupoutside` event bubbles from the original `pointerdown` target to the most specific
   * ancestor of the `pointerdown` and `pointerup` targets, which is also the `click` event's target. `touchend`,
   * `rightup`, `mouseup`, `touchendoutside`, `rightupoutside`, `mouseupoutside`, and `tap` are fired as well for
   * specific pointer types.
   * @param from - The upstream `pointerup` event.
   */mapPointerUp(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}let t=performance.now(),r=this.createPointerEvent(e);if(this.dispatchEvent(r,"pointerup"),"touch"===r.pointerType)this.dispatchEvent(r,"touchend");else if("mouse"===r.pointerType||"pen"===r.pointerType){let e=2===r.button;this.dispatchEvent(r,e?"rightup":"mouseup")}let i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.pressTargetsByButton[e.button]),n=s;if(s&&!r.composedPath().includes(s)){let t=s;for(;t&&!r.composedPath().includes(t);){if(r.currentTarget=t,this.notifyTarget(r,"pointerupoutside"),"touch"===r.pointerType)this.notifyTarget(r,"touchendoutside");else if("mouse"===r.pointerType||"pen"===r.pointerType){let e=2===r.button;this.notifyTarget(r,e?"rightupoutside":"mouseupoutside")}t=t.parent}delete i.pressTargetsByButton[e.button],n=t}if(n){let s=this.clonePointerEvent(r,"click");s.target=n,s.path=null,i.clicksByButton[e.button]||(i.clicksByButton[e.button]={clickCount:0,target:s.target,timeStamp:t});let a=i.clicksByButton[e.button];if(a.target===s.target&&t-a.timeStamp<200?++a.clickCount:a.clickCount=1,a.target=s.target,a.timeStamp=t,s.detail=a.clickCount,"mouse"===s.pointerType){let e=2===s.button;this.dispatchEvent(s,e?"rightclick":"click")}else"touch"===s.pointerType&&this.dispatchEvent(s,"tap");this.dispatchEvent(s,"pointertap"),this.freeEvent(s)}this.freeEvent(r)}/**
   * Maps the upstream `pointerupoutside` event to a downstream `pointerupoutside` event, bubbling from the original
   * `pointerdown` target to `rootTarget`.
   *
   * (The most specific ancestor of the `pointerdown` event and the `pointerup` event must the
   * `{@link PIXI.EventBoundary}'s root because the `pointerup` event occurred outside of the boundary.)
   *
   * `touchendoutside`, `mouseupoutside`, and `rightupoutside` events are fired as well for specific pointer
   * types. The tracking data for the specific pointer is cleared of a `pressTarget`.
   * @param from - The upstream `pointerupoutside` event.
   */mapPointerUpOutside(e){if(!(e instanceof l.FederatedPointerEvent)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}let t=this.trackingData(e.pointerId),r=this.findMountedTarget(t.pressTargetsByButton[e.button]),i=this.createPointerEvent(e);if(r){let s=r;for(;s;)i.currentTarget=s,this.notifyTarget(i,"pointerupoutside"),"touch"===i.pointerType?this.notifyTarget(i,"touchendoutside"):("mouse"===i.pointerType||"pen"===i.pointerType)&&this.notifyTarget(i,2===i.button?"rightupoutside":"mouseupoutside"),s=s.parent;delete t.pressTargetsByButton[e.button]}this.freeEvent(i)}/**
   * Maps the upstream `wheel` event to a downstream `wheel` event.
   * @param from - The upstream `wheel` event.
   */mapWheel(e){if(!(e instanceof h.FederatedWheelEvent)){console.warn("EventBoundary cannot map a non-wheel event as a wheel event");return}let t=this.createWheelEvent(e);this.dispatchEvent(t),this.freeEvent(t)}/**
   * Finds the most specific event-target in the given propagation path that is still mounted in the scene graph.
   *
   * This is used to find the correct `pointerup` and `pointerout` target in the case that the original `pointerdown`
   * or `pointerover` target was unmounted from the scene graph.
   * @param propagationPath - The propagation path was valid in the past.
   * @returns - The most specific event-target still mounted at the same location in the scene graph.
   */findMountedTarget(e){if(!e)return null;let t=e[0];for(let r=1;r<e.length&&e[r].parent===t;r++)t=e[r];return t}/**
   * Creates an event whose {@code originalEvent} is {@code from}, with an optional `type` and `target` override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The {@code originalEvent} for the returned event.
   * @param [type=from.type] - The type of the returned event.
   * @param target - The target of the returned event.
   */createPointerEvent(e,t,r){let i=this.allocateEvent(l.FederatedPointerEvent);return this.copyPointerData(e,i),this.copyMouseData(e,i),this.copyData(e,i),i.nativeEvent=e.nativeEvent,i.originalEvent=e,i.target=r??this.hitTest(i.global.x,i.global.y)??this._hitElements[0],"string"==typeof t&&(i.type=t),i}/**
   * Creates a wheel event whose {@code originalEvent} is {@code from}.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The upstream wheel event.
   */createWheelEvent(e){let t=this.allocateEvent(h.FederatedWheelEvent);return this.copyWheelData(e,t),this.copyMouseData(e,t),this.copyData(e,t),t.nativeEvent=e.nativeEvent,t.originalEvent=e,t.target=this.hitTest(t.global.x,t.global.y),t}/**
   * Clones the event {@code from}, with an optional {@code type} override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The event to clone.
   * @param [type=from.type] - The type of the returned event.
   */clonePointerEvent(e,t){let r=this.allocateEvent(l.FederatedPointerEvent);return r.nativeEvent=e.nativeEvent,r.originalEvent=e.originalEvent,this.copyPointerData(e,r),this.copyMouseData(e,r),this.copyData(e,r),r.target=e.target,r.path=e.composedPath().slice(),r.type=t??r.type,r}/**
   * Copies wheel {@link PIXI.FederatedWheelEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + deltaMode
   * + deltaX
   * + deltaY
   * + deltaZ
   * @param from
   * @param to
   */copyWheelData(e,t){t.deltaMode=e.deltaMode,t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ}/**
   * Copies pointer {@link PIXI.FederatedPointerEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + pointerId
   * + width
   * + height
   * + isPrimary
   * + pointerType
   * + pressure
   * + tangentialPressure
   * + tiltX
   * + tiltY
   * @param from
   * @param to
   */copyPointerData(e,t){e instanceof l.FederatedPointerEvent&&t instanceof l.FederatedPointerEvent&&(t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist)}/**
   * Copies mouse {@link PIXI.FederatedMouseEvent} data from {@code from} to {@code to}.
   *
   * The following properties are copied:
   * + altKey
   * + button
   * + buttons
   * + clientX
   * + clientY
   * + metaKey
   * + movementX
   * + movementY
   * + pageX
   * + pageY
   * + x
   * + y
   * + screen
   * + shiftKey
   * + global
   * @param from
   * @param to
   */copyMouseData(e,t){e instanceof o.FederatedMouseEvent&&t instanceof o.FederatedMouseEvent&&(t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.copyFrom(e.client),t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.copyFrom(e.movement),t.screen.copyFrom(e.screen),t.shiftKey=e.shiftKey,t.global.copyFrom(e.global))}/**
   * Copies base {@link PIXI.FederatedEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + isTrusted
   * + srcElement
   * + timeStamp
   * + type
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */copyData(e,t){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.detail=e.detail,t.view=e.view,t.which=e.which,t.layer.copyFrom(e.layer),t.page.copyFrom(e.page)}/**
   * @param id - The pointer ID.
   * @returns The tracking data stored for the given pointer. If no data exists, a blank
   *  state will be created.
   */trackingData(e){return this.mappingState.trackingData[e]||(this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[e]}/**
   * Allocate a specific type of event from {@link PIXI.EventBoundary#eventPool this.eventPool}.
   *
   * This allocation is constructor-agnostic, as long as it only takes one argument - this event
   * boundary.
   * @param constructor - The event's constructor.
   */allocateEvent(e){this.eventPool.has(e)||this.eventPool.set(e,[]);let t=this.eventPool.get(e).pop()||new e(this);return t.eventPhase=t.NONE,t.currentTarget=null,t.path=null,t.target=null,t}/**
   * Frees the event and puts it back into the event pool.
   *
   * It is illegal to reuse the event until it is allocated again, using `this.allocateEvent`.
   *
   * It is also advised that events not allocated from {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}
   * not be freed. This is because of the possibility that the same event is freed twice, which can cause
   * it to be allocated twice & result in overwriting.
   * @param event - The event to be freed.
   * @throws Error if the event is managed by another event boundary.
   */freeEvent(e){if(e.manager!==this)throw Error("It is illegal to free an event not managed by this EventBoundary!");let t=e.constructor;this.eventPool.has(t)||this.eventPool.set(t,[]),this.eventPool.get(t).push(e)}/**
   * Similar to {@link PIXI.EventEmitter.emit}, except it stops if the `propagationImmediatelyStopped` flag
   * is set on the event.
   * @param e - The event to call each listener with.
   * @param type - The event key.
   */notifyListeners(e,t){let r=e.currentTarget._events[t];if(r&&e.currentTarget.isInteractive()){if("fn"in r)r.once&&e.currentTarget.removeListener(t,r.fn,void 0,!0),r.fn.call(r.context,e);else for(let i=0,s=r.length;i<s&&!e.propagationImmediatelyStopped;i++)r[i].once&&e.currentTarget.removeListener(t,r[i].fn,void 0,!0),r[i].fn.call(r[i].context,e)}}}}),a("1x2P3",function(t,r){e(t.exports,"EventsTicker",()=>a),n("2AhlO");var i=n("54AzN"),s=n("g7L3i");let a=new class{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}/**
   * Initializes the event ticker.
   * @param events - The event system.
   */init(e){this.removeTickerListener(),this.events=e,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}/** Whether to pause the update checks or not. */get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(e){this._pauseUpdate=e}/** Adds the ticker listener. */addTickerListener(){this.tickerAdded||!this.domElement||((0,i.Ticker).system.add(this.tickerUpdate,this,s.UPDATE_PRIORITY.INTERACTION),this.tickerAdded=!0)}/** Removes the ticker listener. */removeTickerListener(){this.tickerAdded&&((0,i.Ticker).system.remove(this.tickerUpdate,this),this.tickerAdded=!1)}/** Sets flag to not fire extra events when the user has already moved there mouse */pointerMoved(){this._didMove=!0}/** Updates the state of interactive objects. */update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}let e=this.events.rootPointerEvent;this.events.supportsTouchEvents&&"touch"===e.pointerType||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:e.clientX,clientY:e.clientY}))}/**
   * Updates the state of interactive objects if at least {@link interactionFrequency}
   * milliseconds have passed since the last invocation.
   *
   * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
   * @param deltaTime - time delta since the last call
   */tickerUpdate(e){this._deltaTime+=e,this._deltaTime<this.interactionFrequency||(this._deltaTime=0,this.update())}}}),a("e7J2h",function(t,r){e(t.exports,"FederatedMouseEvent",()=>a),n("2AhlO");var i=n("iVQEG"),s=n("k51aj");class a extends s.FederatedEvent{constructor(){super(...arguments),this.client=new i.Point,this.movement=new i.Point,this.offset=new i.Point,this.global=new i.Point,this.screen=new i.Point}/** @readonly */get clientX(){return this.client.x}/** @readonly */get clientY(){return this.client.y}/**
   * Alias for {@link PIXI.FederatedMouseEvent.clientX this.clientX}.
   * @readonly
   */get x(){return this.clientX}/**
   * Alias for {@link PIXI.FederatedMouseEvent.clientY this.clientY}.
   * @readonly
   */get y(){return this.clientY}/** @readonly */get movementX(){return this.movement.x}/** @readonly */get movementY(){return this.movement.y}/** @readonly */get offsetX(){return this.offset.x}/** @readonly */get offsetY(){return this.offset.y}/** @readonly */get globalX(){return this.global.x}/** @readonly */get globalY(){return this.global.y}/**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.x}.
   * @readonly
   */get screenX(){return this.screen.x}/**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.y}.
   * @readonly
   */get screenY(){return this.screen.y}/**
   * This will return the local coordinates of the specified displayObject for this InteractionData
   * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
   *  coords off
   * @param {PIXI.IPointData} point - A Point object in which to store the value, optional (otherwise
   *  will create a new point)
   * @param {PIXI.IPointData} globalPos - A Point object containing your custom global coords, optional
   *  (otherwise will use the current global coords)
   * @returns - A point containing the coordinates of the InteractionData position relative
   *  to the DisplayObject
   */getLocalPosition(e,t,r){return e.worldTransform.applyInverse(r||this.global,t)}/**
   * Whether the modifier key was pressed when this event natively occurred.
   * @param key - The modifier key.
   */getModifierState(e){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(e)}/**
   * Not supported.
   * @param _typeArg
   * @param _canBubbleArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   * @param _screenXArg
   * @param _screenYArg
   * @param _clientXArg
   * @param _clientYArg
   * @param _ctrlKeyArg
   * @param _altKeyArg
   * @param _shiftKeyArg
   * @param _metaKeyArg
   * @param _buttonArg
   * @param _relatedTargetArg
   * @deprecated since 7.0.0
   */// eslint-disable-next-line max-params
initMouseEvent(e,t,r,i,s,n,a,o,l,h,u,d,c,p,f){throw Error("Method not implemented.")}}}),a("k51aj",function(t,r){e(t.exports,"FederatedEvent",()=>s),n("2AhlO");var i=n("iVQEG");class s{/**
   * @param manager - The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */constructor(e){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=s.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new i.Point,this.page=new i.Point,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=e}/** @readonly */get layerX(){return this.layer.x}/** @readonly */get layerY(){return this.layer.y}/** @readonly */get pageX(){return this.page.x}/** @readonly */get pageY(){return this.page.y}/**
   * Fallback for the deprecated @code{PIXI.InteractionEvent.data}.
   * @deprecated since 7.0.0
   */get data(){return this}/** The propagation path for this event. Alias for {@link PIXI.EventBoundary.propagationPath}. */composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}/**
   * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
   * @deprecated
   * @param _type
   * @param _bubbles
   * @param _cancelable
   */initEvent(e,t,r){throw Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}/**
   * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
   * @deprecated
   * @param _typeArg
   * @param _bubblesArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   */initUIEvent(e,t,r,i,s){throw Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}/** Prevent default behavior of PixiJS and the user agent. */preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}/**
   * Stop this event from propagating to any addition listeners, including on the
   * {@link PIXI.FederatedEventTarget.currentTarget currentTarget} and also the following
   * event targets on the propagation path.
   */stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}/**
   * Stop this event from propagating to the next {@link PIXI.FederatedEventTarget}. The rest of the listeners
   * on the {@link PIXI.FederatedEventTarget.currentTarget currentTarget} will still be notified.
   */stopPropagation(){this.propagationStopped=!0}}}),a("jBwgD",function(t,r){e(t.exports,"FederatedPointerEvent",()=>s);var i=n("e7J2h");class s extends i.FederatedMouseEvent{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}// Only included for completeness for now
getCoalescedEvents(){return"pointermove"===this.type||"mousemove"===this.type||"touchmove"===this.type?[this]:[]}// Only included for completeness for now
getPredictedEvents(){throw Error("getPredictedEvents is not supported!")}}}),a("jzacj",function(t,r){e(t.exports,"FederatedWheelEvent",()=>s);var i=n("e7J2h");class s extends i.FederatedMouseEvent{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}s.DOM_DELTA_PIXEL=0,/** Units specified in lines. */s.DOM_DELTA_LINE=1,/** Units specified in pages. */s.DOM_DELTA_PAGE=2}),a("eixbG",function(t,r){e(t.exports,"EventSystem",()=>d),n("2AhlO");var i=n("glXXo"),s=n("3Dj1a"),a=n("1x2P3"),o=n("jBwgD"),l=n("jzacj");let h={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},u=class e{/**
   * @param {PIXI.Renderer} renderer
   */constructor(t){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=t,this.rootBoundary=new s.EventBoundary(null),(0,a.EventsTicker).init(this),this.autoPreventDefault=!0,this.eventsAdded=!1,this.rootPointerEvent=new o.FederatedPointerEvent(null),this.rootWheelEvent=new l.FederatedWheelEvent(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...e.defaultEventFeatures},{set:(e,t,r)=>("globalMove"===t&&(this.rootBoundary.enableGlobalMoveEvents=r),e[t]=r,!0)}),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerOverOut=this.onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}/**
   * The default interaction mode for all display objects.
   * @see PIXI.DisplayObject.eventMode
   * @type {PIXI.EventMode}
   * @readonly
   * @since 7.2.0
   */static get defaultEventMode(){return this._defaultEventMode}/**
   * Runner init called, view is available at this point.
   * @ignore
   */init(t){let{view:r,resolution:i}=this.renderer;this.setTargetElement(r),this.resolution=i,e._defaultEventMode=t.eventMode??"auto",Object.assign(this.features,t.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}/**
   * Handle changing resolution.
   * @ignore
   */resolutionChange(e){this.resolution=e}/** Destroys all event listeners and detaches the renderer. */destroy(){this.setTargetElement(null),this.renderer=null}/**
   * Sets the current cursor mode, handling any callbacks or CSS style changes.
   * @param mode - cursor mode, a key from the cursorStyles dictionary
   */setCursor(e){e=e||"default";let t=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(t=!1),this.currentCursor===e)return;this.currentCursor=e;let r=this.cursorStyles[e];if(r)switch(typeof r){case"string":t&&(this.domElement.style.cursor=r);break;case"function":r(e);break;case"object":t&&Object.assign(this.domElement.style,r)}else t&&"string"==typeof e&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.domElement.style.cursor=e)}/**
   * The global pointer event.
   * Useful for getting the pointer position without listening to events.
   * @since 7.2.0
   */get pointer(){return this.rootPointerEvent}/**
   * Event handler for pointer down events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */onPointerDown(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=this.normalizeToPointerData(e);this.autoPreventDefault&&t[0].isNormalized&&(e.cancelable||!("cancelable"in e))&&e.preventDefault();for(let e=0,r=t.length;e<r;e++){let r=t[e],i=this.bootstrapEvent(this.rootPointerEvent,r);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}/**
   * Event handler for pointer move events on on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch events.
   */onPointerMove(e){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,(0,a.EventsTicker).pointerMoved();let t=this.normalizeToPointerData(e);for(let e=0,r=t.length;e<r;e++){let r=this.bootstrapEvent(this.rootPointerEvent,t[e]);this.rootBoundary.mapEvent(r)}this.setCursor(this.rootBoundary.cursor)}/**
   * Event handler for pointer up events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */onPointerUp(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=e.target;e.composedPath&&e.composedPath().length>0&&(t=e.composedPath()[0]);let r=t!==this.domElement?"outside":"",i=this.normalizeToPointerData(e);for(let e=0,t=i.length;e<t;e++){let t=this.bootstrapEvent(this.rootPointerEvent,i[e]);t.type+=r,this.rootBoundary.mapEvent(t)}this.setCursor(this.rootBoundary.cursor)}/**
   * Event handler for pointer over & out events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */onPointerOverOut(e){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=this.normalizeToPointerData(e);for(let e=0,r=t.length;e<r;e++){let r=this.bootstrapEvent(this.rootPointerEvent,t[e]);this.rootBoundary.mapEvent(r)}this.setCursor(this.rootBoundary.cursor)}/**
   * Passive handler for `wheel` events on {@link PIXI.EventSystem.domElement this.domElement}.
   * @param nativeEvent - The native wheel event.
   */onWheel(e){if(!this.features.wheel)return;let t=this.normalizeWheelEvent(e);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(t)}/**
   * Sets the {@link PIXI.EventSystem#domElement domElement} and binds event listeners.
   *
   * To deregister the current DOM element without setting a new one, pass {@code null}.
   * @param element - The new DOM element.
   */setTargetElement(e){this.removeEvents(),this.domElement=e,a.EventsTicker.domElement=e,this.addEvents()}/** Register event listeners on {@link PIXI.Renderer#domElement this.domElement}. */addEvents(){if(this.eventsAdded||!this.domElement)return;(0,a.EventsTicker).addTickerListener();let e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,!0),this.domElement.addEventListener("pointerdown",this.onPointerDown,!0),this.domElement.addEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this.onPointerOverOut,!0),globalThis.addEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,!0),this.domElement.addEventListener("mousedown",this.onPointerDown,!0),this.domElement.addEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this.onPointerOverOut,!0),globalThis.addEventListener("mouseup",this.onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this.onPointerDown,!0),this.domElement.addEventListener("touchend",this.onPointerUp,!0),this.domElement.addEventListener("touchmove",this.onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this.eventsAdded=!0}/** Unregister event listeners on {@link PIXI.EventSystem#domElement this.domElement}. */removeEvents(){if(!this.eventsAdded||!this.domElement)return;(0,a.EventsTicker).removeTickerListener();let e=this.domElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this.onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,!0),this.domElement.removeEventListener("mousedown",this.onPointerDown,!0),this.domElement.removeEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this.onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this.onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this.onPointerDown,!0),this.domElement.removeEventListener("touchend",this.onPointerUp,!0),this.domElement.removeEventListener("touchmove",this.onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this.eventsAdded=!1}/**
   * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
   * resulting value is stored in the point. This takes into account the fact that the DOM
   * element could be scaled and positioned anywhere on the screen.
   * @param  {PIXI.IPointData} point - the point that the result will be stored in
   * @param  {number} x - the x coord of the position to map
   * @param  {number} y - the y coord of the position to map
   */mapPositionToPoint(e,t,r){let i=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},s=1/this.resolution;e.x=(t-i.left)*(this.domElement.width/i.width)*s,e.y=(r-i.top)*(this.domElement.height/i.height)*s}/**
   * Ensures that the original event object contains all data that a regular pointer event would have
   * @param event - The original event data from a touch or mouse event
   * @returns An array containing a single normalized pointer event, in the case of a pointer
   *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
   */normalizeToPointerData(e){let t=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(let r=0,i=e.changedTouches.length;r<i;r++){let i=e.changedTouches[r];typeof i.button>"u"&&(i.button=0),typeof i.buttons>"u"&&(i.buttons=1),typeof i.isPrimary>"u"&&(i.isPrimary=1===e.touches.length&&"touchstart"===e.type),typeof i.width>"u"&&(i.width=i.radiusX||1),typeof i.height>"u"&&(i.height=i.radiusY||1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="touch"),typeof i.pointerId>"u"&&(i.pointerId=i.identifier||0),typeof i.pressure>"u"&&(i.pressure=i.force||.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),typeof i.layerX>"u"&&(i.layerX=i.offsetX=i.clientX),typeof i.layerY>"u"&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,i.type=e.type,t.push(i)}else(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent)))&&(typeof e.isPrimary>"u"&&(e.isPrimary=!0),typeof e.width>"u"&&(e.width=1),typeof e.height>"u"&&(e.height=1),typeof e.tiltX>"u"&&(e.tiltX=0),typeof e.tiltY>"u"&&(e.tiltY=0),typeof e.pointerType>"u"&&(e.pointerType="mouse"),typeof e.pointerId>"u"&&(e.pointerId=1),typeof e.pressure>"u"&&(e.pressure=.5),typeof e.twist>"u"&&(e.twist=0),typeof e.tangentialPressure>"u"&&(e.tangentialPressure=0),e.isNormalized=!0),t.push(e);return t}/**
   * Normalizes the native {@link https://w3c.github.io/uievents/#interface-wheelevent WheelEvent}.
   *
   * The returned {@link PIXI.FederatedWheelEvent} is a shared instance. It will not persist across
   * multiple native wheel events.
   * @param nativeEvent - The native wheel event that occurred on the canvas.
   * @returns A federated wheel event.
   */normalizeWheelEvent(e){let t=this.rootWheelEvent;return this.transferMouseData(t,e),t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ,t.deltaMode=e.deltaMode,this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.nativeEvent=e,t.type=e.type,t}/**
   * Normalizes the `nativeEvent` into a federateed {@link PIXI.FederatedPointerEvent}.
   * @param event
   * @param nativeEvent
   */bootstrapEvent(e,t){return e.originalEvent=null,e.nativeEvent=t,e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist,this.transferMouseData(e,t),this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.isTrusted=t.isTrusted,"pointerleave"===e.type&&(e.type="pointerout"),e.type.startsWith("mouse")&&(e.type=e.type.replace("mouse","pointer")),e.type.startsWith("touch")&&(e.type=h[e.type]||e.type),e}/**
   * Transfers base & mouse event data from the {@code nativeEvent} to the federated event.
   * @param event
   * @param nativeEvent
   */transferMouseData(e,t){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.x=t.clientX,e.client.y=t.clientY,e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.x=t.movementX,e.movement.y=t.movementY,e.page.x=t.pageX,e.page.y=t.pageY,e.relatedTarget=null,e.shiftKey=t.shiftKey}};u.extension={name:"events",type:[i.ExtensionType.RendererSystem,i.ExtensionType.CanvasRendererSystem]},/**
* The event features that are enabled by the EventSystem
* This option only is available when using **@pixi/events** package
* (included in the **pixi.js** and **pixi.js-legacy** bundle), otherwise it will be ignored.
* @since 7.2.0
*/u.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let d=u;(0,i.extensions).add(d)}),a("dyvlu",function(e,t){}),a("bvjOC",function(e,t){n("2AhlO");var r=n("MiLFw");n("dyEru");var i=n("7h4dW"),s=n("eixbG"),a=n("k51aj");function o(e){return"dynamic"===e||"static"===e}(0,i.DisplayObject).mixin({/**
   * Property-based event handler for the `click` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onclick = (event) => {
   *  //some function here that happens on click
   * }
   */onclick:null,/**
   * Property-based event handler for the `mousedown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousedown = (event) => {
   *  //some function here that happens on mousedown
   * }
   */onmousedown:null,/**
   * Property-based event handler for the `mouseenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseenter = (event) => {
   *  //some function here that happens on mouseenter
   * }
   */onmouseenter:null,/**
   * Property-based event handler for the `mouseleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseleave = (event) => {
   *  //some function here that happens on mouseleave
   * }
   */onmouseleave:null,/**
   * Property-based event handler for the `mousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousemove = (event) => {
   *  //some function here that happens on mousemove
   * }
   */onmousemove:null,/**
   * Property-based event handler for the `globalmousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalmousemove = (event) => {
   *  //some function here that happens on globalmousemove
   * }
   */onglobalmousemove:null,/**
   * Property-based event handler for the `mouseout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseout = (event) => {
   *  //some function here that happens on mouseout
   * }
   */onmouseout:null,/**
   * Property-based event handler for the `mouseover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseover = (event) => {
   *  //some function here that happens on mouseover
   * }
   */onmouseover:null,/**
   * Property-based event handler for the `mouseup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseup = (event) => {
   *  //some function here that happens on mouseup
   * }
   */onmouseup:null,/**
   * Property-based event handler for the `mouseupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseupoutside = (event) => {
   *  //some function here that happens on mouseupoutside
   * }
   */onmouseupoutside:null,/**
   * Property-based event handler for the `pointercancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointercancel = (event) => {
   *  //some function here that happens on pointercancel
   * }
   */onpointercancel:null,/**
   * Property-based event handler for the `pointerdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerdown = (event) => {
   *  //some function here that happens on pointerdown
   * }
   */onpointerdown:null,/**
   * Property-based event handler for the `pointerenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerenter = (event) => {
   *  //some function here that happens on pointerenter
   * }
   */onpointerenter:null,/**
   * Property-based event handler for the `pointerleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerleave = (event) => {
   *  //some function here that happens on pointerleave
   * }
   */onpointerleave:null,/**
   * Property-based event handler for the `pointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointermove = (event) => {
   *  //some function here that happens on pointermove
   * }
   */onpointermove:null,/**
   * Property-based event handler for the `globalpointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalpointermove = (event) => {
   *  //some function here that happens on globalpointermove
   * }
   */onglobalpointermove:null,/**
   * Property-based event handler for the `pointerout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerout = (event) => {
   *  //some function here that happens on pointerout
   * }
   */onpointerout:null,/**
   * Property-based event handler for the `pointerover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerover = (event) => {
   *  //some function here that happens on pointerover
   * }
   */onpointerover:null,/**
   * Property-based event handler for the `pointertap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointertap = (event) => {
   *  //some function here that happens on pointertap
   * }
   */onpointertap:null,/**
   * Property-based event handler for the `pointerup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerup = (event) => {
   *  //some function here that happens on pointerup
   * }
   */onpointerup:null,/**
   * Property-based event handler for the `pointerupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerupoutside = (event) => {
   *  //some function here that happens on pointerupoutside
   * }
   */onpointerupoutside:null,/**
   * Property-based event handler for the `rightclick` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightclick = (event) => {
   *  //some function here that happens on rightclick
   * }
   */onrightclick:null,/**
   * Property-based event handler for the `rightdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightdown = (event) => {
   *  //some function here that happens on rightdown
   * }
   */onrightdown:null,/**
   * Property-based event handler for the `rightup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightup = (event) => {
   *  //some function here that happens on rightup
   * }
   */onrightup:null,/**
   * Property-based event handler for the `rightupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightupoutside = (event) => {
   *  //some function here that happens on rightupoutside
   * }
   */onrightupoutside:null,/**
   * Property-based event handler for the `tap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontap = (event) => {
   *  //some function here that happens on tap
   * }
   */ontap:null,/**
   * Property-based event handler for the `touchcancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchcancel = (event) => {
   *  //some function here that happens on touchcancel
   * }
   */ontouchcancel:null,/**
   * Property-based event handler for the `touchend` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchend = (event) => {
   *  //some function here that happens on touchend
   * }
   */ontouchend:null,/**
   * Property-based event handler for the `touchendoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchendoutside = (event) => {
   *  //some function here that happens on touchendoutside
   * }
   */ontouchendoutside:null,/**
   * Property-based event handler for the `touchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchmove = (event) => {
   *  //some function here that happens on touchmove
   * }
   */ontouchmove:null,/**
   * Property-based event handler for the `globaltouchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobaltouchmove = (event) => {
   *  //some function here that happens on globaltouchmove
   * }
   */onglobaltouchmove:null,/**
   * Property-based event handler for the `touchstart` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchstart = (event) => {
   *  //some function here that happens on touchstart
   * }
   */ontouchstart:null,/**
   * Property-based event handler for the `wheel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onwheel = (event) => {
   *  //some function here that happens on wheel
   * }
   */onwheel:null,/**
   * @ignore
   */_internalInteractive:void 0,/**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse
   * @memberof PIXI.DisplayObject#
   */get interactive(){return this._internalInteractive??o(s.EventSystem.defaultEventMode)},set interactive(value){r.deprecation("7.2.0","Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),this._internalInteractive=value,this.eventMode=value?"static":"auto"},/**
   * @ignore
   */_internalEventMode:void 0,/**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse.
   * This now replaces the `interactive` property.
   * There are 5 types of interaction settings:
   * - `'none'`: Ignores all interaction events, even on its children.
   * - `'passive'`: Does not emit events and ignores all hit testing on itself and non-interactive children.
   * Interactive children will still emit events.
   * - `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7
   * - `'static'`: Emit events and is hit tested. Same as `interaction = true` in v7
   * - `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from a ticker to
   * allow for interaction when the mouse isn't moving
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.on('tap', (event) => {
   *     // Handle event
   * });
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   */get eventMode(){return this._internalEventMode??s.EventSystem.defaultEventMode},set eventMode(value){this._internalInteractive=o(value),this._internalEventMode=value},/**
   * Determines if the displayObject is interactive or not
   * @returns {boolean} Whether the displayObject is interactive or not
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   * @example
   * import { Sprite } from 'pixi.js';
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'dynamic';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'none';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'passive';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'auto';
   * sprite.isInteractive(); // false
   */isInteractive(){return"static"===this.eventMode||"dynamic"===this.eventMode},/**
   * Determines if the children to the displayObject can be clicked/touched
   * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
   * @memberof PIXI.Container#
   */interactiveChildren:!0,/**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
   * @example
   * import { Rectangle, Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new Rectangle(0, 0, 100, 100);
   * @member {PIXI.IHitArea}
   * @memberof PIXI.DisplayObject#
   */hitArea:null,/**
   * Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
   * seeks to be compatible with the DOM's `addEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event to listen to.
   * @param listener - The listener callback or object.
   * @param options - Listener options, used for capture phase.
   * @example
   * // Tell the user whether they did a single, double, triple, or nth click.
   * button.addEventListener('click', {
   *     handleEvent(e): {
   *         let prefix;
   *
   *         switch (e.detail) {
   *             case 1: prefix = 'single'; break;
   *             case 2: prefix = 'double'; break;
   *             case 3: prefix = 'triple'; break;
   *             default: prefix = e.detail + 'th'; break;
   *         }
   *
   *         console.log('That was a ' + prefix + 'click');
   *     }
   * });
   *
   * // But skip the first click!
   * button.parent.addEventListener('click', function blockClickOnce(e) {
   *     e.stopImmediatePropagation();
   *     button.parent.removeEventListener('click', blockClickOnce, true);
   * }, {
   *     capture: true,
   * });
   */addEventListener(e,t,r){let i="boolean"==typeof r&&r||"object"==typeof r&&r.capture,s="function"==typeof t?void 0:t;e=i?`${e}capture`:e,t="function"==typeof t?t:t.handleEvent,this.on(e,t,s)},/**
   * Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
   * seeks to be compatible with the DOM's `removeEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event the listener is bound to.
   * @param listener - The listener callback or object.
   * @param options - The original listener options. This is required to deregister a capture phase listener.
   */removeEventListener(e,t,r){let i="boolean"==typeof r&&r||"object"==typeof r&&r.capture,s="function"==typeof t?void 0:t;e=i?`${e}capture`:e,t="function"==typeof t?t:t.handleEvent,this.off(e,t,s)},/**
   * Dispatch the event on this {@link PIXI.DisplayObject} using the event's {@link PIXI.EventBoundary}.
   *
   * The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
   *
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param e - The event to dispatch.
   * @returns Whether the {@link PIXI.FederatedEvent.preventDefault preventDefault}() method was not invoked.
   * @example
   * // Reuse a click event!
   * button.dispatchEvent(clickEvent);
   */dispatchEvent(e){if(!(e instanceof a.FederatedEvent))throw Error("DisplayObject cannot propagate events outside of the Federated Events API");return e.defaultPrevented=!1,e.path=null,e.target=this,e.manager.dispatchEvent(e),!e.defaultPrevented}})}),a("aeEqI",function(t,r){e(t.exports,"accessibleTarget",()=>i);let i={/**
   *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
   *   shadow div with attributes set
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */accessible:!1,/**
   * Sets the title attribute of the shadow div
   * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
   * @member {?string}
   * @memberof PIXI.DisplayObject#
   */accessibleTitle:null,/**
   * Sets the aria-label attribute of the shadow div
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */accessibleHint:null,/**
   * @member {number}
   * @memberof PIXI.DisplayObject#
   * @private
   * @todo Needs docs.
   */tabIndex:0,/**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */_accessibleActive:!1,/**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */_accessibleDiv:null,/**
   * Specify the type of div the accessible layer is. Screen readers treat the element differently
   * depending on this type. Defaults to button.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'button'
   */accessibleType:"button",/**
   * Specify the pointer-events the accessible div will use
   * Defaults to auto.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'auto'
   */accessiblePointerEvents:"auto",/**
   * Setting to false will prevent any children inside this container to
   * be accessible. Defaults to true.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @default true
   */accessibleChildren:!0,renderId:-1}}),a("lcscO",function(t,r){e(t.exports,"Application",()=>n("7nNKe").Application),n("7nNKe"),n("bclKq")}),a("7nNKe",function(t,r){e(t.exports,"Application",()=>l),n("2AhlO");var i=n("fRY25"),s=n("glXXo");n("dyEru");var a=n("7uhWd");let o=class e{/**
   * @param options - The optional application and renderer parameters.
   */constructor(t){this.stage=new a.Container,t=Object.assign({forceCanvas:!1},t),this.renderer=(0,i.autoDetectRenderer)(t),e._plugins.forEach(e=>{e.init.call(this,t)})}/** Render the current stage. */render(){this.renderer.render(this.stage)}/**
   * Reference to the renderer's canvas element.
   * @member {PIXI.ICanvas}
   * @readonly
   */get view(){return this.renderer?.view}/**
   * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
   * @member {PIXI.Rectangle}
   * @readonly
   */get screen(){return this.renderer?.screen}/**
   * Destroy and don't use after this.
   * @param {boolean} [removeView=false] - Automatically remove canvas from DOM.
   * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'stageOptions' will be passed on to those calls.
   * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the texture of the child sprite
   * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the base texture of the child sprite
   */destroy(t,r){let i=e._plugins.slice(0);i.reverse(),i.forEach(e=>{e.destroy.call(this)}),this.stage.destroy(r),this.stage=null,this.renderer.destroy(t),this.renderer=null}};o._plugins=[];let l=o;(0,s.extensions).handleByList(s.ExtensionType.Application,l._plugins)}),a("bclKq",function(e,t){n("2AhlO");var r=n("glXXo");class i{/**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */static init(e){Object.defineProperty(this,"resizeTo",/**
       * The HTML element or window to automatically resize the
       * renderer's view element to match width and height.
       * @member {Window|HTMLElement}
       * @name resizeTo
       * @memberof PIXI.Application#
       */{set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this.cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this.cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{let e,t;if(this._resizeTo){if(this.cancelResize(),this._resizeTo===globalThis.window)e=globalThis.innerWidth,t=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:i}=this._resizeTo;e=r,t=i}this.renderer.resize(e,t),this.render()}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}/**
   * Clean up the ticker, scoped to application
   * @static
   * @private
   */static destroy(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}i.extension=r.ExtensionType.Application,(0,r.extensions).add(i)}),a("9t9WZ",function(t,r){e(t.exports,"Assets",()=>n("3Fqd3").Assets),e(t.exports,"LoaderParserPriority",()=>n("djhuW").LoaderParserPriority),e(t.exports,"checkExtension",()=>n("ektXp").checkExtension),e(t.exports,"copySearchParams",()=>n("jqNno").copySearchParams),e(t.exports,"createTexture",()=>n("8FyPI").createTexture),n("9gNGt"),n("3Fqd3"),n("iW8F5"),n("T4zgu"),n("fsKEE"),n("kyzbk"),n("1zmFj"),n("8deXD"),n("in9G3"),n("dAwW8"),n("jxFzr"),n("7FD0i"),n("5u4Iz"),n("4kJ1p"),n("4dGx9"),n("6hDWW"),n("djhuW"),n("8Gzlh"),n("ggJYV"),n("avJUQ"),n("k8XiF"),n("fmHc8"),n("bPtgB"),n("8FyPI"),n("ihKGK"),n("dHoUq"),n("ektXp"),n("hpcLf"),n("jqNno"),n("jJ7yD"),n("f1E15")}),a("9gNGt",function(e,t){n("2AhlO");var r=n("glXXo");let i={loader:r.ExtensionType.LoadParser,resolver:r.ExtensionType.ResolveParser,cache:r.ExtensionType.CacheParser,detection:r.ExtensionType.DetectionParser};(0,r.extensions).handle(r.ExtensionType.Asset,e=>{let t=e.ref;Object.entries(i).filter(([e])=>!!t[e]).forEach(([e,i])=>(0,r.extensions).add(Object.assign(t[e],// ExtensionMetadata, the use cases here is priority for LoaderParsers
    {extension:t[e].extension??i})))},e=>{let t=e.ref;Object.keys(i).filter(e=>!!t[e]).forEach(e=>(0,r.extensions).remove(t[e]))})}),a("3Fqd3",function(t,r){e(t.exports,"Assets",()=>p),n("2AhlO");var i=n("MiLFw"),s=n("glXXo"),a=n("iykJL"),o=n("in9G3"),l=n("5y3zx");n("gesEW");var h=n("1EE1o"),u=n("hpcLf"),d=n("f1E15"),c=n("fmHc8");let p=new class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new h.Resolver,this.loader=new l.Loader,this.cache=o.Cache,this._backgroundLoader=new a.BackgroundLoader(this.loader),this._backgroundLoader.active=!0,this.reset()}/**
   * Best practice is to call this function before any loading commences
   * Initiating is the best time to add any customization to the way things are loaded.
   *
   * you do not need to call this for the Asset class to work, only if you want to set any initial properties
   * @param options - options to initialize the Asset manager with
   */async init(e={}){if(this._initialized){console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let t=e.manifest;"string"==typeof t&&(t=await this.load(t)),this.resolver.addManifest(t)}let t=e.texturePreference?.resolution??1,r=await this._detectFormats({preferredFormats:e.texturePreference?.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:"number"==typeof t?[t]:t}}),e.preferences&&this.setPreferences(e.preferences)}add(e,t,r,i,s){this.resolver.add(e,t,r,i,s)}async load(e,t){this._initialized||await this.init();let r=(0,d.isSingleItem)(e),i=(0,u.convertToList)(e).map(e=>{if("string"!=typeof e){let t=this.resolver.getAlias(e);return t.some(e=>!this.resolver.hasKey(e))&&this.add(e),Array.isArray(t)?t[0]:t}return this.resolver.hasKey(e)||this.add({alias:e,src:e}),e}),s=this.resolver.resolve(i),n=await this._mapLoadToResolve(s,t);return r?n[i[0]]:n}/**
   * This adds a bundle of assets in one go so that you can load them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const assets = await Assets.loadBundle('animals');
   * @param bundleId - the id of the bundle to add
   * @param assets - a record of the asset or assets that will be chosen from when loading via the specified key
   */addBundle(e,t){this.resolver.addBundle(e,t)}/**
   * Bundles are a way to load multiple assets at once.
   * If a manifest has been provided to the init function then you can load a bundle, or bundles.
   * you can also add bundles via `addBundle`
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * await Asset.init({ manifest });
   *
   * // Load a bundle...
   * loadScreenAssets = await Assets.loadBundle('load-screen');
   * // Load another bundle...
   * gameScreenAssets = await Assets.loadBundle('game-screen');
   * @param bundleIds - the bundle id or ids to load
   * @param onProgress - Optional function that is called when progress on asset loading is made.
   * The function is passed a single parameter, `progress`, which represents the percentage (0.0 - 1.0)
   * of the assets loaded. Do not use this function to detect when assets are complete and available,
   * instead use the Promise returned by this function.
   * @returns all the bundles assets or a hash of assets for each bundle specified
   */async loadBundle(e,t){this._initialized||await this.init();let r=!1;"string"==typeof e&&(r=!0,e=[e]);let i=this.resolver.resolveBundle(e),s={},n=Object.keys(i),a=0,o=0,l=()=>{t?.(++a/o)},h=n.map(e=>{let t=i[e];return o+=Object.keys(t).length,this._mapLoadToResolve(t,l).then(t=>{s[e]=t})});return await Promise.all(h),r?s[e[0]]:s}/**
   * Initiate a background load of some assets. It will passively begin to load these assets in the background.
   * So when you actually come to loading them you will get a promise that resolves to the loaded assets immediately
   *
   * An example of this might be that you would background load game assets after your inital load.
   * then when you got to actually load your game screen assets when a player goes to the game - the loading
   * would already have stared or may even be complete, saving you having to show an interim load bar.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.backgroundLoad('bunny.png');
   *
   * // later on in your app...
   * await Assets.loadBundle('bunny.png'); // Will resolve quicker as loading may have completed!
   * @param urls - the url / urls you want to background load
   */async backgroundLoad(e){this._initialized||await this.init(),"string"==typeof e&&(e=[e]);let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}/**
   * Initiate a background of a bundle, works exactly like backgroundLoad but for bundles.
   * this can only be used if the loader has been initiated with a manifest
   * @example
   * import { Assets } from 'pixi.js';
   *
   * await Assets.init({
   *     manifest: {
   *         bundles: [
   *             {
   *                 name: 'load-screen',
   *                 assets: [...],
   *             },
   *             ...
   *         ],
   *     },
   * });
   *
   * Assets.backgroundLoadBundle('load-screen');
   *
   * // Later on in your app...
   * await Assets.loadBundle('load-screen'); // Will resolve quicker as loading may have completed!
   * @param bundleIds - the bundleId / bundleIds you want to background load
   */async backgroundLoadBundle(e){this._initialized||await this.init(),"string"==typeof e&&(e=[e]);let t=this.resolver.resolveBundle(e);Object.values(t).forEach(e=>{this._backgroundLoader.add(Object.values(e))})}/**
   * Only intended for development purposes.
   * This will wipe the resolver and caches.
   * You will need to reinitialize the Asset
   */reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if("string"==typeof e)return(0,o.Cache).get(e);let t={};for(let r=0;r<e.length;r++)t[r]=(0,o.Cache).get(e[r]);return t}/**
   * helper function to map resolved assets back to loaded assets
   * @param resolveResults - the resolve results from the resolver
   * @param onProgress - the progress callback
   */async _mapLoadToResolve(e,t){let r=Object.values(e),i=Object.keys(e);this._backgroundLoader.active=!1;let s=await this.loader.load(r,t);this._backgroundLoader.active=!0;let n={};return r.forEach((e,t)=>{let r=s[e.src],a=[e.src];e.alias&&a.push(...e.alias),n[i[t]]=r,(0,o.Cache).set(a,r)}),n}/**
   * Unload an asset or assets. As the Assets class is responsible for creating the assets via the `load` function
   * this will make sure to destroy any assets and release them from memory.
   * Once unloaded, you will need to load the asset again.
   *
   * Use this to help manage assets if you find that you have a large app and you want to free up memory.
   *
   * - it's up to you as the developer to make sure that textures are not actively being used when you unload them,
   * Pixi won't break but you will end up with missing assets. Not a good look for the user!
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Load a URL:
   * const myImageTexture = await Assets.load('http://some.url.com/image.png'); // => returns a texture
   *
   * await Assets.unload('http://some.url.com/image.png')
   *
   * // myImageTexture will be destroyed now.
   *
   * // Unload multiple assets:
   * const textures = await Assets.unload(['thumper', 'chicko']);
   * @param urls - the urls to unload
   */async unload(e){this._initialized||await this.init();let t=(0,u.convertToList)(e).map(e=>"string"!=typeof e?e.src:e),r=this.resolver.resolve(t);await this._unloadFromResolved(r)}/**
   * Bundles are a way to manage multiple assets at once.
   * this will unload all files in a bundle.
   *
   * once a bundle has been unloaded, you need to load it again to have access to the assets.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle({
   *     'thumper': 'http://some.url.com/thumper.png',
   * })
   *
   * const assets = await Assets.loadBundle('thumper');
   *
   * // Now to unload...
   *
   * await Assets.unloadBundle('thumper');
   *
   * // All assets in the assets object will now have been destroyed and purged from the cache
   * @param bundleIds - the bundle id or ids to unload
   */async unloadBundle(e){this._initialized||await this.init(),e=(0,u.convertToList)(e);let t=this.resolver.resolveBundle(e),r=Object.keys(t).map(e=>this._unloadFromResolved(t[e]));await Promise.all(r)}async _unloadFromResolved(e){let t=Object.values(e);t.forEach(e=>{(0,o.Cache).remove(e.src)}),await this.loader.unload(t)}/**
   * Detects the supported formats for the browser, and returns an array of supported formats, respecting
   * the users preferred formats order.
   * @param options - the options to use when detecting formats
   * @param options.preferredFormats - the preferred formats to use
   * @param options.skipDetections - if we should skip the detections altogether
   * @param options.detections - the detections to use
   * @returns - the detected formats
   */async _detectFormats(e){let t=[];for(let r of(e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]),e.detections))e.skipDetections||await r.test()?t=await r.add(t):e.skipDetections||(t=await r.remove(t));return t=t.filter((e,r)=>t.indexOf(e)===r)}/** All the detection parsers currently added to the Assets class. */get detections(){return this._detections}/**
   * @deprecated since 7.2.0
   * @see {@link Assets.setPreferences}
   */get preferWorkers(){return c.loadTextures.config.preferWorkers}set preferWorkers(e){i.deprecation("7.2.0","Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."),this.setPreferences({preferWorkers:e})}/**
   * General setter for preferences. This is a helper function to set preferences on all parsers.
   * @param preferences - the preferences to set
   */setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(t=>t in e).forEach(r=>{t.config[r]=e[r]})})}};(0,s.extensions).handleByList(s.ExtensionType.LoadParser,p.loader.parsers).handleByList(s.ExtensionType.ResolveParser,p.resolver.parsers).handleByList(s.ExtensionType.CacheParser,p.cache.parsers).handleByList(s.ExtensionType.DetectionParser,p.detections)}),a("iykJL",function(t,r){e(t.exports,"BackgroundLoader",()=>i);class i{/**
   * @param loader
   * @param verbose - should the loader log to the console
   */constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}/**
   * Adds an array of assets to load.
   * @param assetUrls - assets to load
   */add(e){e.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}/**
   * Loads the next set of assets. Will try to load as many assets as it can at the same time.
   *
   * The max assets it will try to load at one time will be 4.
   */async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<t;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}/**
   * Activate/Deactivate the loading. If set to true then it will immediately continue to load the next asset.
   * @returns whether the class is active
   */get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}}),a("in9G3",function(t,r){e(t.exports,"Cache",()=>o),n("2AhlO");var i=n("7eheB"),s=n("2Am4Q");n("8deXD");var a=n("hpcLf");let o=new class{constructor(){this._parsers=[],this._cache=/* @__PURE__ */new Map,this._cacheMap=/* @__PURE__ */new Map}/** Clear all entries. */reset(){this._cacheMap.clear(),this._cache.clear()}/**
   * Check if the key exists
   * @param key - The key to check
   */has(e){return this._cache.has(e)}/**
   * Fetch entry by key
   * @param key - The key of the entry to get
   */get(e){let t=this._cache.get(e);return t||console.warn(`[Assets] Asset id ${e} was not found in the Cache`),t}/**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */set(e,t){let r;let n=(0,a.convertToList)(e);for(let e=0;e<this.parsers.length;e++){let i=this.parsers[e];if(i.test(t)){r=i.getCacheableAssets(n,t);break}}r||(r={},n.forEach(e=>{r[e]=t}));let o=Object.keys(r),l={cacheKeys:o,keys:n};n.forEach(e=>{this._cacheMap.set(e,l)}),o.forEach(e=>{this._cache.has(e)&&this._cache.get(e)!==t&&console.warn("[Cache] already has key:",e),this._cache.set(e,r[e])}),t instanceof i.Texture&&n.forEach(e=>{t.baseTexture!==i.Texture.EMPTY.baseTexture&&(0,s.BaseTexture).addToCache(t.baseTexture,e),(0,i.Texture).addToCache(t,e)})}/**
   * Remove entry by key
   *
   * This function will also remove any associated alias from the cache also.
   * @param key - The key of the entry to remove
   */remove(e){if(!this._cacheMap.has(e)){console.warn(`[Assets] Asset id ${e} was not found in the Cache`);return}let t=this._cacheMap.get(e);t.cacheKeys.forEach(e=>{this._cache.delete(e)}),t.keys.forEach(e=>{this._cacheMap.delete(e)})}/** All loader parsers registered */get parsers(){return this._parsers}}}),a("8deXD",function(e,t){n("dHoUq"),n("ektXp"),n("hpcLf"),n("jqNno"),n("jJ7yD"),n("f1E15")}),a("dHoUq",function(t,r){e(t.exports,"checkDataUrl",()=>i);function i(e,t){if(Array.isArray(t)){for(let r of t)if(e.startsWith(`data:${r}`))return!0;return!1}return e.startsWith(`data:${t}`)}}),a("ektXp",function(t,r){e(t.exports,"checkExtension",()=>s),n("2AhlO");var i=n("MiLFw");function s(e,t){let r=e.split("?")[0],s=i.path.extname(r).toLowerCase();return Array.isArray(t)?t.includes(s):s===t}}),a("hpcLf",function(t,r){e(t.exports,"convertToList",()=>i);let i=(e,t,r=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(e=>"string"==typeof e||r?t(e):e):e)}),a("jqNno",function(t,r){e(t.exports,"copySearchParams",()=>i);let i=(e,t)=>{let r=t.split("?")[1];return r&&(e+=`?${r}`),e}}),a("jJ7yD",function(t,r){e(t.exports,"createStringVariations",()=>i);function i(e){let t=e.match(/\{(.*?)\}/g),r=[];if(t){let i=[];t.forEach(e=>{let t=e.substring(1,e.length-1).split(",");i.push(t)}),function e(t,r,i,s,n){let a=r[i];for(let o=0;o<a.length;o++){let l=a[o];i<r.length-1?e(t.replace(s[i],l),r,i+1,s,n):n.push(t.replace(s[i],l))}}(e,i,0,t,r)}else r.push(e);return r}}),a("f1E15",function(t,r){e(t.exports,"isSingleItem",()=>i);let i=e=>!Array.isArray(e)}),a("5y3zx",function(t,r){e(t.exports,"Loader",()=>o),n("2AhlO");var i=n("MiLFw");n("8deXD");var s=n("f1E15"),a=n("hpcLf");class o{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,r)=>(this._parsersValidated=!1,e[t]=r,!0)}),this.promiseCache={}}/** function used for testing */reset(){this._parsersValidated=!1,this.promiseCache={}}/**
   * Used internally to generate a promise for the asset to be loaded.
   * @param url - The URL to be loaded
   * @param data - any custom additional information relevant to the asset being loaded
   * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
   */_getLoadPromiseAndParser(e,t){let r={promise:null,parser:null};return r.promise=(async()=>{let i=null,s=null;if(t.loadParser&&((s=this._parserHash[t.loadParser])||console.warn(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let r=0;r<this.parsers.length;r++){let i=this.parsers[r];if(i.load&&i.test?.(e,t,this)){s=i;break}}if(!s)return console.warn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,t,this),r.parser=s;for(let e=0;e<this.parsers.length;e++){let s=this.parsers[e];s.parse&&s.parse&&await s.testParse?.(i,t,this)&&(i=await s.parse(i,t,this)||i,r.parser=s)}return i})(),r}async load(e,t){this._parsersValidated||this._validateParsers();let r=0,n={},o=(0,s.isSingleItem)(e),l=(0,a.convertToList)(e,e=>({alias:[e],src:e})),h=l.length,u=l.map(async e=>{let s=i.path.toAbsolute(e.src);if(!n[e.src])try{this.promiseCache[s]||(this.promiseCache[s]=this._getLoadPromiseAndParser(s,e)),n[e.src]=await this.promiseCache[s].promise,t&&t(++r/h)}catch(t){throw delete this.promiseCache[s],delete n[e.src],Error(`[Loader.load] Failed to load ${s}.
${t}`)}});return await Promise.all(u),o?n[l[0].src]:n}/**
   * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
   * The parser that created the asset, will be the one that unloads it.
   * @example
   * // Single asset:
   * const asset = await Loader.load('cool.png');
   *
   * await Loader.unload('cool.png');
   *
   * console.log(asset.destroyed); // true
   * @param assetsToUnloadIn - urls that you want to unload, or a single one!
   */async unload(e){let t=(0,a.convertToList)(e,e=>({alias:[e],src:e})).map(async e=>{let t=i.path.toAbsolute(e.src),r=this.promiseCache[t];if(r){let i=await r.promise;delete this.promiseCache[t],r.parser?.unload?.(i,e,this)}});await Promise.all(t)}/** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(e[t.name]&&console.warn(`[Assets] loadParser name conflict "${t.name}"`),{...e,[t.name]:t}),{})}}}),a("gesEW",function(e,t){n("djhuW"),n("8Gzlh"),n("ggJYV"),n("avJUQ"),n("dNV3d")}),a("djhuW",function(t,r){e(t.exports,"LoaderParserPriority",()=>s);var i,s=((i=s||{})[i.Low=0]="Low",i[i.Normal=1]="Normal",i[i.High=2]="High",i)}),a("8Gzlh",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("8oqCw"),s=n("dHoUq"),a=n("ektXp"),o=n("djhuW");let l={extension:{type:r.ExtensionType.LoadParser,priority:o.LoaderParserPriority.Low},name:"loadJson",test:e=>(0,s.checkDataUrl)(e,"application/json")||(0,a.checkExtension)(e,".json"),load:async e=>await (await (0,i.settings).ADAPTER.fetch(e)).json()};(0,r.extensions).add(l)}),a("ggJYV",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("8oqCw"),s=n("dHoUq"),a=n("ektXp"),o=n("djhuW");let l={name:"loadTxt",extension:{type:r.ExtensionType.LoadParser,priority:o.LoaderParserPriority.Low},test:e=>(0,s.checkDataUrl)(e,"text/plain")||(0,a.checkExtension)(e,".txt"),load:async e=>await (await (0,i.settings).ADAPTER.fetch(e)).text()};(0,r.extensions).add(l)}),a("avJUQ",function(e,t){n("2AhlO");var r=n("MiLFw"),i=n("glXXo"),s=n("8oqCw"),a=n("dHoUq"),o=n("ektXp"),l=n("djhuW");let h=["normal","bold","100","200","300","400","500","600","700","800","900"],u=[".ttf",".otf",".woff",".woff2"],d=["font/ttf","font/otf","font/woff","font/woff2"],c=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i,p=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/,f={extension:{type:i.ExtensionType.LoadParser,priority:l.LoaderParserPriority.Low},name:"loadWebFont",test:e=>(0,a.checkDataUrl)(e,d)||(0,o.checkExtension)(e,u),async load(e,t){let i=(0,s.settings).ADAPTER.getFontFaceSet();if(i){let s=[],n=t.data?.family??function(e){let t=r.path.extname(e),i=r.path.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)),s=i.length>0;for(let e of i)if(!e.match(c)){s=!1;break}let n=i.join(" ");return s||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}(e),a=t.data?.weights?.filter(e=>h.includes(e))??["normal"],o=t.data??{};for(let t=0;t<a.length;t++){let r=a[t],l=new FontFace(n,`url(${p.test(e)?e:encodeURI(e)})`,{...o,weight:r});await l.load(),i.add(l),s.push(l)}return 1===s.length?s[0]:s}return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){(Array.isArray(e)?e:[e]).forEach(e=>(0,s.settings).ADAPTER.getFontFaceSet().delete(e))}};(0,i.extensions).add(f)}),a("dNV3d",function(e,t){n("k8XiF"),n("fmHc8"),n("bPtgB"),n("2Xklp")}),a("k8XiF",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("50JGb"),s=n("2Am4Q"),a=n("MiLFw"),o=n("8oqCw"),l=n("dHoUq"),h=n("ektXp"),u=n("djhuW"),d=n("fmHc8"),c=n("8FyPI");let p={extension:{type:r.ExtensionType.LoadParser,priority:u.LoaderParserPriority.High},name:"loadSVG",test:e=>(0,l.checkDataUrl)(e,"image/svg+xml")||(0,h.checkExtension)(e,".svg"),testParse:async e=>(0,i.SVGResource).test(e),async parse(e,t,r){let n=new i.SVGResource(e,t?.data?.resourceOptions);await n.load();let o=new s.BaseTexture(n,{resolution:a.getResolutionOfUrl(e),...t?.data});return o.resource.src=t.src,(0,c.createTexture)(o,r,t.src)},load:async(e,t)=>(await (0,o.settings).ADAPTER.fetch(e)).text(),unload:d.loadTextures.unload};(0,r.extensions).add(p)}),a("fmHc8",function(t,r){e(t.exports,"loadTextures",()=>g),n("2AhlO");var i=n("8oqCw"),s=n("glXXo"),a=n("MiLFw"),o=n("2Am4Q"),l=n("dHoUq"),h=n("ektXp"),u=n("djhuW"),d=n("fXnmT"),c=n("8FyPI");let p=[".jpeg",".jpg",".png",".webp",".avif"],f=["image/jpeg","image/png","image/webp","image/avif"];async function m(e){let t=await (0,i.settings).ADAPTER.fetch(e);if(!t.ok)throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);let r=await t.blob();return await createImageBitmap(r)}let g={name:"loadTextures",extension:{type:s.ExtensionType.LoadParser,priority:u.LoaderParserPriority.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test:e=>(0,l.checkDataUrl)(e,f)||(0,h.checkExtension)(e,p),async load(e,t,r){let i;let s=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap;i=s?this.config.preferWorkers&&await (0,d.WorkerManager).isImageBitmapSupported()?await (0,d.WorkerManager).loadImageBitmap(e):await m(e):await new Promise((t,r)=>{let i=new Image;i.crossOrigin=this.config.crossOrigin,i.src=e,i.complete?t(i):(i.onload=()=>t(i),i.onerror=e=>r(e))});let n={...t.data};n.resolution??(n.resolution=a.getResolutionOfUrl(e)),s&&n.resourceOptions?.ownsImageBitmap===void 0&&(n.resourceOptions={...n.resourceOptions},n.resourceOptions.ownsImageBitmap=!0);let l=new o.BaseTexture(i,n);return l.resource.src=e,(0,c.createTexture)(l,r,e)},unload(e){e.destroy(!0)}};(0,s.extensions).add(g)}),a("fXnmT",function(t,r){let i;e(t.exports,"WorkerManager",()=>l);let s=0,n,a={id:"checkImageBitmap",code:`
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `},o={id:"loadImageBitmap",code:`
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`},l=new class{constructor(){this._initialized=!1,this._createdWorkers=0,this.workerPool=[],this.queue=[],this.resolveHash={}}isImageBitmapSupported(){return void 0!==this._isImageBitmapSupported||(this._isImageBitmapSupported=new Promise(e=>{let t=URL.createObjectURL(new Blob([a.code],{type:"application/javascript"})),r=new Worker(t);r.addEventListener("message",i=>{r.terminate(),URL.revokeObjectURL(t),e(i.data)})})),this._isImageBitmapSupported}loadImageBitmap(e){return this._run("loadImageBitmap",[e])}async _initWorkers(){this._initialized||(this._initialized=!0)}getWorker(){void 0===n&&(n=navigator.hardwareConcurrency||4);let e=this.workerPool.pop();return!e&&this._createdWorkers<n&&(i||(i=URL.createObjectURL(new Blob([o.code],{type:"application/javascript"}))),this._createdWorkers++,(e=new Worker(i)).addEventListener("message",e=>{this.complete(e.data),this.returnWorker(e.target),this.next()})),e}returnWorker(e){this.workerPool.push(e)}complete(e){void 0!==e.error?this.resolveHash[e.uuid].reject(e.error):this.resolveHash[e.uuid].resolve(e.data),this.resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();let r=new Promise((r,i)=>{this.queue.push({id:e,arguments:t,resolve:r,reject:i})});return this.next(),r}next(){if(!this.queue.length)return;let e=this.getWorker();if(!e)return;let t=this.queue.pop(),r=t.id;this.resolveHash[s]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:s++,id:r})}}}),a("8FyPI",function(t,r){e(t.exports,"createTexture",()=>a),n("2AhlO");var i=n("7eheB"),s=n("in9G3");function a(e,t,r){e.resource.internal=!0;let n=new i.Texture(e),a=()=>{delete t.promiseCache[r],(0,s.Cache).has(r)&&(0,s.Cache).remove(r)};return n.baseTexture.once("destroyed",()=>{r in t.promiseCache&&(console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."),a())}),n.once("destroyed",()=>{e.destroyed||(console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),a())}),n}}),a("bPtgB",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("8oqCw"),s=n("9vyZs"),a=n("2Am4Q"),o=n("MiLFw"),l=n("dHoUq"),h=n("ektXp"),u=n("djhuW"),d=n("8FyPI");let c=[".mp4",".m4v",".webm",".ogv"],p=["video/mp4","video/webm","video/ogg"],f={name:"loadVideo",extension:{type:r.ExtensionType.LoadParser,priority:u.LoaderParserPriority.High},config:{defaultAutoPlay:!0},test:e=>(0,l.checkDataUrl)(e,p)||(0,h.checkExtension)(e,c),async load(e,t,r){let n;let l=await (await (0,i.settings).ADAPTER.fetch(e)).blob(),h=URL.createObjectURL(l);try{let i={autoPlay:this.config.defaultAutoPlay,...t?.data?.resourceOptions},l=new s.VideoResource(h,i);await l.load();let u=new a.BaseTexture(l,{alphaMode:await o.detectVideoAlphaMode(),resolution:o.getResolutionOfUrl(e),...t?.data});u.resource.src=e,(n=(0,d.createTexture)(u,r,e)).baseTexture.once("destroyed",()=>{URL.revokeObjectURL(h)})}catch(e){throw URL.revokeObjectURL(h),e}return n},unload(e){e.destroy(!0)}};(0,r.extensions).add(f)}),a("2Xklp",function(e,t){n("8FyPI")}),a("1EE1o",function(t,r){e(t.exports,"Resolver",()=>l),n("2AhlO");var i=n("MiLFw"),s=n("hpcLf"),a=n("jJ7yD"),o=n("f1E15");class l{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}/**
   * Override how the resolver deals with generating bundle ids.
   * must be called before any bundles are added
   * @param bundleIdentifier - the bundle identifier options
   */setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,"bar"!==this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar")))throw Error("[Resolver] GenerateBundleAssetId are not working correctly")}/**
   * Let the resolver know which assets you prefer to use when resolving assets.
   * Multiple prefer user defined rules can be added.
   * @example
   * resolver.prefer({
   *     // first look for something with the correct format, and then then correct resolution
   *     priority: ['format', 'resolution'],
   *     params:{
   *         format:'webp', // prefer webp images
   *         resolution: 2, // prefer a resolution of 2
   *     }
   * })
   * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
   * resolver.resolveUrl('foo') // => 'bar@2x.webp'
   * @param preferOrders - the prefer options
   */prefer(...e){e.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}/**
   * Set the base path to prepend to all urls when resolving
   * @example
   * resolver.basePath = 'https://home.com/';
   * resolver.add('foo', 'bar.ong');
   * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
   * @param basePath - the base path to use
   */set basePath(e){this._basePath=e}get basePath(){return this._basePath}/**
   * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
   * default value for browsers is `window.location.origin`
   * @example
   * // Application hosted on https://home.com/some-path/index.html
   * resolver.basePath = 'https://home.com/some-path/';
   * resolver.rootPath = 'https://home.com/';
   * resolver.add('foo', '/bar.png');
   * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
   * @param rootPath - the root path to use
   */set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}/**
   * All the active URL parsers that help the parser to extract information and create
   * an asset object-based on parsing the URL itself.
   *
   * Can be added using the extensions API
   * @example
   * resolver.add('foo', [
   *     {
   *         resolution: 2,
   *         format: 'png',
   *         src: 'image@2x.png',
   *     },
   *     {
   *         resolution:1,
   *         format:'png',
   *         src: 'image.png',
   *     },
   * ]);
   *
   * // With a url parser the information such as resolution and file format could extracted from the url itself:
   * extensions.add({
   *     extension: ExtensionType.ResolveParser,
   *     test: loadTextures.test, // test if url ends in an image
   *     parse: (value: string) =>
   *     ({
   *         resolution: parseFloat(settings.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
   *         format: value.split('.').pop(),
   *         src: value,
   *     }),
   * });
   *
   * // Now resolution and format can be extracted from the url
   * resolver.add('foo', [
   *     'image@2x.png',
   *     'image.png',
   * ]);
   */get parsers(){return this._parsers}/** Used for testing, this resets the resolver to its initial state */reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}/**
   * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
   * @param searchParams - the default url parameters to append when resolving urls
   */setDefaultSearchParams(e){"string"==typeof e?this._defaultSearchParams=e:this._defaultSearchParams=Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")}/**
   * Returns the aliases for a given asset
   * @param asset - the asset to get the aliases for
   */getAlias(e){let{alias:t,name:r,src:i,srcs:n}=e;return(0,s.convertToList)(t||r||i||n,e=>"string"==typeof e?e:Array.isArray(e)?e.map(e=>e?.src??e?.srcs??e):e?.src||e?.srcs?e.src??e.srcs:e,!0)}/**
   * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
   * generally a manifest would be built using a tool.
   * @param manifest - the manifest to add to the resolver
   */addManifest(e){this._manifest&&console.warn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}/**
   * This adds a bundle of assets in one go so that you can resolve them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * resolver.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const resolvedAssets = await resolver.resolveBundle('animals');
   * @param bundleId - The id of the bundle to add
   * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
   */addBundle(e,t){let r=[];Array.isArray(t)?t.forEach(t=>{let i;let s=t.src??t.srcs,n=t.alias??t.name;if("string"==typeof n){let t=this._createBundleAssetId(e,n);r.push(t),i=[n,t]}else{let t=n.map(t=>this._createBundleAssetId(e,t));r.push(...t),i=[...n,...t]}this.add({...t,alias:i,src:s})}):Object.keys(t).forEach(i=>{let s=[i,this._createBundleAssetId(e,i)];if("string"==typeof t[i])this.add({alias:s,src:t[i]});else if(Array.isArray(t[i]))this.add({alias:s,src:t[i]});else{let e=t[i],r=e.src??e.srcs;this.add({...e,alias:s,src:Array.isArray(r)?r:[r]})}r.push(...s)}),this._bundles[e]=r}add(e,t,r,n,o){let l;let h=[];"string"==typeof e||Array.isArray(e)&&"string"==typeof e[0]?(i.deprecation("7.2.0",`Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`),h.push({alias:e,src:t,data:r,format:n,loadParser:o})):Array.isArray(e)?h.push(...e):h.push(e),l=e=>{this.hasKey(e)&&console.warn(`[Resolver] already has key: ${e} overwriting`)},(0,s.convertToList)(h).forEach(e=>{let{src:t,srcs:r}=e,{data:i,format:n,loadParser:o}=e,h=(0,s.convertToList)(t||r).map(e=>"string"==typeof e?(0,a.createStringVariations)(e):Array.isArray(e)?e:[e]),u=this.getAlias(e);Array.isArray(u)?u.forEach(l):l(u);let d=[];h.forEach(e=>{e.forEach(e=>{let t={};if("object"!=typeof e){t.src=e;for(let r=0;r<this._parsers.length;r++){let i=this._parsers[r];if(i.test(e)){t=i.parse(e);break}}}else i=e.data??i,n=e.format??n,o=e.loadParser??o,t={...t,...e};if(!u)throw Error(`[Resolver] alias is undefined for this asset: ${t.src}`);t=this.buildResolvedAsset(t,{aliases:u,data:i,format:n,loadParser:o}),d.push(t)})}),u.forEach(e=>{this._assetMap[e]=d})})}// TODO: this needs an overload like load did in Assets
/**
   * If the resolver has had a manifest set via setManifest, this will return the assets urls for
   * a given bundleId or bundleIds.
   * @example
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * resolver.setManifest(manifest);
   * const resolved = resolver.resolveBundle('load-screen');
   * @param bundleIds - The bundle ids to resolve
   * @returns All the bundles assets or a hash of assets for each bundle specified
   */resolveBundle(e){let t=(0,o.isSingleItem)(e);e=(0,s.convertToList)(e);let r={};return e.forEach(e=>{let t=this._bundles[e];if(t){let i=this.resolve(t),s={};for(let t in i){let r=i[t];s[this._extractAssetIdFromBundle(e,t)]=r}r[e]=s}}),t?r[e[0]]:r}/**
   * Does exactly what resolve does, but returns just the URL rather than the whole asset object
   * @param key - The key or keys to resolve
   * @returns - The URLs associated with the key(s)
   */resolveUrl(e){let t=this.resolve(e);if("string"!=typeof e){let e={};for(let r in t)e[r]=t[r].src;return e}return t.src}resolve(e){let t=(0,o.isSingleItem)(e);e=(0,s.convertToList)(e);let r={};return e.forEach(e=>{if(!this._resolverHash[e]){if(this._assetMap[e]){let t=this._assetMap[e],r=t[0],i=this._getPreferredOrder(t);i?.priority.forEach(e=>{i.params[e].forEach(r=>{let i=t.filter(t=>!!t[e]&&t[e]===r);i.length&&(t=i)})}),this._resolverHash[e]=t[0]??r}else this._resolverHash[e]=this.buildResolvedAsset({alias:[e],src:e},{})}r[e]=this._resolverHash[e]}),t?r[e[0]]:r}/**
   * Checks if an asset with a given key exists in the resolver
   * @param key - The key of the asset
   */hasKey(e){return!!this._assetMap[e]}/**
   * Checks if a bundle with the given key exists in the resolver
   * @param key - The key of the bundle
   */hasBundle(e){return!!this._bundles[e]}/**
   * Internal function for figuring out what prefer criteria an asset should use.
   * @param assets
   */_getPreferredOrder(e){for(let t=0;t<e.length;t++){let t=e[0],r=this._preferredOrder.find(e=>e.params.format.includes(t.format));if(r)return r}return this._preferredOrder[0]}/**
   * Appends the default url parameters to the url
   * @param url - The url to append the default parameters to
   * @returns - The url with the default parameters appended
   */_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;let t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}buildResolvedAsset(e,t){let{aliases:r,data:s,loadParser:n,format:a}=t;return(this._basePath||this._rootPath)&&(e.src=i.path.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...s||{},...e.data},e.loadParser=n??e.loadParser,e.format=a??i.path.extname(e.src).slice(1),e.srcs=e.src,e.name=e.alias,e}}}),a("iW8F5",function(e,t){n("in9G3"),n("4Or82"),n("fcyUA")}),a("4Or82",function(e,t){}),a("fcyUA",function(e,t){n("dAwW8")}),a("dAwW8",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("7eheB");let s={extension:r.ExtensionType.CacheParser,test:e=>Array.isArray(e)&&e.every(e=>e instanceof i.Texture),getCacheableAssets:(e,t)=>{let r={};return e.forEach(e=>{t.forEach((t,i)=>{r[e+(0===i?"":i+1)]=t})}),r}};(0,r.extensions).add(s)}),a("T4zgu",function(e,t){n("ekq3g")}),a("ekq3g",function(e,t){n("jxFzr"),n("7FD0i"),n("5u4Iz"),n("4kJ1p"),n("4dGx9"),n("6hDWW")}),a("jxFzr",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("65kI5");let s={extension:{type:r.ExtensionType.DetectionParser,priority:1},test:async()=>(0,i.testImageFormat)("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async e=>[...e,"avif"],remove:async e=>e.filter(e=>"avif"!==e)};(0,r.extensions).add(s)}),a("65kI5",function(t,r){e(t.exports,"testImageFormat",()=>i);async function i(e){if("Image"in globalThis)return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let t=await (await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}}),a("7FD0i",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("65kI5");let s={extension:{type:r.ExtensionType.DetectionParser,priority:0},test:async()=>(0,i.testImageFormat)("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async e=>[...e,"webp"],remove:async e=>e.filter(e=>"webp"!==e)};(0,r.extensions).add(s)}),a("5u4Iz",function(e,t){n("2AhlO");var r=n("glXXo");let i=["png","jpg","jpeg"],s={extension:{type:r.ExtensionType.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...i],remove:async e=>e.filter(e=>!i.includes(e))};(0,r.extensions).add(s)}),a("4kJ1p",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("jY487");let s={extension:{type:r.ExtensionType.DetectionParser,priority:0},test:async()=>(0,i.testVideoFormat)("video/webm"),add:async e=>[...e,"webm"],remove:async e=>e.filter(e=>"webm"!==e)};(0,r.extensions).add(s)}),a("jY487",function(t,r){e(t.exports,"testVideoFormat",()=>s);let i="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function s(e){return!i&&""!==document.createElement("video").canPlayType(e)}}),a("4dGx9",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("jY487");let s={extension:{type:r.ExtensionType.DetectionParser,priority:0},test:async()=>(0,i.testVideoFormat)("video/mp4"),add:async e=>[...e,"mp4","m4v"],remove:async e=>e.filter(e=>"mp4"!==e&&"m4v"!==e)};(0,r.extensions).add(s)}),a("6hDWW",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("jY487");let s={extension:{type:r.ExtensionType.DetectionParser,priority:0},test:async()=>(0,i.testVideoFormat)("video/ogg"),add:async e=>[...e,"ogv"],remove:async e=>e.filter(e=>"ogv"!==e)};(0,r.extensions).add(s)}),a("fsKEE",function(e,t){n("gesEW")}),a("kyzbk",function(e,t){n("hlSR9"),n("d3g8z")}),a("hlSR9",function(e,t){n("ihKGK")}),a("ihKGK",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("8oqCw"),s=n("MiLFw");n("fsKEE");var a=n("fmHc8");let o={extension:r.ExtensionType.ResolveParser,test:a.loadTextures.test,parse:e=>({resolution:parseFloat(i.settings.RETINA_PREFIX.exec(e)?.[1]??"1"),format:s.path.extname(e).slice(1),src:e})};(0,r.extensions).add(o)}),a("d3g8z",function(e,t){}),a("1zmFj",function(e,t){}),a("hO5Ga",function(e,t){n("8F0GX"),n("ag7O0"),n("1ThDT"),n("cnLRF"),n("bY0Mo"),n("5LuSf"),n("hWTkI"),n("andbG"),n("9DGzZ"),n("dAR9w"),n("atYvJ"),n("asNDB")}),a("8F0GX",function(t,r){e(t.exports,"INTERNAL_FORMATS",()=>s),e(t.exports,"INTERNAL_FORMAT_TO_BYTES_PER_PIXEL",()=>n);var i,s=((i=s||{})[i.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",i[i.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",i[i.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",i[i.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",i[i.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",i[i.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",i[i.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",i[i.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",i[i.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",i[i.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",i[i.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",i);let n={// WEBGL_compressed_texture_s3tc
33776:.5,33777:.5,33778:1,33779:1,// WEBGL_compressed_texture_s3tc
35916:.5,35917:.5,35918:1,35919:1,// WEBGL_compressed_texture_etc
37488:.5,37489:.5,37490:1,37491:1,37492:.5,37496:1,37493:.5,37497:1,37494:.5,// ~~
37495:.5,// ~~
// WEBGL_compressed_texture_pvrtc
35840:.5,35842:.5,35841:.25,35843:.25,// WEBGL_compressed_texture_etc1
36196:.5,// @see https://www.khronos.org/registry/OpenGL/extensions/AMD/AMD_compressed_ATC_texture.txt
// WEBGL_compressed_texture_atc
35986:.5,35986:1,34798:1,// @see https://registry.khronos.org/OpenGL/extensions/KHR/KHR_texture_compression_astc_hdr.txt
// WEBGL_compressed_texture_astc
/* eslint-disable-next-line camelcase */37808:1}}),a("ag7O0",function(e,t){n("g9pfm"),n("bY0Mo"),n("5LuSf"),n("hWTkI"),n("andbG")}),a("g9pfm",function(e,t){}),a("bY0Mo",function(e,t){let r,i;n("2AhlO");var s=n("glXXo"),a=n("8oqCw");function o(){i={s3tc:r.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),/* eslint-disable-line camelcase */etc:r.getExtension("WEBGL_compressed_texture_etc"),etc1:r.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:r.getExtension("WEBGL_compressed_texture_atc"),astc:r.getExtension("WEBGL_compressed_texture_astc")}}let l={extension:{type:s.ExtensionType.DetectionParser,priority:2},test:async()=>{let e=(0,a.settings).ADAPTER.createCanvas().getContext("webgl");return e?(r=e,!0):(console.warn("WebGL not available for compressed textures."),!1)},add:async e=>{i||o();let t=[];for(let e in i)i[e]&&t.push(e);return[...t,...e]},remove:async e=>(i||o(),e.filter(e=>!(e in i)))};(0,s.extensions).add(l)}),a("5LuSf",function(e,t){n("9t9WZ");var r=n("djhuW"),i=n("ektXp"),s=n("8FyPI");n("2AhlO");var a=n("glXXo"),o=n("8oqCw"),l=n("2Am4Q"),h=n("jetUE"),u=n("MiLFw");n("1ThDT");var d=n("9DGzZ");let c={extension:{type:a.ExtensionType.LoadParser,priority:r.LoaderParserPriority.High},name:"loadDDS",test:e=>(0,i.checkExtension)(e,".dds"),async load(e,t,r){let i=await (await (0,o.settings).ADAPTER.fetch(e)).arrayBuffer(),n=(0,d.parseDDS)(i).map(i=>{let n=new l.BaseTexture(i,{mipmap:h.MIPMAP_MODES.OFF,alphaMode:h.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,resolution:u.getResolutionOfUrl(e),...t.data});return(0,s.createTexture)(n,r,e)});return 1===n.length?n[0]:n},unload(e){Array.isArray(e)?e.forEach(e=>e.destroy(!0)):e.destroy(!0)}};(0,a.extensions).add(c)}),a("1ThDT",function(e,t){n("9DGzZ"),n("dAR9w")}),a("9DGzZ",function(t,r){e(t.exports,"parseDDS",()=>u);var i=n("8F0GX");n("cnLRF");var s=n("asNDB");let a={FOURCC:2},o={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3},l={827611204:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,861165636:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,894720068:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT},h={// WEBGL_compressed_texture_s3tc
70:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,71:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT,73:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,74:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT,76:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT,77:i.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT,// WEBGL_compressed_texture_s3tc_srgb
72:i.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,75:i.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,78:i.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT};function u(e){let t=new Uint32Array(e);if(542327876!==t[0])throw Error("Invalid DDS file magic word");let r=new Uint32Array(e,0,124/Uint32Array.BYTES_PER_ELEMENT),n=r[3],u=r[4],d=r[7],c=new Uint32Array(e,19*Uint32Array.BYTES_PER_ELEMENT,32/Uint32Array.BYTES_PER_ELEMENT),p=c[1];if(4&p){let r=c[a.FOURCC];if(808540228!==r){let t=l[r],i=new Uint8Array(e,128);return[new s.CompressedTextureResource(i,{format:t,width:u,height:n,levels:d})]}let p=new Uint32Array(t.buffer,128,20/Uint32Array.BYTES_PER_ELEMENT),f=p[o.DXGI_FORMAT],m=p[o.RESOURCE_DIMENSION],g=p[o.MISC_FLAG],x=p[o.ARRAY_SIZE],_=h[f];if(void 0===_)throw Error(`DDSParser cannot parse texture data with DXGI format ${f}`);if(4===g)throw Error("DDSParser does not support cubemap textures");if(6===m)throw Error("DDSParser does not supported 3D texture data");let v=[];if(1===x)v.push(new Uint8Array(e,148));else{let t=i.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[_],r=0,s=u,a=n;for(let e=0;e<d;e++){let e=Math.max(1,s+3&-4),i=Math.max(1,a+3&-4),n=e*i*t;r+=n,s>>>=1,a>>>=1}let o=148;for(let t=0;t<x;t++)v.push(new Uint8Array(e,o,r)),o+=r}return v.map(e=>new s.CompressedTextureResource(e,{format:_,width:u,height:n,levels:d}))}throw 64&p?Error("DDSParser does not support uncompressed texture data."):512&p?Error("DDSParser does not supported YUV uncompressed texture data."):131072&p?Error("DDSParser does not support single-channel (lumninance) texture data!"):2&p?Error("DDSParser does not support single-channel (alpha) texture data!"):Error("DDSParser failed to load a texture file due to an unknown reason!")}}),a("cnLRF",function(e,t){n("atYvJ"),n("asNDB")}),a("atYvJ",function(t,r){e(t.exports,"BlobResource",()=>a),n("2AhlO");var i=n("k8R80"),s=n("1ClQS");class a extends s.BufferResource{/**
   * @param source - The buffer/URL of the texture file.
   * @param {PIXI.IBlobResourceOptions} [options]
   * @param {boolean} [options.autoLoad=false] - Whether to fetch the data immediately;
   *  you can fetch it later via {@link PIXI.BlobResource#load}.
   * @param {number} [options.width=1] - The width in pixels.
   * @param {number} [options.height=1] - The height in pixels.
   * @param {1|2|4|8} [options.unpackAlignment=4] - The alignment of the pixel rows.
   */constructor(e,t={width:1,height:1,autoLoad:!0}){let r,s;"string"==typeof e?(r=e,s=new Uint8Array):(r=null,s=e),super(s,t),this.origin=r,this.buffer=s?new i.ViewableBuffer(s):null,this._load=null,this.loaded=!1,null!==this.origin&&!1!==t.autoLoad&&this.load(),null===this.origin&&this.buffer&&(this._load=Promise.resolve(this),this.loaded=!0,this.onBlobLoaded(this.buffer.rawBinaryData))}onBlobLoaded(e){}/** Loads the blob */load(){return this._load||(this._load=fetch(this.origin).then(e=>e.blob()).then(e=>e.arrayBuffer()).then(e=>(this.data=new Uint32Array(e),this.buffer=new i.ViewableBuffer(e),this.loaded=!0,this.onBlobLoaded(e),this.update(),this))),this._load}}}),a("asNDB",function(t,r){e(t.exports,"CompressedTextureResource",()=>a);var i=n("8F0GX"),s=n("atYvJ");class a extends s.BlobResource{/**
   * @param source - the buffer/URL holding the compressed texture data
   * @param options
   * @param {PIXI.INTERNAL_FORMATS} options.format - the compression format
   * @param {number} options.width - the image width in pixels.
   * @param {number} options.height - the image height in pixels.
   * @param {number} [options.level=1] - the mipmap levels stored in the compressed texture, including level 0.
   * @param {number} [options.levelBuffers] - the buffers for each mipmap level. `CompressedTextureResource` can allows you
   *      to pass `null` for `source`, for cases where each level is stored in non-contiguous memory.
   */constructor(e,t){super(e,t),this.format=t.format,this.levels=t.levels||1,this._width=t.width,this._height=t.height,this._extension=a._formatToExtension(this.format),(t.levelBuffers||this.buffer)&&(this._levelBuffers=t.levelBuffers||a._createLevelBuffers(e instanceof Uint8Array?e:this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height))}/**
   * @override
   * @param renderer - A reference to the current renderer
   * @param _texture - the texture
   * @param _glTexture - texture instance for this webgl context
   */upload(e,t,r){let i=e.gl;if(!e.context.extensions[this._extension])throw Error(`${this._extension} textures are not supported on the current machine`);if(!this._levelBuffers)return!1;i.pixelStorei(i.UNPACK_ALIGNMENT,4);for(let e=0,t=this.levels;e<t;e++){let{levelID:t,levelWidth:r,levelHeight:s,levelBuffer:n}=this._levelBuffers[e];i.compressedTexImage2D(i.TEXTURE_2D,t,this.format,r,s,0,n)}return!0}/** @protected */onBlobLoaded(){this._levelBuffers=a._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)}/**
   * Returns the key (to ContextSystem#extensions) for the WebGL extension supporting the compression format
   * @private
   * @param format - the compression format to get the extension for.
   */static _formatToExtension(e){if(e>=33776&&e<=33779)return"s3tc";if(e>=37488&&e<=37497)return"etc";if(e>=35840&&e<=35843)return"pvrtc";if(e>=36196)return"etc1";if(e>=35986&&e<=34798)return"atc";throw Error("Invalid (compressed) texture format given!")}/**
   * Pre-creates buffer views for each mipmap level
   * @private
   * @param buffer -
   * @param format - compression formats
   * @param levels - mipmap levels
   * @param blockWidth -
   * @param blockHeight -
   * @param imageWidth - width of the image in pixels
   * @param imageHeight - height of the image in pixels
   */static _createLevelBuffers(e,t,r,s,n,a,o){let l=Array(r),h=e.byteOffset,u=a,d=o,c=u+s-1&~(s-1),p=d+n-1&~(n-1),f=c*p*i.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[t];for(let a=0;a<r;a++)l[a]={levelID:a,levelWidth:r>1?u:c,levelHeight:r>1?d:p,levelBuffer:new Uint8Array(e.buffer,h,f)},h+=f,d=d>>1||1,f=(c=(u=u>>1||1)+s-1&~(s-1))*(p=d+n-1&~(n-1))*i.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[t];return l}}}),a("dAR9w",function(t,r){e(t.exports,"parseKTX",()=>p),n("2AhlO");var i=n("jetUE"),s=n("1ClQS"),a=n("8F0GX");n("cnLRF");var o=n("asNDB");let l=[171,75,84,88,32,49,49,187,13,10,26,10],h={ENDIANNESS:12,GL_TYPE:16,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},u={[i.TYPES.UNSIGNED_BYTE]:1,[i.TYPES.UNSIGNED_SHORT]:2,[i.TYPES.INT]:4,[i.TYPES.UNSIGNED_INT]:4,[i.TYPES.FLOAT]:4,[i.TYPES.HALF_FLOAT]:8},d={[i.FORMATS.RGBA]:4,[i.FORMATS.RGB]:3,[i.FORMATS.RG]:2,[i.FORMATS.RED]:1,[i.FORMATS.LUMINANCE]:1,[i.FORMATS.LUMINANCE_ALPHA]:2,[i.FORMATS.ALPHA]:1},c={[i.TYPES.UNSIGNED_SHORT_4_4_4_4]:2,[i.TYPES.UNSIGNED_SHORT_5_5_5_1]:2,[i.TYPES.UNSIGNED_SHORT_5_6_5]:2};function p(e,t,r=!1){let n;let p=new DataView(t);if(!function(e,t){for(let r=0;r<l.length;r++)if(t.getUint8(r)!==l[r])return console.error(`${e} is not a valid *.ktx file!`),!1;return!0}(e,p))return null;let f=67305985===p.getUint32(h.ENDIANNESS,!0),m=p.getUint32(h.GL_TYPE,f),g=p.getUint32(h.GL_FORMAT,f),x=p.getUint32(h.GL_INTERNAL_FORMAT,f),_=p.getUint32(h.PIXEL_WIDTH,f),v=p.getUint32(h.PIXEL_HEIGHT,f)||1,E=p.getUint32(h.PIXEL_DEPTH,f)||1,T=p.getUint32(h.NUMBER_OF_ARRAY_ELEMENTS,f)||1,y=p.getUint32(h.NUMBER_OF_FACES,f),A=p.getUint32(h.NUMBER_OF_MIPMAP_LEVELS,f),b=p.getUint32(h.BYTES_OF_KEY_VALUE_DATA,f);if(0===v||1!==E)throw Error("Only 2D textures are supported");if(1!==y)throw Error("CubeTextures are not supported by KTXLoader yet!");if(1!==T)throw Error("WebGL does not support array textures");let S=_+3&-4,R=v+3&-4,w=Array(T),M=_*v;if(0===m&&(M=S*R),void 0===(n=0!==m?u[m]?u[m]*d[g]:c[m]:a.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[x]))throw Error("Unable to resolve the pixel format stored in the *.ktx file!");let P=r?function(e,t,r){let i=/* @__PURE__ */new Map,s=0;for(;s<t;){let n=e.getUint32(64+s,r),a=64+s+4,o=3-(n+3)%4;if(0===n||n>t-s){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}let l=0;for(;l<n&&0!==e.getUint8(a+l);l++);if(-1===l){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}let h=new TextDecoder().decode(new Uint8Array(e.buffer,a,l)),u=new DataView(e.buffer,a+l+1,n-l-1);i.set(h,u),s+=4+n+o}return i}(p,b,f):null,I=M*n,C=_,D=v,O=S,B=R,F=64+b;for(let e=0;e<A;e++){let r=p.getUint32(F,f),i=F+4;for(let r=0;r<T;r++){let s=w[r];s||(s=w[r]=Array(A)),s[e]={levelID:e,// don't align mipWidth when texture not compressed! (glType not zero)
levelWidth:A>1||0!==m?C:O,levelHeight:A>1||0!==m?D:B,levelBuffer:new Uint8Array(t,i,I)},i+=I}F+=r+4,F=F%4!=0?F+4-F%4:F,D=D>>1||1,I=(O=(C=C>>1||1)+4-1&-4)*(B=D+4-1&-4)*n}return 0!==m?{uncompressed:w.map(e=>{let t=e[0].levelBuffer,r=!1;return m===i.TYPES.FLOAT?t=new Float32Array(e[0].levelBuffer.buffer,e[0].levelBuffer.byteOffset,e[0].levelBuffer.byteLength/4):m===i.TYPES.UNSIGNED_INT?(r=!0,t=new Uint32Array(e[0].levelBuffer.buffer,e[0].levelBuffer.byteOffset,e[0].levelBuffer.byteLength/4)):m===i.TYPES.INT&&(r=!0,t=new Int32Array(e[0].levelBuffer.buffer,e[0].levelBuffer.byteOffset,e[0].levelBuffer.byteLength/4)),{resource:new s.BufferResource(t,{width:e[0].levelWidth,height:e[0].levelHeight}),type:m,format:r?function(e){switch(e){case i.FORMATS.RGBA:return i.FORMATS.RGBA_INTEGER;case i.FORMATS.RGB:return i.FORMATS.RGB_INTEGER;case i.FORMATS.RG:return i.FORMATS.RG_INTEGER;case i.FORMATS.RED:return i.FORMATS.RED_INTEGER;default:return e}}(g):g}}),kvData:P}:{compressed:w.map(e=>new o.CompressedTextureResource(null,{format:x,width:_,height:v,levels:A,levelBuffers:e})),kvData:P}}}),a("hWTkI",function(e,t){n("9t9WZ");var r=n("djhuW"),i=n("ektXp"),s=n("8FyPI");n("2AhlO");var a=n("glXXo"),o=n("8oqCw"),l=n("jetUE"),h=n("MiLFw"),u=n("2Am4Q");n("1ThDT");var d=n("dAR9w");let c={extension:{type:a.ExtensionType.LoadParser,priority:r.LoaderParserPriority.High},name:"loadKTX",test:e=>(0,i.checkExtension)(e,".ktx"),async load(e,t,r){let i=await (await (0,o.settings).ADAPTER.fetch(e)).arrayBuffer(),{compressed:n,uncompressed:a,kvData:c}=(0,d.parseKTX)(e,i),p=n??a,f={mipmap:l.MIPMAP_MODES.OFF,alphaMode:l.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,resolution:h.getResolutionOfUrl(e),...t.data},m=p.map(t=>{p===a&&Object.assign(f,{type:t.type,format:t.format});let i=t.resource??t,n=new u.BaseTexture(i,f);return n.ktxKeyValueData=c,(0,s.createTexture)(n,r,e)});return 1===m.length?m[0]:m},unload(e){Array.isArray(e)?e.forEach(e=>e.destroy(!0)):e.destroy(!0)}};(0,a.extensions).add(c)}),a("andbG",function(e,t){n("2AhlO");var r=n("glXXo"),i=n("MiLFw"),s=n("8oqCw");let a={extension:r.ExtensionType.ResolveParser,test:e=>{let t=i.path.extname(e).slice(1);return["basis","ktx","dds"].includes(t)},parse:e=>{let t=i.path.extname(e).slice(1);if("ktx"===t){let t=[".s3tc.ktx",".s3tc_sRGB.ktx",".etc.ktx",".etc1.ktx",".pvrt.ktx",".atc.ktx",".astc.ktx"];if(t.some(t=>e.endsWith(t)))return{resolution:parseFloat(s.settings.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t.find(t=>e.endsWith(t)),src:e}}return{resolution:parseFloat(s.settings.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t,src:e}}};(0,r.extensions).add(a)}),a("9veqA",function(e,t){n("lDR4s")}),a("lDR4s",function(e,t){n("2AhlO");var r=n("6OnST"),i=n("MiLFw"),s=n("23Rkv"),a=n("jetUE"),o=n("glXXo");let l=new r.Rectangle,h=class e{/**
   * @param renderer - A reference to the current renderer
   */constructor(e){this.renderer=e,this._rendererPremultipliedAlpha=!1}contextChange(){let e=this.renderer?.gl.getContextAttributes();this._rendererPremultipliedAlpha=!!(e&&e.alpha&&e.premultipliedAlpha)}/**
   * Will return a HTML Image of the target
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - HTML Image of the target
   */async image(e,t,r,i){let s=new Image;return s.src=await this.base64(e,t,r,i),s}/**
   * Will return a base64 encoded string of this target. It works by calling
   *  `Extract.canvas` and then running toDataURL on that.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - A base64 encoded string of the texture.
   */async base64(e,t,r,i){let s=this.canvas(e,i);if(void 0!==s.toBlob)return new Promise((e,i)=>{s.toBlob(t=>{if(!t){i(Error("ICanvas.toBlob failed!"));return}let r=new FileReader;r.onload=()=>e(r.result),r.onerror=i,r.readAsDataURL(t)},t,r)});if(void 0!==s.toDataURL)return s.toDataURL(t,r);if(void 0!==s.convertToBlob){let e=await s.convertToBlob({type:t,quality:r});return new Promise((t,r)=>{let i=new FileReader;i.onload=()=>t(i.result),i.onerror=r,i.readAsDataURL(e)})}throw Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}/**
   * Creates a Canvas element, renders this target to it and then returns it.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - A Canvas element with the texture rendered on.
   */canvas(t,r){let{pixels:s,width:n,height:a,flipY:o,premultipliedAlpha:l}=this._rawPixels(t,r);o&&e._flipY(s,n,a),l&&e._unpremultiplyAlpha(s);let h=new i.CanvasRenderTarget(n,a,1),u=new ImageData(new Uint8ClampedArray(s.buffer),n,a);return h.context.putImageData(u,0,0),h.canvas}/**
   * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
   * order, with integer values between 0 and 255 (included).
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - One-dimensional array containing the pixel data of the entire texture
   */pixels(t,r){let{pixels:i,width:s,height:n,flipY:a,premultipliedAlpha:o}=this._rawPixels(t,r);return a&&e._flipY(i,s,n),o&&e._unpremultiplyAlpha(i),i}_rawPixels(e,t){let r=this.renderer;if(!r)throw Error("The Extract has already been destroyed");let i,n=!1,o=!1,h,u=!1;e&&(e instanceof s.RenderTexture?h=e:(h=r.generateTexture(e,{region:t,resolution:r.resolution,multisample:r.multisample}),u=!0,t&&(l.width=t.width,l.height=t.height,t=l)));let d=r.gl;if(h){if(i=h.baseTexture.resolution,t=t??h.frame,n=!1,o=h.baseTexture.alphaMode>0&&h.baseTexture.format===a.FORMATS.RGBA,!u){r.renderTexture.bind(h);let e=h.framebuffer.glFramebuffers[r.CONTEXT_UID];e.blitFramebuffer&&r.framebuffer.bind(e.blitFramebuffer)}}else i=r.resolution,t||((t=l).width=r.width/i,t.height=r.height/i),n=!0,o=this._rendererPremultipliedAlpha,r.renderTexture.bind();let c=Math.max(Math.round(t.width*i),1),p=Math.max(Math.round(t.height*i),1),f=new Uint8Array(4*c*p);return d.readPixels(Math.round(t.x*i),Math.round(t.y*i),c,p,d.RGBA,d.UNSIGNED_BYTE,f),u&&h?.destroy(!0),{pixels:f,width:c,height:p,flipY:n,premultipliedAlpha:o}}/** Destroys the extract. */destroy(){this.renderer=null}static _flipY(e,t,r){let i=t<<2,s=r>>1,n=new Uint8Array(i);for(let t=0;t<s;t++){let s=t*i,a=(r-t-1)*i;n.set(e.subarray(s,s+i)),e.copyWithin(s,a,a+i),e.set(n,a)}}static _unpremultiplyAlpha(e){e instanceof Uint8ClampedArray&&(e=new Uint8Array(e.buffer));let t=e.length;for(let r=0;r<t;r+=4){let t=e[r+3];if(0!==t){let i=255.001/t;e[r]=e[r]*i+.5,e[r+1]=e[r+1]*i+.5,e[r+2]=e[r+2]*i+.5}}}};h.extension={name:"extract",type:o.ExtensionType.RendererSystem},(0,o.extensions).add(h)}),a("9qNwV",function(t,r){e(t.exports,"Graphics",()=>n("7qA1V").Graphics);var i=n("1psVH");n("7ka6T"),n("7qA1V"),n("4mr3U"),n("gSxhD"),n("2ObMu"),n("camHf");var s=n("iXmAX"),a=n("iTSFM"),o=n("2d092"),l=n("iqocv"),h=n("gzbCb"),u=n("1HSH1"),d=n("iyqBz"),c=n("gGsGx"),p=n("7S8D8");s.buildPoly,a.buildCircle,o.buildRectangle,l.buildRoundedRectangle,h.buildLine,u.ArcUtils,d.BezierUtils,c.QuadraticUtils,p.BatchPart,i.FILL_COMMANDS,i.BATCH_POOL,i.DRAW_CALL_POOL}),a("1psVH",function(t,r){e(t.exports,"FILL_COMMANDS",()=>h),e(t.exports,"BATCH_POOL",()=>u),e(t.exports,"DRAW_CALL_POOL",()=>d),n("2AhlO");var i=n("lkqjp"),s=n("iTSFM"),a=n("iXmAX"),o=n("2d092"),l=n("iqocv");n("1HSH1"),n("7S8D8"),n("iyqBz"),n("gzbCb"),n("gGsGx");let h={[i.SHAPES.POLY]:a.buildPoly,[i.SHAPES.CIRC]:s.buildCircle,[i.SHAPES.ELIP]:s.buildCircle,[i.SHAPES.RECT]:o.buildRectangle,[i.SHAPES.RREC]:l.buildRoundedRectangle},u=[],d=[]}),a("iTSFM",function(t,r){e(t.exports,"buildCircle",()=>s),n("2AhlO");var i=n("lkqjp");let s={build(e){let t,r,s,n,a,o;let l=e.points;if(e.type===i.SHAPES.CIRC){let i=e.shape;t=i.x,r=i.y,a=o=i.radius,s=n=0}else if(e.type===i.SHAPES.ELIP){let i=e.shape;t=i.x,r=i.y,a=i.width,o=i.height,s=n=0}else{let i=e.shape,l=i.width/2,h=i.height/2;t=i.x+l,r=i.y+h,a=o=Math.max(0,Math.min(i.radius,Math.min(l,h))),s=l-a,n=h-o}if(!(a>=0&&o>=0&&s>=0&&n>=0)){l.length=0;return}let h=Math.ceil(2.3*Math.sqrt(a+o)),u=8*h+(s?4:0)+(n?4:0);if(l.length=u,0===u)return;if(0===h){l.length=8,l[0]=l[6]=t+s,l[1]=l[3]=r+n,l[2]=l[4]=t-s,l[5]=l[7]=r-n;return}let d=0,c=4*h+(s?2:0)+2,p=c,f=u;{let e=s+a,i=n,o=t+e,h=t-e,u=r+i;if(l[d++]=o,l[d++]=u,l[--c]=u,l[--c]=h,n){let e=r-i;l[p++]=h,l[p++]=e,l[--f]=e,l[--f]=o}}for(let e=1;e<h;e++){let i=Math.PI/2*(e/h),u=s+Math.cos(i)*a,m=n+Math.sin(i)*o,g=t+u,x=t-u,_=r+m,v=r-m;l[d++]=g,l[d++]=_,l[--c]=_,l[--c]=x,l[p++]=x,l[p++]=v,l[--f]=v,l[--f]=g}{let e=s,i=n+o,a=t+e,h=t-e,u=r+i,c=r-i;l[d++]=a,l[d++]=u,l[--f]=c,l[--f]=a,s&&(l[d++]=h,l[d++]=u,l[--f]=c,l[--f]=h)}},triangulate(e,t){let r,s;let n=e.points,a=t.points,o=t.indices;if(0===n.length)return;let l=a.length/2,h=l;if(e.type!==i.SHAPES.RREC){let t=e.shape;r=t.x,s=t.y}else{let t=e.shape;r=t.x+t.width/2,s=t.y+t.height/2}let u=e.matrix;a.push(e.matrix?u.a*r+u.c*s+u.tx:r,e.matrix?u.b*r+u.d*s+u.ty:s),l++,a.push(n[0],n[1]);for(let e=2;e<n.length;e+=2)a.push(n[e],n[e+1]),o.push(l++,h,l);o.push(h+1,h,l)}}}),a("iXmAX",function(t,r){e(t.exports,"buildPoly",()=>a),n("2AhlO");var i=n("MiLFw");function s(e,t=!1){let r=e.length;if(r<6)return;let i=0;for(let t=0,s=e[r-2],n=e[r-1];t<r;t+=2){let r=e[t],a=e[t+1];i+=(r-s)*(a+n),s=r,n=a}if(!t&&i>0||t&&i<=0){let t=r/2;for(let i=t+t%2;i<r;i+=2){let t=r-i-2,s=r-i-1,n=i,a=i+1;[e[t],e[n]]=[e[n],e[t]],[e[s],e[a]]=[e[a],e[s]]}}}let a={build(e){e.points=e.shape.points.slice()},triangulate(e,t){let r=e.points,n=e.holes,a=t.points,o=t.indices;if(r.length>=6){s(r,!1);let e=[];for(let t=0;t<n.length;t++){let i=n[t];s(i.points,!0),e.push(r.length/2),r=r.concat(i.points)}let t=i.earcut(r,e,2);if(!t)return;let l=a.length/2;for(let e=0;e<t.length;e+=3)o.push(t[e]+l),o.push(t[e+1]+l),o.push(t[e+2]+l);for(let e=0;e<r.length;e++)a.push(r[e])}}}}),a("2d092",function(t,r){e(t.exports,"buildRectangle",()=>i);let i={build(e){let t=e.shape,r=t.x,i=t.y,s=t.width,n=t.height,a=e.points;a.length=0,s>=0&&n>=0&&a.push(r,i,r+s,i,r+s,i+n,r,i+n)},triangulate(e,t){let r=e.points,i=t.points;if(0===r.length)return;let s=i.length/2;i.push(r[0],r[1],r[2],r[3],r[6],r[7],r[4],r[5]),t.indices.push(s,s+1,s+2,s+1,s+2,s+3)}}}),a("iqocv",function(t,r){e(t.exports,"buildRoundedRectangle",()=>s);var i=n("iTSFM");let s={build(e){(0,i.buildCircle).build(e)},triangulate(e,t){(0,i.buildCircle).triangulate(e,t)}}}),a("1HSH1",function(t,r){e(t.exports,"ArcUtils",()=>a),n("2AhlO");var i=n("lkqjp"),s=n("7ka6T");class a{/**
   * Calculate information of the arc for {@link PIXI.Graphics.arcTo}.
   * @private
   * @param x1 - The x-coordinate of the first control point of the arc
   * @param y1 - The y-coordinate of the first control point of the arc
   * @param x2 - The x-coordinate of the second control point of the arc
   * @param y2 - The y-coordinate of the second control point of the arc
   * @param radius - The radius of the arc
   * @param points - Collection of points to add to
   * @returns - If the arc length is valid, return center of circle, radius and other info otherwise `null`.
   */static curveTo(e,t,r,i,s,n){let a=n[n.length-2],o=n[n.length-1]-t,l=a-e,h=i-t,u=r-e,d=Math.abs(o*u-l*h);if(d<1e-8||0===s)return(n[n.length-2]!==e||n[n.length-1]!==t)&&n.push(e,t),null;let c=o*o+l*l,p=h*h+u*u,f=o*h+l*u,m=s*Math.sqrt(c)/d,g=s*Math.sqrt(p)/d,x=m*f/c,_=g*f/p,v=m*u+g*l,E=m*h+g*o;return{cx:v+e,cy:E+t,radius:s,startAngle:Math.atan2(o*(g+x)-E,l*(g+x)-v),endAngle:Math.atan2(h*(m+_)-E,u*(m+_)-v),anticlockwise:l*h>u*o}}/**
   * The arc method creates an arc/curve (used to create circles, or parts of circles).
   * @private
   * @param _startX - Start x location of arc
   * @param _startY - Start y location of arc
   * @param cx - The x-coordinate of the center of the circle
   * @param cy - The y-coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
   *  of the arc's circle)
   * @param endAngle - The ending angle, in radians
   * @param _anticlockwise - Specifies whether the drawing should be
   *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
   *  indicates counter-clockwise.
   * @param points - Collection of points to add to
   */static arc(e,t,r,n,a,o,l,h,u){let d=l-o,c=(0,s.curves)._segmentsCount(Math.abs(d)*a,40*Math.ceil(Math.abs(d)/i.PI_2)),p=d/(2*c),f=2*p,m=Math.cos(p),g=Math.sin(p),x=c-1,_=x%1/x;for(let e=0;e<=x;++e){let t=e+_*e,i=p+o+f*t,s=Math.cos(i),l=-Math.sin(i);u.push((m*s+g*l)*a+r,(-(m*l)+g*s)*a+n)}}}}),a("7ka6T",function(t,r){e(t.exports,"LINE_JOIN",()=>n),e(t.exports,"LINE_CAP",()=>a),e(t.exports,"curves",()=>o);var i,s,n=((i=n||{}).MITER="miter",i.BEVEL="bevel",i.ROUND="round",i),a=((s=a||{}).BUTT="butt",s.ROUND="round",s.SQUARE="square",s);let o={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount(e,t=20){if(!this.adaptive||!e||isNaN(e))return t;let r=Math.ceil(e/this.maxLength);return r<this.minSegments?r=this.minSegments:r>this.maxSegments&&(r=this.maxSegments),r}}}),a("7S8D8",function(t,r){e(t.exports,"BatchPart",()=>i);class i{constructor(){this.reset()}/**
   * Begin batch part.
   * @param style
   * @param startIndex
   * @param attribStart
   */begin(e,t,r){this.reset(),this.style=e,this.start=t,this.attribStart=r}/**
   * End batch part.
   * @param endIndex
   * @param endAttrib
   */end(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}}),a("iyqBz",function(t,r){e(t.exports,"BezierUtils",()=>s);var i=n("7ka6T");class s{/**
   * Calculate length of bezier curve.
   * Analytical solution is impossible, since it involves an integral that does not integrate in general.
   * Therefore numerical solution is used.
   * @private
   * @param fromX - Starting point x
   * @param fromY - Starting point y
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns - Length of bezier curve
   */static curveLength(e,t,r,i,s,n,a,o){let l=0,h=0,u=0,d=0,c=0,p=0,f=0,m=0,g=0,x=0,_=0,v=e,E=t;for(let T=1;T<=10;++T)d=(u=(h=T/10)*h)*h,m=(f=(p=(c=1-h)*c)*c)*e+3*p*h*r+3*c*u*s+d*a,g=f*t+3*p*h*i+3*c*u*n+d*o,x=v-m,_=E-g,v=m,E=g,l+=Math.sqrt(x*x+_*_);return l}/**
   * Calculate the points for a bezier curve and then draws it.
   *
   * Ignored from docs since it is not directly exposed.
   * @ignore
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @param points - Path array to push points into
   */static curveTo(e,t,r,n,a,o,l){let h=l[l.length-2],u=l[l.length-1];l.length-=2;let d=(0,i.curves)._segmentsCount(s.curveLength(h,u,e,t,r,n,a,o)),c=0,p=0,f=0,m=0,g=0;l.push(h,u);for(let i=1,s=0;i<=d;++i)f=(p=(c=1-(s=i/d))*c)*c,g=(m=s*s)*s,l.push(f*h+3*p*s*e+3*c*m*r+g*a,f*u+3*p*s*t+3*c*m*n+g*o)}}}),a("gzbCb",function(t,r){e(t.exports,"buildLine",()=>h),n("2AhlO");var i=n("iVQEG"),s=n("lkqjp"),a=n("7ka6T");function o(e,t,r,i,s,n,a,o){let l,h;a?(l=i,h=-r):(l=-i,h=r);let u=e-r*s+l,d=t-i*s+h,c=e+r*n+l,p=t+i*n+h;return o.push(u,d,c,p),2}function l(e,t,r,i,s,n,a,o){let l=r-e,h=i-t,u=Math.atan2(l,h),d=Math.atan2(s-e,n-t);o&&u<d?u+=2*Math.PI:!o&&u>d&&(d+=2*Math.PI);let c=u,p=d-u,f=Math.sqrt(l*l+h*h),m=(15*Math.abs(p)*Math.sqrt(f)/Math.PI>>0)+1,g=p/m;if(c+=g,o){a.push(e,t,r,i);for(let r=1,i=c;r<m;r++,i+=g)a.push(e,t,e+Math.sin(i)*f,t+Math.cos(i)*f);a.push(e,t,s,n)}else{a.push(r,i,e,t);for(let r=1,i=c;r<m;r++,i+=g)a.push(e+Math.sin(i)*f,t+Math.cos(i)*f,e,t);a.push(s,n,e,t)}return 2*m}function h(e,t){e.lineStyle.native?function(e,t){let r=0,i=e.shape,n=e.points||i.points,a=i.type!==s.SHAPES.POLY||i.closeStroke;if(0===n.length)return;let o=t.points,l=t.indices,h=n.length/2,u=o.length/2,d=u;for(o.push(n[0],n[1]),r=1;r<h;r++)o.push(n[2*r],n[2*r+1]),l.push(d,d+1),d++;a&&l.push(d,u)}(e,t):function(e,t){let r=e.shape,n=e.points||r.points.slice(),h=t.closePointEps;if(0===n.length)return;let u=e.lineStyle,d=new i.Point(n[0],n[1]),c=new i.Point(n[n.length-2],n[n.length-1]),p=r.type!==s.SHAPES.POLY||r.closeStroke,f=Math.abs(d.x-c.x)<h&&Math.abs(d.y-c.y)<h;if(p){n=n.slice(),f&&(n.pop(),n.pop(),c.set(n[n.length-2],n[n.length-1]));let e=(d.x+c.x)*.5,t=(c.y+d.y)*.5;n.unshift(e,t),n.push(e,t)}let m=t.points,g=n.length/2,x=n.length,_=m.length/2,v=u.width/2,E=v*v,T=u.miterLimit*u.miterLimit,y=n[0],A=n[1],b=n[2],S=n[3],R=0,w=0,M=-(A-S),P=y-b,I=0,C=0,D=Math.sqrt(M*M+P*P);M/=D,P/=D,M*=v,P*=v;let O=u.alignment,B=(1-O)*2,F=2*O;p||(u.cap===a.LINE_CAP.ROUND?x+=l(y-M*(B-F)*.5,A-P*(B-F)*.5,y-M*B,A-P*B,y+M*F,A+P*F,m,!0)+2:u.cap===a.LINE_CAP.SQUARE&&(x+=o(y,A,M,P,B,F,!0,m))),m.push(y-M*B,A-P*B,y+M*F,A+P*F);for(let e=1;e<g-1;++e){y=n[(e-1)*2],A=n[(e-1)*2+1],b=n[2*e],S=n[2*e+1],R=n[(e+1)*2],w=n[(e+1)*2+1],D=Math.sqrt((M=-(A-S))*M+(P=y-b)*P),M/=D,P/=D,M*=v,P*=v,D=Math.sqrt((I=-(S-w))*I+(C=b-R)*C),I/=D,C/=D,I*=v,C*=v;let t=b-y,r=A-S,i=b-R,s=w-S,o=t*i+r*s,h=r*i-s*t,d=h<0;if(Math.abs(h)<.001*Math.abs(o)){m.push(b-M*B,S-P*B,b+M*F,S+P*F),o>=0&&(u.join===a.LINE_JOIN.ROUND?x+=l(b,S,b-M*B,S-P*B,b-I*B,S-C*B,m,!1)+4:x+=2,m.push(b-I*F,S-C*F,b+I*B,S+C*B));continue}let c=(-M+y)*(-P+S)-(-M+b)*(-P+A),p=(-I+R)*(-C+S)-(-I+b)*(-C+w),f=(t*p-i*c)/h,g=(s*c-r*p)/h,_=(f-b)*(f-b)+(g-S)*(g-S),O=b+(f-b)*B,L=S+(g-S)*B,N=b-(f-b)*F,k=S-(g-S)*F,U=Math.min(t*t+r*r,i*i+s*s),G=d?B:F,H=U+G*G*E,X=_<=H,Y=u.join;if(Y===a.LINE_JOIN.MITER&&_/E>T&&(Y=a.LINE_JOIN.BEVEL),X)switch(Y){case a.LINE_JOIN.MITER:m.push(O,L,N,k);break;case a.LINE_JOIN.BEVEL:d?m.push(O,L,b+M*F,S+P*F,O,L,b+I*F,S+C*F):m.push(b-M*B,S-P*B,N,k,b-I*B,S-C*B,N,k),x+=2;break;case a.LINE_JOIN.ROUND:d?(m.push(O,L,b+M*F,S+P*F),x+=l(b,S,b+M*F,S+P*F,b+I*F,S+C*F,m,!0)+4,m.push(O,L,b+I*F,S+C*F)):(m.push(b-M*B,S-P*B,N,k),x+=l(b,S,b-M*B,S-P*B,b-I*B,S-C*B,m,!1)+4,m.push(b-I*B,S-C*B,N,k))}else{switch(m.push(b-M*B,S-P*B,b+M*F,S+P*F),Y){case a.LINE_JOIN.MITER:d?m.push(N,k,N,k):m.push(O,L,O,L),x+=2;break;case a.LINE_JOIN.ROUND:d?x+=l(b,S,b+M*F,S+P*F,b+I*F,S+C*F,m,!0)+2:x+=l(b,S,b-M*B,S-P*B,b-I*B,S-C*B,m,!1)+2}m.push(b-I*B,S-C*B,b+I*F,S+C*F),x+=2}}y=n[(g-2)*2],A=n[(g-2)*2+1],b=n[(g-1)*2],D=Math.sqrt((M=-(A-(S=n[(g-1)*2+1])))*M+(P=y-b)*P),M/=D,P/=D,M*=v,P*=v,m.push(b-M*B,S-P*B,b+M*F,S+P*F),p||(u.cap===a.LINE_CAP.ROUND?x+=l(b-M*(B-F)*.5,S-P*(B-F)*.5,b-M*B,S-P*B,b+M*F,S+P*F,m,!1)+2:u.cap===a.LINE_CAP.SQUARE&&(x+=o(b,S,M,P,B,F,!1,m)));let L=t.indices,N=a.curves.epsilon*a.curves.epsilon;for(let e=_;e<x+_-2;++e)y=m[2*e],A=m[2*e+1],b=m[(e+1)*2],S=m[(e+1)*2+1],R=m[(e+2)*2],Math.abs(y*(S-(w=m[(e+2)*2+1]))+b*(w-A)+R*(A-S))<N||L.push(e,e+1,e+2)}(e,t)}}),a("gGsGx",function(t,r){e(t.exports,"QuadraticUtils",()=>s);var i=n("7ka6T");class s{/**
   * Calculate length of quadratic curve
   * @see {@link http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/}
   * for the detailed explanation of math behind this.
   * @private
   * @param fromX - x-coordinate of curve start point
   * @param fromY - y-coordinate of curve start point
   * @param cpX - x-coordinate of curve control point
   * @param cpY - y-coordinate of curve control point
   * @param toX - x-coordinate of curve end point
   * @param toY - y-coordinate of curve end point
   * @returns - Length of quadratic curve
   */static curveLength(e,t,r,i,s,n){let a=e-2*r+s,o=t-2*i+n,l=2*r-2*e,h=2*i-2*t,u=4*(a*a+o*o),d=4*(a*l+o*h),c=l*l+h*h,p=2*Math.sqrt(u+d+c),f=Math.sqrt(u),m=2*u*f,g=2*Math.sqrt(c),x=d/f;return(m*p+f*d*(p-g)+(4*c*u-d*d)*Math.log((2*f+x+p)/(x+g)))/(4*m)}/**
   * Calculate the points for a quadratic bezier curve and then draws it.
   * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
   * @private
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @param points - Points to add segments to.
   */static curveTo(e,t,r,n,a){let o=a[a.length-2],l=a[a.length-1],h=(0,i.curves)._segmentsCount(s.curveLength(o,l,e,t,r,n)),u=0,d=0;for(let i=1;i<=h;++i){let s=i/h;u=o+(e-o)*s,d=l+(t-l)*s,a.push(u+(e+(r-e)*s-u)*s,d+(t+(n-t)*s-d)*s)}}}}),a("7qA1V",function(t,r){e(t.exports,"Graphics",()=>M),n("2AhlO");var i=n("glF38"),s=n("5xg5I"),a=n("jetUE"),o=n("7eheB"),l=n("707aK"),h=n("lkqjp"),u=n("6OnST"),d=n("4lIrM"),c=n("kKCy0"),p=n("96DUo"),f=n("fhlwZ"),m=n("ltmWw"),g=n("4Tbkk"),x=n("iVQEG");n("dyEru");var _=n("7uhWd"),v=n("7ka6T"),E=n("gSxhD"),T=n("2ObMu"),y=n("camHf");n("1psVH");var A=n("gGsGx"),b=n("iyqBz"),S=n("1HSH1");let R={},w=class e extends _.Container{/**
   * @param geometry - Geometry to use, if omitted will create a new GraphicsGeometry instance.
   */constructor(e=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new T.FillStyle,this._lineStyle=new y.LineStyle,this._matrix=null,this._holeMode=!1,this.state=(0,i.State).for2d(),this._geometry=e||new E.GraphicsGeometry,this._geometry.refCount++,this._transformID=-1,this._tintColor=new s.Color(16777215),this.blendMode=a.BLEND_MODES.NORMAL}/**
   * Includes vertex positions, face indices, normals, colors, UVs, and
   * custom attributes within buffers, reducing the cost of passing all
   * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
   * @readonly
   */get geometry(){return this._geometry}/**
   * Creates a new Graphics object with the same values as this one.
   * Note that only the geometry of the object is cloned, not its transform (position,scale,etc)
   * @returns - A clone of the graphics object
   */clone(){return this.finishPoly(),new e(this._geometry)}/**
   * The blend mode to be applied to the graphic shape. Apply a value of
   * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
   * primitive in the GraphicsGeometry list is rendered sequentially, modes
   * such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
   * be applied per-primitive.
   * @default PIXI.BLEND_MODES.NORMAL
   */set blendMode(e){this.state.blendMode=e}get blendMode(){return this.state.blendMode}/**
   * The tint applied to each graphic shape. This is a hex value. A value of
   * 0xFFFFFF will remove any tint effect.
   * @default 0xFFFFFF
   */get tint(){return this._tintColor.value}set tint(e){this._tintColor.setValue(e)}/**
   * The current fill style.
   * @readonly
   */get fill(){return this._fillStyle}/**
   * The current line style.
   * @readonly
   */get line(){return this._lineStyle}lineStyle(e=null,t=0,r,i=.5,s=!1){return"number"==typeof e&&(e={width:e,color:t,alpha:r,alignment:i,native:s}),this.lineTextureStyle(e)}/**
   * Like line style but support texture for line fill.
   * @param [options] - Collection of options for setting line style.
   * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
   * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
   * @param {PIXI.ColorSource} [options.color=0x0] - color of the line to draw, will update the objects stored style.
   *  Default 0xFFFFFF if texture present.
   * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
   * @param {PIXI.Matrix} [options.matrix=null] - Texture matrix to transform texture
   * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outer).
   *        WebGL only.
   * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.LINE_CAP}[options.cap=PIXI.LINE_CAP.BUTT] - line cap style
   * @param {PIXI.LINE_JOIN}[options.join=PIXI.LINE_JOIN.MITER] - line join style
   * @param {number}[options.miterLimit=10] - miter limit ratio
   * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
   */lineTextureStyle(e){let t={width:0,texture:o.Texture.WHITE,color:e?.texture?16777215:0,matrix:null,alignment:.5,native:!1,cap:v.LINE_CAP.BUTT,join:v.LINE_JOIN.MITER,miterLimit:10};e=Object.assign(t,e),this.normalizeColor(e),this.currentPath&&this.startPoly();let r=e.width>0&&e.alpha>0;return r?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._lineStyle,{visible:r},e)):this._lineStyle.reset(),this}/**
   * Start a polygon object internally.
   * @protected
   */startPoly(){if(this.currentPath){let e=this.currentPath.points,t=this.currentPath.points.length;t>2&&(this.drawShape(this.currentPath),this.currentPath=new l.Polygon,this.currentPath.closeStroke=!1,this.currentPath.points.push(e[t-2],e[t-1]))}else this.currentPath=new l.Polygon,this.currentPath.closeStroke=!1}/**
   * Finish the polygon object.
   * @protected
   */finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}/**
   * Moves the current drawing position to x, y.
   * @param x - the X coordinate to move to
   * @param y - the Y coordinate to move to
   * @returns - This Graphics object. Good for chaining method calls
   */moveTo(e,t){return this.startPoly(),this.currentPath.points[0]=e,this.currentPath.points[1]=t,this}/**
   * Draws a line using the current line style from the current drawing position to (x, y);
   * The current drawing position is then set to (x, y).
   * @param x - the X coordinate to draw to
   * @param y - the Y coordinate to draw to
   * @returns - This Graphics object. Good for chaining method calls
   */lineTo(e,t){this.currentPath||this.moveTo(0,0);let r=this.currentPath.points,i=r[r.length-2],s=r[r.length-1];return(i!==e||s!==t)&&r.push(e,t),this}/**
   * Initialize the curve
   * @param x
   * @param y
   */_initCurve(e=0,t=0){this.currentPath?0===this.currentPath.points.length&&(this.currentPath.points=[e,t]):this.moveTo(e,t)}/**
   * Calculate the points for a quadratic bezier curve and then draws it.
   * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns - This Graphics object. Good for chaining method calls
   */quadraticCurveTo(e,t,r,i){this._initCurve();let s=this.currentPath.points;return 0===s.length&&this.moveTo(0,0),(0,A.QuadraticUtils).curveTo(e,t,r,i,s),this}/**
   * Calculate the points for a bezier curve and then draws it.
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns This Graphics object. Good for chaining method calls
   */bezierCurveTo(e,t,r,i,s,n){return this._initCurve(),(0,b.BezierUtils).curveTo(e,t,r,i,s,n,this.currentPath.points),this}/**
   * The `arcTo` method creates an arc/curve between two tangents on the canvas.
   * The first tangent is from the start point to the first control point,
   * and the second tangent is from the first control point to the second control point.
   * Note that the second control point is not necessarily the end point of the arc.
   *
   * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
   * @param x1 - The x-coordinate of the first control point of the arc
   * @param y1 - The y-coordinate of the first control point of the arc
   * @param x2 - The x-coordinate of the second control point of the arc
   * @param y2 - The y-coordinate of the second control point of the arc
   * @param radius - The radius of the arc
   * @returns - This Graphics object. Good for chaining method calls
   */arcTo(e,t,r,i,s){this._initCurve(e,t);let n=this.currentPath.points,a=(0,S.ArcUtils).curveTo(e,t,r,i,s,n);if(a){let{cx:e,cy:t,radius:r,startAngle:i,endAngle:s,anticlockwise:n}=a;this.arc(e,t,r,i,s,n)}return this}/**
   * The arc method creates an arc/curve (used to create circles, or parts of circles).
   * @param cx - The x-coordinate of the center of the circle
   * @param cy - The y-coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
   *  of the arc's circle)
   * @param endAngle - The ending angle, in radians
   * @param anticlockwise - Specifies whether the drawing should be
   *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
   *  indicates counter-clockwise.
   * @returns - This Graphics object. Good for chaining method calls
   */arc(e,t,r,i,s,n=!1){if(i===s||(!n&&s<=i?s+=h.PI_2:n&&i<=s&&(i+=h.PI_2),s-i==0))return this;let a=e+Math.cos(i)*r,o=t+Math.sin(i)*r,l=this._geometry.closePointEps,u=this.currentPath?this.currentPath.points:null;if(u){let e=Math.abs(u[u.length-2]-a),t=Math.abs(u[u.length-1]-o);e<l&&t<l||u.push(a,o)}else this.moveTo(a,o),u=this.currentPath.points;return(0,S.ArcUtils).arc(a,o,e,t,r,i,s,n,u),this}/**
   * Specifies a simple one-color fill that subsequent calls to other Graphics methods
   * (such as lineTo() or drawCircle()) use when drawing.
   * @param {PIXI.ColorSource} color - the color of the fill
   * @param alpha - the alpha of the fill, will override the color's alpha
   * @returns - This Graphics object. Suitable for chaining method calls
   */beginFill(e=0,t){return this.beginTextureFill({texture:o.Texture.WHITE,color:e,alpha:t})}/**
   * Normalize the color input from options for line style or fill
   * @param {PIXI.IFillStyleOptions} options - Fill style object.
   */normalizeColor(e){let t=(0,s.Color).shared.setValue(e.color??0);e.color=t.toNumber(),e.alpha??(e.alpha=t.alpha)}/**
   * Begin the texture fill.
   * Note: The wrap mode of the texture is forced to REPEAT on render.
   * @param options - Fill style object.
   * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
   * @param {PIXI.ColorSource} [options.color=0xffffff] - Background to fill behind texture
   * @param {number} [options.alpha] - Alpha of fill, overrides the color's alpha
   * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
   * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
   */beginTextureFill(e){let t={texture:o.Texture.WHITE,color:16777215,matrix:null};e=Object.assign(t,e),this.normalizeColor(e),this.currentPath&&this.startPoly();let r=e.alpha>0;return r?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._fillStyle,{visible:r},e)):this._fillStyle.reset(),this}/**
   * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
   * @returns - This Graphics object. Good for chaining method calls
   */endFill(){return this.finishPoly(),this._fillStyle.reset(),this}/**
   * Draws a rectangle shape.
   * @param x - The X coord of the top-left of the rectangle
   * @param y - The Y coord of the top-left of the rectangle
   * @param width - The width of the rectangle
   * @param height - The height of the rectangle
   * @returns - This Graphics object. Good for chaining method calls
   */drawRect(e,t,r,i){return this.drawShape(new u.Rectangle(e,t,r,i))}/**
   * Draw a rectangle shape with rounded/beveled corners.
   * @param x - The X coord of the top-left of the rectangle
   * @param y - The Y coord of the top-left of the rectangle
   * @param width - The width of the rectangle
   * @param height - The height of the rectangle
   * @param radius - Radius of the rectangle corners
   * @returns - This Graphics object. Good for chaining method calls
   */drawRoundedRect(e,t,r,i,s){return this.drawShape(new d.RoundedRectangle(e,t,r,i,s))}/**
   * Draws a circle.
   * @param x - The X coordinate of the center of the circle
   * @param y - The Y coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @returns - This Graphics object. Good for chaining method calls
   */drawCircle(e,t,r){return this.drawShape(new c.Circle(e,t,r))}/**
   * Draws an ellipse.
   * @param x - The X coordinate of the center of the ellipse
   * @param y - The Y coordinate of the center of the ellipse
   * @param width - The half width of the ellipse
   * @param height - The half height of the ellipse
   * @returns - This Graphics object. Good for chaining method calls
   */drawEllipse(e,t,r,i){return this.drawShape(new p.Ellipse(e,t,r,i))}/**
   * Draws a polygon using the given path.
   * @param {number[]|PIXI.IPointData[]|PIXI.Polygon} path - The path data used to construct the polygon.
   * @returns - This Graphics object. Good for chaining method calls
   */drawPolygon(...e){let t,r=!0,i=e[0];i.points?(r=i.closeStroke,t=i.points):t=Array.isArray(e[0])?e[0]:e;let s=new l.Polygon(t);return s.closeStroke=r,this.drawShape(s),this}/**
   * Draw any shape.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
   * @returns - This Graphics object. Good for chaining method calls
   */drawShape(e){return this._holeMode?this._geometry.drawHole(e,this._matrix):this._geometry.drawShape(e,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}/**
   * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
   * @returns - This Graphics object. Good for chaining method calls
   */clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}/**
   * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
   * masked with gl.scissor.
   * @returns - True if only 1 rect.
   */isFastRect(){let e=this._geometry.graphicsData;return 1===e.length&&e[0].shape.type===h.SHAPES.RECT&&!e[0].matrix&&!e[0].holes.length&&!(e[0].lineStyle.visible&&e[0].lineStyle.width)}/**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */_render(e){this.finishPoly();let t=this._geometry;t.updateBatches(),t.batchable?(this.batchDirty!==t.batchDirty&&this._populateBatches(),this._renderBatched(e)):(e.batch.flush(),this._renderDirect(e))}/** Populating batches for rendering. */_populateBatches(){let e=this._geometry,t=this.blendMode,r=e.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=e.batchDirty,this.batches.length=r,this.vertexData=new Float32Array(e.points);for(let i=0;i<r;i++){let r=e.batches[i],n=r.style.color,a=new Float32Array(this.vertexData.buffer,8*r.attribStart,2*r.attribSize),o=new Float32Array(e.uvsFloat32.buffer,8*r.attribStart,2*r.attribSize),l=new Uint16Array(e.indicesUint16.buffer,2*r.start,r.size),h={vertexData:a,blendMode:t,indices:l,uvs:o,_batchRGB:(0,s.Color).shared.setValue(n).toRgbArray(),_tintRGB:n,_texture:r.style.texture,alpha:r.style.alpha,worldAlpha:1};this.batches[i]=h}}/**
   * Renders the batches using the BathedRenderer plugin
   * @param renderer - The renderer
   */_renderBatched(e){if(this.batches.length){e.batch.setObjectRenderer(e.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let t=0,r=this.batches.length;t<r;t++){let r=this.batches[t];r.worldAlpha=this.worldAlpha*r.alpha,e.plugins[this.pluginName].render(r)}}}/**
   * Renders the graphics direct
   * @param renderer - The renderer
   */_renderDirect(e){let t=this._resolveDirectShader(e),r=this._geometry,i=this.worldAlpha,n=t.uniforms,a=r.drawCalls;n.translationMatrix=this.transform.worldTransform,(0,s.Color).shared.setValue(this._tintColor).premultiply(i).toArray(n.tint),e.shader.bind(t),e.geometry.bind(r,t),e.state.set(this.state);for(let t=0,i=a.length;t<i;t++)this._renderDrawCallDirect(e,r.drawCalls[t])}/**
   * Renders specific DrawCall
   * @param renderer
   * @param drawCall
   */_renderDrawCallDirect(e,t){let{texArray:r,type:i,size:s,start:n}=t,a=r.count;for(let t=0;t<a;t++)e.texture.bind(r.elements[t],t);e.geometry.draw(i,s,n)}/**
   * Resolves shader for direct rendering
   * @param renderer - The renderer
   */_resolveDirectShader(e){let t=this.shader,r=this.pluginName;if(!t){if(!R[r]){let{maxTextures:t}=e.plugins[r],i=new Int32Array(t);for(let e=0;e<t;e++)i[e]=e;let s={tint:new Float32Array([1,1,1,1]),translationMatrix:new f.Matrix,default:(0,m.UniformGroup).from({uSamplers:i},!0)},n=e.plugins[r]._shader.program;R[r]=new g.Shader(n,s)}t=R[r]}return t}/**
   * Retrieves the bounds of the graphic shape as a rectangle object.
   * @see PIXI.GraphicsGeometry#bounds
   */_calculateBounds(){this.finishPoly();let e=this._geometry;if(!e.graphicsData.length)return;let{minX:t,minY:r,maxX:i,maxY:s}=e.bounds;this._bounds.addFrame(this.transform,t,r,i,s)}/**
   * Tests if a point is inside this graphics object
   * @param point - the point to test
   * @returns - the result of the test
   */containsPoint(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)}/** Recalculate the tint by applying tint to batches using Graphics tint. */calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this._tintColor.toNumber();for(let e=0;e<this.batches.length;e++){let t=this.batches[e];t._tintRGB=(0,s.Color).shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber()}}}/** If there's a transform update or a change to the shape of the geometry, recalculate the vertices. */calculateVertices(){let e=this.transform._worldID;if(this._transformID===e)return;this._transformID=e;let t=this.transform.worldTransform,r=t.a,i=t.b,s=t.c,n=t.d,a=t.tx,o=t.ty,l=this._geometry.points,h=this.vertexData,u=0;for(let e=0;e<l.length;e+=2){let t=l[e],d=l[e+1];h[u++]=r*t+s*d+a,h[u++]=n*d+i*t+o}}/**
   * Closes the current path.
   * @returns - Returns itself.
   */closePath(){let e=this.currentPath;return e&&(e.closeStroke=!0,this.finishPoly()),this}/**
   * Apply a matrix to the positional data.
   * @param matrix - Matrix to use for transform current shape.
   * @returns - Returns itself.
   */setMatrix(e){return this._matrix=e,this}/**
   * Begin adding holes to the last draw shape
   * IMPORTANT: holes must be fully inside a shape to work
   * Also weirdness ensues if holes overlap!
   * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
   * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
   * @returns - Returns itself.
   */beginHole(){return this.finishPoly(),this._holeMode=!0,this}/**
   * End adding holes to the last draw shape.
   * @returns - Returns itself.
   */endHole(){return this.finishPoly(),this._holeMode=!1,this}/**
   * Destroys the Graphics object.
   * @param options - Options parameter. A boolean will act as if all
   *  options have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have
   *  their destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */destroy(e){this._geometry.refCount--,0===this._geometry.refCount&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(e)}};w.curves=v.curves,/**
* Temporary point to use for containsPoint.
* @private
*/w._TEMP_POINT=new x.Point;let M=w}),a("gSxhD",function(t,r){e(t.exports,"GraphicsGeometry",()=>v),n("2AhlO");var i=n("iVQEG"),s=n("jetUE"),a=n("2Am4Q"),o=n("fTFNy"),l=n("g6z8m"),h=n("5xg5I"),u=n("i9Brf");n("dyEru");var d=n("4z4u1"),c=n("4mr3U"),p=n("1psVH"),f=n("7S8D8"),m=n("iXmAX"),g=n("gzbCb");let x=new i.Point,_=class e extends u.BatchGeometry{// eslint-disable-next-line @typescript-eslint/no-useless-constructor
constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new d.Bounds,this.boundsDirty=-1}/**
   * Get the current bounds of the graphic geometry.
   *
   * Since 6.5.0, bounds of the graphics geometry are calculated based on the vertices of generated geometry.
   * Since shapes or strokes with full transparency (`alpha: 0`) will not generate geometry, they are not considered
   * when calculating bounds for the graphics geometry. See PR [#8343]{@link https://github.com/pixijs/pixijs/pull/8343}
   * and issue [#8623]{@link https://github.com/pixijs/pixijs/pull/8623}.
   * @readonly
   */get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}/** Call if you changed graphicsData manually. Empties all batch buffers. */invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),(0,p.DRAW_CALL_POOL).push(this.drawCalls[e]);this.drawCalls.length=0;for(let e=0;e<this.batches.length;e++){let t=this.batches[e];t.reset(),(0,p.BATCH_POOL).push(t)}this.batches.length=0}/**
   * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
   * @returns - This GraphicsGeometry object. Good for chaining method calls
   */clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}/**
   * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param fillStyle - Defines style of the fill.
   * @param lineStyle - Defines style of the lines.
   * @param matrix - Transform applied to the points of the shape.
   * @returns - Returns geometry for chaining.
   */drawShape(e,t=null,r=null,i=null){let s=new c.GraphicsData(e,t,r,i);return this.graphicsData.push(s),this.dirty++,this}/**
   * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param matrix - Transform applied to the points of the shape.
   * @returns - Returns geometry for chaining.
   */drawHole(e,t=null){if(!this.graphicsData.length)return null;let r=new c.GraphicsData(e,null,null,t),i=this.graphicsData[this.graphicsData.length-1];return r.lineStyle=i.lineStyle,i.holes.push(r),this.dirty++,this}/** Destroys the GraphicsGeometry object. */destroy(){super.destroy();for(let e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}/**
   * Check to see if a point is contained within this geometry.
   * @param point - Point to check if it's contained.
   * @returns {boolean} `true` if the point is contained within geometry.
   */containsPoint(e){let t=this.graphicsData;for(let r=0;r<t.length;++r){let i=t[r];if(i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(e,x):x.copyFrom(e),i.shape.contains(x.x,x.y))){let e=!1;if(i.holes){for(let t=0;t<i.holes.length;t++)if(i.holes[t].shape.contains(x.x,x.y)){e=!0;break}}if(!e)return!0}}return!1}/**
   * Generates intermediate batch data. Either gets converted to drawCalls
   * or used to convert to batch objects directly by the Graphics object.
   */updateBatches(){if(!this.graphicsData.length){this.batchable=!0;return}if(!this.validateBatching())return;this.cacheDirty=this.dirty;let e=this.uvs,t=this.graphicsData,r=null,i=null;this.batches.length>0&&(i=(r=this.batches[this.batches.length-1]).style);for(let n=this.shapeIndex;n<t.length;n++){this.shapeIndex++;let a=t[n],o=a.fillStyle,l=a.lineStyle;(0,p.FILL_COMMANDS)[a.type].build(a),a.matrix&&this.transformPoints(a.points,a.matrix),(o.visible||l.visible)&&this.processHoles(a.holes);for(let t=0;t<2;t++){let n=0===t?o:l;if(!n.visible)continue;let h=n.texture.baseTexture,u=this.indices.length,d=this.points.length/2;h.wrapMode=s.WRAP_MODES.REPEAT,0===t?this.processFill(a):this.processLine(a);let c=this.points.length/2-d;0!==c&&(r&&!this._compareStyles(i,n)&&(r.end(u,d),r=null),r||((r=(0,p.BATCH_POOL).pop()||new f.BatchPart).begin(n,u,d),this.batches.push(r),i=n),this.addUvs(this.points,e,n.texture,d,c,n.matrix))}}let n=this.indices.length,a=this.points.length/2;if(r&&r.end(n,a),0===this.batches.length){this.batchable=!0;return}let o=a>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&o===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=o?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}/**
   * Affinity check
   * @param styleA
   * @param styleB
   */_compareStyles(e,t){return!(!e||!t||e.texture.baseTexture!==t.texture.baseTexture||e.color+e.alpha!==t.color+t.alpha||!!e.native!=!!t.native)}/** Test geometry for batching process. */validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let e=0,t=this.graphicsData.length;e<t;e++){let t=this.graphicsData[e],r=t.fillStyle,i=t.lineStyle;if(r&&!r.texture.baseTexture.valid||i&&!i.texture.baseTexture.valid)return!1}return!0}/** Offset the indices so that it works with the batcher. */packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);let e=this.batches;for(let t=0,r=e.length;t<r;t++){let r=e[t];for(let e=0;e<r.size;e++){let t=r.start+e;this.indicesUint16[t]=this.indicesUint16[t]-r.attribStart}}}/**
   * Checks to see if this graphics geometry can be batched.
   * Currently it needs to be small enough and not contain any native lines.
   */isBatchable(){if(this.points.length>131070)return!1;let t=this.batches;for(let e=0;e<t.length;e++)if(t[e].style.native)return!1;return this.points.length<2*e.BATCHABLE_SIZE}/** Converts intermediate batches data to drawCalls. */buildDrawCalls(){let e=++a.BaseTexture._globalBatch;for(let e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),(0,p.DRAW_CALL_POOL).push(this.drawCalls[e]);this.drawCalls.length=0;let t=this.colors,r=this.textureIds,i=(0,p.DRAW_CALL_POOL).pop();i||((i=new o.BatchDrawCall).texArray=new l.BatchTextureArray),i.texArray.count=0,i.start=0,i.size=0,i.type=s.DRAW_MODES.TRIANGLES;let n=0,h=null,u=0,d=!1,c=s.DRAW_MODES.TRIANGLES,f=0;this.drawCalls.push(i);for(let a=0;a<this.batches.length;a++){let m=this.batches[a],g=m.style,x=g.texture.baseTexture;!!g.native!==d&&(c=(d=!!g.native)?s.DRAW_MODES.LINES:s.DRAW_MODES.TRIANGLES,h=null,n=8,e++),h!==x&&(h=x,x._batchEnabled!==e&&(8===n&&(e++,n=0,i.size>0&&((i=(0,p.DRAW_CALL_POOL).pop())||((i=new o.BatchDrawCall).texArray=new l.BatchTextureArray),this.drawCalls.push(i)),i.start=f,i.size=0,i.texArray.count=0,i.type=c),x.touched=1,x._batchEnabled=e,x._batchLocation=n,x.wrapMode=s.WRAP_MODES.REPEAT,i.texArray.elements[i.texArray.count++]=x,n++)),i.size+=m.size,f+=m.size,u=x._batchLocation,this.addColors(t,g.color,g.alpha,m.attribSize,m.attribStart),this.addTextureIds(r,u,m.attribSize,m.attribStart)}a.BaseTexture._globalBatch=e,this.packAttributes()}/** Packs attributes to single buffer. */packAttributes(){let e=this.points,t=this.uvs,r=this.colors,i=this.textureIds,s=new ArrayBuffer(12*e.length),n=new Float32Array(s),a=new Uint32Array(s),o=0;for(let s=0;s<e.length/2;s++)n[o++]=e[2*s],n[o++]=e[2*s+1],n[o++]=t[2*s],n[o++]=t[2*s+1],a[o++]=r[s],n[o++]=i[s];this._buffer.update(s),this._indexBuffer.update(this.indicesUint16)}/**
   * Process fill part of Graphics.
   * @param data
   */processFill(e){e.holes.length?(0,m.buildPoly).triangulate(e,this):(0,p.FILL_COMMANDS)[e.type].triangulate(e,this)}/**
   * Process line part of Graphics.
   * @param data
   */processLine(e){(0,g.buildLine)(e,this);for(let t=0;t<e.holes.length;t++)(0,g.buildLine)(e.holes[t],this)}/**
   * Process the holes data.
   * @param holes
   */processHoles(e){for(let t=0;t<e.length;t++){let r=e[t];(0,p.FILL_COMMANDS)[r.type].build(r),r.matrix&&this.transformPoints(r.points,r.matrix)}}/** Update the local bounds of the object. Expensive to use performance-wise. */calculateBounds(){let e=this._bounds;e.clear(),e.addVertexData(this.points,0,this.points.length),e.pad(this.boundsPadding,this.boundsPadding)}/**
   * Transform points using matrix.
   * @param points - Points to transform
   * @param matrix - Transform matrix
   */transformPoints(e,t){for(let r=0;r<e.length/2;r++){let i=e[2*r],s=e[2*r+1];e[2*r]=t.a*i+t.c*s+t.tx,e[2*r+1]=t.b*i+t.d*s+t.ty}}/**
   * Add colors.
   * @param colors - List of colors to add to
   * @param color - Color to add
   * @param alpha - Alpha to use
   * @param size - Number of colors to add
   * @param offset
   */addColors(e,t,r,i,s=0){let n=(0,h.Color).shared.setValue(t).toLittleEndianNumber(),a=(0,h.Color).shared.setValue(n).toPremultiplied(r);e.length=Math.max(e.length,s+i);for(let t=0;t<i;t++)e[s+t]=a}/**
   * Add texture id that the shader/fragment wants to use.
   * @param textureIds
   * @param id
   * @param size
   * @param offset
   */addTextureIds(e,t,r,i=0){e.length=Math.max(e.length,i+r);for(let s=0;s<r;s++)e[i+s]=t}/**
   * Generates the UVs for a shape.
   * @param verts - Vertices
   * @param uvs - UVs
   * @param texture - Reference to Texture
   * @param start - Index buffer start index.
   * @param size - The size/length for index buffer.
   * @param matrix - Optional transform for all points.
   */addUvs(e,t,r,i,s,n=null){let a=0,o=t.length,l=r.frame;for(;a<s;){let r=e[(i+a)*2],s=e[(i+a)*2+1];if(n){let e=n.a*r+n.c*s+n.tx;s=n.b*r+n.d*s+n.ty,r=e}a++,t.push(r/l.width,s/l.height)}let h=r.baseTexture;(l.width<h.width||l.height<h.height)&&this.adjustUvs(t,r,o,s)}/**
   * Modify uvs array according to position of texture region
   * Does not work with rotated or trimmed textures
   * @param uvs - array
   * @param texture - region
   * @param start - starting index for uvs
   * @param size - how many points to adjust
   */adjustUvs(e,t,r,i){let s=t.baseTexture,n=r+2*i,a=t.frame,o=a.width/s.width,l=a.height/s.height,h=a.x/a.width,u=a.y/a.height,d=Math.floor(e[r]+1e-6),c=Math.floor(e[r+1]+1e-6);for(let t=r+2;t<n;t+=2)d=Math.min(d,Math.floor(e[t]+1e-6)),c=Math.min(c,Math.floor(e[t+1]+1e-6));h-=d,u-=c;for(let t=r;t<n;t+=2)e[t]=(e[t]+h)*o,e[t+1]=(e[t+1]+u)*l}};_.BATCHABLE_SIZE=100;let v=_}),a("4mr3U",function(t,r){e(t.exports,"GraphicsData",()=>i);class i{/**
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param fillStyle - the width of the line to draw
   * @param lineStyle - the color of the line to draw
   * @param matrix - Transform matrix
   */constructor(e,t=null,r=null,i=null){this.points=[],this.holes=[],this.shape=e,this.lineStyle=r,this.fillStyle=t,this.matrix=i,this.type=e.type}/**
   * Creates a new GraphicsData object with the same values as this one.
   * @returns - Cloned GraphicsData object
   */clone(){return new i(this.shape,this.fillStyle,this.lineStyle,this.matrix)}/** Destroys the Graphics data. */destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}}),a("2ObMu",function(t,r){e(t.exports,"FillStyle",()=>s),n("2AhlO");var i=n("7eheB");class s{constructor(){this.color=16777215,this.alpha=1,this.texture=i.Texture.WHITE,this.matrix=null,this.visible=!1,this.reset()}/** Clones the object */clone(){let e=new s;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e}/** Reset */reset(){this.color=16777215,this.alpha=1,this.texture=i.Texture.WHITE,this.matrix=null,this.visible=!1}/** Destroy and don't use after this. */destroy(){this.texture=null,this.matrix=null}}}),a("camHf",function(t,r){e(t.exports,"LineStyle",()=>a);var i=n("7ka6T"),s=n("2ObMu");class a extends s.FillStyle{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=i.LINE_CAP.BUTT,this.join=i.LINE_JOIN.MITER,this.miterLimit=10}/** Clones the object. */clone(){let e=new a;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e.width=this.width,e.alignment=this.alignment,e.native=this.native,e.cap=this.cap,e.join=this.join,e.miterLimit=this.miterLimit,e}/** Reset the line style to default. */reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1,this.cap=i.LINE_CAP.BUTT,this.join=i.LINE_JOIN.MITER,this.miterLimit=10}}}),a("9w5R4",function(t,r){e(t.exports,"Mesh",()=>n("llDtr").Mesh),e(t.exports,"MeshGeometry",()=>n("5H8Cm").MeshGeometry),e(t.exports,"MeshMaterial",()=>n("2YBxg").MeshMaterial),n("llDtr"),n("6jB0s"),n("5H8Cm"),n("2YBxg")}),a("llDtr",function(t,r){e(t.exports,"Mesh",()=>f),n("2AhlO");var i=n("iVQEG"),s=n("707aK"),a=n("jetUE"),o=n("glF38"),l=n("8oqCw");n("dyEru");var h=n("7uhWd"),u=n("6jB0s");let d=new i.Point,c=new s.Polygon,p=class e extends h.Container{/**
   * @param geometry - The geometry the mesh will use.
   * @param {PIXI.MeshMaterial} shader - The shader the mesh will use.
   * @param state - The state that the WebGL context is required to be in to render the mesh
   *        if no state is provided, uses {@link PIXI.State.for2d} to create a 2D state for PixiJS.
   * @param drawMode - The drawMode, can be any of the {@link PIXI.DRAW_MODES} constants.
   */constructor(e,t,r,i=a.DRAW_MODES.TRIANGLES){super(),this.geometry=e,this.shader=t,this.state=r||(0,o.State).for2d(),this.drawMode=i,this.start=0,this.size=0,this.uvs=null,this.indices=null,this.vertexData=new Float32Array(1),this.vertexDirty=-1,this._transformID=-1,this._roundPixels=l.settings.ROUND_PIXELS,this.batchUvs=null}/**
   * Includes vertex positions, face indices, normals, colors, UVs, and
   * custom attributes within buffers, reducing the cost of passing all
   * this data to the GPU. Can be shared between multiple Mesh objects.
   */get geometry(){return this._geometry}set geometry(e){this._geometry!==e&&(this._geometry&&(this._geometry.refCount--,0===this._geometry.refCount&&this._geometry.dispose()),this._geometry=e,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)}/**
   * To change mesh uv's, change its uvBuffer data and increment its _updateID.
   * @readonly
   */get uvBuffer(){return this.geometry.buffers[1]}/**
   * To change mesh vertices, change its uvBuffer data and increment its _updateID.
   * Incrementing _updateID is optional because most of Mesh objects do it anyway.
   * @readonly
   */get verticesBuffer(){return this.geometry.buffers[0]}/** Alias for {@link PIXI.Mesh#shader}. */set material(e){this.shader=e}get material(){return this.shader}/**
   * The blend mode to be applied to the Mesh. Apply a value of
   * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
   * @default PIXI.BLEND_MODES.NORMAL;
   */set blendMode(e){this.state.blendMode=e}get blendMode(){return this.state.blendMode}/**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
   * @default false
   */set roundPixels(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e}get roundPixels(){return this._roundPixels}/**
   * The multiply tint applied to the Mesh. This is a hex value. A value of
   * `0xFFFFFF` will remove any tint effect.
   *
   * Null for non-MeshMaterial shaders
   * @default 0xFFFFFF
   */get tint(){return"tint"in this.shader?this.shader.tint:null}set tint(e){this.shader.tint=e}/**
   * The tint color as a RGB integer
   * @ignore
   */get tintValue(){return this.shader.tintValue}/** The texture that the Mesh uses. Null for non-MeshMaterial shaders */get texture(){return"texture"in this.shader?this.shader.texture:null}set texture(e){this.shader.texture=e}/**
   * Standard renderer draw.
   * @param renderer - Instance to renderer.
   */_render(t){let r=this.geometry.buffers[0].data;this.shader.batchable&&this.drawMode===a.DRAW_MODES.TRIANGLES&&r.length<2*e.BATCHABLE_SIZE?this._renderToBatch(t):this._renderDefault(t)}/**
   * Standard non-batching way of rendering.
   * @param renderer - Instance to renderer.
   */_renderDefault(e){let t=this.shader;t.alpha=this.worldAlpha,t.update&&t.update(),e.batch.flush(),t.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),e.shader.bind(t),e.state.set(this.state),e.geometry.bind(this.geometry,t),e.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)}/**
   * Rendering by using the Batch system.
   * @param renderer - Instance to renderer.
   */_renderToBatch(e){let t=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=t.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;let i=this.material.pluginName;e.batch.setObjectRenderer(e.plugins[i]),e.plugins[i].render(this)}/** Updates vertexData field based on transform and vertices. */calculateVertices(){let e=this.geometry.buffers[0],t=e.data,r=e._updateID;if(r===this.vertexDirty&&this._transformID===this.transform._worldID)return;this._transformID=this.transform._worldID,this.vertexData.length!==t.length&&(this.vertexData=new Float32Array(t.length));let i=this.transform.worldTransform,s=i.a,n=i.b,a=i.c,o=i.d,h=i.tx,u=i.ty,d=this.vertexData;for(let e=0;e<d.length/2;e++){let r=t[2*e],i=t[2*e+1];d[2*e]=s*r+a*i+h,d[2*e+1]=n*r+o*i+u}if(this._roundPixels){let e=l.settings.RESOLUTION;for(let t=0;t<d.length;++t)d[t]=Math.round(d[t]*e)/e}this.vertexDirty=r}/** Updates uv field based on from geometry uv's or batchUvs. */calculateUvs(){let e=this.geometry.buffers[1],t=this.shader;t.uvMatrix.isSimple?this.uvs=e.data:(this.batchUvs||(this.batchUvs=new u.MeshBatchUvs(e,t.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)}/**
   * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
   * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
   */_calculateBounds(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)}/**
   * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
   * @param point - The point to test.
   * @returns - The result of the test.
   */containsPoint(e){if(!this.getBounds().contains(e.x,e.y))return!1;this.worldTransform.applyInverse(e,d);let t=this.geometry.getBuffer("aVertexPosition").data,r=c.points,i=this.geometry.getIndex().data,s=i.length,n=4===this.drawMode?3:1;for(let e=0;e+2<s;e+=n){let s=2*i[e],n=2*i[e+1],a=2*i[e+2];if(r[0]=t[s],r[1]=t[s+1],r[2]=t[n],r[3]=t[n+1],r[4]=t[a],r[5]=t[a+1],c.contains(d.x,d.y))return!0}return!1}destroy(e){super.destroy(e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null}};p.BATCHABLE_SIZE=100;let f=p}),a("6jB0s",function(t,r){e(t.exports,"MeshBatchUvs",()=>i);class i{/**
   * @param uvBuffer - Buffer with normalized uv's
   * @param uvMatrix - Material UV matrix
   */constructor(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}/**
   * Updates
   * @param forceUpdate - force the update
   */update(e){if(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)return;this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;let t=this.uvBuffer.data;this.data&&this.data.length===t.length||(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}}}),a("5H8Cm",function(t,r){e(t.exports,"MeshGeometry",()=>o),n("2AhlO");var i=n("ckQUf"),s=n("jetUE"),a=n("82wLZ");class o extends a.Geometry{/**
   * @param {Float32Array|number[]} [vertices] - Positional data on geometry.
   * @param {Float32Array|number[]} [uvs] - Texture UVs.
   * @param {Uint16Array|number[]} [index] - IndexBuffer
   */constructor(e,t,r){super();let n=new i.Buffer(e),a=new i.Buffer(t,!0),o=new i.Buffer(r,!0,!0);this.addAttribute("aVertexPosition",n,2,!1,s.TYPES.FLOAT).addAttribute("aTextureCoord",a,2,!1,s.TYPES.FLOAT).addIndex(o),this._updateId=-1}/**
   * If the vertex position is updated.
   * @readonly
   * @private
   */get vertexDirtyId(){return this.buffers[0]._updateID}}}),a("2YBxg",function(t,r){e(t.exports,"MeshMaterial",()=>d),n("2AhlO");var i=n("fhlwZ"),s=n("e1ifo"),a=n("9VGTl"),o=n("5xg5I"),l=n("4Tbkk"),h=n("bxCxF"),u=n("e7YZB");class d extends l.Shader{/**
   * @param uSampler - Texture that material uses to render.
   * @param options - Additional options
   * @param {number} [options.alpha=1] - Default alpha.
   * @param {PIXI.ColorSource} [options.tint=0xFFFFFF] - Default tint.
   * @param {string} [options.pluginName='batch'] - Renderer plugin for batching.
   * @param {PIXI.Program} [options.program=0xFFFFFF] - Custom program.
   * @param {object} [options.uniforms] - Custom uniforms.
   */constructor(e,t){let r={uSampler:e,alpha:1,uTextureMatrix:i.Matrix.IDENTITY,uColor:new Float32Array([1,1,1,1])};(t=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},t)).uniforms&&Object.assign(r,t.uniforms),super(t.program||(0,s.Program).from(u.default,h.default),r),this._colorDirty=!1,this.uvMatrix=new a.TextureMatrix(e),this.batchable=void 0===t.program,this.pluginName=t.pluginName,this._tintColor=new o.Color(t.tint),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0,this.alpha=t.alpha}/** Reference to the texture being rendered. */get texture(){return this.uniforms.uSampler}set texture(e){this.uniforms.uSampler!==e&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!e.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=e,this.uvMatrix.texture=e)}/**
   * This gets automatically set by the object using this.
   * @default 1
   */set alpha(e){e!==this._alpha&&(this._alpha=e,this._colorDirty=!0)}get alpha(){return this._alpha}/**
   * Multiply tint for the material.
   * @default 0xFFFFFF
   */set tint(e){e!==this.tint&&(this._tintColor.setValue(e),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0)}get tint(){return this._tintColor.value}/**
   * Get the internal number from tint color
   * @ignore
   */get tintValue(){return this._tintColor.toNumber()}/** Gets called automatically by the Mesh. Intended to be overridden for custom {@link PIXI.MeshMaterial} objects. */update(){if(this._colorDirty){this._colorDirty=!1;let e=this.texture.baseTexture.alphaMode;(0,o.Color).shared.setValue(this._tintColor).premultiply(this._alpha,e).toArray(this.uniforms.uColor)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)}}}),a("bxCxF",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`}),a("e7YZB",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`}),a("jTmzx",function(e,t){n("5nCZE"),n("hnyCx"),n("drjgH"),n("iprDK"),n("awbX6"),n("1HQrk")}),a("5nCZE",function(t,r){e(t.exports,"PlaneGeometry",()=>s),n("9w5R4");var i=n("5H8Cm");class s extends i.MeshGeometry{/**
   * @param width - The width of the plane.
   * @param height - The height of the plane.
   * @param segWidth - Number of horizontal segments.
   * @param segHeight - Number of vertical segments.
   */constructor(e=100,t=100,r=10,i=10){super(),this.segWidth=r,this.segHeight=i,this.width=e,this.height=t,this.build()}/**
   * Refreshes plane coordinates
   * @private
   */build(){let e=this.segWidth*this.segHeight,t=[],r=[],i=[],s=this.segWidth-1,n=this.segHeight-1,a=this.width/s,o=this.height/n;for(let i=0;i<e;i++){let e=i%this.segWidth,l=i/this.segWidth|0;t.push(e*a,l*o),r.push(e/s,l/n)}let l=s*n;for(let e=0;e<l;e++){let t=e%s,r=e/s|0,n=r*this.segWidth+t,a=r*this.segWidth+t+1,o=(r+1)*this.segWidth+t,l=(r+1)*this.segWidth+t+1;i.push(n,a,o,a,l,o)}this.buffers[0].data=new Float32Array(t),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint16Array(i),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}}}),a("hnyCx",function(t,r){e(t.exports,"RopeGeometry",()=>s),n("9w5R4");var i=n("5H8Cm");class s extends i.MeshGeometry{/**
   * @param width - The width (i.e., thickness) of the rope.
   * @param points - An array of {@link PIXI.Point} objects to construct this rope.
   * @param textureScale - By default the rope texture will be stretched to match
   *     rope length. If textureScale is positive this value will be treated as a scaling
   *     factor and the texture will preserve its aspect ratio instead. To create a tiling rope
   *     set baseTexture.wrapMode to {@link PIXI.WRAP_MODES.REPEAT} and use a power of two texture,
   *     then set textureScale=1 to keep the original texture pixel size.
   *     In order to reduce alpha channel artifacts provide a larger texture and downsample -
   *     i.e. set textureScale=0.5 to scale it down twice.
   */constructor(e=200,t,r=0){super(new Float32Array(4*t.length),new Float32Array(4*t.length),new Uint16Array((t.length-1)*6)),this.points=t,this._width=e,this.textureScale=r,this.build()}/**
   * The width (i.e., thickness) of the rope.
   * @readonly
   */get width(){return this._width}/** Refreshes Rope indices and uvs */build(){let e=this.points;if(!e)return;let t=this.getBuffer("aVertexPosition"),r=this.getBuffer("aTextureCoord"),i=this.getIndex();if(e.length<1)return;t.data.length/4!==e.length&&(t.data=new Float32Array(4*e.length),r.data=new Float32Array(4*e.length),i.data=new Uint16Array((e.length-1)*6));let s=r.data,n=i.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;let a=0,o=e[0],l=this._width*this.textureScale,h=e.length;for(let t=0;t<h;t++){let r=4*t;if(this.textureScale>0){let r=o.x-e[t].x,i=o.y-e[t].y,s=Math.sqrt(r*r+i*i);o=e[t],a+=s/l}else a=t/(h-1);s[r]=a,s[r+1]=0,s[r+2]=a,s[r+3]=1}let u=0;for(let e=0;e<h-1;e++){let t=2*e;n[u++]=t,n[u++]=t+1,n[u++]=t+2,n[u++]=t+2,n[u++]=t+1,n[u++]=t+3}r.update(),i.update(),this.updateVertices()}/** refreshes vertices of Rope mesh */updateVertices(){let e=this.points;if(e.length<1)return;let t=e[0],r,i=0,s=0,n=this.buffers[0].data,a=e.length,o=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let l=0;l<a;l++){let h=e[l],u=4*l;s=-((r=l<e.length-1?e[l+1]:h).x-t.x),i=r.y-t.y;let d=(1-l/(a-1))*10;d>1&&(d=1);let c=Math.sqrt(i*i+s*s);c<1e-6?(i=0,s=0):(i/=c,s/=c,i*=o,s*=o),n[u]=h.x+i,n[u+1]=h.y+s,n[u+2]=h.x-i,n[u+3]=h.y-s,t=h}this.buffers[0].update()}update(){this.textureScale>0?this.build():this.updateVertices()}}}),a("drjgH",function(e,t){n("2AhlO"),n("7eheB"),n("awbX6")}),a("awbX6",function(t,r){e(t.exports,"SimplePlane",()=>l),n("2AhlO");var i=n("7eheB");n("9w5R4");var s=n("2YBxg"),a=n("llDtr"),o=n("5nCZE");class l extends a.Mesh{/**
   * @param texture - The texture to use on the SimplePlane.
   * @param verticesX - The number of vertices in the x-axis
   * @param verticesY - The number of vertices in the y-axis
   */constructor(e,t,r){let n=new o.PlaneGeometry(e.width,e.height,t,r),a=new s.MeshMaterial(i.Texture.WHITE);super(n,a),this.texture=e,this.autoResize=!0}/**
   * Method used for overrides, to do something in case texture frame was changed.
   * Meshes based on plane can override it and change more details based on texture.
   */textureUpdated(){this._textureID=this.shader.texture._updateID;let e=this.geometry,{width:t,height:r}=this.shader.texture;this.autoResize&&(e.width!==t||e.height!==r)&&(e.width=this.shader.texture.width,e.height=this.shader.texture.height,e.build())}set texture(e){this.shader.texture!==e&&(this.shader.texture=e,this._textureID=-1,e.baseTexture.valid?this.textureUpdated():e.once("update",this.textureUpdated,this))}get texture(){return this.shader.texture}_render(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),super._render(e)}destroy(e){this.shader.texture.off("update",this.textureUpdated,this),super.destroy(e)}}}),a("iprDK",function(e,t){n("2AhlO"),n("7eheB"),n("9w5R4"),n("5H8Cm"),n("2YBxg"),n("llDtr")}),a("1HQrk",function(e,t){n("2AhlO"),n("jetUE"),n("9w5R4"),n("2YBxg"),n("llDtr"),n("hnyCx")}),a("5cF2e",function(e,t){n("kmdwV"),n("8HMxW")}),a("kmdwV",function(e,t){n("2AhlO"),n("jetUE"),n("5xg5I"),n("dyEru"),n("7uhWd")}),a("8HMxW",function(e,t){n("2AhlO");var r=n("fhlwZ"),i=n("jetUE"),s=n("4Tbkk"),a=n("glF38"),o=n("MiLFw"),l=n("5xg5I"),h=n("9P40c"),u=n("glXXo"),d=n("6n8JL"),c=n("i8fOb"),p=n("1iCel");class f extends h.ObjectRenderer{/**
   * @param renderer - The renderer this sprite batch works for.
   */constructor(e){super(e),this.shader=null,this.properties=null,this.tempMatrix=new r.Matrix,this.properties=[// verticesData
{attributeName:"aVertexPosition",size:2,uploadFunction:this.uploadVertices,offset:0},// positionData
{attributeName:"aPositionCoord",size:2,uploadFunction:this.uploadPosition,offset:0},// rotationData
{attributeName:"aRotation",size:1,uploadFunction:this.uploadRotation,offset:0},// uvsData
{attributeName:"aTextureCoord",size:2,uploadFunction:this.uploadUvs,offset:0},// tintData
{attributeName:"aColor",size:1,type:i.TYPES.UNSIGNED_BYTE,uploadFunction:this.uploadTint,offset:0}],this.shader=(0,s.Shader).from(p.default,c.default,{}),this.state=(0,a.State).for2d()}/**
   * Renders the particle container object.
   * @param container - The container to render using this ParticleRenderer.
   */render(e){let t=e.children,r=e._maxSize,i=e._batchSize,s=this.renderer,n=t.length;if(0===n)return;n>r&&!e.autoResize&&(n=r);let a=e._buffers;a||(a=e._buffers=this.generateBuffers(e));let h=t[0]._texture.baseTexture,u=h.alphaMode>0;this.state.blendMode=o.correctBlendMode(e.blendMode,u),s.state.set(this.state);let d=s.gl,c=e.worldTransform.copyTo(this.tempMatrix);c.prepend(s.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=c.toArray(!0),this.shader.uniforms.uColor=(0,l.Color).shared.setValue(e.tintRgb).premultiply(e.worldAlpha,u).toArray(this.shader.uniforms.uColor),this.shader.uniforms.uSampler=h,this.renderer.shader.bind(this.shader);let p=!1;for(let r=0,o=0;r<n;r+=i,o+=1){let l=n-r;l>i&&(l=i),o>=a.length&&a.push(this._generateOneMoreBuffer(e));let h=a[o];h.uploadDynamic(t,r,l);let u=e._bufferUpdateIDs[o]||0;(p=p||h._updateID<u)&&(h._updateID=e._updateID,h.uploadStatic(t,r,l)),s.geometry.bind(h.geometry),d.drawElements(d.TRIANGLES,6*l,d.UNSIGNED_SHORT,0)}}/**
   * Creates one particle buffer for each child in the container we want to render and updates internal properties.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The buffers
   */generateBuffers(e){let t=[],r=e._maxSize,i=e._batchSize,s=e._properties;for(let e=0;e<r;e+=i)t.push(new d.ParticleBuffer(this.properties,s,i));return t}/**
   * Creates one more particle buffer, because container has autoResize feature.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The generated buffer
   */_generateOneMoreBuffer(e){let t=e._batchSize,r=e._properties;return new d.ParticleBuffer(this.properties,r,t)}/**
   * Uploads the vertices.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their vertices uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */uploadVertices(e,t,r,i,s,n){let a=0,o=0,l=0,h=0;for(let u=0;u<r;++u){let r=e[t+u],d=r._texture,c=r.scale.x,p=r.scale.y,f=d.trim,m=d.orig;f?(a=(o=f.x-r.anchor.x*m.width)+f.width,l=(h=f.y-r.anchor.y*m.height)+f.height):(a=m.width*(1-r.anchor.x),o=-(m.width*r.anchor.x),l=m.height*(1-r.anchor.y),h=-(m.height*r.anchor.y)),i[n]=o*c,i[n+1]=h*p,i[n+s]=a*c,i[n+s+1]=h*p,i[n+2*s]=a*c,i[n+2*s+1]=l*p,i[n+3*s]=o*c,i[n+3*s+1]=l*p,n+=4*s}}/**
   * Uploads the position.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their positions uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */uploadPosition(e,t,r,i,s,n){for(let a=0;a<r;a++){let r=e[t+a].position;i[n]=r.x,i[n+1]=r.y,i[n+s]=r.x,i[n+s+1]=r.y,i[n+2*s]=r.x,i[n+2*s+1]=r.y,i[n+3*s]=r.x,i[n+3*s+1]=r.y,n+=4*s}}/**
   * Uploads the rotation.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */uploadRotation(e,t,r,i,s,n){for(let a=0;a<r;a++){let r=e[t+a].rotation;i[n]=r,i[n+s]=r,i[n+2*s]=r,i[n+3*s]=r,n+=4*s}}/**
   * Uploads the UVs.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */uploadUvs(e,t,r,i,s,n){for(let a=0;a<r;++a){let r=e[t+a]._texture._uvs;r?(i[n]=r.x0,i[n+1]=r.y0,i[n+s]=r.x1,i[n+s+1]=r.y1,i[n+2*s]=r.x2,i[n+2*s+1]=r.y2,i[n+3*s]=r.x3,i[n+3*s+1]=r.y3):(i[n]=0,i[n+1]=0,i[n+s]=0,i[n+s+1]=0,i[n+2*s]=0,i[n+2*s+1]=0,i[n+3*s]=0,i[n+3*s+1]=0),n+=4*s}}/**
   * Uploads the tint.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */uploadTint(e,t,r,i,s,n){for(let a=0;a<r;++a){let r=e[t+a],o=(0,l.Color).shared.setValue(r._tintRGB).toPremultiplied(r.alpha,r.texture.baseTexture.alphaMode>0);i[n]=o,i[n+s]=o,i[n+2*s]=o,i[n+3*s]=o,n+=4*s}}/** Destroys the ParticleRenderer. */destroy(){super.destroy(),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null}}f.extension={name:"particle",type:u.ExtensionType.RendererPlugin},(0,u.extensions).add(f)}),a("6n8JL",function(t,r){e(t.exports,"ParticleBuffer",()=>l),n("2AhlO");var i=n("82wLZ"),s=n("jetUE"),a=n("ckQUf"),o=n("MiLFw");class l{/**
   * @param {object} properties - The properties to upload.
   * @param {boolean[]} dynamicPropertyFlags - Flags for which properties are dynamic.
   * @param {number} size - The size of the batch.
   */constructor(e,t,r){this.geometry=new i.Geometry,this.indexBuffer=null,this.size=r,this.dynamicProperties=[],this.staticProperties=[];for(let r=0;r<e.length;++r){let i=e[r];i={attributeName:i.attributeName,size:i.size,uploadFunction:i.uploadFunction,type:i.type||s.TYPES.FLOAT,offset:i.offset},t[r]?this.dynamicProperties.push(i):this.staticProperties.push(i)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}/** Sets up the renderer context and necessary buffers. */initBuffers(){let e=this.geometry,t=0;this.indexBuffer=new a.Buffer(o.createIndicesForQuads(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(let e=0;e<this.dynamicProperties.length;++e){let r=this.dynamicProperties[e];r.offset=t,t+=r.size,this.dynamicStride+=r.size}let r=new ArrayBuffer(this.size*this.dynamicStride*16);this.dynamicData=new Float32Array(r),this.dynamicDataUint32=new Uint32Array(r),this.dynamicBuffer=new a.Buffer(this.dynamicData,!1,!1);let i=0;this.staticStride=0;for(let e=0;e<this.staticProperties.length;++e){let t=this.staticProperties[e];t.offset=i,i+=t.size,this.staticStride+=t.size}let n=new ArrayBuffer(this.size*this.staticStride*16);this.staticData=new Float32Array(n),this.staticDataUint32=new Uint32Array(n),this.staticBuffer=new a.Buffer(this.staticData,!0,!1);for(let t=0;t<this.dynamicProperties.length;++t){let r=this.dynamicProperties[t];e.addAttribute(r.attributeName,this.dynamicBuffer,0,r.type===s.TYPES.UNSIGNED_BYTE,r.type,4*this.dynamicStride,4*r.offset)}for(let t=0;t<this.staticProperties.length;++t){let r=this.staticProperties[t];e.addAttribute(r.attributeName,this.staticBuffer,0,r.type===s.TYPES.UNSIGNED_BYTE,r.type,4*this.staticStride,4*r.offset)}}/**
   * Uploads the dynamic properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */uploadDynamic(e,t,r){for(let i=0;i<this.dynamicProperties.length;i++){let n=this.dynamicProperties[i];n.uploadFunction(e,t,r,n.type===s.TYPES.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,n.offset)}this.dynamicBuffer._updateID++}/**
   * Uploads the static properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */uploadStatic(e,t,r){for(let i=0;i<this.staticProperties.length;i++){let n=this.staticProperties[i];n.uploadFunction(e,t,r,n.type===s.TYPES.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,n.offset)}this.staticBuffer._updateID++}/** Destroys the ParticleBuffer. */destroy(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()}}}),a("i8fOb",function(t,r){e(t.exports,"default",()=>i);var i=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`}),a("1iCel",function(t,r){e(t.exports,"default",()=>i);var i=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`}),a("9EHCK",function(e,t){n("l8lxH"),n("8eZJZ"),n("iaafs"),n("6aUi2"),n("a4lLU")}),a("l8lxH",function(e,t){n("2AhlO");var r=n("8oqCw"),i=n("MiLFw"),s=n("8eZJZ");Object.defineProperties(r.settings,{/**
   * Default number of uploads per frame using prepare plugin.
   * @static
   * @memberof PIXI.settings
   * @name UPLOADS_PER_FRAME
   * @deprecated since 7.1.0
   * @see PIXI.BasePrepare.uploadsPerFrame
   * @type {number}
   */UPLOADS_PER_FRAME:{get:()=>s.BasePrepare.uploadsPerFrame,set(e){i.deprecation("7.1.0","settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),s.BasePrepare.uploadsPerFrame=e}}})}),a("8eZJZ",function(t,r){e(t.exports,"BasePrepare",()=>T),n("2AhlO");var i=n("7eheB"),s=n("2Am4Q"),a=n("54AzN"),o=n("g7L3i");n("dyEru");var l=n("7uhWd");n("6SstR");var h=n("lED3Y"),u=n("b3Zcp"),d=n("8z3qN"),c=n("iaafs");function p(e,t){let r=!1;if(e?._textures?.length){for(let s=0;s<e._textures.length;s++)if(e._textures[s]instanceof i.Texture){let i=e._textures[s].baseTexture;t.includes(i)||(t.push(i),r=!0)}}return r}function f(e,t){if(e.baseTexture instanceof s.BaseTexture){let r=e.baseTexture;return t.includes(r)||t.push(r),!0}return!1}function m(e,t){if(e._texture&&e._texture instanceof i.Texture){let r=e._texture.baseTexture;return t.includes(r)||t.push(r),!0}return!1}function g(e,t){return t instanceof h.Text&&(t.updateText(!0),!0)}function x(e,t){if(t instanceof u.TextStyle){let e=t.toFontString();return(0,d.TextMetrics).measureFont(e),!0}return!1}function _(e,t){if(e instanceof h.Text){t.includes(e.style)||t.push(e.style),t.includes(e)||t.push(e);let r=e._texture.baseTexture;return t.includes(r)||t.push(r),!0}return!1}function v(e,t){return e instanceof u.TextStyle&&(t.includes(e)||t.push(e),!0)}let E=class e{/**
   * @param {PIXI.IRenderer} renderer - A reference to the current renderer
   */constructor(t){this.limiter=new c.CountLimiter(e.uploadsPerFrame),this.renderer=t,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=()=>{this.queue&&this.prepareItems()},this.registerFindHook(_),this.registerFindHook(v),this.registerFindHook(p),this.registerFindHook(f),this.registerFindHook(m),this.registerUploadHook(g),this.registerUploadHook(x)}/**
   * Upload all the textures and graphics to the GPU.
   * @method PIXI.BasePrepare#upload
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text} [item] -
   *        Container or display object to search for items to upload or the items to upload themselves,
   *        or optionally ommitted, if items have been added using {@link PIXI.BasePrepare#add `prepare.add`}.
   */upload(e){return new Promise(t=>{e&&this.add(e),this.queue.length?(this.completes.push(t),this.ticking||(this.ticking=!0,(0,a.Ticker).system.addOnce(this.tick,this,o.UPDATE_PRIORITY.UTILITY))):t()})}/**
   * Handle tick update
   * @private
   */tick(){setTimeout(this.delayedTick,0)}/**
   * Actually prepare items. This is handled outside of the tick because it will take a while
   * and we do NOT want to block the current animation frame from rendering.
   * @private
   */prepareItems(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){let e=this.queue[0],t=!1;if(e&&!e._destroyed){for(let r=0,i=this.uploadHooks.length;r<i;r++)if(this.uploadHooks[r](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)(0,a.Ticker).system.addOnce(this.tick,this,o.UPDATE_PRIORITY.UTILITY);else{this.ticking=!1;let e=this.completes.slice(0);this.completes.length=0;for(let t=0,r=e.length;t<r;t++)e[t]()}}/**
   * Adds hooks for finding items.
   * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
   *          function must return `true` if it was able to add item to the queue.
   * @returns Instance of plugin for chaining.
   */registerFindHook(e){return e&&this.addHooks.push(e),this}/**
   * Adds hooks for uploading items.
   * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
   *          function must return `true` if it was able to handle upload of item.
   * @returns Instance of plugin for chaining.
   */registerUploadHook(e){return e&&this.uploadHooks.push(e),this}/**
   * Manually add an item to the uploading queue.
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
   *        add to the queue
   * @returns Instance of plugin for chaining.
   */add(e){for(let t=0,r=this.addHooks.length;t<r&&!this.addHooks[t](e,this.queue);t++);if(e instanceof l.Container)for(let t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this}/** Destroys the plugin, don't use after this. */destroy(){this.ticking&&(0,a.Ticker).system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null}};E.uploadsPerFrame=4;let T=E}),a("6SstR",function(t,r){e(t.exports,"TEXT_GRADIENT",()=>n("XkAkK").TEXT_GRADIENT),e(t.exports,"Text",()=>n("lED3Y").Text),e(t.exports,"TextMetrics",()=>n("8z3qN").TextMetrics),e(t.exports,"TextStyle",()=>n("b3Zcp").TextStyle),n("XkAkK"),n("lED3Y"),n("8z3qN"),n("b3Zcp")}),a("XkAkK",function(t,r){e(t.exports,"TEXT_GRADIENT",()=>s);var i,s=((i=s||{})[i.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",i[i.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL",i)}),a("lED3Y",function(t,r){e(t.exports,"Text",()=>m),n("2AhlO");var i=n("8oqCw"),s=n("7eheB"),a=n("6OnST"),o=n("MiLFw"),l=n("5xg5I");n("cJJeG");var h=n("OYVnz"),u=n("XkAkK"),d=n("8z3qN"),c=n("b3Zcp");let p={texture:!0,children:!1,baseTexture:!0},f=class e extends h.Sprite{/**
   * @param text - The string that you would like the text to display
   * @param style - The style parameters
   * @param canvas - The canvas element for drawing text
   */constructor(t,r,n){let o=!1;n||(n=(0,i.settings).ADAPTER.createCanvas(),o=!0),n.width=3,n.height=3;let l=(0,s.Texture).from(n);l.orig=new a.Rectangle,l.trim=new a.Rectangle,super(l),this._ownCanvas=o,this.canvas=n,this.context=n.getContext("2d",{// required for trimming to work without warnings
willReadFrequently:!0}),this._resolution=e.defaultResolution??i.settings.RESOLUTION,this._autoResolution=e.defaultAutoResolution,this._text=null,this._style=null,this._styleListener=null,this._font="",this.text=t,this.style=r,this.localStyleID=-1}/**
   * @see PIXI.TextMetrics.experimentalLetterSpacing
   * @deprecated since 7.1.0
   */static get experimentalLetterSpacing(){return d.TextMetrics.experimentalLetterSpacing}static set experimentalLetterSpacing(e){o.deprecation("7.1.0","Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),d.TextMetrics.experimentalLetterSpacing=e}/**
   * Renders text to its canvas, and updates its texture.
   *
   * By default this is used internally to ensure the texture is correct before rendering,
   * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
   * and then shared across multiple Sprites.
   * @param respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
   */updateText(e){let t,r;let i=this._style;if(this.localStyleID!==i.styleID&&(this.dirty=!0,this.localStyleID=i.styleID),!this.dirty&&e)return;this._font=this._style.toFontString();let s=this.context,n=(0,d.TextMetrics).measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=n.width,o=n.height,h=n.lines,u=n.lineHeight,c=n.lineWidths,p=n.maxLineWidth,f=n.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+2*i.padding)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,o)+2*i.padding)*this._resolution),s.scale(this._resolution,this._resolution),s.clearRect(0,0,this.canvas.width,this.canvas.height),s.font=this._font,s.lineWidth=i.strokeThickness,s.textBaseline=i.textBaseline,s.lineJoin=i.lineJoin,s.miterLimit=i.miterLimit;let m=i.dropShadow?2:1;for(let e=0;e<m;++e){let a=i.dropShadow&&0===e,d=a?Math.ceil(Math.max(1,o)+2*i.padding):0,m=d*this._resolution;if(a){s.fillStyle="black",s.strokeStyle="black";let e=i.dropShadowColor,t=i.dropShadowBlur*this._resolution,r=i.dropShadowDistance*this._resolution;s.shadowColor=(0,l.Color).shared.setValue(e).setAlpha(i.dropShadowAlpha).toRgbaString(),s.shadowBlur=t,s.shadowOffsetX=Math.cos(i.dropShadowAngle)*r,s.shadowOffsetY=Math.sin(i.dropShadowAngle)*r+m}else s.fillStyle=this._generateFillStyle(i,h,n),s.strokeStyle=i.stroke,s.shadowColor="black",s.shadowBlur=0,s.shadowOffsetX=0,s.shadowOffsetY=0;let g=(u-f.fontSize)/2;u-f.fontSize<0&&(g=0);for(let e=0;e<h.length;e++)t=i.strokeThickness/2,r=i.strokeThickness/2+e*u+f.ascent+g,"right"===i.align?t+=p-c[e]:"center"===i.align&&(t+=(p-c[e])/2),i.stroke&&i.strokeThickness&&this.drawLetterSpacing(h[e],t+i.padding,r+i.padding-d,!0),i.fill&&this.drawLetterSpacing(h[e],t+i.padding,r+i.padding-d)}this.updateTexture()}/**
   * Render the text with letter-spacing.
   * @param text - The text to draw
   * @param x - Horizontal position to draw the text
   * @param y - Vertical position to draw the text
   * @param isStroke - Is this drawing for the outside stroke of the
   *  text? If not, it's for the inside fill
   */drawLetterSpacing(e,t,r,i=!1){let s=this._style.letterSpacing,n=!1;if(d.TextMetrics.experimentalLetterSpacingSupported&&(d.TextMetrics.experimentalLetterSpacing?(this.context.letterSpacing=`${s}px`,this.context.textLetterSpacing=`${s}px`,n=!0):(this.context.letterSpacing="0px",this.context.textLetterSpacing="0px")),0===s||n){i?this.context.strokeText(e,t,r):this.context.fillText(e,t,r);return}let a=t,o=(0,d.TextMetrics).graphemeSegmenter(e),l=this.context.measureText(e).width,h=0;for(let e=0;e<o.length;++e){let t=o[e];i?this.context.strokeText(t,a,r):this.context.fillText(t,a,r);let n="";for(let t=e+1;t<o.length;++t)n+=o[t];a+=l-(h=this.context.measureText(n).width)+s,l=h}}/** Updates texture size based on canvas size. */updateTexture(){let e=this.canvas;if(this._style.trim){let t=o.trimCanvas(e);t.data&&(e.width=t.width,e.height=t.height,this.context.putImageData(t.data,0,0))}let t=this._texture,r=this._style,i=r.trim?0:r.padding,s=t.baseTexture;t.trim.width=t._frame.width=e.width/this._resolution,t.trim.height=t._frame.height=e.height/this._resolution,t.trim.x=-i,t.trim.y=-i,t.orig.width=t._frame.width-2*i,t.orig.height=t._frame.height-2*i,this._onTextureUpdate(),s.setRealSize(e.width,e.height,this._resolution),t.updateUvs(),this.dirty=!1}/**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._render(e)}/** Updates the transform on all children of this container for rendering. */updateTransform(){this.updateText(!0),super.updateTransform()}getBounds(e,t){return this.updateText(!0),-1===this._textureID&&(e=!1),super.getBounds(e,t)}/**
   * Gets the local bounds of the text object.
   * @param rect - The output rectangle.
   * @returns The bounds.
   */getLocalBounds(e){return this.updateText(!0),super.getLocalBounds.call(this,e)}/** Calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account. */_calculateBounds(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)}/**
   * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
   * @param style - The style.
   * @param lines - The lines of text.
   * @param metrics
   * @returns The fill style
   */_generateFillStyle(e,t,r){let i;let s=e.fill;if(!Array.isArray(s))return s;if(1===s.length)return s[0];let n=e.dropShadow?e.dropShadowDistance:0,a=e.padding||0,o=this.canvas.width/this._resolution-n-2*a,l=this.canvas.height/this._resolution-n-2*a,h=s.slice(),d=e.fillGradientStops.slice();if(!d.length){let e=h.length+1;for(let t=1;t<e;++t)d.push(t/e)}if(h.unshift(s[0]),d.unshift(0),h.push(s[s.length-1]),d.push(1),e.fillGradientType===u.TEXT_GRADIENT.LINEAR_VERTICAL){i=this.context.createLinearGradient(o/2,a,o/2,l+a);let s=r.fontProperties.fontSize+e.strokeThickness;for(let e=0;e<t.length;e++){let n=r.lineHeight*(e-1)+s,a=r.lineHeight*e,o=a;e>0&&n>a&&(o=(a+n)/2);let u=a+s,c=r.lineHeight*(e+1),p=u;e+1<t.length&&c<u&&(p=(u+c)/2);let f=(p-o)/l;for(let e=0;e<h.length;e++){let t=Math.min(1,Math.max(0,o/l+("number"==typeof d[e]?d[e]:e/h.length)*f));t=Number(t.toFixed(5)),i.addColorStop(t,h[e])}}}else{i=this.context.createLinearGradient(a,l/2,o+a,l/2);let e=h.length+1,t=1;for(let r=0;r<h.length;r++){let s;s="number"==typeof d[r]?d[r]:t/e,i.addColorStop(s,h[r]),t++}}return i}/**
   * Destroys this text object.
   *
   * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
   * the majority of the time the texture will not be shared with any other Sprites.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their
   *  destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
   * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
   */destroy(e){"boolean"==typeof e&&(e={children:e}),e=Object.assign({},p,e),super.destroy(e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null}/** The width of the Text, setting this will actually modify the scale to achieve the value set. */get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this.updateText(!0);let t=o.sign(this.scale.x)||1;this.scale.x=t*e/this._texture.orig.width,this._width=e}/** The height of the Text, setting this will actually modify the scale to achieve the value set. */get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this.updateText(!0);let t=o.sign(this.scale.y)||1;this.scale.y=t*e/this._texture.orig.height,this._height=e}/**
   * Set the style of the text.
   *
   * Set up an event listener to listen for changes on the style object and mark the text as dirty.
   *
   * If setting the `style` can also be partial {@link PIXI.ITextStyle}.
   */get style(){return this._style}set style(e){(e=e||{})instanceof c.TextStyle?this._style=e:this._style=new c.TextStyle(e),this.localStyleID=-1,this.dirty=!0}/** Set the copy for the text object. To split a line you can use '\n'. */get text(){return this._text}set text(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)}/**
   * The resolution / device pixel ratio of the canvas.
   *
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @default 1
   */get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}};f.defaultAutoResolution=!0;let m=f}),a("8z3qN",function(t,r){e(t.exports,"TextMetrics",()=>o),n("2AhlO");var i=n("8oqCw");let s={// TextMetrics requires getImageData readback for measuring fonts.
willReadFrequently:!0},a=class e{/**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see PIXI.TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */static get experimentalLetterSpacingSupported(){let t=e._experimentalLetterSpacingSupported;if(void 0!==t){let r=(0,i.settings).ADAPTER.getCanvasRenderingContext2D().prototype;t=e._experimentalLetterSpacingSupported="letterSpacing"in r||"textLetterSpacing"in r}return t}/**
   * @param text - the text that was measured
   * @param style - the style that was measured
   * @param width - the measured width of the text
   * @param height - the measured height of the text
   * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param lineWidths - an array of the line widths for each line matched to `lines`
   * @param lineHeight - the measured line height for this style
   * @param maxLineWidth - the maximum line width for all measured lines
   * @param {PIXI.IFontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
   */constructor(e,t,r,i,s,n,a,o,l){this.text=e,this.style=t,this.width=r,this.height=i,this.lines=s,this.lineWidths=n,this.lineHeight=a,this.maxLineWidth=o,this.fontProperties=l}/**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param wordWrap - Override for if word-wrap should be applied to the text.
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns Measured width and height of the text.
   */static measureText(t,r,i,n=e._canvas){i=i??r.wordWrap;let a=r.toFontString(),o=e.measureFont(a);0===o.fontSize&&(o.fontSize=r.fontSize,o.ascent=r.fontSize);let l=n.getContext("2d",s);l.font=a;let h=(i?e.wordWrap(t,r,n):t).split(/(?:\r\n|\r|\n)/),u=Array(h.length),d=0;for(let t=0;t<h.length;t++){let i=e._measureText(h[t],r.letterSpacing,l);u[t]=i,d=Math.max(d,i)}let c=d+r.strokeThickness;r.dropShadow&&(c+=r.dropShadowDistance);let p=r.lineHeight||o.fontSize+r.strokeThickness,f=Math.max(p,o.fontSize+2*r.strokeThickness)+r.leading+(h.length-1)*(p+r.leading);return r.dropShadow&&(f+=r.dropShadowDistance),new e(t,r,c,f,h,u,p+r.leading,d,o)}static _measureText(t,r,i){let s=!1;e.experimentalLetterSpacingSupported&&(e.experimentalLetterSpacing?(i.letterSpacing=`${r}px`,i.textLetterSpacing=`${r}px`,s=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));let n=i.measureText(t).width;return n>0&&(s?n-=r:n+=(e.graphemeSegmenter(t).length-1)*r),n}/**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   * @param text - String to apply word wrapping to
   * @param style - the style to use when wrapping
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns New string with new lines applied where required
   */static wordWrap(t,r,i=e._canvas){let n=i.getContext("2d",s),a=0,o="",l="",h=/* @__PURE__ */Object.create(null),{letterSpacing:u,whiteSpace:d}=r,c=e.collapseSpaces(d),p=e.collapseNewlines(d),f=!c,m=r.wordWrapWidth+u,g=e.tokenize(t);for(let t=0;t<g.length;t++){let i=g[t];if(e.isNewline(i)){if(!p){l+=e.addLine(o),f=!c,o="",a=0;continue}i=" "}if(c){let t=e.isBreakingSpace(i),r=e.isBreakingSpace(o[o.length-1]);if(t&&r)continue}let s=e.getFromCache(i,u,h,n);if(s>m){if(""!==o&&(l+=e.addLine(o),o="",a=0),e.canBreakWords(i,r.breakWords)){let t=e.wordWrapSplit(i);for(let s=0;s<t.length;s++){let d=t[s],c=d,p=1;for(;t[s+p];){let n=t[s+p];if(e.canBreakChars(c,n,i,s,r.breakWords))break;d+=n,c=n,p++}s+=p-1;let g=e.getFromCache(d,u,h,n);g+a>m&&(l+=e.addLine(o),f=!1,o="",a=0),o+=d,a+=g}}else{o.length>0&&(l+=e.addLine(o),o="",a=0);let r=t===g.length-1;l+=e.addLine(i,!r),f=!1,o="",a=0}}else s+a>m&&(f=!1,l+=e.addLine(o),o="",a=0),(o.length>0||!e.isBreakingSpace(i)||f)&&(o+=i,a+=s)}return l+e.addLine(o,!1)}/**
   * Convienience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */static addLine(t,r=!0){return t=e.trimRight(t),t=r?`${t}
`:t}/**
   * Gets & sets the widths of calculated characters in a cache object
   * @param key            - The key
   * @param letterSpacing  - The letter spacing
   * @param cache          - The cache
   * @param context        - The canvas context
   * @returns The from cache.
   */static getFromCache(t,r,i,s){let n=i[t];return"number"!=typeof n&&(n=e._measureText(t,r,s)+r,i[t]=n),n}/**
   * Determines whether we should collapse breaking spaces.
   * @param whiteSpace - The TextStyle property whiteSpace
   * @returns Should collapse
   */static collapseSpaces(e){return"normal"===e||"pre-line"===e}/**
   * Determines whether we should collapse newLine chars.
   * @param whiteSpace - The white space
   * @returns should collapse
   */static collapseNewlines(e){return"normal"===e}/**
   * Trims breaking whitespaces from string.
   * @param text - The text
   * @returns Trimmed string
   */static trimRight(t){if("string"!=typeof t)return"";for(let r=t.length-1;r>=0;r--){let i=t[r];if(!e.isBreakingSpace(i))break;t=t.slice(0,-1)}return t}/**
   * Determines if char is a newline.
   * @param char - The character
   * @returns True if newline, False otherwise.
   */static isNewline(t){return"string"==typeof t&&e._newlines.includes(t.charCodeAt(0))}/**
   * Determines if char is a breaking whitespace.
   *
   * It allows one to determine whether char should be a breaking whitespace
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param char - The character
   * @param [_nextChar] - The next character
   * @returns True if whitespace, False otherwise.
   */static isBreakingSpace(t,r){return"string"==typeof t&&e._breakingSpaces.includes(t.charCodeAt(0))}/**
   * Splits a string into words, breaking-spaces and newLine characters
   * @param text - The text
   * @returns A tokenized array
   */static tokenize(t){let r=[],i="";if("string"!=typeof t)return r;for(let s=0;s<t.length;s++){let n=t[s],a=t[s+1];if(e.isBreakingSpace(n,a)||e.isNewline(n)){""!==i&&(r.push(i),i=""),r.push(n);continue}i+=n}return""!==i&&r.push(i),r}/**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to customise which words should break
   * Examples are if the token is CJK or numbers.
   * It must return a boolean.
   * @param _token - The token
   * @param breakWords - The style attr break words
   * @returns Whether to break word or not
   */static canBreakWords(e,t){return t}/**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to determine whether a pair of characters
   * should be broken by newlines
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param _char - The character
   * @param _nextChar - The next character
   * @param _token - The token/word the characters are from
   * @param _index - The index in the token of the char
   * @param _breakWords - The style attr break words
   * @returns whether to break word or not
   */static canBreakChars(e,t,r,i,s){return!0}/**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It is called when a token (usually a word) has to be split into separate pieces
   * in order to determine the point to break a word.
   * It must return an array of characters.
   * @param token - The token to split
   * @returns The characters of the token
   * @see TextMetrics.graphemeSegmenter
   */static wordWrapSplit(t){return e.graphemeSegmenter(t)}/**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */static measureFont(t){if(e._fonts[t])return e._fonts[t];let r={ascent:0,descent:0,fontSize:0},i=e._canvas,s=e._context;s.font=t;let n=e.METRICS_STRING+e.BASELINE_SYMBOL,a=Math.ceil(s.measureText(n).width),o=Math.ceil(s.measureText(e.BASELINE_SYMBOL).width),l=Math.ceil(e.HEIGHT_MULTIPLIER*o);if(o=o*e.BASELINE_MULTIPLIER|0,0===a||0===l)return e._fonts[t]=r,r;i.width=a,i.height=l,s.fillStyle="#f00",s.fillRect(0,0,a,l),s.font=t,s.textBaseline="alphabetic",s.fillStyle="#000",s.fillText(n,0,o);let h=s.getImageData(0,0,a,l).data,u=h.length,d=4*a,c=0,p=0,f=!1;for(c=0;c<o;++c){for(let e=0;e<d;e+=4)if(255!==h[p+e]){f=!0;break}if(f)break;p+=d}for(r.ascent=o-c,p=u-d,f=!1,c=l;c>o;--c){for(let e=0;e<d;e+=4)if(255!==h[p+e]){f=!0;break}if(f)break;p-=d}return r.descent=c-o,r.fontSize=r.ascent+r.descent,e._fonts[t]=r,r}/**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */static clearMetrics(t=""){t?delete e._fonts[t]:e._fonts={}}/**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */static get _canvas(){if(!e.__canvas){let t;try{let r=new OffscreenCanvas(0,0);if(r.getContext("2d",s)?.measureText)return e.__canvas=r,r;t=(0,i.settings).ADAPTER.createCanvas()}catch{t=(0,i.settings).ADAPTER.createCanvas()}t.width=t.height=10,e.__canvas=t}return e.__canvas}/**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */static get _context(){return e.__context||(e.__context=e._canvas.getContext("2d",s)),e.__context}};a.METRICS_STRING="|\xc9q\xc5",/** Baseline symbol for calculate font metrics. */a.BASELINE_SYMBOL="M",/** Baseline multiplier for calculate font metrics. */a.BASELINE_MULTIPLIER=1.4,/** Height multiplier for setting height of canvas to calculate font metrics. */a.HEIGHT_MULTIPLIER=2,/**
* A Unicode "character", or "grapheme cluster", can be composed of multiple Unicode code points,
* such as letters with diacritical marks (e.g. `'\u0065\u0301'`, letter e with acute)
* or emojis with modifiers (e.g. `'\uD83E\uDDD1\u200D\uD83D\uDCBB'`, technologist).
* The new `Intl.Segmenter` API in ES2022 can split the string into grapheme clusters correctly. If it is not available,
* PixiJS will fallback to use the iterator of String, which can only spilt the string into code points.
* If you want to get full functionality in environments that don't support `Intl.Segmenter` (such as Firefox),
* you can use other libraries such as [grapheme-splitter]{@link https://www.npmjs.com/package/grapheme-splitter}
* or [graphemer]{@link https://www.npmjs.com/package/graphemer} to create a polyfill. Since these libraries can be
* relatively large in size to handle various Unicode grapheme clusters properly, PixiJS won't use them directly.
*/a.graphemeSegmenter=(()=>{if("function"==typeof Intl?.Segmenter){let e=new Intl.Segmenter;return t=>[...e.segment(t)].map(e=>e.segment)}return e=>[...e]})(),/**
* New rendering behavior for letter-spacing which uses Chrome's new native API. This will
* lead to more accurate letter-spacing results because it does not try to manually draw
* each character. However, this Chrome API is experimental and may not serve all cases yet.
* @see PIXI.TextMetrics.experimentalLetterSpacingSupported
*/a.experimentalLetterSpacing=!1,/** Cache of {@see PIXI.TextMetrics.FontMetrics} objects. */a._fonts={},/** Cache of new line chars. */a._newlines=[10,// line feed
13],/** Cache of breaking spaces. */a._breakingSpaces=[9,// character tabulation
32,// space
8192,// en quad
8193,// em quad
8194,// en space
8195,// em space
8196,// three-per-em space
8197,// four-per-em space
8198,// six-per-em space
8200,// punctuation space
8201,// thin space
8202,// hair space
8287,// medium mathematical space
12288];let o=a}),a("b3Zcp",function(t,r){e(t.exports,"TextStyle",()=>l);var i=n("XkAkK");n("2AhlO");var s=n("5xg5I");let a=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],o=class e{/**
   * @param style - TextStyle properties to be set on the text. See {@link PIXI.TextStyle.defaultStyle}
   *       for the default values.
   */constructor(e){this.styleID=0,this.reset(),u(this,e,e)}/**
   * Creates a new TextStyle object with the same values as this one.
   * Note that the only the properties of the object are cloned.
   *
   * @return New cloned TextStyle object
   */clone(){let t={};return u(t,this,e.defaultStyle),new e(t)}/** Resets all properties to the defaults specified in TextStyle.prototype._default */reset(){u(this,e.defaultStyle,e.defaultStyle)}/**
   * Alignment for multiline text, does not affect single line text.
   *
   * @member {'left'|'center'|'right'|'justify'}
   */get align(){return this._align}set align(e){this._align!==e&&(this._align=e,this.styleID++)}/** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */get breakWords(){return this._breakWords}set breakWords(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)}/** Set a drop shadow for the text. */get dropShadow(){return this._dropShadow}set dropShadow(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)}/** Set alpha for the drop shadow. */get dropShadowAlpha(){return this._dropShadowAlpha}set dropShadowAlpha(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)}/** Set a angle of the drop shadow. */get dropShadowAngle(){return this._dropShadowAngle}set dropShadowAngle(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)}/** Set a shadow blur radius. */get dropShadowBlur(){return this._dropShadowBlur}set dropShadowBlur(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)}/** A fill style to be used on the dropshadow e.g., 'red', '#00FF00'. */get dropShadowColor(){return this._dropShadowColor}set dropShadowColor(e){let t=h(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)}/** Set a distance of the drop shadow. */get dropShadowDistance(){return this._dropShadowDistance}set dropShadowDistance(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)}/**
   * A canvas fillstyle that will be used on the text e.g., 'red', '#00FF00'.
   *
   * Can be an array to create a gradient e.g., `['#000000','#FFFFFF']`
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
   *
   * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
   */get fill(){return this._fill}set fill(e){let t=h(e);this._fill!==t&&(this._fill=t,this.styleID++)}/**
   * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
   *
   * @type {PIXI.TEXT_GRADIENT}
   */get fillGradientType(){return this._fillGradientType}set fillGradientType(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)}/**
   * If fill is an array of colours to create a gradient, this array can set the stop points
   * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
   */get fillGradientStops(){return this._fillGradientStops}set fillGradientStops(e){(function(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0})(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)}/**
   * The font family, can be a single font name, or a list of names where the first
   * is the preferred font.
   */get fontFamily(){return this._fontFamily}set fontFamily(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)}/**
   * The font size
   * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
   */get fontSize(){return this._fontSize}set fontSize(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)}/**
   * The font style.
   *
   * @member {'normal'|'italic'|'oblique'}
   */get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)}/**
   * The font variant.
   *
   * @member {'normal'|'small-caps'}
   */get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)}/**
   * The font weight.
   *
   * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)}/** The amount of spacing between letters, default is 0. */get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)}/** The line height, a number that represents the vertical space that a letter uses. */get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)}/** The space between lines. */get leading(){return this._leading}set leading(e){this._leading!==e&&(this._leading=e,this.styleID++)}/**
   * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
   * Default is 'miter' (creates a sharp corner).
   *
   * @member {'miter'|'round'|'bevel'}
   */get lineJoin(){return this._lineJoin}set lineJoin(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)}/**
   * The miter limit to use when using the 'miter' lineJoin mode.
   *
   * This can reduce or increase the spikiness of rendered text.
   */get miterLimit(){return this._miterLimit}set miterLimit(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)}/**
   * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
   * by adding padding to all sides of the text.
   */get padding(){return this._padding}set padding(e){this._padding!==e&&(this._padding=e,this.styleID++)}/**
   * A canvas fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'
   */get stroke(){return this._stroke}set stroke(e){let t=h(e);this._stroke!==t&&(this._stroke=t,this.styleID++)}/**
   * A number that represents the thickness of the stroke.
   *
   * @default 0
   */get strokeThickness(){return this._strokeThickness}set strokeThickness(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)}/**
   * The baseline of the text that is rendered.
   *
   * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)}/** Trim transparent borders. */get trim(){return this._trim}set trim(e){this._trim!==e&&(this._trim=e,this.styleID++)}/**
   * How newlines and spaces should be handled.
   * Default is 'pre' (preserve, preserve).
   *
   *  value       | New lines     |   Spaces
   *  ---         | ---           |   ---
   * 'normal'     | Collapse      |   Collapse
   * 'pre'        | Preserve      |   Preserve
   * 'pre-line'   | Preserve      |   Collapse
   *
   * @member {'normal'|'pre'|'pre-line'}
   */get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)}/** Indicates if word wrap should be used. */get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)}/** The width at which text will wrap, it needs wordWrap to be set to true. */get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)}/**
   * Generates a font style string to use for `TextMetrics.measureFont()`.
   *
   * @return Font style string, for passing to `TextMetrics.measureFont()`
   */toFontString(){let e="number"==typeof this.fontSize?`${this.fontSize}px`:this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(let e=t.length-1;e>=0;e--){let r=t[e].trim();/([\"\'])[^\'\"]+\1/.test(r)||a.includes(r)||(r=`"${r}"`),t[e]=r}return`${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`}};o.defaultStyle={/**
   * See {@link PIXI.TextStyle.align}
   * @type {'left'|'center'|'right'|'justify'}
   */align:"left",/** See {@link PIXI.TextStyle.breakWords} */breakWords:!1,/** See {@link PIXI.TextStyle.dropShadow} */dropShadow:!1,/** See {@link PIXI.TextStyle.dropShadowAlpha} */dropShadowAlpha:1,/**
   * See {@link PIXI.TextStyle.dropShadowAngle}
   * @type {number}
   * @default Math.PI / 6
   */dropShadowAngle:Math.PI/6,/** See {@link PIXI.TextStyle.dropShadowBlur} */dropShadowBlur:0,/**
   * See {@link PIXI.TextStyle.dropShadowColor}
   * @type {string|number}
   */dropShadowColor:"black",/** See {@link PIXI.TextStyle.dropShadowDistance} */dropShadowDistance:5,/**
   * See {@link PIXI.TextStyle.fill}
   * @type {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
   */fill:"black",/**
   * See {@link PIXI.TextStyle.fillGradientType}
   * @type {PIXI.TEXT_GRADIENT}
   * @default PIXI.TEXT_GRADIENT.LINEAR_VERTICAL
   */fillGradientType:i.TEXT_GRADIENT.LINEAR_VERTICAL,/**
   * See {@link PIXI.TextStyle.fillGradientStops}
   * @type {number[]}
   * @default []
   */fillGradientStops:[],/**
   * See {@link PIXI.TextStyle.fontFamily}
   * @type {string|string[]}
   */fontFamily:"Arial",/**
   * See {@link PIXI.TextStyle.fontSize}
   * @type {number|string} 
   */fontSize:26,/**
   * See {@link PIXI.TextStyle.fontStyle}
   * @type {'normal'|'italic'|'oblique'}
   */fontStyle:"normal",/**
   * See {@link PIXI.TextStyle.fontVariant}
   * @type {'normal'|'small-caps'}
   */fontVariant:"normal",/**
   * See {@link PIXI.TextStyle.fontWeight}
   * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */fontWeight:"normal",/** See {@link PIXI.TextStyle.leading} */leading:0,/** See {@link PIXI.TextStyle.letterSpacing} */letterSpacing:0,/** See {@link PIXI.TextStyle.lineHeight} */lineHeight:0,/**
   * See {@link PIXI.TextStyle.lineJoin}
   * @type {'miter'|'round'|'bevel'}
   */lineJoin:"miter",/** See {@link PIXI.TextStyle.miterLimit} */miterLimit:10,/** See {@link PIXI.TextStyle.padding} */padding:0,/**
   * See {@link PIXI.TextStyle.stroke}
   * @type {string|number}
   */stroke:"black",/** See {@link PIXI.TextStyle.strokeThickness} */strokeThickness:0,/**
   * See {@link PIXI.TextStyle.textBaseline} 
   * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */textBaseline:"alphabetic",/** See {@link PIXI.TextStyle.trim} */trim:!1,/**
   * See {@link PIXI.TextStyle.whiteSpace}
   * @type {'normal'|'pre'|'pre-line'}
   */whiteSpace:"pre",/** See {@link PIXI.TextStyle.wordWrap} */wordWrap:!1,/** See {@link PIXI.TextStyle.wordWrapWidth} */wordWrapWidth:100};let l=o;function h(e){let t=s.Color.shared,r=e=>{let r=t.setValue(e);return 1===r.alpha?r.toHex():r.toRgbaString()};return Array.isArray(e)?e.map(r):r(e)}function u(e,t,r){for(let i in r)Array.isArray(t[i])?e[i]=t[i].slice():e[i]=t[i]}}),a("iaafs",function(t,r){e(t.exports,"CountLimiter",()=>i);class i{/**
   * @param maxItemsPerFrame - The maximum number of items that can be prepared each frame.
   */constructor(e){this.maxItemsPerFrame=e,this.itemsLeft=0}/** Resets any counting properties to start fresh on a new frame. */beginFrame(){this.itemsLeft=this.maxItemsPerFrame}/**
   * Checks to see if another item can be uploaded. This should only be called once per item.
   * @returns If the item is allowed to be uploaded.
   */allowedToUpload(){return this.itemsLeft-- >0}}}),a("6aUi2",function(e,t){n("2AhlO");var r=n("2Am4Q"),i=n("glXXo");n("9qNwV");var s=n("7qA1V"),a=n("8eZJZ");function o(e,t){return t instanceof r.BaseTexture&&(t._glTextures[e.CONTEXT_UID]||e.texture.bind(t),!0)}function l(e,t){if(!(t instanceof s.Graphics))return!1;let{geometry:r}=t;t.finishPoly(),r.updateBatches();let{batches:i}=r;for(let t=0;t<i.length;t++){let{texture:r}=i[t].style;r&&o(e,r.baseTexture)}return r.batchable||e.geometry.bind(r,t._resolveDirectShader(e)),!0}function h(e,t){return e instanceof s.Graphics&&(t.push(e),!0)}class u extends a.BasePrepare{/**
   * @param {PIXI.Renderer} renderer - A reference to the current renderer
   */constructor(e){super(e),this.uploadHookHelper=this.renderer,this.registerFindHook(h),this.registerUploadHook(o),this.registerUploadHook(l)}}u.extension={name:"prepare",type:i.ExtensionType.RendererSystem},(0,i.extensions).add(u)}),a("a4lLU",function(e,t){}),a("4OMix",function(e,t){n("dHDeX")}),a("dHDeX",function(e,t){n("2AhlO"),n("7eheB"),n("54AzN"),n("g7L3i"),n("cJJeG"),n("OYVnz")}),a("4Qt6g",function(e,t){n("3AIrj"),n("4F7ss")}),a("3AIrj",function(e,t){n("2AhlO");var r=n("iVQEG");n("9wIYY"),n("9VGTl"),n("6OnST"),n("7eheB"),n("cJJeG"),n("OYVnz"),new r.Point}),a("4F7ss",function(e,t){n("2AhlO");var r=n("fhlwZ"),i=n("d5fCV"),s=n("glF38"),a=n("4Tbkk"),o=n("jetUE"),l=n("5xg5I"),h=n("MiLFw"),u=n("9P40c"),d=n("glXXo"),c=n("6eAlO"),p=n("j8bPM"),f=n("dQOtp"),m=n("7Jv7w"),g=n("7g4of");let x=new r.Matrix;class _ extends u.ObjectRenderer{/**
   * constructor for renderer
   * @param {PIXI.Renderer} renderer - The renderer this tiling awesomeness works for.
   */constructor(e){super(e),e.runners.contextChange.add(this),this.quad=new i.QuadUv,this.state=(0,s.State).for2d()}/** Creates shaders when context is initialized. */contextChange(){let e=this.renderer,t={globals:e.globalUniforms};this.simpleShader=(0,a.Shader).from(m.default,g.default,t),this.shader=e.context.webGLVersion>1?(0,a.Shader).from(p.default,c.default,t):(0,a.Shader).from(m.default,f.default,t)}/**
   * @param {PIXI.TilingSprite} ts - tilingSprite to be rendered
   */render(e){let t=this.renderer,r=this.quad,i=r.vertices;i[0]=i[6]=-(e._width*e.anchor.x),i[1]=i[3]=-(e._height*e.anchor.y),i[2]=i[4]=e._width*(1-e.anchor.x),i[5]=i[7]=e._height*(1-e.anchor.y);let s=e.uvRespectAnchor?e.anchor.x:0,n=e.uvRespectAnchor?e.anchor.y:0;(i=r.uvs)[0]=i[6]=-s,i[1]=i[3]=-n,i[2]=i[4]=1-s,i[5]=i[7]=1-n,r.invalidate();let a=e._texture,u=a.baseTexture,d=u.alphaMode>0,c=e.tileTransform.localTransform,p=e.uvMatrix,f=u.isPowerOfTwo&&a.frame.width===u.width&&a.frame.height===u.height;f&&(u._glTextures[t.CONTEXT_UID]?f=u.wrapMode!==o.WRAP_MODES.CLAMP:u.wrapMode===o.WRAP_MODES.CLAMP&&(u.wrapMode=o.WRAP_MODES.REPEAT));let m=f?this.simpleShader:this.shader,g=a.width,_=a.height,v=e._width,E=e._height;x.set(c.a*g/v,c.b*g/E,c.c*_/v,c.d*_/E,c.tx/v,c.ty/E),x.invert(),f?x.prepend(p.mapCoord):(m.uniforms.uMapCoord=p.mapCoord.toArray(!0),m.uniforms.uClampFrame=p.uClampFrame,m.uniforms.uClampOffset=p.uClampOffset),m.uniforms.uTransform=x.toArray(!0),m.uniforms.uColor=(0,l.Color).shared.setValue(e.tint).premultiply(e.worldAlpha,d).toArray(m.uniforms.uColor),m.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),m.uniforms.uSampler=a,t.shader.bind(m),t.geometry.bind(r),this.state.blendMode=h.correctBlendMode(e.blendMode,d),t.state.set(this.state),t.geometry.draw(this.renderer.gl.TRIANGLES,6,0)}}_.extension={name:"tilingSprite",type:d.ExtensionType.RendererPlugin},(0,d.extensions).add(_)}),a("6eAlO",function(t,r){e(t.exports,"default",()=>i);var i=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`}),a("j8bPM",function(t,r){e(t.exports,"default",()=>i);var i=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`}),a("dQOtp",function(t,r){e(t.exports,"default",()=>i);var i=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`}),a("7Jv7w",function(t,r){e(t.exports,"default",()=>i);var i=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`}),a("7g4of",function(t,r){e(t.exports,"default",()=>i);var i=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`}),a("ozRkb",function(e,t){n("2iFUe"),n("cP3Ib")}),a("2iFUe",function(t,r){e(t.exports,"Spritesheet",()=>h),n("2AhlO");var i=n("7eheB"),s=n("2Am4Q"),a=n("MiLFw"),o=n("6OnST");let l=class e{/**
   * @param texture - Reference to the source BaseTexture object.
   * @param {object} data - Spritesheet image data.
   * @param resolutionFilename - The filename to consider when determining
   *        the resolution of the spritesheet. If not provided, the imageUrl will
   *        be used on the BaseTexture.
   */constructor(e,t,r=null){this.linkedSheets=[],this._texture=e instanceof i.Texture?e:null,this.baseTexture=e instanceof s.BaseTexture?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;let n=this.baseTexture.resource;this.resolution=this._updateResolution(r||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}/**
   * Generate the resolution from the filename or fallback
   * to the meta.scale field of the JSON data.
   * @param resolutionFilename - The filename to use for resolving
   *        the default resolution.
   * @returns Resolution to use for spritesheet.
   */_updateResolution(e=null){let{scale:t}=this.data.meta,r=a.getResolutionOfUrl(e,null);return null===r&&(r=parseFloat(t??"1")),1!==r&&this.baseTexture.setResolution(r),r}/**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   * @method PIXI.Spritesheet#parse
   */parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=e.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}/**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */_processFrames(t){let r=t,s=e.BATCH_SIZE;for(;r-t<s&&r<this._frameKeys.length;){let e=this._frameKeys[r],t=this._frames[e],s=t.frame;if(s){let r=null,n=null,a=!1!==t.trimmed&&t.sourceSize?t.sourceSize:t.frame,l=new o.Rectangle(0,0,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution);r=t.rotated?new o.Rectangle(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):new o.Rectangle(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),!1!==t.trimmed&&t.spriteSourceSize&&(n=new o.Rectangle(Math.floor(t.spriteSourceSize.x)/this.resolution,Math.floor(t.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[e]=new i.Texture(this.baseTexture,r,l,n,t.rotated?2:0,t.anchor,t.borders),(0,i.Texture).addToCache(this.textures[e],e.toString())}r++}}/** Parse animations config. */_processAnimations(){let e=this.data.animations||{};for(let t in e){this.animations[t]=[];for(let r=0;r<e[t].length;r++){let i=e[t][r];this.animations[t].push(this.textures[i])}}}/** The parse has completed. */_parseComplete(){let e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}/** Begin the next batch of textures. */_nextBatch(){this._processFrames(this._batchIndex*e.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*e.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}/**
   * Destroy Spritesheet and don't use after this.
   * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
   */destroy(e=!1){for(let e in this.textures)this.textures[e].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&(this._texture?.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]}};l.BATCH_SIZE=1e3;let h=l}),a("cP3Ib",function(e,t){n("9t9WZ");var r=n("djhuW"),i=n("jqNno");n("2AhlO");var s=n("MiLFw"),a=n("glXXo"),o=n("8oqCw"),l=n("2iFUe");let h=["jpg","png","jpeg","avif","webp"],u={extension:a.ExtensionType.Asset,/** Handle the caching of the related Spritesheet Textures */cache:{test:e=>e instanceof l.Spritesheet,getCacheableAssets:(e,t)=>(function e(t,r,i){let n={};if(t.forEach(e=>{n[e]=r}),Object.keys(r.textures).forEach(e=>{n[e]=r.textures[e]}),!i){let i=s.path.dirname(t[0]);r.linkedSheets.forEach((t,s)=>{let a=e([`${i}/${r.data.meta.related_multi_packs[s]}`],t,!0);Object.assign(n,a)})}return n})(e,t,!1)},/** Resolve the the resolution of the asset. */resolver:{test:e=>{let t=e.split("?")[0].split("."),r=t.pop(),i=t.pop();return"json"===r&&h.includes(i)},parse:e=>{let t=e.split(".");return{resolution:parseFloat(o.settings.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},/**
   * Loader plugin that parses sprite sheets!
   * once the JSON has been loaded this checks to see if the JSON is spritesheet data.
   * If it is, we load the spritesheets image and parse the data into PIXI.Spritesheet
   * All textures in the sprite sheet are then added to the cache
   * @ignore
   */loader:{name:"spritesheetLoader",extension:{type:a.ExtensionType.LoadParser,priority:r.LoaderParserPriority.Normal},testParse:async(e,t)=>".json"===s.path.extname(t.src).toLowerCase()&&!!e.frames,async parse(e,t,r){let n=s.path.dirname(t.src);n&&n.lastIndexOf("/")!==n.length-1&&(n+="/");let a=n+e.meta.image;a=(0,i.copySearchParams)(a,t.src);let o=(await r.load([a]))[a],h=new l.Spritesheet(o.baseTexture,e,t.src);await h.parse();let u=e?.meta?.related_multi_packs;if(Array.isArray(u)){let e=[];for(let s of u){if("string"!=typeof s)continue;let a=n+s;t.data?.ignoreMultiPack||(a=(0,i.copySearchParams)(a,t.src),e.push(r.load({src:a,data:{ignoreMultiPack:!0}})))}let s=await Promise.all(e);h.linkedSheets=s,s.forEach(e=>{e.linkedSheets=[h].concat(h.linkedSheets.filter(t=>t!==e))})}return h},unload(e){e.destroy(!0)}}};(0,a.extensions).add(u)}),a("hJAby",function(e,t){n("dnjBg"),n("gUnRb"),n("cBJiN"),n("fAfiT"),n("lRZZq"),n("csfDs"),n("k3E7M"),n("7mSuF"),n("1Bw6C")}),a("dnjBg",function(t,r){e(t.exports,"BitmapFont",()=>_),n("2AhlO");var i=n("MiLFw"),s=n("jetUE"),a=n("6OnST"),o=n("7eheB"),l=n("8oqCw"),h=n("2Am4Q");n("6SstR");var u=n("b3Zcp"),d=n("8z3qN"),c=n("gUnRb"),p=n("lRZZq");n("aT5tV");var f=n("bD0Eo"),m=n("aNTnD"),g=n("02Zs5");let x=class e{/**
   * @param data
   * @param textures
   * @param ownsTextures - Setting to `true` will destroy page textures
   *        when the font is uninstalled.
   */constructor(e,t,r){let[n]=e.info,[l]=e.common,[h]=e.page,[u]=e.distanceField,d=i.getResolutionOfUrl(h.file),c={};this._ownsTextures=r,this.font=n.face,this.size=n.size,this.lineHeight=l.lineHeight/d,this.chars={},this.pageTextures=c;for(let r=0;r<e.page.length;r++){let{id:i,file:n}=e.page[r];c[i]=t instanceof Array?t[r]:t[n],u?.fieldType&&"none"!==u.fieldType&&(c[i].baseTexture.alphaMode=s.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA,c[i].baseTexture.mipmap=s.MIPMAP_MODES.OFF)}for(let t=0;t<e.char.length;t++){let{id:r,page:i}=e.char[t],{x:s,y:n,width:l,height:h,xoffset:u,yoffset:p,xadvance:f}=e.char[t];s/=d,n/=d,l/=d,h/=d,u/=d,p/=d,f/=d;let m=new a.Rectangle(s+c[i].frame.x/d,n+c[i].frame.y/d,l,h);this.chars[r]={xOffset:u,yOffset:p,xAdvance:f,kerning:{},texture:new o.Texture(c[i].baseTexture,m),page:i}}for(let t=0;t<e.kerning.length;t++){let{first:r,second:i,amount:s}=e.kerning[t];r/=d,i/=d,s/=d,this.chars[i]&&(this.chars[i].kerning[r]=s)}this.distanceFieldRange=u?.distanceRange,this.distanceFieldType=u?.fieldType?.toLowerCase()??"none"}/** Remove references to created glyph textures. */destroy(){for(let e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(let e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null}/**
   * Register a new bitmap font.
   * @param data - The
   *        characters map that could be provided as xml or raw string.
   * @param textures - List of textures for each page.
   * @param ownsTextures - Set to `true` to destroy page textures
   *        when the font is uninstalled. By default fonts created with
   *        `BitmapFont.from` or from the `BitmapFontLoader` are `true`.
   * @returns {PIXI.BitmapFont} Result font object with font, size, lineHeight
   *         and char fields.
   */static install(t,r,i){let s;if(t instanceof c.BitmapFontData)s=t;else{let e=(0,p.autoDetectFormat)(t);if(!e)throw Error("Unrecognized data format for font.");s=e.parse(t)}r instanceof o.Texture&&(r=[r]);let n=new e(s,r,i);return e.available[n.font]=n,n}/**
   * Remove bitmap font by name.
   * @param name - Name of the font to uninstall.
   */static uninstall(t){let r=e.available[t];if(!r)throw Error(`No font found named '${t}'`);r.destroy(),delete e.available[t]}/**
   * Generates a bitmap-font for the given style and character set. This does not support
   * kernings yet. With `style` properties, only the following non-layout properties are used:
   *
   * - {@link PIXI.TextStyle#dropShadow|dropShadow}
   * - {@link PIXI.TextStyle#dropShadowDistance|dropShadowDistance}
   * - {@link PIXI.TextStyle#dropShadowColor|dropShadowColor}
   * - {@link PIXI.TextStyle#dropShadowBlur|dropShadowBlur}
   * - {@link PIXI.TextStyle#dropShadowAngle|dropShadowAngle}
   * - {@link PIXI.TextStyle#fill|fill}
   * - {@link PIXI.TextStyle#fillGradientStops|fillGradientStops}
   * - {@link PIXI.TextStyle#fillGradientType|fillGradientType}
   * - {@link PIXI.TextStyle#fontFamily|fontFamily}
   * - {@link PIXI.TextStyle#fontSize|fontSize}
   * - {@link PIXI.TextStyle#fontVariant|fontVariant}
   * - {@link PIXI.TextStyle#fontWeight|fontWeight}
   * - {@link PIXI.TextStyle#lineJoin|lineJoin}
   * - {@link PIXI.TextStyle#miterLimit|miterLimit}
   * - {@link PIXI.TextStyle#stroke|stroke}
   * - {@link PIXI.TextStyle#strokeThickness|strokeThickness}
   * - {@link PIXI.TextStyle#textBaseline|textBaseline}
   * @param name - The name of the custom font to use with BitmapText.
   * @param textStyle - Style options to render with BitmapFont.
   * @param options - Setup options for font or name of the font.
   * @returns Font generated by style options.
   * @example
   * import { BitmapFont, BitmapText } from 'pixi.js';
   *
   * BitmapFont.from('TitleFont', {
   *     fontFamily: 'Arial',
   *     fontSize: 12,
   *     strokeThickness: 2,
   *     fill: 'purple',
   * });
   *
   * const title = new BitmapText('This is the title', { fontName: 'TitleFont' });
   */static from(t,r,i){if(!t)throw Error("[BitmapFont] Property `name` is required.");let{chars:s,padding:n,resolution:a,textureWidth:p,textureHeight:x,..._}=Object.assign({},e.defaultOptions,i),v=(0,f.resolveCharacters)(s),E=r instanceof u.TextStyle?r:new u.TextStyle(r),T=new c.BitmapFontData;T.info[0]={face:E.fontFamily,size:E.fontSize},T.common[0]={lineHeight:E.fontSize};let y=0,A=0,b,S,R,w=0,M=[],P=[];for(let e=0;e<v.length;e++){b||((b=(0,l.settings).ADAPTER.createCanvas()).width=p,b.height=x,S=b.getContext("2d"),R=new h.BaseTexture(b,{resolution:a,..._}),M.push(R),P.push(new o.Texture(R)),T.page.push({id:P.length-1,file:""}));let t=v[e],r=(0,d.TextMetrics).measureText(t,E,!1,b),i=r.width,s=Math.ceil(r.height),u=Math.ceil(("italic"===E.fontStyle?2:1)*i);if(A>=x-s*a){if(0===A)throw Error(`[BitmapFont] textureHeight ${x}px is too small (fontFamily: '${E.fontFamily}', fontSize: ${E.fontSize}px, char: '${t}')`);--e,b=null,S=null,R=null,A=0,y=0,w=0;continue}if(w=Math.max(s+r.fontProperties.descent,w),u*a+y>=p){if(0===y)throw Error(`[BitmapFont] textureWidth ${p}px is too small (fontFamily: '${E.fontFamily}', fontSize: ${E.fontSize}px, char: '${t}')`);--e,A+=w*a,A=Math.ceil(A),y=0,w=0;continue}(0,m.drawGlyph)(b,S,r,y,A,a,E);let c=(0,g.extractCharCode)(r.text);T.char.push({id:c,page:P.length-1,x:y/a,y:A/a,width:u,height:s,xoffset:0,yoffset:0,xadvance:i-(E.dropShadow?E.dropShadowDistance:0)-(E.stroke?E.strokeThickness:0)}),y+=(u+2*n)*a,y=Math.ceil(y)}if(!i?.skipKerning)for(let e=0,t=v.length;e<t;e++){let r=v[e];for(let e=0;e<t;e++){let t=v[e],i=S.measureText(r).width,s=S.measureText(t).width,n=S.measureText(r+t).width-(i+s);n&&T.kerning.push({first:(0,g.extractCharCode)(r),second:(0,g.extractCharCode)(t),amount:n})}}let I=new e(T,P,!0);return void 0!==e.available[t]&&e.uninstall(t),e.available[t]=I,I}};x.ALPHA=[["a","z"],["A","Z"]," "],/**
* This character set includes all decimal digits (from 0 to 9).
* @type {string[][]}
* @example
* BitmapFont.from('ExampleFont', style, { chars: BitmapFont.NUMERIC })
*/x.NUMERIC=[["0","9"]],/**
* This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
* @type {string[][]}
*/x.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],/**
* This character set consists of all the ASCII table.
* @member {string[][]}
* @see http://www.asciitable.com/
*/x.ASCII=[[" ","~"]],/**
* Collection of default options when using `BitmapFont.from`.
* @property {number} [resolution=1] -
* @property {number} [textureWidth=512] -
* @property {number} [textureHeight=512] -
* @property {number} [padding=4] -
* @property {string|string[]|string[][]} chars = PIXI.BitmapFont.ALPHANUMERIC
*/x.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:x.ALPHANUMERIC},/** Collection of available/installed fonts. */x.available={};let _=x}),a("gUnRb",function(t,r){e(t.exports,"BitmapFontData",()=>i);class i{constructor(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}}}),a("lRZZq",function(t,r){e(t.exports,"autoDetectFormat",()=>l);var i=n("k3E7M"),s=n("7mSuF"),a=n("1Bw6C");let o=[i.TextFormat,s.XMLFormat,a.XMLStringFormat];function l(e){for(let t=0;t<o.length;t++)if(o[t].test(e))return o[t];return null}}),a("k3E7M",function(t,r){e(t.exports,"TextFormat",()=>s);var i=n("gUnRb");class s{/**
   * Check if resource refers to txt font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */static test(e){return"string"==typeof e&&e.startsWith("info face=")}/**
   * Convert text font data to a javascript object.
   * @param txt - Raw string data to be converted
   * @returns - Parsed font data
   */static parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let e in t){let i=t[e].match(/^[a-z]+/gm)[0],s=t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),n={};for(let e in s){let t=s[e].split("="),r=t[0],i=t[1].replace(/"/gm,""),a=parseFloat(i),o=isNaN(a)?i:a;n[r]=o}r[i].push(n)}let s=new i.BitmapFontData;return r.info.forEach(e=>s.info.push({face:e.face,size:parseInt(e.size,10)})),r.common.forEach(e=>s.common.push({lineHeight:parseInt(e.lineHeight,10)})),r.page.forEach(e=>s.page.push({id:parseInt(e.id,10),file:e.file})),r.char.forEach(e=>s.char.push({id:parseInt(e.id,10),page:parseInt(e.page,10),x:parseInt(e.x,10),y:parseInt(e.y,10),width:parseInt(e.width,10),height:parseInt(e.height,10),xoffset:parseInt(e.xoffset,10),yoffset:parseInt(e.yoffset,10),xadvance:parseInt(e.xadvance,10)})),r.kerning.forEach(e=>s.kerning.push({first:parseInt(e.first,10),second:parseInt(e.second,10),amount:parseInt(e.amount,10)})),r.distanceField.forEach(e=>s.distanceField.push({distanceRange:parseInt(e.distanceRange,10),fieldType:e.fieldType})),s}}}),a("7mSuF",function(t,r){e(t.exports,"XMLFormat",()=>s);var i=n("gUnRb");class s{/**
   * Check if resource refers to xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */static test(e){return"string"!=typeof e&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&null!==e.getElementsByTagName("info")[0].getAttribute("face")}/**
   * Convert the XML into BitmapFontData that we can use.
   * @param xml
   * @returns - Data to use for BitmapFont
   */static parse(e){let t=new i.BitmapFontData,r=e.getElementsByTagName("info"),s=e.getElementsByTagName("common"),n=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),o=e.getElementsByTagName("kerning"),l=e.getElementsByTagName("distanceField");for(let e=0;e<r.length;e++)t.info.push({face:r[e].getAttribute("face"),size:parseInt(r[e].getAttribute("size"),10)});for(let e=0;e<s.length;e++)t.common.push({lineHeight:parseInt(s[e].getAttribute("lineHeight"),10)});for(let e=0;e<n.length;e++)t.page.push({id:parseInt(n[e].getAttribute("id"),10)||0,file:n[e].getAttribute("file")});for(let e=0;e<a.length;e++){let r=a[e];t.char.push({id:parseInt(r.getAttribute("id"),10),page:parseInt(r.getAttribute("page"),10)||0,x:parseInt(r.getAttribute("x"),10),y:parseInt(r.getAttribute("y"),10),width:parseInt(r.getAttribute("width"),10),height:parseInt(r.getAttribute("height"),10),xoffset:parseInt(r.getAttribute("xoffset"),10),yoffset:parseInt(r.getAttribute("yoffset"),10),xadvance:parseInt(r.getAttribute("xadvance"),10)})}for(let e=0;e<o.length;e++)t.kerning.push({first:parseInt(o[e].getAttribute("first"),10),second:parseInt(o[e].getAttribute("second"),10),amount:parseInt(o[e].getAttribute("amount"),10)});for(let e=0;e<l.length;e++)t.distanceField.push({fieldType:l[e].getAttribute("fieldType"),distanceRange:parseInt(l[e].getAttribute("distanceRange"),10)});return t}}}),a("1Bw6C",function(t,r){e(t.exports,"XMLStringFormat",()=>a),n("2AhlO");var i=n("8oqCw"),s=n("7mSuF");class a{/**
   * Check if resource refers to text xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */static test(e){return!!("string"==typeof e&&e.includes("<font>"))&&(0,s.XMLFormat).test((0,i.settings).ADAPTER.parseXML(e))}/**
   * Convert the text XML into BitmapFontData that we can use.
   * @param xmlTxt
   * @returns - Data to use for BitmapFont
   */static parse(e){return(0,s.XMLFormat).parse((0,i.settings).ADAPTER.parseXML(e))}}}),a("aT5tV",function(e,t){n("aNTnD"),n("02Zs5"),n("2cZnF"),n("bD0Eo"),n("c9fvY")}),a("aNTnD",function(t,r){e(t.exports,"drawGlyph",()=>a),n("2AhlO");var i=n("5xg5I"),s=n("2cZnF");function a(e,t,r,n,a,o,l){let h=r.text,u=r.fontProperties;t.translate(n,a),t.scale(o,o);let d=l.strokeThickness/2,c=-(l.strokeThickness/2);if(t.font=l.toFontString(),t.lineWidth=l.strokeThickness,t.textBaseline=l.textBaseline,t.lineJoin=l.lineJoin,t.miterLimit=l.miterLimit,t.fillStyle=(0,s.generateFillStyle)(e,t,l,o,[h],r),t.strokeStyle=l.stroke,l.dropShadow){let e=l.dropShadowColor,r=l.dropShadowBlur*o,s=l.dropShadowDistance*o;t.shadowColor=(0,i.Color).shared.setValue(e).setAlpha(l.dropShadowAlpha).toRgbaString(),t.shadowBlur=r,t.shadowOffsetX=Math.cos(l.dropShadowAngle)*s,t.shadowOffsetY=Math.sin(l.dropShadowAngle)*s}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;l.stroke&&l.strokeThickness&&t.strokeText(h,d,c+r.lineHeight-u.descent),l.fill&&t.fillText(h,d,c+r.lineHeight-u.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}}),a("2cZnF",function(t,r){e(t.exports,"generateFillStyle",()=>s),n("6SstR");var i=n("XkAkK");function s(e,t,r,s,n,a){let o;let l=r.fill;if(!Array.isArray(l))return l;if(1===l.length)return l[0];let h=r.dropShadow?r.dropShadowDistance:0,u=r.padding||0,d=e.width/s-h-2*u,c=e.height/s-h-2*u,p=l.slice(),f=r.fillGradientStops.slice();if(!f.length){let e=p.length+1;for(let t=1;t<e;++t)f.push(t/e)}if(p.unshift(l[0]),f.unshift(0),p.push(l[l.length-1]),f.push(1),r.fillGradientType===i.TEXT_GRADIENT.LINEAR_VERTICAL){o=t.createLinearGradient(d/2,u,d/2,c+u);let e=0,i=(a.fontProperties.fontSize+r.strokeThickness)/c;for(let t=0;t<n.length;t++){let r=a.lineHeight*t;for(let t=0;t<p.length;t++){let s=0;s="number"==typeof f[t]?f[t]:t/p.length;let n=r/c+s*i,a=Math.max(e,n);a=Math.min(a,1),o.addColorStop(a,p[t]),e=a}}}else{o=t.createLinearGradient(u,c/2,d+u,c/2);let e=p.length+1,r=1;for(let t=0;t<p.length;t++){let i;i="number"==typeof f[t]?f[t]:r/e,o.addColorStop(i,p[t]),r++}}return o}}),a("02Zs5",function(t,r){e(t.exports,"extractCharCode",()=>i);function i(e){return e.codePointAt?e.codePointAt(0):e.charCodeAt(0)}}),a("bD0Eo",function(t,r){e(t.exports,"resolveCharacters",()=>s);var i=n("c9fvY");function s(e){"string"==typeof e&&(e=[e]);let t=[];for(let r=0,s=e.length;r<s;r++){let s=e[r];if(Array.isArray(s)){if(2!==s.length)throw Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);let e=s[0].charCodeAt(0),r=s[1].charCodeAt(0);if(r<e)throw Error("[BitmapFont]: Invalid character range.");for(let i=e;i<=r;i++)t.push(String.fromCharCode(i))}else t.push(...(0,i.splitTextToCharacters)(s))}if(0===t.length)throw Error("[BitmapFont]: Empty set when resolving characters.");return t}}),a("c9fvY",function(t,r){e(t.exports,"splitTextToCharacters",()=>i);function i(e){return Array.from?Array.from(e):e.split("")}}),a("cBJiN",function(e,t){n("2AhlO");var r=n("5xg5I"),i=n("lEibW"),s=n("8oqCw"),a=n("iVQEG"),o=n("7eheB"),l=n("MiLFw"),h=n("jetUE"),u=n("e1ifo");n("dyEru");var d=n("7uhWd");n("9w5R4");var c=n("5H8Cm"),p=n("2YBxg"),f=n("llDtr"),m=n("dnjBg"),g=n("7mHAB"),x=n("fxSjU");n("aT5tV");var _=n("c9fvY"),v=n("02Zs5");let E=[],T=[],y=[],A=class e extends d.Container{/**
   * @param text - A string that you would like the text to display.
   * @param style - The style parameters.
   * @param {string} style.fontName - The installed BitmapFont name.
   * @param {number} [style.fontSize] - The size of the font in pixels, e.g. 24. If undefined,
   *.     this will default to the BitmapFont size.
   * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center', 'right' or 'justify'),
   *      does not affect single line text.
   * @param {PIXI.ColorSource} [style.tint=0xFFFFFF] - The tint color.
   * @param {number} [style.letterSpacing=0] - The amount of spacing between letters.
   * @param {number} [style.maxWidth=0] - The max width of the text before line wrapping.
   */constructor(t,n={}){super();let{align:a,tint:o,maxWidth:l,letterSpacing:h,fontName:u,fontSize:d}=Object.assign({},e.styleDefaults,n);if(!m.BitmapFont.available[u])throw Error(`Missing BitmapFont "${u}"`);this._activePagesMeshData=[],this._textWidth=0,this._textHeight=0,this._align=a,this._tintColor=new r.Color(o),this._font=void 0,this._fontName=u,this._fontSize=d,this.text=t,this._maxWidth=l,this._maxLineHeight=0,this._letterSpacing=h,this._anchor=new i.ObservablePoint(()=>{this.dirty=!0},this,0,0),this._roundPixels=s.settings.ROUND_PIXELS,this.dirty=!0,this._resolution=s.settings.RESOLUTION,this._autoResolution=!0,this._textureCache={}}/** Renders text and updates it when needed. This should only be called if the BitmapFont is regenerated. */updateText(){let e=m.BitmapFont.available[this._fontName],t=this.fontSize,r=t/e.size,i=new a.Point,s=[],n=[],d=[],A=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",b=(0,_.splitTextToCharacters)(A),S=this._maxWidth*e.size/t,R="none"===e.distanceFieldType?E:T,w=null,M=0,P=0,I=0,C=-1,D=0,O=0,B=0,F=0;for(let t=0;t<b.length;t++){let r=b[t],h=(0,v.extractCharCode)(r);if(/(?:\s)/.test(r)&&(C=t,D=M,F++),"\r"===r||r===`
`){n.push(M),d.push(-1),P=Math.max(P,M),++I,++O,i.x=0,i.y+=e.lineHeight,w=null,F=0;continue}let u=e.chars[h];if(!u)continue;w&&u.kerning[w]&&(i.x+=u.kerning[w]);let c=y.pop()||{texture:o.Texture.EMPTY,line:0,charCode:0,prevSpaces:0,position:new a.Point};c.texture=u.texture,c.line=I,c.charCode=h,c.position.x=Math.round(i.x+u.xOffset+this._letterSpacing/2),c.position.y=Math.round(i.y+u.yOffset),c.prevSpaces=F,s.push(c),M=c.position.x+Math.max(u.xAdvance-u.xOffset,u.texture.orig.width),i.x+=u.xAdvance+this._letterSpacing,B=Math.max(B,u.yOffset+u.texture.height),w=h,-1!==C&&S>0&&i.x>S&&(++O,l.removeItems(s,1+C-O,1+t-C),t=C,C=-1,n.push(D),d.push(s.length>0?s[s.length-1].prevSpaces:0),P=Math.max(P,D),I++,i.x=0,i.y+=e.lineHeight,w=null,F=0)}let L=b[b.length-1];"\r"!==L&&L!==`
`&&(/(?:\s)/.test(L)&&(M=D),n.push(M),P=Math.max(P,M),d.push(-1));let N=[];for(let e=0;e<=I;e++){let t=0;"right"===this._align?t=P-n[e]:"center"===this._align?t=(P-n[e])/2:"justify"===this._align&&(t=d[e]<0?0:(P-n[e])/d[e]),N.push(t)}let k=s.length,U={},G=[],H=this._activePagesMeshData;R.push(...H);for(let t=0;t<k;t++){let r=s[t].texture,i=r.baseTexture.uid;if(!U[i]){let t=R.pop();if(!t){let r,i;let s=new c.MeshGeometry;"none"===e.distanceFieldType?(r=new p.MeshMaterial(o.Texture.EMPTY),i=h.BLEND_MODES.NORMAL):(r=new p.MeshMaterial(o.Texture.EMPTY,{program:(0,u.Program).from(x.default,g.default),uniforms:{uFWidth:0}}),i=h.BLEND_MODES.NORMAL_NPM);let n=new f.Mesh(s,r);n.blendMode=i,t={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:n,vertices:null,uvs:null,indices:null}}t.index=0,t.indexCount=0,t.vertexCount=0,t.uvsCount=0,t.total=0;let{_textureCache:s}=this;s[i]=s[i]||new o.Texture(r.baseTexture),t.mesh.texture=s[i],t.mesh.tint=this._tintColor.value,G.push(t),U[i]=t}U[i].total++}for(let e=0;e<H.length;e++)G.includes(H[e])||this.removeChild(H[e].mesh);for(let e=0;e<G.length;e++)G[e].mesh.parent!==this&&this.addChild(G[e].mesh);for(let e in this._activePagesMeshData=G,U){let t=U[e],r=t.total;if(!(t.indices?.length>6*r)||t.vertices.length<2*f.Mesh.BATCHABLE_SIZE)t.vertices=new Float32Array(8*r),t.uvs=new Float32Array(8*r),t.indices=new Uint16Array(6*r);else{let e=t.total,r=t.vertices;for(let t=8*e;t<r.length;t++)r[t]=0}t.mesh.size=6*r}for(let e=0;e<k;e++){let t=s[e],i=t.position.x+N[t.line]*("justify"===this._align?t.prevSpaces:1);this._roundPixels&&(i=Math.round(i));let n=i*r,a=t.position.y*r,o=t.texture,l=U[o.baseTexture.uid],h=o.frame,u=o._uvs,d=l.index++;l.indices[6*d+0]=0+4*d,l.indices[6*d+1]=1+4*d,l.indices[6*d+2]=2+4*d,l.indices[6*d+3]=0+4*d,l.indices[6*d+4]=2+4*d,l.indices[6*d+5]=3+4*d,l.vertices[8*d+0]=n,l.vertices[8*d+1]=a,l.vertices[8*d+2]=n+h.width*r,l.vertices[8*d+3]=a,l.vertices[8*d+4]=n+h.width*r,l.vertices[8*d+5]=a+h.height*r,l.vertices[8*d+6]=n,l.vertices[8*d+7]=a+h.height*r,l.uvs[8*d+0]=u.x0,l.uvs[8*d+1]=u.y0,l.uvs[8*d+2]=u.x1,l.uvs[8*d+3]=u.y1,l.uvs[8*d+4]=u.x2,l.uvs[8*d+5]=u.y2,l.uvs[8*d+6]=u.x3,l.uvs[8*d+7]=u.y3}for(let t in this._textWidth=P*r,this._textHeight=(i.y+e.lineHeight)*r,U){let e=U[t];if(0!==this.anchor.x||0!==this.anchor.y){let t=0,r=this._textWidth*this.anchor.x,i=this._textHeight*this.anchor.y;for(let s=0;s<e.total;s++)e.vertices[t++]-=r,e.vertices[t++]-=i,e.vertices[t++]-=r,e.vertices[t++]-=i,e.vertices[t++]-=r,e.vertices[t++]-=i,e.vertices[t++]-=r,e.vertices[t++]-=i}this._maxLineHeight=B*r;let i=e.mesh.geometry.getBuffer("aVertexPosition"),s=e.mesh.geometry.getBuffer("aTextureCoord"),n=e.mesh.geometry.getIndex();i.data=e.vertices,s.data=e.uvs,n.data=e.indices,i.update(),s.update(),n.update()}for(let e=0;e<s.length;e++)y.push(s[e]);this._font=e,this.dirty=!1}updateTransform(){this.validate(),this.containerUpdateTransform()}_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);let{distanceFieldRange:t,distanceFieldType:r,size:i}=m.BitmapFont.available[this._fontName];if("none"!==r){let{a:r,b:s,c:n,d:a}=this.worldTransform,o=(Math.abs(Math.sqrt(r*r+s*s))+Math.abs(Math.sqrt(n*n+a*a)))/2,l=this.fontSize/i,h=e._view.resolution;for(let e of this._activePagesMeshData)e.mesh.shader.uniforms.uFWidth=o*t*l*h}super._render(e)}/**
   * Validates text before calling parent's getLocalBounds
   * @returns - The rectangular bounding area
   */getLocalBounds(){return this.validate(),super.getLocalBounds()}/**
   * Updates text when needed
   * @private
   */validate(){let e=m.BitmapFont.available[this._fontName];if(!e)throw Error(`Missing BitmapFont "${this._fontName}"`);this._font!==e&&(this.dirty=!0),this.dirty&&this.updateText()}/**
   * The tint of the BitmapText object.
   * @default 0xffffff
   */get tint(){return this._tintColor.value}set tint(e){if(this.tint!==e){this._tintColor.setValue(e);for(let t=0;t<this._activePagesMeshData.length;t++)this._activePagesMeshData[t].mesh.tint=e}}/**
   * The alignment of the BitmapText object.
   * @member {string}
   * @default 'left'
   */get align(){return this._align}set align(e){this._align!==e&&(this._align=e,this.dirty=!0)}/** The name of the BitmapFont. */get fontName(){return this._fontName}set fontName(e){if(!m.BitmapFont.available[e])throw Error(`Missing BitmapFont "${e}"`);this._fontName!==e&&(this._fontName=e,this.dirty=!0)}/** The size of the font to display. */get fontSize(){return this._fontSize??m.BitmapFont.available[this._fontName].size}set fontSize(e){this._fontSize!==e&&(this._fontSize=e,this.dirty=!0)}/**
   * The anchor sets the origin point of the text.
   *
   * The default is `(0,0)`, this means the text's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
   */get anchor(){return this._anchor}set anchor(e){"number"==typeof e?this._anchor.set(e):this._anchor.copyFrom(e)}/** The text of the BitmapText object. */get text(){return this._text}set text(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)}/**
   * The max width of this bitmap text in pixels. If the text provided is longer than the
   * value provided, line breaks will be automatically inserted in the last whitespace.
   * Disable by setting the value to 0.
   */get maxWidth(){return this._maxWidth}set maxWidth(e){this._maxWidth!==e&&(this._maxWidth=e,this.dirty=!0)}/**
   * The max line height. This is useful when trying to use the total height of the Text,
   * i.e. when trying to vertically align.
   * @readonly
   */get maxLineHeight(){return this.validate(),this._maxLineHeight}/**
   * The width of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */get textWidth(){return this.validate(),this._textWidth}/** Additional space between characters. */get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.dirty=!0)}/**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
   * @default PIXI.settings.ROUND_PIXELS
   */get roundPixels(){return this._roundPixels}set roundPixels(e){e!==this._roundPixels&&(this._roundPixels=e,this.dirty=!0)}/**
   * The height of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */get textHeight(){return this.validate(),this._textHeight}/**
   * The resolution / device pixel ratio of the canvas.
   *
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @default 1
   */get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}destroy(e){let{_textureCache:t}=this,r="none"===m.BitmapFont.available[this._fontName].distanceFieldType?E:T;for(let e of(r.push(...this._activePagesMeshData),this._activePagesMeshData))this.removeChild(e.mesh);for(let e in this._activePagesMeshData=[],r.filter(e=>t[e.mesh.texture.baseTexture.uid]).forEach(e=>{e.mesh.texture=o.Texture.EMPTY}),t)t[e].destroy(),delete t[e];this._font=null,this._tintColor=null,this._textureCache=null,super.destroy(e)}};A.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0}}),a("7mHAB",function(t,r){e(t.exports,"default",()=>i);var i=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`}),a("fxSjU",function(t,r){e(t.exports,"default",()=>i);var i=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`}),a("fAfiT",function(e,t){}),a("csfDs",function(e,t){n("9t9WZ");var r=n("djhuW"),i=n("jqNno");n("2AhlO");var s=n("glXXo"),a=n("MiLFw"),o=n("8oqCw"),l=n("dnjBg");n("lRZZq");var h=n("k3E7M"),u=n("1Bw6C");let d=[".xml",".fnt"],c={extension:{type:s.ExtensionType.LoadParser,priority:r.LoaderParserPriority.Normal},name:"loadBitmapFont",test:e=>d.includes(a.path.extname(e).toLowerCase()),testParse:async e=>(0,h.TextFormat).test(e)||(0,u.XMLStringFormat).test(e),async parse(e,t,r){let s=(0,h.TextFormat).test(e)?(0,h.TextFormat).parse(e):(0,u.XMLStringFormat).parse(e),{src:n}=t,{page:o}=s,d=[];for(let e=0;e<o.length;++e){let t=o[e].file,r=a.path.join(a.path.dirname(n),t);r=(0,i.copySearchParams)(r,n),d.push(r)}let c=await r.load(d),p=d.map(e=>c[e]);return(0,l.BitmapFont).install(s,p,!0)},load:async(e,t)=>(await (0,o.settings).ADAPTER.fetch(e)).text(),unload(e){e.destroy()}};(0,s.extensions).add(c)}),a("g4t4U",function(e,t){n("6RMJH"),n("dXT8A")}),a("6RMJH",function(e,t){n("2AhlO");var r=n("7eheB"),i=n("8oqCw"),s=n("6OnST"),a=n("MiLFw");n("cJJeG");var o=n("OYVnz");n("6SstR");var l=n("b3Zcp"),h=n("dXT8A");let u=class e extends o.Sprite{/**
   * @param {string} [text] - Text contents
   * @param {PIXI.HTMLTextStyle|PIXI.TextStyle|PIXI.ITextStyle} [style] - Style setting to use.
   *        Strongly recommend using an HTMLTextStyle object. Providing a PIXI.TextStyle
   *        will convert the TextStyle to an HTMLTextStyle and will no longer be linked.
   */constructor(t="",n={}){super(r.Texture.EMPTY),this._text=null,this._style=null,this._autoResolution=!0,this.localStyleID=-1,this.dirty=!1,this._updateID=0,this.ownsStyle=!1;let a=new Image,o=(0,r.Texture).from(a,{scaleMode:i.settings.SCALE_MODE,resourceOptions:{autoLoad:!1}});o.orig=new s.Rectangle,o.trim=new s.Rectangle,this.texture=o;let l="http://www.w3.org/2000/svg",h="http://www.w3.org/1999/xhtml",u=document.createElementNS(l,"svg"),d=document.createElementNS(l,"foreignObject"),c=document.createElementNS(h,"div"),p=document.createElementNS(h,"style");d.setAttribute("width","10000"),d.setAttribute("height","10000"),d.style.overflow="hidden",u.appendChild(d),this.maxWidth=e.defaultMaxWidth,this.maxHeight=e.defaultMaxHeight,this._domElement=c,this._styleElement=p,this._svgRoot=u,this._foreignObject=d,this._foreignObject.appendChild(p),this._foreignObject.appendChild(c),this._image=a,this._loadImage=new Image,this._autoResolution=e.defaultAutoResolution,this._resolution=e.defaultResolution??i.settings.RESOLUTION,this.text=t,this.style=n}/**
   * Calculate the size of the output text without actually drawing it.
   * This includes the `padding` in the `style` object.
   * This can be used as a fast-pass to do things like text-fitting.
   * @param {object} [overrides] - Overrides for the text, style, and resolution.
   * @param {string} [overrides.text] - The text to measure, if not specified, the current text is used.
   * @param {PIXI.HTMLTextStyle} [overrides.style] - The style to measure, if not specified, the current style is used.
   * @param {number} [overrides.resolution] - The resolution to measure, if not specified, the current resolution is used.
   * @returns {PIXI.ISize} Width and height of the measured text.
   */measureText(e){let{text:t,style:r,resolution:i}=Object.assign({text:this._text,style:this._style,resolution:this._resolution},e);Object.assign(this._domElement,{innerHTML:t,style:r.toCSS(i)}),this._styleElement.textContent=r.toGlobalCSS(),document.body.appendChild(this._svgRoot);let s=this._domElement.getBoundingClientRect();this._svgRoot.remove();let{width:n,height:a}=s;(n>this.maxWidth||a>this.maxHeight)&&console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");let o=Math.min(this.maxWidth,Math.ceil(n)),l=Math.min(this.maxHeight,Math.ceil(a));return this._svgRoot.setAttribute("width",o.toString()),this._svgRoot.setAttribute("height",l.toString()),t!==this._text&&(this._domElement.innerHTML=this._text),r!==this._style&&(Object.assign(this._domElement,{style:this._style?.toCSS(i)}),this._styleElement.textContent=this._style?.toGlobalCSS()),{width:o+2*r.padding,height:l+2*r.padding}}/**
   * Manually refresh the text.
   * @public
   * @param {boolean} respectDirty - Whether to abort updating the
   *        text if the Text isn't dirty and the function is called.
   */async updateText(e=!0){let{style:t,_image:r,_loadImage:i}=this;if(this.localStyleID!==t.styleID&&(this.dirty=!0,this.localStyleID=t.styleID),!this.dirty&&e)return;let{width:s,height:n}=this.measureText();r.width=i.width=Math.ceil(Math.max(1,s)),r.height=i.height=Math.ceil(Math.max(1,n)),this._updateID++;let a=this._updateID;await new Promise(e=>{i.onload=async()=>{if(a<this._updateID){e();return}await t.onBeforeDraw(),r.src=i.src,i.onload=null,i.src="",this.updateTexture(),e()};let s=new XMLSerializer().serializeToString(this._svgRoot);i.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(s)}`})}/** The raw image element that is rendered under-the-hood. */get source(){return this._image}/**
   * Update the texture resource.
   * @private
   */updateTexture(){let{style:e,texture:t,_image:r,resolution:i}=this,{padding:s}=e,{baseTexture:n}=t;t.trim.width=t._frame.width=r.width/i,t.trim.height=t._frame.height=r.height/i,t.trim.x=-s,t.trim.y=-s,t.orig.width=t._frame.width-2*s,t.orig.height=t._frame.height-2*s,this._onTextureUpdate(),n.setRealSize(r.width,r.height,i),this.dirty=!1}/**
   * Renders the object using the WebGL renderer
   * @param {PIXI.Renderer} renderer - The renderer
   * @private
   */_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._render(e)}/**
   * Renders the object using the Canvas Renderer.
   * @private
   * @param {PIXI.CanvasRenderer} renderer - The renderer
   */_renderCanvas(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._renderCanvas(e)}/**
   * Get the local bounds.
   * @param {PIXI.Rectangle} rect - Input rectangle.
   * @returns {PIXI.Rectangle} Local bounds
   */getLocalBounds(e){return this.updateText(!0),super.getLocalBounds(e)}_calculateBounds(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)}/**
   * Handle dirty style changes
   * @private
   */_onStyleChange(){this.dirty=!0}/**
   * Destroy this Text object. Don't use after calling.
   * @param {boolean|object} options - Same as Sprite destroy options.
   */destroy(t){"boolean"==typeof t&&(t={children:t}),t=Object.assign({},e.defaultDestroyOptions,t),super.destroy(t),this.ownsStyle&&this._style?.cleanFonts(),this._style=null,this._svgRoot?.remove(),this._svgRoot=null,this._domElement?.remove(),this._domElement=null,this._foreignObject?.remove(),this._foreignObject=null,this._styleElement?.remove(),this._styleElement=null,this._loadImage.src="",this._loadImage.onload=null,this._loadImage=null,this._image.src="",this._image=null}/**
   * Get the width in pixels.
   * @member {number}
   */get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._image.width/this.resolution}set width(e){this.updateText(!0);let t=a.sign(this.scale.x)||1;this.scale.x=t*e/this._image.width/this.resolution,this._width=e}/**
   * Get the height in pixels.
   * @member {number}
   */get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._image.height/this.resolution}set height(e){this.updateText(!0);let t=a.sign(this.scale.y)||1;this.scale.y=t*e/this._image.height/this.resolution,this._height=e}/** The base style to render with text. */get style(){return this._style}set style(e){this._style!==e&&((e=e||{})instanceof h.HTMLTextStyle?(this.ownsStyle=!1,this._style=e):e instanceof l.TextStyle?(console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),this.ownsStyle=!0,this._style=(0,h.HTMLTextStyle).from(e)):(this.ownsStyle=!0,this._style=new h.HTMLTextStyle(e)),this.localStyleID=-1,this.dirty=!0)}/**
   * Contents of text. This can be HTML text and include tags.
   * @example
   * const text = new HTMLText('This is a <em>styled</em> text!');
   * @member {string}
   */get text(){return this._text}set text(e){e=String(""===e||null==e?" ":e),e=this.sanitiseText(e),this._text!==e&&(this._text=e,this.dirty=!0)}/**
   * The resolution / device pixel ratio of the canvas.
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @member {number}
   * @default 1
   */get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}/**
   * Sanitise text - replace `<br>` with `<br/>`, `&nbsp;` with `&#160;`
   * @param text
   * @see https://www.sitepoint.com/community/t/xhtml-1-0-transitional-xml-parsing-error-entity-nbsp-not-defined/3392/3
   */sanitiseText(e){return e.replace(/<br>/gi,"<br/>").replace(/<hr>/gi,"<hr/>").replace(/&nbsp;/gi,"&#160;")}};u.defaultDestroyOptions={texture:!0,children:!1,baseTexture:!0},/** Default maxWidth, set at construction */u.defaultMaxWidth=2024,/** Default maxHeight, set at construction */u.defaultMaxHeight=2024,/** Default autoResolution for all HTMLText objects */u.defaultAutoResolution=!0}),a("dXT8A",function(t,r){e(t.exports,"HTMLTextStyle",()=>l),n("2AhlO");var i=n("8oqCw"),s=n("MiLFw");n("6SstR");var a=n("b3Zcp");let o=class e extends a.TextStyle{constructor(){super(...arguments),this._fonts=[],this._overrides=[],this._stylesheet="",this.fontsDirty=!1}/**
   * Convert a TextStyle to HTMLTextStyle
   * @param originalStyle
   * @example
   * import {TextStyle } from 'pixi.js';
   * import {HTMLTextStyle} from '@pixi/text-html';
   * const style = new TextStyle();
   * const htmlStyle = HTMLTextStyle.from(style);
   */static from(t){return new e(Object.keys(e.defaultOptions).reduce((e,r)=>({...e,[r]:t[r]}),{}))}/** Clear the current font */cleanFonts(){this._fonts.length>0&&(this._fonts.forEach(t=>{URL.revokeObjectURL(t.src),t.refs--,0===t.refs&&(t.fontFace&&document.fonts.delete(t.fontFace),delete e.availableFonts[t.originalUrl])}),this.fontFamily="Arial",this._fonts.length=0,this.styleID++,this.fontsDirty=!0)}/**
   * Because of how HTMLText renders, fonts need to be imported
   * @param url
   * @param options
   */loadFont(t,r={}){let{availableFonts:n}=e;if(n[t]){let e=n[t];return this._fonts.push(e),e.refs++,this.styleID++,this.fontsDirty=!0,Promise.resolve()}return(0,i.settings).ADAPTER.fetch(t).then(e=>e.blob()).then(async e=>new Promise((t,r)=>{let i=URL.createObjectURL(e),s=new FileReader;s.onload=()=>t([i,s.result]),s.onerror=r,s.readAsDataURL(e)})).then(async([e,i])=>{let a=Object.assign({family:s.path.basename(t,s.path.extname(t)),weight:"normal",style:"normal",display:"auto",src:e,dataSrc:i,refs:1,originalUrl:t,fontFace:null},r);n[t]=a,this._fonts.push(a),this.styleID++;let o=new FontFace(a.family,`url(${a.src})`,{weight:a.weight,style:a.style,display:a.display});a.fontFace=o,await o.load(),document.fonts.add(o),await document.fonts.ready,this.styleID++,this.fontsDirty=!0})}/**
   * Add a style override, this can be any CSS property
   * it will override any built-in style. This is the
   * property and the value as a string (e.g., `color: red`).
   * This will override any other internal style.
   * @param {string} value - CSS style(s) to add.
   * @example
   * style.addOverride('background-color: red');
   */addOverride(...e){let t=e.filter(e=>!this._overrides.includes(e));t.length>0&&(this._overrides.push(...t),this.styleID++)}/**
   * Remove any overrides that match the value.
   * @param {string} value - CSS style to remove.
   * @example
   * style.removeOverride('background-color: red');
   */removeOverride(...e){let t=e.filter(e=>this._overrides.includes(e));t.length>0&&(this._overrides=this._overrides.filter(e=>!t.includes(e)),this.styleID++)}/**
   * Internally converts all of the style properties into CSS equivalents.
   * @param scale
   * @returns The CSS style string, for setting `style` property of root HTMLElement.
   */toCSS(e){return[`transform: scale(${e})`,"transform-origin: top left","display: inline-block",`color: ${this.normalizeColor(this.fill)}`,`font-size: ${this.fontSize}px`,`font-family: ${this.fontFamily}`,`font-weight: ${this.fontWeight}`,`font-style: ${this.fontStyle}`,`font-variant: ${this.fontVariant}`,`letter-spacing: ${this.letterSpacing}px`,`text-align: ${this.align}`,`padding: ${this.padding}px`,`white-space: ${this.whiteSpace}`,...this.lineHeight?[`line-height: ${this.lineHeight}px`]:[],...this.wordWrap?[`word-wrap: ${this.breakWords?"break-all":"break-word"}`,`max-width: ${this.wordWrapWidth}px`]:[],...this.strokeThickness?[`-webkit-text-stroke-width: ${this.strokeThickness}px`,`-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,`text-stroke-width: ${this.strokeThickness}px`,`text-stroke-color: ${this.normalizeColor(this.stroke)}`,"paint-order: stroke"]:[],...this.dropShadow?[this.dropShadowToCSS()]:[],...this._overrides].join(";")}/** Get the font CSS styles from the loaded font, If available. */toGlobalCSS(){return this._fonts.reduce((e,t)=>`${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style};
                font-display: ${t.display};
            }`,this._stylesheet)}/** Internal stylesheet contents, useful for creating rules for rendering */get stylesheet(){return this._stylesheet}set stylesheet(e){this._stylesheet!==e&&(this._stylesheet=e,this.styleID++)}/**
   * Convert numerical colors into hex-strings
   * @param color
   */normalizeColor(e){return Array.isArray(e)&&(e=s.rgb2hex(e)),"number"==typeof e?s.hex2string(e):e}/** Convert the internal drop-shadow settings to CSS text-shadow */dropShadowToCSS(){let e=this.normalizeColor(this.dropShadowColor),t=this.dropShadowAlpha,r=Math.round(Math.cos(this.dropShadowAngle)*this.dropShadowDistance),i=Math.round(Math.sin(this.dropShadowAngle)*this.dropShadowDistance);e.startsWith("#")&&t<1&&(e+=(255*t|0).toString(16).padStart(2,"0"));let s=`${r}px ${i}px`;return this.dropShadowBlur>0?`text-shadow: ${s} ${this.dropShadowBlur}px ${e}`:`text-shadow: ${s} ${e}`}/** Resets all properties to the defaults specified in TextStyle.prototype._default */reset(){Object.assign(this,e.defaultOptions)}/**
   * Called after the image is loaded but before drawing to the canvas.
   * Mostly used to handle Safari's font loading bug.
   * @ignore
   */onBeforeDraw(){let{fontsDirty:e}=this;return this.fontsDirty=!1,this.isSafari&&this._fonts.length>0&&e?new Promise(e=>setTimeout(e,100)):Promise.resolve()}/**
   * Proving that Safari is the new IE
   * @ignore
   */get isSafari(){let{userAgent:e}=(0,i.settings).ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(e)}set fillGradientStops(e){console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")}get fillGradientStops(){return super.fillGradientStops}set fillGradientType(e){console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")}get fillGradientType(){return super.fillGradientType}set miterLimit(e){console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")}get miterLimit(){return super.miterLimit}set trim(e){console.warn("[HTMLTextStyle] trim is not supported by HTMLText")}get trim(){return super.trim}set textBaseline(e){console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")}get textBaseline(){return super.textBaseline}set leading(e){console.warn("[HTMLTextStyle] leading is not supported by HTMLText")}get leading(){return super.leading}set lineJoin(e){console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")}get lineJoin(){return super.lineJoin}};o.availableFonts={},/**
* List of default options, these are largely the same as TextStyle,
* with the exception of whiteSpace, which is set to 'normal' by default.
*/o.defaultOptions={/** Align */align:"left",/** Break words */breakWords:!1,/** Drop shadow */dropShadow:!1,/** Drop shadow alpha */dropShadowAlpha:1,/**
   * Drop shadow angle
   * @type {number}
   * @default Math.PI / 6
   */dropShadowAngle:Math.PI/6,/** Drop shadow blur */dropShadowBlur:0,/** Drop shadow color */dropShadowColor:"black",/** Drop shadow distance */dropShadowDistance:5,/** Fill */fill:"black",/** Font family */fontFamily:"Arial",/** Font size */fontSize:26,/** Font style */fontStyle:"normal",/** Font variant */fontVariant:"normal",/** Font weight */fontWeight:"normal",/** Letter spacing */letterSpacing:0,/** Line height */lineHeight:0,/** Padding */padding:0,/** Stroke */stroke:"black",/** Stroke thickness */strokeThickness:0,/** White space */whiteSpace:"normal",/** Word wrap */wordWrap:!1,/** Word wrap width */wordWrapWidth:100};let l=o});//# sourceMappingURL=index.862a6eda.js.map

//# sourceMappingURL=index.862a6eda.js.map
