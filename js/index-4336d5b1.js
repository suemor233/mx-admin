import{f as d,ep as f,u as m,y as l,a as e,C as p,F as v,dM as u,R as g,bX as h}from"./index-44de73b8.js";import{H as _}from"./rounded-button-ca5bd9f3.js";import{d as y,F as S}from"./index-5c5eb197.js";import{T}from"./two-col-1f5d465b.js";import{_ as b}from"./CheckCircleOutlined-4340f849.js";import"./use-async-monaco-5b384207.js";import"./index-f686fa6c.js";import"./editor.main-a2538652.js";import"./use-save-confirm-7c8abab0.js";var x=d({setup(){const n=f("debug-serverless",y),i=m(),t=l(),o=l(""),s=async()=>{try{const r=await g.api.debug.function.post({data:{function:n.value},errorHandler:a=>{o.value=`Error: ${a.data.message}`,i.error(a.data.message)}});h(()=>import("./editor.main-a2538652.js").then(function(a){return a.e}),["js/editor.main-a2538652.js","assets/editor.main.339eee99.css","js/index-44de73b8.js","assets/index.80811719.css"]).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(p,{actionsElement:e(v,null,[e(_,{icon:e(b,null,null),onClick:s},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(S,{value:n,onSave:s},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"overflow-auto max-h-[calc(100vh-10rem)] !bg-none !bg-transparent",ref:t},[o.value])]})]})]})}});export{x as default};
