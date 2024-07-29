import{S as d,a as u,i as m}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=document.querySelector("ul.gallery"),f=new d(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function y(r){const a=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:o,comments:c,downloads:n})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${s}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${t}</p>
  <p> Views </br> ${o}</p>
  <p>Comments </br> ${c}</p>
  <p>Dowloads </br> ${n}</p>
</div>
	</a>
</li>`).join("");p.innerHTML=a,f.refresh()}function g(r){return u.get("https://pixabay.com/api",{params:{key:"45077643-3bb964d60cb084522e3de8d92",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const h=document.querySelector(".search-form");h.addEventListener("submit",L);const b=document.querySelector("ul.gallery"),l=document.querySelector(".loader");function L(r){r.preventDefault(),b.innerHTML="",l.classList.remove("hidden");const a=r.target.elements.search.value.trim().toLowerCase();a?g(a).then(s=>{s.data.hits.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),y(s.data.hits)}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),l.classList.add("hidden")}):l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
