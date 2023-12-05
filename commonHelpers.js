import{a as f,S as p,i as m}from"./assets/vendor-67ad3d10.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();f.defaults.headers.common["x-api-key"]="live_eYmGlwPg4DflDjAiWzOtGpnDD6HzE87EAiIKqzxar0VvCvikiUN37dJCMs5As8ja";async function h(){return await f.get("https://api.thecatapi.com/v1/breeds")}async function g(o){return await f.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${o}`)}const l=document.querySelector(".breed-select"),u=document.querySelector(".cat-info"),c=document.querySelector(".loader");function d(o){m.show({title:"Error",message:`❌ Oops! ${o}`,position:"topRight",color:"red"})}function s(o,e){o.classList.toggle("hidden",e),console.log(o.tagName+" "+e)}function y(o){const e=o[0].url,{name:a,description:n,temperament:t,origin:r,country_code:i}=o[0].breeds[0];u.innerHTML=`
      <div class="content__wrapper">
        <img class="content__img" src="${e}" alt="${a}"/>
        <div class="content__info">
          <h2 class="info__title">${a}</h2>
          <p><b class="info__text">Description:</b> ${n}</p>
          <p><b class="info__text">Temperament:</b> ${t}</p>
          <p><b class="info__text">Country:</b> ${r}</p>
          <img class="info__flag" src="https://flagsapi.com/${i}/shiny/64.png" alt="Country code"> 
        </div>
      </div>
    `}const _=new p({select:l,settings:{placeholderText:"Search breeds"},events:{afterChange:async o=>{o[0].value&&(s(u,!0),s(c,!1),await g(o[0].value).then(e=>{if(e.status!==200)throw new Error(e.status);y(e.data)}).catch(e=>{d(e)}).finally(()=>{s(c,!0),s(u,!1)}))}}});(async function(){s(l,!0),s(c,!1),await h().then(e=>{if(e.status!==200)throw new Error(e.status);const a=e.data.map(n=>({text:n.name,value:n.id}));_.setData([{placeholder:!0,text:""},...a])}).catch(e=>{d(e)}).finally(()=>{s(c,!0),s(l,!1)})})();
//# sourceMappingURL=commonHelpers.js.map
