(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_faq_features_md"],{96e3:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return l},toc:function(){return i},title:function(){return t},default:function(){return a}});var o=n("12151"),r=n("21447");let l=void 0,i=[{id:"how-to-import-ui-component-library-on-demand",text:"How to import UI Component library on demand?",depth:2},{id:"how-to-run-eslint-during-compilation",text:"How to run ESLint during compilation?",depth:2},{id:"how-to-configure-cdn-path-for-static-assets",text:"How to configure CDN path for static assets?",depth:2},{id:"how-to-clear-the-webpack-cache",text:"How to clear the webpack cache?",depth:2},{id:"how-to-remove-console-after-production-build",text:"How to remove console after production build?",depth:2}],t="Features";function c(s){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span",blockquote:"blockquote"},(0,r.useMDXComponents)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"features",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),"\n",(0,o.jsxs)(e.h2,{id:"how-to-import-ui-component-library-on-demand",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-import-ui-component-library-on-demand",children:"#"}),"How to import UI Component library on demand?"]}),"\n",(0,o.jsxs)(e.p,{children:["If you need to configure the on-demand import of component libraries, you can configure [babel-plugin-import](",(0,o.jsx)(e.a,{href:"https://github.com/",target:"_blank",rel:"nofollow",children:"https://github.com/"})," through ",(0,o.jsx)(e.a,{href:"/builder/en/api/config-tools.html#toolsbabel",children:"tools.babel"})," umijs/babel-plugin-import) plugin."]}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"babel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (config"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { addPlugins }) "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addPlugins"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ["})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'babel-plugin-import'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            libraryName"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xxx-components'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            libraryDirectory"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'es'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            style"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      ]);"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h2,{id:"how-to-run-eslint-during-compilation",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-run-eslint-during-compilation",children:"#"}),"How to run ESLint during compilation?"]}),"\n",(0,o.jsxs)(e.p,{children:["For the sake of compilation performance, Builder will not perform ESLint verification during the compilation process by default. If you need this function, you can manually install and register the ",(0,o.jsx)(e.a,{href:"https://github.com/webpack",target:"_blank",rel:"nofollow",children:"eslint-webpack-plugin"})," in the community -contrib/eslint-webpack-plugin)."]}),"\n",(0,o.jsx)(e.p,{children:"The sample code to register the plugin is as follows:"}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ESLintPlugin "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eslint-webpack-plugin'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"webpackChain"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(chain) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"chain"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".plugin"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eslint-plugin'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".use"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(ESLintPlugin"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          extensions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.js'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.ts'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.jsx'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tsx'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.mjs'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      ]);"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["For more detailed usage, please refer to the ",(0,o.jsx)(e.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"nofollow",children:"eslint-webpack-plugin"})," documentation."]}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"how-to-configure-cdn-path-for-static-assets",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-configure-cdn-path-for-static-assets",children:"#"}),"How to configure CDN path for static assets?"]}),"\n",(0,o.jsxs)(e.p,{children:["If you need to upload static assets such as JS and CSS to CDN for use, you can set the URL prefix of static assets through the ",(0,o.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputassetprefix",children:"output.assetPrefix"})," configuration."]}),"\n",(0,o.jsxs)(e.div,{className:"language-js",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    assetPrefix"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://cdn.example.com/assets/'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h2,{id:"how-to-clear-the-webpack-cache",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-clear-the-webpack-cache",children:"#"}),"How to clear the webpack cache?"]}),"\n",(0,o.jsxs)(e.p,{children:["By default, Builder's webpack cache is generated in the ",(0,o.jsx)(e.code,{children:"./node_modules/.cache/webpack"})," directory."]}),"\n",(0,o.jsx)(e.p,{children:"If you need to clear the local webpack cache, you can execute the following command:"}),"\n",(0,o.jsxs)(e.div,{className:"language-bash",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"rm -rf ./node_modules/.cache"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h2,{id:"how-to-remove-console-after-production-build",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-remove-console-after-production-build",children:"#"}),"How to remove console after production build?"]}),"\n",(0,o.jsxs)(e.p,{children:["When the production environment is built, we can remove the ",(0,o.jsx)(e.code,{children:"console"})," from the code, so as to avoid the log of the development environment being output to the production environment."]}),"\n",(0,o.jsxs)(e.p,{children:["Builder provides a configuration item to remove console by default, please see ",(0,o.jsx)(e.a,{href:"/builder/en/api/config-performance.html#performanceremoveconsole",children:"performance.removeConsole"}),"."]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(c,s)})):c(s)}}}]);