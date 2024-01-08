"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7667],{95602:function(e){e.exports=(e,t=1,r)=>{if(r={indent:" ",includeEmptyLines:!1,...r},"string"!=typeof e)throw TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!=typeof t)throw TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!=typeof r.indent)throw TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);if(0===t)return e;let n=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,r.indent.repeat(t))}},99239:function(e){e.exports=e=>{let t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((e,t)=>Math.min(e,t.length),1/0):0}},4188:function(e,t){t.Z={src:"/_next/static/media/installation.50c59fdd.jpg",height:1548,width:1686,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQIDERIh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCxayVuU+AAo//Z",blurWidth:8,blurHeight:7}},4493:function(e,t,r){r.d(t,{ML:function(){return d},RQ:function(){return i}});var n=r(85893),l=r(86010),a=r(54210);let s={sky:"from-sky-500 to-cyan-300",indigo:"from-indigo-500 to-blue-400",pink:"from-pink-500 to-fuchsia-400",fuchsia:"from-fuchsia-500 to-purple-400",purple:"from-violet-500 to-purple-500"};function i({className:e,color:t="sky",children:r}){return(0,n.jsx)("div",{className:(0,l.Z)(e,s[t],"relative -mx-4 pt-6 pl-4 bg-gradient-to-b sm:mx-0 sm:rounded-2xl sm:pt-12 sm:pl-12"),children:(0,n.jsx)("div",{className:"rounded-tl-xl overflow-hidden sm:rounded-br-xl",children:r})})}function o({filename:e,scroll:t=!1,code:r,children:s}){return(0,n.jsxs)("div",{className:"pt-2 bg-slate-800 shadow-lg group",children:[e&&(0,n.jsx)(a.n,{primary:{name:e},showTabMarkers:!1}),(0,n.jsx)("div",{className:(0,l.Z)("children:my-0 children:!shadow-none children:bg-transparent",t&&(0,l.Z)("overflow-y-auto max-h-96","scrollbar:w-4 scrollbar:h-4 scrollbar:transparent","scrollbar-thumb:border-4 scrollbar-thumb:border-solid scrollbar-thumb:border-slate-800 scrollbar-thumb:bg-slate-500/50 group-hover:scrollbar-thumb:bg-slate-500/60 scrollbar-thumb:rounded-full","scrollbar-track:rounded")),...r?{dangerouslySetInnerHTML:{__html:r}}:{children:s}})]})}function d({filename:e,scroll:t=!1,style:r="plain",color:l,children:a,code:s}){let d={scroll:t};return"framed"===r?(0,n.jsx)(i,{className:"mt-5 mb-8 first:mt-0 last:mb-0",color:l,children:(0,n.jsx)(o,{...d,filename:e,code:s,children:a})}):(0,n.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 relative overflow-hidden rounded-2xl",children:[(0,n.jsx)(o,{...d,filename:e,code:s,children:a}),(0,n.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-2xl dark:ring-1 dark:ring-white/10 dark:ring-inset","aria-hidden":"true"})]})}},64637:function(e,t,r){r.d(t,{E:function(){return c}});var n=r(85893),l=r(67294),a=r(49808),s=r(86010),i=r(4493);function o({className:e}){return(0,n.jsx)("div",{className:(0,s.Z)("pointer-events-none absolute inset-0",e)})}function d({children:e,selectedIndex:t,myIndex:r,marker:l}){let i=t===r,d={leading:i?null:t===r-1?"capped":"normal",trailing:i?null:t===r+1?"capped":"normal"};return(0,n.jsxs)(a.O,{className:(0,s.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1 [&:not(:focus-visible)]:focus:outline-none",i?"text-sky-300":"text-slate-400"),children:[(0,n.jsx)("span",{className:"z-10",children:e}),"close"===l&&(0,n.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,n.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===l&&(0,n.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!i&&(0,n.jsx)(o,{className:(0,s.Z)("bg-slate-700/50 border-y border-slate-500/30","capped"===d.leading&&"border-l rounded-tl","capped"===d.trailing&&"border-r rounded-tr")}),"normal"===d.trailing&&(0,n.jsx)(o,{className:"inset-y-px border-r border-slate-200/5 z-20"}),i&&(0,n.jsx)(o,{className:"border-b border-b-sky-300"})]})}let u={plain:({children:e})=>(0,n.jsx)("div",{className:"not-prose bg-slate-800 rounded-xl shadow-md",children:e}),framed:({children:e,...t})=>(0,n.jsx)(i.RQ,{...t,children:(0,n.jsx)("div",{className:"not-prose bg-slate-800 rounded-tl-xl shadow-md",children:e})})};function c({children:e,style:t="plain",actions:r,...i}){let[o,c]=(0,l.useState)(0),f=u[t];return(0,n.jsx)(f,{...i,children:(0,n.jsxs)(a.O.Group,{as:"div",onChange:c,children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(a.O.List,{className:"flex text-slate-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:e.map((e,t)=>(0,n.jsx)(d,{myIndex:t,selectedIndex:o,children:e.props.filename},e.props.filename))}),(0,n.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,n.jsx)("div",{className:(0,s.Z)("flex-auto flex justify-end bg-slate-700/50 border-y border-slate-500/30 pr-4",o===e.length-1?"rounded-tl border-l":"")})}),r?(0,n.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:r({selectedIndex:o})}):null]}),(0,n.jsx)(a.O.Panels,{className:"flex overflow-auto",children:e.map(e=>(0,n.jsx)(a.O.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-slate-50 ligatures-none",...e.props.code?{dangerouslySetInnerHTML:{__html:e.props.code}}:{children:e.props.children}},e.props.filename))})]})})}},39897:function(e,t,r){r.d(t,{R:function(){return c}});var n=r(85893),l=r(86010),a=r(67294),s=r(82931),i=r.n(s),o=r(64637),d=r(4493),u=r(11355);function c({intro:e,steps:t,code:a,level:s=2}){let i=`h${s}`;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"hidden sm:block absolute -z-10 top-0 left-[15%] pt-[40%] 2xl:left-[40%] 2xl:pt-[8%] dark:hidden",children:(0,n.jsx)("img",{src:r(4188).Z.src,alt:"",className:"w-[52.6875rem] max-w-none",decoding:"async"})}),e&&(0,n.jsx)("div",{className:"relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark",children:e()}),(0,n.jsx)("ol",{className:"relative space-y-2 mb-16",style:{counterReset:"step"},children:t.map((e,r)=>(0,n.jsxs)("li",{className:(0,l.Z)("relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5",r!==t.length-1&&"pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5"),style:{counterIncrement:"step"},children:[(0,n.jsxs)("div",{className:"mb-6 col-span-2 xl:mb-0",children:[(0,n.jsx)(i,{className:"text-sm leading-6 text-slate-900 font-semibold mb-2 dark:text-slate-200",children:e.title}),(0,n.jsx)("div",{className:"prose prose-slate prose-sm dark:prose-dark",children:(0,n.jsx)(e.body,{})})]}),e.code&&(0,n.jsx)(m,{code:e.code,highlightedCode:a[r]})]},e.title))})]})}function f({code:e}){let[{state:t,i:r},s]=(0,a.useState)({state:"idle",i:0});return(0,a.useEffect)(()=>{if("copied"===t){let e=window.setTimeout(()=>{s({state:"idle",i:r+1})},1500);return()=>{window.clearTimeout(e)}}},[t,r]),(0,n.jsxs)("div",{className:"relative flex -mr-2",children:[(0,n.jsx)("button",{type:"button",className:(0,l.Z)({"text-slate-500 hover:text-slate-400":"idle"===t,"text-sky-400":"copied"===t}),onClick:()=>{navigator.clipboard.writeText(i()(e.replace(/^[+>-]/gm," "))).then(()=>{s({state:"copied",i:r+1})})},children:(0,n.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"w-8 h-8",children:[(0,n.jsx)("path",{d:"M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"}),(0,n.jsx)("path",{d:"M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"})]})}),(0,n.jsx)(u.u,{className:"absolute bottom-full left-1/2 mb-3.5 pb-1 -translate-x-1/2",show:"copied"===t,enter:"transform ease-out duration-200 transition origin-bottom",enterFrom:"scale-95 translate-y-0.5 opacity-0",enterTo:"scale-100 translate-y-0 opacity-100",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsxs)("div",{className:"relative bg-sky-500 text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg",children:["Copied",(0,n.jsx)("svg",{"aria-hidden":"true",width:"16",height:"6",viewBox:"0 0 16 6",className:"text-sky-500 absolute top-full left-1/2 -mt-px -ml-2",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z",fill:"currentColor"})})]})})]})}function p({code:e,lang:t,pad:r}){return(0,n.jsx)("pre",{className:(0,l.Z)("text-sm leading-6 text-slate-50 flex ligatures-none",r&&"overflow-auto"),children:(0,n.jsx)("code",{className:(0,l.Z)("flex-none min-w-full",r&&"p-5"),dangerouslySetInnerHTML:{__html:e.split("\n").map(e=>("terminal"===t&&(e=`<span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="flex-auto">${e}</span></span>`),e)).join("terminal"===t?"":"\n")}})})}function m({code:e,highlightedCode:t}){return Array.isArray(e)?(0,n.jsx)("div",{className:"col-span-3",children:(0,n.jsx)(o.E,{actions:({selectedIndex:t})=>(0,n.jsx)(f,{code:e[t].code}),children:e.map(({name:e,lang:r},l)=>(0,n.jsx)(d.ML,{filename:e,children:(0,n.jsx)(p,{code:t[l],lang:r})},e))})}):(0,n.jsxs)("div",{className:"relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10",children:[(0,n.jsx)(x,{name:e.name,children:(0,n.jsx)(f,{code:e.code})}),(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(p,{code:t,lang:e.lang,pad:!0})})]})}function x({name:e,children:t}){return(0,n.jsxs)("div",{className:"relative flex text-slate-400 text-xs leading-6",children:[(0,n.jsx)("div",{className:"mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:e}),(0,n.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,n.jsx)("div",{className:"flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"})}),t&&(0,n.jsx)("div",{className:"absolute top-2 right-0 h-8 flex items-center pr-4",children:t})]})}},54210:function(e,t,r){r.d(t,{n:function(){return a}});var n=r(85893),l=r(86010);function a({primary:e,secondary:t=[],showTabMarkers:r=!0,side:a,translucent:s=!1,children:i}){return(0,n.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,n.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,r&&(e.saved?(0,n.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,n.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,n.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,n.jsxs)("div",{className:(0,l.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===a?"rounded-tl lg:rounded-tr":"rounded-tl",s&&"dark:bg-slate-800/50"),children:[t.map(({name:e,open:t=!0,className:r})=>(0,n.jsx)("div",{className:(0,l.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!t}),children:e},e)),i&&(0,n.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},76239:function(e,t,r){r.d(t,{i:function(){return a}});var n=r(85893),l=r(95021);function a({children:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("main",{className:"max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none",children:e}),(0,n.jsx)(l.E,{})]})}},72788:function(e,t,r){r.d(t,{L:function(){return i}});var n=r(85893),l=r(97903),a=r(77929),s=r(87308);function i(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,n.jsx)(l.C,{nav:s.u,...e})]})}i.nav=s.u},82931:function(e,t,r){let n=r(52386),l=r(95602);e.exports=(e,t=0,r)=>l(n(e),t,r)},52386:function(e,t,r){let n=r(99239);e.exports=e=>{let t=n(e);if(0===t)return e;let r=RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(r,"")}},49808:function(e,t,r){r.d(t,{O:function(){return L}});var n,l=r(67294),a=r(12351),s=r(19946),i=r(32984),o=r(61363),d=r(84575),u=r(16723),c=r(23784),f=r(14157),p=r(3855),m=r(46045);function x({onFocus:e}){let[t,r]=(0,l.useState)(!0);return t?l.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus:t=>{t.preventDefault();let n,l=50;n=requestAnimationFrame(function t(){if(l--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var h=r(73781),b=r(81021),v=((n=v||{})[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n);let g={0(e,t){let r=e.tabs.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let n=e.tabs.slice(0,t.index),l=[...e.tabs.slice(t.index),...n].find(e=>r.includes(e));return l?{...e,selectedIndex:e.tabs.indexOf(l)}:e},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],l=(0,d.z2)([...e.tabs,t.tab],e=>e.current),a=null!=(r=l.indexOf(n))?r:e.selectedIndex;return -1===a&&(a=e.selectedIndex),{...e,tabs:l,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},A=(0,l.createContext)(null);function j(e){let t=(0,l.useContext)(A);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}A.displayName="TabsSSRContext";let E=(0,l.createContext)(null);function y(e){let t=(0,l.useContext)(E);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,y),t}return t}E.displayName="TabsDataContext";let w=(0,l.createContext)(null);function T(e){let t=(0,l.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}function k(e,t){return(0,i.E)(t.type,g,e,t)}w.displayName="TabsActionsContext";let N=l.Fragment,P=(0,a.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:s=!1,onChange:i,selectedIndex:o=null,...d}=e,f=n?"vertical":"horizontal",m=s?"manual":"auto",h=null!==o,b=(0,c.T)(t),[v,g]=(0,l.useReducer)(k,{selectedIndex:null!=o?o:r,tabs:[],panels:[]}),j=(0,l.useMemo)(()=>({selectedIndex:v.selectedIndex}),[v.selectedIndex]),y=(0,p.E)(i||(()=>{})),T=(0,p.E)(v.tabs),P=(0,l.useMemo)(()=>({orientation:f,activation:m,...v}),[f,m,v]),C=(0,p.E)(h?e.selectedIndex:v.selectedIndex),R=(0,l.useMemo)(()=>({registerTab:e=>(g({type:1,tab:e}),()=>g({type:2,tab:e})),registerPanel:e=>(g({type:3,panel:e}),()=>g({type:4,panel:e})),change(e){C.current!==e&&y.current(e),h||g({type:0,index:e})}}),[g,h]);(0,u.e)(()=>{g({type:0,index:null!=o?o:r})},[o]);let O=(0,l.useRef)({tabs:[],panels:[]});return l.createElement(A.Provider,{value:O},l.createElement(w.Provider,{value:R},l.createElement(E.Provider,{value:P},P.tabs.length<=0&&l.createElement(x,{onFocus:()=>{var e,t;for(let r of T.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:{ref:b},theirProps:d,slot:j,defaultTag:N,name:"Tabs"}))))}),C=(0,a.yV)(function(e,t){let{orientation:r,selectedIndex:n}=y("Tab.List"),l=(0,c.T)(t);return(0,a.sY)({ourProps:{ref:l,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),R=(0,a.yV)(function(e,t){var r,n;let p=`headlessui-tabs-tab-${(0,s.M)()}`,{orientation:m,activation:x,selectedIndex:v,tabs:g,panels:A}=y("Tab"),E=T("Tab"),w=j("Tab"),k=(0,l.useRef)(null),N=(0,c.T)(k,t);(0,u.e)(()=>E.registerTab(k),[E,k]);let P=w.current.tabs.indexOf(p);-1===P&&(P=w.current.tabs.push(p)-1);let C=g.indexOf(k);-1===C&&(C=P);let R=C===v,O=(0,h.z)(e=>{let t=g.map(e=>e.current).filter(Boolean);if(e.key===o.R.Space||e.key===o.R.Enter){e.preventDefault(),e.stopPropagation(),E.change(C);return}switch(e.key){case o.R.Home:case o.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,d.jA)(t,d.TO.First);case o.R.End:case o.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,d.jA)(t,d.TO.Last)}if((0,i.E)(m,{vertical:()=>e.key===o.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===o.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):void 0,horizontal:()=>e.key===o.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===o.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):void 0}))return e.preventDefault()}),I=(0,h.z)(()=>{var e;null==(e=k.current)||e.focus()}),L=(0,l.useRef)(!1),S=(0,h.z)(()=>{var e;L.current||(L.current=!0,null==(e=k.current)||e.focus(),E.change(C),(0,b.Y)(()=>{L.current=!1}))}),z=(0,h.z)(e=>{e.preventDefault()}),M=(0,l.useMemo)(()=>({selected:R}),[R]),F={ref:N,onKeyDown:O,onFocus:"manual"===x?I:S,onMouseDown:z,onClick:S,id:p,role:"tab",type:(0,f.f)(e,k),"aria-controls":null==(n=null==(r=A[C])?void 0:r.current)?void 0:n.id,"aria-selected":R,tabIndex:R?0:-1};return(0,a.sY)({ourProps:F,theirProps:e,slot:M,defaultTag:"button",name:"Tabs.Tab"})}),O=(0,a.yV)(function(e,t){let{selectedIndex:r}=y("Tab.Panels"),n=(0,c.T)(t),s=(0,l.useMemo)(()=>({selectedIndex:r}),[r]);return(0,a.sY)({ourProps:{ref:n},theirProps:e,slot:s,defaultTag:"div",name:"Tabs.Panels"})}),I=a.AN.RenderStrategy|a.AN.Static,L=Object.assign(R,{Group:P,List:C,Panels:O,Panel:(0,a.yV)(function(e,t){var r,n,i,o;let{selectedIndex:d,tabs:f,panels:p}=y("Tab.Panel"),x=T("Tab.Panel"),h=j("Tab.Panel"),b=`headlessui-tabs-panel-${(0,s.M)()}`,v=(0,l.useRef)(null),g=(0,c.T)(v,t);(0,u.e)(()=>x.registerPanel(v),[x,v]);let A=h.current.panels.indexOf(b);-1===A&&(A=h.current.panels.push(b)-1);let E=p.indexOf(v);-1===E&&(E=A);let w=E===d,k=(0,l.useMemo)(()=>({selected:w}),[w]),N={ref:g,id:b,role:"tabpanel","aria-labelledby":null==(n=null==(r=f[E])?void 0:r.current)?void 0:n.id,tabIndex:w?0:-1};return w||null!=(i=e.unmount)&&!i||null!=(o=e.static)&&o?(0,a.sY)({ourProps:N,theirProps:e,slot:k,defaultTag:"div",features:I,visible:w,name:"Tabs.Panel"}):l.createElement(m._,{as:"span",...N})})})},11355:function(e,t,r){r.d(t,{u:function(){return L}});var n,l,a=r(67294),s=r(12351),i=r(16567),o=r(32984),d=r(14879),u=r(16723),c=r(3855),f=r(82180),p=r(23784),m=r(9362);function x(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var b=((n=b||{}).Ended="ended",n.Cancelled="cancelled",n),v=r(94192),g=r(73781);function A(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let j=(0,a.createContext)(null);j.displayName="TransitionContext";var E=((l=E||{}).Visible="visible",l.Hidden="hidden",l);let y=(0,a.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function T(e,t){let r=(0,c.E)(e),n=(0,a.useRef)([]),l=(0,d.t)(),i=(0,v.G)(),u=(0,g.z)((e,t=s.l4.Hidden)=>{let a=n.current.findIndex(({el:t})=>t===e);-1!==a&&((0,o.E)(t,{[s.l4.Unmount](){n.current.splice(a,1)},[s.l4.Hidden](){n.current[a].state="hidden"}}),i.microTask(()=>{var e;!w(n)&&l.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,g.z)(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>u(e,s.l4.Unmount)}),p=(0,a.useRef)([]),m=(0,a.useRef)(Promise.resolve()),x=(0,a.useRef)({enter:[],leave:[],idle:[]}),h=(0,g.z)((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(x.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),b=(0,g.z)((e,t,r)=>{Promise.all(x.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>r(t))});return(0,a.useMemo)(()=>({children:n,register:f,unregister:u,onStart:h,onStop:b,wait:m,chains:x}),[f,u,n,h,b,x,m])}function k(){}y.displayName="NestingContext";let N=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let r={};for(let n of N)r[n]=null!=(t=e[n])?t:k;return r}let C=s.AN.RenderStrategy,R=(0,s.yV)(function(e,t){var r;let n,{beforeEnter:l,afterEnter:E,beforeLeave:k,afterLeave:N,enter:R,enterFrom:O,enterTo:I,entered:L,leave:S,leaveFrom:z,leaveTo:M,...F}=e,D=(0,a.useRef)(null),Z=(0,p.T)(D,t),H=F.unmount?s.l4.Unmount:s.l4.Hidden,{show:B,appear:V,initial:Q}=function(){let e=(0,a.useContext)(j);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[U,_]=(0,a.useState)(B?"visible":"hidden"),$=function(){let e=(0,a.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:G}=$,W=(0,a.useRef)(null);(0,a.useEffect)(()=>Y(D),[Y,D]),(0,a.useEffect)(()=>{if(H===s.l4.Hidden&&D.current){if(B&&"visible"!==U){_("visible");return}return(0,o.E)(U,{hidden:()=>G(D),visible:()=>Y(D)})}},[U,D,Y,G,B,H]);let J=(0,c.E)({enter:A(R),enterFrom:A(O),enterTo:A(I),entered:A(L),leave:A(S),leaveFrom:A(z),leaveTo:A(M)}),K=(r={beforeEnter:l,afterEnter:E,beforeLeave:k,afterLeave:N},n=(0,a.useRef)(P(r)),(0,a.useEffect)(()=>{n.current=P(r)},[r]),n),q=(0,f.H)();(0,a.useEffect)(()=>{if(q&&"visible"===U&&null===D.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[D,U,q]);let X=Q&&!V,ee=!q||X||W.current===B?"idle":B?"enter":"leave",et=(0,g.z)(e=>(0,o.E)(e,{enter:()=>K.current.beforeEnter(),leave:()=>K.current.beforeLeave(),idle:()=>{}})),er=(0,g.z)(e=>(0,o.E)(e,{enter:()=>K.current.afterEnter(),leave:()=>K.current.afterLeave(),idle:()=>{}})),en=T(()=>{_("hidden"),G(D)},$);return function({container:e,direction:t,classes:r,onStart:n,onStop:l}){let a=(0,d.t)(),s=(0,v.G)(),i=(0,c.E)(t);(0,u.e)(()=>{let t=(0,m.k)();s.add(t.dispose);let d=e.current;if(d&&"idle"!==i.current&&a.current){var u,c,f,p;let e,a,s,v,g,A,j;return t.dispose(),n.current(i.current),t.add((u=d,c=r.current,f="enter"===i.current,p=e=>{t.dispose(),(0,o.E)(e,{[b.Ended](){l.current(i.current)},[b.Cancelled]:()=>{}})},a=f?"enter":"leave",s=(0,m.k)(),v=void 0!==p?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,p(...t)}):()=>{},"enter"===a&&(u.removeAttribute("hidden"),u.style.display=""),g=(0,o.E)(a,{enter:()=>c.enter,leave:()=>c.leave}),A=(0,o.E)(a,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),j=(0,o.E)(a,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),h(u,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),x(u,...g,...j),s.nextFrame(()=>{h(u,...j),x(u,...A),function(e,t){let r=(0,m.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[a,s]=[n,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(a+s!==0){let n=[];n.push(r.addEventListener(e,"transitionrun",l=>{l.target===l.currentTarget&&(n.splice(0).forEach(e=>e()),n.push(r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t("ended"),n.splice(0).forEach(e=>e()))}),r.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t("cancelled"),n.splice(0).forEach(e=>e()))})))}))}else t("ended");r.add(()=>t("cancelled")),r.dispose}(u,e=>("ended"===e&&(h(u,...g),x(u,...c.entered)),v(e)))}),s.dispose)),t.dispose}},[t])}({container:D,classes:J,direction:ee,onStart:(0,c.E)(e=>{en.onStart(D,e,et)}),onStop:(0,c.E)(e=>{en.onStop(D,e,er),"leave"!==e||w(en)||(_("hidden"),G(D))})}),(0,a.useEffect)(()=>{X&&(H===s.l4.Hidden?W.current=null:W.current=B)},[B,X,U]),a.createElement(y.Provider,{value:en},a.createElement(i.up,{value:(0,o.E)(U,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,s.sY)({ourProps:{ref:Z},theirProps:F,defaultTag:"div",features:C,visible:"visible"===U,name:"Transition.Child"})))}),O=(0,s.yV)(function(e,t){let{show:r,appear:n=!1,unmount:l,...d}=e,c=(0,a.useRef)(null),m=(0,p.T)(c,t);(0,f.H)();let x=(0,i.oJ)();if(void 0===r&&null!==x&&(r=(0,o.E)(x,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,b]=(0,a.useState)(r?"visible":"hidden"),v=T(()=>{b("hidden")}),[g,A]=(0,a.useState)(!0),E=(0,a.useRef)([r]);(0,u.e)(()=>{!1!==g&&E.current[E.current.length-1]!==r&&(E.current.push(r),A(!1))},[E,r]);let k=(0,a.useMemo)(()=>({show:r,appear:n,initial:g}),[r,n,g]);(0,a.useEffect)(()=>{if(r)b("visible");else if(w(v)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&b("hidden")}else b("hidden")},[r,v]);let N={unmount:l};return a.createElement(y.Provider,{value:v},a.createElement(j.Provider,{value:k},(0,s.sY)({ourProps:{...N,as:a.Fragment,children:a.createElement(R,{ref:m,...N,...d})},theirProps:{},defaultTag:a.Fragment,features:C,visible:"visible"===h,name:"Transition"})))}),I=(0,s.yV)(function(e,t){let r=null!==(0,a.useContext)(j),n=null!==(0,i.oJ)();return a.createElement(a.Fragment,null,!r&&n?a.createElement(O,{ref:t,...e}):a.createElement(R,{ref:t,...e}))}),L=Object.assign(O,{Child:I,Root:O})}}]);