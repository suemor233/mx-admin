import{L as j,d as y,O as m,P as b,Q as z,l as u,S,T as g,V as h,h as a,N as P,X as B,Y as w,Z as R,_ as I,$ as x,a0 as f,a1 as C,a2 as N,x as $,a3 as F,a4 as U,a5 as V,p as E,a6 as K,a7 as L,a8 as T}from"./index-2366bdf2.js";const O=j("n-popconfirm"),_={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},k=I(_);var q=y({name:"NPopconfirmPanel",props:_,setup(e){const{localeRef:t}=m("Popconfirm"),{inlineThemeDisabled:s}=b(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:l}=z(O),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:r}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":r}}),o=s?S("popconfirm-panel",void 0,d,l):void 0;return Object.assign(Object.assign({},m("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:g(l,"positiveButtonProps"),negativeButtonProps:g(l,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o?.themeClass,onRender:o?.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=h(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},B(n.default,l=>s||l?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},h(n.icon,()=>[a(w,{clsPrefix:t},{default:()=>a(R,null)})])):null,l):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),M=x("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[C("&:not(:first-child)","margin-top: 8px"),x("button",[C("&:not(:last-child)","margin-right: 8px;")])])]);const W=Object.assign(Object.assign(Object.assign({},N.props),K),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function});var H=y({name:"Popconfirm",props:W,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=b(),s=N("Popconfirm","-popconfirm",M,L,e,t),n=$(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&T(c,!1))})}function l(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&T(c,!1))})}return F(O,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(E,V(t,k,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=U(t,k);return a(q,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{H as N};
