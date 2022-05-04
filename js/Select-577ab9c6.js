import{k as qe,aQ as Ye,aR as An,d as ie,h as l,$ as y,a0 as z,a1 as de,P as sn,a2 as oe,O as dn,Q as Ge,aS as Dn,l as R,aj as X,S as ke,Y as un,aT as Vn,aU as Ze,af as Ke,as as cn,at as me,aa as j,a9 as We,aw as fn,T as A,aV as jn,x as C,aW as Kn,w as Te,am as Hn,aX as Qe,a3 as Xe,aY as Wn,X as Un,aE as qn,ao as Gn,aH as Zn,V as Yn,an as Qn,au as Be,aZ as hn,a_ as Xn,aF as Jn,a$ as et,b0 as Je,p as en,F as nn,ae as tn,ax as nt,b1 as tt,ad as ot,b2 as it,b3 as Ue,ap as lt,aq as rt,ar as at,b4 as st,b5 as dt,b6 as on,b7 as ut,a8 as U}from"./index-5f09ba15.js";import{F as ct,N as He}from"./Tag-22dd1dee.js";function ft(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function vn(e,o){o&&(qe(()=>{const{value:r}=e;r&&Ye.registerHandler(r,o)}),An(()=>{const{value:r}=e;r&&Ye.unregisterHandler(r)}))}var ht=ie({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vt=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),pt=y("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[de("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const bt=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var gt=ie({name:"Empty",props:bt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=sn(e),c=oe("Empty","-empty",pt,Vn,e,o),{localeRef:h}=dn("Empty"),p=Ge(Dn,null),f=R(()=>{var b,O,M;return(b=e.description)!==null&&b!==void 0?b:(M=(O=p?.mergedComponentPropsRef.value)===null||O===void 0?void 0:O.Empty)===null||M===void 0?void 0:M.description}),u=R(()=>{var b,O;return((O=(b=p?.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||O===void 0?void 0:O.renderIcon)||(()=>l(ht,null))}),_=R(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:O},self:{[X("iconSize",b)]:M,[X("fontSize",b)]:w,textColor:v,iconColor:S,extraTextColor:E}}=c.value;return{"--n-icon-size":M,"--n-font-size":w,"--n-bezier":O,"--n-text-color":v,"--n-icon-color":S,"--n-extra-text-color":E}}),x=r?ke("empty",R(()=>{let b="";const{size:O}=e;return b+=O[0],b}),_,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:u,localizedDescription:R(()=>f.value||h.value.description),cssVars:r?void 0:_,themeClass:x?.themeClass,onRender:x?.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:r}=this;return r?.(),l("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${o}-empty__icon`},e.icon?e.icon():l(un,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${o}-empty__extra`},e.extra()):null)}});const mt=l(ct);function wt(e,o){return l(cn,{name:"fade-in-scale-up-transition"},{default:()=>e?l(un,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>mt}):null})}var ln=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:r,multipleRef:c,valueSetRef:h,renderLabelRef:p,renderOptionRef:f,handleOptionClick:u,handleOptionMouseEnter:_}=Ge(Ze),x=Ke(()=>{const{value:w}=r;return w?e.tmNode.key===w.key:!1});function b(w){const{tmNode:v}=e;v.disabled||u(w,v)}function O(w){const{tmNode:v}=e;v.disabled||_(w,v)}function M(w){const{tmNode:v}=e,{value:S}=x;v.disabled||S||_(w,v)}return{multiple:c,isGrouped:Ke(()=>{const{tmNode:w}=e,{parent:v}=w;return v&&v.rawNode.type==="group"}),isPending:x,isSelected:Ke(()=>{const{value:w}=o,{value:v}=c;if(w===null)return!1;const S=e.tmNode.rawNode.value;if(v){const{value:E}=h;return E.has(S)}else return w===S}),renderLabel:p,renderOption:f,handleMouseMove:M,handleMouseEnter:O,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:r,isPending:c,isGrouped:h,multiple:p,renderOption:f,renderLabel:u,handleClick:_,handleMouseEnter:x,handleMouseMove:b}=this,M=wt(p&&r,e),w=u?[u(o,r),M]:[me(o.label,o,r),M],v=l("div",{class:[`${e}-base-select-option`,o.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:h,[`${e}-base-select-option--pending`]:c}],style:o.style,onClick:_,onMouseenter:x,onMousemove:b},l("div",{class:`${e}-base-select-option__content`},w));return o.render?o.render({node:v,option:o,selected:r}):f?f({node:v,option:o,selected:r}):v}}),rn=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o}=Ge(Ze);return{renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:r,tmNode:{rawNode:c}}=this,h=o?o(c,!1):me(c.label,c,!1),p=l("div",{class:`${e}-base-select-group-header`},h);return c.render?c.render({node:p,option:c}):r?r({node:p,option:c,selected:!1}):p}}),yt=y("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[j("multiple",[y("base-select-option",`
 padding-right: 28px;
 `)]),y("scrollbar",`
 max-height: var(--n-height);
 `),y("virtual-list",`
 max-height: var(--n-height);
 `),y("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),y("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),y("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),y("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),y("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[de("&:active",`
 color: var(--n-option-text-color-pressed);
 `),j("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j("pending",`
 background-color: var(--n-option-color-pending);
 `),j("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),j("disabled",`
 cursor: not-allowed;
 `,[We("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[fn({enterScale:"0.5"})])])]),xt=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=oe("InternalSelectMenu","-internal-select-menu",yt,jn,e,A(e,"clsPrefix")),r=C(null),c=C(null),h=C(null),p=R(()=>e.treeMate.getFlattenedNodes()),f=R(()=>Kn(p.value)),u=C(null);function _(){const{treeMate:i}=e;let a=null;if(e.autoPending){const{value:F}=e;F===null?a=i.getFirstAvailableNode():(e.multiple?a=i.getNode((F||[])[(F||[]).length-1]):a=i.getNode(F),(!a||a.disabled)&&(a=i.getFirstAvailableNode())),a&&T(a)}}let x;Te(A(e,"show"),i=>{i?x=Te(e.resetMenuOnOptionsChange?[A(e,"treeMate"),A(e,"multiple")]:[A(e,"multiple")],()=>{_(),hn(J)},{immediate:!0}):x?.()},{immediate:!0});const b=R(()=>Hn(o.value.self[X("optionHeight",e.size)])),O=R(()=>Qe(o.value.self[X("padding",e.size)])),M=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),w=R(()=>{const i=p.value;return i&&i.length===0});function v(i){const{onToggle:a}=e;a&&a(i)}function S(i){const{onScroll:a}=e;a&&a(i)}function E(i){var a;(a=h.value)===null||a===void 0||a.sync(),S(i)}function k(){var i;(i=h.value)===null||i===void 0||i.sync()}function H(){const{value:i}=u;return i||null}function q(i,a){a.disabled||T(a,!1)}function W(i,a){a.disabled||v(a)}function N(i){var a;Be(i,"action")||(a=e.onKeyup)===null||a===void 0||a.call(e,i)}function L(i){var a;Be(i,"action")||(a=e.onKeydown)===null||a===void 0||a.call(e,i)}function K(i){var a;(a=e.onMousedown)===null||a===void 0||a.call(e,i),!e.focusable&&i.preventDefault()}function le(){const{value:i}=u;i&&T(i.getNext({loop:!0}),!0)}function G(){const{value:i}=u;i&&T(i.getPrev({loop:!0}),!0)}function T(i,a=!1){u.value=i,a&&J()}function J(){var i,a;const F=u.value;if(!F)return;const Y=f.value(F.key);Y!==null&&(e.virtualScroll?(i=c.value)===null||i===void 0||i.scrollTo({index:Y}):(a=h.value)===null||a===void 0||a.scrollTo({index:Y,elSize:b.value}))}function ue(i){var a,F;!((a=r.value)===null||a===void 0)&&a.contains(i.target)&&((F=e.onFocus)===null||F===void 0||F.call(e,i))}function ce(i){var a,F;!((a=r.value)===null||a===void 0)&&a.contains(i.relatedTarget)||(F=e.onBlur)===null||F===void 0||F.call(e,i)}Xe(Ze,{handleOptionMouseEnter:q,handleOptionClick:W,valueSetRef:M,multipleRef:A(e,"multiple"),valueRef:A(e,"value"),renderLabelRef:A(e,"renderLabel"),renderOptionRef:A(e,"renderOption"),pendingTmNodeRef:u}),Xe(Wn,r),qe(()=>{const{value:i}=h;i&&i.sync()});const Z=R(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:a},self:{height:F,borderRadius:Y,color:we,groupHeaderTextColor:ye,actionDividerColor:ve,optionTextColorPressed:pe,optionTextColor:ee,optionTextColorDisabled:V,optionTextColorActive:be,optionOpacityDisabled:ne,optionCheckColor:xe,actionTextColor:Ce,optionColorPending:Oe,optionColorActive:re,loadingColor:ae,loadingSize:Se,[X("optionFontSize",i)]:Re,[X("optionHeight",i)]:Me,[X("optionPadding",i)]:se}}=o.value;return{"--n-height":F,"--n-action-divider-color":ve,"--n-action-text-color":Ce,"--n-bezier":a,"--n-border-radius":Y,"--n-color":we,"--n-option-font-size":Re,"--n-group-header-text-color":ye,"--n-option-check-color":xe,"--n-option-color-pending":Oe,"--n-option-color-active":re,"--n-option-height":Me,"--n-option-opacity-disabled":ne,"--n-option-text-color":ee,"--n-option-text-color-active":be,"--n-option-text-color-disabled":V,"--n-option-text-color-pressed":pe,"--n-option-padding":se,"--n-option-padding-left":Qe(se,"left"),"--n-loading-color":ae,"--n-loading-size":Se}}),{inlineThemeDisabled:fe}=e,D=fe?ke("internal-select-menu",R(()=>e.size[0]),Z,e):void 0,he={selfRef:r,next:le,prev:G,getPendingTmNode:H};return vn(r,e.onResize),Object.assign({mergedTheme:o,virtualListRef:c,scrollbarRef:h,itemSize:b,padding:O,flattenedNodes:p,empty:w,virtualListContainer(){const{value:i}=c;return i?.listElRef},virtualListContent(){const{value:i}=c;return i?.itemsElRef},doScroll:S,handleFocusin:ue,handleFocusout:ce,handleKeyUp:N,handleKeyDown:L,handleMouseDown:K,handleVirtualListResize:k,handleVirtualListScroll:E,cssVars:fe?void 0:Z,themeClass:D?.themeClass,onRender:D?.onRender},he)},render(){const{$slots:e,virtualScroll:o,clsPrefix:r,mergedTheme:c,themeClass:h,onRender:p}=this;return p?.(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,h,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:Qn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?l("div",{class:`${r}-base-select-menu__loading`},l(qn,{clsPrefix:r,strokeWidth:20})):this.empty?l("div",{class:`${r}-base-select-menu__empty`,"data-empty":!0},Yn(e.empty,()=>[l(gt,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty})])):l(Gn,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?l(Zn,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?l(rn,{key:f.key,clsPrefix:r,tmNode:f}):f.ignored?null:l(ln,{clsPrefix:r,key:f.key,tmNode:f})}):l("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?l(rn,{key:f.key,clsPrefix:r,tmNode:f}):l(ln,{clsPrefix:r,key:f.key,tmNode:f})))}),Un(e.action,f=>f&&[l("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},f),l(vt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ct=de([y("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),y("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),We("disabled",[de("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),j("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>j(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),We("disabled",[de("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ot=ie({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const o=C(null),r=C(null),c=C(null),h=C(null),p=C(null),f=C(null),u=C(null),_=C(null),x=C(null),b=C(null),O=C(!1),M=C(!1),w=C(!1),v=oe("InternalSelection","-internal-selection",Ct,Xn,e,A(e,"clsPrefix")),S=R(()=>e.clearable&&!e.disabled&&(w.value||e.active)),E=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):me(e.selectedOption.label,e.selectedOption,!0):e.placeholder),k=R(()=>{const t=e.selectedOption;if(!!t)return t.label}),H=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function q(){var t;const{value:d}=o;if(d){const{value:$}=r;$&&($.style.width=`${d.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=x.value)===null||t===void 0||t.sync()))}}function W(){const{value:t}=b;t&&(t.style.display="none")}function N(){const{value:t}=b;t&&(t.style.display="inline-block")}Te(A(e,"active"),t=>{t||W()}),Te(A(e,"pattern"),()=>{e.multiple&&hn(q)});function L(t){const{onFocus:d}=e;d&&d(t)}function K(t){const{onBlur:d}=e;d&&d(t)}function le(t){const{onDeleteOption:d}=e;d&&d(t)}function G(t){const{onClear:d}=e;d&&d(t)}function T(t){const{onPatternInput:d}=e;d&&d(t)}function J(t){var d;(!t.relatedTarget||!(!((d=c.value)===null||d===void 0)&&d.contains(t.relatedTarget)))&&L(t)}function ue(t){var d;!((d=c.value)===null||d===void 0)&&d.contains(t.relatedTarget)||K(t)}function ce(t){G(t)}function Z(){w.value=!0}function fe(){w.value=!1}function D(t){!e.active||!e.filterable||t.target!==r.value&&t.preventDefault()}function he(t){le(t)}function i(t){if(t.code==="Backspace"&&!a.value&&!e.pattern.length){const{selectedOptions:d}=e;d?.length&&he(d[d.length-1])}}const a=C(!1);let F=null;function Y(t){const{value:d}=o;if(d){const $=t.target.value;d.textContent=$,q()}a.value?F=t:T(t)}function we(){a.value=!0}function ye(){a.value=!1,T(F),F=null}function ve(t){var d;M.value=!0,(d=e.onPatternFocus)===null||d===void 0||d.call(e,t)}function pe(t){var d;M.value=!1,(d=e.onPatternBlur)===null||d===void 0||d.call(e,t)}function ee(){var t,d;if(e.filterable)M.value=!1,(t=f.value)===null||t===void 0||t.blur(),(d=r.value)===null||d===void 0||d.blur();else if(e.multiple){const{value:$}=h;$?.blur()}else{const{value:$}=p;$?.blur()}}function V(){var t,d,$;e.filterable?(M.value=!1,(t=f.value)===null||t===void 0||t.focus()):e.multiple?(d=h.value)===null||d===void 0||d.focus():($=p.value)===null||$===void 0||$.focus()}function be(){const{value:t}=r;t&&(N(),t.focus())}function ne(){const{value:t}=r;t&&t.blur()}function xe(t){const{value:d}=u;d&&d.setTextContent(`+${t}`)}function Ce(){const{value:t}=_;return t}function Oe(){return r.value}let re=null;function ae(){re!==null&&window.clearTimeout(re)}function Se(){e.disabled||e.active||(ae(),re=window.setTimeout(()=>{O.value=!0},100))}function Re(){ae()}function Me(t){t||(ae(),O.value=!1)}qe(()=>{Jn(()=>{const t=f.value;!t||(t.tabIndex=e.disabled||M.value?-1:0)})}),vn(c,e.onResize);const{inlineThemeDisabled:se}=e,ze=R(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:d},self:{borderRadius:$,color:Ee,placeholderColor:Ne,textColor:Le,paddingSingle:Fe,paddingMultiple:Pe,caretColor:Ae,colorDisabled:De,textColorDisabled:Ve,placeholderColorDisabled:_e,colorActive:te,boxShadowFocus:n,boxShadowActive:s,boxShadowHover:g,border:P,borderFocus:m,borderHover:I,borderActive:B,arrowColor:ge,arrowColorDisabled:Ie,loadingColor:je,colorActiveWarning:bn,boxShadowFocusWarning:gn,boxShadowActiveWarning:mn,boxShadowHoverWarning:wn,borderWarning:yn,borderFocusWarning:xn,borderHoverWarning:Cn,borderActiveWarning:On,colorActiveError:Sn,boxShadowFocusError:Rn,boxShadowActiveError:Mn,boxShadowHoverError:Tn,borderError:zn,borderFocusError:Fn,borderHoverError:Pn,borderActiveError:_n,clearColor:In,clearColorHover:Bn,clearColorPressed:kn,clearSize:$n,arrowSize:En,[X("height",t)]:Nn,[X("fontSize",t)]:Ln}}=v.value;return{"--n-bezier":d,"--n-border":P,"--n-border-active":B,"--n-border-focus":m,"--n-border-hover":I,"--n-border-radius":$,"--n-box-shadow-active":s,"--n-box-shadow-focus":n,"--n-box-shadow-hover":g,"--n-caret-color":Ae,"--n-color":Ee,"--n-color-active":te,"--n-color-disabled":De,"--n-font-size":Ln,"--n-height":Nn,"--n-padding-single":Fe,"--n-padding-multiple":Pe,"--n-placeholder-color":Ne,"--n-placeholder-color-disabled":_e,"--n-text-color":Le,"--n-text-color-disabled":Ve,"--n-arrow-color":ge,"--n-arrow-color-disabled":Ie,"--n-loading-color":je,"--n-color-active-warning":bn,"--n-box-shadow-focus-warning":gn,"--n-box-shadow-active-warning":mn,"--n-box-shadow-hover-warning":wn,"--n-border-warning":yn,"--n-border-focus-warning":xn,"--n-border-hover-warning":Cn,"--n-border-active-warning":On,"--n-color-active-error":Sn,"--n-box-shadow-focus-error":Rn,"--n-box-shadow-active-error":Mn,"--n-box-shadow-hover-error":Tn,"--n-border-error":zn,"--n-border-focus-error":Fn,"--n-border-hover-error":Pn,"--n-border-active-error":_n,"--n-clear-size":$n,"--n-clear-color":In,"--n-clear-color-hover":Bn,"--n-clear-color-pressed":kn,"--n-arrow-size":En}}),Q=se?ke("internal-selection",R(()=>e.size[0]),ze,e):void 0;return{mergedTheme:v,mergedClearable:S,patternInputFocused:M,filterablePlaceholder:E,label:k,selected:H,showTagsPanel:O,isCompositing:a,counterRef:u,counterWrapperRef:_,patternInputMirrorRef:o,patternInputRef:r,selfRef:c,multipleElRef:h,singleElRef:p,patternInputWrapperRef:f,overflowRef:x,inputTagElRef:b,handleMouseDown:D,handleFocusin:J,handleClear:ce,handleMouseEnter:Z,handleMouseLeave:fe,handleDeleteOption:he,handlePatternKeyDown:i,handlePatternInputInput:Y,handlePatternInputBlur:pe,handlePatternInputFocus:ve,handleMouseEnterCounter:Se,handleMouseLeaveCounter:Re,handleFocusout:ue,handleCompositionEnd:ye,handleCompositionStart:we,onPopoverUpdateShow:Me,focus:V,focusInput:be,blur:ee,blurInput:ne,updateCounter:xe,getCounter:Ce,getTail:Oe,renderLabel:e.renderLabel,cssVars:se?void 0:ze,themeClass:Q?.themeClass,onRender:Q?.onRender}},render(){const{status:e,multiple:o,size:r,disabled:c,filterable:h,maxTagCount:p,bordered:f,clsPrefix:u,onRender:_,renderTag:x,renderLabel:b}=this;_?.();const O=p==="responsive",M=typeof p=="number",w=O||M,v=l(et,{clsPrefix:u,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,k;return(k=(E=this.$slots).arrow)===null||k===void 0?void 0:k.call(E)}});let S;if(o){const E=T=>l("div",{class:`${u}-base-selection-tag-wrapper`,key:T.value},x?x({option:T,handleClose:()=>this.handleDeleteOption(T)}):l(He,{size:r,closable:!T.disabled,disabled:c,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(T)},{default:()=>b?b(T,!0):me(T.label,T,!0)})),k=(M?this.selectedOptions.slice(0,p):this.selectedOptions).map(E),H=h?l("div",{class:`${u}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${u}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${u}-base-selection-input-tag__mirror`},this.pattern)):null,q=O?()=>l("div",{class:`${u}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(He,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let W;if(M){const T=this.selectedOptions.length-p;T>0&&(W=l("div",{class:`${u}-base-selection-tag-wrapper`,key:"__counter__"},l(He,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${T}`})))}const N=O?h?l(Je,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>k,counter:q,tail:()=>H}):l(Je,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>k,counter:q}):M?k.concat(W):k,L=w?()=>l("div",{class:`${u}-base-selection-popover`},O?k:this.selectedOptions.map(E)):void 0,K=w?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,G=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`},this.placeholder):null;if(h){const T=l("div",{ref:"patternInputWrapperRef",class:`${u}-base-selection-tags`},N,O?null:H,v);S=l(nn,null,w?l(en,Object.assign({},K),{trigger:()=>T,default:L}):T,G)}else{const T=l("div",{ref:"multipleElRef",class:`${u}-base-selection-tags`,tabindex:c?void 0:0},N,v);S=l(nn,null,w?l(en,Object.assign({},K),{trigger:()=>T,default:L}):T,G)}}else if(h){const E=this.pattern||this.isCompositing,k=this.active?!E:!this.selected,H=this.active?!1:this.selected;S=l("div",{ref:"patternInputWrapperRef",class:`${u}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${u}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),H?l("div",{class:`${u}-base-selection-label__render-label ${u}-base-selection-overlay`,key:"input"},l("div",{class:`${u}-base-selection-overlay__wrapper`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):me(this.label,this.selectedOption,!0))):null,k?l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${u}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else S=l("div",{ref:"singleElRef",class:`${u}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${u}-base-selection-input`,title:ft(this.label),key:"input"},l("div",{class:`${u}-base-selection-input__content`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):me(this.label,this.selectedOption,!0))):l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`,key:"placeholder"},this.placeholder),v);return l("div",{ref:"selfRef",class:[`${u}-base-selection`,this.themeClass,e&&`${u}-base-selection--${e}-status`,{[`${u}-base-selection--active`]:this.active,[`${u}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${u}-base-selection--disabled`]:this.disabled,[`${u}-base-selection--multiple`]:this.multiple,[`${u}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},S,f?l("div",{class:`${u}-base-selection__border`}):null,f?l("div",{class:`${u}-base-selection__state-border`}):null)}});function St(e){return $e(e)?e.name||e.key||"key-required":e.value}function $e(e){return e.type==="group"}function pn(e){return e.type==="ignored"}const Rt={getKey:St,getIsGroup:$e,getIgnored:pn};function an(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Mt(e,o,r){if(!o)return e;function c(h){if(!Array.isArray(h))return[];const p=[];for(const f of h)if($e(f)){const u=c(f.children);u.length&&p.push(Object.assign({},f,{children:u}))}else{if(pn(f))continue;o(r,f)&&p.push(f)}return p}return c(e)}function Tt(e){const o=new Map;return e.forEach(r=>{$e(r)?r.children.forEach(c=>{o.set(c.value,c)}):o.set(r.value,r)}),o}function zt(e,o){return o?typeof o.label=="string"?an(e,o.label):o.value!==void 0?an(e,String(o.value)):!1:!1}var Ft=de([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[fn()])]);const Pt=Object.assign(Object.assign({},oe.props),{to:Ue.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:zt},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,onChange:[Function,Array],items:Array});var Bt=ie({name:"Select",props:Pt,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:r,namespaceRef:c,inlineThemeDisabled:h}=sn(e),p=oe("Select","-select",Ft,ut,e,o),f=C(e.defaultValue),u=A(e,"value"),_=tn(u,f),x=C(!1),b=C(""),O=R(()=>nt(T.value,Rt)),M=R(()=>Tt(G.value)),w=C(!1),v=tn(A(e,"show"),w),S=C(null),E=C(null),k=C(null),{localeRef:H}=dn("Select"),q=R(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:H.value.placeholder}),W=tt(e,["items","options"]),N=C([]),L=C([]),K=C(new Map),le=R(()=>{const{fallbackOption:n}=e;return n?s=>Object.assign(n(s),{value:s}):!1}),G=R(()=>L.value.concat(N.value).concat(W.value)),T=R(()=>{if(e.remote)return W.value;{const{value:n}=G,{value:s}=b;if(!s.length||!e.filterable)return n;{const{filter:g}=e;return Mt(n,g,s)}}});function J(n){const s=e.remote,{value:g}=K,{value:P}=M,{value:m}=le,I=[];return n.forEach(B=>{if(P.has(B))I.push(P.get(B));else if(s&&g.has(B))I.push(g.get(B));else if(m){const ge=m(B);ge&&I.push(ge)}}),I}const ue=R(()=>{if(e.multiple){const{value:n}=_;return Array.isArray(n)?J(n):[]}return null}),ce=R(()=>{const{value:n}=_;return!e.multiple&&!Array.isArray(n)?n===null?null:J([n])[0]||null:null}),Z=ot(e),{mergedSizeRef:fe,mergedDisabledRef:D,mergedStatusRef:he}=Z;function i(n,s){const{onChange:g,"onUpdate:value":P,onUpdateValue:m}=e,{nTriggerFormChange:I,nTriggerFormInput:B}=Z;g&&U(g,n,s),m&&U(m,n,s),P&&U(P,n,s),f.value=n,I(),B()}function a(n){const{onBlur:s}=e,{nTriggerFormBlur:g}=Z;s&&U(s,n),g()}function F(){const{onClear:n}=e;n&&U(n)}function Y(n){const{onFocus:s}=e,{nTriggerFormFocus:g}=Z;s&&U(s,n),g()}function we(n){const{onSearch:s}=e;s&&U(s,n)}function ye(n){const{onScroll:s}=e;s&&U(s,n)}function ve(){var n;const{remote:s,multiple:g}=e;if(s){const{value:P}=K;if(g)(n=ue.value)===null||n===void 0||n.forEach(m=>{P.set(m.value,m)});else{const m=ce.value;m&&P.set(m.value,m)}}}function pe(n){const{onUpdateShow:s,"onUpdate:show":g}=e;s&&U(s,n),g&&U(g,n),w.value=n}function ee(){D.value||(pe(!0),w.value=!0,e.filterable&&Ae())}function V(){pe(!1)}function be(){b.value="",L.value=[]}const ne=C(!1);function xe(){e.filterable&&(ne.value=!0)}function Ce(){e.filterable&&(ne.value=!1,v.value||be())}function Oe(){D.value||(v.value?e.filterable||V():ee())}function re(n){var s,g;!((g=(s=k.value)===null||s===void 0?void 0:s.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(x.value=!1,a(n),V())}function ae(n){Y(n),x.value=!0}function Se(n){x.value=!0}function Re(n){var s;!((s=S.value)===null||s===void 0)&&s.$el.contains(n.relatedTarget)||(x.value=!1,a(n),V())}function Me(){var n;(n=S.value)===null||n===void 0||n.focus(),V()}function se(n){var s;v.value&&(!((s=S.value)===null||s===void 0)&&s.$el.contains(n.target)||V())}function ze(n){if(!Array.isArray(n))return[];if(le.value)return Array.from(n);{const{remote:s}=e,{value:g}=M;if(s){const{value:P}=K;return n.filter(m=>g.has(m)||P.has(m))}else return n.filter(P=>g.has(P))}}function Q(n){t(n.rawNode)}function t(n){if(D.value)return;const{tag:s,remote:g,clearFilterAfterSelect:P}=e;if(s&&!g){const{value:m}=L,I=m[0]||null;I&&(N.value.push(I),L.value=[])}if(g&&K.value.set(n.value,n),e.multiple){const m=ze(_.value),I=m.findIndex(B=>B===n.value);if(~I){if(m.splice(I,1),s&&!g){const B=d(n.value);~B&&(N.value.splice(B,1),P&&(b.value=""))}}else m.push(n.value),P&&(b.value="");i(m,J(m))}else{if(s&&!g){const m=d(n.value);~m?N.value=[N.value[m]]:N.value=[]}Pe(),V(),i(n.value,n)}}function d(n){return N.value.findIndex(g=>g.value===n)}function $(n){v.value||ee();const{value:s}=n.target;b.value=s;const{tag:g,remote:P}=e;if(we(s),g&&!P){if(!s){L.value=[];return}const m=e.onCreate(s);W.value.some(I=>I.value===m.value)||N.value.some(I=>I.value===m.value)?L.value=[]:L.value=[m]}}function Ee(n){n.stopPropagation();const{multiple:s}=e;!s&&e.filterable&&V(),F(),s?i([],[]):i(null,null)}function Ne(n){!Be(n,"action")&&!Be(n,"empty")&&n.preventDefault()}function Le(n){ye(n)}function Fe(n){var s,g,P,m,I;switch(n.code){case"Space":if(e.filterable)break;n.preventDefault();case"Enter":case"NumpadEnter":if(!(!((s=S.value)===null||s===void 0)&&s.isCompositing)){if(v.value){const B=(g=k.value)===null||g===void 0?void 0:g.getPendingTmNode();B?Q(B):e.filterable||(V(),Pe())}else if(ee(),e.tag&&ne.value){const B=L.value[0];if(B){const ge=B.value,{value:Ie}=_;e.multiple&&Array.isArray(Ie)&&Ie.some(je=>je===ge)||t(B)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;v.value&&((P=k.value)===null||P===void 0||P.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;v.value?(m=k.value)===null||m===void 0||m.next():ee();break;case"Escape":V(),(I=S.value)===null||I===void 0||I.focus();break}}function Pe(){var n;(n=S.value)===null||n===void 0||n.focus()}function Ae(){var n;(n=S.value)===null||n===void 0||n.focusInput()}function De(){var n;!v.value||(n=E.value)===null||n===void 0||n.syncPosition()}ve(),Te(A(e,"options"),ve);const Ve={focus:()=>{var n;(n=S.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=S.value)===null||n===void 0||n.blur()}},_e=R(()=>{const{self:{menuBoxShadow:n}}=p.value;return{"--n-menu-box-shadow":n}}),te=h?ke("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},Ve),{mergedStatus:he,mergedClsPrefix:o,mergedBordered:r,namespace:c,treeMate:O,isMounted:it(),triggerRef:S,menuRef:k,pattern:b,uncontrolledShow:w,mergedShow:v,adjustedTo:Ue(e),uncontrolledValue:f,mergedValue:_,followerRef:E,localizedPlaceholder:q,selectedOption:ce,selectedOptions:ue,mergedSize:fe,mergedDisabled:D,focused:x,activeWithoutMenuOpen:ne,inlineThemeDisabled:h,onTriggerInputFocus:xe,onTriggerInputBlur:Ce,handleTriggerOrMenuResize:De,handleMenuFocus:Se,handleMenuBlur:Re,handleMenuTabOut:Me,handleTriggerClick:Oe,handleToggle:Q,handleDeleteOption:t,handlePatternInput:$,handleClear:Ee,handleTriggerBlur:re,handleTriggerFocus:ae,handleKeydown:Fe,handleMenuAfterLeave:be,handleMenuClickOutside:se,handleMenuScroll:Le,handleMenuKeydown:Fe,handleMenuMousedown:Ne,mergedTheme:p,cssVars:h?void 0:_e,themeClass:te?.themeClass,onRender:te?.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(lt,null,{default:()=>[l(rt,null,{default:()=>l(Ot,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),l(at,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ue.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(cn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,r;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),st(l(xt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(r=this.menuProps)===null||r===void 0?void 0:r.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,h;return[(h=(c=this.$slots).empty)===null||h===void 0?void 0:h.call(c)]},action:()=>{var c,h;return[(h=(c=this.$slots).action)===null||h===void 0?void 0:h.call(c)]}}),this.displayDirective==="show"?[[dt,this.mergedShow],[on,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[on,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as F,Bt as N,gt as a,xt as b,ft as g,Rt as t};
