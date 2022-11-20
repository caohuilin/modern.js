"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8865],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(18249),o=(n(29901),n(57522));const r={sidebar_label:"cssModuleLocalIdentName"},l="output.cssModuleLocalIdentName",i={unversionedId:"apis/app/config/output/css-module-localIdent-name",id:"apis/app/config/output/css-module-localIdent-name",title:"output.cssModuleLocalIdentName",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/app/config/output/css-module-localIdent-name.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/css-module-localIdent-name",permalink:"/docs/apis/app/config/output/css-module-localIdent-name",tags:[],version:"current",frontMatter:{sidebar_label:"cssModuleLocalIdentName"},sidebar:"apisAppSidebar",previous:{title:"copy",permalink:"/docs/apis/app/config/output/copy"},next:{title:"cssPath",permalink:"/docs/apis/app/config/output/css-path"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputcssmodulelocalidentname"},"output.cssModuleLocalIdentName"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"[name]__[local]--[hash:base64:5]"))),(0,o.kt)("p",null,"\u8bbe\u7f6e CSS Modules \u751f\u6210\u7684 local ident name\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    cssModuleLocalIdentName: '[path][name]__[local]',\n  },\n});\n")),(0,o.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u4e0e\u89e3\u91ca\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/css-loader#localidentname"},"css-loader#localIdentName"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gajus/babel-plugin-react-css-modules"},"babel-plugin-react-css-modules")," \u65f6\uff0c\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u9009\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},"generateScopedName")," \u9700\u8981\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"output.cssModuleLocalIdentName")," \u4fdd\u6301\u4e00\u81f4\u3002"))))}u.isMDXComponent=!0}}]);