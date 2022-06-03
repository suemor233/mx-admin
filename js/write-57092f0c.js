import{H as P}from"./rounded-button-ca5bd9f3.js";import{P as U,S as T,M as V,T as $}from"./parse-content-2887352a.js";import{E}from"./toggle-2d918aab.js";import{f as b,j as M,k as B,l as H,m as v,p as W,n as w,R as c,y as r,u as q,x as z,a as t,C as D,F as I,bm as F,I as j,W as A,H as L,bn as O,bo as Y}from"./index-44de73b8.js";import{U as _}from"./underline-input-da87668d.js";import{N as G}from"./DynamicTags-0bd05039.js";import{i as J}from"./isString-9b1c3b6a.js";import{N as p}from"./FormItem-2598ad4a.js";import{N as R}from"./Select-038acb81.js";import{N as K}from"./Switch-c746fddb.js";import"./DynamicInput-0caad07b.js";import"./ChevronRight-c12a4a39.js";import"./Add-f33050aa.js";import"./ButtonGroup-58b0f927.js";import"./InputNumber-7ce9df7d.js";import"./Form-c420edc4.js";import"./use-async-monaco-5b384207.js";import"./index-f686fa6c.js";import"./editor.main-a2538652.js";import"./use-save-confirm-7c8abab0.js";import"./js-yaml-fae8e8ce.js";import"./use-react-dd9622a6.js";import"./throttle-7a7d7907.js";import"./Tag-a74b1f55.js";import"./prop-46b62c35.js";import"./index-cd040040.js";const Se=b(()=>{const S=M(),u=B(H);v(async()=>{await u.fetch()});const C=()=>({categoryId:u.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,tags:[],summary:"",allowComment:!0,id:void 0,images:[],meta:void 0}),x=e=>{const l=O(a),n=Object.keys(l);for(const o in e)n.includes(o)&&(a[o]=e[o])},a=W(C()),s=w(()=>S.query.id),d=w(()=>u.get(a.categoryId)||u.data?.value?.[0]||{});v(async()=>{const e=s.value;if(e&&typeof e=="string"){const l=await c.api.posts(e).get();x(l.data)}});const g=r(!1),y=q(),N=z(),k=async()=>{const e={...a,categoryId:d.value.id,summary:a.summary&&a.summary.trim()!=""?a.summary.trim():null};if(s.value){if(!J(s.value))return;const l=s.value;await c.api.posts(l).put({data:e}),y.success("\u4FEE\u6539\u6210\u529F")}else await c.api.posts.post({data:e}),y.success("\u53D1\u5E03\u6210\u529F");N.push({name:Y.ViewPost,hash:"|publish"})};return()=>t(D,{title:s.value?"\u4FEE\u6539\u6587\u7AE0":"\u64B0\u5199\u65B0\u6587\u7AE0",actionsElement:t(I,null,[t(U,{data:a,onHandleYamlParsedMeta:e=>{const{title:l,slug:n,...o}=e;a.title=l??a.title,a.slug=n??a.slug,a.meta={...o}}},null),t(P,{icon:t(F,null,null),onClick:k},null)]),footerButtonElement:t(I,null,[t("button",{onClick:()=>{g.value=!0}},[t(j,null,{default:()=>[t(T,null,null)]})])])},{default:()=>[t(V,{class:"mt-3 relative z-10",label:"\u60F3\u60F3\u53D6\u4E2A\u4EC0\u4E48\u6807\u9898\u597D\u5462~",value:a.title,onChange:e=>{a.title=e}},null),t("div",{class:"text-gray-500 py-3"},[t("label",{class:"prefix"},[`${A}/${d.value.slug}/`]),t(_,{class:"ml-2",value:a.slug,onChange:e=>{a.slug=e}},null)]),t(E,{loading:!!(s.value&&typeof a.id>"u"),onChange:e=>{a.text=e},text:a.text},null),t($,{show:g.value,onUpdateShow:e=>{g.value=e},data:a},{default:()=>[t(p,{label:"\u5206\u7C7B",required:!0,path:"category"},{default:()=>[t(R,{placeholder:"\u8BF7\u9009\u62E9",value:d.value.id,onUpdateValue:e=>{a.categoryId=e},options:u.data.value?.map(e=>({label:e.name,value:e.id,key:e.id}))||[]},null)]}),t(p,{label:"\u6807\u7B7E"},{default:()=>[t(G,{value:a.tags,onUpdateValue:e=>{a.tags.length=0,a.tags.push(...e)}},{input({submit:e}){const l=b({setup(){const n=r([]),o=r(!1),h=r(""),f=r();return v(async()=>{o.value=!0,f.value&&f.value.$el.querySelector("input").focus();const{data:i}=await c.api.categories.get({params:{type:"Tag"}});n.value=i.map(m=>({label:`${m.name} (${m.count})`,value:m.name,key:m.name})),o.value=!1}),()=>t(R,{ref:f,size:"small",value:h.value,clearable:!0,loading:o.value,filterable:!0,tag:!0,options:n.value,onUpdateValue:i=>{h.value=i,e(i)}},null)}});return t(l,null,null)}})]}),t(p,{label:"\u6982\u8981"},{default:()=>[t(L,{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"\u6587\u7AE0\u6982\u8981",value:a.summary,onInput:e=>void(a.summary=e)},null)]}),t(p,{label:"\u7248\u6743\u6CE8\u660E",labelAlign:"right",labelPlacement:"left"},{default:()=>[t(K,{value:a.copyright,onUpdateValue:e=>void(a.copyright=e)},null)]})]})]})});export{Se as default};
