import{a0 as b,_ as y,$ as P,a9 as l,d as f,O as R,bk as w,ae as u,a2 as C,S as x,h as n,K as N,Z as m,am as i,P as j,bO as S,k as h,v,a3 as c}from"./index-e59897ea.js";import{f as O,N as A,a as K}from"./FormItem-5df1dc7f.js";const z=Array.apply(null,{length:24}).map((e,r)=>{const s=r+1,t=`calc(100% / 24 * ${s})`;return[l(`${s}-span`,{width:t}),l(`${s}-offset`,{marginLeft:t}),l(`${s}-push`,{left:t}),l(`${s}-pull`,{right:t})]});var G=b([y("row",{width:"100%",display:"flex",flexWrap:"wrap"}),y("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[P("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),z])]);const $=N("n-row"),p={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},V=m(p);var k=f({name:"Row",props:p,setup(e){const{mergedClsPrefixRef:r}=R(e);w("-legacy-grid",G,r);const s=u(()=>{const{gutter:o}=e;return Array.isArray(o)&&o[1]||0}),t=u(()=>{const{gutter:o}=e;return Array.isArray(o)?o[0]:Number(o)});return C($,{mergedClsPrefixRef:r,gutterRef:x(e,"gutter"),verticalGutterRef:s,horizontalGutterRef:t}),{mergedClsPrefix:r,styleMargin:u(()=>`-${i(s.value,{c:.5})} -${i(t.value,{c:.5})}`),styleWidth:u(()=>`calc(100% + ${i(t.value)})`)}},render(){return n("div",{class:`${this.mergedClsPrefix}-row`,style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}});const d={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},F=m(d);var M=f({name:"Col",props:d,setup(e){const r=j($,null);return r||S("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:r.mergedClsPrefixRef,gutter:r.gutterRef,stylePadding:h(()=>`${i(r.verticalGutterRef.value,{c:.5})} ${i(r.horizontalGutterRef.value,{c:.5})}`),mergedPush:h(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:r,mergedPush:s,offset:t,stylePadding:o,gutter:I,mergedClsPrefix:a}=this;return n("div",{class:[`${a}-col`,{[`${a}-col--${r}-span`]:!0,[`${a}-col--${s}-push`]:s>0,[`${a}-col--${-s}-pull`]:s<0,[`${a}-col--${t}-offset`]:t}],style:{padding:o}},I?n("div",null,e):e)}});const g=Object.assign(Object.assign({},d),K),W=m(g);var E=f({name:"FormItemCol",props:g,setup(){const e=v(null);return{formItemInstRef:e,validate:(...t)=>{const{value:o}=e;if(o)return o.validate(...t)},restoreValidation:()=>{const{value:t}=e;if(t)return t.restoreValidation()}}},render(){return n(M,c(this.$props,F),{default:()=>{const e=c(this.$props,O);return n(A,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}});const L=Object.assign(Object.assign({},p),g);var Z=f({name:"FormItemRow",props:L,setup(){const e=v(null);return{formItemColInstRef:e,validate:(...t)=>{const{value:o}=e;if(o)return o.validate(...t)},restoreValidation:()=>{const{value:t}=e;if(t)return t.restoreValidation()}}},render(){return n(k,c(this.$props,V),{default:()=>{const e=c(this.$props,W);return n(E,Object.assign(Object.assign({ref:"formItemColInstRef"},e),{span:24}),this.$slots)}})}});export{Z as N};
