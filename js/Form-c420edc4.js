import{a2 as g,ae as v,a4 as w,Q as I,f as j,T as M,a5 as x,y as S,a6 as y,Z as O,cg as P,a1 as b}from"./index-44de73b8.js";var B=g("form",[v("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[g("form-item",{width:"auto",marginRight:"18px"},[w("&:last-child",{marginRight:0})])])]);const C=I("n-form"),F=I("n-form-item-insts");var L=globalThis&&globalThis.__awaiter||function(n,c,o,s){function u(r){return r instanceof o?r:new o(function(a){a(r)})}return new(o||(o=Promise))(function(r,a){function h(t){try{i(s.next(t))}catch(m){a(m)}}function e(t){try{i(s.throw(t))}catch(m){a(m)}}function i(t){t.done?r(t.value):u(t.value).then(h,e)}i((s=s.apply(n,c||[])).next())})};const R=Object.assign(Object.assign({},x.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>n.preventDefault()},showLabel:{type:Boolean,default:void 0},validateMessages:Object});var V=j({name:"Form",props:R,setup(n){const{mergedClsPrefixRef:c}=M(n);x("Form","-form",B,P,n,c);const o={},s=S(void 0),u=e=>{const i=s.value;(i===void 0||e>=i)&&(s.value=e)};function r(e,i=()=>!0){return L(this,void 0,void 0,function*(){return yield new Promise((t,m)=>{const p=[];for(const d of b(o)){const f=o[d];for(const l of f)l.path&&p.push(l.internalValidate(null,i))}Promise.all(p).then(d=>{if(d.some(f=>!f.valid)){const f=d.filter(l=>l.errors).map(l=>l.errors);e&&e(f),m(f)}else e&&e(),t()})})})}function a(){for(const e of b(o)){const i=o[e];for(const t of i)t.restoreValidation()}}return y(C,{props:n,maxChildLabelWidthRef:s,deriveMaxChildLabelWidth:u}),y(F,{formItems:o}),Object.assign({validate:r,restoreValidation:a},{mergedClsPrefix:c})},render(){const{mergedClsPrefix:n}=this;return O("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});export{V as N,F as a,C as f};
