(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_optimization_build-performance_md"],{5082:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return l},title:function(){return a},default:function(){return c}});var i=n("12151"),r=n("21447");let o=void 0,l=[{id:"general-optimization-strategy",text:"General optimization strategy",depth:2},{id:"upgrade-nodejs-version",text:"Upgrade Node.js version",depth:3},{id:"using-swc-or-esbuild",text:"Using SWC or esbuild",depth:3},{id:"avoid-using-ts-loader",text:"Avoid using ts-loader",depth:3},{id:"development-optimization-strategies",text:"Development optimization strategies",depth:2},{id:"enable-lazy-compilation",text:"Enable Lazy Compilation",depth:3},{id:"adjust-source-map-format",text:"Adjust Source Map format",depth:3},{id:"adjust-browserslist-for-development",text:"Adjust Browserslist for development",depth:3},{id:"production-optimization-strategies",text:"Production optimization strategies",depth:2},{id:"disable-source-map",text:"Disable Source Map",depth:3}],a="Improve Build Performance";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",h3:"h3",strong:"strong",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"improve-build-performance",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#improve-build-performance",children:"#"}),"Improve Build Performance"]}),"\n",(0,i.jsx)(s.p,{children:"Modern.js Builder optimizes build performance by default, but as the project becomes larger, you may encounter some build performance problems."}),"\n",(0,i.jsx)(s.p,{children:"This document provides some optional speed-up strategies, developers can choose some of them to improve the build performance."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"\uD83D\uDCE2 Notice"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nThe strategies in ",(0,i.jsx)(s.a,{href:"/builder/en/guide/optimization/optimize-bundle.html",children:"Bundle Size Optimization"}),"can also be used to improve build performance, so we won't repeat them here."]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"general-optimization-strategy",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#general-optimization-strategy",children:"#"}),"General optimization strategy"]}),"\n",(0,i.jsx)(s.p,{children:"The following are some general optimization strategies, which can speed up the development build and production build, and some of them also optimize the bundle size."}),"\n",(0,i.jsxs)(s.h3,{id:"upgrade-nodejs-version",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-nodejs-version",children:"#"}),"Upgrade Node.js version"]}),"\n",(0,i.jsxs)(s.p,{children:["In general, updating Node.js to the latest ",(0,i.jsx)(s.a,{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"noopener noreferrer",children:"LTS release"})," will help improve build performance."]}),"\n",(0,i.jsx)(s.p,{children:"Especially for devices with Apple M1/M2 chips, it is recommended to use Node 16 or Node 18."}),"\n",(0,i.jsxs)(s.p,{children:["Node 16 provides Apple Silicon binaries by default, so the performance on M1/M2 models will be greatly improved than Node 14. According to our tests, ",(0,i.jsx)(s.strong,{children:"After switching from Node 14 to Node 16, the compilation speed can be improved by more than 100%"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"You can switch to Node 16 by following steps:"}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Install Node.js v16"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# switch to Node 16"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Set Node 16 as the default version"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"nvm default 16"})}),"\n",(0,i.jsx)(s.span,{className:"line"}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# View Node version"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"using-swc-or-esbuild",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-swc-or-esbuild",children:"#"}),"Using SWC or esbuild"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on ",(0,i.jsx)(s.code,{children:"Rust"}),". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance."]}),"\n",(0,i.jsx)(s.p,{children:"Builder provides SWC plugin and esbuild plugin that allow you to use SWC or esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. See:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/builder/en/plugins/plugin-swc.html",children:"SWC plugin document"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/builder/en/plugins/plugin-esbuild.html",children:"esbuild plugin document"})}),"\n"]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"SWC vs esbuild"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nThe SWC compiled outputs has better compatibility, supports polyfills such as core-js, and has more complete features, so it is recommended to use the SWC plugin first."})})]}),"\n",(0,i.jsxs)(s.h3,{id:"avoid-using-ts-loader",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#avoid-using-ts-loader",children:"#"}),"Avoid using ts-loader"]}),"\n",(0,i.jsxs)(s.p,{children:["By default, Builder uses Babel to compile TS files. After enabling the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolstsloader",children:"tools.tsLoader"})," option, ",(0,i.jsx)(s.code,{children:"ts-loader"})," will be used to compile TS files."]}),"\n",(0,i.jsxs)(s.p,{children:["Please avoid using ",(0,i.jsx)(s.code,{children:"ts-loader"})," because it requires additional parsing and type checking, which will slow down the build."]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// remove this config"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    tsLoader"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-tools.html#toolstsloader",children:"tools.tsLoader documentation"})," for details."]}),"\n",(0,i.jsxs)(s.h2,{id:"development-optimization-strategies",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#development-optimization-strategies",children:"#"}),"Development optimization strategies"]}),"\n",(0,i.jsx)(s.p,{children:"The following are strategies for improve build performance in development environment."}),"\n",(0,i.jsxs)(s.h3,{id:"enable-lazy-compilation",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-lazy-compilation",children:"#"}),"Enable Lazy Compilation"]}),"\n",(0,i.jsx)(s.p,{children:"You can enable the lazy compilation (i.e. on-demand compilation) to improve the compilation startup speed."}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  experiments"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    lazyCompilation"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      entries"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["This is an experimental feature and may not work correctly in some scenarios, see ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-experiments.html#experiments-lazycompilation",children:"experiments.lazyCompilation"})," for details."]}),"\n",(0,i.jsxs)(s.h3,{id:"adjust-source-map-format",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-source-map-format",children:"#"}),"Adjust Source Map format"]}),"\n",(0,i.jsxs)(s.p,{children:["In order to provide a good debugging experience, Builder uses the ",(0,i.jsx)(s.code,{children:"cheap-module-source-map"})," format Source Map by default in the development environment, which is a high-quality Source Map format and will bring certain performance overhead."]}),"\n",(0,i.jsx)(s.p,{children:"You can improve build speed by adjusting the source map format of your development environment."}),"\n",(0,i.jsx)(s.p,{children:"For example to disable Source Map:"}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"webpackChain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(chain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"chain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".devtool"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Or set the source map format of the development environment to the cheapest ",(0,i.jsx)(s.code,{children:"eval"})," format:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"webpackChain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(chain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"chain"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".devtool"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eval'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["For detailed differences between different Source Map formats, see ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer",children:"webpack - devtool"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"adjust-browserslist-for-development",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-browserslist-for-development",children:"#"}),"Adjust Browserslist for development"]}),"\n",(0,i.jsxs)(s.p,{children:["This strategy is similar to ",(0,i.jsx)(s.a,{href:"/builder/en/guide/optimization/optimize-bundle.html#adjust-browserslist",children:'"Adjust Browserslist"'}),", the difference is that we can set different browserslist for development and production environment, thereby reducing the compilation overhead in the development environment."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, you can add the following config to ",(0,i.jsx)(s.code,{children:"package.json"}),", which means that only the latest browsers are compatible in the development environment, and the actual browsers are compatible in the production environment:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-json",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"browserslist"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"production"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'">0.2%"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"not dead"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"not op_mini all"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"development"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 chrome version"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 firefox version"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 safari version"'})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"Note that this strategy can lead to some differences in the build result of development production environment."}),"\n",(0,i.jsxs)(s.h2,{id:"production-optimization-strategies",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#production-optimization-strategies",children:"#"}),"Production optimization strategies"]}),"\n",(0,i.jsx)(s.p,{children:"The following are strategies for improve build performance in production environment."}),"\n",(0,i.jsxs)(s.h3,{id:"disable-source-map",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-source-map",children:"#"}),"Disable Source Map"]}),"\n",(0,i.jsxs)(s.p,{children:["If your project does not need Source Map in the production, you can turn it off through the ",(0,i.jsx)(s.code,{children:"disableSourceMap"})," config to improve the build speed."]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableSourceMap"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-output.html#outputdisablesourcemap",children:"output.disableSourceMap"})," for details."]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);