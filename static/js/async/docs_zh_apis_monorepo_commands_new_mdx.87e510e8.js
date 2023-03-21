(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_monorepo_commands_new_mdx"],{92313:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return c},toc:function(){return i},title:function(){return o},default:function(){return t}});var r=n("12151"),l=n("21447");let c={sidebar_position:1},i=[],o="new";function a(s){let e=Object.assign({h1:"h1",a:"a",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"new",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#new",children:"#"}),"new"]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Usage: modern new [options]"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Monorepo 创建子项目"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Options:"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  -d, --debug            开启 Debug 模式，打印调试日志信息 (default: false)"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  -c, --config "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"config"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  生成器运行默认配置(JSON 字符串)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --dist-tag "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"tag"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       生成器使用特殊的 npm Tag 版本"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --registry             生成器运行过程中定制 npm Registry"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  -h, --help             display "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"help"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"command"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"modern new"})," 命令在 monorepo 中可以用来添加应用工程和可复用的模块："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ modern new"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想创建的工程类型 (Use arrow keys)"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"❯ Web 应用"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Web 应用（测试）"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Npm 模块"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Npm 模块（内部）"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["应用工程默认会添加到 ",(0,r.jsx)(e.code,{children:"apps"})," 目录， 测试应用会添加到 ",(0,r.jsx)(e.code,{children:"examples"})," 目录，公共模块默认会添加到 ",(0,r.jsx)(e.code,{children:"packages"})," 目录， 内部模块默认会添加到 ",(0,r.jsx)(e.code,{children:"features"})," 目录。"]}),"\n",(0,r.jsx)(e.p,{children:"内部模块在 monorepo 的应用里面使用时，可以无需构建直接使用源码。"}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive caution",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(e.div,{className:"modern-directive-content",children:[(0,r.jsxs)(e.p,{children:["\n",(0,r.jsx)(e.code,{children:"--config"})," 参数对应参数值需要使用 JSON 字符串。"]}),(0,r.jsxs)(e.p,{children:["pnpm 暂不支持使用 JSON 字符串作为参数值，可使用 ",(0,r.jsx)(e.code,{children:"npm new"})," 开启相关功能。【",(0,r.jsx)(e.a,{href:"https://github.com/pnpm/pnpm/issues/3876",target:"_blank",rel:"noopener noreferrer",children:"相关 Issue"}),"】"]})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(a,s)})):a(s)}}}]);