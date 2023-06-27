document.querySelector(".breed-select"),document.querySelector(".loader"),document.querySelector(".error");function e(){return fetch("https://api.thecatapi.com/v1/breeds/").then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText)})).catch((e=>console.error(e)))}e();
//# sourceMappingURL=index.c573bb57.js.map
