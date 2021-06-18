const spinner = document.querySelector('.spinner');
const url = 'https://fe08-films.herokuapp.com';
const filmsData = await getFilmsData(url);
export const filmsArr = getFilms();

async function getAccessToken(url) {
    try {
        const response = await fetch(url + '/auth', {
            method: 'POST',
        });
       const tokenData = await response.json();
       return tokenData;
    } catch (err) {
        console.log('Ошибка получения токена авторизации', err);
    };
};

async function getFilmsData(url) {
    try {
        spinner.classList.add('spinner--active');
        const accessToken = await getAccessToken(url);
        const response = await fetch(url + '/films', {
            method: 'GET',
            headers: {
                'Autorization': `Beare ${accessToken.token}`,
            },
        });
       const filmsData = await response.json();
       return filmsData.films;
    } catch (err) {
        console.log('Ошибка получения фильмов', err);
        alert('Упс, что-то пошло не так, попробуйте перезагрузить страницу');
    } finally {
        spinner.classList.remove('spinner--active');
    };
};

function getFilms() {
    let filmsArr = filmsData.filter(film => !film.Error).map(film => {
        return film = {
            title: film.Title,
            poster: film.Poster,
            rating: film.imdbRating,
            realeseDate: film.Released,
            director: film.Director,
            budget: film.BoxOffice,
            description: film.Plot,
            isFavorite: false,
            filmId: film.imdbID,
        }
    });
    return filmsArr;
};