import{H as M}from"./rounded-button-ff1155cf.js";import{d as A,i as Y,v as $,x as m,R as i,u as G,w as R,cw as Q,h as a,bT as W,bU as X,z as y,a as q,N as F,bk as Z,bV as x,F as L,cp as ee,dd as ae,n as te,de as ue,bj as re,p as ne,k as le}from"./index-578dead8.js";import{T as se}from"./index-1bdc3b1f.js";import{R as ie}from"./relative-time-7946e787.js";import{u as oe}from"./use-table-b845396e.js";import{N as de}from"./Form-cf0ca6a6.js";import{N as v}from"./FormItem-b7d69965.js";import{N as O}from"./Select-1e33caab.js";import{N as ce}from"./Popconfirm-b7def626.js";import{N as ve,a as b}from"./Tabs-5b23bfe4.js";import{N as k}from"./Badge-1847a252.js";import{N as w}from"./Avatar-13d0d119.js";import"./DataTable-6b52f99d.js";import"./Icon-d8aa7a41.js";import"./Forward-374a8df7.js";import"./index-c4b135bb.js";import"./ChevronRight-13c2ec37.js";import"./Tooltip-ce09caed.js";import"./Tag-8b6dd0c0.js";import"./Add-1afa250c.js";import"./throttle-d19ede4c.js";var U;(function(e){e[e.Category=0]="Category",e[e.Tag=1]="Tag"})(U||(U={}));var z;(function(e){e[e.Post=0]="Post",e[e.Note=1]="Note"})(z||(z={}));var _;(function(e){e.Page="Page",e.Post="Post",e.Note="Note"})(_||(_={}));var V;(function(e){e[e.Unread=0]="Unread",e[e.Read=1]="Read",e[e.Junk=2]="Junk"})(V||(V={}));var g;(function(e){e[e.Friend=0]="Friend",e[e.Collection=1]="Collection"})(g||(g={}));var n;(function(e){e[e.Pass=0]="Pass",e[e.Audit=1]="Audit",e[e.Outdate=2]="Outdate",e[e.Banned=3]="Banned"})(n||(n={}));var j;(function(e){e.md="md",e.html="html",e.frame="frame"})(j||(j={}));var H;(function(e){e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml"})(H||(H={}));const me={Audit:"\u5F85\u5BA1\u6838",Pass:"\u901A\u8FC7",Outdate:"\u8FC7\u65F6",Banned:"\u5C4F\u853D"};var ze=A({setup(){const e=Y(),C=$(),o=m(e.query.state??n.Pass),{data:l,checkedRowKeys:fe,fetchDataFn:h,pager:E,loading:T}=oe((t,r)=>async(s=e.query.page||1,f=50)=>{const N=e.query.state??n.Pass,I=await i.api.links.get({params:{page:s,size:f,state:N|0}});t.value=I.data,r.value=I.pagination}),p=G(),B=()=>({avatar:"",name:"",type:g.Friend,url:"",id:null,description:"",state:n.Pass}),d=m(!1),u=m(B());R(()=>e.query.state,async t=>{await h()}),R(()=>e.query.page,async t=>{await h()},{immediate:!0});const c=m({}),D=async()=>{const t=await i.api.links.state.get();c.value=t};Q(()=>{D()});const K=async()=>{const t=u.value.id;if(t){const r=await i.api.links(t).put({data:ue.omit(u.value,["id","created","hide"])}),s=l.value.findIndex(f=>f.id==t);r.state!=o.value?(l.value.splice(s,1),D()):l.value[s]={...l.value[s],...re(u.value)}}else{const{data:r}=await i.api.links.post({data:{...u.value}});l.value.unshift(r)}p.success("\u64CD\u4F5C\u6210\u529F"),d.value=!1,u.value=B()},P=m(),S=async()=>{const t=p.loading("\u68C0\u67E5\u4E2D",{duration:2e5});try{const r=await i.api.links.health.get({timeout:2e5});P.value=Object.entries(r).reduce((s,[f,N])=>({...s,[f.toLowerCase()]:N}),{}),p.success("\u68C0\u67E5\u5B8C\u6210")}catch(r){console.error(r)}finally{requestAnimationFrame(()=>{t.destroy()})}};return()=>a(te,{actionsElement:a(L,null,a(M,{icon:a(ee,null),variant:"primary",onClick:()=>{u.value=B(),d.value=!0}}),a(M,{icon:a(ae,null),variant:"info",onClick:S,name:"\u68C0\u67E5\u53CB\u94FE\u53EF\u7528\u6027"}))},a(ve,{class:"min-h-[30px]",size:"medium",value:o.value,onUpdateValue:t=>{o.value=t,C.replace({name:Z.Friend,query:{state:t}})}},a(b,{name:n.Pass,tab:"\u670B\u53CB\u4EEC"}),a(b,{name:n.Audit,tab:()=>a(k,{value:c.value.audit,processing:!0},a(x,null,"\u5F85\u5BA1\u6838"))}),a(b,{name:n.Outdate,tab:()=>a(k,{value:c.value.outdate,type:"info"},a(x,null,"\u8FC7\u65F6\u7684"))}),a(b,{name:n.Banned,tab:()=>a(k,{value:c.value.banned,type:"warning"},a(x,null,"\u5C01\u7981\u7684"))})),a(se,{loading:T.value,data:l,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"\u5934\u50CF",key:"avatar",width:80,render(t){return a(J,{name:t.name,avatar:t.avatar})}},{title:"\u540D\u79F0",key:"name",render(t){return a("a",{target:"_blank",href:t.url,rel:"noreferrer"},t.name)}},{title:"\u63CF\u8FF0",key:"description",width:250,ellipsis:{lineClamp:2,tooltip:!0}},{title:"\u7F51\u5740",key:"url",render(t){const r=P.value?.[t.id];return a(pe,{url:t.url,errorMessage:r?.message,status:r?.status})}},{title:"\u7C7B\u578B",key:"type",width:80,render(t){return["\u670B\u53CB","\u6536\u85CF"][t.type|0]}},{title:"\u5BF9\u65B9\u90AE\u7BB1",key:"email",render(t){return a("a",{href:`mailto:${t.email}`},t.email)}},{title:"\u7ED3\u8BC6\u65F6\u95F4",key:"created",width:80,render(t){return a(ie,{time:t.created})}},{width:150,title:"\u64CD\u4F5C",fixed:"right",key:"action",render(t){return a(q,{wrap:!1},t.state==n.Audit&&a(F,{text:!0,size:"tiny",type:"success",onClick:async()=>{await i.api.links.audit(t.id).patch(),p.success("\u901A\u8FC7\u4E86\u6765\u81EA"+t.name+"\u7684\u53CB\u94FE\u9080\u8BF7");const r=l.value.findIndex(s=>s.id==t.id);l.value.splice(r,1),c.value.audit--}},"\u901A\u8FC7"),a(F,{text:!0,size:"tiny",type:"info",onClick:r=>{d.value=!0,u.value={...t}}},"\u7F16\u8F91"),a(ce,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.links(t.id).delete(),p.success("\u5220\u9664\u6210\u529F"),await h(E.value.currentPage),t.state==n.Audit&&c.value.audit--}},{trigger:()=>a(F,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>a("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664\u53CB\u94FE ",t.name," ?")}))}}],onFetchData:h,pager:E}),a(W,{transformOrigin:"center",show:d.value,onUpdateShow:t=>void(d.value=t)},a(X,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:u.value.id?"\u7F16\u8F91: "+u.value.name:"\u65B0\u589E"},a(de,null,a(v,{label:"\u540D\u5B57",required:!0},a(y,{autofocus:!0,value:u.value.name,onInput:t=>void(u.value.name=t)})),a(v,{label:"\u5934\u50CF"},a(y,{autofocus:!0,value:u.value.avatar,onInput:t=>void(u.value.avatar=t)})),a(v,{label:"\u7F51\u5740",required:!0},a(y,{autofocus:!0,value:u.value.url,onInput:t=>void(u.value.url=t)})),a(v,{label:"\u63CF\u8FF0"},a(y,{autofocus:!0,value:u.value.description,onInput:t=>void(u.value.description=t)})),a(v,{label:"\u7C7B\u578B"},a(O,{placeholder:"\u9009\u62E9\u7C7B\u578B",options:[{label:"\u670B\u53CB",value:g.Friend},{label:"\u6536\u85CF",value:g.Collection}],value:u.value.type,onUpdateValue:t=>void(u.value.type=t|0)})),u.value.id&&a(v,{label:"\u72B6\u6001"},a(O,{placeholder:"\u9009\u62E9\u72B6\u6001",options:Object.entries(me).map(([t,r])=>({label:r,value:n[t]})),value:u.value.state,onUpdateValue:t=>void(u.value.state=t|0)}))),a("div",{class:"text-right"},a(q,{size:12,align:"center",inline:!0},a(F,{type:"success",onClick:K,round:!0},"\u786E\u5B9A"),a(F,{onClick:()=>{d.value=!1,u.value=B()},round:!0},"\u53D6\u6D88"))))))}});const pe=A({props:{url:String,errorMessage:String,status:[String,Number]},setup(e){return()=>a("div",{class:"flex space-x-2 items-center"},a("a",{target:"_blank",href:e.url,rel:"noreferrer"},e.url),typeof e.status<"u"&&(e.errorMessage?a(ne,null,{trigger(){return a("div",{class:"h-2 w-2 bg-red-400 rounded-full"})},default(){return e.errorMessage}}):a("div",{class:"h-2 w-2 bg-green-300 rounded-full"})))}}),J=A(e=>{const C=m(!e.avatar);return le(()=>{if(e.avatar){const o=new Image;o.src=e.avatar,o.onload=l=>{C.value=!0}}}),()=>e.avatar?C.value?a(w,{src:e.avatar,round:!0}):a(w,{round:!0},e.name.charAt(0)):a(w,{round:!0},e.name.charAt(0))});J.props=["avatar","name"];export{ze as default};
