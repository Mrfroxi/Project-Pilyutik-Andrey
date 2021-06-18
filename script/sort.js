import {filmsArr} from './fetch.js';
import renderFilmsList from './render.js';
import { getSearchLength, filmsSearchArr } from './search.js';

const sortingBtns = document.querySelectorAll('.control-panel + .sorting > button');
const sortingControlPanel = document.querySelector('.sorting');
let filmsSortingArr = [];


function resetSorting(renderedFilmsArray) {
    sortingControlPanel.classList.remove('active');
    sortingBtns.forEach(button => {
        button.classList.remove('button_checked');
    });
    renderFilmsList(renderedFilmsArray);
};

function getSortingStatus() {
    return sortingControlPanel.classList.contains('active');
}

function sortingPanelHandler() {
    sortingControlPanel.addEventListener('click', function(evt) {

        if(evt.target.closest('button')) {

            if(evt.target.closest('button').classList.contains('button_checked')) {
                getSearchLength() > 0 ? resetSorting(filmsSearchArr) : resetSorting(filmsArr);
            } else {
                sortingControlPanel.classList.add('active');

                filmsSortingArr = getSearchLength() > 0 ? [...filmsSearchArr] : [...filmsArr];

                sortingBtns.forEach(button => {
                    evt.target.id === button.id
                    ? button.classList.add('button_checked')
                    : button.classList.remove('button_checked');
                });

                switch(evt.target.id) {
                    case 'rating':
                        filmsSortingArr.sort((a, b) => {
                            return  Number(b.rating) - Number(a.rating);
                        });
                        renderFilmsList(filmsSortingArr);
                    break;
                    case 'releaseDate':
                        filmsSortingArr.sort((a, b) => {
                            return new Date(b.realeseDate.split('-').reverse().join(',')) - new Date(a.realeseDate.split('-').reverse().join(','));
                        });
                        renderFilmsList(filmsSortingArr);
                    break;
                    case 'boxOffice':
                        filmsSortingArr.sort((a, b) => {
                            return Number(b.budget.replace(/[^\d.]+/g, '')) - Number(a.budget.replace(/[^\d.]+/g, ''));
                        });
                        renderFilmsList(filmsSortingArr);
                    break;
                }
            }
        }
    });
};

export {
    getSortingStatus,
    filmsSortingArr,
    resetSorting,
    sortingPanelHandler
};