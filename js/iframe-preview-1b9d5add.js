import{f as e,a as r,L as n,N as u,ac as l}from"./index-44de73b8.js";const p=e({props:{url:{type:String,required:!0}},setup(t){return()=>r("iframe",{src:t.url,class:"max-w-full w-[60ch] h-[60vh]"},null)}}),s=e({props:{path:{type:String,required:!0}},setup(t){return()=>r(n,{placement:"right",class:"!p-0"},{default(){return r(p,{url:t.path},null)},trigger(){return r(u,{text:!0,type:"primary",tag:"a",target:"_blank",href:t.path,onClick:a=>{a.stopPropagation()}},{default:()=>[r(l,null,null)]})}})}});export{s as I};
