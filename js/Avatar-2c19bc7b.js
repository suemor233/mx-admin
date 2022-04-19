import{L as I,$ as F,aM as N,a1 as x,aN as V,a0 as H,d as W,P as A,x as R,Q as $,l as u,a2 as w,w as G,aj as K,S as O,be as X,h as v,X as _,aG as D,cV as Q}from"./index-a65640c4.js";import{a as Y}from"./Tag-9eca160d.js";const q=I("n-avatar-group");var J=F("avatar",`
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
`,[N(x("&","--n-merged-color: var(--n-color-modal);")),V(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
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
 `),H("text","line-height: 1.25")]);const U=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var re=W({name:"Avatar",props:U,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=A(t),a=R(!1);let s=null;const d=R(null),y=R(null),L=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,z=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${z})`}}},h=$(q,null),j=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),C=w("Avatar","-avatar",J,Q,t,l),E=$(Y,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:E?E.roundRef.value:!1}),S=u(()=>h?!0:t.bordered||!1),P=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};G(()=>t.src,()=>a.value=!1);const T=u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:z,colorModal:B,colorPopover:M},common:{cubicBezierEaseInOut:k}}=C.value;let p;return typeof e=="number"?p=`${e}px`:p=C.value.self[K("height",e)],{"--n-font-size":b,"--n-border":f?z:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||B,"--n-color-popover":n||M,"--n-bezier":k,"--n-merged-size":`var(--n-avatar-size-override, ${p})`}}),i=c?O("avatar",u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=X(n)),o}),T,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:L,cssVars:c?void 0:T,themeClass:i?.themeClass,onRender:i?.onRender,hasLoadError:a,handleError:P}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a?.();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=_(t.default,d=>{if(d)return v(D,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{re as N};
