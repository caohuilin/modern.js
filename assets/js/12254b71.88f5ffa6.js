"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[15573],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,p(p({ref:t},m),{},{components:n})):a.createElement(f,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(86215),r=(n(49231),n(54852));const o={sidebar_position:5},p="\u5e94\u7528\u9879\u76ee\u7684\u90e8\u7f72",i={unversionedId:"guides/features/monorepo/deploy",id:"guides/features/monorepo/deploy",title:"\u5e94\u7528\u9879\u76ee\u7684\u90e8\u7f72",description:"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u4e2d\u5bf9\u5e94\u7528\u9879\u76ee\u8fdb\u884c\u90e8\u7f72\u3002",source:"@site/docs/guides/features/monorepo/deploy.md",sourceDirName:"guides/features/monorepo",slug:"/guides/features/monorepo/deploy",permalink:"/docs/guides/features/monorepo/deploy",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"\u53ef\u590d\u7528\u6a21\u5757\u7684\u53d1\u5e03",permalink:"/docs/guides/features/monorepo/publish"},next:{title:"\u8ba4\u8bc6 Changesets",permalink:"/docs/guides/features/changesets/introduce"}},s={},l=[],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e94\u7528\u9879\u76ee\u7684\u90e8\u7f72"},"\u5e94\u7528\u9879\u76ee\u7684\u90e8\u7f72"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u4e2d\u5bf9\u5e94\u7528\u9879\u76ee\u8fdb\u884c\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u6240\u8c13\u7684 \u201c\u5728 Monorepo \u4e2d\u5bf9\u5e94\u7528\u9879\u76ee\u8fdb\u884c\u90e8\u7f72\u201d \u66f4\u50cf\u662f\u5e94\u7528\u9879\u76ee\u90e8\u7f72\u5230\u670d\u52a1\u5668\u7684\u524d\u7f6e\u5de5\u4f5c\u3002\u5e94\u7528\u9879\u76ee\u7684\u529f\u80fd\u4e00\u822c\u6765\u81ea\u4ee5\u4e0b\u90e8\u5206"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea\u8eab\u7684\u4ee3\u7801\u903b\u8f91\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u7684\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"Monorepo \u4e2d\u5176\u4ed6\u5b50\u9879\u76ee\u63d0\u4f9b\u7684\u903b\u8f91\u529f\u80fd")),(0,r.kt)("p",null,"\u800c\u5728\u5c06\u5e94\u7528\u9879\u76ee\u653e\u5230\u90e8\u7f72\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u9700\u8981\u5bf9\u5e94\u7528\u9879\u76ee\u3001\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4ee5\u53ca\u5b83\u6240\u4f9d\u8d56\u7684\u5b50\u9879\u76ee\u505a\u6574\u5408\u5904\u7406\u3002"),(0,r.kt)("p",null,"Modern.js \u4e3a Monorepo \u5de5\u7a0b\u63d0\u4f9b\u4e86\u90e8\u7f72\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u4e3a\u8981\u90e8\u7f72\u7684\u9879\u76ee\u751f\u6210\u4e00\u4e2a\u6700\u5c0f\u96c6\u5408\u7684 Monorepo\uff0c\u5728\u8fd9\u4e2a Monorepo \u5f53\u4e2d\u5305\u542b\u5e94\u7528\u9879\u76ee\u4ee5\u53ca\u5176\u4f9d\u8d56\u7684\u5b50\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/monorepo/sub-project-interface"},"\u5b50\u9879\u76ee\u8054\u8c03")," \u7ae0\u8282\u7684\u4f8b\u5b50\u4e3a\u4f8b\uff0c\u5982\u679c\u8981\u53d1\u5e03 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u5e94\u7528\u9879\u76ee\uff0c\u90a3\u4e48\u5728 Monorepo \u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm deploy app\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"app")," \u4e3a\u5e94\u7528\u9879\u76ee\u7684\u9879\u76ee\u540d\u79f0\uff0c\u6216\u8005\u8bf4\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5bf9\u5e94\u7684\u503c\u3002"))),(0,r.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u4e4b\u540e\uff0c\u9996\u5148\u4f1a\u5728 Monorepo \u6839\u76ee\u5f55\u4e0b\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5e94\u7528\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"features/internal-lib"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"packages/components"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\u5c31\u662f\u9700\u8981\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u7684\u76ee\u5f55\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u53c2\u6570\u8fdb\u884c\u8def\u5f84\u4fee\u6539\u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/monorepo/commands/deploy"},"deploy \u547d\u4ee4"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/guides/monorepo-output.png",alt:null})),(0,r.kt)("p",null,"\u7136\u540e\u4f1a\u81ea\u52a8\u8fdb\u884c\u4f9d\u8d56\u7684\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u5f53 deploy \u547d\u4ee4\u8fd0\u884c\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," \u653e\u5230\u90e8\u7f72\u9879\u76ee\u7684\u670d\u52a1\u5668\u4e0a\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 Yarn \u7684 Monorepo \u4e2d\uff0c\u63a8\u8350\u5168\u5c40\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," \u4f5c\u4e3a Monorepo \u5b50\u9879\u76ee\u989d\u5916\u7684\u7ba1\u7406\u5de5\u5177\u3002\u7531\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/"},"Yarn 1 (Classic) ")," \u5728\u5b89\u88c5\u4f9d\u8d56\u7684\u65f6\u5019\uff0c\u4e0d\u4f1a\u89e6\u53d1\u5b50\u9879\u76ee\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/scripts#life-cycle-scripts"},"Life Cycle Scripts"),"\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u4f7f\u7528 Lerna \u5b8c\u6210\u8fd9\u7c7b\u4e8b\u60c5\u3002"))))}c.isMDXComponent=!0}}]);