"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[38094],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(86215),a=(n(49231),n(54852));const r={sidebar_position:2,title:"\u521b\u5efa Model"},i=void 0,l={unversionedId:"guides/features/model/define-model",id:"guides/features/model/define-model",title:"\u521b\u5efa Model",description:"\u4e0a\u4e00\u8282\u7684\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u7b80\u5355\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Model\u3002\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd Model \u7684\u521b\u5efa\u65b9\u6cd5\u3002",source:"@site/docs/guides/features/model/define-model.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/define-model",permalink:"/docs/guides/features/model/define-model",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521b\u5efa Model"},sidebar:"guidesSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/docs/guides/features/model/quick-start"},next:{title:"\u4f7f\u7528 Model",permalink:"/docs/guides/features/model/use-model"}},d={},p=[],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u8282\u7684\u8ba1\u6570\u5668\u5e94\u7528\u4e2d\uff0c\u6211\u4eec\u7b80\u5355\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Model\u3002\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd Model \u7684\u521b\u5efa\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," API \u521b\u5efa Model\uff0c\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"model('foo')")," \u8868\u793a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684 Model\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"model('foo')")," \u8fd4\u56de\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u51fd\u6570\uff0c\u5b9a\u4e49 Model \u5305\u542b\u7684 State\u3001Actions \u7b49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  actions: {\n    setValue: (state, payload){\n      state.value = payload\n    }\n  }\n});\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Model \u4e2d\u7684 Action \u4e2d\u4e0d\u80fd\u5305\u542b\u6709\u526f\u4f5c\u7528\u7684\u903b\u8f91\uff0c\u5982\u8bf7\u6c42 HTTP \u63a5\u53e3\uff0c\u8bbf\u95ee localStorage \u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setValue")," \u5185\u90e8\u76f4\u63a5\u4fee\u6539\u4e86\u5165\u53c2 State\uff0c\u770b\u8d77\u6765\u662f\u8fdd\u53cd\u4e86\u7eaf\u51fd\u6570\u7684\u5b9a\u4e49\uff0c\u5b9e\u9645\u4e0a Reduck \u5185\u90e8\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/immerjs/immer"},"immer")," \u6765\u4fee\u6539\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u4fdd\u8bc1\u4e86\u8fd9\u79cd\u5199\u6cd5\u4e0d\u4f1a\u5f71\u54cd\u5bf9\u8c61\u7684\u4e0d\u53ef\u53d8\u6027\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"setValue")," \u4ecd\u7136\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\u3002\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 Action \u4e2d\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u4e0d\u8fc7\u8fd9\u6837\u7684\u5199\u6cd5\u4f1a\u66f4\u52a0\u590d\u6742\u4e00\u4e9b\u3002")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u63a5\u6536\u7684\u53c2\u6570\uff0c\u53ea\u662f\u5bf9 Model \u539f\u59cb\u7ed3\u6784\u7684\u63cf\u8ff0\uff1a\u5185\u90e8\u5b9a\u4e49\u7684 State\u3001Actions \u7b49\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"fooModel")," \u624d\u662f\u771f\u6b63\u521b\u5efa\u5f97\u5230\u7684 Model \u5bf9\u8c61\u3002\u4f8b\u5982\uff0c\u867d\u7136 ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue"),"\uff0c\u6709 2 \u4e2a\u53c2\u6570\uff0c\u4f46\u662f\u5f53\u771f\u6b63\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue")," \u8fd9\u4e2a Action \u65f6\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," \u4e00\u4e2a\u53c2\u6570\uff0c\u56e0\u4e3a\u6211\u4eec\u8c03\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"fooModel")," \u4e0a\u7684 Action \u65b9\u6cd5\uff0c\u800c\u4e0d\u662f Model \u539f\u59cb\u7ed3\u6784\u4e0a\u63cf\u8ff0\u7684 Action \u65b9\u6cd5\u3002\u8be6\u7ec6\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/features/model/use-model"},"\u4f7f\u7528 Model"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u9664\u4e86\u63a5\u6536\u5bf9\u8c61\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u51fd\u6570\u7c7b\u578b\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define((context, utils) => {\n  return {\n    state: {\n      value: 'foo',\n    },\n    actions: {\n      setValue: (state, payload){\n        state.value = payload\n      }\n    }\n  }\n});\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u51fd\u6570\u5b9a\u4e49 Model \u65f6\uff0c\u51fd\u6570\u5185\u90e8\u4f1a\u81ea\u52a8\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"utils")," 2 \u4e2a\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u662f Reduck \u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"utils")," \u63d0\u4f9b\u4e86\u4e00\u7ec4\u5de5\u5177\u51fd\u6570\uff0c\u65b9\u4fbf\u5b9e\u73b0 Model \u901a\u4fe1\u7b49\u590d\u6742\u529f\u80fd\u9700\u6c42\u3002"),(0,a.kt)("p",null,"Model \u652f\u6301\u590d\u5236\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const barModel = fooModel('bar');\n")),(0,a.kt)("p",null,"barModel \u662f\u57fa\u4e8e fooModel \u521b\u5efa\u51fa\u4e00\u4e2a\u7684\u65b0\u7684 Model \u5bf9\u8c61\uff0c\u7c7b\u6bd4\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u6982\u5ff5\uff0cbarModel \u548c fooModel \u662f\u57fa\u4e8e\u540c\u4e00\u4e2a\u7c7b\uff08Class\uff09\u521b\u5efa\u51fa\u7684 2 \u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u3002\u5f53\u4e24\u4e2a\u6a21\u5757\u7684\u72b6\u6001\u7ba1\u7406\u903b\u8f91\u76f8\u540c\uff0c\u4f8b\u5982\u4e00\u4e2a\u9875\u9762\u4e2d\u7684\u4e24\u4e2a tab \u6a21\u5757\uff0c\u4f7f\u7528\u7684\u6570\u636e\u7684\u7ed3\u6784\u548c\u903b\u8f91\u76f8\u540c\uff0c\u533a\u522b\u53ea\u662f\u4ece\u4e0d\u540c\u7684\u63a5\u53e3\u83b7\u53d6\u6570\u636e\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7 Model \u590d\u5236\u7684\u65b9\u5f0f\uff0c\u521b\u5efa 2 \u4e2a\u4e0d\u540c\u7684 Model \u5bf9\u8c61\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u672c\u8282\u6d89\u53ca\u7684 API \u7684\u8be6\u7ec6\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/model_"},"\u8fd9\u91cc"),"\u3002"))))}m.isMDXComponent=!0}}]);