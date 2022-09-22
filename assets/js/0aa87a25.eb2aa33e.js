"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[20572],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(86215),a=(n(49231),n(54852));const s={sidebar_position:3,title:"\u5b9a\u5236 BFF Server"},o=void 0,p={unversionedId:"guides/features/server-side/bff/bff-server",id:"guides/features/server-side/bff/bff-server",title:"\u5b9a\u5236 BFF Server",description:"BFF Server \u4e0e\u5e94\u7528\u4e00\u4f53\uff0c\u5171\u540c\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u90e8\u7f72\uff0c\u5f00\u53d1\u8005\u901a\u5e38\u53ea\u9700\u8981\u5199\u51fd\u6570\u5373\u53ef\u3002\u4f46\u6709\u65f6\uff0c\u5e94\u7528\u4e2d\u4f1a\u5b58\u5728\u4e00\u4e9b BFF \u51fd\u6570\u7684\u901a\u7528\u524d\u7f6e\u903b\u8f91\uff0c\u4f8b\u5982\u6743\u9650\u6821\u9a8c\u3002",source:"@site/docs/guides/features/server-side/bff/bff-server.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/bff-server",permalink:"/docs/guides/features/server-side/bff/bff-server",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5b9a\u5236 BFF Server"},sidebar:"guidesSidebar",previous:{title:"BFF \u51fd\u6570",permalink:"/docs/guides/features/server-side/bff/function"},next:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/docs/guides/features/server-side/bff/frameworks"}},i={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BFF Server \u4e0e\u5e94\u7528\u4e00\u4f53\uff0c\u5171\u540c\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u90e8\u7f72\uff0c\u5f00\u53d1\u8005\u901a\u5e38\u53ea\u9700\u8981\u5199\u51fd\u6570\u5373\u53ef\u3002\u4f46\u6709\u65f6\uff0c\u5e94\u7528\u4e2d\u4f1a\u5b58\u5728\u4e00\u4e9b BFF \u51fd\u6570\u7684\u901a\u7528\u524d\u7f6e\u903b\u8f91\uff0c\u4f8b\u5982\u6743\u9650\u6821\u9a8c\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/features/server-side/web/web-server"},"\u4e00\u4f53\u5316 Web \u4e13\u9898"),"\u4e2d\u63d0\u5230\u8fc7\uff0cModern.js \u652f\u6301\u5b9a\u5236 Web Server\u3002\u540c\u6837\uff0cModern.js \u4e5f\u4e3a BFF Server \u63d0\u4f9b\u4e86\u6269\u5c55\u80fd\u529b\u3002"),(0,a.kt)("p",null,"Modern.js \u5141\u8bb8\u5f00\u53d1\u8005\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts")," \u6587\u4ef6\uff0c\u5728\u8be5\u6587\u4ef6\u4e2d\u5bf9\u5b9a\u5236\u81ea\u5df1\u7684 BFF Server\u3002"),(0,a.kt)("p",null,"\u548c Web Server \u76f8\u540c\uff0c\u9ed8\u8ba4\u652f\u6301\u4e86 4 \u79cd\u4e3b\u6d41\u7684 Node.js Server \u6846\u67b6\uff1aExpress\u3001Koa\u3001Egg\u3001Nest\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u504f\u597d\uff0c\u9009\u62e9\u5408\u9002\u7684\u6846\u67b6\u6765\u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5148\u4ee5 Express \u4e3a\u4f8b\u6765\u5c55\u793a\u4e00\u4e0b\u7528\u6cd5\uff0c\u4e0b\u4e00\u7ae0\u8282\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u5404\u4e2a\u6846\u67b6\u6269\u5c55\u7684\u5199\u6cd5\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa\u9879\u76ee\uff0c\u5e76",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c09-bff/9.2-enable-bff"},"\u5f00\u542f BFF \u529f\u80fd"),"\uff0c\u8fd9\u65f6\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 _app.ts\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 info\n\u2502       \u2514\u2500\u2500 [type].ts\n\u251c\u2500\u2500 modern.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 App.css\n\u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"api/login.ts")," \u6587\u4ef6\u7528\u4e8e\u5b9e\u73b0\u767b\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@modern-js/runtime/server';\n\nexport const post = async () => {\n  const ctx = useContext();\n  ctx.res.cookie('sid', Math.random());\n\n  return { code: 0, message: 'OK' };\n};\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," API \u7528\u4e8e\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/bff-server/use-context"},"API \u6587\u6863"),"\u3002"))),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"api/_app.ts"),"\uff0c\u624b\u5199\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u7528\u4e8e\u6743\u9650\u6821\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n")),(0,a.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a\u666e\u901a\u7684\u63a5\u53e3\u51fd\u6570\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default async () => {\n  return 'Hello Modern.js';\n};\n")),(0,a.kt)("p",null,"\u6700\u540e\u5728\u524d\u7aef ",(0,a.kt)("inlineCode",{parentName:"p"},"/src/App.tsx")," \u6dfb\u52a0\u63a5\u53e3\u7684\u8bbf\u95ee\u4ee3\u7801\uff0c\u76f4\u63a5\u4f7f\u7528\u4e00\u4f53\u5316\u8c03\u7528\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n")),(0,a.kt)("p",null,"\u7136\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u542f\u52a8\u9879\u76ee\uff0c\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," \u4f1a\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello")," \u7684\u8bf7\u6c42\u88ab\u62e6\u622a\u4e86\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})),(0,a.kt)("p",null,"\u6211\u4eec\u518d\u4fee\u6539\u524d\u7aef\u4ee3\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u5728\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello")," \u524d\u5148\u8c03\u7528\u767b\u5f55\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n")),(0,a.kt)("p",null,"\u5237\u65b0\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hello")," \u8bbf\u95ee\u6210\u529f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})),(0,a.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u6a21\u62df\u4e86\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/_app.ts")," \u4e2d\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u4e86\u7b80\u6613\u7684\u767b\u5f55\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u540c\u6837\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2a\u94a9\u5b50\u6587\u4ef6\u4e2d\u5b9e\u73b0\u5176\u4ed6\u529f\u80fd\u6765\u6269\u5c55 BFF Server\u3002"))}d.isMDXComponent=!0}}]);