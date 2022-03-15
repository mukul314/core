!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{Bold:"Bold",Code:"Code",Italic:"Italic",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript",Underline:"Underline"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={415:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck-content code{background-color:hsla(0,0%,78%,.3);padding:.15em;border-radius:2px}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}",""]);const r=s},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);n&&s[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),e.push(a))}},e}},62:(t,e,i)=>{"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function c(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],s=0;s<t.length;s++){var r=t[s],a=e.base?r[0]+e.base:r[0],l=i[a]||0,u="".concat(a," ").concat(l);i[a]=l+1;var d=c(u),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(o[d].references++,o[d].updater(g)):o.push({identifier:u,updater:b(g,e),references:1}),n.push(u)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function g(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function m(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,h=0;function b(t,e){var i,n,s;if(e.singleton){var r=h++;i=p||(p=l(e)),n=g.bind(null,i,r,!1),s=g.bind(null,i,r,!0)}else i=l(e),n=m.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=c(i[n]);o[s].references--}for(var r=a(t,e),l=0;l<i.length;l++){var u=c(i[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}i=r}}}},704:(t,e,i)=>{t.exports=i(79)("./src/core.js")},181:(t,e,i)=>{t.exports=i(79)("./src/typing.js")},273:(t,e,i)=>{t.exports=i(79)("./src/ui.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";i.r(n),i.d(n,{Bold:()=>l,BoldEditing:()=>r,BoldUI:()=>a,Code:()=>f,CodeEditing:()=>g,CodeUI:()=>w,Italic:()=>T,ItalicEditing:()=>y,ItalicUI:()=>E,Strikethrough:()=>N,StrikethroughEditing:()=>A,StrikethroughUI:()=>I,Subscript:()=>F,SubscriptEditing:()=>B,SubscriptUI:()=>U,Superscript:()=>j,SuperscriptEditing:()=>M,SuperscriptUI:()=>R,Underline:()=>q,UnderlineEditing:()=>K,UnderlineUI:()=>H});var t=i(704);class e extends t.Command{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,i=e.document.selection,n=void 0===t.forceValue?!this.value:t.forceValue;e.change((t=>{if(i.isCollapsed)n?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const s=e.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const e of s)n?t.setAttribute(this.attributeKey,n,e):t.removeAttribute(this.attributeKey,e)}}))}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,i=t.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const t of i.getRanges())for(const i of t.getItems())if(e.checkAttribute(i,this.attributeKey))return i.hasAttribute(this.attributeKey);return!1}}const s="bold";class r extends t.Plugin{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:s}),t.model.schema.setAttributeProperties(s,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:s,view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e?"bold"==e||Number(e)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(s,new e(t,s)),t.keystrokes.set("CTRL+B",s)}}var o=i(273);const c="bold";class a extends t.Plugin{static get pluginName(){return"BoldUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(c,(i=>{const n=t.commands.get(c),s=new o.ButtonView(i);return s.set({label:e("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(c),t.editing.view.focus()})),s}))}}class l extends t.Plugin{static get requires(){return[r,a]}static get pluginName(){return"Bold"}}var u=i(181);const d="code";class g extends t.Plugin{static get pluginName(){return"CodeEditing"}static get requires(){return[u.TwoStepCaretMovement]}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:d}),t.model.schema.setAttributeProperties(d,{isFormatting:!0,copyOnEnter:!1}),t.conversion.attributeToElement({model:d,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),t.commands.add(d,new e(t,d)),t.plugins.get(u.TwoStepCaretMovement).registerAttribute(d),(0,u.inlineHighlight)(t,d,"code","ck-code_selected")}}var m=i(62),p=i.n(m),h=i(415),b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};p()(h.Z,b);h.Z.locals;const v="code";class w extends t.Plugin{static get pluginName(){return"CodeUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(v,(i=>{const n=t.commands.get(v),s=new o.ButtonView(i);return s.set({label:e("Code"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(v),t.editing.view.focus()})),s}))}}class f extends t.Plugin{static get requires(){return[g,w]}static get pluginName(){return"Code"}}const x="italic";class y extends t.Plugin{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:x}),t.model.schema.setAttributeProperties(x,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:x,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(x,new e(t,x)),t.keystrokes.set("CTRL+I",x)}}const S="italic";class E extends t.Plugin{static get pluginName(){return"ItalicUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(S,(i=>{const n=t.commands.get(S),s=new o.ButtonView(i);return s.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(S),t.editing.view.focus()})),s}))}}class T extends t.Plugin{static get requires(){return[y,E]}static get pluginName(){return"Italic"}}const k="strikethrough";class A extends t.Plugin{static get pluginName(){return"StrikethroughEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:k}),t.model.schema.setAttributeProperties(k,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:k,view:"s",upcastAlso:["del","strike",{styles:{"text-decoration":"line-through"}}]}),t.commands.add(k,new e(t,k)),t.keystrokes.set("CTRL+SHIFT+X","strikethrough")}}const C="strikethrough";class I extends t.Plugin{static get pluginName(){return"StrikethroughUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(C,(i=>{const n=t.commands.get(C),s=new o.ButtonView(i);return s.set({label:e("Strikethrough"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9 6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>',keystroke:"CTRL+SHIFT+X",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(C),t.editing.view.focus()})),s}))}}class N extends t.Plugin{static get requires(){return[A,I]}static get pluginName(){return"Strikethrough"}}const P="subscript";class B extends t.Plugin{static get pluginName(){return"SubscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:P}),t.model.schema.setAttributeProperties(P,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:P,view:"sub",upcastAlso:[{styles:{"vertical-align":"sub"}}]}),t.commands.add(P,new e(t,P))}}const O="subscript";class U extends t.Plugin{static get pluginName(){return"SubscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(O,(i=>{const n=t.commands.get(O),s=new o.ButtonView(i);return s.set({label:e("Subscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.03 10.349 3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82zm8.147 7.829h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(O),t.editing.view.focus()})),s}))}}class F extends t.Plugin{static get requires(){return[B,U]}static get pluginName(){return"Subscript"}}const L="superscript";class M extends t.Plugin{static get pluginName(){return"SuperscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:L}),t.model.schema.setAttributeProperties(L,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:L,view:"sup",upcastAlso:[{styles:{"vertical-align":"super"}}]}),t.commands.add(L,new e(t,L))}}const V="superscript";class R extends t.Plugin{static get pluginName(){return"SuperscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(V,(i=>{const n=t.commands.get(V),s=new o.ButtonView(i);return s.set({label:e("Superscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.677 8.678h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309zM7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(V),t.editing.view.focus()})),s}))}}class j extends t.Plugin{static get requires(){return[M,R]}static get pluginName(){return"Superscript"}}const z="underline";class K extends t.Plugin{static get pluginName(){return"UnderlineEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:z}),t.model.schema.setAttributeProperties(z,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:z,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),t.commands.add(z,new e(t,z)),t.keystrokes.set("CTRL+U","underline")}}const _="underline";class H extends t.Plugin{static get pluginName(){return"UnderlineUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(_,(i=>{const n=t.commands.get(_),s=new o.ButtonView(i);return s.set({label:e("Underline"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',keystroke:"CTRL+U",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(_),t.editing.view.focus()})),s}))}}class q extends t.Plugin{static get requires(){return[K,H]}static get pluginName(){return"Underline"}}})(),(window.CKEditor5=window.CKEditor5||{}).basicStyles=n})();