import{be as le,ch as se,bg as de,a2 as O,a3 as t,aO as P,a4 as T,ae as l,ad as H,f as ce,T as ue,a5 as L,ag as he,y as N,X as be,ah as fe,n as _,am as v,aE as D,ap as s,V as ve,ci as W,Z as o,_ as g,aG as ge,aH as we,ab as j}from"./index-44de73b8.js";const me=e=>{const{primaryColor:d,opacityDisabled:h,borderRadius:n,textColor3:r}=e,w="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},se),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:h,railColor:w,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${de(d,{alpha:.2})}`})},pe={name:"Switch",common:le,self:me};var ye=pe,xe=O("switch",`
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
 `),O("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[P({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),H("disabled",[H("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[T("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[T("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),t("rail",`
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
 `,[P()]),t("button",`
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
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const ke=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var Be=ce({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:h}=ue(e),n=L("Switch","-switch",xe,ye,e,d),r=he(e),{mergedSizeRef:w,mergedDisabledRef:b}=r,y=N(e.defaultValue),B=be(e,"value"),f=fe(B,y),x=_(()=>f.value===e.checkedValue),m=N(!1),i=N(!1),c=_(()=>{const{railStyle:a}=e;if(!!a)return a({focused:i.value,checked:x.value})});function u(a){const{"onUpdate:value":C,onChange:R,onUpdateValue:V}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;C&&j(C,a),V&&j(V,a),R&&j(R,a),y.value=a,$(),z()}function M(){const{nTriggerFormFocus:a}=r;a()}function U(){const{nTriggerFormBlur:a}=r;a()}function A(){e.loading||b.value||(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function E(){i.value=!0,M()}function I(){i.value=!1,U(),m.value=!1}function X(a){e.loading||b.value||a.code==="Space"&&(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),m.value=!1)}function Y(a){e.loading||b.value||a.code==="Space"&&(a.preventDefault(),m.value=!0)}const K=_(()=>{const{value:a}=w,{self:{opacityDisabled:C,railColor:R,railColorActive:V,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:G,loadingColor:Z,textColor:q,iconColor:J,[v("buttonHeight",a)]:k,[v("buttonWidth",a)]:Q,[v("buttonWidthPressed",a)]:ee,[v("railHeight",a)]:S,[v("railWidth",a)]:F,[v("railBorderRadius",a)]:te,[v("buttonBorderRadius",a)]:ae},common:{cubicBezierEaseInOut:ie}}=n.value,oe=D((s(S)-s(k))/2),ne=D(Math.max(s(S),s(k))),re=s(S)>s(k)?F:D(s(F)+s(k)-s(S));return{"--n-bezier":ie,"--n-button-border-radius":ae,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":Q,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ne,"--n-offset":oe,"--n-opacity-disabled":C,"--n-rail-border-radius":te,"--n-rail-color":R,"--n-rail-color-active":V,"--n-rail-height":S,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":G,"--n-loading-color":Z,"--n-text-color":q,"--n-icon-color":J}}),p=h?ve("switch",_(()=>w.value[0]),K,e):void 0;return{handleClick:A,handleBlur:I,handleFocus:E,handleKeyup:X,handleKeydown:Y,mergedRailStyle:c,pressed:m,mergedClsPrefix:d,mergedValue:f,checked:x,mergedDisabled:b,cssVars:h?void 0:K,themeClass:p?.themeClass,onRender:p?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:h,mergedRailStyle:n,onRender:r,$slots:w}=this;r?.();const{checked:b,unchecked:y,icon:B,"checked-icon":f,"unchecked-icon":x}=w,m=!(W(B)&&W(f)&&W(x));return o("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,m&&`${e}-switch--icon`,h&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},g(b,i=>g(y,c=>i||c?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),i),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),c)):null)),o("div",{class:`${e}-switch__button`},g(B,i=>g(f,c=>g(x,u=>o(ge,null,{default:()=>this.loading?o(we,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?o("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(u||i)?o("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),g(b,i=>i&&o("div",{key:"checked",class:`${e}-switch__checked`},i)),g(y,i=>i&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{Be as N};
