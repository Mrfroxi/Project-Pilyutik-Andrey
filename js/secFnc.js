import {Render,favoritsCheckBox} from './Render.js' ;
import {arrElements,searchInput} from './main.js' ;


const sortingBtns = document.querySelectorAll('.control-panel + .sorting > button');

export {sortingBtns}


export function SortingBtn(arrElements) {
    sortingBtns.forEach(button => {
        button.classList.remove('button_checked');
    });
    Render(arrElements);
}

export function ListenerBtn(evt) {
    if(evt.target.closest('button')) {
        let targFilmId = evt.target.parentElement.closest('div[data-film-id]').getAttribute('data-film-id');
        console.log(targFilmId);

        arrElements.map((element, index) => {
            if (index === Number(targFilmId)) {
                favoritsCheckBox.checked ? element.Favorite = false : element.Favorite = true;
            }
        });

        Render(arrElements);
    }
}
let FilmsSortingkArr = [];
export  function SortPanelFnc(evt) {

    if(evt.target.closest('button')) {

        FilmsSortingkArr = searchInput.value.length > 0 ? filmsSearchArr : [...arrElements];

        sortingBtns.forEach(button => {
            evt.target.id === button.id
            ? button.classList.add('button_checked')
            : button.classList.remove('button_checked');
        });

        switch(evt.target.id) {
            case 'rating':
                FilmsSortingkArr.sort((a, b) => {
                    return  Number(b.Rating) - Number(a.Rating);
                });
                Render(FilmsSortingkArr);
            break;
            case 'releaseDate':
                FilmsSortingkArr.sort((a, b) => {
                    return new Date(b.Date.split('-').reverse().join(',')) - new Date(a.Date.split('-').reverse().join(','));
                });
                Render(FilmsSortingkArr);
            break;
            case 'boxOffice':
                FilmsSortingkArr.sort((a, b) => {
                    return Number(b.Budget.replace(/[^\d.]+/g, '')) - Number(a.Budget.replace(/[^\d.]+/g, ''));
                });
                Render(FilmsSortingkArr);
            break;
        }
    }
}