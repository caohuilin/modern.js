"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[36430],{54852:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(86215),a=(t(49231),t(54852));const i={sidebar_position:5},o="WindowConfig",l={unversionedId:"apis/module/runtime/electron/main-process/window-config",id:"apis/module/runtime/electron/main-process/window-config",title:"WindowConfig",description:"* \u4f7f\u7528\u8fdb\u7a0b\uff1a\u4e3b\u8fdb\u7a0b\u3002",source:"@site/docs/apis/module/runtime/electron/main-process/window-config.md",sourceDirName:"apis/module/runtime/electron/main-process",slug:"/apis/module/runtime/electron/main-process/window-config",permalink:"/docs/apis/module/runtime/electron/main-process/window-config",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisModuleSidebar",previous:{title:"lifecycleService",permalink:"/docs/apis/module/runtime/electron/main-process/lifecycle-service"},next:{title:"testServices",permalink:"/docs/apis/module/runtime/electron/main-process/test"}},p={},s=[],m={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windowconfig"},"WindowConfig"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E4%B8%BB%E8%BF%9B%E7%A8%8B"},"\u4e3b\u8fdb\u7a0b"),"\u3002")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { WindowConfig } from '@modern-js/runtime/electron-main';\n")))),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u6846\u67b6\u91cc\uff0c\u63d0\u4f9b\u4e86\u7a97\u53e3\u7ba1\u7406\u7684\u80fd\u529b\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u7a97\u53e3\u7684\u914d\u7f6e\uff0c\u4e5f\u6709\u505a\u76f8\u5e94\u7ba1\u7406\u3002\u6bcf\u4e2a\u7a97\u53e3\u914d\u7f6e\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"WindowConfig"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002\uff08\u7a97\u53e3\u540d\u9700\u8981\u552f\u4e00\u3002\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[loadUrl]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u7a97\u53e3\u52a0\u8f7d\u8def\u5f84\uff0c\u9ed8\u8ba4\u52a0\u8f7d\u4e0e\u7a97\u53e3\u540c\u540d\u7684\u5165\u53e3\uff0c\u5165\u53e3\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5219\u9ed8\u8ba4\u52a0\u8f7d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[multiple]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u662f\u5426\u5141\u8bb8\u6b64\u7a97\u53e3\u6253\u5f00\u591a\u4e2a\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[options]","\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/zh/docs/latest/api/browser-window#new-browserwindowoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowserWindowConstructorOptions")),"\uff0c\u7a97\u53e3\u57fa\u7840\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  width: 1024,\n  height: 800,\n  show: true,\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[disableAutoLoad]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u662f\u5426\u5141\u8bb8\u9ed8\u8ba4\u52a0\u8f7d\u8def\u5f84\u3002\u82e5\u5f00\u542f\uff0c\u5219\u5728\u6253\u5f00\u7a97\u53e3\u540e\u4e0d\u52a0\u8f7d\u4efb\u4f55\u8def\u5f84\uff0c\u53ef\u81ea\u884c\u6309\u9700\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[useFileProtocolInDev]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u662f\u5426\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," \u534f\u8bae\u52a0\u8f7d\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[hideWhenClose]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u7a97\u53e3\u5173\u95ed\u65f6\uff0c\u662f\u5426\u4f7f\u7528\u9690\u85cf\u6765\u4ee3\u66ff\u5173\u95ed\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[addBeforeCloseListener]","\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u7a97\u53e3\u5173\u95ed\u65f6\uff0c\u5f53\u9700\u8981\u6ce8\u518c\u5173\u95ed\u524d\u56de\u8c03\u65f6\u3002\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"registerWillClose")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"registerBeforeClose"),"\uff0c\u9700\u8981\u914d\u7f6e\u6b64\u5c5e\u6027\uff0c\u6ce8\u518c\u5173\u95ed\u76d1\u542c\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"))))}c.isMDXComponent=!0}}]);