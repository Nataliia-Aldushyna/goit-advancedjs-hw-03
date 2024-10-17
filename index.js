import{i as l,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function f(r){return r.hits.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
          <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              />
      </a>
    <ul class="image-info">
     <li class="image-item-info">
          <span class="text-accent">Likes</span>
          <span class="text-comment">${t.likes}</span>
      </li>
      <li class="image-item-info">
        <span class="text-accent">Views</span>
        <span class="text-comment">${t.views}</span>
      </li>
      <li class="image-item-info">
        <span class="text-accent">Comments</span>
        <span class="text-comment">${t.comments}</span>
      </li>
      <li class="image-item-info">
        <span class="text-accent">Downloads</span>
        <span class="text-comment">${t.downloads}</span>
      </li>
    </ul>
   
  </li>`).join("")}const u="46572597-f7ec836745a1e16eec9fbcb7b",p="https://pixabay.com/api/";function d(r){const t=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${t}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function c(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const n={gallery:document.querySelector(".gallery"),searchForm:document.getElementById("searchPhotoForm"),loader:document.querySelector(".loader")};n.searchForm.addEventListener("submit",g);function g(r){r.preventDefault();const t=r.currentTarget,a=t.elements.q.value.trim();n.loader.classList.remove("loader-off"),d(a).then(o=>{if(n.gallery.innerHTML="",o.total===0){c(),n.loader.classList.add("loader-off");return}const e=f(o);n.gallery.insertAdjacentHTML("beforeend",e),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),n.loader.classList.add("loader-off")}).catch(o=>{console.error(o),c()}).finally(()=>t.reset())}
//# sourceMappingURL=index.js.map
