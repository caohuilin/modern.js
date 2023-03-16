(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_builder-config_mdx"],{14497:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return l},title:function(){return c},default:function(){return a}});var i=n("12151"),r=n("21447");let o=void 0,l=[{id:"config-categories",text:"Config Categories",depth:2},{id:"default-values",text:"Default Values",depth:2},{id:"use-config",text:"Use Config",depth:2},{id:"in-the-upper-framework",text:"In the Upper Framework",depth:3},{id:"using-the-node-api",text:"Using the Node API",depth:3},{id:"relationship-with-framework-config",text:"Relationship with Framework Config",depth:2},{id:"debug-the-config",text:"Debug the config",depth:2}],c="Builder Config";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"builder-config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-config",children:"#"}),"Builder Config"]}),"\n",(0,i.jsx)(s.p,{children:"Builder provides a wealth of configs to help users customize the build behavior."}),"\n",(0,i.jsxs)(s.h2,{id:"config-categories",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config-categories",children:"#"}),"Config Categories"]}),"\n",(0,i.jsx)(s.p,{children:"Builder Configs are divided into the following categories:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-dev.html",children:"Dev Config"}),": Config related to local development."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-html.html",children:"Html Config"}),": Config related to HTML."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-tools.html",children:"Tools Config"}),": Config related to the low-level tools."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-source.html",children:"Source Config"}),": Config related to source code parsing and compilation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html",children:"Output Config"}),": Config related to output."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-security.html",children:"Security Config"}),": Config related to security."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/builder/en/api/config-performance.html",children:"Performance Config"}),": Config related to performance."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can find detailed descriptions of all configs on the ",(0,i.jsx)(s.a,{href:"/builder/en/api/index.html",children:"API Reference"})," page."]}),"\n",(0,i.jsxs)(s.h2,{id:"default-values",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-values",children:"#"}),"Default Values"]}),"\n",(0,i.jsx)(s.p,{children:"The Builder presets a default value for each config, and the default value is suitable for most scenarios. At the same time, the upper-level framework will also override some of the default values based on the requirements of the vertical scene."}),"\n",(0,i.jsx)(s.p,{children:"In most cases, you don't need to define any Builder config, just use it right out of the box."}),"\n",(0,i.jsxs)(s.h2,{id:"use-config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-config",children:"#"}),"Use Config"]}),"\n",(0,i.jsxs)(s.h3,{id:"in-the-upper-framework",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#in-the-upper-framework",children:"#"}),"In the Upper Framework"]}),"\n",(0,i.jsx)(s.p,{children:"When you use a Builder-based upper-level framework, you can define the Builder config directly through the framework's config file, and the upper-level framework will pass the config to the Builder."}),"\n",(0,i.jsxs)(s.p,{children:["For example, in the Modern.js framework, you can define the Builder's ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-source.html#sourcealias",children:"source.alias"})," config in ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/en/configure/app/usage.html",target:"_blank",rel:"nofollow",children:"modern.config.ts"})," file."]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    alias"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@common'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/common'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"Commonly used framework config files include:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Framework"}),(0,i.jsx)(s.th,{children:"Config File"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modern.js"}),(0,i.jsx)(s.td,{children:"modern.config.ts"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"EdenX"}),(0,i.jsx)(s.td,{children:"edenx.config.ts"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"PIA"}),(0,i.jsx)(s.td,{children:"pia.config.ts"})]})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"using-the-node-api",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-node-api",children:"#"}),"Using the Node API"]}),"\n",(0,i.jsxs)(s.p,{children:["When you call the Builder through the Node API, you can pass in the Builder config through the Provider's ",(0,i.jsx)(s.code,{children:"builderConfig"})," option:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { builderWebpackProvider } "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-webpack-provider'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"provider"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"builderWebpackProvider"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  builderConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// some configs"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Please refer to ",(0,i.jsx)(s.a,{href:"/builder/en/api/builder-core.html#createbuilder",children:"API - createBuilder"})," for details."]}),"\n",(0,i.jsxs)(s.h2,{id:"relationship-with-framework-config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#relationship-with-framework-config",children:"#"}),"Relationship with Framework Config"]}),"\n",(0,i.jsx)(s.p,{children:"Generally speaking, the Builder config is a subset of the framework config."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Builder config only deals with build-related behaviors"}),", while framework config covers a wider range, including runtime, server, deployment, etc., so framework config is extended from Builder config."]}),"\n",(0,i.jsxs)(s.h2,{id:"debug-the-config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-the-config",children:"#"}),"Debug the config"]}),"\n",(0,i.jsxs)(s.p,{children:["You can enable Builder's debug mode by adding the ",(0,i.jsx)(s.code,{children:"DEBUG=builder"})," environment variable when executing a build."]}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"DEBUG=builder pnpm dev"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"In debug mode, Builder will write the Builder config to the dist directory, which is convenient for developers to view and debug."}),"\n",(0,i.jsxs)(s.div,{className:"language-text",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Inspect config succeed, open the following files to view the content:\n\n   - Builder Config: /Project/demo/dist/builder.config.js\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Open the generated ",(0,i.jsx)(s.code,{children:"/dist/builder.config.js"})," file to see the complete content of the Builder config."]}),"\n",(0,i.jsxs)(s.p,{children:["For a complete introduction to debug mode, see the ",(0,i.jsx)(s.a,{href:"/builder/en/guide/debug/debug-mode.html",children:"Debug Mode"})," chapter."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);