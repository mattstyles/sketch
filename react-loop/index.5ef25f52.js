function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e=globalThis,n={},i={},r=e.parcelRequireedcf;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequireedcf=r);var o=r.register;o("dQH5Y",function(e,n){t(e.exports,"loop",()=>a);// src/index.ts
var i=r("io0Tf"),o=r("7XNOC");function a(t){let{canvas:e}=(0,i.attach)(t);return new s(e)}var s=(0,o.withInteraction)((0,o.withTick)((0,o.withResize)(o.CtxApplication)))}),o("io0Tf",function(e,n){t(e.exports,"attach",()=>o);// src/index.ts
var i=r("bW9gS");function o(t){if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not attach canvas");let e=(null==t?void 0:t.canvas)||(0,i.create)(),n=(null==t?void 0:t.container)||e.parentElement;if(null==n)throw Error("Must supply a container to attach the canvas to if not already appended");return n.appendChild(e),e.style.display="block",{canvas:e,container:n}}}),o("bW9gS",function(e,n){t(e.exports,"create",()=>o);// src/index.ts
var i=r("ckcgQ");function o(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not create canvas element");let r=document.createElement("canvas"),o=null!=(e=null==t?void 0:t.width)?e:r.width,a=null!=(n=null==t?void 0:t.height)?n:r.height;return r.style.userSelect="none",(0,i.setCanvasSize)({canvas:r,width:o,height:a}),r}}),o("ckcgQ",function(e,n){// src/index.ts
function i(t){if("undefined"==typeof window)throw Error("Can not access window");let e=window.devicePixelRatio;return t.canvas.width=t.width,t.canvas.height=t.height,r({canvas:t.canvas,dpr:e})}function r(t){let e=t.canvas,n=e.width,i=e.height;return e.width=n*t.dpr,e.height=i*t.dpr,e.style.width=n+"px",e.style.height=i+"px",e}t(e.exports,"setCanvasSize",()=>i),t(e.exports,"setCanvasDpr",()=>r)}),o("7XNOC",function(e,n){t(e.exports,"BaseApplication",()=>u),t(e.exports,"CtxApplication",()=>h),t(e.exports,"withResize",()=>d),t(e.exports,"withTick",()=>f),t(e.exports,"withInteraction",()=>v);var i=r("k6Cub"),o=r("8aGfK"),a=r("ckcgQ"),s=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},c=(t,e,n)=>(s(t,e,"read from private field"),n?n.call(t):e.get(t)),l=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},p=(t,e,n,i)=>(s(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),u=class{constructor(t){this.canvas=t,this._events=/* @__PURE__ */new Map,this._disposers=/* @__PURE__ */new Set}on(t){let e=(0,i.default)();this._events.has(t.type)||this._events.set(t.type,/* @__PURE__ */new Map);let n=this._events.get(t.type);if(null==n)throw Error(`Can not get event map for ${t.type}`);return n.set(e,t.action),()=>{n.delete(e)}}dispose(){for(let t of this._disposers)t()}},h=class extends u{constructor(t){super(t);let e=(0,o.create)({canvas:this.canvas});if(null==e)throw Error("Erroring creating context");this.ctx=e}};function d(t){var e;return(e=class extends t{constructor(...t){super(...t),this._events.set(e.mapKey,/* @__PURE__ */new Map);let n=new ResizeObserver(t=>{let n=this._events.get(e.mapKey);for(let e of t){let t=e.contentRect;if((0,a.setCanvasSize)({canvas:this.canvas,width:t.width,height:t.height}),null!=n)for(let[e,i]of n)i({app:this,width:t.width,height:t.height});if(this._events.has("tick")){let t=this._events.get("tick");if(null!=t)for(let[e,n]of t)n({dt:0,app:this})}}}),i=this.canvas.parentElement;null!=i&&n.observe(i),this._disposers.add(()=>{n.disconnect()})}}).mapKey="resize",e}// src/mixins/tick.ts
function f(t){var e,n,i,r;return e=class extends t{constructor(...t){super(...t),l(this,n,void 0),l(this,i,void 0),this.isRunning=!1,l(this,r,()=>{if(!1===this.isRunning)return;let t=this._events.get(e.mapKey);if(null!=t){let e=window.performance.now();for(let[i,r]of t)r({dt:e-c(this,n),app:this});p(this,n,e)}p(this,i,window.requestAnimationFrame(c(this,r)))}),p(this,i,null),p(this,n,window.performance.now()),this._events.set(e.mapKey,/* @__PURE__ */new Map),this._disposers.add(()=>{c(this,i)&&window.cancelAnimationFrame(c(this,i))})}start(){this.isRunning=!0,p(this,n,window.performance.now()),c(this,r).call(this)}stop(){this.isRunning=!1}},n=new WeakMap,i=new WeakMap,r=new WeakMap,e.mapKey="tick",e}// src/mixins/interaction.ts
function v(t){var e,n,i,r;return r=class extends t{constructor(...t){super(...t),l(this,e,t=>{let e=this._events.get("pointerdown"),n=window.devicePixelRatio;if(null!=e)for(let[i,r]of e)r({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),l(this,n,t=>{let e=this._events.get("pointerup"),n=window.devicePixelRatio;if(null!=e)for(let[i,r]of e)r({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),l(this,i,t=>{let e=this._events.get("pointermove"),n=window.devicePixelRatio;if(this.canvas,null!=e)for(let[i,r]of e)r({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),this._events.set("pointerdown",/* @__PURE__ */new Map),this._events.set("pointerup",/* @__PURE__ */new Map),this._events.set("pointermove",/* @__PURE__ */new Map),this.canvas.addEventListener("pointerdown",c(this,e)),this.canvas.addEventListener("pointerup",c(this,n)),this.canvas.addEventListener("pointermove",c(this,i)),this._disposers.add(()=>{this.canvas.removeEventListener("pointerdown",c(this,e)),this.canvas.removeEventListener("pointerup",c(this,n)),this.canvas.removeEventListener("pointermove",c(this,i))})}},e=new WeakMap,n=new WeakMap,i=new WeakMap,r}}),o("k6Cub",function(e,n){t(e.exports,"default",()=>s);var i=r("jnvTw"),o=r("iVZpt"),a=r("hlGJx"),s=function(t,e,n){if(i.default.randomUUID&&!e&&!t)return(0,i.default).randomUUID();t=t||{};let r=t.random||(t.rng||(0,o.default))();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return(0,a.unsafeStringify)(r)}}),o("jnvTw",function(e,n){t(e.exports,"default",()=>r);let i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var r={randomUUID:i}}),o("iVZpt",function(e,n){let i;t(e.exports,"default",()=>o);let r=new Uint8Array(16);function o(){// lazy load so that environments that need to polyfill have a chance to do so
if(!i&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}}),o("hlGJx",function(e,n){t(e.exports,"unsafeStringify",()=>o),r("8XRGm");/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */let i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function o(t,e=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]}}),o("8XRGm",function(e,n){t(e.exports,"default",()=>o);var i=r("8r5l2"),o=function(t){return"string"==typeof t&&(0,i.default).test(t)}}),o("8r5l2",function(e,n){t(e.exports,"default",()=>i);var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i}),o("8aGfK",function(e,n){t(e.exports,"create",()=>o);// src/index.ts
var i=r("ckcgQ");function o(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)return null;let r=null!=(e=null==t?void 0:t.canvas)?e:document.createElement("canvas"),o=window.devicePixelRatio,a=r.getContext("2d",null!=(n=null==t?void 0:t.attributes)?n:{});return null==a?null:((0,i.setCanvasSize)({canvas:r,width:a.canvas.width,height:a.canvas.height}),a.scale(o,o),a)}});var a=r("fRwNr");r("lx97N");var s=r("jhfT6"),c=r("lx97N"),l=r("dQH5Y"),a=r("fRwNr"),p=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&f(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&f(t,n,e[n]);return t};function w({onTick:t,onResize:e,onInteraction:n}){let i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(null==i||null==i.current)return;let r=(0,l.loop)({canvas:i.current});if(r.on({type:"tick",action:t}),null!=e&&r.on({type:"resize",action:e}),null!=n){let t=function(t){return function(e){null!=n&&n(v({type:t},e))}};r.on({type:"pointerdown",action:t("pointerdown")}),r.on({type:"pointermove",action:t("pointermove")}),r.on({type:"pointerup",action:t("pointerup")})}return r.start(),()=>{r.dispose()}},[i,t,n,e]),/* @__PURE__ */(0,a.jsx)("canvas",{ref:i})}const y=document.querySelector(".js-app"),g=(0,s.createRoot)(y);function m({children:t}){return/*#__PURE__*/(0,a.jsx)("div",{style:{width:"100vw",height:"100vh"},children:t})}function x({type:t,app:e,point:n}){console.log(t,"::",n,",,")}g.render(/*#__PURE__*/(0,a.jsx)(function(){return/*#__PURE__*/(0,a.jsx)(m,{children:/*#__PURE__*/(0,a.jsx)(w,{onTick:R,onInteraction:x})})},{}));let b=0;function R({app:t,dt:e}){b+=e/500,t.ctx.fillStyle="#232527",t.ctx.fillRect(0,0,t.canvas.width,t.canvas.height),t.ctx.beginPath(),t.ctx.strokeStyle="#ff7034",t.ctx.lineWidth=4,t.ctx.arc(.5*t.canvas.width,.5*t.canvas.height,.25*Math.min(t.canvas.width,t.canvas.height)*(1+.2*Math.sin(b)),0,2*Math.PI),t.ctx.stroke()}//# sourceMappingURL=index.5ef25f52.js.map

//# sourceMappingURL=index.5ef25f52.js.map