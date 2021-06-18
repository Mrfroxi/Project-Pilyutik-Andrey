import {filmsArr} from './fetch.js';
import renderFilmsList from './render.js';
import {resetSorting} from './sort.js';

const searchInput = document.querySelector('.search__input');
let filmsSearchArr = [];

function resetSearching() {
    searchInput.value = '';
}

function getSearchLength() {
    return searchInput.value.length;
}

function searchInputHandler() {
    searchInput.addEventListener('input', function(evt) {

        resetSorting(filmsArr)

        if(evt.target.value.length > 0) {
            let searchRequest = evt.target.value.toLowerCase();
            filmsSearchArr = filmsArr.filter(el => el.title.toLowerCase().includes(searchRequest));
            renderFilmsList(filmsSearchArr);
        } else {
            renderFilmsList(filmsArr);
        }
    });
};

export {
    getSearchLength,
    resetSearching,
    filmsSearchArr,
    searchInputHandler
};