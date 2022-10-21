function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireedcf;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireedcf=i),i.register("io0Tf",(function(t,n){e(t.exports,"attach",(()=>o));var r=i("bW9gS");function o(e){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("Can not attach canvas");const t=(null==e?void 0:e.canvas)||(0,r.create)(),n=(null==e?void 0:e.container)||t.parentElement;if(null==n)throw new Error("Must supply a container to attach the canvas to if not already appended");return n.appendChild(t),n===document.body&&(t.style.display="block"),{canvas:t,container:n}}})),i.register("bW9gS",(function(t,n){e(t.exports,"create",(()=>o));var r=i("ckcgQ");function o(e){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("Can not create canvas element");const t=document.createElement("canvas"),n=(null==e?void 0:e.width)??t.width,i=(null==e?void 0:e.height)??t.height;return(0,r.setCanvasSize)({canvas:t,width:n,height:i}),t}})),i.register("ckcgQ",(function(t,n){function r(e){if("undefined"==typeof window)throw new Error("Can not access window");const t=window.devicePixelRatio;return e.canvas.width=e.width,e.canvas.height=e.height,i({canvas:e.canvas,dpr:t})}function i(e){const t=e.canvas,n=t.width,r=t.height;return t.width=n*e.dpr,t.height=r*e.dpr,t.style.width=n+"px",t.style.height=r+"px",t}e(t.exports,"setCanvasSize",(()=>r)),e(t.exports,"setCanvasDpr",(()=>i))})),i.register("7XNOC",(function(t,n){e(t.exports,"BaseApplication",(()=>f)),e(t.exports,"withResize",(()=>l)),e(t.exports,"withTick",(()=>p));var r=i("7JkHJ"),o=i("8aGfK"),s=i("ckcgQ"),a=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},c=(e,t,n)=>(a(e,t,"read from private field"),n?n.call(e):t.get(e)),d=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},u=(e,t,n,r)=>(a(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),f=class{constructor(e){this.canvas=e,this._events=new Map,this._disposers=new Set;const t=(0,o.create)({canvas:this.canvas});if(null==t)throw new Error("Erroring creating context");this.ctx=t}on(e){const t=(0,r.default)();this._events.has(e.type)||this._events.set(e.type,new Map);const n=this._events.get(e.type);if(null==n)throw new Error(`Can not get event map for ${e.type}`);return n.set(t,e.action),()=>{n.delete(t)}}dispose(){for(let e of this._disposers)e()}};function l(e){return class extends e{constructor(...e){super(...e),this._events.set("resize",new Map);const t=new ResizeObserver((e=>{const t=this._events.get("resize");for(const n of e){const e=n.contentRect;if((0,s.setCanvasSize)({canvas:this.canvas,width:e.width,height:e.height}),null!=t)for(let[e,n]of t)n({app:this});if(this._events.has("tick")){const e=this._events.get("tick");if(null!=e)for(let[t,n]of e)n({dt:0,app:this})}}})),n=this.canvas.parentElement;null!=n&&t.observe(n),this._disposers.add((()=>{t.disconnect()}))}on(e){return super.on(e)}}}function p(e){var t,n,r,i,o;return o=class extends e{constructor(...e){super(...e),d(this,t,void 0),d(this,n,void 0),d(this,r,!1),d(this,i,(()=>{if(!1===c(this,r))return;const e=this._events.get("tick");if(null!=e){const n=window.performance.now();for(let[r,i]of e)i({dt:n-c(this,t),app:this});u(this,t,n)}u(this,n,window.requestAnimationFrame(c(this,i)))})),u(this,n,null),u(this,t,window.performance.now()),this._events.set("tick",new Map),this._disposers.add((()=>{c(this,n)&&window.cancelAnimationFrame(c(this,n))}))}start(){u(this,r,!0),u(this,t,window.performance.now()),c(this,i).call(this)}stop(){u(this,r,!1)}on(e){return super.on(e)}},t=new WeakMap,n=new WeakMap,r=new WeakMap,i=new WeakMap,o}})),i.register("7JkHJ",(function(t,n){e(t.exports,"default",(()=>a));var r=i("aZL8u"),o=i("JzVaU"),s=i("l8li9");var a=function(e,t,n){if(r.default.randomUUID&&!t&&!e)return r.default.randomUUID();const i=(e=e||{}).random||(e.rng||o.default)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return(0,s.unsafeStringify)(i)}})),i.register("aZL8u",(function(t,n){e(t.exports,"default",(()=>r));var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)}})),i.register("JzVaU",(function(t,n){let r;e(t.exports,"default",(()=>o));const i=new Uint8Array(16);function o(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}})),i.register("l8li9",(function(t,n){e(t.exports,"unsafeStringify",(()=>o));i("4nOil");const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function o(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}})),i.register("4nOil",(function(t,n){e(t.exports,"default",(()=>o));var r=i("2DDAx");var o=function(e){return"string"==typeof e&&r.default.test(e)}})),i.register("2DDAx",(function(t,n){e(t.exports,"default",(()=>r));var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i})),i.register("8aGfK",(function(t,n){e(t.exports,"create",(()=>o));var r=i("ckcgQ");function o(e){if("undefined"==typeof window||"undefined"==typeof document)return null;const t=(null==e?void 0:e.canvas)??document.createElement("canvas"),n=window.devicePixelRatio,i=t.getContext("2d",(null==e?void 0:e.attributes)??{});return null==i?null:((0,r.setCanvasSize)({canvas:t,width:i.canvas.width,height:i.canvas.height}),i.scale(n,n),i)}}));
//# sourceMappingURL=index.bcd188a1.js.map
