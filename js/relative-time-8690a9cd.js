import{f as m,y as o,J as a,m as u,K as l,a as r,L as s,M as v}from"./index-8eac1ff4.js";const n=m({props:{time:{type:[String,Date],required:!0}},setup(e){const i=o(a(e.time));let t;return u(()=>{!e.time||(t=setInterval(()=>{i.value=a(e.time)},1e3))}),l(()=>{t&&(t=clearInterval(t))}),()=>i.value}}),f=m({props:{time:{type:[String,Date],required:!0},showPopoverInfoAbsoluteTime:{type:Boolean,default:!0}},setup(e){return()=>e.showPopoverInfoAbsoluteTime?r(s,{trigger:"hover"},{trigger(){return r("span",null,[r(n,{time:e.time},null)])},default(){return e.time?v(e.time,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss"):"\u6B64\u5185\u5BB9\u81EA\u53D1\u5E03\u4EE5\u6765\u6CA1\u6709\u88AB\u4FEE\u6539\u8FC7"}}):r(n,{time:e.time},null)}});export{f as R};
