!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["t"]=e():t["t"]=e()}(self,(()=>(()=>{"use strict";var t={};function e(t,e){let n=t(e);return Array.isArray(n)&&(n=n.join("")),n}function n(t){const e=t.indexOf("{{");let n=0;for(let o=e;o<t.length;o++)if("{"===t[o]&&"{"===t[o+1]?(n++,o++):"}"===t[o]&&"}"===t[o+1]&&(n--,o++),0===n)return{start:e,end:o};return{start:e,end:-1}}function o(t){const e=document.createElement("div");return e.innerHTML=function(t){return t.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(t),e.textContent||e.innerText||""}(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"o",{value:!0})})(t);const r={},s=(t,e)=>{const n=t+JSON.stringify(Object.keys(e).join(""));if(!r[n]){const o=`return (state) => {${Object.keys(e).map((t=>`const ${t} = state["${t}"].value;`)).join("\n")} return ${t}}`;r[n]=Function(o)()}return r[n]},i=/<\/?[\w-]+/g,c=/[\w-]+(\s*=\s*("|')[^"']*("|'))/g,u=/[^\w\s]/g,l=/\s+/g,a=function(t,n,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=t,c="";for(let t=0;t<n.length;t++){const{start:u,end:l,value:a}=n[t],d=i.slice(0,u),f=i.slice(l+1);let h=n[t].i;const m=n[t].u.filter((t=>r.includes(t)));(m.length||null===h)&&(h=e(s(a,o),o),n[t].i=h),c+=`${d}${h}`,i=f}return c+=i,c},d=(t,e)=>{const r=[];let s=String(t),a=!0;for(;a;){const{start:t,end:f}=n(s);if(-1===f){a=!1;break}const h=s.slice(t+2,f-1),m=s.slice(f+1),v=o(h).replace(/[\r\n]+/g,"").trim(),p={},b=new Set;(d=v,d.replace(i,"").replace(c,"$1").replace(u," ").trim().replace(l,"@")).split("@").filter((t=>!p[t]&&(p[t]=!0))).filter((t=>e[t])).forEach((t=>{e[t].u.length?e[t].u.forEach((t=>b.add(t))):b.add(t)})),r.push({start:t,end:f,value:v,u:Array.from(b),i:null}),s=m}var d;return r},f=t=>t.split("-").reduce(((t,e,n)=>t+(n?e[0].toUpperCase()+e.slice(1):e)),"");function h(t){return"true"===t||"false"!==t&&("null"===t?null:"undefined"===t?void 0:""===t?"":isNaN(Number(t))?t:Number(t))}function m(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const o=Object.assign({},e);for(let r=0;r<t.length;r++){const s=f(t[r].name);let i=t[r].value,c=[];t[r].l&&(c=Array.from(new Set(t[r].h.map((t=>t.u)).flat())),i=a(t[r].value,t[r].h,e,n)),o[s]={value:h(i),m:[],v:[],u:c}}return o}function v(t,e,n,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];const s=o.find((e=>e.id===t));if(!s)return m(e,n,r);const i=v(s.parentId,s.attributes,n,o,r);return Object.assign({},i,m(e,i,r))}const p=(t,e,n)=>{const o=e.getAttribute(`data-on-${t}`);if(!o)throw new Error("Missing data-handler attribute");const r=s(o,n);return function(e){try{r(n),e.preventDefault()}catch(e){throw new Error(`${e.message}: data-on-${t}=${o}`)}}};function b(t,e,n){t.querySelectorAll(`[data-on-${e}]`).forEach((t=>{const o=p(e,t,n);t.addEventListener(e,o),t[`${e}Handler`]=o}))}function g(t,e){b(t,"click",e),b(t,"change",e)}function w(t){return(new DOMParser).parseFromString(t,"text/html").body.firstChild}const y=t=>t.nodeType!==Node.TEXT_NODE&&-1!==t.tagName.indexOf("-");function $(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=[],r=document.evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);let s=r.iterateNext();for(;s;)n(s)&&o.push(s),s=r.iterateNext();return o}const N=t=>$(t,"self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",(t=>!y(t)));function S(t,e,n,o,r){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;const u=o.replace(/>\s*([\s\S]*?)\s*</g,">$1<"),l=d(u,r),h=w(a(u,l,r,[]));return function(t,e,n,o){e.map((e=>{e.u.forEach((e=>{-1===n[e].m.indexOf(t)&&n[e].m.push(t);const r=o.find((t=>f(t.name)===e));r&&(r.m||(r.m=[]),-1===r.m.indexOf(t)&&r.m.push(t))}))}))}(t,l,r,s),e.add(e.p(t,i,s,c,l,u,h,h.cloneNode(!0))),n.parentElement?.replaceChild(h,n),h}function x(t,e,n,o){function r(){return Reflect.construct(HTMLElement,[],r)}r.prototype=Object.create(HTMLElement.prototype),r.prototype.constructor=r,r.prototype.connectedCallback=function(t,e,n){return function(){const o=this.tagName.toLowerCase(),r=n.id(),s=this.dataset.parentId?Number(this.dataset.parentId):null,i=v(s,[],e.value,n.list),c=function(t,e){const n=w(t);if(n.nodeType!==Node.TEXT_NODE){E(n,e);const t=n.querySelectorAll("*");for(let n=0;n<t.length;n++)E(t[n],e)}let o=n.outerHTML;return o||(o=n.textContent),o}(t.innerHTML,r),u=function(t,e){const n=((t,e)=>Array.from(t.attributes).map((t=>{const n=d(t.value,e);return{name:t.name,value:t.value,h:n,l:!!n.length,m:[]}})))(t,e),o=d(t.innerHTML,e);return n.push({name:"children",value:t.innerHTML,h:o,l:!!o.length,m:[]}),n}(this,i),l=document.createElement("div");l.innerHTML=c,n.add(n.p(r,s,u,o));const a=N(l);for(let t=0;t<a.length;t++)A(a[t],s,o,u,i,n,e);const f=l.firstChild;f.cogAnchorId=r,this.parentElement?.replaceChild(f,this)}}(e,n,o),customElements.define(t,r)}function E(t,e){t.tagName.includes("-")&&t.setAttribute("data-parent-id",String(e))}function A(t,e,n,o,r,s,i){const c=s.id(),u=t.outerHTML;i.$(n,c);let l={};i.N&&i.N[n]&&(l=i.N[n].customElements[c]);const a=m(o,Object.assign({},r,l)),d=S(c,s,t,u,a,o,e,n);d.nodeType!==Node.TEXT_NODE&&g(d.parentElement,a),d.cogAnchorId=c}function j(t,e){const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o],s=e.getAttribute(r.name);s!==r.value&&n.push({name:r.name,newValue:h(s||"")})}return n}function O(t,e){if(e.name.startsWith("data-attribute-")){const n=e.name.substring(15);e.newValue?(t[n]=!0,t.setAttribute(n,e.newValue)):(t[n]=!1,t.removeAttribute(n))}}function C(t,e){t.querySelectorAll(`[data-on-${e}]`).forEach((t=>{const n=t[`${e}Handler`];n&&t.removeEventListener(e,n)}))}function M(t,e){if(t.nodeType===Node.TEXT_NODE)return function(t,e){return t.textContent!==e.textContent?[{node:e,content:e.textContent}]:[]}(t,e);const n=j(t,e),o=n.length>0?[{node:e,attributes:n}]:[];return y(t)?o.concat((r=e,t.innerHTML!==r.innerHTML?[{node:r,content:r.innerHTML}]:[])):o.concat(function(t,e){const n=[],o=[],r=Math.max(t.childNodes.length,e.childNodes.length);let s=[];for(let i=0;i<r;i++){const r=t.childNodes[i],c=e.childNodes[i];if(r?.nodeType===Node.TEXT_NODE&&c?.nodeType===Node.TEXT_NODE){if(r.textContent?.trim()!==c.textContent?.trim())return[{node:e,content:e.innerHTML}]}else r?c?s=s.concat(M(r,c)):n.push(r):o.push(c)}return n.length&&s.push({node:e,S:n}),o.length&&s.push({node:e,A:o}),s}(t,e));var r}function T(t,e,n){const o=[];let r=t;for(;r!==e;)o.unshift(Array.prototype.indexOf.call(r.parentNode.childNodes,r)),r=r.parentNode;let s=n;for(let t=0;t<o.length;t++){const e=o[t];if(!s.childNodes[e])return null;s=s.childNodes[e]}return s}function F(t,e,n,o,r,s){const i=n?.slice()??[],c=[];if(i.forEach((t=>{c.push({name:t.name,value:t.newValue,h:[],l:!1,m:[]})})),void 0!==e&&c.push({name:"children",value:e,h:[],l:!1,m:[]}),c.length){const e=o.get(t.cogAnchorId);if(null!==e.element)H(e,o,c,r,s);else{const t={};for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n];o.m&&o.m.length&&(t[o.name]=o.m)}for(let e=0;e<c.length;e++){const n=t[c[e].name];for(let t=0;t<n.length;t++)H(o.get(n[t]),o,c,r,s)}}}}function H(t,e,n,o,r){const s=function(t,e){const n=t.concat(e),o={};for(let t=0;t<n.length;t++)o[n[t].name]=n[t];return Object.values(o)}(t.attributes,n);t.attributes=s,t.j=t.attributes.map((t=>f(t.name))),G(e,t,o,r)}function I(t,e,n){var o;t.nodeType===Node.TEXT_NODE?t.textContent=e:(C(o=t,"click"),C(o,"change"),t.innerHTML=e,g(t,n))}function U(t,e){for(let n=0;n<e.length;n++)O(t,e[n]),t.setAttribute(e[n].name,e[n].newValue)}function k(t,e){const n=document.createDocumentFragment();for(let t=0;t<e.length;t++)n.appendChild(e[t]);t.appendChild(n)}function L(t,e){const n=document.createDocumentFragment();for(let o=0;o<t.length;o++)t[o].cogAnchorId&&e.remove(t[o].cogAnchorId),n.appendChild(t[o]);n.textContent=""}function _(t,e,n){const o=[];let r=[];if(void 0!==t.A&&(r=t.A),void 0!==t.S)for(let r=0;r<t.S.length;r++){const s=T(t.S[r],e,n);s&&o.push(s)}return{O:r,C:o}}const G=(t,e,n,o)=>{const r=o.concat(e.j);let s=n.value;if(n.N&&e.M&&n.N[e.M]){const t=n.N[e.M].customElements[e.id];s=Object.assign({},n.value,t)}e.j=[];const i=v(e.parentId,e.attributes,s,t.list,r),c=a(e.T,e.h,i,r),u=e.lastTemplateEvaluation.cloneNode(!0),l=w(c),d=M(u,l);d.length>0&&(e.lastTemplateEvaluation=l.cloneNode(!0),function(t,e,n,o,r,s,i,c){for(let u=0;u<t.length;u++){const l=t[u],a=T(l.node,n,o);if(y(l.node))F(a,l.content,l.attributes,s,i,c);else{const{O:t,C:n}=_(l,e,o);void 0!==l.content?I(a,l.content,r):void 0!==l.attributes?U(a,l.attributes):t.length?k(a,t):n.length&&L(n,s)}}}(d,u,l,e.element,i,t,n,o))},{variable:P,render:R}=(()=>{let t=null;const e={F:0,list:[],index:{},get value(){return this.list},get(t){return this.list[this.index[t]]},add(t){this.list.push(t),this.index[t.id]=this.list.length-1},update(t,e,n){this.list[this.index[t]][e]=n},remove(t){const e=this.index[t];this.list.splice(e,1),this.index=this.list.reduce(((t,e,n)=>(t[e.id]=n,t)),{})},id(){return this.F++},p(t,e,n,o){return{id:t,parentId:e,element:arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,T:arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",lastTemplateEvaluation:arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,attributes:n,h:arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],M:o,shouldUpdate:arguments.length>8&&void 0!==arguments[8]&&arguments[8],j:arguments.length>9&&void 0!==arguments[9]?arguments[9]:[]}}};let n=null;const o={state:null,N:null,H:[],I:{},get value(){return this.state||(this.state={}),this.state},U(t){return this.N||(this.N={}),this.N[t]},$(t,e){if(this.N&&this.N[t]){this.N[t].customElements[e]={};for(let n=0;n<this.N[t].keys.length;n++){const o=this.N[t].keys[n];let r=this.N[t].k[o].value;const s=this.N[t].k[o].L;if(s&&(r=s(o,r.slice(0))),r instanceof Function){const t=r;r=function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t(...o,`cogId:${e}`)}}this.N[t].customElements[e][o]={value:r,m:[],v:[],u:[]}}}},_(t,e,n,o){this.N||(this.N={}),this.N[t]||(this.N[t]={keys:[],k:{},customElements:{}}),this.N[t].k[e]={value:n,L:o},this.N[t].keys.push(e)},G(t,e,n,o){this.N[t].customElements[e][n].value=o,this.N[t].customElements[e][n].v.forEach((t=>{this.P(e,t)})),this.P(e,n)},R(t,e){this.state||(this.state={}),this.state[t]?this.state[t].value=e:this.state[t]={value:e,m:[],v:[],u:[]}},B(t,e){this.state[t].value=e,this.value[t].v.forEach((t=>{this.D(t)})),this.D(t)},D(t){const e=t.split(".");if(e.length>1){const t=e[1].split(":"),n=t[0],o=Number(t[1]);this.P(o,n)}else this.value[t].m.forEach((e=>{this.P(e,t)}))},P(t,e){-1===this.H.indexOf(t)&&(this.H.push(t),this.I[t]=[]),-1===this.I[t].indexOf(e)&&this.I[t].push(e)},q(){this.H=[],this.I={}}};let r=0;function s(){null!==n&&cancelAnimationFrame(n),n=requestAnimationFrame((t=>{t-r>16.666666666666668&&(r=t,o.H.forEach((t=>{const n=e.get(t);G(e,n,o,o.I[t])})),o.q())}))}const i=(e,n)=>new Proxy(n,{get(n,r){const i=n[r];return"push"===r?function(){const r=t?.split(".");if(r&&r.length>1){const t=Number(r[1].split(":")[1]);o.P(t,e)}else o.value[e].v.forEach((t=>{o.D(t)})),o.D(e);s();for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return i.apply(n,u)}:i}});return{render:t=>{g(t,o.value),((t,e,n)=>{const o=N(t);for(let t=0;t<o.length;t++){const r=n.id(),s=o[t];s.innerHTML=s.innerHTML.trim();const i=S(r,n,s,s.outerHTML,e),c=j(s,i);for(let t=0;t<c.length;t++)O(i,c[t])}})(t,o.value,e),function(t,e,n){const o=$(t,"template"),r=document.createDocumentFragment();for(let t=0;t<o.length;t++){const s=o[t].getAttribute("id");if(s){if(o[t].innerHTML=o[t].innerHTML.replace(/[\r\n]+\s*/g,""),1!==o[t].content.children.length)throw new Error(`Template ${s} should have a single HTML Element child`);x(s,o[t],e,n),r.appendChild(o[t])}}r.textContent=""}(t,o,e)},variable:(e,n,r)=>{let c=e;if(r&&(c=`${r}.${e}`),n instanceof Function&&(n=((e,n)=>function(o){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];"string"==typeof o&&(0===o.indexOf("cogId:")?o=o.replace("cogId:",""):(s.unshift(o),o=null)),t=o?`${e}:${o}`:e;const c=n(...s);return t=null,c})(c,n)),r){let t;Array.isArray(n)&&(t=i),o._(r,e,n,t)}else Array.isArray(n)&&(n=i(e,n)),o.R(e,n);return{get value(){if(r){const n=t?.split(":")||[],s=n[1]?Number(n[1]):null;if(null===s)throw new Error(`Can't use outside of a template: ${e} (for ${r})`);const i=n[0].split("."),c=i[0],u=i[1];if(c!==r)throw new Error(`Can't use from another template: ${e} (for ${r}, used in ${c})`);const l=o.U(r).customElements[s][e];return u&&-1===l.v.indexOf(u)&&l.v.push(u),l.value}return null!==t&&-1===o.value[e].v.indexOf(t)&&o.value[e].v.push(t),o.value[e].value},set value(n){if(r){const s=t?.split(":")[1];if(!s)throw new Error("Can't call outside of a template");o.G(r,Number(s),e,n)}else o.B(e,n);s()},set:n=>{if(r){const s=t?.split(":")[1];if(!s)throw new Error("Can't call outside of a template");o.G(r,Number(s),e,n)}else o.B(e,n);s()}}}}})();document.addEventListener("DOMContentLoaded",(function(){R(document.getElementById("app"))}));const z=P("count",0,"my-counter");return P("increment",(()=>z.value++),"my-counter"),P("isEven",(()=>z.value%2==0),"my-counter"),t})()));