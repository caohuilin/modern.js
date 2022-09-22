"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[94161],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(86215),a=(n(49231),n(54852));const i={sidebar_position:3},o="\u6a21\u5757",l={unversionedId:"apis/generator/config/module",id:"apis/generator/config/module",title:"\u6a21\u5757",description:"\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u5305\u542b\u901a\u7528\u914d\u7f6e\uff0c\u901a\u7528\u914d\u7f6e\u53ef\u67e5\u770b\u901a\u7528\u914d\u7f6e\u3002",source:"@site/docs/apis/generator/config/module.md",sourceDirName:"apis/generator/config",slug:"/apis/generator/config/module",permalink:"/docs/apis/generator/config/module",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisGeneratorSidebar",previous:{title:"\u5e94\u7528",permalink:"/docs/apis/generator/config/mwa"},next:{title:"Monorepo",permalink:"/docs/apis/generator/config/monorepo"}},p={},c=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"Package-Name",id:"package-name",level:3},{value:"New \u547d\u4ee4",id:"new-\u547d\u4ee4",level:2},{value:"Action-Type",id:"action-type",level:3},{value:"Function",id:"function",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,a.kt)("p",null,"\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u5305\u542b\u901a\u7528\u914d\u7f6e\uff0c\u901a\u7528\u914d\u7f6e\u53ef\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce#%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE"},"\u901a\u7528\u914d\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"\u521b\u5efa\u9879\u76ee\u65f6\u914d\u7f6e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u65f6\u4f7f\u7528\u7684\u914d\u7f6e\uff0c\u4e5f\u662f\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u4fee\u6539\u548c\u6dfb\u52a0 input \u65f6\u4f7f\u7528\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"package-name"},"Package-Name"),(0,a.kt)("p",null,"\u5305\u540d(packageName)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e3a\u8f93\u5165\u503c\u3002"),(0,a.kt)("h2",{id:"new-\u547d\u4ee4"},"New \u547d\u4ee4"),(0,a.kt)("p",null,"\u6a21\u5757\u9879\u76ee\u4e2d new \u547d\u4ee4\u914d\u7f6e\uff0c \u53ef\u4ee5\u5728\u6267\u884c new \u547d\u4ee4\u65f6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u914d\u7f6e\uff0c\u4e5f\u53ef\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u521b\u5efa\u5143\u7d20\u548c\u542f\u7528\u529f\u80fd\u65f6\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"action-type"},"Action-Type"),(0,a.kt)("p",null,"New \u547d\u4ee4\u7684\u64cd\u4f5c\u7c7b\u578b(actionType)\uff0c\u7c7b\u578b\u652f\u6301\u4e00\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function \u542f\u7528\u529f\u80fd")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u4f7f\u7528\u542f\u7528\u529f\u80fd\u548c\u521b\u5efa\u5143\u7d20\u65f6\u4e0d\u9700\u8981\u8be5\u53c2\u6570\uff0c\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u81ea\u52a8\u6dfb\u52a0\u8be5\u53c2\u6570\u3002"))),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u53ef\u9009\u529f\u80fd\u540d\u79f0(function)\uff0c\u652f\u6301 11 \u4e2a\u9009\u9879:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tailwind CSS(tailwindcss)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Less(less)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sass(sass)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Storybook(mwa_storybook)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Runtime API(runtimeApi)"))))}u.isMDXComponent=!0}}]);