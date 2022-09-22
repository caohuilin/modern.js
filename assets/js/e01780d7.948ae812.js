"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[62928],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(86215),o=(n(49231),n(54852));const a={title:"CSS-In-JS API",sidebar_position:2},i=void 0,p={unversionedId:"apis/app/runtime/utility/css-in-js",id:"apis/app/runtime/utility/css-in-js",title:"CSS-In-JS API",description:"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002",source:"@site/docs/apis/app/runtime/utility/css-in-js.md",sourceDirName:"apis/app/runtime/utility",slug:"/apis/app/runtime/utility/css-in-js",permalink:"/docs/apis/app/runtime/utility/css-in-js",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"CSS-In-JS API",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"hook",permalink:"/docs/apis/app/runtime/web-server/hook"},next:{title:"loadable",permalink:"/docs/apis/app/runtime/utility/loadable/loadable_"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"styled")," \u5177\u4f53API\uff0c\u8bf7\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component api"),"\u3002"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"\u8bf7\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component API"),"\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import styled from \'@modern-js/runtime/styled\';\n\nconst Button = styled.button`\n  background: palevioletred;\n  border-radius: 3px;\n  border: none;\n  color: white;\n`\n\nconst TomatoButton = styled(Button)`\n  background: tomato;\n`\n\nrender(\n  <>\n    <Button>I\'m purple.</Button>\n    <br />\n    <TomatoButton>I\'m red.</TomatoButton>\n  </>\n)\n`\n\nrender(\n  <div>\n    <Button\n      href="https://github.com/styled-components/styled-components"\n      target="_blank"\n      rel="noopener"\n      primary\n    >\n      GitHub\n    </Button>\n\n    <Button as={Link} href="/docs">\n      Documentation\n    </Button>\n  </div>\n)\n')))}m.isMDXComponent=!0}}]);