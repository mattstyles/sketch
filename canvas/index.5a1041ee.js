function e(e){if("undefined"==typeof window)throw new Error("Can not access window");const n=window.devicePixelRatio;return e.canvas.width=e.width,e.canvas.height=e.height,function(e){const n=e.canvas,t=n.width,i=n.height;return n.width=t*e.dpr,n.height=i*e.dpr,n.style.width=t+"px",n.style.height=i+"px",n}({canvas:e.canvas,dpr:n})}if(null==document.querySelector(".js-app"))throw new Error("Can not find root");const n=function(n){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("Can not create canvas element");const t=document.createElement("canvas"),i=(null==n?void 0:n.width)??t.width,o=(null==n?void 0:n.height)??t.height;return t.style.userSelect="none",e({canvas:t,width:i,height:o}),t}({width:640,height:480});n.style.border="1px solid red",document.body.appendChild(n);
//# sourceMappingURL=index.5a1041ee.js.map
