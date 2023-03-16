(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_get-started_upgrade_mdx"],{20579:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},toc:function(){return c},title:function(){return o},default:function(){return t}});var r=n("12151"),i=n("21447");let a={title:"Upgrade",sidebar_position:3},c=[{id:"upgrade-with-command",text:"Upgrade with command",depth:2},{id:"specify-version-upgrade",text:"Specify version upgrade",depth:2},{id:"lock-child-dependency",text:"lock child dependency",depth:2},{id:"pnpm",text:"pnpm",depth:3},{id:"yarn",text:"Yarn",depth:3},{id:"npm",text:"Npm",depth:3}],o="Upgrade";function l(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",strong:"strong",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"upgrade",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade",children:"#"}),"Upgrade"]}),"\n",(0,r.jsxs)(s.h2,{id:"upgrade-with-command",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-with-command",children:"#"}),"Upgrade with command"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js provides the ",(0,r.jsx)(s.code,{children:"upgrade"})," command to support projects to upgrade to the latest version."]}),"\n",(0,r.jsxs)(s.p,{children:["Execute ",(0,r.jsx)(s.code,{children:"pnpm run upgrade"})," in the project:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run upgrade"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" modern upgrade"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] [Project Type]: Application"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] [Modern.js Latest Version]: 2.0.0"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] Upgrade Modern.js package version success"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["You can see that the dependency in the project ",(0,r.jsx)(s.code,{children:"package.json"})," has been changed to the latest."]}),"\n",(0,r.jsxs)(s.h2,{id:"specify-version-upgrade",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-version-upgrade",children:"#"}),"Specify version upgrade"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js all packages are published using the ",(0,r.jsx)(s.strong,{children:"unified version number"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"According to the website Release Note, developers can also manually upgrade the project to the desired version."}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nWhen upgrading, you need to upgrade to all packages provided by the Modern.js, rather than upgrading a single dependency."})})]}),"\n",(0,r.jsxs)(s.h2,{id:"lock-child-dependency",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#lock-child-dependency",children:"#"}),"lock child dependency"]}),"\n",(0,r.jsx)(s.p,{children:"When there is a problem with one of the child dependencies of the project, and the Modern.js cannot be updated immediately, you can use the package manager to lock the child dependency version."}),"\n",(0,r.jsxs)(s.h3,{id:"pnpm",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"}),"pnpm"]}),"\n",(0,r.jsxs)(s.p,{children:["For projects using pnpm, add the following configuration to the ",(0,r.jsx)(s.code,{children:"package.json"})," in the ",(0,r.jsx)(s.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(s.code,{children:"pnpm install"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"pnpm"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"overrides"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"package-name"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^1.0.0"'})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"yarn",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#yarn",children:"#"}),"Yarn"]}),"\n",(0,r.jsxs)(s.p,{children:["For projects using Yarn, add the following configuration to the ",(0,r.jsx)(s.code,{children:"package.json"})," in the ",(0,r.jsx)(s.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(s.code,{children:"yarn install"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"resolutions"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"package-name"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^1.0.0"'})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"npm",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#npm",children:"#"}),"Npm"]}),"\n",(0,r.jsxs)(s.p,{children:["For projects using Npm, add the following configuration to the ",(0,r.jsx)(s.code,{children:"package.json"})," in the ",(0,r.jsx)(s.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(s.code,{children:"npm install"}),":"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"overrides"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"package-name"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^1.0.0"'})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nFor Monorepo repositories, the dependency version can only be locked in the ",(0,r.jsx)(s.code,{children:"package.json"})," in the project root directory, and all packages in Monorepo are affected."]})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);