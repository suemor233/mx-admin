import{d as s,h as t,j as d,l,W as p,R as g,g as f,p as k,N as o,M as m,I as T,q as h,U as x}from"./index-2366bdf2.js";import{E as y}from"./ExternalLink-3b06558c.js";import{N as w}from"./DataTable-570f470c.js";const v=s({props:{url:{type:String,required:!0}},setup(e){return()=>t("iframe",{src:e.url,class:"max-w-full w-[60ch] h-[60vh]"})}}),E=s({props:{inPageTo:{type:String,required:!0},title:{type:String,required:!0},externalLinkTo:{type:String,required:!1},id:{type:String,required:!1},withToken:{type:Boolean,required:!1}},setup(e,{slots:u}){const{viewport:n}=d(x),c=l(()=>n.value.widest||n.value.wider),a=l(()=>{if(!e.externalLinkTo)return null;try{return new URL(e.externalLinkTo,e.externalLinkTo.startsWith("/")?p:void 0).toString()}catch{return null}}),i=g.endpoint+"/markdown/render/"+e.id+(e.withToken?"?token="+f():"");return()=>t(h,{to:e.inPageTo,class:"flex items-center space-x-2"},t(w,{lineClamp:2,tooltip:{width:500}},e.title),u.default?.(),a.value&&t(o,{text:!0,tag:"a",class:"cursor-[alias]",href:a.value,target:"_blank",type:"primary",onClick:r=>r.stopPropagation()},t(T,null,t(y,null))),e.id&&c.value&&t(k,{placement:"right",class:"!p-0"},{default(){return e.id&&t(v,{url:i})},trigger(){return t(o,{text:!0,type:"primary",tag:"a",target:"_blank",href:i,onClick:r=>{r.stopPropagation()}},t(m,null))}}))}});export{E as T};
