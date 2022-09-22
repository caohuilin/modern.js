"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[23161],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(86215),a=(n(49231),n(54852));const i={sidebar_label:"state",sidebar_position:2},o="runtime.state",l={unversionedId:"apis/app/config/runtime/state",id:"apis/app/config/runtime/state",title:"runtime.state",description:"- \u7c7b\u578b\uff1aboolean | object",source:"@site/docs/apis/app/config/runtime/state.md",sourceDirName:"apis/app/config/runtime",slug:"/apis/app/config/runtime/state",permalink:"/docs/apis/app/config/runtime/state",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"state",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"router",permalink:"/docs/apis/app/config/runtime/router"},next:{title:"masterApp",permalink:"/docs/apis/app/config/runtime/master-app"}},p={},s=[{value:"<code>immer</code>",id:"immer",level:2},{value:"<code>effects</code>",id:"effects",level:2},{value:"<code>autoActions</code>",id:"autoactions",level:2},{value:"<code>devtools</code>",id:"devtools",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtimestate"},"runtime.state"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | object")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/features/model/quick-start"},"Model")," \u6765\u505a\u72b6\u6001\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"immer"},(0,a.kt)("inlineCode",{parentName:"h2"},"immer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u4ee5 mutable \u66f4\u65b0 state \u7684\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"effects"},(0,a.kt)("inlineCode",{parentName:"h2"},"effects")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u526f\u4f5c\u7528\u7ba1\u7406\u7279\u6027\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"autoactions"},(0,a.kt)("inlineCode",{parentName:"h2"},"autoActions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u81ea\u52a8\u751f\u6210 actions \u7279\u6027\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,a.kt)("h2",{id:"devtools"},(0,a.kt)("inlineCode",{parentName:"h2"},"devtools")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | EnhancerOptions")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528 devtools\uff0c\u9ed8\u8ba4\u542f\u7528\uff0c\u540c\u65f6\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md"},"redux-devtools-extension")," \u7684\u6240\u6709\u53c2\u6570\uff0c\u82e5\u60f3\u7981\u7528\u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"))}c.isMDXComponent=!0}}]);