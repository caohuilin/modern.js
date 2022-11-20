"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8940],{57522:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(29901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=t(18249),o=(t(29901),t(57522));const a={sidebar_position:8},i="updateModernConfig",p={unversionedId:"apis/generator/plugin/file/updateModernConfig",id:"apis/generator/plugin/file/updateModernConfig",title:"updateModernConfig",description:"\u66f4\u65b0 package.json \u4e2d modernConfig \u5b57\u6bb5\u3002",source:"@site/docs/apis/generator/plugin/file/updateModernConfig.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/updateModernConfig",permalink:"/docs/apis/generator/plugin/file/updateModernConfig",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"apisGeneratorSidebar",previous:{title:"updateTextRawFile",permalink:"/docs/apis/generator/plugin/file/updateTextRawFile"},next:{title:"rmFile",permalink:"/docs/apis/generator/plugin/file/rmFile"}},l={},d=[{value:"updateInfo",id:"updateinfo",level:2}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updatemodernconfig"},"updateModernConfig"),(0,o.kt)("p",null,"\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"updateinfo"},"updateInfo"),(0,o.kt)("p",null,"\u5b57\u6bb5\u66f4\u65b0\u4fe1\u606f\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8be5\u51fd\u6570\u4e3a updateJSONFile \u7684\u5c01\u88c5\uff0c\u5c06\u81ea\u52a8\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u5b57\u6bb5 updateInfo \u4e2d\u53ea\u9700\u586b\u5199\u76f8\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u7684\u66f4\u65b0\u4fe1\u606f\u5373\u53ef\u3002"))))}c.isMDXComponent=!0}}]);