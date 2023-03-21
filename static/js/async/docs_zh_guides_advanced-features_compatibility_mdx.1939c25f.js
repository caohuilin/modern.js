(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_advanced-features_compatibility_mdx"],{93452:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var l in s)Object.defineProperty(e,l,{enumerable:!0,get:s[l]})}(s,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return a}});var r=l("12151"),n=l("21447");let i={title:"客户端兼容性",sidebar_position:5},o=[{id:"browserslist-配置",text:"Browserslist 配置",depth:2},{id:"polyfill",text:"Polyfill",depth:2},{id:"编译时-polyfill",text:"编译时 Polyfill",depth:3},{id:"运行时按需-polyfill",text:"运行时按需 Polyfill",depth:3}],c="客户端兼容性";function t(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",img:"img"},(0,n.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"客户端兼容性",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#客户端兼容性",children:"#"}),"客户端兼容性"]}),"\n",(0,r.jsxs)(s.h2,{id:"browserslist-配置",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-配置",children:"#"}),"Browserslist 配置"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 支持在项目根目录 ",(0,r.jsx)(s.code,{children:"package.json"})," 文件中的 ",(0,r.jsx)(s.code,{children:"browserslist"})," 字段（或单独的 ",(0,r.jsx)(s.code,{children:".browserslistrc"})," 文件）指定项目覆盖的目标浏览器范围。该值会被 ",(0,r.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.code,{children:"@babel/preset-env"})})," 和 ",(0,r.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.code,{children:"autoprefixer"})})," 用来确定需要转换的 JavaScript 语法特性和需要添加的 CSS 浏览器前缀。"]}),"\n",(0,r.jsx)(s.p,{children:"Modern.js 中默认值如下:"}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["可以在",(0,r.jsx)(s.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"了解如何自定义浏览器范围。"]}),"\n",(0,r.jsxs)(s.p,{children:["查看 Modern.js Builder 文档了解更多 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/guide/advanced/browserslist.html",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," 相关内容。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive note",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nModern.js 支持配置 ",(0,r.jsx)(s.a,{href:"/configure/app/output/override-browserslist.html",children:"output.overrideBrowserslist"})," 覆盖默认 browserslist 值。"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"polyfill",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"}),"Polyfill"]}),"\n",(0,r.jsxs)(s.h3,{id:"编译时-polyfill",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#编译时-polyfill",children:"#"}),"编译时 Polyfill"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 在编译时默认通过 ",(0,r.jsx)(s.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"})," 引入对应的 Polyfill 代码。"]}),"\n",(0,r.jsx)(s.p,{children:"默认情况下会根据项目 Browserslist 的设置情况引入所需的 Polyfill 代码， 这样基本不用再担心项目源码和第三方依赖的 Polyfill 问题了，但是因为包含了一些没有用到的 Polyfill 代码，所以最终的包大小可能会有所增加。"}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n对于明确第三方依赖不需要 Polyfill 的场景，可以设置 ",(0,r.jsx)(s.a,{href:"/configure/app/output/polyfill.html",children:(0,r.jsx)(s.code,{children:"output.polyfill"})})," 为 ",(0,r.jsx)(s.code,{children:"usage"}),", 这样 Babel 编译时只会根据代码中使用到的语法引入 Polyfill 代码。"]})})]}),"\n",(0,r.jsxs)(s.h3,{id:"运行时按需-polyfill",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#运行时按需-polyfill",children:"#"}),"运行时按需 Polyfill"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 中还提供了基于浏览器 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," 信息的运行时按需 Polyfill 方案，相比于 Babel 优势如下："]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"不会插入到代码中，只根据访问页面的设备，按需下发 Polyfill 代码 ，减少整体代码体积。"}),"\n",(0,r.jsx)(s.li,{children:"相同浏览器会公用一份 Polyfill 代码。因此，随着项目越来越多，基于 UA 的 Polyfill 代码下发速度会越来越快，综合速度超过常规方案。"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"可以通过微生成器开启该功能："}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作 启用可选功能"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" 启用可选功能 启用「基于 UA 的 Polyfill」功能"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["执行命令后，在 ",(0,r.jsx)(s.code,{children:"modern.config.ts"})," 中注册 Polyfill 插件:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" polyfillPlugin "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-polyfill'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"polyfillPlugin"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["配置 ",(0,r.jsx)(s.code,{children:"output.polyfill"})," 为 ",(0,r.jsx)(s.code,{children:"ua"})," 并且执行 ",(0,r.jsx)(s.code,{children:"pnpm run build && pnpm run serve"})," 启动服务器后，访问页面可以看到 HTML 产物中包含如下脚本:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/__polyfill__"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"crossorigin"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["在 Chrome 51 下访问页面可以看到 ",(0,r.jsx)(s.code,{children:"http://localhost:8080/__polyfill__"})," 返回内容如下:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive caution",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\n该功能只有在使用 Modern.js 内置的 Web Server 时才会生效。"})})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);