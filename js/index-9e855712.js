import{$ as l,a1 as h,a0 as b,aL as B,aa as Q,a9 as X,d as g,P as T,a2 as D,a3 as P,h as e,ak as Z,al as ee,L as te,eb as re,Q as V,bP as ie,l as z,aj as v,S as se,X as $,V as w,aD as ne,Y as k,ec as oe,cw as ae,g as le,dv as ue,m as F,k as ce,R as C,x,bT as de,bY as pe,z as c,u as ve,a as N,N as I}from"./index-524a5fea.js";import{F as fe}from"./Tag-3efc0e97.js";import{N as u}from"./FormItem-5f07fc31.js";import{N as me}from"./DynamicTags-7bf08500.js";import{N as R}from"./Form-88a5f5a7.js";import"./index-ef78730c.js";import"./Add-094210b4.js";var he=l("steps",`
 width: 100%;
 display: flex;
`,[l("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[h("&:last-child",[l("step-splitor","display: none;")])]),l("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l("step-content","flex: 1;",[l("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[b("title",`
 white-space: nowrap;
 flex: 0;
 `)]),b("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[l("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[b("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()]),l("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()]),l("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()])])]),Q("vertical","flex-direction: column;",[X("show-description",[h(">",[l("step","padding-bottom: 8px;")])]),h(">",[l("step","margin-bottom: 16px;",[h("&:last-child","margin-bottom: 0;"),h(">",[l("step-indicator",[h(">",[l("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),l("step-content",[b("description","margin-top: 8px;")])])])])])]);function ge(r,t){return typeof r!="object"||r===null||Array.isArray(r)?null:(r.props||(r.props={}),r.props.internalIndex=t+1,r)}function xe(r){return r.map((t,s)=>ge(t,s))}const be=Object.assign(Object.assign({},D.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean}),j=te("n-steps");var ze=g({name:"Steps",props:be,setup(r,{slots:t}){const{mergedClsPrefixRef:s}=T(r),n=D("Steps","-steps",he,re,r,s);return P(j,{props:r,mergedThemeRef:n,mergedClsPrefixRef:s,stepsSlots:t}),{mergedClsPrefix:s}},render(){const{mergedClsPrefix:r}=this;return e("div",{class:[`${r}-steps`,this.vertical&&`${r}-steps--vertical`]},xe(Z(ee(this))))}});const Ce={status:String,title:String,description:String,internalIndex:{type:Number,default:0}};var S=g({name:"Step",props:Ce,setup(r){const t=V(j,null);t||ie("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=T(),{props:n,mergedThemeRef:o,mergedClsPrefixRef:i,stepsSlots:E}=t,a=z(()=>n.vertical),y=z(()=>{const{status:d}=r;if(d)return d;{const{internalIndex:p}=r,{current:m}=n;if(m===void 0)return"process";if(p<m)return"finish";if(p===m)return n.status||"process";if(p>m)return"wait"}return"process"}),A=z(()=>{const{value:d}=y,{size:p}=n,{common:{cubicBezierEaseInOut:m},self:{stepHeaderFontWeight:q,[v("stepHeaderFontSize",p)]:_,[v("indicatorIndexFontSize",p)]:M,[v("indicatorSize",p)]:O,[v("indicatorIconSize",p)]:H,[v("indicatorTextColor",d)]:K,[v("indicatorBorderColor",d)]:L,[v("headerTextColor",d)]:W,[v("splitorColor",d)]:Y,[v("indicatorColor",d)]:G,[v("descriptionTextColor",d)]:J}}=o.value;return{"--n-bezier":m,"--n-description-text-color":J,"--n-header-text-color":W,"--n-indicator-border-color":L,"--n-indicator-color":G,"--n-indicator-icon-size":H,"--n-indicator-index-font-size":M,"--n-indicator-size":O,"--n-indicator-text-color":K,"--n-splitor-color":Y,"--n-step-header-font-size":_,"--n-step-header-font-weight":q}}),f=s?se("step",z(()=>{const{value:d}=y,{size:p}=n;return`${d[0]}${p[0]}`}),A,n):void 0;return{stepsSlots:E,mergedClsPrefix:i,vertical:a,mergedStatus:y,cssVars:s?void 0:A,themeClass:f?.themeClass,onRender:f?.onRender}},render(){const{mergedClsPrefix:r,onRender:t}=this,s=$(this.$slots.default,n=>{const o=n||this.description;return o?e("div",{class:`${r}-step-content__description`},o):null});return t?.(),e("div",{class:[`${r}-step`,this.themeClass,s&&`${r}-step--show-description`,`${r}-step--${this.mergedStatus}-status`],style:this.cssVars},e("div",{class:`${r}-step-indicator`},e("div",{class:`${r}-step-indicator-slot`},e(ne,null,{default:()=>$(this.$slots.icon,n=>{const{mergedStatus:o,stepsSlots:i}=this;return o==="finish"||o==="error"?o==="finish"?e(k,{clsPrefix:r,key:"finish"},{default:()=>w(i["finish-icon"],()=>[e(fe,null)])}):o==="error"?e(k,{clsPrefix:r,key:"error"},{default:()=>w(i["error-icon"],()=>[e(oe,null)])}):null:n||e("div",{key:this.internalIndex,class:`${r}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?e("div",{class:`${r}-step-splitor`}):null),e("div",{class:`${r}-step-content`},e("div",{class:`${r}-step-content-header`},e("div",{class:`${r}-step-content-header__title`},w(this.$slots.title,()=>[this.title])),this.vertical?null:e("div",{class:`${r}-step-splitor`})),s))}});const Ee="_full_1tlcw_1";var ye={full:Ee};const Be=()=>V("configs");var De=g({setup(){ae(()=>{le()&&ue()});const r=F({});ce(async()=>{const s=await C.api.init.configs.default.get();Object.assign(r,s)}),P("configs",r);const t=x(0);return()=>e("div",{class:ye.full},e(de,{title:"\u521D\u59CB\u5316",class:"modal-card sm m-auto form-card"},e(ze,{size:"small",current:t.value},e(S,{status:t.value>0?"finish":"process",title:"\u7AD9\u70B9\u8BBE\u7F6E",description:"\u5148\u8BBE\u7F6E\u4E00\u4E0B\u7AD9\u70B9\u76F8\u5173\u914D\u7F6E\u5427"}),e(S,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"\u4E3B\u4EBA\u4FE1\u606F",description:"\u8BF7\u544A\u8BC9\u4F60\u7684\u540D\u5B57"}),e(S,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",description:"\u4E00\u5207\u5C31\u7EEA\u4E86"})),e("div",{class:"mt-[3.5rem]"},JSON.stringify(r)==="{}"?e("div",{class:"text-center py-4"},e(pe,null)):e([we,Se,Fe][t.value],{onNext(){t.value++}}))))}});const U={onNext:{type:Function,required:!0}},we=g({props:U,setup(r){const t=Be(),s=x(t?.seo?.title||""),n=x(t?.seo?.keywords),o=x(t?.seo?.description||""),i=F({adminUrl:location.origin+"/qaqdmin",serverUrl:location.origin+"/api/v2",webUrl:location.origin,wsUrl:location.origin}),E=async()=>{await Promise.all([C.api.init.configs("seo").patch({data:{title:s.value,keywords:n.value,description:o.value}}),C.api.init.configs("url").patch({data:{...i}})]),r.onNext()};return()=>e(R,null,e(u,{label:"\u7AD9\u70B9\u6807\u9898",required:!0},e(c,{value:s.value,onUpdateValue:a=>void(s.value=a)})),e(u,{label:"\u7AD9\u70B9\u63CF\u8FF0",required:!0},e(c,{value:o.value,onUpdateValue:a=>void(o.value=a)})),e(u,{label:"\u5173\u952E\u5B57"},e(me,{value:n.value,onUpdateValue:a=>void(n.value=a)})),e(u,{label:"\u524D\u7AEF\u5730\u5740"},e(c,{value:i.webUrl,onInput:a=>void(i.webUrl=a)})),e(u,{label:"API \u5730\u5740"},e(c,{value:i.serverUrl,onInput:a=>void(i.serverUrl=a)})),e(u,{label:"\u540E\u53F0\u5730\u5740"},e(c,{value:i.adminUrl,onInput:a=>void(i.adminUrl=a)})),e(u,{label:"Gateway \u5730\u5740"},e(c,{value:i.wsUrl,onInput:a=>void(i.wsUrl=a)})),e(N,{justify:"end"},e(I,{onClick:E,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),Se=g({props:U,setup(r){const t=F({}),s=x(""),n=ve(),o=async()=>{if(s.value!==t.password){n.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}await C.api.user.register.post({data:{...t}}),r.onNext()};return()=>e(R,null,e(u,{label:"\u4F60\u7684\u540D\u5B57 (\u767B\u5F55\u51ED\u8BC1)",required:!0},e(c,{value:t.username,onUpdateValue:i=>{t.username=i}})),e(u,{label:"\u6635\u79F0"},e(c,{value:t.name,onUpdateValue:i=>{t.name=i}})),e(u,{label:"\u90AE\u7BB1",required:!0},e(c,{value:t.mail,onUpdateValue:i=>{t.mail=i}})),e(u,{label:"\u5BC6\u7801",required:!0},e(c,{value:t.password,type:"password",onUpdateValue:i=>{t.password=i}})),e(u,{label:"\u786E\u8BA4\u5BC6\u7801",required:!0},e(c,{value:s.value,type:"password",onUpdateValue:i=>{s.value=i}})),e(u,{label:"\u4E2A\u4EBA\u9996\u9875"},e(c,{value:t.url,onUpdateValue:i=>{t.url=i}})),e(u,{label:"\u5934\u50CF"},e(c,{value:t.avatar,onUpdateValue:i=>{t.avatar=i}})),e(u,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(c,{value:t.introduce,onUpdateValue:i=>{t.introduce=i}})),e(N,{justify:"end"},e(I,{disabled:!t.username||!t.username||!t.password||!s.value,onClick:o,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),Fe=g({props:U,setup(r){return()=>e(N,{class:"text-center",vertical:!0},e("span",{class:"text-base"},"\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u7684\u6B65\u9AA4\uFF0C\u5E72\u5F97\u6F02\u4EAE\u3002"),e(I,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},"LINK START"))}});export{De as default};
