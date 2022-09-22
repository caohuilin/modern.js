"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[28282],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(86215),a=(n(49231),n(54852));const r={},l="Electron Test",o={unversionedId:"apis/module/runtime/electron/tests/test",id:"apis/module/runtime/electron/tests/test",title:"Electron Test",description:"\u4e3a Electron \u5e94\u7528\u7f16\u5199\u81ea\u52a8\u6d4b\u8bd5, \u4f60\u9700\u8981\u4e00\u79cd \u201c\u9a71\u52a8\u201d \u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\u3002Spectron \u662f\u4e00\u79cd\u5e38\u7528\u7684\u89e3\u51b3\u65b9\u6848, \u5b83\u5141\u8bb8\u60a8\u901a\u8fc7 WebDriver \u6a21\u62df\u7528\u6237\u884c\u4e3a\u3002",source:"@site/docs/apis/module/runtime/electron/tests/test.md",sourceDirName:"apis/module/runtime/electron/tests",slug:"/apis/module/runtime/electron/tests/test",permalink:"/docs/apis/module/runtime/electron/tests/test",tags:[],version:"current",frontMatter:{},sidebar:"apisModuleSidebar",previous:{title:"testServices",permalink:"/docs/apis/module/runtime/electron/webview-process/test"},next:{title:"\u6982\u89c8",permalink:"/docs/apis/module/runtime/plugin/abstract"}},s={},p=[{value:"Class: TestDriver",id:"class-testdriver",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"<code>testDriver.isRunning()</code>",id:"testdriverisrunning",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"<code>testDriver.checkReady(options)</code>",id:"testdrivercheckreadyoptions",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4},{value:"<code>testDriver.whenReady([winName,options])</code>",id:"testdriverwhenreadywinnameoptions",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:4},{value:"<code>testDriver.stop()</code>",id:"testdriverstop",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-4",level:3},{value:"<code>testDriver.call(options)</code>",id:"testdrivercalloptions",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-5",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"electron-test"},"Electron Test"),(0,a.kt)("p",null,"\u4e3a Electron \u5e94\u7528\u7f16\u5199\u81ea\u52a8\u6d4b\u8bd5, \u4f60\u9700\u8981\u4e00\u79cd \u201c\u9a71\u52a8\u201d \u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\u3002",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/spectron"},"Spectron")," \u662f\u4e00\u79cd\u5e38\u7528\u7684\u89e3\u51b3\u65b9\u6848, \u5b83\u5141\u8bb8\u60a8\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebDriver")," \u6a21\u62df\u7528\u6237\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 Node \u7684\u5185\u5efa IPC STDIO \u6765\u7f16\u5199\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u9a71\u52a8\u3002\n\u81ea\u5b9a\u4e49\u9a71\u52a8\u7684\u4f18\u52bf\u5728\u4e8e\uff0c\u5b83\u5f80\u5f80\u6bd4 Spectron \u9700\u8981\u66f4\u5c11\u7684\u5f00\u9500\uff0c\u5e76\u5141\u8bb8\u4f60\u5411\u6d4b\u8bd5\u5957\u4ef6\u516c\u5f00\u81ea\u5b9a\u4e49\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"class-testdriver"},"Class: TestDriver"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import TestDriver from '@modern-js/electron-test';\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new TestDriver(options)")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"options\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u6d4b\u8bd5\u9a71\u52a8\u914d\u7f6e\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cwd\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u6d4b\u8bd5\u6267\u884c\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"[envs]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u6267\u884c\u7684\u73af\u5883\u53d8\u91cf\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"TestDriver")," \u5b9e\u4f8b\u3002")),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestDriver")," \u5b9e\u4f8b\uff0c\u8fd9\u4f1a\u542f\u52a8\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Electron")," \u5e94\u7528\u5b9e\u4f8b\u3002"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f53\u6211\u4eec\u9700\u8981\u542f\u52a8\u591a\u4e2a\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u6dfb\u52a0\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"TEST_FOLDER")," \u53d8\u91cf\uff0c\u7528\u4e8e\u533a\u5206\u5b9e\u4f8b\u8fd0\u884c\u76ee\u5f55\u3002\n\u6bd4\u5982\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new TestDriver({\n  cwd: 'xxx/electron',\n  envs: {\n    TEST_FOLDER: 'test1'\n  }\n})\n")))),(0,a.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("h3",{id:"testdriverisrunning"},(0,a.kt)("inlineCode",{parentName:"h3"},"testDriver.isRunning()")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u662f\u5426\u5904\u4e8e\u8fd0\u884c\u4e2d\u3002")),(0,a.kt)("p",null,"\u8fd4\u56de\u5f53\u524d\u5b9e\u4f8b\u662f\u5426\u4ecd\u7136\u5904\u4e8e\u8fd0\u884c\u4e2d\u3002"),(0,a.kt)("h3",{id:"testdrivercheckreadyoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"testDriver.checkReady(options)")),(0,a.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"options\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object")," \u68c0\u67e5\u662f\u5426\u5904\u4e8e\u5df2\u5c31\u7eea\u72b6\u6001\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[winName]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[webviewId]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0cwebview \u7684 ID\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u662f\u5426\u5df2\u7ecf\u5c31\u7eea\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f20\u7a97\u53e3\u540d\uff0c\u5219\u6b64\u65b9\u6cd5\u8868\u793a\u68c0\u6d4b\u4e3b\u8fdb\u7a0b\u662f\u5426\u542f\u52a8\u5b8c\u6bd5\uff1b\n\u5982\u679c\u4f20\u9012\u7a97\u53e3\u540d\uff0c\u5219\u8868\u793a\u68c0\u6d4b\u7a97\u53e3\u662f\u5426\u52a0\u8f7d\u5b8c\u6bd5\uff1b\n\u5982\u679c\u4f20\u9012\u4e86\u7a97\u53e3\u540d\uff0c\u4e14\u4f20\u9012\u4e86 webview \u7684 ID\uff0c\u5219\u8868\u793a\u68c0\u67e5\uff0c\u67d0\u4e2a\u7a97\u53e3\u4e0b\uff0c\u67d0\u4e2a webview \u662f\u5426\u5df2\u52a0\u8f7d\u5b8c\u6bd5\u3002"),(0,a.kt)("h3",{id:"testdriverwhenreadywinnameoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"testDriver.whenReady([winName,options])")),(0,a.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[winName]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object")," \u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[timeout]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c 10000\u3002"),(0,a.kt)("li",{parentName:"ul"},"[webviewId]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0cwebview \u7684 ID\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),"\uff0c\u662f\u5426\u5df2\u7ecf\u5c31\u7eea\u3002")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6ca1\u6709\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\u65f6\uff0c\u8868\u793a\u5f53\u4e3b\u8fdb\u7a0b\u52a0\u8f7d\u5b8c\u6bd5\u65f6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f20\u9012\u4e86\u7a97\u53e3\uff0c\u6ca1\u6709\u4f20\u9012\u5176\u4ed6\u9009\u9879\u65f6\uff0c\u8868\u793a\u5f53\u7a97\u53e3",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\u52a0\u8f7d\u5b8c\u6bd5\u65f6\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f20\u9012\u4e86\u7a97\u53e3\u540d\uff0c\u4e14\u4f20\u9012\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"webviewId"),"\uff0c\u8868\u793a\u5f53\u7a97\u53e3",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\u7684 ID \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"webviewId"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"webview"),"\u52a0\u8f7d\u5b8c\u6bd5\u65f6\u3002\n\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," \u4e3a\u7b49\u5f85",(0,a.kt)("inlineCode",{parentName:"li"},"webview"),"\u52a0\u8f7d\u5b8c\u6bd5\u7684\u65f6\u95f4\uff0c\u8d85\u65f6\u5219\u629b\u51fa\u5f02\u5e38\u3002")))),(0,a.kt)("h3",{id:"testdriverstop"},(0,a.kt)("inlineCode",{parentName:"h3"},"testDriver.stop()")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u505c\u6b62\u5b9e\u4f8b\u3002"),(0,a.kt)("h3",{id:"testdrivercalloptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"testDriver.call(options)")),(0,a.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"options\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u8bbf\u95ee\u53c2\u6570\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[funcName]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9700\u8981\u6d4b\u8bd5\u7684\u51fd\u6570\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[winName]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9700\u8981\u6d4b\u8bd5\u7684\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u6d4b\u8bd5\u51fd\u6570\u65f6\u4f20\u9012\u7684\u53c2\u6570\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise<any>"),"\uff0c\u8bbf\u95ee\u7ed3\u679c\u3002")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f20\u9012\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"funcName"),"\uff0c\u672a\u4f20\u9012",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\u65f6\uff0c\u5219\u8868\u793a\u6d4b\u8bd5\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u7684\u670d\u52a1\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"funcName"),"\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u4f20\u9012\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"funcName"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\uff0c\u5219\u8868\u793a\u6d4b\u8bd5\u7a97\u53e3",(0,a.kt)("inlineCode",{parentName:"li"},"winName"),"\u4e2d\u7684\u670d\u52a1\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"funcName"),"\uff1b\n",(0,a.kt)("inlineCode",{parentName:"li"},"args")," \u4e3a\u6267\u884c\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u6d4b\u8bd5\uff0c\u8bf7\u770b",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/test/index"},"\u3010\u6d4b\u8bd5\u793a\u4f8b\u3011"),"\u3002")))))}m.isMDXComponent=!0}}]);