import{H as i}from"./rounded-button-ca5bd9f3.js";import{f as I,j as P,x as k,y as C,cH as N,di as H,dj as r,t as T,p as D,n as F,m as E,R as u,a as t,C as L,F as f,dk as y,dl as M,H as c,bo as h,dm as j,bn as q}from"./index-44de73b8.js";import{u as B}from"./use-parse-payload-9c3b5530.js";import{i as v}from"./isString-9b1c3b6a.js";import{N as $}from"./Form-c420edc4.js";import{N as m}from"./FormItem-2598ad4a.js";import"./index-cd040040.js";const O=I({setup(){const g=P(),d=k(),x=()=>({text:"",author:"",source:""}),s=C({});N(()=>{H([r.\u539F\u521B,r.\u54F2\u5B66,r.\u6587\u5B66,r.\u8BD7\u8BCD]).then(e=>{s.value={source:e.from,text:e.hitokoto,author:e.from_who||e.creator}})});const w=T(),b=async()=>{const e=async()=>{await u.api.says.post({data:s.value}),message.success("\u53D1\u5E03\u6210\u529F"),d.push({name:h.ListSay})};a.text||a.author||a.source?w.create({title:"\u8B66\u544A",content:"\u53D1\u5E03\u4E00\u8A00\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u5185\u5BB9, \u8981\u7EE7\u7EED\u5417",type:"warning",negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",onPositiveClick(){e()}}):e()},S=e=>B(a)(e),a=D(x()),l=F(()=>g.query.id);E(async()=>{const e=l.value;if(e&&typeof e=="string"){const n=(await u.api.says(e).get({})).data;S(n)}});const p=async()=>{const e=()=>{try{if(!a.text||a.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...j(q(a),(o,n,R)=>(o[R]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!v(l.value))return;const o=l.value;await u.api.says(o).put({data:e()}),message.success("\u4FEE\u6539\u6210\u529F")}else await u.api.says.post({data:e()}),message.success("\u53D1\u5E03\u6210\u529F");d.push({name:h.ListSay})};return()=>t(L,{actionsElement:t(f,null,[v(l)?t(i,{name:"\u66F4\u65B0",variant:"info",onClick:p,icon:t(y,null,null)},null):t(f,null,[t(i,{name:"\u53D1\u5E03\u4E00\u8A00",variant:"info",onClick:b,icon:t(M,null,null)},null),t(i,{name:"\u53D1\u5E03\u81EA\u5DF1\u8BF4\u7684",variant:"primary",onClick:p,icon:t(y,null,null)},null)])])},{default:()=>[t($,null,{default:()=>[t(m,{label:"\u5185\u5BB9",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:a.text,onInput:e=>void(a.text=e)},null)]}),t(m,{label:"\u4F5C\u8005",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:s.value.author,value:a.author,onInput:e=>void(a.author=e)},null)]}),t(m,{label:"\u6765\u6E90",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:s.value.source,value:a.source,onInput:e=>void(a.source=e)},null)]})]})]})}});export{O as default};
