




const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const textError = document.querySelector('.error');

const LIST_URL = 'https://api.thecatapi.com/v1/breeds/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG';

// select.addEventListener('change', onSearch);


// коллекция пород
function fetchBreeds() {
    return fetch(`${LIST_URL}`)
    .then(resp => {
        console.log(resp)
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        // return []
        // return resp.json()
    })
    .catch(err => console.error(err))
}
fetchBreeds()



function onSearchBreeds(evt) {
    evt.preventDefault()

    const {
        id: {
            value: idBreeds
        },
        name: {
            value: nameBreeds
        }
    } = evt.currentTarget.elements;

    if (!idBreeds) {
        alert('Поле пусте 😢');
        return;
    }

    fetchBreeds(idBreeds, nameBreeds).then(data => {
        console.log(data);
        createMarkup(data)
        });
}

function createMarkup(arr) {
    const markup = arr.map(item => `<option value="${item.idBreeds}">${item.nameBreeds}</option>`).join('');

    select.addEventListener()
}














// идентификатор
// fetchCatByBreed(breedId)