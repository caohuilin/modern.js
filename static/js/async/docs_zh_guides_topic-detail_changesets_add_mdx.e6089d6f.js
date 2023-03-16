(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_changesets_add_mdx"],{85904:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},toc:function(){return r},title:function(){return i},default:function(){return d}});var c=n("12151"),a=n("21447");let l={sidebar_position:2},r=[{id:"信息",text:"信息",depth:2},{id:"步骤",text:"步骤",depth:2},{id:"模块工程方案",text:"模块工程方案",depth:3},{id:"在根目录执行以下命令",text:"在根目录执行以下命令：",depth:4},{id:"选择本次变更需要升级的版本号类型点击回车",text:"选择本次变更需要升级的版本号类型，点击回车：",depth:4},{id:"填入-changelog-信息并点击两次回车",text:"填入 Changelog 信息，并点击两次回车：",depth:4},{id:"monorepo-工程方案",text:"Monorepo 工程方案",depth:3},{id:"在根目录执行以下命令-1",text:"在根目录执行以下命令：",depth:4},{id:"选择本次需要升级的包列表",text:"选择本次需要升级的包列表：",depth:4},{id:"分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",text:"分别选择不同版本类型对应的包，changeset 会询问 major 和 minor 类型，如果存在包未选择这两种类型，将会默认使用 patch 类型：",depth:4},{id:"填入-changelog-信息并点击两次回车-1",text:"填入 Changelog 信息，并点击两次回车：",depth:4},{id:"参数",text:"参数",depth:2},{id:"注意事项",text:"注意事项",depth:2}],i="添加一个 changeset";function h(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",h3:"h3",h4:"h4",button:"button",pre:"pre",code:"code",span:"span",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"添加一个-changeset",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#添加一个-changeset",children:"#"}),"添加一个 changeset"]}),"\n",(0,c.jsx)(s.p,{children:"当我们开发完成一个功能时，需要添加一个 changeset 用于声明当前功能，用于后续版本发布。"}),"\n",(0,c.jsxs)(s.h2,{id:"信息",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#信息",children:"#"}),"信息"]}),"\n",(0,c.jsx)(s.p,{children:"一个 changeset 包含的内容包括："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"本次变更涉及哪些包的变更。"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["本次变更需要升级的版本号类型，类型符合 ",(0,c.jsx)(s.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow",children:"semver"})," 规范。"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"本次变更的 Changelog 信息。"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.h2,{id:"步骤",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#步骤",children:"#"}),"步骤"]}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive info",children:[(0,c.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(s.div,{className:"modern-directive-content",children:(0,c.jsx)(s.p,{children:"\n以下示例命令都以 pnpm 作为包管理工具进行，如果需要使用其他包管理工具，请按需求进行替换。"})})]}),"\n",(0,c.jsxs)(s.h3,{id:"模块工程方案",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#模块工程方案",children:"#"}),"模块工程方案"]}),"\n",(0,c.jsxs)(s.h4,{id:"在根目录执行以下命令",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令",children:"#"}),"在根目录执行以下命令："]}),"\n",(0,c.jsxs)(s.div,{className:"language-bash",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run change"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsxs)(s.h4,{id:"选择本次变更需要升级的版本号类型点击回车",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#选择本次变更需要升级的版本号类型点击回车",children:"#"}),"选择本次变更需要升级的版本号类型，点击回车："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-version.png",alt:"选择版本类型"})}),"\n",(0,c.jsxs)(s.h4,{id:"填入-changelog-信息并点击两次回车",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#填入-changelog-信息并点击两次回车",children:"#"}),"填入 Changelog 信息，并点击两次回车："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog.png",alt:"写入变更信息"})}),"\n",(0,c.jsxs)(s.p,{children:["执行完成后，将在项目的 ",(0,c.jsx)(s.code,{children:".changeset"})," 目录创建对应的 changeset 文件，文件内容如下："]}),"\n",(0,c.jsxs)(s.div,{className:"language-markdown",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'module-changeset'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"patch"})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsx)(s.span,{className:"line"}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"feat: test module solution changeset"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsx)(s.p,{children:"该文件中包含了 changeset 的所有信息。"}),"\n",(0,c.jsxs)(s.h3,{id:"monorepo-工程方案",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo-工程方案",children:"#"}),"Monorepo 工程方案"]}),"\n",(0,c.jsxs)(s.p,{children:["我们假设 monorepo 中存在三个模块包，分别为 ",(0,c.jsx)(s.code,{children:"module-1"}),"，",(0,c.jsx)(s.code,{children:"module-2"}),"，",(0,c.jsx)(s.code,{children:"module-3"}),"。"]}),"\n",(0,c.jsxs)(s.h4,{id:"在根目录执行以下命令-1",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#在根目录执行以下命令-1",children:"#"}),"在根目录执行以下命令："]}),"\n",(0,c.jsxs)(s.div,{className:"language-bash",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run change"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsxs)(s.h4,{id:"选择本次需要升级的包列表",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#选择本次需要升级的包列表",children:"#"}),"选择本次需要升级的包列表："]}),"\n",(0,c.jsxs)(s.p,{children:["Changesets 会根据当前代码变更(",(0,c.jsx)(s.code,{children:"git diff Head...baseBranch"}),")，将 Monorepo 中的 package 分为两类，",(0,c.jsx)(s.code,{children:"changed packages"})," 和 ",(0,c.jsx)(s.code,{children:"unchanged packages"}),"，方便用户进行选择。"]}),"\n",(0,c.jsx)(s.p,{children:"使用空格键选择对应的包或者分类即可，选择完成后点击回车："}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-packages.png",alt:"选择升级包"})}),"\n",(0,c.jsxs)(s.h4,{id:"分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#分别选择不同版本类型对应的包changeset-会询问-major-和-minor-类型如果存在包未选择这两种类型将会默认使用-patch-类型",children:"#"}),"分别选择不同版本类型对应的包，changeset 会询问 ",(0,c.jsx)(s.code,{children:"major"})," 和 ",(0,c.jsx)(s.code,{children:"minor"})," 类型，如果存在包未选择这两种类型，将会默认使用 ",(0,c.jsx)(s.code,{children:"patch"})," 类型："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-auto-select-patch.png",alt:"选择升级包版本类型"})}),"\n",(0,c.jsxs)(s.h4,{id:"填入-changelog-信息并点击两次回车-1",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#填入-changelog-信息并点击两次回车-1",children:"#"}),"填入 Changelog 信息，并点击两次回车："]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog-monorepo.png",alt:"写入变更信息"})}),"\n",(0,c.jsxs)(s.p,{children:["执行完成后，将在项目的 ",(0,c.jsx)(s.code,{children:".changeset"})," 目录创建对应的 changeset 文件，文件内容如下："]}),"\n",(0,c.jsxs)(s.div,{className:"language-markdown",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'module-2'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"minor"})]}),"\n",(0,c.jsxs)(s.span,{className:"line",children:[(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'module-3'"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,c.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"patch"})]}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsx)(s.span,{className:"line"}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"feat: test-changeset"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsx)(s.p,{children:"该文件中包含了 changeset 的所有信息，不同的包也会根据选择的版本类型进行标记。"}),"\n",(0,c.jsxs)(s.h2,{id:"参数",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"}),"参数"]}),"\n",(0,c.jsx)(s.p,{children:"change 命令支持以下参数："}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"--empty"})," 添加一个空的 changeset。"]}),"\n"]}),"\n",(0,c.jsxs)(s.div,{className:"language-bash",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run change -- --empty"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsxs)(s.p,{children:["执行完成后，将在项目的 ",(0,c.jsx)(s.code,{children:".changeset"})," 目录创建空的 changeset 文件，文件内容如下："]}),"\n",(0,c.jsxs)(s.div,{className:"language-markdown",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,c.jsxs)(s.code,{children:[(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsx)(s.span,{className:"line",children:(0,c.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,c.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"--open"})," 使用该参数时，在填写 Changelog 步骤会打开系统默认编辑器进行填写。"]}),"\n"]}),"\n",(0,c.jsxs)(s.h2,{id:"注意事项",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"}),"注意事项"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"不是所有的变更都需要 changeset"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"如果当前变更是修改仓库的一些基础设施，比如 CI、测试等，就不需要添加 changeset 或者可以添加一个空的 changeset。"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"一个 pull reuqest 可以提交多个 changeset"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["当一个 pull request 存在多个功能开发或者问题修复时，可以多次执行 ",(0,c.jsx)(s.code,{children:"pnpm run change"})," 添加多个 changeset 文件，每个文件选择对应功能的包和添加变更信息即可。"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"创建 changeset 时，需要选择该功能相关的所有包"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"在 Monorepo 中创建 changeset 时，需要选中和该功能相关的所有变更包，避免出现发版时部分包未发布的情况。"})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}}}]);