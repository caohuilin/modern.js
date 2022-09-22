"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[48828],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(86215),a=(n(49231),n(54852));const o={sidebar_position:7},i="setInputValue",p={unversionedId:"apis/generator/plugin/input/setInputValue",id:"apis/generator/plugin/input/setInputValue",title:"setInputValue",description:"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002",source:"@site/docs/apis/generator/plugin/input/setInputValue.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/setInputValue",permalink:"/docs/apis/generator/plugin/input/setInputValue",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisGeneratorSidebar",previous:{title:"addOptionAfter",permalink:"/docs/apis/generator/plugin/input/addOptionAfter"},next:{title:"locale",permalink:"/docs/apis/generator/plugin/info/locale"}},l={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setinputvalue"},"setInputValue"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8f93\u5165\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInputValue({\n  moduleRunWay: 'no',\n});\n")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8be5\u65b9\u6cd5\u53ea\u652f\u6301\u8bbe\u7f6e\u751f\u6210\u5668\u63d2\u4ef6\u96c6\u6210\u7684\u5de5\u7a0b\u65b9\u6848\u5bf9\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u503c\uff0c\u4e0d\u652f\u6301\u8bbe\u7f6e\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b(solution)\u548c\u9879\u76ee\u573a\u666f(scenes)\uff0c\u8fd9\u4e24\u4e2a\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u65f6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002"))))}c.isMDXComponent=!0}}]);