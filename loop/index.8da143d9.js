var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequireedcf;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,o.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequireedcf=o);var i=o("io0Tf"),c=o("7XNOC");var a=(0,c.withInteraction)((0,c.withTick)((0,c.withResize)(c.BaseApplication)));const r=function(t){const{canvas:e}=(0,i.attach)(t);return new a(e)}({container:document.body});function s(){const t=r.ctx.createLinearGradient(0,.85*r.ctx.canvas.height,r.ctx.canvas.width,.25*r.ctx.canvas.height);t.addColorStop(0,"#fbab7e"),t.addColorStop(1,"#f7ce68"),r.ctx.fillStyle=t,r.ctx.fillRect(0,0,r.ctx.canvas.width,r.ctx.canvas.height);for(let t=0;t<=8;t++){const e=.25*Math.min(r.canvas.width,r.canvas.height)*d;r.ctx.beginPath(),r.ctx.strokeStyle=`rgba(255, 250, 248, ${1-t/9})`,r.ctx.lineWidth=4+4*(1-t/8),r.ctx.arc(.5*r.canvas.width,.5*r.canvas.height,e-t*(.05*e),0,2*Math.PI),r.ctx.stroke()}}let d=1,l=0;r.on({type:"resize",action:s}),r.on({type:"tick",action:({dt:t})=>{l+=t/500,d=1+.35*Math.sin(l)}}),r.on({type:"tick",action:s});const p=document.querySelector(".js-pointer"),h=document.querySelector(".js-pointer-x"),f=document.querySelector(".js-pointer-y");r.on({type:"pointerdown",action:({point:t})=>{p.innerHTML="down"}}),r.on({type:"pointerup",action:({point:t})=>{p.innerHTML="up"}}),r.on({type:"pointermove",action:({point:t})=>{h.innerHTML=t.x.toFixed(2),f.innerHTML=t.y.toFixed(2)}}),r.start(),window.addEventListener("keydown",(t=>{switch(t.key){case"d":console.log("disposing"),r.dispose();break;case"s":console.log("starting"),r.start();break;case"p":console.log("pausing"),r.stop()}}));
//# sourceMappingURL=index.8da143d9.js.map
