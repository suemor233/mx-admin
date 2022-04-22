import{d as E,h as p,bb as Z,bc as ee,bd as e,$ as oe,a0 as f,aa as m,a9 as x,a1 as y,x as re,P as le,a2 as _,a3 as ae,T as ce,ai as se,l as T,aj as b,S as ne,be as j,bf as te,X as ie,L as de,a8 as he}from"./index-524a5fea.js";var me=E({name:"Checkmark",render(){return p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},p("g",{fill:"none"},p("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}});const be=r=>{const{textColor2:i,primaryColorHover:a,primaryColorPressed:C,primaryColor:c,infoColor:s,successColor:t,warningColor:n,errorColor:g,baseColor:P,borderColor:z,opacityDisabled:k,tagColor:u,closeColor:o,closeColorHover:l,closeColorPressed:v,borderRadiusSmall:d,fontSizeTiny:h,fontSizeSmall:S,fontSizeMedium:$,heightTiny:R,heightSmall:H,heightMedium:M}=r;return Object.assign(Object.assign({},ee),{heightSmall:R,heightMedium:H,heightLarge:M,borderRadius:d,opacityDisabled:k,fontSizeSmall:h,fontSizeMedium:S,fontSizeLarge:$,textColorCheckable:i,textColorHoverCheckable:a,textColorPressedCheckable:C,textColorChecked:P,colorCheckable:"#0000",colorHoverCheckable:"#0000",colorPressedCheckable:"#0000",colorChecked:c,colorCheckedHover:a,colorCheckedPressed:C,border:`1px solid ${z}`,textColor:i,color:u,closeColor:o,closeColorHover:l,closeColorPressed:v,borderPrimary:`1px solid ${e(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:e(c,{alpha:.1}),closeColorPrimary:e(c,{alpha:.75}),closeColorHoverPrimary:e(c,{alpha:.6}),closeColorPressedPrimary:e(c,{alpha:.9}),borderInfo:`1px solid ${e(s,{alpha:.3})}`,textColorInfo:s,colorInfo:e(s,{alpha:.1}),closeColorInfo:e(s,{alpha:.75}),closeColorHoverInfo:e(s,{alpha:.6}),closeColorPressedInfo:e(s,{alpha:.9}),borderSuccess:`1px solid ${e(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:e(t,{alpha:.1}),closeColorSuccess:e(t,{alpha:.75}),closeColorHoverSuccess:e(t,{alpha:.6}),closeColorPressedSuccess:e(t,{alpha:.9}),borderWarning:`1px solid ${e(n,{alpha:.35})}`,textColorWarning:n,colorWarning:e(n,{alpha:.12}),closeColorWarning:e(n,{alpha:.75}),closeColorHoverWarning:e(n,{alpha:.6}),closeColorPressedWarning:e(n,{alpha:.9}),borderError:`1px solid ${e(g,{alpha:.23})}`,textColorError:g,colorError:e(g,{alpha:.08}),closeColorError:e(g,{alpha:.65}),closeColorHoverError:e(g,{alpha:.5}),closeColorPressedError:e(g,{alpha:.8})})},Ce={name:"Tag",common:Z,self:be};var ge=Ce,ue={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ve=oe("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[f("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),f("avatar",`
 display: flex;
 margin-right: 6px;
 `),f("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `),m("round",`
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `,[f("avatar",`
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]),m("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),m("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[x("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[x("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[x("checked","color: var(--n-text-color-pressed-checkable);")])]),m("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[x("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const pe=Object.assign(Object.assign(Object.assign({},_.props),ue),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),ke=de("n-tag");var xe=E({name:"Tag",props:pe,setup(r){const i=re(null),{mergedBorderedRef:a,mergedClsPrefixRef:C,inlineThemeDisabled:c,mergedRtlRef:s}=le(r),t=_("Tag","-tag",ve,ge,r,C);ae(ke,{roundRef:ce(r,"round")});function n(o){if(!r.disabled&&r.checkable){const{checked:l,onCheckedChange:v,onUpdateChecked:d,"onUpdate:checked":h}=r;d&&d(!l),h&&h(!l),v&&v(!l)}}function g(o){if(r.internalStopClickPropagation&&o.stopPropagation(),!r.disabled){const{onClose:l}=r;l&&he(l,o)}}const P={setTextContent(o){const{value:l}=i;l&&(l.textContent=o)}},z=se("Tag",s,C),k=T(()=>{const{type:o,size:l,color:{color:v,textColor:d}={}}=r,{common:{cubicBezierEaseInOut:h},self:{padding:S,closeMargin:$,closeMarginRtl:R,borderRadius:H,opacityDisabled:M,textColorCheckable:I,textColorHoverCheckable:O,textColorPressedCheckable:F,textColorChecked:W,colorCheckable:L,colorHoverCheckable:U,colorPressedCheckable:N,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:K,[b("closeSize",l)]:A,[b("fontSize",l)]:X,[b("height",l)]:B,[b("color",o)]:q,[b("textColor",o)]:G,[b("border",o)]:J,[b("closeColor",o)]:w,[b("closeColorHover",o)]:Q,[b("closeColorPressed",o)]:Y}}=t.value;return{"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":h,"--n-border-radius":H,"--n-border":J,"--n-close-color":w,"--n-close-color-hover":Q,"--n-close-color-pressed":Y,"--n-close-color-disabled":w,"--n-close-margin":$,"--n-close-margin-rtl":R,"--n-close-size":A,"--n-color":v||q,"--n-color-checkable":L,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":K,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":N,"--n-font-size":X,"--n-height":B,"--n-opacity-disabled":M,"--n-padding":S,"--n-text-color":d||G,"--n-text-color-checkable":I,"--n-text-color-checked":W,"--n-text-color-hover-checkable":O,"--n-text-color-pressed-checkable":F}}),u=c?ne("tag",T(()=>{let o="";const{type:l,size:v,color:{color:d,textColor:h}={}}=r;return o+=l[0],o+=v[0],d&&(o+=`a${j(d)}`),h&&(o+=`b${j(h)}`),o}),k,r):void 0;return Object.assign(Object.assign({},P),{rtlEnabled:z,mergedClsPrefix:C,contentRef:i,mergedBordered:a,handleClick:n,handleCloseClick:g,cssVars:c?void 0:k,themeClass:u?.themeClass,onRender:u?.onRender})},render(){var r,i;const{mergedClsPrefix:a,rtlEnabled:C,color:{borderColor:c}={},onRender:s,$slots:t}=this;return s?.(),p("div",{class:[`${a}-tag`,this.themeClass,{[`${a}-tag--rtl`]:C,[`${a}-tag--disabled`]:this.disabled,[`${a}-tag--checkable`]:this.checkable,[`${a}-tag--checked`]:this.checkable&&this.checked,[`${a}-tag--round`]:this.round}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ie(t.avatar,n=>n&&p("div",{class:`${a}-tag__avatar`},n)),p("span",{class:`${a}-tag__content`,ref:"contentRef"},(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)),!this.checkable&&this.closable?p(te,{clsPrefix:a,class:`${a}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick}):null,!this.checkable&&this.mergedBordered?p("div",{class:`${a}-tag__border`,style:{borderColor:c}}):null)}});export{me as F,xe as N,ke as a,ue as c,ge as t};
