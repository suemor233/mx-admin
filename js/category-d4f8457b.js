import{H as T}from"./rounded-button-ff1155cf.js";import{d as x,j as z,m as f,x as p,u as D,k as I,R as o,w as E,h as e,q as R,N as l,a as F,cl as N,F as M,A as q,n as H,bT as U,C as j,bU as L,z as b}from"./index-578dead8.js";import{t as P}from"./index-1bdc3b1f.js";import{N as O}from"./Badge-1847a252.js";import{N as V}from"./Tag-8b6dd0c0.js";import{N as k}from"./FormItemRow-5f5717ec.js";import{a as S}from"./DataTable-6b52f99d.js";import{N as $}from"./Popconfirm-b7def626.js";import{N as G}from"./Form-cf0ca6a6.js";import"./Select-1e33caab.js";import"./FormItem-b7d69965.js";import"./index-c4b135bb.js";import"./Icon-d8aa7a41.js";import"./Forward-374a8df7.js";import"./ChevronRight-13c2ec37.js";import"./Tooltip-ce09caed.js";const oe=x(s=>{const a=z(j),c=f([]),i=p(!0),u=a.fetch,y=D();I(async()=>{i.value=!0,await u(),i.value=!1;const{data:t}=await o.api.categories.get({params:{type:"tag"}});c.push(...t)});const m=p(""),d=f([]);E(()=>m.value,async t=>{const r=await o.api.categories(t).get({params:{tag:"true"}});d.length=0,d.push(...r.data)});const n=p(!1),w=()=>({name:"",slug:""}),h=p(w());return()=>e(H,{actionsElement:e(M,null,e(T,{variant:"success",icon:e(q,null),onClick:()=>{n.value=!0,h.value=w()}}))},e(N,{prefix:"bar"},"\u5206\u7C7B"),e(B,{show:n,onSubmit:async t=>{const{name:r,slug:C}=t,v=typeof n.value=="string"?n.value:null;if(v){await o.api.categories(v).put({data:{name:r,slug:C,type:0}}),y.success("\u4FEE\u6539\u6210\u529F");const g=a.data.value.findIndex(A=>A.id==v);a.data.value[g]={...a.data.value[g],...t}}else{const g=await o.api.categories.post({data:{name:r,slug:C}});y.success("\u521B\u5EFA\u6210\u529F"),a.data.value.push(g.data)}},initialState:h.value}),e(S,{rowClassName:()=>P,size:"small",bordered:!1,data:a.data.value||[],remote:!0,loading:i.value,columns:[{title:"\u540D\u79F0",key:"name"},{title:"\u6570",key:"count"},{title:"\u8DEF\u5F84",key:"slug",width:300},{width:300,title:"\u64CD\u4F5C",fixed:"right",key:"id",render(t){return e(F,{size:12},e(l,{size:"tiny",text:!0,type:"primary",onClick:r=>{h.value={name:t.name,slug:t.slug},n.value=t.id}},"\u7F16\u8F91"),e($,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await o.api.categories(t.id).delete(),y.success("\u5220\u9664\u6210\u529F"),await a.fetch(!0)}},{trigger:()=>e(l,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664 ",t.title," ?")}))}}]}),e(N,{prefix:"bar"},"\u6807\u7B7E"),e(F,{size:12},c.map(t=>e(O,{value:t.count,key:t.name},e(V,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:m.value==t.name,onUpdateChecked:r=>{r?m.value=t.name:m.value=""}},t.name)))),d.length!=0&&e(S,{remote:!0,class:"mt-4",data:d,columns:[{title:"\u6807\u9898",key:"title",render(t){return e(R,{to:"/posts/edit?id="+t.id},e(l,{type:"primary",text:!0},t.title))}},{title:"\u5206\u7C7B",key:"category",render(t){return t.category.name}}]}))}),B=x(s=>{const a=f(s.initialState??{name:"",slug:""});E(()=>s.initialState,u=>{u&&(a.name=u.name,a.slug=u.slug)});const c=D(),i=()=>{if(!a.name||!a.slug){c.error("\u540D\u5B57 \u548C \u8DEF\u5F84 \u4E0D\u80FD\u4E3A\u7A7A");return}s.onSubmit(a),s.show.value=!1};return()=>e(U,{transformOrigin:"center",show:!!s.show.value,onUpdateShow:u=>{s.show.value=u}},{default:()=>e(L,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:s.initialState?"\u7F16\u8F91":"\u65B0\u5EFA"},e(G,{onSubmit:i,model:a,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},e(k,{path:"name",label:"\u540D\u5B57"},e(b,{placeholder:"",onInput:u=>{a.name=u},value:a.name})),e(k,{path:"slug",label:"\u8DEF\u5F84"},e(b,{placeholder:"",onInput:u=>{a.slug=u},value:a.slug})),e("div",{class:"text-center"},e(F,{size:12,align:"center",inline:!0},e(l,{type:"success",onClick:i,round:!0},"\u786E\u5B9A"),e(l,{onClick:()=>s.show.value=!1,round:!0},"\u53D6\u6D88")))))})});B.props=["initialState","onSubmit","show"];export{oe as CategoryView};
