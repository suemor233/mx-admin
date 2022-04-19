import{K as I,_ as F,aL as K,a0 as x,aM as O,$ as H,d as V,O as W,v as R,P as $,k as u,a1 as w,w as A,ai as N,Q as G,bd as _,h as v,V as D,aF as Q,cU as U}from"./index-e59897ea.js";import{a as X}from"./Tag-3ec01a55.js";const Y=I("n-avatar-group");var q=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[K(x("&","--n-merged-color: var(--n-color-modal);")),O(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]);const J=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var re=V({name:"Avatar",props:J,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=W(t),a=R(!1);let s=null;const d=R(null),y=R(null),L=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,z=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${z})`}}},h=$(Y,null),j=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),C=w("Avatar","-avatar",q,U,t,l),E=$(X,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:E?E.roundRef.value:!1}),S=u(()=>h?!0:t.bordered||!1),P=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};A(()=>t.src,()=>a.value=!1);const T=u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:z,colorModal:k,colorPopover:B},common:{cubicBezierEaseInOut:M}}=C.value;let p;return typeof e=="number"?p=`${e}px`:p=C.value.self[N("height",e)],{"--n-font-size":b,"--n-border":f?z:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||k,"--n-color-popover":n||B,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${p})`}}),i=c?G("avatar",u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=_(n)),o}),T,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:L,cssVars:c?void 0:T,themeClass:i?.themeClass,onRender:i?.onRender,hasLoadError:a,handleError:P}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a?.();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=D(t.default,d=>{if(d)return v(Q,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{re as N};
