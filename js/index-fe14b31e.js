import{d as b,v as m,w as f,j as M,bX as o,R as h,h as u}from"./index-e59897ea.js";import{a as E}from"./use-async-monaco-3cfcdbda.js";class x{created;id}const D=`
async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var S=(e=>(e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml",e))(S||{}),O=(e=>(e.json="json",e.function="typescript",e.text="markdown",e.yaml="yaml",e))(O||{});class R extends x{type="json";private=!1;raw="{}";name="";reference="root";comment;metatype;schema}var d;(e=>{e.libSource=`
 `.trim(),e.libUri="ts:filename/extends.d.ts"})(d||(d={}));var g=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return d}},Symbol.toStringTag,{value:"Module"}));const U=b({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(e,{expose:y}){const c=m(),a=E(c,e.value,t=>{e.value.value=t},{language:e.language});y(a),f(()=>[a.loaded.value,e.language],([t,r])=>{t&&o(()=>import("./editor.main-759b9211.js").then(function(s){return s.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(s=>{const i=a.editor.getModel();!i||s.editor.setModelLanguage(i,r)})}),M(()=>{o(()=>import("./editor.main-759b9211.js").then(function(t){return t.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(t=>{const r=t.languages.typescript.typescriptDefaults.getCompilerOptions();r.target=t.languages.typescript.ScriptTarget.ESNext,r.allowNonTsExtensions=!0,r.moduleResolution=t.languages.typescript.ModuleResolutionKind.NodeJs,r.esModuleInterop=!0,t.languages.typescript.typescriptDefaults.setCompilerOptions(r);const s="ts:filename/global.d.ts";t.editor.getModel(t.Uri.parse(s))||h.api.serverless.types.get().then(i=>{const l=i;t.languages.typescript.typescriptDefaults.addExtraLib(l,s),t.editor.createModel(l,"typescript",t.Uri.parse(s))}),Object.keys(g).forEach(i=>{const l=g[i],{libSource:p,libUri:n}=l,_=t.Uri.parse(n);t.editor.getModel(_)||(t.languages.typescript.typescriptDefaults.addExtraLib(p,n),t.editor.createModel(p,"typescript",t.Uri.parse(n)))})})});const v=f(()=>a.loaded.value,t=>{v(),o(()=>import("./editor.main-759b9211.js").then(function(r){return r.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(r=>{a.editor.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{e.onSave?.()})})});return()=>u("div",{class:"h-full relative w-full"},u("div",{class:"relative h-full w-full",ref:c}),u(a.Snip))}});export{U as F,O as S,S as a,R as b,D as d};
