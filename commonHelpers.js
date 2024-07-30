import{S as f,a as h,i as b}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L=document.querySelector("ul.gallery"),S=new f(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function u(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:y,downloads:g})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${e}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${r}</p>
  <p> Views </br> ${n}</p>
  <p>Comments </br> ${y}</p>
  <p>Dowloads </br> ${g}</p>
</div>
	</a>
</li>`).join("");L.insertAdjacentHTML("beforeend",t),S.refresh()}async function p(s,t,o){return(await h.get("https://pixabay.com/api/",{params:{key:"45077643-3bb964d60cb084522e3de8d92",page:t,per_page:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const v=document.querySelector(".search-form");v.addEventListener("submit",w);const q=document.querySelector("ul.gallery"),l=document.querySelector(".loader"),d=document.querySelector(".load-button");d.addEventListener("click",$);let a;const m=15;let c;async function w(s){if(s.preventDefault(),q.innerHTML="",a=1,l.classList.remove("hidden"),d.classList.add("hidden"),c=s.target.elements.search.value.trim().toLowerCase(),!c){l.classList.add("hidden"),s.target.reset();return}try{const t=await p(c,a,m);if(t.hits.length===0){b.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""});return}u(t.hits),a+=1,a>1&&d.classList.remove("hidden")}catch(t){console.log(t)}finally{s.target.reset(),l.classList.add("hidden")}}async function $(s){try{const t=await p(c,a,m);u(t.hits),a+=1}catch(t){console.log(t)}}
//# sourceMappingURL=commonHelpers.js.map
