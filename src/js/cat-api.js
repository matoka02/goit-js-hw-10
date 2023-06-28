"use strict";

const LIST_URL = 'https://api.thecatapi.com/v1/breeds/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_Nyc5epOZ5A7aIisug3oaSTpi5tyQSrOU7MxmwOH7IUlCWiCTMoHx2WLptYl1EpUG';


// Коллекция пород

function fetchBreeds() {
    return fetch(`${LIST_URL}`)
    .then(resp => {
        // console.log(resp)       // приходит ответ на запрос пород
        if(!resp.ok){
            if (response.status === 404) {
                return [];
                }
            throw new Error(resp.statusText);
        }
        return resp.json();
    })
    .catch(err => console.error(err))
};

// Информация о коте

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}?breed_ids=${breedId}&api_key=${API_KEY}5`)
    .then(resp => {
        // console.log(resp);      // приходит ответ на запрос
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
    .catch(err => console.error(err))
};




export {fetchBreeds, fetchCatByBreed};