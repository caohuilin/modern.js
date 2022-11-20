"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[752],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29521:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(29901);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5207:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(18249),r=n(29901),o=n(3246),s=n(36316),l=n(25789);const i="tabItem_YENo";function c(e){var t,n,o;const{lazy:c,block:p,defaultValue:m,values:u,groupId:d,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.lx)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.UB)(),[y,C]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=d){const e=g[d];null!=e&&e!==y&&v.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==y&&(x(t),C(a),null!=d&&N(d,a))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},72370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(18249),r=(n(29901),n(57522)),o=n(5207),s=n(29521);const l={title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},i=void 0,c={unversionedId:"guides/tutorials/c09-bff/9.3-fetch-bff",id:"guides/tutorials/c09-bff/9.3-fetch-bff",title:"\u4ece BFF \u83b7\u53d6\u6570\u636e",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002",source:"@site/docs/guides/tutorials/c09-bff/9.3-fetch-bff.md",sourceDirName:"guides/tutorials/c09-bff",slug:"/guides/tutorials/c09-bff/9.3-fetch-bff",permalink:"/docs/guides/tutorials/c09-bff/9.3-fetch-bff",tags:[],version:"current",frontMatter:{title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},sidebar:"guidesSidebar",previous:{title:"\u542f\u7528 BFF",permalink:"/docs/guides/tutorials/c09-bff/9.2-enable-bff"},next:{title:"\u5e94\u7528\u67b6\u6784",permalink:"/docs/guides/tutorials/c10-model/10.1-application-architecture"}},p={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u628a\u4e0d\u9700\u8981\u7684\u6837\u677f\u6587\u4ef6\u6e05\u7406\u6389\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts.ts"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r api/info api/_app.ts\nmv api/index.ts api/contacts.ts\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"rm -r api/info\nrm api/_app.ts\nmv api/index.ts api/contacts.ts\n")))),(0,r.kt)("p",null,"\u6b64\u65f6 API \u8def\u7531\u5c06\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/contacts"),"\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Marak/Faker.js"},"faker")," \u6765 mock \u9700\u8981\u7684\u6570\u636e\uff0c\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add faker\n")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"api/contacts.ts")," \u5185\u5bb9\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { name, internet } from 'faker';\n\nexport const get = async () => {\n  const mockData = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return { code: 200, data: mockData };\n};\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6570\u636e\u540c\u6837\u53ef\u4ee5\u4ece\u8fdc\u7aef\u63a5\u53e3\u83b7\u53d6\uff0c\u6b64\u5904\u4ec5\u4e3a\u4e86\u6f14\u793a\u3002"))),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/contacts"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/api-result.png",alt:"browser-result"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx")," \u91cc\u786c\u7f16\u7801\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u6539\u6210\u4ece BFF \u52a0\u8f7d\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u4e1a\u52a1\u903b\u8f91\u8fc1\u79fb\u5230\u7ec4\u4ef6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u53ea\u4fdd\u7559\u7b80\u5355\u7684\u8def\u7531\u90e8\u5206\uff0c\u6267\u884c\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/contacts/components/AllContacts/\nmkdir -p src/contacts/components/ArchivedContacts/\ntouch src/contacts/components/AllContacts/index.tsx\ntouch src/contacts/components/ArchivedContacts/index.tsx\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/contacts/components/AllContacts/\nmkdir -p src/contacts/components/ArchivedContacts/\nni src/contacts/components/AllContacts/index.tsx\nni src/contacts/components/ArchivedContacts/index.tsx\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ArchivedContacts/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { List } from 'antd';\nimport Item from '../Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockArchivedData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n]);\n\nconst ArchivedContacts = () => (\n  <List\n    dataSource={mockArchivedData}\n    renderItem={info => <Item key={info.name} info={info} />}\n  />\n);\n\nexport default ArchivedContacts;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AllContacts/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\nimport { List } from 'antd';\nimport { get as contacts } from '@api/contacts';\nimport Item from '../Item';\n\nconst AllContacts = () => {\n  const [list, setList] = useState(\n    [] as Array<{ name: string; email: string; avatar: string }>,\n  );\n  const loadMockData = async () => {\n    const { data } = await contacts();\n    setList(data);\n  };\n  useEffect(() => {\n    if (!list.length) {\n      loadMockData();\n    }\n  });\n  return (\n    (list.length && (\n      <List\n        dataSource={list}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    )) || (\n      <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n        Pending...\n      </div>\n    )\n  );\n};\n\nexport default AllContacts;\n")),(0,r.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u51fd\u6570\uff08\u524d\u540e\u7aef\u4e00\u4f53\u5316\uff09\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8c03\u7528 BFF \u63a5\u53e3\uff0c\u8c03\u7528\u65f6\u65e0\u9700\u5173\u5fc3\u57df\u540d\u3001\u8def\u5f84\u7b49\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u521b\u5efa BFF \u65f6\uff0cModern.js \u5df2\u7ecf\u9ed8\u8ba4\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconig.json")," \u4e2d\u6ce8\u5165\u4e86\u522b\u540d\u3002\u8fd9\u4e5f\u662f\u4e4b\u524d\u63d0\u5230\u7684\uff0c\u751f\u6210\u5668\u5728\u9879\u76ee\u521b\u5efa\u4e4b\u540e\u5e76\u4e0d\u4f1a\u88ab\u629b\u5f03\uff0c\u4ecd\u65e7\u53ef\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u4e3a\u9879\u76ee\u63d0\u4f9b\u65b0\u7684\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contacts/App.tsx"),"\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," \u7ec4\u4ef6\u7684\u8c03\u7528\u4ee3\u7801\u66ff\u6362\u6210\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ArchivedContacts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Route path="/" exact={true}>\n  <Helmet>\n    <title>All</title>\n  </Helmet>\n  <AllContacts />\n</Route>\n<Route path="/archives" exact={true}>\n  <Helmet>\n    <title>Archives</title>\n  </Helmet>\n  <ArchivedContacts />\n</Route>\n')),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u91cc\u7684 mock \u6570\u636e\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," \u7ec4\u4ef6\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\u66ff\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"ContactList"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Route, Switch, useHistory } from '@modern-js/runtime/router';\nimport { Helmet } from '@modern-js/runtime/head';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport './styles/utils.css';\nimport AllContacts from './components/AllContacts';\nimport ArchivedContacts from './components/ArchivedContacts';\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u518d\u6253\u5f00\u9875\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/contacts"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u52a0\u8f7d\u540e\uff0c\u4f1a\u5148\u521d\u59cb\u5316\u8054\u7cfb\u4eba\u6570\u636e\uff08\u663e\u793a pending\uff09\uff0c\u4e4b\u540e\u6bcf\u6b21\u5207\u6362\u5230 All \u5217\u8868\uff0c\u4e5f\u4f1a\u91cd\u65b0\u8bf7\u6c42\u8054\u7cfb\u4eba\u6570\u636e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/browser-result.png",alt:"browser-result"})),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c09/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);