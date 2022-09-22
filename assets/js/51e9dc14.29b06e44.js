"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[83453],{54852:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var l=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,s=d["".concat(o,".").concat(c)]||d[c]||k[c]||r;return t?l.createElement(s,i(i({ref:n},m),{},{components:t})):l.createElement(s,i({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=t(86215),a=(t(49231),t(54852));const r={sidebar_position:2},i="Hook \u6a21\u578b",p={unversionedId:"apis/module/runtime/plugin/hook",id:"apis/module/runtime/plugin/hook",title:"Hook \u6a21\u578b",description:"\u9996\u5148\u4ecb\u7ecd\u4e00\u4e0b Modern.js \u7684\u57fa\u7840\u7684\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u5305\u62ec Hook \u6a21\u578b\u7684\u5de5\u4f5c\u65b9\u5f0f\u3001\u5404\u4e2a Hook \u6a21\u578b\u7684\u8fd0\u884c\u6a21\u5f0f\u3001Manager \u7684\u5de5\u4f5c\u6a21\u5f0f\u3002",source:"@site/docs/apis/module/runtime/plugin/hook.md",sourceDirName:"apis/module/runtime/plugin",slug:"/apis/module/runtime/plugin/hook",permalink:"/docs/apis/module/runtime/plugin/hook",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisModuleSidebar",previous:{title:"\u6982\u89c8",permalink:"/docs/apis/module/runtime/plugin/abstract"},next:{title:"Hook API",permalink:"/docs/apis/module/runtime/plugin/hook-api"}},o={},u=[{value:"\u57fa\u7840\u5de5\u4f5c\u65b9\u5f0f",id:"\u57fa\u7840\u5de5\u4f5c\u65b9\u5f0f",level:2},{value:"\u4e0d\u540c Hook \u6a21\u578b\u7684\u533a\u522b",id:"\u4e0d\u540c-hook-\u6a21\u578b\u7684\u533a\u522b",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"Waterfall",id:"waterfall",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Hook \u6a21\u578b\u5bf9\u6bd4",id:"hook-\u6a21\u578b\u5bf9\u6bd4",level:2}],m={toc:u};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hook-\u6a21\u578b"},"Hook \u6a21\u578b"),(0,a.kt)("p",null,"\u9996\u5148\u4ecb\u7ecd\u4e00\u4e0b Modern.js \u7684\u57fa\u7840\u7684\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u5305\u62ec Hook \u6a21\u578b\u7684\u5de5\u4f5c\u65b9\u5f0f\u3001\u5404\u4e2a Hook \u6a21\u578b\u7684\u8fd0\u884c\u6a21\u5f0f\u3001Manager \u7684\u5de5\u4f5c\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u6bcf\u79cd Hook \u6a21\u578b\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u53ef\u4ee5\u72ec\u7acb\u7ba1\u7406\u8fd0\u884c\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u5de5\u4f5c\u65b9\u5f0f"},"\u57fa\u7840\u5de5\u4f5c\u65b9\u5f0f"),(0,a.kt)("p",null,"\u5148\u4ee5 Pipeline \u4e3a\u4f8b\uff0c\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b Hook \u6a21\u578b\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002\u5148\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createPipeline } from '@modern-js/plugin'\n\n// 1. \u521b\u5efa\nconst pipeline = createPipeline<number, number>()\n\n// 2. \u6dfb\u52a0\u51fd\u6570\npipeline.use((count, next) => {\n  return next(count + 1)\n})\npipeline.use((count, next) => {\n  return count * 2\n})\n\n// 3. \u6267\u884c\npipeline.run(1) // 4\npipeline.run(5) // 12\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline<number, number>")," \u7c7b\u578b\u7684 Pipeline\uff08L3\uff09\uff0c\u8fd9\u610f\u5473\u7740\u8fd0\u884c\u5b83\u7684\u65f6\u5019\uff0c\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u7136\u540e\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u800c\u8fd9\u4e2a\u6a21\u578b\u7ba1\u7406\u7684\u51fd\u6570\u7684\u7c7b\u578b\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(count: number, next: (nextCount: number) => number) => number\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5168\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u662f\u56e0\u4e3a\u6211\u4eec\u521b\u5efa\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline<number, number>")," \uff0c\u5982\u679c\u521b\u5efa\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline<number, string>")," \u5219\u8fd0\u884c\u5b83\u5165\u53c2\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u8fd4\u56de\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u5bf9\u5e94\u7ba1\u7406\u7684\u51fd\u6570\u7684\u7c7b\u578b\u4f1a\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(count: number, next: (nextCount: number) => string) => string\n")),(0,a.kt)("p",null,"\u521b\u5efa\u597d Pipeline \u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u6dfb\u52a0\u51fd\u6570\uff08L5\u3001L8\uff09\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6dfb\u52a0\u7684\u987a\u5e8f\u5c31\u662f\u4ed6\u4eec\u9ed8\u8ba4\u7684\u8fd0\u884c\u987a\u5e8f\uff0c\u5728\u8fd9\u4e9b\u51fd\u6570\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \u8fdb\u884c\u5904\u7406\u3001\u8fd4\u56de\u4e00\u4e2a\u503c\uff0c\u5982\u679c\u4f60\u8c03\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\uff0c\u5219\u4f1a\u8fd0\u884c\u540e\u9762\u7684\u51fd\u6570\uff0c\u5373\u5982\u679c\u4f60\u6dfb\u52a0\u4e86\u4e09\u4e2a\u51fd\u6570\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"B"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"C"),"\uff0c\u5982\u679c\u4f60\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," \u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u90a3\u4e48\u5c31\u4f1a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),"\uff0c\u540c\u6837\u7684\uff0c\u5982\u679c\u4f60\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," \u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u90a3\u4e48\u5c31\u4f1a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),"\uff0c\u800c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6dfb\u52a0\u7684\u7b2c\u4e00\u4e2a\u51fd\u6570\uff08L5\uff09\u5c31\u8fd0\u884c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"next"),"\uff0c\u6240\u4ee5\u8fd9\u91cc\u5c31\u4f1a\u8fd0\u884c\u7b2c\u4e8c\u4e2a\u51fd\u6570\uff08L8\uff09\uff0c\u5e76\u4e14\u8fd0\u884c\u7684\u8fd4\u56de\u503c\u5c31\u662f \u7b2c\u4e8c\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u5982\u679c\u5728\u7b2c\u4e00\u4e2a\u51fd\u6570\u4e2d\u6ca1\u6709\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"next"),"\uff0c\u76f4\u63a5\u8fd4\u56de\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createPipeline } from '@modern-js/plugin'\n\n// 1. \u521b\u5efa\nconst pipeline = createPipeline<number, number>()\n\n// 2. \u6dfb\u52a0\u51fd\u6570\npipeline.use((count, next) => {\n  return count + 1\n})\npipeline.use((count, next) => {\n  return count * 2\n})\n\n// 3. \u6267\u884c\npipeline.run(1) // 2\npipeline.run(5) // 6\n")),(0,a.kt)("p",null,"\u5219\u5728\u8fd0\u884c Pipeline \u7684\u65f6\u5019\u5c31\u4e0d\u4f1a\u8fd0\u884c\u7b2c\u4e8c\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48 Pipeline \u7684\u8fd0\u884c\u7ed3\u679c\u5219\u5c31\u662f\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u8fd0\u884c Pipeline \u7684\u65b9\u5f0f\u4e5f\u663e\u800c\u6613\u89c1\u5c31\u662f\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline.run")," \u3002"),(0,a.kt)("h2",{id:"\u4e0d\u540c-hook-\u6a21\u578b\u7684\u533a\u522b"},"\u4e0d\u540c Hook \u6a21\u578b\u7684\u533a\u522b"),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u90e8\u5206\u5c31\u662f Pipeline \u6574\u4f53\u7684\u4e00\u4e2a\u5de5\u4f5c\u6a21\u5f0f\u7684\u63cf\u8ff0\uff0c\u5176\u4ed6\u7684 Hook \u6a21\u578b\u7684\u5de5\u4f5c\u6a21\u5f0f\u57fa\u672c\u4e5f\u662f\u8fd9\u6837\uff0c\u4e3b\u8981\u7684\u533a\u522b\u70b9\uff0c\u662f\u51fd\u6570\u7c7b\u578b\u3001\u6267\u884c\u987a\u5e8f\uff0c\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"pipeline"},"Pipeline"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u662f\u4ee5 Pipeline \u4e3a\u4f8b\u63cf\u8ff0\u7684\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d58\u8ff0\u4e86\uff0c\u5728 Pipeline \u8fd9\u4e2a\u5927\u7c7b\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5c0f\u7c7b\uff1aSync \u548c Async\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5b83\u4eec\u7684\u533a\u522b\u5c31\u662f\u7ba1\u7406\u7684\u51fd\u6570\u7684\u7c7b\u578b\u662f Sync \u7684\u8fd8\u662f Async \u7684\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f53 Pipeline \u4e2d\u6ca1\u6709\u51fd\u6570\u6216\u8005\u6240\u6709\u51fd\u6570\u90fd\u8c03\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\uff0c\u5219\u5c31\u9700\u8981\u5728\u8fd0\u884c\u7684\u65f6\u5019\u63d0\u4f9b\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipeline({}, {\n    onLast: () => {\n        // do something\n    }\n})\n")))),(0,a.kt)("h3",{id:"waterfall"},"Waterfall"),(0,a.kt)("p",null,"\u8fd9\u79cd\u6a21\u578b\u987e\u540d\u601d\u4e49\uff0c\u4ed6\u7684\u7279\u70b9\u5c31\u662f\u53c2\u6570\u7684\u987a\u5e8f\u9012\u4ea4\uff0c\u5373\u524d\u9762\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u5c06\u4f1a\u6210\u4e3a\u4e0b\u4e00\u4e2a\u51fd\u6570\u7684\u5165\u53c2\uff0c\u6211\u4eec\u4e5f\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u770b\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createWaterfall } from '@modern-js/plugin'\n\n// 1. \u521b\u5efa\nconst waterfall = createWaterfall<number>()\n\n// 2. \u6dfb\u52a0\u51fd\u6570\nwaterfall.use((count) => {\n  return count + 1\n})\nwaterfall.use((count) => {\n  return count * 2\n})\n\n// 3. \u6267\u884c\nwaterfall.run(1) // 4\nwaterfall.run(5) // 12\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Waterfall<number> "),"\uff0c\u5373\u8fd9\u4e2a\u6a21\u578b\u6267\u884c\u7684\u5165\u53c2\u548c\u8fd4\u56de\u503c\u662f\u4e00\u6837\u7684\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c\u800c\u5b83\u7ba1\u7406\u7684\u51fd\u6570\u7684\u7c7b\u578b\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(count: number) => number\n")),(0,a.kt)("p",null,"\u53ef\u80fd\u7b80\u5355\u770b\u8fd9\u4e2a\u4f8b\u5b50\u611f\u89c9\u548c\u4e0a\u9762\u7684 Pipeline \u529f\u80fd\u4e00\u6837\uff0c\u90a3\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9996\u5148\u8fd9\u91cc Waterfall \u7ba1\u7406\u7684\u51fd\u6570\u6ca1\u6709next \u51fd\u6570\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5\u5b83\u65e0\u6cd5\u5728\u51fd\u6570\u5185\u90e8\u901a\u8fc7\u8c03\u7528 next \u6765\u5148\u8fd0\u884c\u4e4b\u540e\u6dfb\u52a0\u7684\u51fd\u6570\uff0c\u4ece\u800c\u4fee\u6539\u8fd0\u884c\u7684\u987a\u5e8f\uff0c\u5176\u6b21\u8fd9\u91cc\u7684\u8fd0\u884c\u7684\u5165\u53c2\u7684\u7c7b\u578b\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u4e00\u6837\u7684\uff08\u800c Pipeline \u53ef\u4ee5\u4e0d\u4e00\u6837\uff09\u3002"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5728 Waterfall \u8fd9\u4e2a\u5927\u7c7b\u4e2d\uff0c\u4e5f\u63d0\u4f9b\u4e86 Sync \u548c Async \u7684\u5c0f\u7c7b\uff0c\u5206\u522b\u5bf9\u5e94 Sync \u548c Async \u7684\u51fd\u6570\u3002"),(0,a.kt)("h3",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"\u8fd9\u79cd Hook \u6a21\u578b\u4e0e\u4e0a\u9762\u4e24\u79cd Hook \u6a21\u578b\u7684\u533a\u522b\u662f\uff0c\u6ca1\u6709\u90a3\u4e48\u5f3a\u7684\u524d\u540e\u53c2\u6570\u8fd4\u56de\u503c\u9012\u4ea4\u7684\u6982\u5ff5\uff0c\u5728\u8fd9\u4e2a\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e2a\u51fd\u6570\u90fd\u662f\u57fa\u4e8e\u540c\u6837\u7684\u5165\u53c2\uff0c\u76f8\u5bf9\u72ec\u7acb\u8fd0\u884c\u7684\uff0c\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u7b80\u5355\u770b\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createWorkflow } from '@modern-js/plugin'\n\n// 1. \u521b\u5efa\nconst workflow = createWorkflow <number, number>()\n\n// 2. \u6dfb\u52a0\u51fd\u6570\nworkflow.use((count) => {\n  return count + 1\n})\nworkflow.use((count) => {\n  return count * 2\n})\n\n// 3. \u6267\u884c\nworkflow.run(1) // [2, 2]\nworkflow.run(5) // [6, 10]\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6dfb\u52a0\u4e86\u4e24\u4e2a\u51fd\u6570\uff0c\u6240\u4ee5\u8fd0\u884c\u7684\u7ed3\u679c\u5c31\u662f\u8fd9\u4e24\u4e2a\u51fd\u6570\u8fd0\u884c\u7684\u7ed3\u679c\u5f62\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u8fd9\u79cd\u6a21\u578b\u4e2d\u6ca1\u6709\u90a3\u4e48\u5f3a\u7684\u524d\u540e\u53c2\u6570\u8fd4\u56de\u503c\u9012\u4ea4\u7684\u6982\u5ff5\uff0c\u4f46\u4f9d\u65e7\u6709\u6267\u884c\u987a\u5e8f\u7684\u533a\u522b\uff0c\u5728 Workflow \u8fd9\u4e2a\u5927\u7c7b\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5c0f\u7c7b\uff1aSync\u3001Async\u3001Parallel\u3002\u4ed6\u4eec\u4e4b\u95f4\u7684\u533a\u522b\u5c31\u662f\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5f53\u7136\u9ed8\u8ba4\u7684\u90fd\u662f\u6309\u7167\u6dfb\u52a0\u987a\u5e8f\u6267\u884c\uff0c\u800c\u5728 Sync\u3001Async \u5219\u662f\u5f3a\u5236\u6309\u7167\u6dfb\u52a0\u987a\u5e8f\u6267\u884c\uff0c\u800c Parallel \u5219\u662f Async \u6a21\u5f0f\u7684\u4e00\u4e2a\u53d8\u4f53\uff0c\u5373\u5b83\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all")," \u6765\u6267\u884c\u6240\u6709\u51fd\u6570\uff0c\u800c Async \u5219\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," \u524d\u9762\u7684\u51fd\u6570\u8fd0\u884c\u7ed3\u675f\u3002"),(0,a.kt)("h2",{id:"hook-\u6a21\u578b\u5bf9\u6bd4"},"Hook \u6a21\u578b\u5bf9\u6bd4"),(0,a.kt)("div",{style:{width:"100%",overflowX:"scroll"}},(0,a.kt)("div",{style:{width:"150%"}},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6267\u884c\u987a\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570\u6765\u6e90"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6267\u884c\u8fd4\u56de\u503c\u6765\u6e90"),(0,a.kt)("th",{parentName:"tr",align:null},"\u503e\u5411\u5904\u7406\u7684\u4efb\u52a1\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570 TS \u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pipeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6267\u884c\u7b2c\u4e00\u4e2a\u6dfb\u52a0\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7 next \u8c03\u7528\u4e4b\u540e\u6dfb\u52a0\u7684\u51fd\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\u8fd0\u884c\u7684\u53c2\u6570\uff0c\u4e4b\u540e\u7684\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\uff0c\u524d\u4e00\u4e2a\u51fd\u6570\u5411 next \u51fd\u6570\u4f20\u9012\u7684\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(input: I, next: Next<I, O>) => O"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AsyncPipeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync/Async"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u6267\u884c\u7b2c\u4e00\u4e2a\u6dfb\u52a0\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7 next \u8c03\u7528\u4e4b\u540e\u6dfb\u52a0\u7684\u51fd\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\u8fd0\u884c\u7684\u53c2\u6570\uff0c\u4e4b\u540e\u7684\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\uff0c\u524d\u4e00\u4e2a\u51fd\u6570\u5411 next \u51fd\u6570\u4f20\u9012\u7684\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(input: I, next: AsyncNext<I, O>) => O \uff5c Promise<O>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WaterFall"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u76f4\u987a\u5e8f\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\u8fd0\u884c\u7684\u53c2\u6570\uff0c\u4e4b\u540e\u7684\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\uff0c\u524d\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u540e\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(I: I) => I"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AsyncWaterFall"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync/Async"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u76f4\u987a\u5e8f\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\u8fd0\u884c\u7684\u53c2\u6570\uff0c\u4e4b\u540e\u7684\u51fd\u6570\u7684\u53c2\u6570\u6765\u6e90\u662f\uff0c\u524d\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u540e\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(I: I) => I \uff5c Promise<I>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Workflow"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u76f4\u987a\u5e8f\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u7684\u5165\u53c2\u90fd\u662f\u8fd0\u884c\u7684\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u8fd4\u56de\u503c\u5f62\u6210\u7684\u6570\u7ec4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(I: I) => O"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AsyncWorkflow"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync/Async"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u76f4\u987a\u5e8f\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u7684\u5165\u53c2\u90fd\u662f\u8fd0\u884c\u7684\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u8fd4\u56de\u503c\u5f62\u6210\u7684\u6570\u7ec4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u51fd\u6570\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(I: I) => O \uff5c Promise<O>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ParallelWorkFlow"),(0,a.kt)("td",{parentName:"tr",align:null},"Sync/Async"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u7684\u5165\u53c2\u90fd\u662f\u8fd0\u884c\u7684\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u51fd\u6570\u8fd4\u56de\u503c\u5f62\u6210\u7684\u6570\u7ec4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u4e0d\u9700\u8981\u4fee\u6539\u521d\u59cb\u53c2\u6570"),(0,a.kt)("li",null,"\u4e0d\u5173\u5fc3\u6267\u884c\u987a\u5e8f"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(I: I) => O \uff5c Promise<O>"))))))),(0,a.kt)("p",null,"Workflow\u3001Waterfall \u5176\u5b9e\u90fd\u662f Pipeline \u7684\u53d8\u4f53\uff0cPipeline \u53ef\u4ee5\u901a\u8fc7\u7279\u5b9a\u7684\u5199\u6cd5\u6765\u5b9e\u73b0 Workflow\u3001Waterfall \uff0c\u4f46\u90fd\u8f83\u4e3a\u9ebb\u70e6\uff0c\u6709\u8bb8\u591a\u9690\u5f62\u7684\u7ea6\u5b9a\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\uff0c\u63d0\u4f9b\u4e86\u8fd9\u4e24\u79cd\u53d8\u4f53\u6765\u6ee1\u8db3\u8fd9\u79cd\u7279\u6b8a\u573a\u666f\u3002"))}k.isMDXComponent=!0}}]);