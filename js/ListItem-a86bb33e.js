import{a1 as t,$ as d,aa as _,a0 as n,aM as $,aN as y,d as c,P as R,a2 as m,a3 as L,l as j,S as I,h as s,L as M,db as N,Q as w,bP as B}from"./index-2366bdf2.js";var E=t([d("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color)
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[_("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[d("list-item",`
 padding: 12px 20px;
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),n("header, footer",`
 padding: 12px 20px;
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),t("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),$(d("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),y(d("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const O=Object.assign(Object.assign({},m.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),b=M("n-list");var T=c({name:"List",props:O,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=R(e),i=m("List","-list",E,N,e,r);L(b,{mergedClsPrefixRef:r});const a=j(()=>{const{common:{cubicBezierEaseInOut:f},self:{fontSize:p,textColor:v,color:u,colorModal:x,colorPopover:g,borderColor:h,borderColorModal:C,borderColorPopover:z,borderRadius:P}}=i.value;return{"--n-font-size":p,"--n-bezier":f,"--n-text-color":v,"--n-color":u,"--n-border-radius":P,"--n-border-color":h,"--n-border-color-modal":C,"--n-border-color-popover":z,"--n-color-modal":x,"--n-color-popover":g}}),l=o?I("list",void 0,a,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:i}=this;return i?.(),s("ul",{class:[`${o}-list`,this.bordered&&`${o}-list--bordered`,this.themeClass],style:this.cssVars},r.header?s("div",{class:`${o}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?s("div",{class:`${o}-list__footer`},r.footer()):null)}}),V=c({name:"ListItem",setup(){const e=w(b,null);return e||B("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return s("li",{class:`${r}-list-item`},e.prefix?s("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?s("div",{class:`${r}-list-item__main`},e):null,e.suffix?s("div",{class:`${r}-list-item__suffix`},e.suffix()):null)}});export{T as N,V as a};
