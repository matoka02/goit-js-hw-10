

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const textError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const LIST_URL = 'https://api.thecatapi.com/v1/breeds/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG';



// Коллекция пород

function fetchBreeds() {
    return fetch(`${LIST_URL}`)
    .then(resp => {
        // console.log(resp)       // приходит ответ на запрос пород
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        // return []
        return resp.json()
    })
    .then(data => {
        // console.log(data);          // массив из 67 пород
        createOptions(data)
    })
    .catch(err => console.error(err))
}
fetchBreeds()

function createOptions(arr) {
    const markup = arr.map(item => `<option value="${item.id}">${item.name}</option>`).join('');

    select.innerHTML = markup;
    // console.log(markup);        // пример разметки
}



// Информация о коте

select.addEventListener('change', onSearch);

function onSearch(evt) {
    evt.preventDefault();

    // console.dir(evt.currentTarget);
    // console.dir(evt.currentTarget.value);
    const breedId = evt.currentTarget.value;
    console.log(breedId);          // идентификатор породы

    if(!breedId){
        alert('Empty field');
        return;
    }

    fetchCatByBreed(breedId).then(data => {
        // const {breeds} = data;
        // console.log(breeds);
        console.log(data);
        createMarkup(data)
    });
}

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`)
    .then(resp => {
        // console.log(resp);      // приходит ответ на запрос
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
    .catch(err => console.error(err))
};



function createMarkup(arr) {
    console.log(arr);  //object
    const markup = arr.map(({ breeds, id, url, width} ) => 

// console.log(breeds)  //object

    `<div>
    <p>Name: ${breeds.name}</p>
    <img src="${url}" width="400" height="200" alt="">
    <p>Temperament: ${breeds.temperament}</p>
    <p>Description: ${breeds.description}</p>
    </div>`
    )
    .join('');

    catInfo.insertAdjacentHTML('beforeend', markup)
};
