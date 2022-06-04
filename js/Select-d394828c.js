import{m as Ze,aW as Je,aX as dn,f as re,Z as l,a2 as y,a3 as _,a4 as ce,T as un,a5 as ie,S as cn,U as Ye,aY as Dn,n as R,am as Q,V as $e,$ as fn,aZ as Vn,a_ as Xe,ai as He,av as hn,aw as we,ae as H,ad as qe,aC as vn,X as K,a$ as jn,y as O,b0 as Kn,w as Te,ap as Hn,b1 as Qe,a6 as en,b2 as Wn,_ as Un,aK as qn,ar as Gn,aN as Zn,Y as Yn,aq as Xn,ax as ke,b3 as bn,b4 as Jn,aL as Qn,b5 as et,b6 as nn,L as tn,F as on,ah as ln,aD as nt,b7 as tt,ag as ot,b8 as lt,b9 as Ge,as as it,at as rt,au as at,ba as st,bb as dt,bc as rn,bd as ut,ab as q}from"./index-7367b2eb.js";import{F as ct,N as We}from"./Tag-23362430.js";function ft(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function gn(e,i){i&&(Ze(()=>{const{value:r}=e;r&&Je.registerHandler(r,i)}),dn(()=>{const{value:r}=e;r&&Je.unregisterHandler(r)}))}var ht=re({name:"Empty",render(){return l("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),l("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),vt=re({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),bt=y("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ce("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const gt=Object.assign(Object.assign({},ie.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var pt=re({name:"Empty",props:gt,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=un(e),u=ie("Empty","-empty",bt,Vn,e,i),{localeRef:f}=cn("Empty"),b=Ye(Dn,null),g=R(()=>{var h,x,T;return(h=e.description)!==null&&h!==void 0?h:(T=(x=b?.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||T===void 0?void 0:T.description}),s=R(()=>{var h,x;return((x=(h=b?.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>l(ht,null))}),I=R(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:x},self:{[Q("iconSize",h)]:T,[Q("fontSize",h)]:B,textColor:z,iconColor:p,extraTextColor:C}}=u.value;return{"--n-icon-size":T,"--n-font-size":B,"--n-bezier":x,"--n-text-color":z,"--n-icon-color":p,"--n-extra-text-color":C}}),S=r?$e("empty",R(()=>{let h="";const{size:x}=e;return h+=x[0],h}),I,e):void 0;return{mergedClsPrefix:i,mergedRenderIcon:s,localizedDescription:R(()=>g.value||f.value.description),cssVars:r?void 0:I,themeClass:S?.themeClass,onRender:S?.onRender}},render(){const{$slots:e,mergedClsPrefix:i,onRender:r}=this;return r?.(),l("div",{class:[`${i}-empty`,this.themeClass],style:this.cssVars},this.showIcon?l("div",{class:`${i}-empty__icon`},e.icon?e.icon():l(fn,{clsPrefix:i},{default:this.mergedRenderIcon})):null,this.showDescription?l("div",{class:`${i}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?l("div",{class:`${i}-empty__extra`},e.extra()):null)}});const mt=l(ct);function wt(e,i){return l(hn,{name:"fade-in-scale-up-transition"},{default:()=>e?l(fn,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>mt}):null})}var an=re({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:r,multipleRef:u,valueSetRef:f,renderLabelRef:b,renderOptionRef:g,labelFieldRef:s,valueFieldRef:I,handleOptionClick:S,handleOptionMouseEnter:h}=Ye(Xe),x=He(()=>{const{value:p}=r;return p?e.tmNode.key===p.key:!1});function T(p){const{tmNode:C}=e;C.disabled||S(p,C)}function B(p){const{tmNode:C}=e;C.disabled||h(p,C)}function z(p){const{tmNode:C}=e,{value:k}=x;C.disabled||k||h(p,C)}return{multiple:u,isGrouped:He(()=>{const{tmNode:p}=e,{parent:C}=p;return C&&C.rawNode.type==="group"}),isPending:x,isSelected:He(()=>{const{value:p}=i,{value:C}=u;if(p===null)return!1;const k=e.tmNode.rawNode[I.value];if(C){const{value:L}=f;return L.has(k)}else return p===k}),labelField:s,renderLabel:b,renderOption:g,handleMouseMove:z,handleMouseEnter:B,handleClick:T}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:r,isPending:u,isGrouped:f,multiple:b,renderOption:g,renderLabel:s,handleClick:I,handleMouseEnter:S,handleMouseMove:h}=this,T=wt(b&&r,e),B=s?[s(i,r),T]:[we(i[this.labelField],i,r),T],z=l("div",{class:[`${e}-base-select-option`,i.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:u}],style:i.style,onClick:I,onMouseenter:S,onMousemove:h},l("div",{class:`${e}-base-select-option__content`},B));return i.render?i.render({node:z,option:i,selected:r}):g?g({node:z,option:i,selected:r}):z}}),sn=re({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:r}=Ye(Xe);return{labelField:r,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:r,tmNode:{rawNode:u}}=this,f=i?i(u,!1):we(u[this.labelField],u,!1),b=l("div",{class:`${e}-base-select-group-header`},f);return u.render?u.render({node:b,option:u}):r?r({node:b,option:u,selected:!1}):b}}),yt=y("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[H("multiple",[y("base-select-option",`
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
 `,[_("content",`
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
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
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
 `,[ce("&:active",`
 color: var(--n-option-text-color-pressed);
 `),H("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),H("pending",`
 background-color: var(--n-option-color-pending);
 `),H("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),H("disabled",`
 cursor: not-allowed;
 `,[qe("selected",`
 color: var(--n-option-text-color-disabled);
 `),H("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[vn({enterScale:"0.5"})])])]),xt=re({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ie.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=ie("InternalSelectMenu","-internal-select-menu",yt,jn,e,K(e,"clsPrefix")),r=O(null),u=O(null),f=O(null),b=R(()=>e.treeMate.getFlattenedNodes()),g=R(()=>Kn(b.value)),s=O(null);function I(){const{treeMate:t}=e;let c=null;const{value:$}=e;$===null?c=t.getFirstAvailableNode():(e.multiple?c=t.getNode(($||[])[($||[]).length-1]):c=t.getNode($),(!c||c.disabled)&&(c=t.getFirstAvailableNode())),P(c||null)}function S(){const{value:t}=s;t&&!e.treeMate.getNode(t.key)&&(s.value=null)}let h;Te(()=>e.show,t=>{t?h=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?I():S(),bn(ee)):S()},{immediate:!0}):h?.()},{immediate:!0}),dn(()=>{h?.()});const x=R(()=>Hn(i.value.self[Q("optionHeight",e.size)])),T=R(()=>Qe(i.value.self[Q("padding",e.size)])),B=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=R(()=>{const t=b.value;return t&&t.length===0});function p(t){const{onToggle:c}=e;c&&c(t)}function C(t){const{onScroll:c}=e;c&&c(t)}function k(t){var c;(c=f.value)===null||c===void 0||c.sync(),C(t)}function L(){var t;(t=f.value)===null||t===void 0||t.sync()}function G(){const{value:t}=s;return t||null}function U(t,c){c.disabled||P(c,!1)}function E(t,c){c.disabled||p(c)}function A(t){var c;ke(t,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,t)}function W(t){var c;ke(t,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,t)}function Z(t){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,t),!e.focusable&&t.preventDefault()}function ae(){const{value:t}=s;t&&P(t.getNext({loop:!0}),!0)}function Y(){const{value:t}=s;t&&P(t.getPrev({loop:!0}),!0)}function P(t,c=!1){s.value=t,c&&ee()}function ee(){var t,c;const $=s.value;if(!$)return;const J=g.value($.key);J!==null&&(e.virtualScroll?(t=u.value)===null||t===void 0||t.scrollTo({index:J}):(c=f.value)===null||c===void 0||c.scrollTo({index:J,elSize:x.value}))}function fe(t){var c,$;!((c=r.value)===null||c===void 0)&&c.contains(t.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,t))}function he(t){var c,$;!((c=r.value)===null||c===void 0)&&c.contains(t.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,t)}en(Xe,{handleOptionMouseEnter:U,handleOptionClick:E,valueSetRef:B,multipleRef:K(e,"multiple"),valueRef:K(e,"value"),renderLabelRef:K(e,"renderLabel"),renderOptionRef:K(e,"renderOption"),pendingTmNodeRef:s,labelFieldRef:K(e,"labelField"),valueFieldRef:K(e,"valueField")}),en(Wn,r),Ze(()=>{const{value:t}=f;t&&t.sync()});const X=R(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:c},self:{height:$,borderRadius:J,color:xe,groupHeaderTextColor:Ce,actionDividerColor:be,optionTextColorPressed:ge,optionTextColor:ne,optionTextColorDisabled:j,optionTextColorActive:pe,optionOpacityDisabled:te,optionCheckColor:Fe,actionTextColor:Se,optionColorPending:se,optionColorActive:de,loadingColor:Oe,loadingSize:Re,[Q("optionFontSize",t)]:Me,[Q("optionHeight",t)]:me,[Q("optionPadding",t)]:ue}}=i.value;return{"--n-height":$,"--n-action-divider-color":be,"--n-action-text-color":Se,"--n-bezier":c,"--n-border-radius":J,"--n-color":xe,"--n-option-font-size":Me,"--n-group-header-text-color":Ce,"--n-option-check-color":Fe,"--n-option-color-pending":se,"--n-option-color-active":de,"--n-option-height":me,"--n-option-opacity-disabled":te,"--n-option-text-color":ne,"--n-option-text-color-active":pe,"--n-option-text-color-disabled":j,"--n-option-text-color-pressed":ge,"--n-option-padding":ue,"--n-option-padding-left":Qe(ue,"left"),"--n-loading-color":Oe,"--n-loading-size":Re}}),{inlineThemeDisabled:ve}=e,V=ve?$e("internal-select-menu",R(()=>e.size[0]),X,e):void 0,ye={selfRef:r,next:ae,prev:Y,getPendingTmNode:G};return gn(r,e.onResize),Object.assign({mergedTheme:i,virtualListRef:u,scrollbarRef:f,itemSize:x,padding:T,flattenedNodes:b,empty:z,virtualListContainer(){const{value:t}=u;return t?.listElRef},virtualListContent(){const{value:t}=u;return t?.itemsElRef},doScroll:C,handleFocusin:fe,handleFocusout:he,handleKeyUp:A,handleKeyDown:W,handleMouseDown:Z,handleVirtualListResize:L,handleVirtualListScroll:k,cssVars:ve?void 0:X,themeClass:V?.themeClass,onRender:V?.onRender},ye)},render(){const{$slots:e,virtualScroll:i,clsPrefix:r,mergedTheme:u,themeClass:f,onRender:b}=this;return b?.(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,f,this.multiple&&`${r}-base-select-menu--multiple`],style:[{width:Xn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?l("div",{class:`${r}-base-select-menu__loading`},l(qn,{clsPrefix:r,strokeWidth:20})):this.empty?l("div",{class:`${r}-base-select-menu__empty`,"data-empty":!0},Yn(e.empty,()=>[l(pt,{theme:u.peers.Empty,themeOverrides:u.peerOverrides.Empty})])):l(Gn,{ref:"scrollbarRef",theme:u.peers.Scrollbar,themeOverrides:u.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?l(Zn,{ref:"virtualListRef",class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?l(sn,{key:g.key,clsPrefix:r,tmNode:g}):g.ignored?null:l(an,{clsPrefix:r,key:g.key,tmNode:g})}):l("div",{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?l(sn,{key:g.key,clsPrefix:r,tmNode:g}):l(an,{clsPrefix:r,key:g.key,tmNode:g})))}),Un(e.action,g=>g&&[l("div",{class:`${r}-base-select-menu__action`,"data-action":!0,key:"action"},g),l(vt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ct=ce([y("base-selection",`
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
 `),y("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
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
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
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
 `,[_("wrapper",`
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
 font-size: inherit;
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
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),qe("disabled",[ce("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),H("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),H("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),H("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
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
 `,[_("input",`
 font-size: inherit;
 font-family: inherit;
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
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>H(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),qe("disabled",[ce("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),H("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),H("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ce("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ft=re({name:"InternalSelection",props:Object.assign(Object.assign({},ie.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const i=O(null),r=O(null),u=O(null),f=O(null),b=O(null),g=O(null),s=O(null),I=O(null),S=O(null),h=O(null),x=O(!1),T=O(!1),B=O(!1),z=ie("InternalSelection","-internal-selection",Ct,Jn,e,K(e,"clsPrefix")),p=R(()=>e.clearable&&!e.disabled&&(B.value||e.active)),C=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):we(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=R(()=>{const o=e.selectedOption;if(!!o)return o[e.labelField]}),L=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var o;const{value:d}=i;if(d){const{value:N}=r;N&&(N.style.width=`${d.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=S.value)===null||o===void 0||o.sync()))}}function U(){const{value:o}=h;o&&(o.style.display="none")}function E(){const{value:o}=h;o&&(o.style.display="inline-block")}Te(K(e,"active"),o=>{o||U()}),Te(K(e,"pattern"),()=>{e.multiple&&bn(G)});function A(o){const{onFocus:d}=e;d&&d(o)}function W(o){const{onBlur:d}=e;d&&d(o)}function Z(o){const{onDeleteOption:d}=e;d&&d(o)}function ae(o){const{onClear:d}=e;d&&d(o)}function Y(o){const{onPatternInput:d}=e;d&&d(o)}function P(o){var d;(!o.relatedTarget||!(!((d=u.value)===null||d===void 0)&&d.contains(o.relatedTarget)))&&A(o)}function ee(o){var d;!((d=u.value)===null||d===void 0)&&d.contains(o.relatedTarget)||W(o)}function fe(o){ae(o)}function he(){B.value=!0}function X(){B.value=!1}function ve(o){!e.active||!e.filterable||o.target!==r.value&&o.preventDefault()}function V(o){Z(o)}function ye(o){if(o.key==="Backspace"&&!t.value&&!e.pattern.length){const{selectedOptions:d}=e;d?.length&&V(d[d.length-1])}}const t=O(!1);let c=null;function $(o){const{value:d}=i;if(d){const N=o.target.value;d.textContent=N,G()}t.value?c=o:Y(o)}function J(){t.value=!0}function xe(){t.value=!1,Y(c),c=null}function Ce(o){var d;T.value=!0,(d=e.onPatternFocus)===null||d===void 0||d.call(e,o)}function be(o){var d;T.value=!1,(d=e.onPatternBlur)===null||d===void 0||d.call(e,o)}function ge(){var o,d;if(e.filterable)T.value=!1,(o=g.value)===null||o===void 0||o.blur(),(d=r.value)===null||d===void 0||d.blur();else if(e.multiple){const{value:N}=f;N?.blur()}else{const{value:N}=b;N?.blur()}}function ne(){var o,d,N;e.filterable?(T.value=!1,(o=g.value)===null||o===void 0||o.focus()):e.multiple?(d=f.value)===null||d===void 0||d.focus():(N=b.value)===null||N===void 0||N.focus()}function j(){const{value:o}=r;o&&(E(),o.focus())}function pe(){const{value:o}=r;o&&o.blur()}function te(o){const{value:d}=s;d&&d.setTextContent(`+${o}`)}function Fe(){const{value:o}=I;return o}function Se(){return r.value}let se=null;function de(){se!==null&&window.clearTimeout(se)}function Oe(){e.disabled||e.active||(de(),se=window.setTimeout(()=>{x.value=!0},100))}function Re(){de()}function Me(o){o||(de(),x.value=!1)}Ze(()=>{Qn(()=>{const o=g.value;!o||(o.tabIndex=e.disabled||T.value?-1:0)})}),gn(u,e.onResize);const{inlineThemeDisabled:me}=e,ue=R(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:d},self:{borderRadius:N,color:Ne,placeholderColor:Le,textColor:Ee,paddingSingle:Ae,paddingMultiple:ze,caretColor:Pe,colorDisabled:De,textColorDisabled:Ve,placeholderColorDisabled:je,colorActive:_e,boxShadowFocus:le,boxShadowActive:n,boxShadowHover:a,border:v,borderFocus:F,borderHover:w,borderActive:m,arrowColor:M,arrowColorDisabled:D,loadingColor:Ie,colorActiveWarning:Ke,boxShadowFocusWarning:mn,boxShadowActiveWarning:wn,boxShadowHoverWarning:yn,borderWarning:xn,borderFocusWarning:Cn,borderHoverWarning:Fn,borderActiveWarning:Sn,colorActiveError:On,boxShadowFocusError:Rn,boxShadowActiveError:Mn,boxShadowHoverError:Tn,borderError:zn,borderFocusError:Pn,borderHoverError:_n,borderActiveError:In,clearColor:kn,clearColorHover:Bn,clearColorPressed:$n,clearSize:Nn,arrowSize:Ln,[Q("height",o)]:En,[Q("fontSize",o)]:An}}=z.value;return{"--n-bezier":d,"--n-border":v,"--n-border-active":m,"--n-border-focus":F,"--n-border-hover":w,"--n-border-radius":N,"--n-box-shadow-active":n,"--n-box-shadow-focus":le,"--n-box-shadow-hover":a,"--n-caret-color":Pe,"--n-color":Ne,"--n-color-active":_e,"--n-color-disabled":De,"--n-font-size":An,"--n-height":En,"--n-padding-single":Ae,"--n-padding-multiple":ze,"--n-placeholder-color":Le,"--n-placeholder-color-disabled":je,"--n-text-color":Ee,"--n-text-color-disabled":Ve,"--n-arrow-color":M,"--n-arrow-color-disabled":D,"--n-loading-color":Ie,"--n-color-active-warning":Ke,"--n-box-shadow-focus-warning":mn,"--n-box-shadow-active-warning":wn,"--n-box-shadow-hover-warning":yn,"--n-border-warning":xn,"--n-border-focus-warning":Cn,"--n-border-hover-warning":Fn,"--n-border-active-warning":Sn,"--n-color-active-error":On,"--n-box-shadow-focus-error":Rn,"--n-box-shadow-active-error":Mn,"--n-box-shadow-hover-error":Tn,"--n-border-error":zn,"--n-border-focus-error":Pn,"--n-border-hover-error":_n,"--n-border-active-error":In,"--n-clear-size":Nn,"--n-clear-color":kn,"--n-clear-color-hover":Bn,"--n-clear-color-pressed":$n,"--n-arrow-size":Ln}}),oe=me?$e("internal-selection",R(()=>e.size[0]),ue,e):void 0;return{mergedTheme:z,mergedClearable:p,patternInputFocused:T,filterablePlaceholder:C,label:k,selected:L,showTagsPanel:x,isCompositing:t,counterRef:s,counterWrapperRef:I,patternInputMirrorRef:i,patternInputRef:r,selfRef:u,multipleElRef:f,singleElRef:b,patternInputWrapperRef:g,overflowRef:S,inputTagElRef:h,handleMouseDown:ve,handleFocusin:P,handleClear:fe,handleMouseEnter:he,handleMouseLeave:X,handleDeleteOption:V,handlePatternKeyDown:ye,handlePatternInputInput:$,handlePatternInputBlur:be,handlePatternInputFocus:Ce,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Re,handleFocusout:ee,handleCompositionEnd:xe,handleCompositionStart:J,onPopoverUpdateShow:Me,focus:ne,focusInput:j,blur:ge,blurInput:pe,updateCounter:te,getCounter:Fe,getTail:Se,renderLabel:e.renderLabel,cssVars:me?void 0:ue,themeClass:oe?.themeClass,onRender:oe?.onRender}},render(){const{status:e,multiple:i,size:r,disabled:u,filterable:f,maxTagCount:b,bordered:g,clsPrefix:s,onRender:I,renderTag:S,renderLabel:h}=this;I?.();const x=b==="responsive",T=typeof b=="number",B=x||T,z=l(et,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var C,k;return(k=(C=this.$slots).arrow)===null||k===void 0?void 0:k.call(C)}});let p;if(i){const{labelField:C}=this,k=P=>l("div",{class:`${s}-base-selection-tag-wrapper`,key:P.value},S?S({option:P,handleClose:()=>this.handleDeleteOption(P)}):l(We,{size:r,closable:!P.disabled,disabled:u,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(P)},{default:()=>h?h(P,!0):we(P[C],P,!0)})),L=(T?this.selectedOptions.slice(0,b):this.selectedOptions).map(k),G=f?l("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:u,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,U=x?()=>l("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(We,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:u})):void 0;let E;if(T){const P=this.selectedOptions.length-b;P>0&&(E=l("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},l(We,{size:r,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:u},{default:()=>`+${P}`})))}const A=x?f?l(nn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>L,counter:U,tail:()=>G}):l(nn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>L,counter:U}):T?L.concat(E):L,W=B?()=>l("div",{class:`${s}-base-selection-popover`},x?L:this.selectedOptions.map(k)):void 0,Z=B?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,Y=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},this.placeholder):null;if(f){const P=l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},A,x?null:G,z);p=l(on,null,B?l(tn,Object.assign({},Z,{scrollable:!0}),{trigger:()=>P,default:W}):P,Y)}else{const P=l("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:u?void 0:0},A,z);p=l(on,null,B?l(tn,Object.assign({},Z,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>P,default:W}):P,Y)}}else if(f){const C=this.pattern||this.isCompositing,k=this.active?!C:!this.selected,L=this.active?!1:this.selected;p=l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:u,disabled:u,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),L?l("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},l("div",{class:`${s}-base-selection-overlay__wrapper`},S?S({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):null,k?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,z)}else p=l("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${s}-base-selection-input`,title:ft(this.label),key:"input"},l("div",{class:`${s}-base-selection-input__content`},S?S({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},this.placeholder),z);return l("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},p,g?l("div",{class:`${s}-base-selection__border`}):null,g?l("div",{class:`${s}-base-selection__state-border`}):null)}});function Be(e){return e.type==="group"}function pn(e){return e.type==="ignored"}function Ue(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function St(e,i){return{getIsGroup:Be,getIgnored:pn,getKey(u){return Be(u)?u.name||u.key||"key-required":u[e]},getChildren(u){return u[i]}}}function Ot(e,i,r,u){if(!i)return e;function f(b){if(!Array.isArray(b))return[];const g=[];for(const s of b)if(Be(s)){const I=f(s[u]);I.length&&g.push(Object.assign({},s,{[u]:I}))}else{if(pn(s))continue;i(r,s)&&g.push(s)}return g}return f(e)}function Rt(e,i,r){const u=new Map;return e.forEach(f=>{Be(f)?f[r].forEach(b=>{u.set(b[i],b)}):u.set(f[i],f)}),u}var Mt=ce([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[vn()])]);const Tt=Object.assign(Object.assign({},ie.props),{to:Ge.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,onChange:[Function,Array],items:Array});var _t=re({name:"Select",props:Tt,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:r,namespaceRef:u,inlineThemeDisabled:f}=un(e),b=ie("Select","-select",Mt,ut,e,i),g=O(e.defaultValue),s=K(e,"value"),I=ln(s,g),S=O(!1),h=O(""),x=R(()=>{const{valueField:n,childrenField:a}=e,v=St(n,a);return nt(P.value,v)}),T=R(()=>Rt(ae.value,e.valueField,e.childrenField)),B=O(!1),z=ln(K(e,"show"),B),p=O(null),C=O(null),k=O(null),{localeRef:L}=cn("Select"),G=R(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:L.value.placeholder}),U=tt(e,["items","options"]),E=O([]),A=O([]),W=O(new Map),Z=R(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:a,valueField:v}=e;return F=>({[a]:String(F),[v]:F})}return n===!1?!1:a=>Object.assign(n(a),{value:a})}),ae=R(()=>A.value.concat(E.value).concat(U.value)),Y=R(()=>{const{labelField:n,valueField:a}=e;return(v,F)=>{if(!F)return!1;const w=F[n];if(typeof w=="string")return Ue(v,w);const m=F[a];return typeof m=="string"?Ue(v,m):typeof m=="number"?Ue(v,String(m)):!1}}),P=R(()=>{if(e.remote)return U.value;{const{value:n}=ae,{value:a}=h;return!a.length||!e.filterable?n:Ot(n,Y.value,a,e.childrenField)}});function ee(n){const a=e.remote,{value:v}=W,{value:F}=T,{value:w}=Z,m=[];return n.forEach(M=>{if(F.has(M))m.push(F.get(M));else if(a&&v.has(M))m.push(v.get(M));else if(w){const D=w(M);D&&m.push(D)}}),m}const fe=R(()=>{if(e.multiple){const{value:n}=I;return Array.isArray(n)?ee(n):[]}return null}),he=R(()=>{const{value:n}=I;return!e.multiple&&!Array.isArray(n)?n===null?null:ee([n])[0]||null:null}),X=ot(e),{mergedSizeRef:ve,mergedDisabledRef:V,mergedStatusRef:ye}=X;function t(n,a){const{onChange:v,"onUpdate:value":F,onUpdateValue:w}=e,{nTriggerFormChange:m,nTriggerFormInput:M}=X;v&&q(v,n,a),w&&q(w,n,a),F&&q(F,n,a),g.value=n,m(),M()}function c(n){const{onBlur:a}=e,{nTriggerFormBlur:v}=X;a&&q(a,n),v()}function $(){const{onClear:n}=e;n&&q(n)}function J(n){const{onFocus:a}=e,{nTriggerFormFocus:v}=X;a&&q(a,n),v()}function xe(n){const{onSearch:a}=e;a&&q(a,n)}function Ce(n){const{onScroll:a}=e;a&&q(a,n)}function be(){var n;const{remote:a,multiple:v}=e;if(a){const{value:F}=W;if(v){const{valueField:w}=e;(n=fe.value)===null||n===void 0||n.forEach(m=>{F.set(m[w],m)})}else{const w=he.value;w&&F.set(w[e.valueField],w)}}}function ge(n){const{onUpdateShow:a,"onUpdate:show":v}=e;a&&q(a,n),v&&q(v,n),B.value=n}function ne(){V.value||(ge(!0),B.value=!0,e.filterable&&De())}function j(){ge(!1)}function pe(){h.value="",A.value=[]}const te=O(!1);function Fe(){e.filterable&&(te.value=!0)}function Se(){e.filterable&&(te.value=!1,z.value||pe())}function se(){V.value||(z.value?e.filterable||j():ne())}function de(n){var a,v;!((v=(a=k.value)===null||a===void 0?void 0:a.selfRef)===null||v===void 0)&&v.contains(n.relatedTarget)||(S.value=!1,c(n),j())}function Oe(n){J(n),S.value=!0}function Re(n){S.value=!0}function Me(n){var a;!((a=p.value)===null||a===void 0)&&a.$el.contains(n.relatedTarget)||(S.value=!1,c(n),j())}function me(){var n;(n=p.value)===null||n===void 0||n.focus(),j()}function ue(n){var a;z.value&&(!((a=p.value)===null||a===void 0)&&a.$el.contains(n.target)||j())}function oe(n){if(!Array.isArray(n))return[];if(Z.value)return Array.from(n);{const{remote:a}=e,{value:v}=T;if(a){const{value:F}=W;return n.filter(w=>v.has(w)||F.has(w))}else return n.filter(F=>v.has(F))}}function o(n){d(n.rawNode)}function d(n){if(V.value)return;const{tag:a,remote:v,clearFilterAfterSelect:F,valueField:w}=e;if(a&&!v){const{value:m}=A,M=m[0]||null;M&&(E.value.push(M),A.value=[])}if(v&&W.value.set(n[w],n),e.multiple){const m=oe(I.value),M=m.findIndex(D=>D===n[w]);if(~M){if(m.splice(M,1),a&&!v){const D=N(n[w]);~D&&(E.value.splice(D,1),F&&(h.value=""))}}else m.push(n[w]),F&&(h.value="");t(m,ee(m))}else{if(a&&!v){const m=N(n[w]);~m?E.value=[E.value[m]]:E.value=[]}Pe(),j(),t(n[w],n)}}function N(n){return E.value.findIndex(v=>v[e.valueField]===n)}function Ne(n){z.value||ne();const{value:a}=n.target;h.value=a;const{tag:v,remote:F}=e;if(xe(a),v&&!F){if(!a){A.value=[];return}const{onCreate:w}=e,m=w?w(a):{[e.labelField]:a,[e.valueField]:a},{valueField:M}=e;U.value.some(D=>D[M]===m[M])||E.value.some(D=>D[M]===m[M])?A.value=[]:A.value=[m]}}function Le(n){n.stopPropagation();const{multiple:a}=e;!a&&e.filterable&&j(),$(),a?t([],[]):t(null,null)}function Ee(n){!ke(n,"action")&&!ke(n,"empty")&&n.preventDefault()}function Ae(n){Ce(n)}function ze(n){var a,v,F,w,m;switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((a=p.value)===null||a===void 0)&&a.isCompositing)){if(z.value){const M=(v=k.value)===null||v===void 0?void 0:v.getPendingTmNode();M?o(M):e.filterable||(j(),Pe())}else if(ne(),e.tag&&te.value){const M=A.value[0];if(M){const D=M[e.valueField],{value:Ie}=I;e.multiple&&Array.isArray(Ie)&&Ie.some(Ke=>Ke===D)||d(M)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;z.value&&((F=k.value)===null||F===void 0||F.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;z.value?(w=k.value)===null||w===void 0||w.next():ne();break;case"Escape":j(),(m=p.value)===null||m===void 0||m.focus();break}}function Pe(){var n;(n=p.value)===null||n===void 0||n.focus()}function De(){var n;(n=p.value)===null||n===void 0||n.focusInput()}function Ve(){var n;!z.value||(n=C.value)===null||n===void 0||n.syncPosition()}be(),Te(K(e,"options"),be);const je={focus:()=>{var n;(n=p.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=p.value)===null||n===void 0||n.blur()}},_e=R(()=>{const{self:{menuBoxShadow:n}}=b.value;return{"--n-menu-box-shadow":n}}),le=f?$e("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},je),{mergedStatus:ye,mergedClsPrefix:i,mergedBordered:r,namespace:u,treeMate:x,isMounted:lt(),triggerRef:p,menuRef:k,pattern:h,uncontrolledShow:B,mergedShow:z,adjustedTo:Ge(e),uncontrolledValue:g,mergedValue:I,followerRef:C,localizedPlaceholder:G,selectedOption:he,selectedOptions:fe,mergedSize:ve,mergedDisabled:V,focused:S,activeWithoutMenuOpen:te,inlineThemeDisabled:f,onTriggerInputFocus:Fe,onTriggerInputBlur:Se,handleTriggerOrMenuResize:Ve,handleMenuFocus:Re,handleMenuBlur:Me,handleMenuTabOut:me,handleTriggerClick:se,handleToggle:o,handleDeleteOption:d,handlePatternInput:Ne,handleClear:Le,handleTriggerBlur:de,handleTriggerFocus:Oe,handleKeydown:ze,handleMenuAfterLeave:pe,handleMenuClickOutside:ue,handleMenuScroll:Ae,handleMenuKeydown:ze,handleMenuMousedown:Ee,mergedTheme:b,cssVars:f?void 0:_e,themeClass:le?.themeClass,onRender:le?.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(it,null,{default:()=>[l(rt,null,{default:()=>l(Ft,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,i;return[(i=(e=this.$slots).arrow)===null||i===void 0?void 0:i.call(e)]}})}),l(at,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ge.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(hn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,i,r;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),st(l(xt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(i=this.menuProps)===null||i===void 0?void 0:i.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(r=this.menuProps)===null||r===void 0?void 0:r.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var u,f;return[(f=(u=this.$slots).empty)===null||f===void 0?void 0:f.call(u)]},action:()=>{var u,f;return[(f=(u=this.$slots).action)===null||f===void 0?void 0:f.call(u)]}}),this.displayDirective==="show"?[[dt,this.mergedShow],[rn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[rn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as F,_t as N,pt as a,xt as b,St as c,ft as g};
