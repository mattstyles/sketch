var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequireedcf;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequireedcf=r);var i=r("fRwNr"),c=r("lx97N"),a=(r("lx97N"),r("jhfT6")),o=(c=r("lx97N"),r("io0Tf")),l=r("7XNOC");function s(t){const{canvas:e}=(0,o.attach)(t);return new u(e)}var u=(0,l.withTick)((0,l.withResize)(l.BaseApplication)),d=(i=r("fRwNr"),(0,c.createContext)(null));function f({children:t}){const[e,n]=(0,c.useState)(null);return(0,i.jsx)(d.Provider,{value:{app:e,setApp:n},children:t})}function h(){const t=(0,c.useContext)(d),e=(0,c.useRef)(null);return(0,c.useEffect)((()=>{if(null==t)throw new Error("Sketch attachment must be a child of a sketch provider");if(null!=e&&null!=e.current){if(null==t.app){const n=s({canvas:e.current});n.start(),t.setApp(n)}else t.app.start();return()=>{t&&null!=t.app&&t.app.dispose()}}}),[e,t]),(0,i.jsx)("canvas",{ref:e})}function p(){const t=(0,c.useContext)(d);return(null==t?void 0:t.app)??null}function x(t){const e=p();(0,c.useEffect)((()=>{if(null==e)return;const n=e.on({type:"tick",action:t});return()=>{n()}}),[t,e])}const v=document.querySelector(".js-app");function w(){return(0,i.jsx)(f,{children:(0,i.jsxs)(g,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(j,{})]})})}function g({children:t}){return(0,i.jsx)("div",{style:{width:"100vw",height:"100vh"},children:t})}function b(){return x(R),(0,i.jsx)(h,{})}function j(){const t=p(),[e,n]=(0,c.useState)(!0);return(0,i.jsx)("div",{style:{position:"absolute",top:16,right:16,padding:8,backgroundColor:"rgba(0, 0, 0, 0.12)",borderRadius:3},children:(0,i.jsx)("button",{disabled:null==t,onClick:()=>{null!=t&&(e?(n(!1),t.stop()):(n(!0),t.start()))},children:e?"Pause":"Resume"})})}(0,a.createRoot)(v).render((0,i.jsx)(w,{}));let y=0;function R({app:t,dt:e}){y+=e/500;const n=t.ctx.createLinearGradient(0,.85*t.ctx.canvas.height,t.ctx.canvas.width,.25*t.ctx.canvas.height);n.addColorStop(0,"#85ffbd"),n.addColorStop(1,"#fffb7d"),t.ctx.fillStyle=n,t.ctx.fillRect(16,16,t.ctx.canvas.width-32,t.ctx.canvas.height-32),t.ctx.beginPath(),t.ctx.strokeStyle="#484442",t.ctx.lineWidth=4,t.ctx.arc(.5*t.canvas.width,.5*t.canvas.height,.25*Math.min(t.canvas.width,t.canvas.height)*(1+.2*Math.sin(y)),0,2*Math.PI),t.ctx.stroke()}
//# sourceMappingURL=index.e65e398a.js.map