import{d as b,x as h,w as f,k as M,bY as o,R as m,h as u}from"./index-2366bdf2.js";import{a as E}from"./use-async-monaco-37a03b2b.js";class x{}const j=`
async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var S=(e=>(e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml",e))(S||{}),O=(e=>(e.json="json",e.function="typescript",e.text="markdown",e.yaml="yaml",e))(O||{});class R extends x{constructor(){super(...arguments);this.type="json",this.private=!1,this.raw="{}",this.name="",this.reference="root"}}var d;(e=>{e.libSource=`
 `.trim(),e.libUri="ts:filename/extends.d.ts"})(d||(d={}));var g=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return d}},Symbol.toStringTag,{value:"Module"}));const U=b({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(e,{expose:y}){const c=h(),i=E(c,e.value,t=>{e.value.value=t},{language:e.language});y(i),f(()=>[i.loaded.value,e.language],([t,r])=>{t&&o(()=>import("./editor.main-759b9211.js").then(function(s){return s.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(s=>{const a=i.editor.getModel();!a||s.editor.setModelLanguage(a,r)})}),M(()=>{o(()=>import("./editor.main-759b9211.js").then(function(t){return t.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(t=>{const r=t.languages.typescript.typescriptDefaults.getCompilerOptions();r.target=t.languages.typescript.ScriptTarget.ESNext,r.allowNonTsExtensions=!0,r.moduleResolution=t.languages.typescript.ModuleResolutionKind.NodeJs,r.esModuleInterop=!0,t.languages.typescript.typescriptDefaults.setCompilerOptions(r);const s="ts:filename/global.d.ts";t.editor.getModel(t.Uri.parse(s))||m.api.serverless.types.get().then(a=>{const l=a;t.languages.typescript.typescriptDefaults.addExtraLib(l,s),t.editor.createModel(l,"typescript",t.Uri.parse(s))}),Object.keys(g).forEach(a=>{const l=g[a],{libSource:p,libUri:n}=l,_=t.Uri.parse(n);t.editor.getModel(_)||(t.languages.typescript.typescriptDefaults.addExtraLib(p,n),t.editor.createModel(p,"typescript",t.Uri.parse(n)))})})});const v=f(()=>i.loaded.value,t=>{v(),o(()=>import("./editor.main-759b9211.js").then(function(r){return r.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(r=>{i.editor.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{e.onSave?.()})})});return()=>u("div",{class:"h-full relative w-full"},u("div",{class:"relative h-full w-full",ref:c}),u(i.Snip))}});export{U as F,R as S,O as a,S as b,j as d};
