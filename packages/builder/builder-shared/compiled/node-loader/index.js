(()=>{"use strict";var e={131:(e,r,t)=>{const n=t(577);e.exports=n.default;e.exports.raw=n.raw},577:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:true});r["default"]=loader;r.raw=void 0;var n=t(300);var o=_interopRequireDefault(t(784));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loader(e){const r=this.getOptions(o.default);const t=(0,n.interpolateName)(this,typeof r.name!=="undefined"?r.name:"[contenthash].[ext]",{context:this.rootContext,content:e});this.emitFile(t,e);return`\ntry {\n  process.dlopen(module, __dirname + require("path").sep + __webpack_public_path__ + ${JSON.stringify(t)}${typeof r.flags!=="undefined"?`, ${JSON.stringify(r.flags)}`:""});\n} catch (error) {\n  throw new Error('node-loader:\\n' + error);\n}\n`}const a=true;r.raw=a},300:e=>{e.exports=require("../loader-utils2")},784:e=>{e.exports=JSON.parse('{"title":"Node Loader options","type":"object","properties":{"name":{"anyOf":[{"type":"string"},{"instanceof":"Function"}]},"flags":{"type":"integer"}},"additionalProperties":false}')}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var o=r[t]={exports:{}};var a=true;try{e[t](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(131);module.exports=t})();