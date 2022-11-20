"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3718],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(18249),r=(n(29901),n(57522));const i={sidebar_label:"htmlPath"},o="output.htmlPath",p={unversionedId:"apis/app/config/output/html-path",id:"apis/app/config/output/html-path",title:"output.htmlPath",description:"- \u7c7b\u578b\uff1a string",source:"@site/docs/apis/app/config/output/html-path.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/html-path",permalink:"/docs/apis/app/config/output/html-path",tags:[],version:"current",frontMatter:{sidebar_label:"htmlPath"},sidebar:"apisAppSidebar",previous:{title:"favicon",permalink:"/docs/apis/app/config/output/favicon"},next:{title:"injectByEntries",permalink:"/docs/apis/app/config/output/inject-by-entries"}},l={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outputhtmlpath"},"output.htmlPath"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"html"))),(0,r.kt)("p",null,"\u8bbe\u7f6e HTML \u6a21\u677f\u6587\u4ef6\u5728\u6784\u5efa\u4ea7\u7269\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," \u4e4b\u540e\uff0c HTML \u4ea7\u7269\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html\n \xa0  \u2514\u2500\u2500 main\n \xa0\xa0     \u2514\u2500\u2500 index.html\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.htmlPath")," \u4e3a\u81ea\u5b9a\u4e49\u7684\u76ee\u5f55\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    htmlPath: './html-assets',\n  },\n});\n")),(0,r.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\uff0c\u5bf9\u5e94 HTML \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dist\n\u2514\u2500\u2500 html-assets\n \xa0\xa0 \u2514\u2500\u2500 main\n \xa0\xa0     \u2514\u2500\u2500 index.html\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u79fb\u9664 HTML \u4ea7\u7269\u5bf9\u5e94\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/output/disable-html-folder"},"output.disableHtmlFolder")," \u914d\u7f6e\u9879\u3002"))))}u.isMDXComponent=!0}}]);