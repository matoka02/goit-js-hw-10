!function(){var e=document.querySelector(".breed-select"),t=(document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info")),n="https://api.thecatapi.com/v1/images/search",o="live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG";fetch("".concat("https://api.thecatapi.com/v1/breeds/")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(t){var n;n=t.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join(""),e.innerHTML=n})).catch((function(e){return console.error(e)})),e.addEventListener("change",(function(e){e.preventDefault();var r=e.currentTarget.value;if(console.log(r),!r)return void alert("Empty field");(function(e){return fetch("".concat(n,"?limit=10&breed_ids=").concat(e,"&api_key=").concat(o)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){return console.error(e)}))})(r).then((function(e){var n;console.log(e),n=e.map((function(e){return"gg"})).join(""),t.insertAdjacentHTML("beforeend",n)}))}))}();
//# sourceMappingURL=index.0f453af2.js.map
