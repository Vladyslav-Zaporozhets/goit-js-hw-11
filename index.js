import{a as f,S as m,i}from"./assets/vendor-C9wvFbEK.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(o){const a="52394561-eb0a207b23eead48d5392c952",s="https://pixabay.com/api/",r={key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(s,{params:r})).data}catch(e){throw console.error("Error fetching images:",e),new Error("Failed to fetch images")}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const a=o.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",a),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(s===""){i.warning({title:"Caution",message:"Please enter a search query to find images."});return}g(),b();try{const r=await p(s);r.hits.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)}catch{i.error({title:"Error",message:"Something went wrong with the request. Please try again later."})}finally{L(),o.target.reset()}});
//# sourceMappingURL=index.js.map
