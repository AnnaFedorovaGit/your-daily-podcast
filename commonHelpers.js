(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const i=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu"),l=()=>{const o=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!o),i.classList.toggle("is-open");const r=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",l);u.addEventListener("click",l);window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(i.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});
//# sourceMappingURL=commonHelpers.js.map
