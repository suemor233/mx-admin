import{Y as a,_ as $,Z as x,aK as B,a7 as X,a6 as ee,d as g,O as P,$ as R,a0 as V,h as e,aj as te,ak as re,K as se,ea as ie,P as j,bO as ne,k as b,ai as v,Q as oe,ah as A,S as E,aC as ae,T,eb as le,v as h,j as k,ec as D,l as S,R as z,bT as ue,bY as ce,y as c,u as de,a as F,N as I}from"./index-4d27830d.js";import{F as pe}from"./Tag-15d88ccb.js";import{N as u}from"./FormItem-614c2801.js";import{N as ve}from"./DynamicTags-386a592e.js";import{N as _}from"./Form-57eda297.js";import"./index-4bc2c49d.js";import"./Add-b646b751.js";var fe=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[$("&:last-child",[a("step-splitor",{display:"none"})])]),a("step-splitor",`
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
 `),a("step-content",{flex:1},[a("step-content-header",`
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
 `,[x("title",`
 white-space: nowrap;
 flex: 0;
 `)]),x("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a("step-indicator",`
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
 `,[a("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[x("index",`
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
 `,[B()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()])])]),X("vertical",{flexDirection:"column"},[ee("show-description",[a("step",{paddingBottom:"8px"})]),a("step",{marginBottom:"16px"},[$("&:last-child",{marginBottom:0})]),a("step-splitor",`
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `),a("step-indicator",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 `)]),a("step-content",[x("description",{marginTop:"8px"})])])]);function me(t,r){return typeof t!="object"||t===null||Array.isArray(t)?null:(t.props||(t.props={}),t.props.internalIndex=r+1,t)}function he(t){return t.map((r,i)=>me(r,i))}const ge=Object.assign(Object.assign({},R.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean}),q=se("n-steps");var xe=g({name:"Steps",props:ge,setup(t,{slots:r}){const{mergedClsPrefixRef:i}=P(t),n=R("Steps","-steps",fe,ie,t,i);return V(q,{props:t,mergedThemeRef:n,mergedClsPrefixRef:i,stepsSlots:r}),{mergedClsPrefix:i}},render(){const{mergedClsPrefix:t}=this;return e("div",{class:[`${t}-steps`,this.vertical&&`${t}-steps--vertical`]},he(te(re(this))))}});const be={status:String,title:String,description:String,internalIndex:{type:Number,default:0}};var w=g({name:"Step",props:be,setup(t){const r=j(q,null);r||ne("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=P(),{props:n,mergedThemeRef:o,mergedClsPrefixRef:s,stepsSlots:C}=r,l=b(()=>n.vertical),y=b(()=>{const{status:d}=t;if(d)return d;{const{internalIndex:p}=t,{current:m}=n;if(m===void 0)return"process";if(p<m)return"finish";if(p===m)return n.status||"process";if(p>m)return"wait"}return"process"}),U=b(()=>{const{value:d}=y,{size:p}=n,{common:{cubicBezierEaseInOut:m},self:{stepHeaderFontWeight:O,[v("stepHeaderFontSize",p)]:K,[v("indicatorIndexFontSize",p)]:M,[v("indicatorSize",p)]:H,[v("indicatorIconSize",p)]:W,[v("indicatorTextColor",d)]:L,[v("indicatorBorderColor",d)]:Y,[v("headerTextColor",d)]:G,[v("splitorColor",d)]:J,[v("indicatorColor",d)]:Q,[v("descriptionTextColor",d)]:Z}}=o.value;return{"--n-bezier":m,"--n-description-text-color":Z,"--n-header-text-color":G,"--n-indicator-border-color":Y,"--n-indicator-color":Q,"--n-indicator-icon-size":W,"--n-indicator-index-font-size":M,"--n-indicator-size":H,"--n-indicator-text-color":L,"--n-splitor-color":J,"--n-step-header-font-size":K,"--n-step-header-font-weight":O}}),f=oe("step",b(()=>{const{value:d}=y,{size:p}=n;return`${d[0]}${p[0]}`}),U,n);return{stepsSlots:C,mergedClsPrefix:s,vertical:l,mergedStatus:y,cssVars:i?void 0:U,themeClass:f?.themeClass,onRender:f?.onRender}},render(){const{mergedClsPrefix:t,onRender:r}=this,i=A(this.$slots.default,n=>{const o=n||this.description;return o?e("div",{class:`${t}-step-content__description`},o):null});return r?.(),e("div",{class:[`${t}-step`,this.themeClass,i&&`${t}-step--show-description`,`${t}-step--${this.mergedStatus}-status`],style:this.cssVars},e("div",{class:`${t}-step-indicator`},e("div",{class:`${t}-step-indicator-slot`},e(ae,null,{default:()=>A(this.$slots.icon,n=>{const{mergedStatus:o,stepsSlots:s}=this;return o==="finish"||o==="error"?o==="finish"?e(T,{clsPrefix:t,key:"finish"},{default:()=>E(s["finish-icon"],()=>[e(pe,null)])}):o==="error"?e(T,{clsPrefix:t,key:"error"},{default:()=>E(s["error-icon"],()=>[e(le,null)])}):null:n||e("div",{key:this.internalIndex,class:`${t}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?e("div",{class:`${t}-step-splitor`}):null),e("div",{class:`${t}-step-content`},e("div",{class:`${t}-step-content-header`},e("div",{class:`${t}-step-content-header__title`},E(this.$slots.title,()=>[this.title])),this.vertical?null:e("div",{class:`${t}-step-splitor`})),i))}});const ze="_full_1tlcw_1";var Ce={full:ze};const ye=()=>j("configs");var Te=g({setup(){const t=h(!1);k(()=>{const n=new Image;n.src=D,n.onload=o=>{t.value=!0}});const r=S({});k(async()=>{const n=await z.api.init.configs.default.get();Object.assign(r,n)}),V("configs",r);const i=h(0);return()=>e("div",{class:Ce.full},t.value&&e("div",{class:"bg-image",style:`--bg: url(${D})`}),e(ue,{title:"\u521D\u59CB\u5316",class:"modal-card sm m-auto form-card"},e(xe,{size:"small",current:i.value},e(w,{status:i.value>0?"finish":"process",title:"\u7AD9\u70B9\u8BBE\u7F6E",description:"\u5148\u8BBE\u7F6E\u4E00\u4E0B\u7AD9\u70B9\u76F8\u5173\u914D\u7F6E\u5427"}),e(w,{status:i.value>1?"finish":i.value<1?"wait":"process",title:"\u4E3B\u4EBA\u4FE1\u606F",description:"\u8BF7\u544A\u8BC9\u4F60\u7684\u540D\u5B57"}),e(w,{status:i.value>2?"finish":i.value<2?"wait":"process",title:"(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",description:"\u4E00\u5207\u5C31\u7EEA\u4E86"})),e("div",{class:"mt-[3.5rem]"},JSON.stringify(r)==="{}"?e("div",{class:"text-center py-4"},e(ce,null)):e([Be,Ee,we][i.value],{onNext(){i.value++}}))))}});const N={onNext:{type:Function,required:!0}},Be=g({props:N,setup(t){const r=ye(),i=h(r?.seo?.title||""),n=h(r?.seo?.keywords),o=h(r?.seo?.description||""),s=S({adminUrl:location.origin+"/qaqdmin",serverUrl:location.origin+"/api/v2",webUrl:location.origin,wsUrl:location.origin}),C=async()=>{await Promise.all([z.api.init.configs("seo").patch({data:{title:i.value,keywords:n.value,description:o.value}}),z.api.init.configs("url").patch({data:{...s}})]),t.onNext()};return()=>e(_,null,e(u,{label:"\u7AD9\u70B9\u6807\u9898",required:!0},e(c,{value:i.value,onUpdateValue:l=>void(i.value=l)})),e(u,{label:"\u7AD9\u70B9\u63CF\u8FF0",required:!0},e(c,{value:o.value,onUpdateValue:l=>void(o.value=l)})),e(u,{label:"\u5173\u952E\u5B57"},e(ve,{value:n.value,onUpdateValue:l=>void(n.value=l)})),e(u,{label:"\u524D\u7AEF\u5730\u5740"},e(c,{value:s.webUrl,onInput:l=>void(s.webUrl=l)})),e(u,{label:"API \u5730\u5740"},e(c,{value:s.serverUrl,onInput:l=>void(s.serverUrl=l)})),e(u,{label:"\u540E\u53F0\u5730\u5740"},e(c,{value:s.adminUrl,onInput:l=>void(s.adminUrl=l)})),e(u,{label:"Gateway \u5730\u5740"},e(c,{value:s.wsUrl,onInput:l=>void(s.wsUrl=l)})),e(F,{justify:"end"},e(I,{onClick:C,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),Ee=g({props:N,setup(t){const r=S({}),i=h(""),n=de(),o=async()=>{if(i.value!==r.password){n.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}await z.api.user.register.post({data:{...r}}),t.onNext()};return()=>e(_,null,e(u,{label:"\u4F60\u7684\u540D\u5B57 (\u767B\u5F55\u51ED\u8BC1)",required:!0},e(c,{value:r.username,onUpdateValue:s=>{r.username=s}})),e(u,{label:"\u6635\u79F0"},e(c,{value:r.name,onUpdateValue:s=>{r.name=s}})),e(u,{label:"\u90AE\u7BB1",required:!0},e(c,{value:r.mail,onUpdateValue:s=>{r.mail=s}})),e(u,{label:"\u5BC6\u7801",required:!0},e(c,{value:r.password,type:"password",onUpdateValue:s=>{r.password=s}})),e(u,{label:"\u786E\u8BA4\u5BC6\u7801",required:!0},e(c,{value:i.value,type:"password",onUpdateValue:s=>{i.value=s}})),e(u,{label:"\u4E2A\u4EBA\u9996\u9875"},e(c,{value:r.url,onUpdateValue:s=>{r.url=s}})),e(u,{label:"\u5934\u50CF"},e(c,{value:r.avatar,onUpdateValue:s=>{r.avatar=s}})),e(u,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(c,{value:r.introduce,onUpdateValue:s=>{r.introduce=s}})),e(F,{justify:"end"},e(I,{disabled:!r.username||!r.username||!r.password||!i.value,onClick:o,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),we=g({props:N,setup(t){return()=>e(F,{class:"text-center",vertical:!0},e("span",{class:"text-base"},"\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u7684\u6B65\u9AA4\uFF0C\u5E72\u5F97\u6F02\u4EAE\u3002"),e(I,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},"LINK START"))}});export{Te as default};
