import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector("ul.gallery"),f=new u(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function h(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:n,downloads:c})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${r}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${t}</p>
  <p> Views </br> ${a}</p>
  <p>Comments </br> ${n}</p>
  <p>Dowloads </br> ${c}</p>
</div>
	</a>
</li>`).join("");m.innerHTML=o,f.refresh()}function p(s){const o=new URLSearchParams({key:"45077643-3bb964d60cb084522e3de8d92",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const y=document.querySelector(".search-form");y.addEventListener("submit",b);const g=document.querySelector("ul.gallery"),l=document.querySelector(".loader");function b(s){s.preventDefault(),g.innerHTML="",l.classList.remove("hidden");const o=s.target.elements.search.value.trim().toLowerCase();o?p(o).then(r=>{r.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),h(r.hits)}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),l.classList.add("hidden")}):l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
