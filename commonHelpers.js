import{S as u,a as d,i as m}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=document.querySelector("ul.gallery"),y=new u(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function f(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:n,downloads:c})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${t}</p>
  <p> Views </br> ${a}</p>
  <p>Comments </br> ${n}</p>
  <p>Dowloads </br> ${c}</p>
</div>
	</a>
</li>`).join("");p.innerHTML=r,y.refresh()}async function g(s){return(await d.get("https://pixabay.com/api/",{params:{key:"45077643-3bb964d60cb084522e3de8d92",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".search-form");h.addEventListener("submit",L);const b=document.querySelector("ul.gallery"),l=document.querySelector(".loader");function L(s){s.preventDefault(),b.innerHTML="",l.classList.remove("hidden");const r=s.target.elements.search.value.trim().toLowerCase();r?g(r).then(o=>{o.hits.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),f(o.hits)}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),l.classList.add("hidden")}):l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
