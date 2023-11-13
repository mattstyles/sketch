function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e=globalThis,n={},i={},o=e.parcelRequireedcf;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequireedcf=o);var r=o.register;r("ckcgQ",function(e,n){// src/index.ts
function i(t){if("undefined"==typeof window)throw Error("Can not access window");let e=window.devicePixelRatio;return t.canvas.width=t.width,t.canvas.height=t.height,o({canvas:t.canvas,dpr:e})}function o(t){let e=t.canvas,n=e.width,i=e.height;return e.width=n*t.dpr,e.height=i*t.dpr,e.style.width=n+"px",e.style.height=i+"px",e}t(e.exports,"setCanvasSize",()=>i),t(e.exports,"setCanvasDpr",()=>o)}),r("bW9gS",function(e,n){t(e.exports,"create",()=>r);// src/index.ts
var i=o("ckcgQ");function r(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not create canvas element");let o=document.createElement("canvas"),r=null!=(e=null==t?void 0:t.width)?e:o.width,s=null!=(n=null==t?void 0:t.height)?n:o.height;return o.style.userSelect="none",(0,i.setCanvasSize)({canvas:o,width:r,height:s}),o}}),r("8aGfK",function(e,n){t(e.exports,"create",()=>r);// src/index.ts
var i=o("ckcgQ");function r(t){var e,n;if("undefined"==typeof window||"undefined"==typeof document)return null;let o=null!=(e=null==t?void 0:t.canvas)?e:document.createElement("canvas"),r=window.devicePixelRatio,s=o.getContext("2d",null!=(n=null==t?void 0:t.attributes)?n:{});return null==s?null:((0,i.setCanvasSize)({canvas:o,width:s.canvas.width,height:s.canvas.height}),s.scale(r,r),s)}}),r("io0Tf",function(e,n){t(e.exports,"attach",()=>r);// src/index.ts
var i=o("bW9gS");function r(t){if("undefined"==typeof window||"undefined"==typeof document)throw Error("Can not attach canvas");let e=(null==t?void 0:t.canvas)||(0,i.create)(),n=(null==t?void 0:t.container)||e.parentElement;if(null==n)throw Error("Must supply a container to attach the canvas to if not already appended");return n.appendChild(e),e.style.display="block",{canvas:e,container:n}}}),r("7XNOC",function(e,n){t(e.exports,"BaseApplication",()=>p),t(e.exports,"CtxApplication",()=>h),t(e.exports,"withResize",()=>u),t(e.exports,"withTick",()=>f),t(e.exports,"withInteraction",()=>v);var i=o("k6Cub"),r=o("8aGfK"),s=o("ckcgQ"),a=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},c=(t,e,n)=>(a(t,e,"read from private field"),n?n.call(t):e.get(t)),d=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},l=(t,e,n,i)=>(a(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),p=class{constructor(t){this.canvas=t,this._events=/* @__PURE__ */new Map,this._disposers=/* @__PURE__ */new Set}on(t){let e=(0,i.default)();this._events.has(t.type)||this._events.set(t.type,/* @__PURE__ */new Map);let n=this._events.get(t.type);if(null==n)throw Error(`Can not get event map for ${t.type}`);return n.set(e,t.action),()=>{n.delete(e)}}dispose(){for(let t of this._disposers)t()}},h=class extends p{constructor(t){super(t);let e=(0,r.create)({canvas:this.canvas});if(null==e)throw Error("Erroring creating context");this.ctx=e}};function u(t){var e;return(e=class extends t{constructor(...t){super(...t),this._events.set(e.mapKey,/* @__PURE__ */new Map);let n=new ResizeObserver(t=>{let n=this._events.get(e.mapKey);for(let e of t){let t=e.contentRect;if((0,s.setCanvasSize)({canvas:this.canvas,width:t.width,height:t.height}),null!=n)for(let[e,i]of n)i({app:this,width:t.width,height:t.height});if(this._events.has("tick")){let t=this._events.get("tick");if(null!=t)for(let[e,n]of t)n({dt:0,app:this})}}}),i=this.canvas.parentElement;null!=i&&n.observe(i),this._disposers.add(()=>{n.disconnect()})}}).mapKey="resize",e}// src/mixins/tick.ts
function f(t){var e,n,i,o;return e=class extends t{constructor(...t){super(...t),d(this,n,void 0),d(this,i,void 0),this.isRunning=!1,d(this,o,()=>{if(!1===this.isRunning)return;let t=this._events.get(e.mapKey);if(null!=t){let e=window.performance.now();for(let[i,o]of t)o({dt:e-c(this,n),app:this});l(this,n,e)}l(this,i,window.requestAnimationFrame(c(this,o)))}),l(this,i,null),l(this,n,window.performance.now()),this._events.set(e.mapKey,/* @__PURE__ */new Map),this._disposers.add(()=>{c(this,i)&&window.cancelAnimationFrame(c(this,i))})}start(){this.isRunning=!0,l(this,n,window.performance.now()),c(this,o).call(this)}stop(){this.isRunning=!1}},n=new WeakMap,i=new WeakMap,o=new WeakMap,e.mapKey="tick",e}// src/mixins/interaction.ts
function v(t){var e,n,i,o;return o=class extends t{constructor(...t){super(...t),d(this,e,t=>{let e=this._events.get("pointerdown"),n=window.devicePixelRatio;if(null!=e)for(let[i,o]of e)o({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),d(this,n,t=>{let e=this._events.get("pointerup"),n=window.devicePixelRatio;if(null!=e)for(let[i,o]of e)o({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),d(this,i,t=>{let e=this._events.get("pointermove"),n=window.devicePixelRatio;if(this.canvas,null!=e)for(let[i,o]of e)o({point:{x:t.offsetX*n,y:t.offsetY*n},app:this})}),this._events.set("pointerdown",/* @__PURE__ */new Map),this._events.set("pointerup",/* @__PURE__ */new Map),this._events.set("pointermove",/* @__PURE__ */new Map),this.canvas.addEventListener("pointerdown",c(this,e)),this.canvas.addEventListener("pointerup",c(this,n)),this.canvas.addEventListener("pointermove",c(this,i)),this._disposers.add(()=>{this.canvas.removeEventListener("pointerdown",c(this,e)),this.canvas.removeEventListener("pointerup",c(this,n)),this.canvas.removeEventListener("pointermove",c(this,i))})}},e=new WeakMap,n=new WeakMap,i=new WeakMap,o}}),r("k6Cub",function(e,n){t(e.exports,"default",()=>a);var i=o("jnvTw"),r=o("iVZpt"),s=o("hlGJx"),a=function(t,e,n){if(i.default.randomUUID&&!e&&!t)return(0,i.default).randomUUID();t=t||{};let o=t.random||(t.rng||(0,r.default))();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=o[t];return e}return(0,s.unsafeStringify)(o)}}),r("jnvTw",function(e,n){t(e.exports,"default",()=>o);let i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:i}}),r("iVZpt",function(e,n){let i;t(e.exports,"default",()=>r);let o=new Uint8Array(16);function r(){// lazy load so that environments that need to polyfill have a chance to do so
if(!i&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(o)}}),r("hlGJx",function(e,n){t(e.exports,"unsafeStringify",()=>r),o("8XRGm");/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */let i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function r(t,e=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]}}),r("8XRGm",function(e,n){t(e.exports,"default",()=>r);var i=o("8r5l2"),r=function(t){return"string"==typeof t&&(0,i.default).test(t)}}),r("8r5l2",function(e,n){t(e.exports,"default",()=>i);var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i});var s=o("bIxrZ"),a=o("eQBmg");const c=(0,s.sketch)({container:document.body},{backgroundColor:2302240}),d=new a.Container,l=new a.Graphics;// graphic.lineStyle(2, 0xfbab7e, 1)
l.beginFill(16777215,1),l.drawCircle(0,0,20),l.endFill(),c.pixi.stage.addChild(d),d.addChild(l);let p=300,h=300,u=0;c.on({type:"tick",action:({dt:t})=>{u+=t/200}}),c.on({type:"tick",action:function({app:t}){let e=30*Math.sin(u),n=30*Math.cos(u);l.position.set(e+p,n+h)}});const f=document.querySelector(".js-pointer-x"),v=document.querySelector(".js-pointer-y");c.on({type:"pointermove",action:({point:t})=>{p=t.x,h=t.y,f.innerHTML=t.x.toFixed(2),v.innerHTML=t.y.toFixed(2)}}),c.start(),// @ts-ignore
window.app=c;//# sourceMappingURL=index.e99ba3e6.js.map

//# sourceMappingURL=index.e99ba3e6.js.map
