!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};function n(e){return fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=").concat(e,"&api_key=").concat("live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG","5")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){return console.error(e)}))}var o=document.querySelector(".breed-select"),r=document.querySelector(".loader"),c=document.querySelector(".error"),i=document.querySelector(".cat-info");c.setAttribute("hidden",!0),i.style.display="none",fetch("".concat("https://api.thecatapi.com/v1/breeds/")).then((function(e){if(!e.ok){if(404===response.status)return[];throw new Error(e.statusText)}return e.json()})).catch((function(e){return console.error(e)})).then((function(n){if(console.log(void 0===n?"undefined":e(t)(n)),0===Object.keys(n).length)return console.log(Object.keys(n).length),void console.log("");!function(e){r.setAttribute("hidden",!0);var t=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");o.innerHTML=t}(n)})),o.addEventListener("change",(function(e){e.preventDefault(),i.innerHTML="",r.setAttribute("hidden",!1);var t=e.currentTarget.value.trim();if(console.log(t),console.log(t.trim()),!t)return void alert("Empty field");""!==t?n(t).then((function(e){console.log(e),i.style.display="block",function(e){r.setAttribute("hidden",!0),console.log(e);var t=e.map((function(e){var t=e.breeds,n=(e.id,e.url);e.width;return"<p>Breed: ".concat(t[0].name,'</p>\n    <img src="').concat(n,'" width="400" height="200" alt="').concat(t[0].name,'">\n    <p>Temperament: ').concat(t[0].temperament,"</p>\n    <p>Description: ").concat(t[0].description,"</p>")})).join("");i.insertAdjacentHTML("beforeend",t)}(e)})):console.log("do it")}))}();
//# sourceMappingURL=index.10752da4.js.map
