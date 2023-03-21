(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_debug_inspector_md"],{67144:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},toc:function(){return i},title:function(){return a},default:function(){return t}});var r=n("12151"),l=n("21447");let c=void 0,i=[{id:"介绍",text:"介绍",depth:2},{id:"启用",text:"启用",depth:2},{id:"调试面板",text:"调试面板",depth:2},{id:"配置预览模式",text:"配置预览模式",depth:3},{id:"列表模式",text:"列表模式",depth:3},{id:"loader-统计数据",text:"Loader 统计数据",depth:3},{id:"依赖图模式",text:"依赖图模式",depth:3}],a="使用 Webpack Inspector";function o(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",img:"img"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"使用-webpack-inspector",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-webpack-inspector",children:"#"}),"使用 Webpack Inspector"]}),"\n",(0,r.jsxs)(s.p,{children:["Builder 内置了 ",(0,r.jsx)(s.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," 来辅助调试 webpack 构建问题。"]}),"\n",(0,r.jsxs)(s.h2,{id:"介绍",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,r.jsx)(s.p,{children:"由于 webpack 内部的工作流程比较黑盒，在使用 webpack 时，我们常常会遇到如下的一些问题:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"在使用上层框架时，不知道最终生成的 webpack 配置包含哪些内容。"}),"\n",(0,r.jsx)(s.li,{children:"每个模块会经过不同的 loader 处理，经过各个 loader 的编译结果难以感知。"}),"\n",(0,r.jsx)(s.li,{children:"难以感知 webpack 各个编译环节 (比如 babel-loader、ts-loader) 的耗时情况。"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["为了更方便地进行 webpack 项目的错误排查、性能分析及 loader 开发，我们在 Builder 中内置了 ",(0,r.jsx)(s.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," 工具。"]}),"\n",(0,r.jsxs)(s.h2,{id:"启用",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#启用",children:"#"}),"启用"]}),"\n",(0,r.jsxs)(s.p,{children:["你可以通过 ",(0,r.jsx)(s.a,{href:"/builder/api/config-tools.html#toolsinspector",children:"tools.inspector"})," 配置项来开启 webpack inspector:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    inspector"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(s.p,{children:"为了避免 inspector 影响正常开发，建议配置仅在 DEBUG 时开启 inspector："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    inspector"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DEBUG"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {} "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["添加以上配置后，当你执行 ",(0,r.jsx)(s.code,{children:"DEBUG=true pnpm dev"})," 时，Builder 会在编译完成后启动 inspector，此时 Shell 中可以看到如下信息："]}),"\n",(0,r.jsxs)(s.div,{className:"language-shell",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"info    Starting dev server..."})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"【Webpack Inspector】\uD83D\uDD25 started at http://localhost:3333"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["打开 ",(0,r.jsx)(s.code,{children:"http://localhost:3333"})," 地址，即可访问 inspector 的调试面板。"]}),"\n",(0,r.jsxs)(s.h2,{id:"调试面板",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#调试面板",children:"#"}),"调试面板"]}),"\n",(0,r.jsx)(s.p,{children:"Inspector 的调试面板提供了多种模式，你可以通过右上角的开关进行切换。"}),"\n",(0,r.jsxs)(s.h3,{id:"配置预览模式",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#配置预览模式",children:"#"}),"配置预览模式"]}),"\n",(0,r.jsx)(s.p,{children:"面板的默认模式为配置预览模式。此模式下可以查看 webpack 内部所有的配置信息，配置对象可自由展开和折叠:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""})}),"\n",(0,r.jsxs)(s.h3,{id:"列表模式",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#列表模式",children:"#"}),"列表模式"]}),"\n",(0,r.jsx)(s.p,{children:"此模式下会展示出所有的模块信息:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""})}),"\n",(0,r.jsx)(s.p,{children:"点击列表项会出现模块的编译详情信息:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""})}),"\n",(0,r.jsxs)(s.h3,{id:"loader-统计数据",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-统计数据",children:"#"}),"Loader 统计数据"]}),"\n",(0,r.jsx)(s.p,{children:"点击如下的开关，可以查看 Loader 的统计数据:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""})}),"\n",(0,r.jsxs)(s.h3,{id:"依赖图模式",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖图模式",children:"#"}),"依赖图模式"]}),"\n",(0,r.jsx)(s.p,{children:"此模式下会展示出所有模块的依赖关系："}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""})}),"\n",(0,r.jsx)(s.p,{children:"点击图中的节点也会呈现具体模块的编译详情："}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""})}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\n出于性能考虑，模块数量 > 100 时不会展示依赖图。"})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);