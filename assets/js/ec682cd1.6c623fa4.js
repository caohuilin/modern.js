"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3548],{54852:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(49231);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,v=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?t.createElement(v,i(i({ref:n},d),{},{components:r})):t.createElement(v,i({ref:n},d))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57189:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(86215),a=(r(49231),r(54852));const o={sidebar_position:2},i="exposeInMainWorld",l={unversionedId:"apis/module/runtime/electron/render-process/expose-in-main-world",id:"apis/module/runtime/electron/render-process/expose-in-main-world",title:"exposeInMainWorld",description:"* \u4f7f\u7528\u8fdb\u7a0b\uff1a\u6e32\u67d3\u8fdb\u7a0b\u3002",source:"@site/docs/apis/module/runtime/electron/render-process/expose-in-main-world.md",sourceDirName:"apis/module/runtime/electron/render-process",slug:"/apis/module/runtime/electron/render-process/expose-in-main-world",permalink:"/docs/apis/module/runtime/electron/render-process/expose-in-main-world",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisModuleSidebar",previous:{title:"browserWindowPreloadApis",permalink:"/docs/apis/module/runtime/electron/render-process/browser-window-preload-apis"},next:{title:"callMain",permalink:"/docs/apis/module/runtime/electron/render-process/call-main"}},s={},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:p};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exposeinmainworld"},"exposeInMainWorld"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { exposeInMainWorld } from '@modern-js/runtime/electron-render';\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exposeInMainWorld(apis)")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apis\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"{ [key: string]: unknown }"),"\uff0c\u9700\u8981\u5728\u9884\u52a0\u8f7d\u811a\u672c\u4e2d\u6ce8\u518c\u7ed9\u6e32\u67d3\u8fdb\u7a0b\u4f7f\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"apis"),"\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7 Electron \u5b98\u65b9\u63d0\u4f9b\u7684\u539f\u751f API: ",(0,a.kt)("inlineCode",{parentName:"p"},"exposeInMainWorld(key, apis)")," \u8fdb\u884c\u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"apis"),"\u3002\u6700\u7ec8\u5728\u524d\u7aef\u4e2d\u53ef\u4ee5\u5165\u4e0b\u65b9\u5f0f\u83b7\u5f97\u5bf9\u5e94\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"window[key].xxx\n")),(0,a.kt)("p",null,"\u5728 Modern Electron \u4e2d\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4e00\u5c42\u7b80\u6613\u5c01\u88c5\uff0c\u652f\u6301\u7c7b\u578b\u63d0\u793a\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u83b7\u5f97 API\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xxx/xxx.tsx"',title:'"xxx/xxx.tsx"'},"import bridge from '@modern-js/runtime/electron-bridge';\n\n...\nbridge.xxx\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/preload/index.ts"',title:'"electron/preload/index.ts"'},"import {\n  exposeInMainWorld,\n  browserWindowPreloadApis,\n} from '@modern-js/runtime/electron-render';\n\nconst { callMain } = browserWindowPreloadApis;\n\nexport const apis = {\n  ...browserWindowPreloadApis,\n  openInBrowser: (url: string) => {\n    return callMain('openInBrowser', url);\n  },\n};\n\nexposeInMainWorld(apis);\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apis/module/runtime/electron/render-process/browser-window-preload-apis"},"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"a"},"browserWindowPreloadApis")),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/develop"},"\u5b8c\u6574\u793a\u4f8b"),"\u3002")))))}m.isMDXComponent=!0}}]);