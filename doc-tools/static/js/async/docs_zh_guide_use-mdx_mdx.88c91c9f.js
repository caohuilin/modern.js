(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_use-mdx_mdx"],{9586:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return c},title:function(){return a},default:function(){return t}});var l=n("12151"),r=n("21447");let i=void 0,c=[{id:"markdown",text:"Markdown",depth:2},{id:"使用组件",text:"使用组件",depth:2},{id:"front-matter",text:"Front Matter",depth:2},{id:"自定义容器",text:"自定义容器",depth:2},{id:"代码块",text:"代码块",depth:2}],a="使用 MDX";function o(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",blockquote:"blockquote",strong:"strong"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"使用-mdx",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-mdx",children:"#"}),"使用 MDX"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js Doc 支持 ",(0,l.jsx)(e.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),"，这是一种功能强大的内容开发方式。"]}),"\n",(0,l.jsxs)(e.h2,{id:"markdown",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"}),"Markdown"]}),"\n",(0,l.jsx)(e.p,{children:"MDX 是 Markdown 的超集，这意味着你可以像往常一样编写 Markdown 文件。例如："}),"\n",(0,l.jsxs)(e.div,{className:"language-md",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontStyle:"italic"},children:"# Hello World"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"使用组件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用组件",children:"#"}),"使用组件"]}),"\n",(0,l.jsxs)(e.p,{children:["当你想在 Markdown 文件中使用 React 组件时，你应该使用 ",(0,l.jsx)(e.code,{children:".mdx"})," 扩展名来命名你的文件。例如："]}),"\n",(0,l.jsxs)(e.div,{className:"language-mdx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"// docs/index.mdx"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { CustomComponent } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./custom'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"# Hello World"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"CustomComponent"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"front-matter",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"}),"Front Matter"]}),"\n",(0,l.jsx)(e.p,{children:"你可以在 Markdown 文件的开头添加 Front Matter，它是一个 YAML 格式的对象，用于定义一些元数据。例如："}),"\n",(0,l.jsxs)(e.div,{className:"language-mdx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"title"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Hello World"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"注意：默认情况下，Modern.js Doc 使用 h1 标题作为 html 的标题。"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"你还可以在正文中访问 Front Mattter 中定义的属性，例如："}),"\n",(0,l.jsxs)(e.div,{className:"language-mdx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"title"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Hello World"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)",fontStyle:"italic"},children:"# {frontmatter.title}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["前面定义的属性将作为 ",(0,l.jsx)(e.code,{children:"frontmatter"})," 属性传递给组件。所以最终输出将是："]}),"\n",(0,l.jsxs)(e.div,{className:"language-html",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Hello World</"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"h1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"自定义容器",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义容器",children:"#"}),"自定义容器"]}),"\n",(0,l.jsxs)(e.p,{children:["你可以使用 ",(0,l.jsx)(e.code,{children:":::"})," 语法来创建自定义容器，且支持自定义标题。例如："]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"输入："})}),"\n",(0,l.jsxs)(e.div,{className:"language-markdown",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::tip"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"这是一个"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`tip`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"类型的"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::info"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"这是一个"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`info`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"类型的"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::warning"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"这是一个"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`warning`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"类型的"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::danger"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"这是一个"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`danger`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"类型的"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::tip 自定义标题"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"自定义标题的 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::tip{title=自定义标题}"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"自定义标题的 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"`block`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":::"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"输出："})}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n这是一个 ",(0,l.jsx)(e.code,{children:"tip"})," 类型的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"INFO"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n这是一个 ",(0,l.jsx)(e.code,{children:"info"})," 类型的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive warning",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"WARNING"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n这是一个 ",(0,l.jsx)(e.code,{children:"warning"})," 类型的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive danger",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"DANGER"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n这是一个 ",(0,l.jsx)(e.code,{children:"danger"})," 类型的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"自定义标题"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n自定义标题的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.div,{className:"modern-directive-title",children:"自定义标题"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n自定义标题的 ",(0,l.jsx)(e.code,{children:"block"})]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"代码块",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块",children:"#"}),"代码块"]}),"\n",(0,l.jsx)(e.p,{children:"你可以使用 ``` 语法来创建代码块，且支持自定义标题。例如："}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"输入:"})}),"\n",(0,l.jsxs)(e.div,{className:"language-md",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"```js"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello World'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"```"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:'```js title="hello.js"'})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello World'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"```"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"输出:"})}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello World'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"hello.js"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello World'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(o,s)})):o(s)}}}]);