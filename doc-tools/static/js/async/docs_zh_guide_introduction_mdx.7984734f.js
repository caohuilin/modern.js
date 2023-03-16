(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_introduction_mdx"],{23333:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return l},title:function(){return c},default:function(){return a}});var r=n("12151"),i=n("21447");let o=void 0,l=[{id:"定位",text:"定位",depth:2},{id:"功能特性",text:"功能特性",depth:2},{id:"支持-mdx-渲染",text:"支持 MDX 渲染",depth:3},{id:"支持全文搜索",text:"支持全文搜索",depth:3},{id:"支持国际化i18n",text:"支持国际化(I18n)",depth:3},{id:"代码块高亮",text:"代码块高亮",depth:3},{id:"支持自定义主题",text:"支持自定义主题",depth:3},{id:"支持插件机制",text:"支持插件机制",depth:3}],c="介绍";function t(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",code:"code",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"介绍",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,r.jsxs)(s.h2,{id:"定位",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#定位",children:"#"}),"定位"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js Doc 是一个面向",(0,r.jsx)(s.strong,{children:"文档站场景"}),"的前端框架，它的目标是给开发者提供一个",(0,r.jsx)(s.code,{children:"简单"}),"、",(0,r.jsx)(s.code,{children:"高效"}),"、",(0,r.jsx)(s.code,{children:"可扩展"}),"的文档站解决方案。"]}),"\n",(0,r.jsxs)(s.p,{children:["该文档框架的初衷是给公司内部的技术产品提供文档站搭建的解决方案，并满足内部的一些特殊需求，如",(0,r.jsx)(s.code,{children:"跨站点搜索服务"}),"等。而对于常见的文档站搭建需求，我们也做了比较完整的支持，比如",(0,r.jsx)(s.strong,{children:"支持多语言"}),"、",(0,r.jsx)(s.strong,{children:"全文搜索"}),"、",(0,r.jsx)(s.strong,{children:"自定义主题"}),"等等。"]}),"\n",(0,r.jsxs)(s.p,{children:["同时，框架基于 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"nofollow",children:"Modern.js Builder"})," 来进行项目构建，内置多种构建优化策略，提供良好的开发体验，并在不久的将来通过 Modern.js Builder 接入下一代构建引擎 rspack。"]}),"\n",(0,r.jsxs)(s.h2,{id:"功能特性",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#功能特性",children:"#"}),"功能特性"]}),"\n",(0,r.jsxs)(s.h3,{id:"支持-mdx-渲染",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-mdx-渲染",children:"#"}),"支持 MDX 渲染"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js Doc 基于 ",(0,r.jsx)(s.a,{href:"https://mdxjs.com/",target:"_blank",rel:"nofollow",children:"MDX"})," 来进行 Markdown 语法的扩展，支持在 Markdown 中使用 React 组件，同时支持在 Markdown 中使用 JSX 语法，语法上更加灵活。"]}),"\n",(0,r.jsxs)(s.p,{children:["语法详情请参考 ",(0,r.jsx)(s.a,{href:"/doc-tools/zh/guide/use-mdx.html",children:"MDX 开发"})," 小节。"]}),"\n",(0,r.jsxs)(s.h3,{id:"支持全文搜索",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#支持全文搜索",children:"#"}),"支持全文搜索"]}),"\n",(0,r.jsx)(s.p,{children:"基于开源 FlexSearch 搜索引擎，提供开箱即用的文档搜索能力。"}),"\n",(0,r.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-16_21-17-46.jpg"}),"\n",(0,r.jsxs)(s.h3,{id:"支持国际化i18n",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#支持国际化i18n",children:"#"}),"支持国际化(I18n)"]}),"\n",(0,r.jsx)(s.p,{children:"内置国际化支持，支持多语言切换，且支持多语言内容搜索。"}),"\n",(0,r.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-16_21-31-46.jpg"}),"\n",(0,r.jsxs)(s.h3,{id:"代码块高亮",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块高亮",children:"#"}),"代码块高亮"]}),"\n",(0,r.jsxs)(s.p,{children:["基于 ",(0,r.jsx)(s.a,{href:"https://github.com/shikijs/shiki",target:"_blank",rel:"nofollow",children:"Shiki"})," 来进行编译时代码着色，支持多种代码语言高亮。如:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" docTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/doc-tools'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" path "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'path'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  doc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    root"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".join"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(__dirname"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'docs'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"支持自定义主题",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#支持自定义主题",children:"#"}),"支持自定义主题"]}),"\n",(0,r.jsxs)(s.p,{children:["支持自定义主题，可以通过配置文件来进行主题的定制，详情请参考 ",(0,r.jsx)(s.a,{href:"/doc-tools/zh/advanced/custom-theme.html",children:"主题定制"}),"。"]}),"\n",(0,r.jsxs)(s.h3,{id:"支持插件机制",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#支持插件机制",children:"#"}),"支持插件机制"]}),"\n",(0,r.jsxs)(s.p,{children:["内部设计了插件系统，你可以通过自定义插件来扩展 Modern.js Doc 的功能，详情请参考 ",(0,r.jsx)(s.a,{href:"/doc-tools/zh/advanced/plugin-system.html",children:"插件机制"}),"。"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);