import{A as e,m as t}from"./root.e6f9b4ee.js";import{e as r}from"./vendor.43b1651c.js";const n=()=>{if(!e.isDesktop||window.screen.height>1200)return;const n=e=>`top ${e.getBoundingClientRect().top}`,o=document.querySelector(".page-breadcrumbs"),i=document.querySelector(".contacts"),a=r.create({trigger:o,start:()=>n(o),end:"top -100%",pin:!0,pinSpacing:!1}),c=r.create({trigger:i,start:()=>n(i),pin:!0,pinSpacing:!1});t((()=>{a.disable(),c.disable()}),(()=>{a.enable(),c.enable()}))};export{n as pinnedContacts};
