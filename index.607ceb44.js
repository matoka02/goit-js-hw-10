function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG5`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>console.error(e)))}const t=document.querySelector(".breed-select"),o=document.querySelector(".loader"),n=document.querySelector(".error"),r=document.querySelector(".cat-info");n.setAttribute("hidden",!0),r.style.display="none",fetch("https://api.thecatapi.com/v1/breeds/").then((e=>{if(!e.ok){if(404===response.status)return[];throw new Error(e.statusText)}return e.json()})).catch((e=>console.error(e))).then((e=>{if(console.log(typeof e),0===Object.keys(e).length)return console.log(Object.keys(e).length),void console.log("");!function(e){o.setAttribute("hidden",!0);const n=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");t.innerHTML=n}(e)})),t.addEventListener("change",(function(t){t.preventDefault(),r.innerHTML="",o.setAttribute("hidden",!1);const n=t.currentTarget.value.trim();if(console.log(n),console.log(n.trim()),!n)return void alert("Empty field");""!==n?e(n).then((e=>{console.log(e),r.style.display="block",function(e){o.setAttribute("hidden",!0),console.log(e);const t=e.map((({breeds:e,id:t,url:o,width:n})=>`<p>Breed: ${e[0].name}</p>\n    <img src="${o}" width="400" height="200" alt="${e[0].name}">\n    <p>Temperament: ${e[0].temperament}</p>\n    <p>Description: ${e[0].description}</p>`)).join("");r.insertAdjacentHTML("beforeend",t)}(e)})):console.log("do it")}));
//# sourceMappingURL=index.607ceb44.js.map
