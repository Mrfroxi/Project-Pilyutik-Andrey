import compensateScrollbarWidth from './utils.js';
import { getFavoritsStatus, filmsList } from './favorits.js';

const templateFilmCard = document.getElementById('card-template').content.querySelector('.card');


export default function renderFilmsList(array) {

    while (filmsList.lastChild) {
        filmsList.removeChild(filmsList.lastChild);
    };

    array.forEach(film => {
        const filmTitle = templateFilmCard.querySelector('.card-header__title');
        const filmPoster = templateFilmCard.querySelector('.card-header__image');
        const filmRating = templateFilmCard.querySelector('.film-info__rating .film-info__text');
        const filmReleaseDate = templateFilmCard.querySelector('.film-info__release-date .film-info__text');
        const filmDirector = templateFilmCard.querySelector('.film-info__director .film-info__text');
        const filmBudget = templateFilmCard.querySelector('.film-info__box-office .film-info__text');
        const filmDescription = templateFilmCard.querySelector('.film-info__plot .film-info__text');
        const toFavoritsBtn = templateFilmCard.querySelector('.card__button');

        filmTitle.innerText = film.title === (null || 'N/A') ? '-' : film.title;
        filmPoster.src = film.poster;
        filmRating.innerText = film.rating === (null || 'N/A') ? '0.0' : film.rating;
        filmReleaseDate.innerText = film.realeseDate === (null || 'N/A') ? '-' : film.realeseDate;
        filmDirector.innerText = film.director === (null || 'N/A') ? '-' : film.director;
        filmBudget.innerText = film.budget === (null || 'N/A') ? '$0' : film.budget;
        filmDescription.innerText = film.description === (null || 'N/A') ? '-' : film.description.length <= 140 ? film.description : film.description.slice(0,137) + '...';
        templateFilmCard.dataset.filmId = film.filmId;

        toFavoritsBtn.classList.toggle('button_add', !film.isFavorite);
        toFavoritsBtn.classList.toggle('button_remove', film.isFavorite);

        const currentFilmCard = templateFilmCard.cloneNode(true);

        if(film.isFavorite && getFavoritsStatus()) {
            filmsList.appendChild(currentFilmCard);
        }

        if(!film.isFavorite && !getFavoritsStatus()) {
            filmsList.appendChild(currentFilmCard);
        }
    });

    compensateScrollbarWidth();

};