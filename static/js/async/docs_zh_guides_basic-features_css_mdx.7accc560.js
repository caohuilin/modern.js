(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_basic-features_css_mdx"],{39837:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return t}});var l=n("12151"),r=n("21447");let i={sidebar_position:2},o=[{id:"使用-lesssass-和-stylus",text:"使用 Less、Sass 和 Stylus",depth:2},{id:"使用-postcss",text:"使用 PostCSS",depth:2},{id:"使用-css-modules",text:"使用 CSS Modules",depth:2},{id:"使用-css-in-js",text:"使用 CSS-in-JS",depth:2},{id:"使用-tailwind-css",text:"使用 Tailwind CSS",depth:2},{id:"tailwind-css-版本",text:"Tailwind CSS 版本",depth:3},{id:"浏览器兼容性",text:"浏览器兼容性",depth:3},{id:"theme-配置",text:"Theme 配置",depth:3}],c="CSS 开发方案";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"css-开发方案",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-开发方案",children:"#"}),"CSS 开发方案"]}),"\n",(0,l.jsx)(e.p,{children:"Modern.js 内置多种常用的 CSS 开发方案，包括 Less / Sass / Stylus 预处理器、PostCSS、CSS Modules、CSS-in-JS 和 Tailwind CSS。"}),"\n",(0,l.jsxs)(e.h2,{id:"使用-lesssass-和-stylus",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-lesssass-和-stylus",children:"#"}),"使用 Less、Sass 和 Stylus"]}),"\n",(0,l.jsx)(e.p,{children:"Modern.js 内置了社区流行的 CSS 预处理器，包括 Less 和 Sass。"}),"\n",(0,l.jsxs)(e.p,{children:["默认情况下，你不需要对 Less 和 Sass 进行任何配置。如果你有自定义 loader 配置的需求，可以通过配置 ",(0,l.jsx)(e.a,{href:"/configure/app/tools/less.html",children:"tools.less"}),"、",(0,l.jsx)(e.a,{href:"/configure/app/tools/sass.html",children:"tools.sass"})," 来进行设置。"]}),"\n",(0,l.jsxs)(e.p,{children:["你也可以在 Modern.js 中使用 Stylus，只需要安装 Modern.js Builder 提供的 Stylus 插件即可，使用方式请参考 ",(0,l.jsx)(e.a,{href:"https://modernjs.dev/builder/plugins/plugin-stylus.html",target:"_blank",rel:"nofollow",children:"Stylus 插件"}),"。"]}),"\n",(0,l.jsxs)(e.h2,{id:"使用-postcss",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-postcss",children:"#"}),"使用 PostCSS"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 内置了 ",(0,l.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"nofollow",children:"PostCSS"})," 来转换 CSS 代码。"]}),"\n",(0,l.jsxs)(e.p,{children:["请阅读 ",(0,l.jsx)(e.a,{href:"https://modernjs.dev/builder/guide/basic/css-usage.html#%E4%BD%BF%E7%94%A8-postcss",target:"_blank",rel:"nofollow",children:"Modern.js Builder - 使用 PostCSS"})," 了解更多用法。"]}),"\n",(0,l.jsxs)(e.h2,{id:"使用-css-modules",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-modules",children:"#"}),"使用 CSS Modules"]}),"\n",(0,l.jsxs)(e.p,{children:["请阅读 ",(0,l.jsx)(e.a,{href:"https://modernjs.dev/builder/guide/basic/css-modules.html",target:"_blank",rel:"nofollow",children:"使用 CSS Modules"})," 章节来了解 CSS Modules 的完整用法。"]}),"\n",(0,l.jsxs)(e.h2,{id:"使用-css-in-js",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-in-js",children:"#"}),"使用 CSS-in-JS"]}),"\n",(0,l.jsx)(e.p,{children:"CSS-in-JS 是一种可以将 CSS 样式写在 JS 文件里的技术。"}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 集成了社区常用的 CSS-in-JS 实现库 ",(0,l.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"nofollow",children:"styled-components"}),"，它使用 JavaScript 的新特性 ",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"nofollow",children:"Tagged template"})," 编写组件的 CSS 样式。可以直接从 ",(0,l.jsx)(e.code,{children:"@modern-js/runtime/styled"})," 引入 ",(0,l.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"nofollow",children:"styled-components"})," 的 API 进行使用。"]}),"\n",(0,l.jsxs)(e.p,{children:["当需要编写一个内部字体为红色的 ",(0,l.jsx)(e.code,{children:"div"})," 组件时，可以如下实现："]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" styled "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/styled'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"RedDiv"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"styled"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"div"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  color: red;"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["当需要根据组件的 ",(0,l.jsx)(e.code,{children:"props"})," 动态设置组件样式时，例如 ",(0,l.jsx)(e.code,{children:"props"})," 的属性 ",(0,l.jsx)(e.code,{children:"primary"})," 为 ",(0,l.jsx)(e.code,{children:"true"})," 时，按钮的颜色为白色，其他情况为红色，实现代码如下："]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" styled "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/styled'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"styled"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"button"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  color: "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"props "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"props"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".primary "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'white'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'red'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  font-size: 1em;"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["关于 styled-components 的更多用法，请参考 ",(0,l.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"nofollow",children:"styled-components 官网"}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 内部集成了 Babel 的 ",(0,l.jsx)(e.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"nofollow",children:"babel-plugin-styled-components"})," 插件，你可以通过 ",(0,l.jsx)(e.a,{href:"/configure/app/tools/styled-components.html",children:"tools.styledComponents"})," 对插件进行配置。"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"提示"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n如果需要使用 ",(0,l.jsx)(e.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"nofollow",children:"styled-jsx"}),"、",(0,l.jsx)(e.a,{href:"https://emotion.sh/",target:"_blank",rel:"nofollow",children:"Emotion"}),"等其他 CSS-in-JS 库，需要先安装对应库的依赖。具体使用方式请参考对应库的官网。"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"使用-tailwind-css",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-tailwind-css",children:"#"}),"使用 Tailwind CSS"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow",children:"Tailwind CSS"})," 是一个以 Utility Class 为基础的 CSS 框架和设计系统，可以快速地为组件添加常用样式，同时支持主题样式的灵活扩展。在 Modern.js 中使用 ",(0,l.jsx)(e.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow",children:"Tailwind CSS"}),"，只需要在项目根目录下执行 ",(0,l.jsx)(e.code,{children:"pnpm run new"})," 并开启。"]}),"\n",(0,l.jsx)(e.p,{children:"按照如下进行选择："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作 启用可选功能"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 启用可选功能 启用 Tailwind CSS 支持"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["在 ",(0,l.jsx)(e.code,{children:"modern.config.ts"})," 中注册 Tailwind 插件:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tailwindcssPlugin "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-tailwindcss'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tailwindcssPlugin"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["使用时在入口的根组件(如 ",(0,l.jsx)(e.code,{children:"src/App.jsx"}),")添加如下代码："]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/base.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/components.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/utilities.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"然后即可在各个组件中使用 Tailwind CSS 提供的 Utility Class 了："}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"h-12 w-48"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text-xl font-medium text-black"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">hello world</"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"补充信息"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n根据需求不同，你可以选择性的导入 Tailwind CSS 提供的 CSS 文件。由于使用 ",(0,l.jsx)(e.code,{children:"@tailwind"})," 与直接导入 CSS 文件的作用等价，因此关于 Tailwind CSS 提供的 CSS 文件的用途，可以参考 ",(0,l.jsxs)(e.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"nofollow",children:[(0,l.jsx)(e.code,{children:"@tailwind"})," 的使用"]})," 文档中注释里的内容。"]})})]}),"\n",(0,l.jsxs)(e.h3,{id:"tailwind-css-版本",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-版本",children:"#"}),"Tailwind CSS 版本"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 同时支持 Tailwind CSS v2 和 v3 版本，框架会识别项目 ",(0,l.jsx)(e.code,{children:"package.json"})," 中的 ",(0,l.jsx)(e.code,{children:"tailwindcss"})," 依赖版本，并启用相应的配置。默认情况下，我们会为你安装 Tailwind CSS v3 版本。"]}),"\n",(0,l.jsx)(e.p,{children:"如果你的项目仍在使用 Tailwind CSS v2，我们推荐你升级到 v3 以支持 JIT 等能力。关于 Tailwind CSS v2 与 v3 版本之间的差异，请参考以下文章："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"nofollow",children:"Tailwind CSS v3.0"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"nofollow",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,l.jsxs)(e.h3,{id:"浏览器兼容性",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"}),"浏览器兼容性"]}),"\n",(0,l.jsx)(e.p,{children:"Tailwind CSS v2 和 v3 均不支持 IE 11 浏览器，相关背景请参考："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"nofollow",children:"Tailwind CSS v3 - Browser Support"}),"。"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"nofollow",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"如果你在 IE 11 浏览器上使用 Tailwind CSS，可能会出现部分样式不可用的现象，请谨慎使用。"}),"\n",(0,l.jsxs)(e.h3,{id:"theme-配置",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-配置",children:"#"}),"Theme 配置"]}),"\n",(0,l.jsxs)(e.p,{children:["当需要自定义 Tailwind CSS 的 ",(0,l.jsx)(e.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"nofollow",children:"theme"})," 配置的时候，可以在配置 ",(0,l.jsx)(e.a,{href:"/configure/app/source/design-system.html",children:(0,l.jsx)(e.code,{children:"source.designSystem"})})," 中修改，例如，颜色主题中增加一个 ",(0,l.jsx)(e.code,{children:"primary"}),"："]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    designSystem"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      extend"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        colors"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          primary"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#5c6ac4'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["当需要对 Tailwind CSS 做 ",(0,l.jsx)(e.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"nofollow",children:"theme"})," 以外的其他特殊配置时，可以在 ",(0,l.jsx)(e.a,{href:"/configure/app/tools/tailwindcss.html",children:(0,l.jsx)(e.code,{children:"tools.tailwindcss"})})," 中配置，例如设置 ",(0,l.jsx)(e.code,{children:"variants"}),"："]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tailwindcss"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      variants"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        extend"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          backgroundColor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'active'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["当你为项目配置 Tailwind CSS 的时候，",(0,l.jsx)(e.a,{href:"/configure/app/source/design-system.html",children:"source.designSystem"})," 和 ",(0,l.jsx)(e.a,{href:"/configure/app/tools/tailwindcss.html",children:"tools.tailwindcss"})," 这两个配置的组合等价于单独配置了一个 ",(0,l.jsx)(e.code,{children:"tailwindcss.config.js"})," 文件。其中 ",(0,l.jsx)(e.a,{href:"/configure/app/source/design-system.html",children:"source.designSystem"})," 等效于 Tailwind CSS 的 ",(0,l.jsx)(e.a,{href:"https://v2.tailwindcss.com/docs/configuration#theme",target:"_blank",rel:"nofollow",children:"theme"})," 配置。"]}),"\n"]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(a,s)})):a(s)}}}]);