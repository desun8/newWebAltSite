import{R as e}from"./root.58013eb2.js";const s=s=>{const o=e,r=s.action,t=new FormData(s),a={method:"POST",body:t},c=e=>{if(!e.ok)throw Error(e.statusText);return e.json()},n=e=>{if("ok"!==e.status.toLowerCase())throw Error(e.message);console.log("форма отправилась"),console.log(e)};return new Promise((function(e,s){window.grecaptcha.ready((()=>{window.grecaptcha.execute(o,{action:"form"}).then((e=>(t.append("recaptcha_response",e),fetch(r,a).then(c).then(n).catch((e=>console.error("Форма не отправилась",e)))))).then((()=>{e("success")}))}))}))};var o,r;(r=o||(o={}))[r.Success=0]="Success",r[r.Error=1]="Error";const t=e=>e.closest(".form-field"),a=e=>{e.addEventListener("keydown",(()=>{e.hasAttribute("invalid")&&(e=>{c(e,0),c(e,1)})(e)}))},c=(e,s)=>{const o=0===s?"is-success":"has-error",r=t(e);r&&(r.classList.remove(o),e.removeAttribute("invalid"))},n=(e,s,o)=>{o?((e,s)=>{const o=0===s?"is-success":"has-error",r=t(e);r&&(r.classList.add(o),e.setAttribute("invalid",""))})(e,s):c(e,s)},i=e=>{const{value:s}=e,o=null!==s.match(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i);return((e,s)=>{s?(n(e,1,!1),n(e,0,!0)):(n(e,0,!1),n(e,1,!0))})(e,o),console.warn("Проверка email",o),o};export{a as h,s,i as v};
