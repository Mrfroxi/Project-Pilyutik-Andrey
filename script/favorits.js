import {filmsArr} from './fetch.js';
import renderFilmsList from './render.js';
import { getSearchLength, resetSearching, filmsSearchArr } from './search.js';
import { getSortingStatus, resetSorting, filmsSortingArr } from './sort.js';

const filmsList = document.querySelector('.film-list');
const favoritsCheckBox = document.getElementById('favorite');
let tragetFilmId;

function getFavoritsStatus() {
    return favoritsCheckBox.checked;
}

function favoritCheckBoxHandler() {
    favoritsCheckBox.addEventListener('click', function(evt) {
        resetSearching();
        resetSorting(filmsArr);
    });
};

function initialFlagIsFavorite(renderedFilmsArray, filmIdListFromLocalStorage) {
    renderedFilmsArray.map(el => {
        if (filmIdListFromLocalStorage.includes(el.filmId)) {
            el.isFavorite = true;
        }
    });
    renderFilmsList(renderedFilmsArray);
};

function changeFlagIsFavorite(renderedFilmsArray) {
    renderedFilmsArray.map(el => {
        if (el.filmId === tragetFilmId) {
            el.isFavorite = !getFavoritsStatus();
        }
    });
    renderFilmsList(renderedFilmsArray);
};

function filmListHandler() {

    filmsList.addEventListener('click', function(evt) {

        if(evt.target.closest('button')) {
            tragetFilmId = evt.target.parentElement.closest('div[data-film-id]').dataset.filmId;

            if (getSortingStatus()) {
                changeFlagIsFavorite(filmsSortingArr);
            } else if (getSearchLength() > 0 && !getSortingStatus()) {
                changeFlagIsFavorite(filmsSearchArr);
            } else {
                changeFlagIsFavorite(filmsArr);
            }
        }
    });
};

function getFavoritsFilmId(FilmsArray = filmsArr) {
    let favoritsFilmIdList = [];
    FilmsArray.forEach(el => {
        if (el.isFavorite) {
            favoritsFilmIdList.push(el.filmId);
        }
    });
    return favoritsFilmIdList;
}

export {
    getFavoritsStatus,
    favoritCheckBoxHandler,
    filmListHandler,
    initialFlagIsFavorite,
    getFavoritsFilmId,
    filmsList
};