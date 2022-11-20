"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7076],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(18249),o=(n(29901),n(57522));const i={sidebar_label:"target"},a="buildConfig.target",l={unversionedId:"apis/module/config/output/build-config/target",id:"apis/module/config/output/build-config/target",title:"buildConfig.target",description:"* \u7c7b\u578b\uff1a 'es5' | 'es6' | 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'esnext'",source:"@site/docs/apis/module/config/output/build-config/target.md",sourceDirName:"apis/module/config/output/build-config",slug:"/apis/module/config/output/build-config/target",permalink:"/docs/apis/module/config/output/build-config/target",tags:[],version:"current",frontMatter:{sidebar_label:"target"},sidebar:"apisModuleSidebar",previous:{title:"sourceMap",permalink:"/docs/apis/module/config/output/build-config/source-map"},next:{title:"tsconfig",permalink:"/docs/apis/module/config/output/build-config/tsconfig"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buildconfigtarget"},"buildConfig.target"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"'es5' | 'es6' | 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'esnext'")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"'esnext'"))),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6784\u5efa\u4ea7\u7269\u652f\u6301\u7684\u6700\u9ad8 ECMAScript \u7248\u672c\u3002\u5982\u679c\u4f7f\u7528\u4e86\u66f4\u9ad8\u7684\u7248\u672c\u8bed\u6cd5\uff0c\u4f1a\u8fdb\u884c\u7f16\u8bd1\u8f6c\u6362\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5f53\u524d Bundle \u6784\u5efa\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"es5")," \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"esnext")," \u7684\u8bed\u6cd5\u3002Bundleless \u76ee\u524d\u6682\u65f6\u4ec5\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"es5")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"es6"),"\uff0c\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"es6+")," \u7684\u8bed\u6cd5\uff0c\u90fd\u4f1a\u8f6c\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"es6"),"\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  output: {\n    buildConfig: {\n      target: 'esnext',\n    },\n  },\n});\n")))}u.isMDXComponent=!0}}]);