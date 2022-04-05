import{d as z,h as n,Y as x,_,Z as m,a7 as I,cc as A,O as $,v as F,k as N,ac as L,$ as T,a0 as U,ag as D,Q as B,K as j,cd as H,a5 as P,ce as O,ab as M,b1 as V,cf as K,b2 as q,aN as Z,ad as Q,P as W,bO as Y,T as G}from"./index-0227ab67.js";import{C as J}from"./ChevronRight-83e5ac23.js";var X=z({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ee=x("collapse",{width:"100%"},[x("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[x("collapse-item","margin-left: 32px;"),_("&:first-child",{marginTop:0}),_("&:first-child >",[m("header",{paddingTop:0})]),I("left-arrow-placement",[m("header",[x("collapse-item-arrow",{marginRight:"4px"})])]),I("right-arrow-placement",[m("header",[x("collapse-item-arrow",{marginLeft:"4px"})])]),m("content-wrapper",[m("content-inner",{paddingTop:"16px"}),A({duration:"0.15s"})]),I("active",[m("header",[I("active",[x("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),_("&:not(:first-child)",{borderTop:"1px solid var(--n-divider-color)"}),m("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 `,[m("header-main",`
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),m("header-extra",`
 cursor: pointer;
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),x("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const ae=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),k=j("n-collapse");var oe=z({name:"Collapse",props:ae,setup(e,{slots:d}){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:s}=$(e),f=F(e.defaultExpandedNames),r=N(()=>e.expandedNames),u=L(r,f),h=T("Collapse","-collapse",ee,H,e,t);function i(c){const{"onUpdate:expandedNames":a,onUpdateExpandedNames:p,onExpandedNamesChange:w}=e;p&&P(p,c),a&&P(a,c),w&&P(w,c),f.value=c}function g(c){const{onItemHeaderClick:a}=e;a&&P(a,c)}function l(c,a,p){const{accordion:w}=e,{value:R}=u;if(w)c?(i([a]),g({name:a,expanded:!0,event:p})):(i([]),g({name:a,expanded:!1,event:p}));else if(!Array.isArray(R))i([a]),g({name:a,expanded:!0,event:p});else{const v=R.slice(),E=v.findIndex(S=>a===S);~E?(v.splice(E,1),i(v),g({name:a,expanded:!1,event:p})):(v.push(a),i(v),g({name:a,expanded:!0,event:p}))}}U(k,{props:e,mergedClsPrefixRef:t,expandedNamesRef:u,slots:d,toggleItem:l});const y=D("Collapse",s,t),b=N(()=>{const{common:{cubicBezierEaseInOut:c},self:{titleFontWeight:a,dividerColor:p,titleTextColor:w,textColor:R,arrowColor:v,fontSize:E,titleFontSize:S}}=h.value;return{"--n-font-size":E,"--n-bezier":c,"--n-text-color":R,"--n-divider-color":p,"--n-title-font-size":S,"--n-title-text-color":w,"--n-title-font-weight":a,"--n-arrow-color":v}}),C=o?B("collapse",void 0,b,e):void 0;return{rtlEnabled:y,mergedTheme:h,mergedClsPrefix:t,cssVars:o?void 0:b,themeClass:C?.themeClass,onRender:C?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),te=z({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:O(M(e,"show"))}},render(){return n(K,null,{default:()=>{const{show:e,displayDirective:d,onceTrue:t,clsPrefix:o}=this,s=d==="show"&&t,f=n("div",{class:`${o}-collapse-item__content-wrapper`},n("div",{class:`${o}-collapse-item__content-inner`},this.$slots));return s?V(f,[[q,e]]):e?f:null}})}});const re={title:String,name:[String,Number],displayDirective:String};var se=z({name:"CollapseItem",props:re,setup(e){const{mergedRtlRef:d}=$(e),t=Z(),o=Q(()=>{var l;return(l=e.name)!==null&&l!==void 0?l:t}),s=W(k);s||Y("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:f,props:r,mergedClsPrefixRef:u,slots:h}=s,i=N(()=>{const{value:l}=f;if(Array.isArray(l)){const{value:y}=o;return!~l.findIndex(b=>b===y)}else if(l){const{value:y}=o;return y!==l}return!0});return{rtlEnabled:D("Collapse",d,u),collapseSlots:h,randomName:t,mergedClsPrefix:u,collapsed:i,mergedDisplayDirective:N(()=>{const{displayDirective:l}=e;return l||r.displayDirective}),arrowPlacement:N(()=>r.arrowPlacement),handleClick(l){s&&s.toggleItem(i.value,o.value,l)}}},render(){var e;const{collapseSlots:d,$slots:t,arrowPlacement:o,collapsed:s,mergedDisplayDirective:f,mergedClsPrefix:r}=this,u=t.header?t.header():this.title,h=t["header-extra"]||d["header-extra"],i=t.arrow||d.arrow;return n("div",{class:[`${r}-collapse-item`,`${r}-collapse-item--${o}-arrow-placement`,!s&&`${r}-collapse-item--active`]},n("div",{class:[`${r}-collapse-item__header`,!s&&`${r}-collapse-item__header--active`]},n("div",{class:`${r}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&u,n("div",{class:`${r}-collapse-item-arrow`,key:this.rtlEnabled?0:1},i?i({collapsed:s}):n(G,{clsPrefix:r},{default:(e=d.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?n(X,null):n(J,null)})),o==="left"&&u),h&&n("div",{class:`${r}-collapse-item__header-extra`,onClick:this.handleClick},{default:h})),n(te,{clsPrefix:r,displayDirective:f,show:!s},t))}});export{oe as N,se as a};
