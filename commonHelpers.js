import{S as b,a as v,i as u}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const S=document.querySelector("ul.gallery"),w=new b(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250});function p(s){const e=s.map(({webformatURL:i,largeImageURL:n,tags:t,likes:r,views:l,comments:f,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${n}">
		<img
			class="gallery-image"
			src="${i}"
			alt="${t}"
			/>
    <div class="image-stats">
  <p>Likes </br> ${r}</p>
  <p> Views </br> ${l}</p>
  <p>Comments </br> ${f}</p>
  <p>Dowloads </br> ${L}</p>
</div>
	</a>
</li>`).join("");S.insertAdjacentHTML("beforeend",e),w.refresh()}async function h(s,e,i){return(await v.get("https://pixabay.com/api/",{params:{key:"45077643-3bb964d60cb084522e3de8d92",page:e,per_page:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const q=document.querySelector(".search-form");q.addEventListener("submit",M);const $=document.querySelector("ul.gallery"),c=document.querySelector(".loader"),o=document.querySelector(".load-button");o.addEventListener("click",y);let a;const m=15;let d,g;async function M(s){if(s.preventDefault(),$.innerHTML="",a=1,c.classList.remove("hidden"),o.classList.add("hidden"),d=s.target.elements.search.value.trim().toLowerCase(),d===""){c.classList.add("hidden"),s.currentTarget.reset();return}try{const e=await h(d,a,m);if(g=Math.ceil(e.totalHits/m),e.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""});return}p(e.hits),a+=1,o.classList.remove("hidden")}catch(e){console.log(e)}finally{s.target.reset(),c.classList.add("hidden")}}async function y(s){o.classList.add("hidden"),c.classList.remove("hidden"),a+=1;try{const e=await h(d,a,m);p(e.hits)}catch(e){u.error({message:`Request failed with: ${e}`,position:"topRight",timeout:2e3,icon:""})}finally{c.classList.add("hidden");const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"}),a===g?(o.classList.add("hidden"),u.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",timeout:2e3,icon:""}),o.removeEventListener("click",y)):o.classList.remove("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
