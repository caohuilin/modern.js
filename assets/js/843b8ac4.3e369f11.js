"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[48131],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44767:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(49231);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},68623:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(86215),a=n(49231),o=n(92435),l=n(79793),s=n(1506);const c="tabItem_dC8I";function i(e){var t,n,o;const{lazy:i,block:u,defaultValue:d,values:p,groupId:m,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.lx)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.UB)(),[w,O]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==w&&(N(t),O(r),null!=m&&k(m,r))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},f)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,o.Z)();return a.createElement(i,(0,r.Z)({key:String(t)},e))}},98467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(86215),a=(n(49231),n(54852)),o=n(68623),l=n(44767);const s={title:"\u6d4b\u8bd5 Model"},c=void 0,i={unversionedId:"guides/tutorials/c10-model/10.4-testing",id:"guides/tutorials/c10-model/10.4-testing",title:"\u6d4b\u8bd5 Model",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Model\u3002",source:"@site/docs/guides/tutorials/c10-model/10.4-testing.md",sourceDirName:"guides/tutorials/c10-model",slug:"/guides/tutorials/c10-model/10.4-testing",permalink:"/docs/guides/tutorials/c10-model/10.4-testing",tags:[],version:"current",frontMatter:{title:"\u6d4b\u8bd5 Model"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 Model",permalink:"/docs/guides/tutorials/c10-model/10.3-use-model"},next:{title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model",permalink:"/docs/guides/tutorials/c11-container/11.1-use-model-with-app-state"}},u={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Model\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u91cc\u6211\u4eec\u6765\u6d4b\u8bd5 Model\u3002"),(0,a.kt)("p",null,"\u8ddf",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c06-css-and-component/6.6-testing"},"\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"),"\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9 Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"models/contacts")," \u4e3a\u4f8b\uff0c\u6211\u4eec\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".test")," \u6587\u4ef6\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/contacts/models/contacts.test.ts\n"))),(0,a.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/contacts/models/contacts.test.ts\n")))),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53ef\u4ee5\u4f7f\u7528 Modern.js \u63d0\u4f9b\u7684 Model \u6a21\u62df\uff0c\u53ef\u4ee5\u8c03\u7528\u8fd9\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\u5199\u65ad\u8a00\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 createStore API \u6765\u7f16\u5199\u6d4b\u8bd5\u6587\u4ef6\uff0c\u793a\u4f8b\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@modern-js/runtime/testing';\nimport contactsModel from './contacts';\n\nconst mockItem = {\n  avatar: '',\n  name: '\u674e\u534e',\n  age: '16',\n  email: 'lihua@gmail.com',\n  archived: false,\n};\n\ndescribe('test contracts model', () => {\n  it('actions works well', async () => {\n    const store = createStore();\n    const [state, actions] = store.use(contactsModel);\n\n    state.items.push(mockItem);\n    expect(store.use(contactsModel)[0].items.length).toBe(1);\n    expect(store.use(contactsModel)[0].items[0].archived).toBeFalsy();\n\n    await actions.archive('lihua@gmail.com');\n    expect(store.use(contactsModel)[0].items[0].archived).toBeTruthy();\n  });\n});\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c10/hello-modern-4"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);