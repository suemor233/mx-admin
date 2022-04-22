import{bb as le,ca as se,bd as de,$ as K,a0 as t,aL as L,a1 as T,aa as u,a9 as M,d as ce,P as ue,a2 as O,ad as he,x as W,T as be,ae as fe,l as _,aj as v,aB as D,am as l,S as ve,cb as N,h as i,X as g,aD as ge,aE as we,a8 as j}from"./index-524a5fea.js";const me=e=>{const{primaryColor:s,opacityDisabled:h,borderRadius:n,textColor3:r}=e,w="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},se),{iconColor:r,textColor:"white",loadingColor:s,opacityDisabled:h,railColor:w,railColorActive:s,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${de(s,{alpha:.2})}`})},pe={name:"Switch",common:le,self:me};var xe=pe,ye=K("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),K("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[L({originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u("round",[t("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[t("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),M("disabled",[M("icon",[u("pressed",[t("rail",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),t("rail",[T("&:active",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),u("active",[u("pressed",[t("rail",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),t("rail",[T("&:active",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),u("active",[t("rail",[t("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[L()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),u("active",[t("rail","background-color: var(--n-rail-color-active);")]),u("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),u("loading",[t("rail",`
 pointer-events: none;
 `)])]);const ke=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var Se=ce({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:h}=ue(e),n=O("Switch","-switch",ye,xe,e,s),r=he(e),{mergedSizeRef:w,mergedDisabledRef:b}=r,x=W(e.defaultValue),S=be(e,"value"),f=fe(S,x),y=_(()=>f.value===e.checkedValue),m=W(!1),o=W(!1),d=_(()=>{const{railStyle:a}=e;if(!!a)return a({focused:o.value,checked:y.value})});function c(a){const{"onUpdate:value":C,onChange:B,onUpdateValue:V}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;C&&j(C,a),V&&j(V,a),B&&j(B,a),x.value=a,$(),z()}function U(){const{nTriggerFormFocus:a}=r;a()}function A(){const{nTriggerFormBlur:a}=r;a()}function H(){e.loading||b.value||(f.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue))}function I(){o.value=!0,U()}function E(){o.value=!1,A(),m.value=!1}function X(a){e.loading||b.value||a.code==="Space"&&(f.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue),m.value=!1)}function Y(a){e.loading||b.value||a.code==="Space"&&(a.preventDefault(),m.value=!0)}const P=_(()=>{const{value:a}=w,{self:{opacityDisabled:C,railColor:B,railColorActive:V,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:q,loadingColor:G,textColor:J,iconColor:Q,[v("buttonHeight",a)]:k,[v("buttonWidth",a)]:Z,[v("buttonWidthPressed",a)]:ee,[v("railHeight",a)]:R,[v("railWidth",a)]:F,[v("railBorderRadius",a)]:te,[v("buttonBorderRadius",a)]:ae},common:{cubicBezierEaseInOut:oe}}=n.value,ie=D((l(R)-l(k))/2),ne=D(Math.max(l(R),l(k))),re=l(R)>l(k)?F:D(l(F)+l(k)-l(R));return{"--n-bezier":oe,"--n-button-border-radius":ae,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":Z,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ne,"--n-offset":ie,"--n-opacity-disabled":C,"--n-rail-border-radius":te,"--n-rail-color":B,"--n-rail-color-active":V,"--n-rail-height":R,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":q,"--n-loading-color":G,"--n-text-color":J,"--n-icon-color":Q}}),p=h?ve("switch",_(()=>w.value[0]),P,e):void 0;return{handleClick:H,handleBlur:E,handleFocus:I,handleKeyup:X,handleKeydown:Y,mergedRailStyle:d,pressed:m,mergedClsPrefix:s,mergedValue:f,checked:y,mergedDisabled:b,cssVars:h?void 0:P,themeClass:p?.themeClass,onRender:p?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:h,mergedRailStyle:n,onRender:r,$slots:w}=this;r?.();const{checked:b,unchecked:x,icon:S,"checked-icon":f,"unchecked-icon":y}=w,m=!(N(S)&&N(f)&&N(y));return i("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,h&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},g(b,o=>g(x,d=>o||d?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),o),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),d)):null)),i("div",{class:`${e}-switch__button`},g(S,o=>g(f,d=>g(y,c=>i(ge,null,{default:()=>this.loading?i(we,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(d||o)?i("div",{class:`${e}-switch__button-icon`,key:d?"checked-icon":"icon"},d||o):!this.checked&&(c||o)?i("div",{class:`${e}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||o):null})))),g(b,o=>o&&i("div",{key:"checked",class:`${e}-switch__checked`},o)),g(x,o=>o&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{Se as N};
