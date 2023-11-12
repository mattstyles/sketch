function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e=globalThis,n={},i={},r=e.parcelRequireedcf;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequireedcf=r);var a=r.register;a("dQH5Y",function(e,n){t(e.exports,"loop",()=>s);// src/index.ts
var i=r("io0Tf"),a=r("7XNOC");function s(t){let{canvas:e}=(0,i.attach)(t);return new o(e)}var o=(0,a.withInteraction)((0,a.withTick)((0,a.withResize)(a.CtxApplication)))}),a("io0Tf",function(e,n){t(e.exports,"attach",()=>a);// src/index.ts
var i=r("bW9gS");function a(t){if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not attach canvas");let e=(null==t?void 0:t.canvas)||(0,i.create)(),n=(null==t?void 0:t.container)||e.parentElement;if(null==n)throw Error("Must supply a container to attach the canvas to if not already appended");return n.appendChild(e),n===document.body&&(e.style.display="block"),{canvas:e,container:n}}}),a("bW9gS",function(e,n){t(e.exports,"create",()=>a);// src/index.ts
var i=r("ckcgQ");function a(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not create canvas element");let r=document.createElement("canvas"),a=null!=(e=null==t?void 0:t.width)?e:r.width,s=null!=(n=null==t?void 0:t.height)?n:r.height;return r.style.userSelect="none",(0,i.setCanvasSize)({canvas:r,width:a,height:s}),r}}),a("ckcgQ",function(e,n){// src/index.ts
function i(t){if("undefined"==typeof window)throw Error("Can not access window");let e=window.devicePixelRatio;return t.canvas.width=t.width,t.canvas.height=t.height,r({canvas:t.canvas,dpr:e})}function r(t){let e=t.canvas,n=e.width,i=e.height;return e.width=n*t.dpr,e.height=i*t.dpr,e.style.width=n+"px",e.style.height=i+"px",e}t(e.exports,"setCanvasSize",()=>i),t(e.exports,"setCanvasDpr",()=>r)}),a("7XNOC",function(e,n){t(e.exports,"BaseApplication",()=>h),t(e.exports,"CtxApplication",()=>u),t(e.exports,"withResize",()=>p),t(e.exports,"withTick",()=>f),t(e.exports,"withInteraction",()=>v);var i=r("k6Cub"),a=r("8aGfK"),s=r("ckcgQ"),o=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},c=(t,e,n)=>(o(t,e,"read from private field"),n?n.call(t):e.get(t)),l=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},d=(t,e,n,i)=>(o(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),h=class{constructor(t){this.canvas=t,this._events=/* @__PURE__ */new Map,this._disposers=/* @__PURE__ */new Set}on(t){let e=(0,i.default)();this._events.has(t.type)||this._events.set(t.type,/* @__PURE__ */new Map);let n=this._events.get(t.type);if(null==n)throw Error(`Can not get event map for ${t.type}`);return n.set(e,t.action),()=>{n.delete(e)}}dispose(){for(let t of this._disposers)t()}},u=class extends h{constructor(t){super(t);let e=(0,a.create)({canvas:this.canvas});if(null==e)throw Error("Erroring creating context");this.ctx=e}};function p(t){var e;return(e=class extends t{constructor(...t){super(...t),this._events.set(e.mapKey,/* @__PURE__ */new Map);let n=new ResizeObserver(t=>{let n=this._events.get(e.mapKey);for(let e of t){let t=e.contentRect;if((0,s.setCanvasSize)({canvas:this.canvas,width:t.width,height:t.height}),null!=n)for(let[e,i]of n)i({app:this,width:t.width,height:t.height});if(this._events.has("tick")){let t=this._events.get("tick");if(null!=t)for(let[e,n]of t)n({dt:0,app:this})}}}),i=this.canvas.parentElement;null!=i&&n.observe(i),this._disposers.add(()=>{n.disconnect()})}}).mapKey="resize",e}// src/mixins/tick.ts
function f(t){var e,n,i,r;return e=class extends t{constructor(...t){super(...t),l(this,n,void 0),l(this,i,void 0),this.isRunning=!1,l(this,r,()=>{if(!1===this.isRunning)return;let t=this._events.get(e.mapKey);if(null!=t){let e=window.performance.now();for(let[i,r]of t)r({dt:e-c(this,n),app:this});d(this,n,e)}d(this,i,window.requestAnimationFrame(c(this,r)))}),d(this,i,null),d(this,n,window.performance.now()),this._events.set(e.mapKey,/* @__PURE__ */new Map),this._disposers.add(()=>{c(this,i)&&window.cancelAnimationFrame(c(this,i))})}start(){this.isRunning=!0,d(this,n,window.performance.now()),c(this,r).call(this)}stop(){this.isRunning=!1}},n=new WeakMap,i=new WeakMap,r=new WeakMap,e.mapKey="tick",e}// src/mixins/interaction.ts
function v(t){var e,n,i,r;return r=class extends t{constructor(...t){super(...t),l(this,e,t=>{let e=this._events.get("pointerdown"),n=window.devicePixelRatio;if(null!=e)for(let[i,r]of e)r({point:{x:t.clientX*n,y:t.clientY*n},app:this})}),l(this,n,t=>{let e=this._events.get("pointerup"),n=window.devicePixelRatio;if(null!=e)for(let[i,r]of e)r({point:{x:t.clientX*n,y:t.clientY*n},app:this})}),l(this,i,t=>{let e=this._events.get("pointermove"),n=window.devicePixelRatio;if(null!=e)for(let[i,r]of e)r({point:{x:t.clientX*n,y:t.clientY*n},app:this})}),this._events.set("pointerdown",/* @__PURE__ */new Map),this._events.set("pointerup",/* @__PURE__ */new Map),this._events.set("pointermove",/* @__PURE__ */new Map),this.canvas.addEventListener("pointerdown",c(this,e)),this.canvas.addEventListener("pointerup",c(this,n)),this.canvas.addEventListener("pointermove",c(this,i)),this._disposers.add(()=>{this.canvas.removeEventListener("pointerdown",c(this,e)),this.canvas.removeEventListener("pointerup",c(this,n)),this.canvas.removeEventListener("pointermove",c(this,i))})}},e=new WeakMap,n=new WeakMap,i=new WeakMap,r}}),a("k6Cub",function(e,n){t(e.exports,"default",()=>o);var i=r("jnvTw"),a=r("iVZpt"),s=r("hlGJx"),o=function(t,e,n){if(i.default.randomUUID&&!e&&!t)return(0,i.default).randomUUID();t=t||{};let r=t.random||(t.rng||(0,a.default))();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return(0,s.unsafeStringify)(r)}}),a("jnvTw",function(e,n){t(e.exports,"default",()=>r);let i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var r={randomUUID:i}}),a("iVZpt",function(e,n){let i;t(e.exports,"default",()=>a);let r=new Uint8Array(16);function a(){// lazy load so that environments that need to polyfill have a chance to do so
if(!i&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}}),a("hlGJx",function(e,n){t(e.exports,"unsafeStringify",()=>a),r("8XRGm");/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */let i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function a(t,e=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]}}),a("8XRGm",function(e,n){t(e.exports,"default",()=>a);var i=r("8r5l2"),a=function(t){return"string"==typeof t&&(0,i.default).test(t)}}),a("8r5l2",function(e,n){t(e.exports,"default",()=>i);var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i}),a("8aGfK",function(e,n){t(e.exports,"create",()=>a);// src/index.ts
var i=r("ckcgQ");function a(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)return null;let r=null!=(e=null==t?void 0:t.canvas)?e:document.createElement("canvas"),a=window.devicePixelRatio,s=r.getContext("2d",null!=(n=null==t?void 0:t.attributes)?n:{});return null==s?null:((0,i.setCanvasSize)({canvas:r,width:s.canvas.width,height:s.canvas.height}),s.scale(a,a),s)}});var s=r("fRwNr");r("lx97N");var o=r("jhfT6"),c=r("lx97N"),l=r("dQH5Y"),s=r("fRwNr");function d({onTick:t}){let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(null==e||null==e.current)return;let n=(0,l.loop)({canvas:e.current});return n.on({type:"tick",action:t}),n.start(),()=>{n.dispose()}},[e,t]),/* @__PURE__ */(0,s.jsx)("canvas",{ref:e})}const h=document.querySelector(".js-app"),u=(0,o.createRoot)(h);function p({children:t}){return/*#__PURE__*/(0,s.jsx)("div",{style:{width:"100vw",height:"100vh"},children:t})}u.render(/*#__PURE__*/(0,s.jsx)(function(){return/*#__PURE__*/(0,s.jsx)(p,{children:/*#__PURE__*/(0,s.jsx)(d,{onTick:v})})},{}));let f=0;function v({app:t,dt:e}){f+=e/500,t.ctx.fillStyle="#232527",t.ctx.fillRect(0,0,t.canvas.width,t.canvas.height),t.ctx.beginPath(),t.ctx.strokeStyle="#ff7034",t.ctx.lineWidth=4,t.ctx.arc(.5*t.canvas.width,.5*t.canvas.height,.25*Math.min(t.canvas.width,t.canvas.height)*(1+.2*Math.sin(f)),0,2*Math.PI),t.ctx.stroke()}//# sourceMappingURL=index.470794e0.js.map

//# sourceMappingURL=index.470794e0.js.map