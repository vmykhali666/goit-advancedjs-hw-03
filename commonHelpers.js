import{a as f,S as p,i as m}from"./assets/vendor-67ad3d10.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();f.defaults.headers.common["x-api-key"]="live_eYmGlwPg4DflDjAiWzOtGpnDD6HzE87EAiIKqzxar0VvCvikiUN37dJCMs5As8ja";async function h(){return await f.get("https://api.thecatapi.com/v1/breeds")}async function g(r){return await f.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`)}const l=document.querySelector(".breed-select"),u=document.querySelector(".cat-info"),c=document.querySelector(".loader");function d(r){m.show({title:"Error",message:`❌ Oops! ${r}`,position:"topRight",color:"red"})}function s(r,e){r.classList.toggle("hidder",e)}function y(r){const e=r[0].url,{name:n,description:i,temperament:t,origin:o,country_code:a}=r[0].breeds[0];u.innerHTML=`
      <div class="content__wrapper">
        <img class="content__img" src="${e}" alt="${n}"/>
        <div class="content__info">
          <h2 class="info__title">${n}</h2>
          <p><b class="info__text">Description:</b> ${i}</p>
          <p><b class="info__text">Temperament:</b> ${t}</p>
          <p><b class="info__text">Country:</b> ${o}</p>
          <img class="info__flag" src="https://flagsapi.com/${a}/shiny/64.png" alt="Country code"> 
        </div>
      </div>
    `}const _=new p({select:l,settings:{placeholderText:"Search breeds"},events:{afterChange:async r=>{s(u,!1),s(c,!0),r[0].value&&await g(r[0].value).then(e=>{if(e.status!==200)throw new Error(e.status);y(e.data)}).catch(e=>{d(e)}).finally(()=>{s(c,!1),s(u,!0)})}}});(async function(){s(l,!1),s(c,!0),await h().then(e=>{if(e.status!==200)throw new Error(e.status);const n=e.data.map(i=>({text:i.name,value:i.id}));_.setData([{placeholder:!0,text:""},...n])}).catch(e=>{d(e)}).finally(()=>{s(c,!1),s(l,!0)})})();
//# sourceMappingURL=commonHelpers.js.map
