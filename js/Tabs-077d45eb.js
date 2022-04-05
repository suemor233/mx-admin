import{K as Me,d as K,P as oe,bO as Ve,h as n,k as D,a9 as Ue,F as Ke,T as Xe,as as Ge,be as qe,a2 as Qe,Y as l,a7 as g,_ as R,Z as A,a6 as Je,O as Ye,$ as se,v as z,a_ as Z,aj as N,ac as Ze,w as et,a0 as tt,ab as L,cQ as at,aE as rt,ai as B,Q as nt,ah as ee,aF as te,cR as ot,cS as st,a5 as O,aW as it,b1 as lt,cm as dt,cT as ct,b2 as bt}from"./index-4d27830d.js";import{A as ft}from"./Add-b646b751.js";import{t as M}from"./throttle-8e526350.js";const X=Me("n-tabs"),ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var mt=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ie,setup(e){const r=oe(X,null);return r||Ve("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return n("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const ut=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Qe(ie,["displayDirective"]));var U=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ut,setup(e){const{mergedClsPrefixRef:r,valueRef:c,typeRef:f,closableRef:y,tabStyleRef:x,tabChangeIdRef:b,onBeforeLeaveRef:p,triggerRef:w,handleAdd:m,activateTab:u,handleClose:v}=oe(X);return{trigger:w,mergedClosable:D(()=>{if(e.internalAddable)return!1;const{closable:d}=e;return d===void 0?y.value:d}),style:x,clsPrefix:r,value:c,type:f,handleClose(d){d.stopPropagation(),!e.disabled&&v(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:d}=e,h=++b.id;if(d!==c.value){const{value:C}=p;C?Promise.resolve(C(e.name,c.value)).then(S=>{S&&b.id===h&&u(d)}):u(d)}}}},render(){const{internalAddable:e,clsPrefix:r,name:c,disabled:f,label:y,tab:x,value:b,mergedClosable:p,style:w,trigger:m,$slots:{default:u}}=this,v=y??x;return n("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?n("div",{class:`${r}-tabs-tab-pad`}):null,n("div",Object.assign({key:c,"data-name":c,"data-disabled":f?!0:void 0},Ue({class:[`${r}-tabs-tab`,b===c&&`${r}-tabs-tab--active`,f&&`${r}-tabs-tab--disabled`,p&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:w},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),n("span",{class:`${r}-tabs-tab__label`},e?n(Ke,null,n("div",{class:`${r}-tabs-tab__height-placeholder`},"\xA0"),n(Xe,{clsPrefix:r},{default:()=>n(ft,null)})):u?u():typeof v=="object"?v:Ge(v??c)),p&&this.type==="card"?n(qe,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),vt=l("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[l("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),g("flex",[l("tabs-nav",{width:"100%"},[l("tabs-wrapper",{width:"100%"},[l("tabs-tab",{marginRight:0})])])]),l("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),l("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[g("shadow-before",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-after",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),R("&::before",`
 left: 0;
 `),R("&::after",`
 right: 0;
 `)]),l("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),l("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),l("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),l("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),l("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[g("transition-disabled",`
 transition: none;
 `),g("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),l("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),l("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier),
 transform .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),l("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),g("line-type, bar-type",[l("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),g("active",{color:"var(--n-tab-text-color-active)"}),g("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),l("tabs-nav",[g("line-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),g("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[g("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Je("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 6px;"),g("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")]),l("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const pt=Object.assign(Object.assign({},se.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var yt=K({name:"Tabs",props:pt,setup(e,{slots:r}){var c,f,y,x;const{mergedClsPrefixRef:b,inlineThemeDisabled:p}=Ye(e),w=se("Tabs","-tabs",vt,st,e,b),m=z(null),u=z(null),v=z(null),d=z(null),h=z(null),C=z(!0),S=z(!0),s=Z(e,["labelSize","size"]),$=Z(e,["activeName","value"]),P=z((f=(c=$.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&f!==void 0?f:r.default?(x=(y=N(r.default())[0])===null||y===void 0?void 0:y.props)===null||x===void 0?void 0:x.name:null),T=Ze($,P),G={id:0},le=D(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});et(T,()=>{G.id=0,W()});function q(){var t;const{value:a}=T;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function de(t){if(e.type==="card")return;const{value:a}=u;if(!!a&&t){const o=`${b.value}-tabs-bar--disabled`,{barWidth:i}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),i&&t.offsetWidth>=i){const _=Math.floor((t.offsetWidth-i)/2)+t.offsetLeft;a.style.left=`${_}px`,a.style.maxWidth=`${i}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px"}}function W(){if(e.type==="card")return;const t=q();t&&de(t)}const k=z(null);let I=0;function ce(){const t=k.value;if(t){I=t.getBoundingClientRect().height;const a=`${I}px`;t.style.height=a,t.style.maxHeight=a}}function be(t){const a=k.value;if(a){const o=t.getBoundingClientRect().height;a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(I,o)}px`}}function fe(){const t=k.value;t&&(t.style.maxHeight="",t.style.height="")}const Q={value:[]},J=z("next");function ue(t){const a=T.value;let o="next";for(const i of Q.value){if(i===a)break;if(i===t){o="prev";break}}J.value=o,ve(t)}function ve(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":i}=e;a&&O(a,t),o&&O(o,t),i&&O(i,t),P.value=t}function pe(t){const{onClose:a}=e;a&&O(a,t)}let he=!0;const ge=M(function(){var a;const{type:o}=e;if((o==="line"||o==="bar")&&he){const{value:i}=u;if(!i)return;const _=`${b.value}-tabs-bar--transition-disabled`;i.classList.add(_),W(),i.classList.remove(_)}o!=="segment"&&H((a=h.value)===null||a===void 0?void 0:a.$el)},64),E=z(!1);function xe(t){var a;const{target:o,contentRect:{width:i}}=t,_=o.parentElement.offsetWidth;if(!E.value)_<i&&(E.value=!0);else{const{value:F}=d;if(!F)return;_-i>F.$el.offsetWidth&&(E.value=!1)}H((a=h.value)===null||a===void 0?void 0:a.$el)}const me=M(xe,64);function ye(){const{onAdd:t}=e;t&&t(),it(()=>{const a=q(),{value:o}=h;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function H(t){if(!t)return;const{scrollLeft:a,scrollWidth:o,offsetWidth:i}=t;C.value=a<=0,S.value=a+i>=o}const we=M(t=>{H(t.target)},64);tt(X,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:T,tabChangeIdRef:G,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:ue,handleClose:pe,handleAdd:ye}),at(()=>{W()}),rt(()=>{const{value:t}=v;if(!t)return;const{value:a}=b,o=`${a}-tabs-nav-scroll-wrapper--shadow-before`,i=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(o):t.classList.add(o),S.value?t.classList.remove(i):t.classList.add(i)});const Ce={syncBarPosition:()=>{W()}},Y=D(()=>{const{value:t}=s,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${o}`,{self:{barColor:_,closeColor:F,closeColorHover:Re,closeColorPressed:Pe,tabColor:ze,tabBorderColor:Se,paneTextColor:$e,tabFontWeight:Te,tabBorderRadius:_e,tabFontWeightActive:Ae,colorSegment:Be,fontWeightStrong:Le,tabColorSegment:je,[B("panePadding",t)]:We,[B("tabPadding",i)]:ke,[B("tabGap",i)]:Ee,[B("tabTextColor",a)]:Fe,[B("tabTextColorActive",a)]:Oe,[B("tabTextColorHover",a)]:De,[B("tabTextColorDisabled",a)]:Ie,[B("tabFontSize",t)]:He},common:{cubicBezierEaseInOut:Ne}}=w.value;return{"--n-bezier":Ne,"--n-color-segment":Be,"--n-bar-color":_,"--n-tab-font-size":He,"--n-tab-text-color":Fe,"--n-tab-text-color-active":Oe,"--n-tab-text-color-disabled":Ie,"--n-tab-text-color-hover":De,"--n-pane-text-color":$e,"--n-tab-border-color":Se,"--n-tab-border-radius":_e,"--n-close-color":F,"--n-close-color-hover":Re,"--n-close-color-pressed":Pe,"--n-tab-color":ze,"--n-tab-font-weight":Te,"--n-tab-font-weight-active":Ae,"--n-tab-padding":ke,"--n-tab-gap":Ee,"--n-pane-padding":We,"--n-font-weight-strong":Le,"--n-tab-color-segment":je}}),j=p?nt("tabs",D(()=>`${s.value[0]}${e.type[0]}`),Y,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:T,renderedNames:new Set,tabsPaneWrapperRef:k,tabsElRef:m,barElRef:u,addTabInstRef:d,xScrollInstRef:h,scrollWrapperElRef:v,addTabFixed:E,tabWrapperStyle:le,handleNavResize:ge,mergedSize:s,handleScroll:we,handleTabsResize:me,cssVars:p?void 0:Y,themeClass:j?.themeClass,animationDirection:J,renderNameListRef:Q,onAnimationBeforeLeave:ce,onAnimationEnter:be,onAnimationAfterEnter:fe,onRender:j?.onRender},Ce)},render(){const{mergedClsPrefix:e,type:r,addTabFixed:c,addable:f,mergedSize:y,renderNameListRef:x,onRender:b,$slots:{default:p,prefix:w,suffix:m}}=this;b?.();const u=p?N(p()).filter(s=>s.type.__TAB_PANE__===!0):[],v=p?N(p()).filter(s=>s.type.__TAB__===!0):[],d=!v.length,h=r==="card",C=r==="segment",S=!h&&!C&&this.justifyContent;return x.value=[],n("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${y}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},n("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav`]},ee(w,s=>s&&n("div",{class:`${e}-tabs-nav__prefix`},s)),C?n("div",{class:`${e}-tabs-rail`},d?u.map((s,$)=>(x.value.push(s.props.name),n(U,Object.assign({},s.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),s.children?{default:s.children.tab}:void 0))):v.map((s,$)=>(x.value.push(s.props.name),$===0?s:ne(s)))):n(te,{onResize:this.handleNavResize},{default:()=>n("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},n(ot,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const s=n("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:n("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),d?u.map((P,T)=>(x.value.push(P.props.name),V(n(U,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&!S}),P.children?{default:P.children.tab}:void 0)))):v.map((P,T)=>(x.value.push(P.props.name),V(T!==0&&!S?ne(P):P))),!c&&f&&h?re(f,(d?u.length:v.length)!==0):null,S?null:n("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let $=s;return h&&f&&($=n(te,{onResize:this.handleTabsResize},{default:()=>s})),n("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$,h?n("div",{class:`${e}-tabs-pad`}):null,h?null:n("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&f&&h?re(f,!0):null,ee(m,s=>s&&n("div",{class:`${e}-tabs-nav__suffix`},s))),d&&(this.animated?n("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ae(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ae(u,this.mergedValue,this.renderedNames)))}});function ae(e,r,c,f,y,x,b){const p=[];return e.forEach(w=>{const{name:m,displayDirective:u,"display-directive":v}=w.props,d=C=>u===C||v===C,h=r===m;if(w.key!==void 0&&(w.key=m),h||d("show")||d("show:lazy")&&c.has(m)){c.has(m)||c.add(m);const C=!d("if");p.push(C?lt(w,[[bt,h]]):w)}}),b?n(dt,{name:`${b}-transition`,onBeforeLeave:f,onEnter:y,onAfterEnter:x},{default:()=>p}):p}function re(e,r){return n(U,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function ne(e){const r=ct(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function V(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{yt as N,mt as a};
