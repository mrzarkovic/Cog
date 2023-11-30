!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["t"]=n():t["t"]=n()}(self,(()=>(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"o",{value:!0})})(t);var n={element:null,get value(){if(this.element||(this.element=document.querySelector("#app")),!this.element)throw new Error("No app element found!");return this.element}},e=function(t){return t.split("-").reduce((function(t,n,e){return t+(e?n[0].toUpperCase()+n.slice(1):n)}),"")},r=function(t,n){var e="return (state) => {".concat(Object.keys(n).map((function(t){return"const ".concat(t,' = state["').concat(t,'"];')})).join("\n")," return ").concat(t,"}");return Function(e)()};function o(t,n){try{var e=r(t,n)(n);return Array.isArray(e)&&(e=e.join("")),e}catch(n){throw new Error("Failed to create function from expression {{".concat(t,"}}: ").concat(n.message))}}function i(t,n){for(var r=Object.assign({},n),i=0;i<t.length;i++)r[e(t[i].name)]=t[i].i?o(t[i].value,n):t[i].value;return r}function u(t){for(var n=t.indexOf("{{"),e=0,r=n;r<t.length;r++)if("{{"===t.slice(r,r+2)?(e++,r++):"}}"===t.slice(r,r+2)&&(e--,r++),0===e)return{start:n,end:r};return{start:n,end:-1}}var a=function(t,n){for(var e,r,i=t,a=!0,c="";a;){var f=u(i),l=f.start,v=f.end;if(-1===v){a=!1;break}var d=i.slice(l+2,v-1),s=i.slice(0,l),m=i.slice(v+1),h=o((e=d,r=void 0,(r=document.createElement("div")).innerHTML=function(t){return t.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(e),r.textContent||r.innerText||""),n);c+="".concat(s).concat(h),i=m}return c+i},c=/\{\{(.+?)\}\}/,f=function(t){return Array.from(t.attributes).map((function(t){var n=c.exec(t.value);return{name:t.name,value:n?n[1]:t.value,i:!!n}}))},l={stack:[],get value(){return this.stack},add:function(t){this.stack.push(t)},u:function(){this.stack=this.stack.filter((function(t){var n=t.element;return document.body.contains(n)}))}};function v(t,n,e){function r(){return Reflect.construct(HTMLElement,[],r)}r.prototype=Object.create(HTMLElement.prototype),r.prototype.constructor=r,r.prototype.connectedCallback=function(){var t,r,o,u=this,c=f(u),v=document.createElement("div");v.innerHTML=n.innerHTML.replace(/\{\{\s*children\s*\}\}/g,u.innerHTML);var d=i(c,e.value),s=v.innerHTML,m=[];(null===(t=v.firstChild)||void 0===t?void 0:t.nodeType)!==Node.TEXT_NODE&&(m=f(v.firstChild));var h=a(v.innerHTML,d);v.innerHTML=h;var b=v.firstChild;null===(r=u.parentNode)||void 0===r||r.insertBefore(b,u),!u.dataset.l&&b&&(b.v=h,l.add({element:b,m:s,attributes:m,h:c}),l.u()),null===(o=u.parentNode)||void 0===o||o.removeChild(u)},customElements.define(t,r)}var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"click",n=arguments.length>2?arguments[2]:void 0,e=(arguments.length>1?arguments[1]:void 0).getAttribute("data-on-".concat(t));if(!e)throw new Error("Missing data-handler attribute");var o=r(e,n);return function(r){try{o(n),r.preventDefault()}catch(r){throw new Error("".concat(r.message,": data-on-").concat(t,"=").concat(e))}}};function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",e=arguments.length>2?arguments[2]:void 0;t.querySelectorAll("[data-on-".concat(n,"]")).forEach((function(t){var r=d(n,t,e);t.addEventListener(n,r),t["".concat(n,"Handler")]=r}))}function m(t,n){s(t,"click",n),s(t,"change",n)}var h=function(t){return t.replace(/[\r\n]+\s*/g,"")},b=function(t){for(var n=[],e=document.evaluate("template",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext();r;)r.innerHTML=h(r.innerHTML),n.push(r),r=e.iterateNext();return n},p=function(t){return t.tagName.includes("-")},w=function(t){for(var n=[],e=document.evaluate("self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext();r;){if(!p(r)){var o=f(r);n.push({element:r,m:r.innerHTML,attributes:o,h:[]})}r=e.iterateNext()}return n};function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click";null==t||t.querySelectorAll("[data-on-".concat(n,"]")).forEach((function(t){var e=t["".concat(n,"Handler")];e&&t.removeEventListener(n,e)}))}function y(t,n){for(var e=[],r=0;r<t.attributes.length;r++){var o=t.attributes[r],i=n.getAttribute(o.name);i!==o.value&&e.push({name:o.name,newValue:i||""})}return e}function E(t,n){var e;if(t.nodeType===Node.TEXT_NODE)return t.textContent!==n.textContent?[{element:t,p:n,content:null!==(e=n.textContent)&&void 0!==e?e:""}]:[];t.innerHTML=h(t.innerHTML),n.innerHTML=h(n.innerHTML);for(var r=!1,o=[],i=0;i<t.childNodes.length;i++){var u=t.childNodes[i],a=n.childNodes[i];if(u.nodeType===Node.TEXT_NODE&&a&&a.nodeType===Node.TEXT_NODE){if(u.textContent!==a.textContent){r=!0;break}}else if(u.nodeType===Node.ELEMENT_NODE){var c=y(u,a);c.length>0&&o.push({element:u,p:a,attributes:c})}}if(r)return[{element:t,p:n,content:n.innerHTML}];for(var f=0;f<t.childNodes.length;f++){var l=E(t.childNodes[f],n.childNodes[f]);o=o.concat(l)}return o}function x(t){return(new DOMParser).parseFromString(t,"text/html").body.firstChild}var M=function(t,n){for(var e=0,r=function(){var r=t[e],u=r.element,c=r.m,f=r.attributes,l=i(r.h,n);if(f)for(var v=0;v<f.length;v++){var d=f[v].i?o(f[v].value,l):f[v].value;d!==u.getAttribute(f[v].name)&&u.setAttribute(f[v].name,d)}var s=a(c,l),h=x(s),b=x(u.v),w=E(b,h);w.length>0&&(u.v=s,w.map((function(t){var n,e,r=t.element,o=t.p,i=t.content,a=t.attributes,c=function(t,n,e){for(var r=[],o=t;o!==n;)r.unshift(Array.prototype.indexOf.call(o.parentNode.childNodes,o)),o=o.parentNode;for(var i=e,u=0,a=r;u<a.length;u++){var c=a[u];if(!i.childNodes[c])return null;i=i.childNodes[c]}return i}(r,b,u);c&&(r.nodeType!==Node.TEXT_NODE&&p(r)?null===(n=c.parentElement)||void 0===n||n.replaceChild(o,c):void 0!==i?c.nodeType===Node.TEXT_NODE?c.textContent=i:(g(e=c,"click"),g(e,"change"),c.innerHTML=i,m(c,l)):void 0!==a&&a.map((function(t){var n=t.name,e=t.newValue;c.setAttribute(n,e)})))})))};e<t.length;e++)r()},j=function(t){var e=[],r={state:null,get value(){return this.state||(this.state={}),this.state},set:function(t,n){this.state||(this.state={}),this.state[t]=n}};function o(){M(e,r.value),M(l.value,r.value)}function i(t,n){setTimeout((function(){r.set(t,n),o()}),0)}var u=function(){e=w(n.value),b(n.value).forEach((function(t){var n=t.getAttribute("id");if(!n)throw new Error("Missing id attribute");if(1!==t.content.childNodes.length)throw new Error("Template ".concat(n," should have a single child"));v(n,t,r)})),m(n.value,r.value),o()},a=t.M;return a&&t.removeEventListener("DOMContentLoaded",a),t.addEventListener("DOMContentLoaded",u),t.M=u,{variable:function(t,n){return r.set(t,n),{set value(n){i(t,n)},get value(){return r.value[t]},set:function(n){i(t,n)}}}}}(document).variable;j("names",["Alice","Bob","Carol"]);var k=j("count",0);return window.increment=function(){k.value++},t})()));