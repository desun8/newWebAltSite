import{d as e,A as n,e as o}from"./root.js";import"./vendor.js";var t={exports:{}};t.exports=function e(n,o,t){function r(c,s){if(!o[c]){if(!n[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[c]={exports:{}};n[c][0].call(u.exports,(function(e){return r(n[c][1][e]||e)}),u,u.exports,e,n,o,t)}return o[c].exports}for(var i="function"==typeof require&&require,c=0;c<t.length;c++)r(t[c]);return r}({1:[function(e,n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");return o.innerHTML=e.trim(),!0===n?o.children:o.firstChild},r=function(e,n){var o=e.children;return 1===o.length&&o[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};o.visible=i,o.create=function(e,n){var o=function(e,n){var o=t('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=o.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),s=r(i,"VIDEO"),a=r(i,"IFRAME");return!0===c&&o.classList.add("basicLightbox--img"),!0===s&&o.classList.add("basicLightbox--video"),!0===a&&o.classList.add("basicLightbox--iframe"),o}(e=function(e){var n="string"==typeof e,o=e instanceof HTMLElement==1;if(!1===n&&!1===o)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(t(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(s)&&(r=function(){if("function"==typeof e)return e(s)},(t=o).classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),r()}),410),!0);var t,r};!0===n.closable&&o.addEventListener("click",(function(e){e.target===o&&c()}));var s={element:function(){return o},visible:function(){return i(o)},show:function(e){return!1!==n.onShow(s)&&(t=o,r=function(){if("function"==typeof e)return e(s)},document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),r()}))}),10),!0);var t,r},close:c};return s}},{}]},{},[1])(1);const r=r=>{r.forEach((r=>{const i=r.classList.contains("js-lightbox")?r.children[0].outerHTML:r.outerHTML,c=t.exports.create(i,{onShow:o=>(document.onkeydown=e=>{"Escape"===e.key&&o.close()},e(o.element(),n.scrollbar),!0),onClose:e=>(document.onkeydown=null,o(e.element(),n.scrollbar),!0)});r.onclick=e=>{e.preventDefault(),c.show()}}))};export{r as lightbox};
