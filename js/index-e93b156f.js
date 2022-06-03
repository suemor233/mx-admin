import{H as R}from"./rounded-button-ca5bd9f3.js";import{f as B,j as G,x as Q,y as f,R as d,u as W,w as q,cH as X,a,C as Z,F as L,A as ee,du as ae,bo as te,c0 as w,b as i,d as _,N as h,bY as ue,b$ as le,H as x,dv as ne,bn as re,L as se,m as ie,P as oe}from"./index-44de73b8.js";import{T as de}from"./index-09864c8b.js";import{R as ce}from"./relative-time-48d5fbd0.js";import{u as ve}from"./use-table-b55fedb6.js";import{N as me,a as C}from"./Tabs-054814fa.js";import{N as A}from"./Badge-6d6b6138.js";import{N as fe}from"./Popconfirm-7b0f0517.js";import{N as pe}from"./Form-c420edc4.js";import{N as m}from"./FormItem-2598ad4a.js";import{N as j}from"./Select-038acb81.js";import{N as P}from"./Avatar-c6d52dab.js";import"./DataTable-c60feb5a.js";import"./ChevronRight-c12a4a39.js";import"./Checkbox-91e0c12a.js";import"./index-cd040040.js";import"./Icon-64b083fc.js";import"./prop-46b62c35.js";import"./Forward-3a192c18.js";import"./Tooltip-6176f03e.js";import"./Add-f33050aa.js";import"./throttle-7a7d7907.js";import"./Tag-a74b1f55.js";var U;(function(e){e[e.Category=0]="Category",e[e.Tag=1]="Tag"})(U||(U={}));var V;(function(e){e[e.Post=0]="Post",e[e.Note=1]="Note"})(V||(V={}));var H;(function(e){e.Page="Page",e.Post="Post",e.Note="Note"})(H||(H={}));var z;(function(e){e[e.Unread=0]="Unread",e[e.Read=1]="Read",e[e.Junk=2]="Junk"})(z||(z={}));var y;(function(e){e[e.Friend=0]="Friend",e[e.Collection=1]="Collection"})(y||(y={}));var r;(function(e){e[e.Pass=0]="Pass",e[e.Audit=1]="Audit",e[e.Outdate=2]="Outdate",e[e.Banned=3]="Banned"})(r||(r={}));var E;(function(e){e.md="md",e.html="html",e.frame="frame"})(E||(E={}));var $;(function(e){e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml"})($||($={}));const ge={Audit:"\u5F85\u5BA1\u6838",Pass:"\u901A\u8FC7",Outdate:"\u8FC7\u65F6",Banned:"\u5C4F\u853D"};function J(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}var $e=B({setup(){const e=G(),b=Q(),s=f(e.query.state??r.Pass),{data:n,checkedRowKeys:ye,fetchDataFn:N,pager:D,loading:T}=ve((t,l)=>async(o=e.query.page||1,g=50)=>{const k=e.query.state??r.Pass,O=await d.api.links.get({params:{page:o,size:g,state:k|0}});t.value=O.data,l.value=O.pagination}),p=W(),F=()=>({avatar:"",name:"",type:y.Friend,url:"",id:null,description:"",state:r.Pass}),c=f(!1),u=f(F());q(()=>e.query.state,async t=>{await N()}),q(()=>e.query.page,async t=>{await N()},{immediate:!0});const v=f({}),I=async()=>{const t=await d.api.links.state.get();v.value=t};X(()=>{I()});const Y=async()=>{const t=u.value.id;if(t){const l=await d.api.links(t).put({data:ne.omit(u.value,["id","created","hide"])}),o=n.value.findIndex(g=>g.id==t);l.state!=s.value?(n.value.splice(o,1),I()):n.value[o]={...n.value[o],...re(u.value)}}else{const{data:l}=await d.api.links.post({data:{...u.value}});n.value.unshift(l)}p.success("\u64CD\u4F5C\u6210\u529F"),c.value=!1,u.value=F()},M=f(),K=async()=>{const t=p.loading("\u68C0\u67E5\u4E2D",{duration:2e5});try{const l=await d.api.links.health.get({timeout:2e5});M.value=Object.entries(l).reduce((o,[g,k])=>({...o,[g.toLowerCase()]:k}),{}),p.success("\u68C0\u67E5\u5B8C\u6210")}catch(l){console.error(l)}finally{requestAnimationFrame(()=>{t.destroy()})}};return()=>a(Z,{actionsElement:a(L,null,[a(R,{icon:a(ee,null,null),variant:"primary",onClick:()=>{u.value=F(),c.value=!0}},null),a(R,{icon:a(ae,null,null),variant:"info",onClick:K,name:"\u68C0\u67E5\u53CB\u94FE\u53EF\u7528\u6027"},null)])},{default:()=>[a(me,{class:"min-h-[30px]",size:"medium",value:s.value,onUpdateValue:t=>{s.value=t,b.replace({name:te.Friend,query:{state:t}})}},{default:()=>[a(C,{name:r.Pass,tab:"\u670B\u53CB\u4EEC"},null),a(C,{name:r.Audit,tab:()=>a(A,{value:v.value.audit,processing:!0},{default:()=>[a(w,null,{default:()=>[i("\u5F85\u5BA1\u6838")]})]})},null),a(C,{name:r.Outdate,tab:()=>a(A,{value:v.value.outdate,type:"info"},{default:()=>[a(w,null,{default:()=>[i("\u8FC7\u65F6\u7684")]})]})},null),a(C,{name:r.Banned,tab:()=>a(A,{value:v.value.banned,type:"warning"},{default:()=>[a(w,null,{default:()=>[i("\u5C01\u7981\u7684")]})]})},null)]}),a(de,{loading:T.value,data:n,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"\u5934\u50CF",key:"avatar",width:80,render(t){return a(S,{name:t.name,avatar:t.avatar},null)}},{title:"\u540D\u79F0",key:"name",render(t){return a("a",{target:"_blank",href:t.url,rel:"noreferrer"},[t.name])}},{title:"\u63CF\u8FF0",key:"description",width:250,ellipsis:{lineClamp:2,tooltip:!0}},{title:"\u7F51\u5740",key:"url",render(t){const l=M.value?.[t.id];return a(he,{url:t.url,errorMessage:l?.message,status:l?.status},null)}},{title:"\u7C7B\u578B",key:"type",width:80,render(t){return["\u670B\u53CB","\u6536\u85CF"][t.type|0]}},{title:"\u5BF9\u65B9\u90AE\u7BB1",key:"email",render(t){return a("a",{href:`mailto:${t.email}`},[t.email])}},{title:"\u7ED3\u8BC6\u65F6\u95F4",key:"created",width:80,render(t){return a(ce,{time:t.created},null)}},{width:150,title:"\u64CD\u4F5C",fixed:"right",key:"action",render(t){return a(_,{wrap:!1},{default:()=>[t.state==r.Audit&&a(h,{text:!0,size:"tiny",type:"success",onClick:async()=>{await d.api.links.audit(t.id).patch(),p.success(`\u901A\u8FC7\u4E86\u6765\u81EA${t.name}\u7684\u53CB\u94FE\u9080\u8BF7`);const l=n.value.findIndex(o=>o.id==t.id);n.value.splice(l,1),v.value.audit--}},{default:()=>[i("\u901A\u8FC7")]}),a(h,{text:!0,size:"tiny",type:"info",onClick:l=>{c.value=!0,u.value={...t}}},{default:()=>[i("\u7F16\u8F91")]}),a(fe,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await d.api.links(t.id).delete(),p.success("\u5220\u9664\u6210\u529F"),await N(D.value.currentPage),t.state==r.Audit&&v.value.audit--}},{trigger:()=>a(h,{text:!0,type:"error",size:"tiny"},{default:()=>[i("\u79FB\u9664")]}),default:()=>a("span",{class:"max-w-48"},[i("\u786E\u5B9A\u8981\u5220\u9664\u53CB\u94FE "),t.name,i(" ?")])})]})}}],onFetchData:N,pager:D},null),a(ue,{transformOrigin:"center",show:c.value,onUpdateShow:t=>void(c.value=t)},{default:()=>[a(le,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:u.value.id?`\u7F16\u8F91: ${u.value.name}`:"\u65B0\u589E"},{default:()=>[a(pe,null,{default:()=>[a(m,{label:"\u540D\u5B57",required:!0},{default:()=>[a(x,{autofocus:!0,value:u.value.name,onInput:t=>void(u.value.name=t)},null)]}),a(m,{label:"\u5934\u50CF"},{default:()=>[a(x,{autofocus:!0,value:u.value.avatar,onInput:t=>void(u.value.avatar=t)},null)]}),a(m,{label:"\u7F51\u5740",required:!0},{default:()=>[a(x,{autofocus:!0,value:u.value.url,onInput:t=>void(u.value.url=t)},null)]}),a(m,{label:"\u63CF\u8FF0"},{default:()=>[a(x,{autofocus:!0,value:u.value.description,onInput:t=>void(u.value.description=t)},null)]}),a(m,{label:"\u7C7B\u578B"},{default:()=>[a(j,{placeholder:"\u9009\u62E9\u7C7B\u578B",options:[{label:"\u670B\u53CB",value:y.Friend},{label:"\u6536\u85CF",value:y.Collection}],value:u.value.type,onUpdateValue:t=>void(u.value.type=t|0)},null)]}),u.value.id&&a(m,{label:"\u72B6\u6001"},{default:()=>[a(j,{placeholder:"\u9009\u62E9\u72B6\u6001",options:Object.entries(ge).map(([t,l])=>({label:l,value:r[t]})),value:u.value.state,onUpdateValue:t=>void(u.value.state=t|0)},null)]})]}),a("div",{class:"text-right"},[a(_,{size:12,align:"center",inline:!0},{default:()=>[a(h,{type:"success",onClick:Y,round:!0},{default:()=>[i("\u786E\u5B9A")]}),a(h,{onClick:()=>{c.value=!1,u.value=F()},round:!0},{default:()=>[i("\u53D6\u6D88")]})]})])]})]})]})}});const he=B({props:{url:String,errorMessage:String,status:[String,Number]},setup(e){return()=>a("div",{class:"flex space-x-2 items-center"},[a("a",{target:"_blank",href:e.url,rel:"noreferrer"},[e.url]),typeof e.status<"u"&&(e.errorMessage?a(se,null,{trigger(){return a("div",{class:"h-2 w-2 bg-red-400 rounded-full"},null)},default(){return e.errorMessage}}):a("div",{class:"h-2 w-2 bg-green-300 rounded-full"},null))])}}),S=B(e=>{const b=f(!e.avatar);return ie(()=>{if(e.avatar){const s=new Image;s.src=e.avatar,s.onload=n=>{b.value=!0}}}),()=>{let s,n;return e.avatar?b.value?a(P,{src:e.avatar,round:!0},null):a(P,{round:!0},J(s=e.name.charAt(0))?s:{default:()=>[s]}):a(P,{round:!0},J(n=e.name.charAt(0))?n:{default:()=>[n]})}});S.props=["avatar","name"];export{$e as default};
