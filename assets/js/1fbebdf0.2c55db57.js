"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[87695],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(86215),o=(n(49231),n(54852));const i={sidebar_position:6,title:"\u81ea\u52a8\u751f\u6210 Actions"},r=void 0,s={unversionedId:"guides/features/model/auto-actions",id:"guides/features/model/auto-actions",title:"\u81ea\u52a8\u751f\u6210 Actions",description:"\u5728 \u5feb\u901f\u4e0a\u624b \u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u8ba1\u6570\u5668 Model \u4e5f\u9700\u8981 10 \u884c\u4ee3\u7801\u3002",source:"@site/docs/guides/features/model/auto-actions.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/auto-actions",permalink:"/docs/guides/features/model/auto-actions",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u81ea\u52a8\u751f\u6210 Actions"},sidebar:"guidesSidebar",previous:{title:"\u526f\u4f5c\u7528\u7ba1\u7406",permalink:"/docs/guides/features/model/manage-effects"},next:{title:"Model \u901a\u4fe1",permalink:"/docs/guides/features/model/model-communicate"}},l={},c=[{value:"\u539f\u59cb\u6570\u636e\u7c7b\u578b",id:"\u539f\u59cb\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:2},{value:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b",id:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/features/model/quick-start"},"\u5feb\u901f\u4e0a\u624b")," \u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u8ba1\u6570\u5668 Model \u4e5f\u9700\u8981 10 \u884c\u4ee3\u7801\u3002\n\u5b9e\u9645\u4e0a\uff0cModern.js \u652f\u6301\u6839\u636e\u58f0\u660e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u7c7b\u578b\uff0c\u81ea\u52a8\u751f\u6210\u5e38\u7528\u7684 Actions\uff0c\u4ece\u800c\u7b80\u5316\u6a21\u677f\u4ee3\u7801\u91cf\u3002\u5f53\u524d\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b\uff08Plain Object\uff09")),(0,o.kt)("h2",{id:"\u539f\u59cb\u6570\u636e\u7c7b\u578b"},"\u539f\u59cb\u6570\u636e\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({ state: 1 });\n")),(0,o.kt)("p",null,"\u5982\u4e0a\u6211\u4eec\u4ec5\u7528\u4e00\u884c\u5c31\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel"),"\u3002\u4f7f\u7528 Model \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    // \u589e\u52a0 1\n    actions.setState(state + 1);\n  }, []);\n}\n")),(0,o.kt)("h2",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 State \u4e3a\u6570\u7ec4\u7c7b\u578b\u65f6\uff0c\u81ea\u52a8\u751f\u6210 Actions \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({ state: [] });\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.push(1);\n    actions.pop();\n    actions.shift();\n    actions.unshift(1);\n    actions.concat([1]);\n    actions.splice(0, 1, 2);\n    actions.filter(value => value > 1);\n  }, []);\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 JavaScript Array \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u4fee\u6539 State\u3002"),(0,o.kt)("h2",{id:"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b"},"\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53 State \u4e3a\u7b80\u5355\u5bf9\u8c61\u7c7b\u578b\u65f6\uff0c\u81ea\u52a8\u751f\u6210 Actions \u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const countModel = model('count').define({\n  state: {\n    a: 1,\n    b: [],\n    c: {},\n  },\n});\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB([1]);\n    actions.setC({ a: 1 });\n  }, []);\n}\n")),(0,o.kt)("p",null,"\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"c")," \u4e09\u4e2a\u4e0d\u540c\u7684\u5b57\u6bb5\u5206\u522b\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"setA"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"setB"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"setC")," \u4e09\u4e2a Actions\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5f53\u7528\u6237\u81ea\u5b9a\u4e49\u7684 Action \u548c Modern.js \u81ea\u52a8\u751f\u6210\u7684 Action \u540d\u5b57\u4e00\u81f4\u65f6\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u7684 Action \u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u4f8b\u5982\uff0c\n\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"countModel")," \u4e2d\u5df2\u7ecf\u81ea\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"setA")," \u8fd9\u4e2a Action\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"actions.setA()")," \u65f6\uff0c\u6700\u7ec8\u6267\u884c\u7684\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"setA"),"\u3002"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/auto-actions"},"\u8fd9\u91cc"),"\u3002"))))}d.isMDXComponent=!0}}]);