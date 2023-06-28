"use strict";

import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const textError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

textError.setAttribute('hidden', true);
catInfo.style.display = 'none';

// Коллекция пород

fetchBreeds().then(data => {
    console.log(typeof data);
    if (Object.keys(data).length === 0) {
        console.log(Object.keys(data).length);
        console.log('');
        return
    }
    createOptions(data)    
});

function createOptions(arr) {
    loader.setAttribute('hidden', true);

    const markup = arr.map(item => `<option value="${item.id}">${item.name}</option>`).join('');

    select.innerHTML = markup;
    // console.log(markup);        // пример разметки
}

// Информация о коте

select.addEventListener('change', onSearch);

function onSearch(evt) {
    evt.preventDefault();
    catInfo.innerHTML = '';
    loader.setAttribute('hidden', false);
    // console.dir(evt.currentTarget);
    // console.dir(evt.currentTarget.value);
    const breedId = evt.currentTarget.value.trim();
    console.log(breedId);          // идентификатор породы
    console.log(breedId.trim());    // содержимое строки

    if(!breedId){
        alert('Empty field');
        return;
    } else if (breedId !== '') {

        fetchCatByBreed(breedId).then(data => {
            console.log(data);      //object
            catInfo.style.display = 'block';
            createMarkup(data)
        });
    } else {
        console.log('do it');
    }


}


function createMarkup(arr) {
    loader.setAttribute('hidden', true);

    console.log(arr);        //object

    const markup = arr.map(({ breeds, id, url, width} ) => 
    `<p>Breed: ${breeds[0].name}</p>
    <img src="${url}" width="400" height="200" alt="${breeds[0].name}">
    <p>Temperament: ${breeds[0].temperament}</p>
    <p>Description: ${breeds[0].description}</p>`
    )
    .join('');

    catInfo.insertAdjacentHTML('beforeend', markup)
};
