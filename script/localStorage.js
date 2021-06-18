import { getFavoritsFilmId } from './favorits.js';


function windowOnCloseHandler() {

    window.onbeforeunload = () => {
        localStorage.setItem('FavoritsFilmsId', JSON.stringify(getFavoritsFilmId()));
        return '';
    };
};

function getFilmIdFromLocalStorage() {
    return JSON.parse(localStorage.getItem('FavoritsFilmsId'));
};

export {
    windowOnCloseHandler,
    getFilmIdFromLocalStorage,
};