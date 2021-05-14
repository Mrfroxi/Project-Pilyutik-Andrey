const filmlist = document.querySelector('.film-list');
const templateCard = document.getElementById('card-template').content.querySelector('.card');
const favoritsCheckBox = document.getElementById('favorite');
export {filmlist,templateCard,favoritsCheckBox}
export  function Render (films) {
    while (filmlist.lastChild) {
        filmlist.removeChild(filmlist.lastChild);
    };

     films.forEach(film =>{ 
        const filmTitle = templateCard.querySelector('.card-header__title');
        const filmPoster = templateCard.querySelector('.card-header__image');
        const filmRating = templateCard.querySelector('.film-info__rating .film-info__text');
        const filmReleaseDate = templateCard.querySelector('.film-info__release-date .film-info__text');
        const filmDirector = templateCard.querySelector('.film-info__director .film-info__text');
        const filmBudget = templateCard.querySelector('.film-info__box-office .film-info__text');
        const filmDescription = templateCard.querySelector('.film-info__plot .film-info__text');
        const toFavoritsBtn = templateCard.querySelector('.card__button ');

        

        filmTitle.innerText = film.title;
        filmPoster.src = film.Poster
        filmRating.innerText = film.Rating;
        filmReleaseDate.innerText = film.Date;
        filmDirector.innerText = film.filmsDirectors;
        filmBudget.innerText = film.Budget;
        templateCard.dataset.filmId = films.indexOf(film);
        const textMCard = film.Descriptions;
        filmDescription.innerText = (film.Descriptions === null) ? ' - ' : (textMCard.length <= 140) ? textMCard : textMCard.slice(0,137) + '...';
    

        let CloneCard = templateCard.cloneNode(true);

        if(film.Favorite === true && favoritsCheckBox.checked) {
            filmlist.appendChild(CloneCard);
        }

        if(film.Favorite === false && !favoritsCheckBox.checked) {
            filmlist.appendChild(CloneCard);
        }

     });   
}