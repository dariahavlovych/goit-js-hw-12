import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector("ul.gallery");function f(o){m.innerHTML=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:n,downloads:c})=>`<li class="gallery-item">
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
</li>`).join(""),new u(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250}).refresh()}function h(o){const s=new URLSearchParams({key:"45077643-3bb964d60cb084522e3de8d92",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const p=document.querySelector(".search-form");p.addEventListener("submit",y);const l=document.querySelector(".loader");function y(o){o.preventDefault(),l.classList.remove("hidden");const s=o.target.elements.search.value.trim().toLowerCase();s?h(s).then(r=>{r.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),f(r.hits)}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),l.classList.add("hidden")}):l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
