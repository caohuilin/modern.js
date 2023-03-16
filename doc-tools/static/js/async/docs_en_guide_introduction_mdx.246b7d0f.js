(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_introduction_mdx"],{93850:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return t},toc:function(){return i},title:function(){return l},default:function(){return a}});var o=n("12151"),r=n("21447");let t=void 0,i=[{id:"position",text:"Position",depth:2},{id:"features",text:"Features",depth:2},{id:"support-mdx",text:"Support MDX",depth:3},{id:"support-full-text-search",text:"Support Full-Text Search",depth:3},{id:"support-i18n",text:"Support I18n",depth:3},{id:"code-block-syntax-highlighting",text:"Code Block Syntax Highlighting",depth:3},{id:"support-custom-theme",text:"Support Custom Theme",depth:3},{id:"support-plugin-system",text:"Support Plugin System",depth:3}],l="Introduction";function c(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",code:"code",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"introduction",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"}),"Introduction"]}),"\n",(0,o.jsxs)(s.h2,{id:"position",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#position",children:"#"}),"Position"]}),"\n",(0,o.jsxs)(s.p,{children:["Modern.js Doc is a front-end framework for ",(0,o.jsx)(s.strong,{children:"document site scenarios"}),", and its goal is to provide developers with a simple, efficient, and scalable document site solution."]}),"\n",(0,o.jsxs)(s.p,{children:["The original intention of this document framework is to provide a ducument solution for the company's internal technical products, and to meet some special internal needs, such as ",(0,o.jsx)(s.code,{children:"cross-site search service"}),". However, for common document site building needs, we have also provided relatively complete support, such as support for ",(0,o.jsx)(s.code,{children:"i18n"}),", ",(0,o.jsx)(s.code,{children:"full-text search"}),", ",(0,o.jsx)(s.code,{children:"custom themes"}),", and so on."]}),"\n",(0,o.jsxs)(s.p,{children:["At the same time, the framework is based on ",(0,o.jsx)(s.a,{href:"https://modernjs.dev/builder/",target:"_blank",rel:"nofollow",children:"Modern.js Builder"}),", with a variety of built-in optimization strategies to provide better DX. In the near future, we can access to Rust-based bundler ",(0,o.jsx)(s.strong,{children:"Rspack"})," through Modern.js Builder to make the build speed faster."]}),"\n",(0,o.jsxs)(s.h2,{id:"features",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),"\n",(0,o.jsxs)(s.h3,{id:"support-mdx",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#support-mdx",children:"#"}),"Support MDX"]}),"\n",(0,o.jsxs)(s.p,{children:["Modern.js Doc is based on ",(0,o.jsx)(s.a,{href:"https://mdxjs.com/",target:"_blank",rel:"nofollow",children:"MDX"})," to extend the Markdown syntax.It supports the use of React components in Markdown, and supports the use of JSX syntax in Markdown, which is more flexible in syntax."]}),"\n",(0,o.jsxs)(s.p,{children:["Please refer to the syntax details in ",(0,o.jsx)(s.a,{href:"/doc-tools/guide/use-mdx.html",children:"Use MDX"})]}),"\n",(0,o.jsxs)(s.h3,{id:"support-full-text-search",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#support-full-text-search",children:"#"}),"Support Full-Text Search"]}),"\n",(0,o.jsxs)(s.p,{children:["Based on the ",(0,o.jsx)(s.a,{href:"https://github.com/nextapps-de/flexsearch",target:"_blank",rel:"nofollow",children:"FlexSearch"})," search engine, it provides out-of-the-box document search capabilities."]}),"\n",(0,o.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-16_21-17-46.jpg"}),"\n",(0,o.jsxs)(s.h3,{id:"support-i18n",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#support-i18n",children:"#"}),"Support I18n"]}),"\n",(0,o.jsx)(s.p,{children:"Built-in i18n support, supports multi-language switching, and supports multi-language content search."}),"\n",(0,o.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/Xnip2023-02-16_21-31-46.jpg"}),"\n",(0,o.jsxs)(s.h3,{id:"code-block-syntax-highlighting",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#code-block-syntax-highlighting",children:"#"}),"Code Block Syntax Highlighting"]}),"\n",(0,o.jsxs)(s.p,{children:["Based on ",(0,o.jsx)(s.a,{href:"https://github.com/shikijs/shiki",target:"_blank",rel:"nofollow",children:"Shiki"})," for compile-time code coloring, it supports multiple code language highlighting. For example:"]}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" docTools"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/doc-tools'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" path "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'path'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  doc"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    root"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".join"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(__dirname"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'docs'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"docTools"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.h3,{id:"support-custom-theme",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#support-custom-theme",children:"#"}),"Support Custom Theme"]}),"\n",(0,o.jsxs)(s.p,{children:["Supports custom themes, which can be customized through configuration files, please refer to ",(0,o.jsx)(s.a,{href:"/doc-tools/advanced/custom-theme.html",children:"Theme Customization"})," for details."]}),"\n",(0,o.jsxs)(s.h3,{id:"support-plugin-system",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#support-plugin-system",children:"#"}),"Support Plugin System"]}),"\n",(0,o.jsxs)(s.p,{children:["You can extend the abilities of Modern.js Doc through custom plugins. For details, please refer to ",(0,o.jsx)(s.a,{href:"/doc-tools/advanced/plugin-system.html",children:"Plugin Mechanism"}),"."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);