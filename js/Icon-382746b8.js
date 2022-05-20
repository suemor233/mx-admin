import{Z as s,Q as se,f as j,T as F,ag as K,y as N,n as $,ah as O,a6 as ue,X as U,ab as d,a4 as k,a2 as r,a3 as S,ae as w,aO as be,aP as he,aQ as fe,U as ve,ai as ke,a5 as B,al as me,am as E,V as H,aR as ge,aG as xe,bi as pe,bj as Ce,bk as ye,aj as Re,E as ze,aq as Se}from"./index-94a141f8.js";function Ae(e){return a=>{a?e.value=a.$el:e.value=null}}var we=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),$e=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const G=se("n-checkbox-group"),De={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var Be=j({name:"CheckboxGroup",props:De,setup(e){const{mergedClsPrefixRef:a}=F(e),t=K(e),{mergedSizeRef:h,mergedDisabledRef:m}=t,n=N(e.defaultValue),u=$(()=>e.value),l=O(u,n),i=$(()=>{var g;return((g=l.value)===null||g===void 0?void 0:g.length)||0}),c=$(()=>Array.isArray(l.value)?new Set(l.value):new Set);function D(g,b){const{nTriggerFormInput:R,nTriggerFormChange:z}=t,{onChange:x,"onUpdate:value":p,onUpdateValue:C}=e;if(Array.isArray(l.value)){const f=Array.from(l.value),V=f.findIndex(A=>A===b);g?~V||(f.push(b),C&&d(C,f),p&&d(p,f),R(),z(),n.value=f,x&&d(x,f)):~V&&(f.splice(V,1),C&&d(C,f),p&&d(p,f),x&&d(x,f),n.value=f,R(),z())}else g?(C&&d(C,[b]),p&&d(p,[b]),x&&d(x,[b]),n.value=[b],R(),z()):(C&&d(C,[]),p&&d(p,[]),x&&d(x,[]),n.value=[],R(),z())}return ue(G,{checkedCountRef:i,maxRef:U(e,"max"),minRef:U(e,"min"),valueSetRef:c,disabledRef:m,mergedSizeRef:h,toggleCheckbox:D}),{mergedClsPrefix:a}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),_e=k([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[k("&:hover",[r("checkbox-box",[S("border",{border:"var(--n-border-checked)"})])]),k("&:focus:not(:active)",[r("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),w("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),w("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[k(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),w("indeterminate",[r("checkbox-box",[r("checkbox-icon",[k(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),k(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),w("checked, indeterminate",[k("&:focus:not(:active)",[r("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),w("disabled",{cursor:"not-allowed"},[w("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[k(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[k(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),S("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[S("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[k(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[k("&:empty",{display:"none"})])]),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Ie=Object.assign(Object.assign({},B.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Me=j({name:"Checkbox",props:Ie,setup(e){const a=N(null),{mergedClsPrefixRef:t,inlineThemeDisabled:h,mergedRtlRef:m}=F(e),n=K(e,{mergedSize(o){const{size:y}=e;if(y!==void 0)return y;if(i){const{value:v}=i.mergedSizeRef;if(v!==void 0)return v}if(o){const{mergedSize:v}=o;if(v!==void 0)return v.value}return"medium"},mergedDisabled(o){const{disabled:y}=e;if(y!==void 0)return y;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:v},checkedCountRef:_}=i;if(v!==void 0&&_.value>=v&&!b.value)return!0;const{minRef:{value:P}}=i;if(P!==void 0&&_.value<=P&&b.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:l}=n,i=ve(G,null),c=N(e.defaultChecked),D=U(e,"checked"),g=O(D,c),b=ke(()=>{if(i){const o=i.valueSetRef.value;return o&&e.value!==void 0?o.has(e.value):!1}else return g.value===e.checkedValue}),R=B("Checkbox","-checkbox",_e,Ce,e,t);function z(o){if(i&&e.value!==void 0)i.toggleCheckbox(!b.value,e.value);else{const{onChange:y,"onUpdate:checked":v,onUpdateChecked:_}=e,{nTriggerFormInput:P,nTriggerFormChange:M}=n,T=b.value?e.uncheckedValue:e.checkedValue;v&&d(v,T,o),_&&d(_,T,o),y&&d(y,T,o),P(),M(),c.value=T}}function x(o){u.value||z(o)}function p(o){if(!u.value)switch(o.code){case"Space":case"Enter":case"NumpadEnter":z(o)}}function C(o){switch(o.code){case"Space":o.preventDefault()}}const f={focus:()=>{var o;(o=a.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=a.value)===null||o===void 0||o.blur()}},V=me("Checkbox",m,t),A=$(()=>{const{value:o}=l,{common:{cubicBezierEaseInOut:y},self:{borderRadius:v,color:_,colorChecked:P,colorDisabled:M,colorTableHeader:T,colorTableHeaderModal:L,colorTableHeaderPopover:Q,checkMarkColor:Z,checkMarkColorDisabled:q,border:X,borderFocus:Y,borderDisabled:J,borderChecked:W,boxShadowFocus:ee,textColor:oe,textColorDisabled:ne,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ce,labelPadding:ie,labelLineHeight:le,[E("fontSize",o)]:te,[E("size",o)]:de}}=R.value;return{"--n-label-line-height":le,"--n-size":de,"--n-bezier":y,"--n-border-radius":v,"--n-border":X,"--n-border-checked":W,"--n-border-focus":Y,"--n-border-disabled":J,"--n-border-disabled-checked":ce,"--n-box-shadow-focus":ee,"--n-color":_,"--n-color-checked":P,"--n-color-table":T,"--n-color-table-modal":L,"--n-color-table-popover":Q,"--n-color-disabled":M,"--n-color-disabled-checked":ae,"--n-text-color":oe,"--n-text-color-disabled":ne,"--n-check-mark-color":Z,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":re,"--n-font-size":te,"--n-label-padding":ie}}),I=h?H("checkbox",$(()=>l.value[0]),A,e):void 0;return Object.assign(n,f,{rtlEnabled:V,selfRef:a,mergedClsPrefix:t,mergedDisabled:u,renderedChecked:b,mergedTheme:R,labelId:ge(),handleClick:x,handleKeyUp:p,handleKeyDown:C,cssVars:h?void 0:A,themeClass:I?.themeClass,onRender:I?.onRender})},render(){var e;const{$slots:a,renderedChecked:t,mergedDisabled:h,indeterminate:m,privateInsideTable:n,cssVars:u,labelId:l,label:i,mergedClsPrefix:c,focusable:D,handleKeyUp:g,handleKeyDown:b,handleClick:R}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,t&&`${c}-checkbox--checked`,h&&`${c}-checkbox--disabled`,m&&`${c}-checkbox--indeterminate`,n&&`${c}-checkbox--inside-table`],tabindex:h||!D?void 0:0,role:"checkbox","aria-checked":m?"mixed":t,"aria-labelledby":l,style:u,onKeyup:g,onKeydown:b,onClick:R,onMousedown:()=>{pe("selectstart",window,z=>{z.preventDefault()},{once:!0})}},s("div",{class:`${c}-checkbox-box-wrapper`},"\xA0",s("div",{class:`${c}-checkbox-box`},s(xe,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${c}-checkbox-icon`},$e):s("div",{key:"check",class:`${c}-checkbox-icon`},we)}),s("div",{class:`${c}-checkbox-box__border`}))),i!==null||a.default?s("span",{class:`${c}-checkbox__label`,id:l},a.default?a.default():i):null)}}),Pe=r("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[w("color-transition",{transition:"color .3s var(--n-bezier)"}),w("depth",{color:"var(--n-color)"},[k("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),k("svg",{height:"1em",width:"1em"})]);const Te=Object.assign(Object.assign({},B.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Ne=j({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Te,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:t}=F(e),h=B("Icon","-icon",Pe,ye,e,a),m=$(()=>{const{depth:u}=e,{common:{cubicBezierEaseInOut:l},self:i}=h.value;if(u!==void 0){const{color:c,[`opacity${u}Depth`]:D}=i;return{"--n-bezier":l,"--n-color":c,"--n-opacity":D}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),n=t?H("icon",$(()=>`${e.depth||"d"}`),m,e):void 0;return{mergedClsPrefix:a,mergedStyle:$(()=>{const{size:u,color:l}=e;return{fontSize:Se(u),color:l}}),cssVars:t?void 0:m,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;const{$parent:a,depth:t,mergedClsPrefix:h,component:m,onRender:n,themeClass:u}=this;return!((e=a?.$options)===null||e===void 0)&&e._n_icon__&&Re("icon","don't wrap `n-icon` inside `n-icon`"),n?.(),s("i",ze(this.$attrs,{role:"img",class:[`${h}-icon`,u,{[`${h}-icon--depth`]:t,[`${h}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),m?s(m):this.$slots)}});export{Be as N,Me as a,Ne as b,Ae as c};
