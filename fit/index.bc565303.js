function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequireedcf;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireedcf=r),r.register("io0Tf",(function(t,n){e(t.exports,"attach",(()=>o));var i=r("bW9gS");function o(e){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("Can not attach canvas");const t=(null==e?void 0:e.canvas)||(0,i.create)(),n=(null==e?void 0:e.container)||t.parentElement;if(null==n)throw new Error("Must supply a container to attach the canvas to if not already appended");return n.appendChild(t),n===document.body&&(t.style.display="block"),{canvas:t,container:n}}})),r.register("bW9gS",(function(t,n){e(t.exports,"create",(()=>o));var i=r("ckcgQ");function o(e){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("Can not create canvas element");const t=document.createElement("canvas"),n=(null==e?void 0:e.width)??t.width,r=(null==e?void 0:e.height)??t.height;return(0,i.setCanvasSize)({canvas:t,width:n,height:r}),t}})),r.register("ckcgQ",(function(t,n){function i(e){if("undefined"==typeof window)throw new Error("Can not access window");const t=window.devicePixelRatio;return e.canvas.width=e.width,e.canvas.height=e.height,r({canvas:e.canvas,dpr:t})}function r(e){const t=e.canvas,n=t.width,i=t.height;return t.width=n*e.dpr,t.height=i*e.dpr,t.style.width=n+"px",t.style.height=i+"px",t}e(t.exports,"setCanvasSize",(()=>i)),e(t.exports,"setCanvasDpr",(()=>r))})),r.register("7XNOC",(function(t,n){e(t.exports,"BaseApplication",(()=>f)),e(t.exports,"withResize",(()=>l)),e(t.exports,"withTick",(()=>h));var i=r("7JkHJ"),o=r("8aGfK"),s=r("ckcgQ"),a=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},c=(e,t,n)=>(a(e,t,"read from private field"),n?n.call(e):t.get(e)),d=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},u=(e,t,n,i)=>(a(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),f=class{constructor(e){this.canvas=e,this._events=new Map,this._disposers=new Set;const t=(0,o.create)({canvas:this.canvas});if(null==t)throw new Error("Erroring creating context");this.ctx=t}on(e){const t=(0,i.default)();this._events.has(e.type)||this._events.set(e.type,new Map);const n=this._events.get(e.type);if(null==n)throw new Error(`Can not get event map for ${e.type}`);return n.set(t,e.action),()=>{n.delete(t)}}dispose(){for(let e of this._disposers)e()}};function l(e){return class extends e{constructor(...e){super(...e),this._events.set("resize",new Map);const t=new ResizeObserver((e=>{const t=this._events.get("resize");for(const n of e){const e=n.contentRect;if((0,s.setCanvasSize)({canvas:this.canvas,width:e.width,height:e.height}),null!=t)for(let[e,n]of t)n({app:this});if(this._events.has("tick")){const e=this._events.get("tick");if(null!=e)for(let[t,n]of e)n({dt:0,app:this})}}})),n=this.canvas.parentElement;null!=n&&t.observe(n),this._disposers.add((()=>{t.disconnect()}))}on(e){return super.on(e)}}}function h(e){var t,n,i,r;return r=class extends e{constructor(...e){super(...e),d(this,t,void 0),d(this,n,void 0),this.isRunning=!1,d(this,i,(()=>{if(!1===this.isRunning)return;const e=this._events.get("tick");if(null!=e){const n=window.performance.now();for(let[i,r]of e)r({dt:n-c(this,t),app:this});u(this,t,n)}u(this,n,window.requestAnimationFrame(c(this,i)))})),u(this,n,null),u(this,t,window.performance.now()),this._events.set("tick",new Map),this._disposers.add((()=>{c(this,n)&&window.cancelAnimationFrame(c(this,n))}))}start(){this.isRunning=!0,u(this,t,window.performance.now()),c(this,i).call(this)}stop(){this.isRunning=!1}on(e){return super.on(e)}},t=new WeakMap,n=new WeakMap,i=new WeakMap,r}})),r.register("7JkHJ",(function(t,n){e(t.exports,"default",(()=>a));var i=r("aZL8u"),o=r("JzVaU"),s=r("l8li9");var a=function(e,t,n){if(i.default.randomUUID&&!t&&!e)return i.default.randomUUID();const r=(e=e||{}).random||(e.rng||o.default)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return(0,s.unsafeStringify)(r)}})),r.register("aZL8u",(function(t,n){e(t.exports,"default",(()=>i));var i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)}})),r.register("JzVaU",(function(t,n){let i;e(t.exports,"default",(()=>o));const r=new Uint8Array(16);function o(){if(!i&&(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}})),r.register("l8li9",(function(t,n){e(t.exports,"unsafeStringify",(()=>o));r("4nOil");const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function o(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}})),r.register("4nOil",(function(t,n){e(t.exports,"default",(()=>o));var i=r("2DDAx");var o=function(e){return"string"==typeof e&&i.default.test(e)}})),r.register("2DDAx",(function(t,n){e(t.exports,"default",(()=>i));var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i})),r.register("8aGfK",(function(t,n){e(t.exports,"create",(()=>o));var i=r("ckcgQ");function o(e){if("undefined"==typeof window||"undefined"==typeof document)return null;const t=(null==e?void 0:e.canvas)??document.createElement("canvas"),n=window.devicePixelRatio,r=t.getContext("2d",(null==e?void 0:e.attributes)??{});return null==r?null:((0,i.setCanvasSize)({canvas:t,width:r.canvas.width,height:r.canvas.height}),r.scale(n,n),r)}}));
//# sourceMappingURL=index.bc565303.js.map
