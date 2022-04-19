import{$ as l,a1 as h,a0 as b,aL as w,aa as Z,a9 as ee,d as x,P,a2 as V,a3 as R,h as e,ak as te,al as re,L as se,eb as ie,Q as j,bP as ne,l as z,aj as v,S as oe,X as A,V as B,aD as ae,Y as k,ec as le,x as g,k as T,ed as D,cw as ue,g as ce,dv as de,m as F,R as C,bU as pe,bZ as ve,z as c,u as fe,a as I,N}from"./index-6eefbfaf.js";import{F as me}from"./Tag-0414b6ae.js";import{N as u}from"./FormItem-4c0fd2f6.js";import{N as he}from"./DynamicTags-119625db.js";import{N as q}from"./Form-bc4fd264.js";import"./index-63dc8f93.js";import"./Add-295e379a.js";var ge=l("steps",`
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
 `,[w()]),l("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[w()]),l("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[w()])])]),Z("vertical","flex-direction: column;",[ee("show-description",[h(">",[l("step","padding-bottom: 8px;")])]),h(">",[l("step","margin-bottom: 16px;",[h("&:last-child","margin-bottom: 0;"),h(">",[l("step-indicator",[h(">",[l("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),l("step-content",[b("description","margin-top: 8px;")])])])])])]);function xe(t,r){return typeof t!="object"||t===null||Array.isArray(t)?null:(t.props||(t.props={}),t.props.internalIndex=r+1,t)}function be(t){return t.map((r,i)=>xe(r,i))}const ze=Object.assign(Object.assign({},V.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean}),_=se("n-steps");var Ce=x({name:"Steps",props:ze,setup(t,{slots:r}){const{mergedClsPrefixRef:i}=P(t),n=V("Steps","-steps",ge,ie,t,i);return R(_,{props:t,mergedThemeRef:n,mergedClsPrefixRef:i,stepsSlots:r}),{mergedClsPrefix:i}},render(){const{mergedClsPrefix:t}=this;return e("div",{class:[`${t}-steps`,this.vertical&&`${t}-steps--vertical`]},be(te(re(this))))}});const ye={status:String,title:String,description:String,internalIndex:{type:Number,default:0}};var S=x({name:"Step",props:ye,setup(t){const r=j(_,null);r||ne("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=P(),{props:n,mergedThemeRef:o,mergedClsPrefixRef:s,stepsSlots:y}=r,a=z(()=>n.vertical),E=z(()=>{const{status:d}=t;if(d)return d;{const{internalIndex:p}=t,{current:m}=n;if(m===void 0)return"process";if(p<m)return"finish";if(p===m)return n.status||"process";if(p>m)return"wait"}return"process"}),$=z(()=>{const{value:d}=E,{size:p}=n,{common:{cubicBezierEaseInOut:m},self:{stepHeaderFontWeight:M,[v("stepHeaderFontSize",p)]:O,[v("indicatorIndexFontSize",p)]:H,[v("indicatorSize",p)]:K,[v("indicatorIconSize",p)]:L,[v("indicatorTextColor",d)]:W,[v("indicatorBorderColor",d)]:G,[v("headerTextColor",d)]:J,[v("splitorColor",d)]:Q,[v("indicatorColor",d)]:X,[v("descriptionTextColor",d)]:Y}}=o.value;return{"--n-bezier":m,"--n-description-text-color":Y,"--n-header-text-color":J,"--n-indicator-border-color":G,"--n-indicator-color":X,"--n-indicator-icon-size":L,"--n-indicator-index-font-size":H,"--n-indicator-size":K,"--n-indicator-text-color":W,"--n-splitor-color":Q,"--n-step-header-font-size":O,"--n-step-header-font-weight":M}}),f=i?oe("step",z(()=>{const{value:d}=E,{size:p}=n;return`${d[0]}${p[0]}`}),$,n):void 0;return{stepsSlots:y,mergedClsPrefix:s,vertical:a,mergedStatus:E,cssVars:i?void 0:$,themeClass:f?.themeClass,onRender:f?.onRender}},render(){const{mergedClsPrefix:t,onRender:r}=this,i=A(this.$slots.default,n=>{const o=n||this.description;return o?e("div",{class:`${t}-step-content__description`},o):null});return r?.(),e("div",{class:[`${t}-step`,this.themeClass,i&&`${t}-step--show-description`,`${t}-step--${this.mergedStatus}-status`],style:this.cssVars},e("div",{class:`${t}-step-indicator`},e("div",{class:`${t}-step-indicator-slot`},e(ae,null,{default:()=>A(this.$slots.icon,n=>{const{mergedStatus:o,stepsSlots:s}=this;return o==="finish"||o==="error"?o==="finish"?e(k,{clsPrefix:t,key:"finish"},{default:()=>B(s["finish-icon"],()=>[e(me,null)])}):o==="error"?e(k,{clsPrefix:t,key:"error"},{default:()=>B(s["error-icon"],()=>[e(le,null)])}):null:n||e("div",{key:this.internalIndex,class:`${t}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?e("div",{class:`${t}-step-splitor`}):null),e("div",{class:`${t}-step-content`},e("div",{class:`${t}-step-content-header`},e("div",{class:`${t}-step-content-header__title`},B(this.$slots.title,()=>[this.title])),this.vertical?null:e("div",{class:`${t}-step-splitor`})),i))}});const Ee="_full_1tlcw_1";var we={full:Ee};const Be=()=>j("configs");var Pe=x({setup(){const t=g(!1);T(()=>{const n=new Image;n.src=D,n.onload=o=>{t.value=!0}}),ue(()=>{ce()&&de()});const r=F({});T(async()=>{const n=await C.api.init.configs.default.get();Object.assign(r,n)}),R("configs",r);const i=g(0);return()=>e("div",{class:we.full},t.value&&e("div",{class:"bg-image",style:`--bg: url(${D})`}),e(pe,{title:"\u521D\u59CB\u5316",class:"modal-card sm m-auto form-card"},e(Ce,{size:"small",current:i.value},e(S,{status:i.value>0?"finish":"process",title:"\u7AD9\u70B9\u8BBE\u7F6E",description:"\u5148\u8BBE\u7F6E\u4E00\u4E0B\u7AD9\u70B9\u76F8\u5173\u914D\u7F6E\u5427"}),e(S,{status:i.value>1?"finish":i.value<1?"wait":"process",title:"\u4E3B\u4EBA\u4FE1\u606F",description:"\u8BF7\u544A\u8BC9\u4F60\u7684\u540D\u5B57"}),e(S,{status:i.value>2?"finish":i.value<2?"wait":"process",title:"(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",description:"\u4E00\u5207\u5C31\u7EEA\u4E86"})),e("div",{class:"mt-[3.5rem]"},JSON.stringify(r)==="{}"?e("div",{class:"text-center py-4"},e(ve,null)):e([Se,Fe,Ie][i.value],{onNext(){i.value++}}))))}});const U={onNext:{type:Function,required:!0}},Se=x({props:U,setup(t){const r=Be(),i=g(r?.seo?.title||""),n=g(r?.seo?.keywords),o=g(r?.seo?.description||""),s=F({adminUrl:location.origin+"/qaqdmin",serverUrl:location.origin+"/api/v2",webUrl:location.origin,wsUrl:location.origin}),y=async()=>{await Promise.all([C.api.init.configs("seo").patch({data:{title:i.value,keywords:n.value,description:o.value}}),C.api.init.configs("url").patch({data:{...s}})]),t.onNext()};return()=>e(q,null,e(u,{label:"\u7AD9\u70B9\u6807\u9898",required:!0},e(c,{value:i.value,onUpdateValue:a=>void(i.value=a)})),e(u,{label:"\u7AD9\u70B9\u63CF\u8FF0",required:!0},e(c,{value:o.value,onUpdateValue:a=>void(o.value=a)})),e(u,{label:"\u5173\u952E\u5B57"},e(he,{value:n.value,onUpdateValue:a=>void(n.value=a)})),e(u,{label:"\u524D\u7AEF\u5730\u5740"},e(c,{value:s.webUrl,onInput:a=>void(s.webUrl=a)})),e(u,{label:"API \u5730\u5740"},e(c,{value:s.serverUrl,onInput:a=>void(s.serverUrl=a)})),e(u,{label:"\u540E\u53F0\u5730\u5740"},e(c,{value:s.adminUrl,onInput:a=>void(s.adminUrl=a)})),e(u,{label:"Gateway \u5730\u5740"},e(c,{value:s.wsUrl,onInput:a=>void(s.wsUrl=a)})),e(I,{justify:"end"},e(N,{onClick:y,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),Fe=x({props:U,setup(t){const r=F({}),i=g(""),n=fe(),o=async()=>{if(i.value!==r.password){n.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}await C.api.user.register.post({data:{...r}}),t.onNext()};return()=>e(q,null,e(u,{label:"\u4F60\u7684\u540D\u5B57 (\u767B\u5F55\u51ED\u8BC1)",required:!0},e(c,{value:r.username,onUpdateValue:s=>{r.username=s}})),e(u,{label:"\u6635\u79F0"},e(c,{value:r.name,onUpdateValue:s=>{r.name=s}})),e(u,{label:"\u90AE\u7BB1",required:!0},e(c,{value:r.mail,onUpdateValue:s=>{r.mail=s}})),e(u,{label:"\u5BC6\u7801",required:!0},e(c,{value:r.password,type:"password",onUpdateValue:s=>{r.password=s}})),e(u,{label:"\u786E\u8BA4\u5BC6\u7801",required:!0},e(c,{value:i.value,type:"password",onUpdateValue:s=>{i.value=s}})),e(u,{label:"\u4E2A\u4EBA\u9996\u9875"},e(c,{value:r.url,onUpdateValue:s=>{r.url=s}})),e(u,{label:"\u5934\u50CF"},e(c,{value:r.avatar,onUpdateValue:s=>{r.avatar=s}})),e(u,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(c,{value:r.introduce,onUpdateValue:s=>{r.introduce=s}})),e(I,{justify:"end"},e(N,{disabled:!r.username||!r.username||!r.password||!i.value,onClick:o,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),Ie=x({props:U,setup(t){return()=>e(I,{class:"text-center",vertical:!0},e("span",{class:"text-base"},"\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u7684\u6B65\u9AA4\uFF0C\u5E72\u5F97\u6F02\u4EAE\u3002"),e(N,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},"LINK START"))}});export{Pe as default};
