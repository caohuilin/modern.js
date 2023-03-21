(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_model_create-store_mdx"],{59522:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return t},title:function(){return c},default:function(){return d}});var r=n("12151"),o=n("21447"),l=n.ir(n("25462"));let i={sidebar_position:10,title:"createStore"},t=[{id:"function-signature",text:"Function Signature",depth:2},{id:"input",text:"Input",depth:3},{id:"return-value",text:"Return Value",depth:3},{id:"example",text:"Example",depth:2}],c="createStore";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",em:"em",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"createstore",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"}),"createStore"]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"createStore"})," is used to create a Store. Reduck’s Store based on Redux's ",(0,r.jsx)(s.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," implementatio. Used to store the state of the application and managing the state and Model."]}),"\n",(0,r.jsxs)(s.p,{children:["In general, this API is only used when you need to have full control over the creation of the Store. For example, to customize a Store, pass in the ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/Provider.html",children:"'Provider'"})," component to use."]}),"\n",(0,r.jsxs)(s.h2,{id:"function-signature",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"}),"Function Signature"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  initialState"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  middlewares"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Middleware"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  models"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Model"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Plugin"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  enhancers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreEnhancer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduckStore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduxStore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  use"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"typeof"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useModel;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"unmount"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (model"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Model"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createStore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(config"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduckStore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"input",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"config"}),": store options.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"initialState"}),": set the initial state for store."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"models"}),": set the Model to mount to the Store in advance(No need for normal use)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"middlewares"}),": set Redux ",(0,r.jsx)(s.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"middleware"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"enhancers"}),": set Redux ",(0,r.jsx)(s.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"plugins"}),": set Reduck plugin.",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"experimental API, not recommended"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"return-value",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"}),"Return Value"]}),"\n",(0,r.jsx)(s.p,{children:"Reduck Store:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"use"}),": mount and fetch Model objects dynamically. Usage is the same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model.html",children:"'useModel'"}),", but can be used outside of React components."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"unmount"}),": unmount the Model object, and the Model State is cleared from the Store."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ReduxStore"}),": ",(0,r.jsx)(s.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"Redux Store API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"example",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createStore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"load"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".use"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(fooModel);"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".load"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},25462:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),o=n("21447");function l(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"information"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["\nBy default, the export package name for all APIs in this section is: ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/model"}),"."]}),(0,r.jsxs)(s.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,r.jsx)(s.code,{children:"@modern-js-reduck/react"}),"."]})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);