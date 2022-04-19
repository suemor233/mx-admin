import{d as c,o as y,e as g,f as w,R as u,u as E,i as D,w as T,k as M,m as N,h as t,F as x,I as h,B as b,N as L,a as O,cp as R,n as I}from"./index-578dead8.js";import{T as P}from"./title-link-0ff06fb1.js";import{D as S}from"./delete-confirm-088ecf85.js";import{T as z}from"./index-1bdc3b1f.js";import{E as _}from"./edit-column-ece621ee.js";import{R as C}from"./relative-time-7946e787.js";import{u as $}from"./use-table-b845396e.js";import{H}from"./rounded-button-ff1155cf.js";import{N as V}from"./DataTable-6b52f99d.js";import{N as A}from"./Popconfirm-b7def626.js";import"./ExternalLink-5a759136.js";import"./Select-1e33caab.js";import"./Tag-8b6dd0c0.js";import"./Icon-d8aa7a41.js";import"./Forward-374a8df7.js";import"./index-c4b135bb.js";import"./ChevronRight-13c2ec37.js";import"./Tooltip-ce09caed.js";const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},U=w("path",{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400L0 512z",fill:"currentColor"},null,-1),q=[U];var j=c({name:"Bookmark",render:function(n,o){return y(),g("svg",K,q)}});const G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},J=w("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"currentColor"},null,-1),Q=[J];var W=c({name:"Heart",render:function(n,o){return y(),g("svg",G,Q)}});const X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Y=w("g",{fill:"none"},[w("path",{d:"M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15zm7.27 5.857l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363zM7.53 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z",fill:"currentColor"})],-1),Z=[Y];var ee=c({name:"EyeOff20Filled",render:function(n,o){return y(),g("svg",X,Z)}});const ke=c({name:"NoteList",setup(){const{loading:d,checkedRowKeys:n,data:o,pager:k,sortProps:l,fetchDataFn:F}=$((s,e)=>async(r=v.query.page||1,a=20,f)=>{const p=await u.api.notes.get({params:{db_query:f,page:r,size:a,select:"title _id nid id created modified mood weather hide secret hasMemory coordinates location count",...l.sortBy?{sortBy:l.sortBy,sortOrder:l.sortOrder}:{}}});s.value=p.data,e.value=p.pagination}),m=E(),v=D(),i=F;T(()=>v.query.page,async s=>{await i(s)}),M(async()=>{await i()});const B=c({setup(){const s=N([{type:"selection",options:["none","all"]},{title:"\u5E8F\u53F7",width:64,key:"nid"},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:280,filter:!0,filterOptions:[{label:"\u56DE\u5FC6\u9879",value:"hasMemory"},{label:"\u9690\u85CF\u9879",value:"hide"}],render(e){const r=e.secret&&+new Date(e.secret)-+new Date>0;return t(P,{inPageTo:"/notes/edit?id="+e.id,title:e.title,externalLinkTo:"/notes/"+e.nid,id:e.id,withToken:e.hide||r},{default(){return t(x,null,e.hide||r?t(h,{color:"#34495e"},t(ee,null)):null,e.hasMemory?t(h,{color:"#e74c3c"},t(j,null)):null)}})}},{title:"\u5FC3\u60C5",key:"mood",width:100,render(e,r){return t(_,{initialValue:o.value[r].mood??"",onSubmit:async a=>{await u.api.notes(e.id).put({data:{mood:a}}),m.success("\u4FEE\u6539\u6210\u529F"),o.value[r].mood=a},placeholder:"\u5FC3\u60C5"})}},{title:"\u5929\u6C14",key:"weather",width:100,render(e,r){return t(_,{initialValue:o.value[r].weather??"",onSubmit:async a=>{await u.api.notes(e.id).put({data:{weather:a}}),m.success("\u4FEE\u6539\u6210\u529F"),o.value[r].weather=a},placeholder:"\u5929\u6C14"})}},{title:"\u5730\u70B9",key:"location",width:200,render(e){const{coordinates:r,location:a}=e;return a?t(V,{class:"truncate max-w-[200px]"},{tooltip(){return t("div",{class:""},t("p",null,a),t("p",null,r?.longitude,", ",r?.latitude))},default(){return a}}):null}},{title:()=>t(h,null,t(b,null)),key:"count.read",ellipsis:!0,render(e){return e.count?.read||0}},{title:()=>t(h,null,t(W,null)),ellipsis:!0,key:"count.like",render(e){return e.count?.like||0}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",width:200,render(e){return t(C,{time:e.created})}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,width:200,render(e){return t(C,{time:e.modified})}},{title:"\u64CD\u4F5C",key:"id",width:100,fixed:"right",render(e){return t(O,null,t(A,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await u.api.notes(e.id).delete(),m.success("\u5220\u9664\u6210\u529F"),await i(k.value.currentPage)}},{trigger:()=>t(L,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664 ",e.title," ?")}))}}]);return()=>t(z,{nTableProps:{async onUpdateFilters(e,r){const{title:a}=e;if(!a||a.length===0){await i();return}await i(1,void 0,a.reduce((f,p)=>({...f,[p]:!0}),{}))}},loading:d.value,columns:s,data:o,onFetchData:i,pager:k,onUpdateCheckedRowKeys:e=>{n.value=e},onUpdateSorter:async e=>{l.sortBy=e.sortBy,l.sortOrder=e.sortOrder}})}});return()=>t(I,null,{actions:()=>t(x,null,t(S,{checkedRowKeys:n.value,onDelete:async()=>{const s=await Promise.allSettled(n.value.map(e=>u.api.notes(e).delete()));for(const e of s)e.status==="rejected"&&m.success("\u5220\u9664\u5931\u8D25\uFF0C"+e.reason.message);n.value.length=0,i()}}),t(H,{to:"/notes/edit",icon:t(R,null)})),default:()=>t(B,null)})}});export{ke as ManageNoteListView};
