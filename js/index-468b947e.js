import{dP as i,bZ as c}from"./index-8eac1ff4.js";import{t as l}from"./transform-da9e8e2a.js";function f(n,e){return i(n,e)}function d(n,e){function r(t,a){return l(t,(p,o,s)=>{f(o,a?.[s])||(p[s]=c(o)&&c(a?.[s])?r(o,a?.[s]):o)})}return r(e,n)}function g(n,e){const r=window.URL.createObjectURL(new Blob([n])),t=document.createElement("a");t.href=r,t.setAttribute("download",e),document.body.appendChild(t),t.click()}function m(n){return`${n}`.replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w*)/,"g"),(e,r,t)=>`${r.toUpperCase()+t.toLowerCase()}`).replace(new RegExp(/\w/),e=>e.toUpperCase())}export{d,g as r,m as t};
