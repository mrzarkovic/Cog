!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["t"]=t():n["t"]=t()}(self,(()=>(()=>{"use strict";var n={};(n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"o",{value:!0})})(n);var t=function(n){return n.split("-").reduce((function(n,t,e){return n+(e?t[0].toUpperCase()+t.slice(1):t)}),"")},e=function(n,t){var e="return (state) => {".concat(Object.keys(t).map((function(n){return"const ".concat(n,' = state["').concat(n,'"];')})).join("\n")," return ").concat(n,"}");return Function(e)()};function r(n,t){try{var r=e(n,t)(t);return Array.isArray(r)&&(r=r.join("")),r}catch(t){throw new Error("Failed to create function from expression {{".concat(n,"}}: ").concat(t.message))}}function o(n,e){for(var o=Object.assign({},e),u=0;u<n.length;u++)o[t(n[u].name)]=n[u].u?r(n[u].value,e):n[u].value;return o}function u(n){for(var t=n.indexOf("{{"),e=0,r=t;r<n.length;r++)if("{{"===n.slice(r,r+2)?(e++,r++):"}}"===n.slice(r,r+2)&&(e--,r++),0===e)return{start:t,end:r};return{start:t,end:-1}}var a=function(n){return n.replace(/[\r\n]+\s*/g,"")},i=function(n,t){for(var e,o,i=n,c=!0,f="";c;){var l=u(i),d=l.start,v=l.end;if(-1===v){c=!1;break}var s=i.slice(d+2,v-1),m=i.slice(0,d),h=i.slice(v+1),b=r((e=a(s),o=void 0,(o=document.createElement("div")).innerHTML=function(n){return n.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(e),o.textContent||o.innerText||""),t);f+="".concat(m).concat(b),i=h}return f+i},c=/\{\{(.+?)\}\}/,f={stack:[],get value(){return this.stack},add:function(n){this.stack.push(n)},i:function(){this.stack=this.stack.filter((function(n){var t=n.element;return document.body.contains(t)}))}};function l(n,t,e){function r(){return Reflect.construct(HTMLElement,[],r)}r.prototype=Object.create(HTMLElement.prototype),r.prototype.constructor=r,r.prototype.connectedCallback=function(){var n,r,u,a=this,l=(u=a,Array.from(u.attributes).map((function(n){var t=c.exec(n.value);return{name:n.name,value:t?t[1]:n.value,u:!!t}}))),d=document.createElement("div");d.innerHTML=t.innerHTML.replace(/\{\{\s*children\s*\}\}/g,a.innerHTML);var v=o(l,e.value),s=d.innerHTML,m=i(d.innerHTML,v);d.innerHTML=m;var h=d.firstChild;null===(n=a.parentNode)||void 0===n||n.insertBefore(h,a),!a.dataset.l&&h&&(h.v=m,f.add({element:h,m:s,h:l}),f.i()),null===(r=a.parentNode)||void 0===r||r.removeChild(a)},customElements.define(n,r)}var d=function(n,t,r){var o=t.getAttribute("data-on-".concat(n));if(!o)throw new Error("Missing data-handler attribute");var u=e(o,r);return function(t){try{u(r),t.preventDefault()}catch(t){throw new Error("".concat(t.message,": data-on-").concat(n,"=").concat(o))}}};function v(n,t,e){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var r=d(t,n,e);n.addEventListener(t,r),n["".concat(t,"Handler")]=r}))}function s(n,t){v(n,"click",t),v(n,"change",t)}var m=function(n){for(var t=[],e=document.evaluate("template",n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext(),o=document.createDocumentFragment();r;)r.innerHTML=a(r.innerHTML),t.push(r),r=e.iterateNext();for(var u=0;u<t.length;u++)o.appendChild(t[u]);return o.textContent="",t},h=function(n){return-1!==n.tagName.indexOf("-")},b=function(n){for(var t=[],e=document.evaluate("self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext();r;)h(r)||t.push({element:r,m:r.outerHTML,h:[]}),r=e.iterateNext();return t};function p(n,t){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var e=n["".concat(t,"Handler")];e&&n.removeEventListener(t,e)}))}function y(n,t){var e;if(n.nodeType===Node.TEXT_NODE)return n.textContent!==t.textContent?[{element:n,p:t,content:null!==(e=t.textContent)&&void 0!==e?e:""}]:[];n.innerHTML=a(n.innerHTML),t.innerHTML=a(t.innerHTML);for(var r=!1,o=[],u=0;u<n.childNodes.length;u++){var i=n.childNodes[u],c=t.childNodes[u];if(i.nodeType===Node.TEXT_NODE&&c&&c.nodeType===Node.TEXT_NODE&&i.textContent!==c.textContent){r=!0;break}}var f=function(n,t){for(var e=[],r=0;r<n.attributes.length;r++){var o=n.attributes[r],u=t.getAttribute(o.name);u!==o.value&&e.push({name:o.name,newValue:u||""})}return e}(n,t);if(f.length>0&&o.push({element:n,p:t,attributes:f}),r)o.push({element:n,p:t,content:t.innerHTML});else for(var l=0;l<n.childNodes.length;l++){var d=y(n.childNodes[l],t.childNodes[l]);o=o.concat(d)}return o}function g(n){return(new DOMParser).parseFromString(n,"text/html").body.firstChild}var w=function(n,t){for(var e=0,r=function(){var r,u=n[e],a=u.element,c=u.m,f=o(u.h,t),l=i(c,f),d=g(l),v=g(null!==(r=a.v)&&void 0!==r?r:a.outerHTML),m=y(v,d);m.length>0&&(a.v=l,m.map((function(n){var t,e,r=n.element,o=n.p,u=n.content,i=n.attributes,c=function(n,t,e){for(var r=[],o=n;o!==t;)r.unshift(Array.prototype.indexOf.call(o.parentNode.childNodes,o)),o=o.parentNode;for(var u=e,a=0,i=r;a<i.length;a++){var c=i[a];if(!u.childNodes[c])return null;u=u.childNodes[c]}return u}(r,v,a);c&&(r.nodeType!==Node.TEXT_NODE&&h(r)?null===(t=c.parentElement)||void 0===t||t.replaceChild(o,c):void 0!==u?c.nodeType===Node.TEXT_NODE?c.textContent=u:(p(e=c,"click"),p(e,"change"),c.innerHTML=u,s(c,f)):void 0!==i&&i.map((function(n){var t=n.name,e=n.newValue;c.setAttribute(t,e)})))})))};e<n.length;e++)r()},x=function(n){var t=[],e=[],r=function(n){return{element:null,get value(){if(this.element||(this.element=n.querySelector("#app")),!this.element)throw new Error("No app element found!");return this.element}}}(n),o={state:null,get value(){return this.state||(this.state={}),this.state},set:function(n,t){this.state||(this.state={}),this.state[n]=t}};function u(){w(t,o.value),w(f.value,o.value)}function a(n,t){setTimeout((function(){o.set(n,t),u()}),0)}var i=function(){e=m(r.value),t=b(r.value),function(n){n.forEach((function(n){var t=n.getAttribute("id");if(!t)throw new Error("Missing id attribute");if(1!==n.content.childNodes.length)throw new Error("Template ".concat(t," should have a single child"));l(t,n,o)}))}(e),s(r.value,o.value),u()},c=n.j;return c&&n.removeEventListener("DOMContentLoaded",c),n.addEventListener("DOMContentLoaded",i),n.j=i,{variable:function(n,t){return o.set(n,t),{set value(t){a(n,t)},get value(){return o.value[n]},set:function(t){a(n,t)}}}}}(document).variable;function E(n){return function(n){if(Array.isArray(n))return j(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return j(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?j(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var A=x("todos",[{text:"hello",done:!1}]);x("save",(function(){var n=document.querySelector("[data-input=todo");null!=n&&n.value&&(A.set([].concat(E(A.value),[{text:n.value,done:!1}])),n.value="")})),x("toggleTodo",(function(n){var t=E(A.value);t[n].done=!t[n].done,A.set(t)})),x("Checkbox",(function(n){var t=n.index,e=void 0===t?-1:t,r=n.checked,o=void 0!==r&&r;return'<input type="checkbox" id="todo'.concat(e,'" data-on-change="toggleTodo(').concat(e,')" ').concat(o?"checked":""," />")}));var M=x("counter",0);return x("increment",(function(){M.set(M.value+1)})),n})()));