import{a as e}from"./vendor.5e96a560.js";const t=()=>{const t=Array.from(document.querySelectorAll(".js-dark-block")),o=Array.from(document.querySelectorAll(".js-orange-block"));if(t.length&&t.forEach((t=>{e.create({trigger:t,start:()=>"top 50",end:()=>"bottom 50",onToggle({isActive:e}){e?(document.body.classList.add("menu-btn-white"),document.body.classList.add("header-feedback-white"),document.body.classList.add("filter-white")):(document.body.classList.remove("menu-btn-white"),document.body.classList.remove("header-feedback-white"),document.body.classList.remove("filter-white"))}}),e.create({trigger:t,start:()=>"top 90%",end:()=>"bottom 90%",onToggle({isActive:e}){e?document.body.classList.add("scroll-to-top-white"):document.body.classList.remove("scroll-to-top-white")}})})),o.length){const t=document.querySelector(".subscribe-banner");t&&o.forEach((o=>{e.create({trigger:o,start:()=>`top ${t.getBoundingClientRect().bottom}`,end:()=>`bottom ${t.getBoundingClientRect().top}`,onToggle({isActive:e}){e?document.body.classList.add("subscribe-banner-white"):document.body.classList.remove("subscribe-banner-white")}})}))}};export{t as invertTheme};