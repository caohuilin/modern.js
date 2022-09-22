"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[50379],{54852:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||p;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(86215),a=(t(49231),t(54852));const p={title:"\u7528 new \u547d\u4ee4\u521b\u5efa\u5165\u53e3\u200b\u200b\u200b"},o=void 0,i={unversionedId:"guides/tutorials/c07-app-entry/7.2-add-entry-in-cli",id:"guides/tutorials/c07-app-entry/7.2-add-entry-in-cli",title:"\u7528 new \u547d\u4ee4\u521b\u5efa\u5165\u53e3\u200b\u200b\u200b",description:"Modern.js \u652f\u6301\u81ea\u52a8\u521b\u5efa\u65b0\u5165\u53e3\uff0c\u524d\u9762\u7684\u7ae0\u8282\u4e2d\u63d0\u5230\u8fc7\uff0cpnpm run new \u53ef\u4ee5\u542f\u7528\u53ef\u9009\u529f\u80fd\u3002",source:"@site/docs/guides/tutorials/c07-app-entry/7.2-add-entry-in-cli.md",sourceDirName:"guides/tutorials/c07-app-entry",slug:"/guides/tutorials/c07-app-entry/7.2-add-entry-in-cli",permalink:"/docs/guides/tutorials/c07-app-entry/7.2-add-entry-in-cli",tags:[],version:"current",frontMatter:{title:"\u7528 new \u547d\u4ee4\u521b\u5efa\u5165\u53e3\u200b\u200b\u200b"},sidebar:"guidesSidebar",previous:{title:"\u5165\u53e3\u7684\u7528\u9014\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c07-app-entry/7.1-intro"},next:{title:"\u7ba1\u7406\u5e94\u7528\u5165\u53e3\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c07-app-entry/7.3-manage-entries-by-hand"}},l={},s=[{value:"\u624b\u52a8\u8c03\u6574\u5e94\u7528\u5165\u53e3",id:"\u624b\u52a8\u8c03\u6574\u5e94\u7528\u5165\u53e3",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u652f\u6301\u81ea\u52a8\u521b\u5efa\u65b0\u5165\u53e3\uff0c\u524d\u9762\u7684\u7ae0\u8282\u4e2d\u63d0\u5230\u8fc7\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u53ef\u4ee5\u542f\u7528\u53ef\u9009\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u521b\u5efa\u65b0\u7684\u5de5\u7a0b\u5143\u7d20\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\n\u276f \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n  \u542f\u7528\u53ef\u9009\u529f\u80fd\n\n# \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n\u276f \u65b0\u5efa\u300c\u5e94\u7528\u5165\u53e3\u300d\n  \u65b0\u5efa\u300cServer \u81ea\u5b9a\u4e49\u300d\u6e90\u7801\u76ee\u5f55\n\n# \u8bf7\u586b\u5199\u5165\u53e3\u540d\u79f0\n- landing-page\n\n# \u662f\u5426\u9700\u8981\u8c03\u6574\u9ed8\u8ba4\u914d\u7f6e\n\u276f \u5426\n  \u662f\n")),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c\u6210\uff0c\u9879\u76ee\u4f1a\u53d8\u6210\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 hello-modern/\n\u2502   \u2502   \u251c\u2500\u2500 components/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Avatar/\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.stories.tsx\n\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Item/\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 index.test.tsx\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u251c\u2500\u2500 styles/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.css\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 landing-page/\n\u2502   \u2502   \u251c\u2500\u2500 App.css\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8054\u7cfb\u4eba\u5217\u8868\u5e94\u7528\u7684\u6587\u4ef6\uff0c\u90fd\u88ab\u81ea\u52a8\u91cd\u6784\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hello-modern/")," \u91cc\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u65b0\u5efa\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/landing-page/"),"\uff0c\u91cc\u9762\u540c\u6837\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u547d\u4ee4\u53ea\u505a\u4e86\u8fd9\u4e9b\u4e8b\uff0c\u6240\u4ee5\u4f60\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u624b\u52a8\u521b\u5efa\u65b0\u5165\u53e3\u6216\u4fee\u6539\u5165\u53e3\uff09"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u663e\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/landing-page.png",alt:"design"})),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/"),"\uff0c\u53ef\u4ee5\u50cf\u4e4b\u524d\u4e00\u6837\u770b\u5230\u8054\u7cfb\u4eba\u5217\u8868\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page"),"\uff0c\u53ef\u4ee5\u770b\u5230\u521a\u521b\u5efa\u7684\u65b0\u5165\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page")," \u7684\u9875\u9762\uff08Modern.js \u81ea\u52a8\u751f\u6210\u7684\u9ed8\u8ba4\u9875\u9762\uff09\u3002"),(0,a.kt)("h2",{id:"\u624b\u52a8\u8c03\u6574\u5e94\u7528\u5165\u53e3"},"\u624b\u52a8\u8c03\u6574\u5e94\u7528\u5165\u53e3"),(0,a.kt)("p",null,"Modern.js \u6846\u67b6\u7684\u8bbe\u8ba1\u539f\u5219\u4e4b\u4e00\u662f\u3010",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Convention_over_configuration"},"\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\uff08Convention over Configuration\uff09"),"\u3011\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u6309\u7ea6\u5b9a\u76f4\u63a5\u5199\u4ee3\u7801\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5c31\u662f\u4e00\u79cd\u7ea6\u5b9a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/hello-modern/")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"src/landing-page/")," \u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a\u4e24\u4e2a\u5e94\u7528\u5165\u53e3\uff1ahello-modern \u548c landing-page\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hello-modern/")," \u7684\u76ee\u5f55\u540d\u8ddf\u9879\u76ee\u540d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\uff09\u4e00\u81f4\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u9879\u76ee",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u5165\u53e3"),"\uff0c\u9879\u76ee URL \u7684\u6839\u8def\u5f84\uff08\u5f00\u53d1\u73af\u5883\u91cc\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/"),"\uff09\u4f1a\u81ea\u52a8\u6307\u5411\u4e3b\u5165\u53e3\u3002"),(0,a.kt)("p",null,"\u5176\u4ed6\u5165\u53e3\u7684 URL\uff0c\u662f\u5728\u6839\u8def\u5f84\u540e\u8ffd\u52a0\u5165\u53e3\u540d\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/landing-page"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"src/")," \u4e0b\u5982\u679c\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),"\uff0c\u5c31\u8ba4\u4e3a\u8fd9\u4e2a\u5e94\u7528\u5de5\u7a0b\u662f\u5355\u5165\u53e3\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," \u4e0b\u7684\u5176\u4ed6\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u90fd\u4f1a\u88ab\u89c6\u4e3a\u5165\u53e3\u5185\u90e8\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"src/")," \u4e0b\u5982\u679c\u6ca1\u6709  ",(0,a.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),"\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," ",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u7ea7"),"\u76ee\u5f55\u91cc\uff0c\u5982\u679c\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),"\uff0c\u8fd9\u4e2a\u76ee\u5f55\u5c31\u4f1a\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5e94\u7528\u5165\u53e3\u3002"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"App.jsx")," \u88ab\u770b\u4f5c\u7ea6\u5b9a\u4e2d",(0,a.kt)("strong",{parentName:"p"},"\u6807\u8bc6"),"\uff0c\u4e5f\u6709\u5176\u4ed6\u5f62\u5f0f\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6807\u8bc6"),"\uff0c\u4e4b\u540e\u7684\u7ae0\u8282\u4e2d\u4f1a\u7ee7\u7eed\u4ecb\u7ecd\u3002"))),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hello-modern/App.tsx")," \u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/hello-modern src/contacts\n")),(0,a.kt)("p",null,"\u518d\u6b21\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u7ed3\u679c\u53d8\u6210\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/contacts.png",alt:"design"})),(0,a.kt)("p",null,"\u73b0\u5728\u4e0d\u518d\u6709\u4e3b\u5165\u53e3\uff0c\u8054\u7cfb\u4eba\u5217\u8868\u73b0\u5728\u662f\u4e00\u4e2a\u666e\u901a\u5165\u53e3\uff0c\u9700\u8981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts")," \u8bbf\u95ee\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c07/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);