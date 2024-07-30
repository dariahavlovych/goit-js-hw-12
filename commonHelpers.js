import{S as h,a as b,i as p}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const L=document.querySelector("ul.gallery"),S=new h(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function m(s){const e=s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:r,views:n,comments:g,downloads:f})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${t}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${r}</p>
  <p> Views </br> ${n}</p>
  <p>Comments </br> ${g}</p>
  <p>Dowloads </br> ${f}</p>
</div>
	</a>
</li>`).join("");L.insertAdjacentHTML("beforeend",e),S.refresh()}async function y(s,e,o){return(await b.get("https://pixabay.com/api/",{params:{key:"45077643-3bb964d60cb084522e3de8d92",page:e,per_page:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const v=document.querySelector(".search-form");v.addEventListener("submit",w);const q=document.querySelector("ul.gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-button");l.addEventListener("click",M);let a;const u=15;let c;async function w(s){if(s.preventDefault(),q.innerHTML="",a=1,d.classList.remove("hidden"),l.classList.add("hidden"),c=s.target.elements.search.value.trim().toLowerCase(),!c){d.classList.add("hidden"),s.target.reset();return}try{const e=await y(c,a,u);if(e.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""});return}m(e.hits),a+=1,l.classList.remove("hidden")}catch(e){console.log(e)}finally{s.target.reset(),d.classList.add("hidden")}}async function M(s){try{const e=await y(c,a,u);m(e.hits),a+=1;const o=Math.ceil(e.totalHits/u);a===o&&(l.classList.add("hidden"),p.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",timeout:2e3,icon:""}))}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
