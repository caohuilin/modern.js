"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[83536,62899],{54852:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,k=l["".concat(m,".").concat(u)]||l[u]||c[u]||r;return t?a.createElement(k,p(p({ref:n},d),{},{components:t})):a.createElement(k,p({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},26946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=t(86215),o=(t(49231),t(54852)),r=t(41732);const p={sidebar_position:4},i=void 0,m={unversionedId:"apis/module/commands/new",id:"apis/module/commands/new",title:"new",description:"modern new \u547d\u4ee4\u5728\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u4e2d\u53ef\u4ee5\u7528\u6765\u542f\u7528 Less\u3001Sass \u6216 Storybook \u8c03\u8bd5\u7b49\u80fd\u529b:",source:"@site/docs/apis/module/commands/new.md",sourceDirName:"apis/module/commands",slug:"/apis/module/commands/new",permalink:"/docs/apis/module/commands/new",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisModuleSidebar",previous:{title:"test",permalink:"/docs/apis/module/commands/test"},next:{title:"lint",permalink:"/docs/apis/module/commands/lint"}},s={},d=[],c={toc:d};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern new [options]\n\n\u6a21\u5757\u5316\u5de5\u7a0b\u65b9\u6848\u4e2d\u6267\u884c\u751f\u6210\u5668\n\nOptions:\n  -d, --debug            \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  -c, --config <config>  \u751f\u6210\u5668\u8fd0\u884c\u9ed8\u8ba4\u914d\u7f6e(JSON \u5b57\u7b26\u4e32)\n  --dist-tag <tag>       \u751f\u6210\u5668\u4f7f\u7528\u7279\u6b8a\u7684 npm Tag \u7248\u672c\n  --registry             \u751f\u6210\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5b9a\u5236 npm Registry\n  -h, --help             display help for command\n")),(0,o.kt)(r.default,{mdxType:"CommandTip"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern new")," \u547d\u4ee4\u5728\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u4e2d\u53ef\u4ee5\u7528\u6765\u542f\u7528 Less\u3001Sass \u6216 Storybook \u8c03\u8bd5\u7b49\u80fd\u529b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd (Use arrow keys)\n\u276f \u542f\u7528 Tailwind CSS \u652f\u6301\n  \u542f\u7528 Less \u652f\u6301\n  \u542f\u7528 Sass \u652f\u6301\n  \u542f\u7528\u300cStorybook\u300d\n  \u542f\u7528\u300cRuntime API\u300d\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\u540e\uff0c\u56de\u8f66\u9009\u62e9\u5bf9\u5e94\u7684\u80fd\u529b\u5373\u53ef\u542f\u7528\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u5bf9\u5e94\u53c2\u6570\u503c\u9700\u8981\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",{parentName:"div"},"pnpm \u6682\u4e0d\u652f\u6301\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\u503c\uff0c\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm new")," \u5f00\u542f\u76f8\u5173\u529f\u80fd\u3002\u3010",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/3876"},"\u76f8\u5173 Issue"),"\u3011"))))}l.isMDXComponent=!0},41732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(86215),o=(t(49231),t(54852));const r={},p=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},m={},s=[],d={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}c.isMDXComponent=!0}}]);