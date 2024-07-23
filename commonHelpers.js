import{S as n,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector("ul.gallery");function u(s){l.innerHTML=s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${i}"
			/>
	</a>
</li>`).join(""),new n(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250})}function m(s){const o=new URLSearchParams({key:"45077643-3bb964d60cb084522e3de8d92",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=document.querySelector(".search-form");f.addEventListener("submit",h);function h(s){s.preventDefault();const o=s.target.elements.search.value.trim();o&&m(o).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),u(t.hits)}).catch(t=>console.log(t))}
//# sourceMappingURL=commonHelpers.js.map
