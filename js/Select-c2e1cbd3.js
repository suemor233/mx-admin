import{d as ie,h as l,$ as y,a0 as F,a1 as de,P as an,a2 as oe,O as sn,Q as Ge,aQ as Nn,l as T,aj as X,S as Ee,Y as dn,aR as Ln,aS as Ze,af as He,as as un,at as we,aa as j,a9 as Ue,aw as cn,T as A,aT as An,x as C,aU as Dn,w as ue,am as Vn,aV as Ye,a3 as Qe,aW as jn,k as fn,X as Kn,aE as Hn,ao as Wn,aH as Un,V as qn,an as Gn,au as ke,aX as $e,aY as Zn,aF as Yn,aZ as Qn,a_ as Xe,p as Je,F as en,ae as nn,ax as Xn,a$ as Jn,ad as et,b0 as nt,b1 as qe,ap as tt,aq as ot,ar as it,b2 as lt,b3 as rt,b4 as tn,b5 as at,a8 as U}from"./index-703972d3.js";import{F as st,N as We}from"./Tag-c770bd2c.js";function dt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}var ut=ie({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ct=ie({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),ft=y("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[F("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[de("+",[F("description",`
 margin-top: 8px;
 `)])]),F("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const ht=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var vt=ie({name:"Empty",props:ht,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=an(e),c=oe("Empty","-empty",ft,Ln,e,i),{localeRef:v}=sn("Empty"),p=Ge(Nn,null),f=T(()=>{var b,S,M;return(b=e.description)!==null&&b!==void 0?b:(M=(S=p?.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||M===void 0?void 0:M.description}),u=T(()=>{var b,S;return((S=(b=p?.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>l(ut,null))}),z=T(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:S},self:{[X("iconSize",b)]:M,[X("fontSize",b)]:w,textColor:h,iconColor:O,extraTextColor:E}}=c.value;return{"--n-icon-size":M,"--n-font-size":w,"--n-bezier":S,"--n-text-color":h,"--n-icon-color":O,"--n-extra-text-color":E}}),x=r?Ee("empty",T(()=>{let b="";const{size:S}=e;return b+=S[0],b}),z,e):void 0;return{mergedClsPrefix:i,mergedRenderIcon:u,localizedDescription:T(()=>f.value||v.value.description),cssVars:r?void 0:z,themeClass:x?.themeClass,onRender:x?.onRender}},render(){const{$slots:e,mergedClsPrefix:i,onRender:r}=this;return r?.(),l("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${i}-empty__icon`},e.icon?e.icon():l(dn,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${i}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${i}-empty__extra`},e.extra()):null)}});const pt=l(st);function bt(e,i){return l(un,{name:"fade-in-scale-up-transition"},{default:()=>e?l(dn,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>pt}):null})}var on=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:r,multipleRef:c,valueSetRef:v,renderLabelRef:p,renderOptionRef:f,handleOptionClick:u,handleOptionMouseEnter:z}=Ge(Ze),x=He(()=>{const{value:w}=r;return w?e.tmNode.key===w.key:!1});function b(w){const{tmNode:h}=e;h.disabled||u(w,h)}function S(w){const{tmNode:h}=e;h.disabled||z(w,h)}function M(w){const{tmNode:h}=e,{value:O}=x;h.disabled||O||z(w,h)}return{multiple:c,isGrouped:He(()=>{const{tmNode:w}=e,{parent:h}=w;return h&&h.rawNode.type==="group"}),isPending:x,isSelected:He(()=>{const{value:w}=i,{value:h}=c;if(w===null)return!1;const O=e.tmNode.rawNode.value;if(h){const{value:E}=v;return E.has(O)}else return w===O}),renderLabel:p,renderOption:f,handleMouseMove:M,handleMouseEnter:S,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:r,isPending:c,isGrouped:v,multiple:p,renderOption:f,renderLabel:u,handleClick:z,handleMouseEnter:x,handleMouseMove:b}=this,M=bt(p&&r,e),w=u?[u(i,r),M]:[we(i.label,i,r),M],h=l("div",{class:[`${e}-base-select-option`,i.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:v,[`${e}-base-select-option--pending`]:c}],style:i.style,onClick:z,onMouseenter:x,onMousemove:b},l("div",{class:`${e}-base-select-option__content`},w));return i.render?i.render({node:h,option:i,selected:r}):f?f({node:h,option:i,selected:r}):h}}),ln=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i}=Ge(Ze);return{renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:r,tmNode:{rawNode:c}}=this,v=i?i(c,!1):we(c.label,c,!1),p=l("div",{class:`${e}-base-select-group-header`},v);return c.render?c.render({node:p,option:c}):r?r({node:p,option:c,selected:!1}):p}}),gt=y("base-select-menu",`
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
 `,[F("content",`
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
 `),F("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),F("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),F("action",`
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
 `,[Ue("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),F("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[cn({enterScale:"0.5"})])])]),mt=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=oe("InternalSelectMenu","-internal-select-menu",gt,An,e,A(e,"clsPrefix")),r=C(null),c=C(null),v=C(null),p=T(()=>e.treeMate.getFlattenedNodes()),f=T(()=>Dn(p.value)),u=C(null);function z(){const{treeMate:o}=e;let a=null;if(e.autoPending){const{value:P}=e;P===null?a=o.getFirstAvailableNode():(e.multiple?a=o.getNode((P||[])[(P||[]).length-1]):a=o.getNode(P),(!a||a.disabled)&&(a=o.getFirstAvailableNode())),a&&R(a)}}let x;ue(A(e,"show"),o=>{o?x=ue(e.resetMenuOnOptionsChange?[A(e,"treeMate"),A(e,"multiple")]:[A(e,"multiple")],()=>{z(),$e(J)},{immediate:!0}):x?.()},{immediate:!0});const b=T(()=>Vn(i.value.self[X("optionHeight",e.size)])),S=T(()=>Ye(i.value.self[X("padding",e.size)])),M=T(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),w=T(()=>{const o=p.value;return o&&o.length===0});function h(o){const{onToggle:a}=e;a&&a(o)}function O(o){const{onScroll:a}=e;a&&a(o)}function E(o){var a;(a=v.value)===null||a===void 0||a.sync(),O(o)}function k(){var o;(o=v.value)===null||o===void 0||o.sync()}function H(){const{value:o}=u;return o||null}function q(o,a){a.disabled||R(a,!1)}function W(o,a){a.disabled||h(a)}function N(o){var a;ke(o,"action")||(a=e.onKeyup)===null||a===void 0||a.call(e,o)}function L(o){var a;ke(o,"action")||(a=e.onKeydown)===null||a===void 0||a.call(e,o)}function K(o){var a;(a=e.onMousedown)===null||a===void 0||a.call(e,o),!e.focusable&&o.preventDefault()}function le(){const{value:o}=u;o&&R(o.getNext({loop:!0}),!0)}function G(){const{value:o}=u;o&&R(o.getPrev({loop:!0}),!0)}function R(o,a=!1){u.value=o,a&&J()}function J(){var o,a;const P=u.value;if(!P)return;const Y=f.value(P.key);Y!==null&&(e.virtualScroll?(o=c.value)===null||o===void 0||o.scrollTo({index:Y}):(a=v.value)===null||a===void 0||a.scrollTo({index:Y,elSize:b.value}))}function ce(o){var a,P;!((a=r.value)===null||a===void 0)&&a.contains(o.target)&&((P=e.onFocus)===null||P===void 0||P.call(e,o))}function fe(o){var a,P;!((a=r.value)===null||a===void 0)&&a.contains(o.relatedTarget)||(P=e.onBlur)===null||P===void 0||P.call(e,o)}Qe(Ze,{handleOptionMouseEnter:q,handleOptionClick:W,valueSetRef:M,multipleRef:A(e,"multiple"),valueRef:A(e,"value"),renderLabelRef:A(e,"renderLabel"),renderOptionRef:A(e,"renderOption"),pendingTmNodeRef:u}),Qe(jn,r),fn(()=>{const{value:o}=v;o&&o.sync()});const Z=T(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:a},self:{height:P,borderRadius:Y,color:ye,groupHeaderTextColor:xe,actionDividerColor:pe,optionTextColorPressed:be,optionTextColor:ee,optionTextColorDisabled:V,optionTextColorActive:ge,optionOpacityDisabled:ne,optionCheckColor:Ce,actionTextColor:Se,optionColorPending:Oe,optionColorActive:re,loadingColor:ae,loadingSize:Re,[X("optionFontSize",o)]:Te,[X("optionHeight",o)]:Me,[X("optionPadding",o)]:se}}=i.value;return{"--n-height":P,"--n-action-divider-color":pe,"--n-action-text-color":Se,"--n-bezier":a,"--n-border-radius":Y,"--n-color":ye,"--n-option-font-size":Te,"--n-group-header-text-color":xe,"--n-option-check-color":Ce,"--n-option-color-pending":Oe,"--n-option-color-active":re,"--n-option-height":Me,"--n-option-opacity-disabled":ne,"--n-option-text-color":ee,"--n-option-text-color-active":ge,"--n-option-text-color-disabled":V,"--n-option-text-color-pressed":be,"--n-option-padding":se,"--n-option-padding-left":Ye(se,"left"),"--n-loading-color":ae,"--n-loading-size":Re}}),{inlineThemeDisabled:he}=e,D=he?Ee("internal-select-menu",T(()=>e.size[0]),Z,e):void 0,ve={selfRef:r,next:le,prev:G,getPendingTmNode:H};return Object.assign({mergedTheme:i,virtualListRef:c,scrollbarRef:v,itemSize:b,padding:S,flattenedNodes:p,empty:w,virtualListContainer(){const{value:o}=c;return o?.listElRef},virtualListContent(){const{value:o}=c;return o?.itemsElRef},doScroll:O,handleFocusin:ce,handleFocusout:fe,handleKeyUp:N,handleKeyDown:L,handleMouseDown:K,handleVirtualListResize:k,handleVirtualListScroll:E,cssVars:he?void 0:Z,themeClass:D?.themeClass,onRender:D?.onRender},ve)},render(){const{$slots:e,virtualScroll:i,clsPrefix:r,mergedTheme:c,themeClass:v,onRender:p}=this;return p?.(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,v,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:Gn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?l("div",{class:`${r}-base-select-menu__loading`},l(Hn,{clsPrefix:r,strokeWidth:20})):this.empty?l("div",{class:`${r}-base-select-menu__empty`,"data-empty":!0},qn(e.empty,()=>[l(vt,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty})])):l(Wn,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?l(Un,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?l(ln,{key:f.key,clsPrefix:r,tmNode:f}):f.ignored?null:l(on,{clsPrefix:r,key:f.key,tmNode:f})}):l("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?l(ln,{key:f.key,clsPrefix:r,tmNode:f}):l(on,{clsPrefix:r,key:f.key,tmNode:f})))}),Kn(e.action,f=>f&&[l("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},f),l(ct,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),wt=de([y("base-selection",`
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
 `),y("base-selection-tags","min-height: var(--n-height);"),F("border, state-border",`
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
 `),F("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[F("arrow",`
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
 `,[F("wrapper",`
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
 `,[F("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),F("render-label",`
 color: var(--n-text-color);
 `)]),Ue("disabled",[de("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j("focus",[F("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),j("disabled","cursor: not-allowed;",[F("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),F("render-label",`
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
 `,[F("input",`
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
 `),F("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>j(`${e}-status`,[F("state-border",`border: var(--n-border-${e});`),Ue("disabled",[de("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),j("focus",[F("state-border",`
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
 `,[F("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),yt=ie({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean}),setup(e){const i=C(null),r=C(null),c=C(null),v=C(null),p=C(null),f=C(null),u=C(null),z=C(null),x=C(null),b=C(null),S=C(!1),M=C(!1),w=C(!1),h=oe("InternalSelection","-internal-selection",wt,Zn,e,A(e,"clsPrefix")),O=T(()=>e.clearable&&!e.disabled&&(w.value||e.active)),E=T(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):we(e.selectedOption.label,e.selectedOption,!0):e.placeholder),k=T(()=>{const t=e.selectedOption;if(!!t)return t.label}),H=T(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function q(){var t;const{value:d}=i;if(d){const{value:$}=r;$&&($.style.width=`${d.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=x.value)===null||t===void 0||t.sync()))}}function W(){const{value:t}=b;t&&(t.style.display="none")}function N(){const{value:t}=b;t&&(t.style.display="inline-block")}ue(A(e,"active"),t=>{t||W()}),ue(A(e,"pattern"),()=>{e.multiple&&$e(q)});function L(t){const{onFocus:d}=e;d&&d(t)}function K(t){const{onBlur:d}=e;d&&d(t)}function le(t){const{onDeleteOption:d}=e;d&&d(t)}function G(t){const{onClear:d}=e;d&&d(t)}function R(t){const{onPatternInput:d}=e;d&&d(t)}function J(t){var d;(!t.relatedTarget||!(!((d=c.value)===null||d===void 0)&&d.contains(t.relatedTarget)))&&L(t)}function ce(t){var d;!((d=c.value)===null||d===void 0)&&d.contains(t.relatedTarget)||K(t)}function fe(t){G(t)}function Z(){w.value=!0}function he(){w.value=!1}function D(t){!e.active||!e.filterable||t.target!==r.value&&t.preventDefault()}function ve(t){le(t)}function o(t){if(t.code==="Backspace"&&!a.value&&!e.pattern.length){const{selectedOptions:d}=e;d?.length&&ve(d[d.length-1])}}const a=C(!1);let P=null;function Y(t){const{value:d}=i;if(d){const $=t.target.value;d.textContent=$,q()}a.value?P=t:R(t)}function ye(){a.value=!0}function xe(){a.value=!1,R(P),P=null}function pe(t){var d;M.value=!0,(d=e.onPatternFocus)===null||d===void 0||d.call(e,t)}function be(t){var d;M.value=!1,(d=e.onPatternBlur)===null||d===void 0||d.call(e,t)}function ee(){var t,d;if(e.filterable)M.value=!1,(t=f.value)===null||t===void 0||t.blur(),(d=r.value)===null||d===void 0||d.blur();else if(e.multiple){const{value:$}=v;$?.blur()}else{const{value:$}=p;$?.blur()}}function V(){var t,d,$;e.filterable?(M.value=!1,(t=f.value)===null||t===void 0||t.focus()):e.multiple?(d=v.value)===null||d===void 0||d.focus():($=p.value)===null||$===void 0||$.focus()}function ge(){const{value:t}=r;t&&(N(),t.focus())}function ne(){const{value:t}=r;t&&t.blur()}function Ce(t){const{value:d}=u;d&&d.setTextContent(`+${t}`)}function Se(){const{value:t}=z;return t}function Oe(){return r.value}let re=null;function ae(){re!==null&&window.clearTimeout(re)}function Re(){e.disabled||e.active||(ae(),re=window.setTimeout(()=>{S.value=!0},100))}function Te(){ae()}function Me(t){t||(ae(),S.value=!1)}fn(()=>{Yn(()=>{const t=f.value;!t||(t.tabIndex=e.disabled||M.value?-1:0)})});const{inlineThemeDisabled:se}=e,ze=T(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:d},self:{borderRadius:$,color:Le,placeholderColor:Ae,textColor:De,paddingSingle:Pe,paddingMultiple:_e,caretColor:Ve,colorDisabled:Fe,textColorDisabled:je,placeholderColorDisabled:Ie,colorActive:te,boxShadowFocus:n,boxShadowActive:s,boxShadowHover:g,border:_,borderFocus:m,borderHover:I,borderActive:B,arrowColor:me,arrowColorDisabled:Be,loadingColor:Ke,colorActiveWarning:vn,boxShadowFocusWarning:pn,boxShadowActiveWarning:bn,boxShadowHoverWarning:gn,borderWarning:mn,borderFocusWarning:wn,borderHoverWarning:yn,borderActiveWarning:xn,colorActiveError:Cn,boxShadowFocusError:Sn,boxShadowActiveError:On,boxShadowHoverError:Rn,borderError:Tn,borderFocusError:Mn,borderHoverError:Fn,borderActiveError:zn,clearColor:Pn,clearColorHover:_n,clearColorPressed:In,clearSize:Bn,arrowSize:kn,[X("height",t)]:$n,[X("fontSize",t)]:En}}=h.value;return{"--n-bezier":d,"--n-border":_,"--n-border-active":B,"--n-border-focus":m,"--n-border-hover":I,"--n-border-radius":$,"--n-box-shadow-active":s,"--n-box-shadow-focus":n,"--n-box-shadow-hover":g,"--n-caret-color":Ve,"--n-color":Le,"--n-color-active":te,"--n-color-disabled":Fe,"--n-font-size":En,"--n-height":$n,"--n-padding-single":Pe,"--n-padding-multiple":_e,"--n-placeholder-color":Ae,"--n-placeholder-color-disabled":Ie,"--n-text-color":De,"--n-text-color-disabled":je,"--n-arrow-color":me,"--n-arrow-color-disabled":Be,"--n-loading-color":Ke,"--n-color-active-warning":vn,"--n-box-shadow-focus-warning":pn,"--n-box-shadow-active-warning":bn,"--n-box-shadow-hover-warning":gn,"--n-border-warning":mn,"--n-border-focus-warning":wn,"--n-border-hover-warning":yn,"--n-border-active-warning":xn,"--n-color-active-error":Cn,"--n-box-shadow-focus-error":Sn,"--n-box-shadow-active-error":On,"--n-box-shadow-hover-error":Rn,"--n-border-error":Tn,"--n-border-focus-error":Mn,"--n-border-hover-error":Fn,"--n-border-active-error":zn,"--n-clear-size":Bn,"--n-clear-color":Pn,"--n-clear-color-hover":_n,"--n-clear-color-pressed":In,"--n-arrow-size":kn}}),Q=se?Ee("internal-selection",T(()=>e.size[0]),ze,e):void 0;return{mergedTheme:h,mergedClearable:O,patternInputFocused:M,filterablePlaceholder:E,label:k,selected:H,showTagsPanel:S,isCompositing:a,counterRef:u,counterWrapperRef:z,patternInputMirrorRef:i,patternInputRef:r,selfRef:c,multipleElRef:v,singleElRef:p,patternInputWrapperRef:f,overflowRef:x,inputTagElRef:b,handleMouseDown:D,handleFocusin:J,handleClear:fe,handleMouseEnter:Z,handleMouseLeave:he,handleDeleteOption:ve,handlePatternKeyDown:o,handlePatternInputInput:Y,handlePatternInputBlur:be,handlePatternInputFocus:pe,handleMouseEnterCounter:Re,handleMouseLeaveCounter:Te,handleFocusout:ce,handleCompositionEnd:xe,handleCompositionStart:ye,onPopoverUpdateShow:Me,focus:V,focusInput:ge,blur:ee,blurInput:ne,updateCounter:Ce,getCounter:Se,getTail:Oe,renderLabel:e.renderLabel,cssVars:se?void 0:ze,themeClass:Q?.themeClass,onRender:Q?.onRender}},render(){const{status:e,multiple:i,size:r,disabled:c,filterable:v,maxTagCount:p,bordered:f,clsPrefix:u,onRender:z,renderTag:x,renderLabel:b}=this;z?.();const S=p==="responsive",M=typeof p=="number",w=S||M,h=l(Qn,{clsPrefix:u,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,k;return(k=(E=this.$slots).arrow)===null||k===void 0?void 0:k.call(E)}});let O;if(i){const E=R=>l("div",{class:`${u}-base-selection-tag-wrapper`,key:R.value},x?x({option:R,handleClose:()=>this.handleDeleteOption(R)}):l(We,{size:r,closable:!R.disabled,disabled:c,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(R)},{default:()=>b?b(R,!0):we(R.label,R,!0)})),k=(M?this.selectedOptions.slice(0,p):this.selectedOptions).map(E),H=v?l("div",{class:`${u}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${u}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${u}-base-selection-input-tag__mirror`},this.pattern)):null,q=S?()=>l("div",{class:`${u}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(We,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let W;if(M){const R=this.selectedOptions.length-p;R>0&&(W=l("div",{class:`${u}-base-selection-tag-wrapper`,key:"__counter__"},l(We,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${R}`})))}const N=S?v?l(Xe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>k,counter:q,tail:()=>H}):l(Xe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>k,counter:q}):M?k.concat(W):k,L=w?()=>l("div",{class:`${u}-base-selection-popover`},S?k:this.selectedOptions.map(E)):void 0,K=w?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,G=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`},this.placeholder):null;if(v){const R=l("div",{ref:"patternInputWrapperRef",class:`${u}-base-selection-tags`},N,S?null:H,h);O=l(en,null,w?l(Je,Object.assign({},K),{trigger:()=>R,default:L}):R,G)}else{const R=l("div",{ref:"multipleElRef",class:`${u}-base-selection-tags`,tabindex:c?void 0:0},N,h);O=l(en,null,w?l(Je,Object.assign({},K),{trigger:()=>R,default:L}):R,G)}}else if(v){const E=this.pattern||this.isCompositing,k=this.active?!E:!this.selected,H=this.active?!1:this.selected;O=l("div",{ref:"patternInputWrapperRef",class:`${u}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${u}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),H?l("div",{class:`${u}-base-selection-label__render-label ${u}-base-selection-overlay`,key:"input"},l("div",{class:`${u}-base-selection-overlay__wrapper`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):null,k?l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${u}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else O=l("div",{ref:"singleElRef",class:`${u}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${u}-base-selection-input`,title:dt(this.label),key:"input"},l("div",{class:`${u}-base-selection-input__content`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):l("div",{class:`${u}-base-selection-placeholder ${u}-base-selection-overlay`,key:"placeholder"},this.placeholder),h);return l("div",{ref:"selfRef",class:[`${u}-base-selection`,this.themeClass,e&&`${u}-base-selection--${e}-status`,{[`${u}-base-selection--active`]:this.active,[`${u}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${u}-base-selection--disabled`]:this.disabled,[`${u}-base-selection--multiple`]:this.multiple,[`${u}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,f?l("div",{class:`${u}-base-selection__border`}):null,f?l("div",{class:`${u}-base-selection__state-border`}):null)}});function xt(e){return Ne(e)?e.name||e.key||"key-required":e.value}function Ne(e){return e.type==="group"}function hn(e){return e.type==="ignored"}const Ct={getKey:xt,getIsGroup:Ne,getIgnored:hn};function rn(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function St(e,i,r){if(!i)return e;function c(v){if(!Array.isArray(v))return[];const p=[];for(const f of v)if(Ne(f)){const u=c(f.children);u.length&&p.push(Object.assign({},f,{children:u}))}else{if(hn(f))continue;i(r,f)&&p.push(f)}return p}return c(e)}function Ot(e){const i=new Map;return e.forEach(r=>{Ne(r)?r.children.forEach(c=>{i.set(c.value,c)}):i.set(r.value,r)}),i}function Rt(e,i){return i?typeof i.label=="string"?rn(e,i.label):i.value!==void 0?rn(e,String(i.value)):!1:!1}var Tt=de([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[cn()])]);const Mt=Object.assign(Object.assign({},oe.props),{to:qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:Rt},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,onChange:[Function,Array],items:Array});var Pt=ie({name:"Select",props:Mt,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:r,namespaceRef:c,inlineThemeDisabled:v}=an(e),p=oe("Select","-select",Tt,at,e,i),f=C(e.defaultValue),u=A(e,"value"),z=nn(u,f),x=C(!1),b=C(""),S=T(()=>Xn(R.value,Ct)),M=T(()=>Ot(G.value)),w=C(!1),h=nn(A(e,"show"),w),O=C(null),E=C(null),k=C(null),{localeRef:H}=sn("Select"),q=T(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:H.value.placeholder}),W=Jn(e,["items","options"]),N=C([]),L=C([]),K=C(new Map),le=T(()=>{const{fallbackOption:n}=e;return n?s=>Object.assign(n(s),{value:s}):!1}),G=T(()=>L.value.concat(N.value).concat(W.value)),R=T(()=>{if(e.remote)return W.value;{const{value:n}=G,{value:s}=b;if(!s.length||!e.filterable)return n;{const{filter:g}=e;return St(n,g,s)}}});function J(n){const s=e.remote,{value:g}=K,{value:_}=M,{value:m}=le,I=[];return n.forEach(B=>{if(_.has(B))I.push(_.get(B));else if(s&&g.has(B))I.push(g.get(B));else if(m){const me=m(B);me&&I.push(me)}}),I}const ce=T(()=>{if(e.multiple){const{value:n}=z;return Array.isArray(n)?J(n):[]}return null}),fe=T(()=>{const{value:n}=z;return!e.multiple&&!Array.isArray(n)?n===null?null:J([n])[0]||null:null}),Z=et(e),{mergedSizeRef:he,mergedDisabledRef:D,mergedStatusRef:ve}=Z;function o(n,s){const{onChange:g,"onUpdate:value":_,onUpdateValue:m}=e,{nTriggerFormChange:I,nTriggerFormInput:B}=Z;g&&U(g,n,s),m&&U(m,n,s),_&&U(_,n,s),f.value=n,I(),B()}function a(n){const{onBlur:s}=e,{nTriggerFormBlur:g}=Z;s&&U(s,n),g()}function P(){const{onClear:n}=e;n&&U(n)}function Y(n){const{onFocus:s}=e,{nTriggerFormFocus:g}=Z;s&&U(s,n),g()}function ye(n){const{onSearch:s}=e;s&&U(s,n)}function xe(n){const{onScroll:s}=e;s&&U(s,n)}function pe(){var n;const{remote:s,multiple:g}=e;if(s){const{value:_}=K;if(g)(n=ce.value)===null||n===void 0||n.forEach(m=>{_.set(m.value,m)});else{const m=fe.value;m&&_.set(m.value,m)}}}function be(n){const{onUpdateShow:s,"onUpdate:show":g}=e;s&&U(s,n),g&&U(g,n),w.value=n}function ee(){D.value||(be(!0),w.value=!0,e.filterable&&Ve())}function V(){be(!1)}function ge(){b.value="",L.value=[]}const ne=C(!1);function Ce(){e.filterable&&(ne.value=!0)}function Se(){e.filterable&&(ne.value=!1,h.value||ge())}function Oe(){D.value||(h.value?e.filterable||V():ee())}function re(n){var s,g;!((g=(s=k.value)===null||s===void 0?void 0:s.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(x.value=!1,a(n),V())}function ae(n){Y(n),x.value=!0}function Re(n){x.value=!0}function Te(n){var s;!((s=O.value)===null||s===void 0)&&s.$el.contains(n.relatedTarget)||(x.value=!1,a(n),V())}function Me(){var n;(n=O.value)===null||n===void 0||n.focus(),V()}function se(n){var s;h.value&&(!((s=O.value)===null||s===void 0)&&s.$el.contains(n.target)||V())}function ze(n){if(!Array.isArray(n))return[];if(le.value)return Array.from(n);{const{remote:s}=e,{value:g}=M;if(s){const{value:_}=K;return n.filter(m=>g.has(m)||_.has(m))}else return n.filter(_=>g.has(_))}}function Q(n){t(n.rawNode)}function t(n){if(D.value)return;const{tag:s,remote:g,clearFilterAfterSelect:_}=e;if(s&&!g){const{value:m}=L,I=m[0]||null;I&&(N.value.push(I),L.value=[])}if(g&&K.value.set(n.value,n),e.multiple){const m=ze(z.value),I=m.findIndex(B=>B===n.value);if(~I){if(m.splice(I,1),s&&!g){const B=d(n.value);~B&&(N.value.splice(B,1),_&&(b.value=""))}}else m.push(n.value),_&&(b.value="");o(m,J(m))}else{if(s&&!g){const m=d(n.value);~m?N.value=[N.value[m]]:N.value=[]}_e(),V(),o(n.value,n)}}function d(n){return N.value.findIndex(g=>g.value===n)}function $(n){h.value||ee();const{value:s}=n.target;b.value=s;const{tag:g,remote:_}=e;if(ye(s),g&&!_){if(!s){L.value=[];return}const m=e.onCreate(s);W.value.some(I=>I.value===m.value)||N.value.some(I=>I.value===m.value)?L.value=[]:L.value=[m]}}function Le(n){n.stopPropagation();const{multiple:s}=e;!s&&e.filterable&&V(),P(),s?o([],[]):o(null,null)}function Ae(n){!ke(n,"action")&&!ke(n,"empty")&&n.preventDefault()}function De(n){xe(n)}function Pe(n){var s,g,_,m,I;switch(n.code){case"Space":if(e.filterable)break;n.preventDefault();case"Enter":case"NumpadEnter":if(!(!((s=O.value)===null||s===void 0)&&s.isCompositing)){if(h.value){const B=(g=k.value)===null||g===void 0?void 0:g.getPendingTmNode();B?Q(B):e.filterable||(V(),_e())}else if(ee(),e.tag&&ne.value){const B=L.value[0];if(B){const me=B.value,{value:Be}=z;e.multiple&&Array.isArray(Be)&&Be.some(Ke=>Ke===me)||t(B)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;h.value&&((_=k.value)===null||_===void 0||_.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;h.value?(m=k.value)===null||m===void 0||m.next():ee();break;case"Escape":V(),(I=O.value)===null||I===void 0||I.focus();break}}function _e(){var n;(n=O.value)===null||n===void 0||n.focus()}function Ve(){var n;(n=O.value)===null||n===void 0||n.focusInput()}function Fe(){var n;(n=E.value)===null||n===void 0||n.syncPosition()}pe(),ue(A(e,"options"),pe),ue(R,()=>{!h.value||$e(Fe)}),ue(z,()=>{!h.value||$e(Fe)});const je={focus:()=>{var n;(n=O.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=O.value)===null||n===void 0||n.blur()}},Ie=T(()=>{const{self:{menuBoxShadow:n}}=p.value;return{"--n-menu-box-shadow":n}}),te=v?Ee("select",void 0,Ie,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:ve,mergedClsPrefix:i,mergedBordered:r,namespace:c,treeMate:S,isMounted:nt(),triggerRef:O,menuRef:k,pattern:b,uncontrolledShow:w,mergedShow:h,adjustedTo:qe(e),uncontrolledValue:f,mergedValue:z,followerRef:E,localizedPlaceholder:q,selectedOption:fe,selectedOptions:ce,mergedSize:he,mergedDisabled:D,focused:x,activeWithoutMenuOpen:ne,inlineThemeDisabled:v,onTriggerInputFocus:Ce,onTriggerInputBlur:Se,handleMenuFocus:Re,handleMenuBlur:Te,handleMenuTabOut:Me,handleTriggerClick:Oe,handleToggle:Q,handleDeleteOption:t,handlePatternInput:$,handleClear:Le,handleTriggerBlur:re,handleTriggerFocus:ae,handleKeydown:Pe,syncPosition:Fe,handleMenuAfterLeave:ge,handleMenuClickOutside:se,handleMenuScroll:De,handleMenuKeydown:Pe,handleMenuMousedown:Ae,mergedTheme:p,cssVars:v?void 0:Ie,themeClass:te?.themeClass,onRender:te?.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(tt,null,{default:()=>[l(ot,null,{default:()=>l(yt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,i;return[(i=(e=this.$slots).arrow)===null||i===void 0?void 0:i.call(e)]}})}),l(it,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(un,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,i,r;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),lt(l(mt,Object.assign({},this.menuProps,{ref:"menuRef",inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(i=this.menuProps)===null||i===void 0?void 0:i.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(r=this.menuProps)===null||r===void 0?void 0:r.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,v;return[(v=(c=this.$slots).empty)===null||v===void 0?void 0:v.call(c)]},action:()=>{var c,v;return[(v=(c=this.$slots).action)===null||v===void 0?void 0:v.call(c)]}}),this.displayDirective==="show"?[[rt,this.mergedShow],[tn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[tn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{ct as F,Pt as N,vt as a,mt as b,dt as g,Ct as t};
