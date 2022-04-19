import{d as x,v as C,i as E,U as S,E as w,j as _,bi as L,w as b,h,bR as D,bX as y}from"./index-e59897ea.js";import{u as R,C as k}from"./index-ce8d29e4.js";import{u as A}from"./use-save-confirm-85426f8e.js";import{e as N,s as V}from"./toggle-33f81369.js";import"./use-react-9f971a24.js";import"./throttle-31f60dcd.js";import"./FormItem-5df1dc7f.js";import"./Form-d440dafb.js";import"./index-f0c416e7.js";import"./InputNumber-4c16a190.js";import"./Add-22e7fe31.js";import"./Switch-270a5721.js";import"./Select-369c4428.js";import"./Tag-3ec01a55.js";const I=x({props:{innerRef:{type:Object},...N},setup(a){const i=C(),l=C(!1);let n;const{isDark:r}=E(S);R(),w(()=>{n?.dispose?.()}),_(async()=>{!i.value||(n=await K(i.value,a.text,r),l.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(e=>{n[e](()=>{const c=n.getValue();a.onChange(c)})}),a.innerRef&&(a.innerRef.value=n))});let t=L(a.text);return b(()=>a.text,e=>{!t&&e&&(t=e),n&&e!=n.getValue()&&n.setValue(e)}),A(a.unSaveConfirm,()=>t===n.getValue()),()=>h("div",{class:D("editor relative overflow-hidden",V.editor),ref:i},l.value?null:h(k,null))}}),G=I,K=async(a,i,l)=>{const{editor:n,KeyCode:r,KeyMod:t}=await y(()=>import("./editor.main-759b9211.js").then(function(o){return o.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]),e=n.create(a,{value:i,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:l.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});b(()=>l.value,o=>{e.updateOptions({theme:o?"dark":"light"})}),e.addAction({id:"bold",label:"bold",keybindings:[t.CtrlCmd|r.KeyB],run:o=>(m(e,"**"),null)}),e.addAction({id:"em",label:"em",keybindings:[t.CtrlCmd|r.KeyI],run:o=>(m(e,"*"),null)}),e.addAction({id:"null",label:"null",keybindings:[t.CtrlCmd|r.KeyS,t.Shift|t.Alt|r.KeyF],run:o=>null}),e.addAction({id:"del",label:"del",keybindings:[t.Alt|r.KeyD],run:o=>(m(e,"~~"),null)});const c=[,r.Digit1,r.Digit2,r.Digit3,r.Digit4,r.Digit5];return Array.from({length:5}).fill(null).forEach((o,v)=>{const s=v+1;e.addAction({id:"head-"+s,label:"heading",keybindings:[t.CtrlCmd|c[s]],run:u=>{const g=u.getSelection();if(!g)return null;const d=g.startLineNumber,f={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:s+2},p=u.getModel()?.getValueInRange(f);if(p&&p=="#".repeat(s)+" "){u.executeEdits("",[{range:f,text:""}]);return}u.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(s)} `}])}})}),e},m=async(a,i)=>{const{Selection:l}=await y(()=>import("./editor.main-759b9211.js").then(function(e){return e.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]),n=a;if(!n)return;const r=i.length,t=n.getSelection();if(!!t)if(t.startLineNumber==t.endLineNumber&&t.startColumn==t.endColumn){n.executeEdits("",[{range:t,text:i.repeat(2)}]);const e=new l(t.startLineNumber,t.startColumn+r,t.startLineNumber,t.startColumn+r);n.setSelection(e)}else{const e=n.getModel()?.getValueInRange(t);if(!e)return;if(e.startsWith(i)&&e.endsWith(i)){n.executeEdits("",[{range:t,text:`${e.slice(r,e.length-r)}`}]);return}n.executeEdits("",[{range:t,text:`${i}${e}${i}`}])}};export{G as MonacoEditor};
