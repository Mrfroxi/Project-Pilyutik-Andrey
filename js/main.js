const NameFilms = [
   'Побег из Шоушенка' ,
   "Зеленая миля" ,
  " Интерстеллар",
  " Джанго освобожденный",
   "Исчезнувшая",
   "Темный рыцарь",
   "Джокер",
   "Мстители",
   "Безумный Макс: Дорога ярости",
   "Дэдпул"
];

const FilmsDescriptions = [
    'Талантливый вор Доминик Кобб таскает из чужих сновидений секреты, которые можно легко конвертировать в хорошие деньги. Однако самой важной в его карьере операцией оказывается не кража, а внедрение',
    'Земля потихоньку гибнет в бесконечных природных катастрофах, людям все тяжелее чувствовать себя на ней как дома, и все силы брошены на выживание. Под торжественную органную музыку Ханса Циммера в далекий космос отправляются',
    'Охотник за головами освобождает чернокожего раба Джанго в обмен на небольшую услугу. Затем они, спевшись на почве ненависти к рабству, продолжают работать вместе, отлавливая плохих парней Дикого Запада. ',
    'Триллер о мужчине в беде подарил многим зрителям теплоту осознания, что именно хитрые стервы — источник всех бед.Начинается все с того, что в пятую годовщину свадьбы жена главного героя неожиданно исчезает. ',
    'Заключительный фильм нолановской трилогии о Бэтмене. Уже восемь лет, как бэт-сигнал разбит, героя нет, а с преступностью борется только полиция Готэма. В отсутствие Темного рыцаря в городе появляется загадочная  ',
    'стория о незадачливом комике Артуре Флеке и о том, как он съехал с катушек. Немолодой уже мужчина живет в неблагополучном районе Готэма в одной квартире с больной матерью, сам сидит на лекарствах и страдает от прис',
    ' И вся эта киновселенная будет и дальше расти и наполняться подробностями, словно реальный параллельный мир, открывающийся нам все больше и больше.Эпичный киносериал Marvel о команде супергероев, противостоящих вселенскому',
    'Постапокалиптическое будущее, пустынное и безумное. Максу Рокатански все в этом мире по барабану, потому что его преследуют призраки прошлого и чувство вины. Он просто выживает, как может, но в какой-то момент оказывается  ',
    'После бесчеловечных экспериментов, которые проделали с ним подпольные ученые, Уэйд Уилсон приобретает замечательные способности к регенерации, но при этом становится довольно страшненьким на вид втянутым в бабий бунт.',
    'Тот самый случай, когда сюжет, по большому счету, не имеет значения: главное — это шуточки-прибауточки и обращения главного героя ко зрителям. «Четвертую стену» ломали, конечно, и до и будут ломать после, но никто прежде н',
];

const filmsDirectors = [
    'Кристофер Нолан' ,
    "Стивен Спилберг" ,
   " Мартин Скорсезе",
   "Стэнли Кубрик",
    "Альфред Хичкок",
    "Акира Куросава",
    "Квентин Тарантино",
    "Чарли Чаплин",
    "Хаяо Миядзаки",
    "Билли Уайлдер"
];
const Posters = [
    'https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg' ,
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg" ,
  " https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
  " https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg ",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg ",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
   "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg"
]

function getRandomNumber(arr){
    let  MaxNumber = Array.isArray(arr) ? arr.length : 10;
     let  MinNumber =1;
     return RandNum =Math.round(Math.random() * (MaxNumber- MinNumber));
 }

 function getRandomBudget(min = 1231241 , max = 9876513){
    let RandomBudget = Math.floor(Math.random() * (max- min));
    return RandomBudget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function TrueDate(num){
    num =String(Math.floor(num*Math.random())+1);
    let resoult =(num.length <2) ? num = '0' +num : num ;
    return resoult;
}

function getRandomDate (){
    var sdt = new Date('1972-11-30');
    var difdt = new Date(new Date() - sdt*Math.random());
    let month =TrueDate(difdt.getMonth());
    let date = TrueDate(difdt.getMonth());
    return(date + "-"+(month) + "-"+(difdt.toISOString().slice(0, 4) - 2005) );
 }
 

function   getRandomCard(){
    this.title = NameFilms[getRandomNumber()];
    this.Descriptions = FilmsDescriptions[getRandomNumber()];
    this.filmsDirectors = filmsDirectors[getRandomNumber()];
    this.Rating = getRandomNumber();
    this.Budget = '$'+getRandomBudget();
    this.Date = getRandomDate();
    this.Poster = Posters[getRandomNumber()];
    this.Favorite = false;
}
const sortingControlPanel = document.querySelector('.sorting');
const favoritsCheckBox = document.getElementById('favorite');
const templateCard = document.getElementById('card-template').content.querySelector('.card');
const filmlist = document.querySelector('.film-list');
const arrElements = new Array(4).fill(null).map(elem => elem = new getRandomCard());
const sortingBtns = document.querySelectorAll('.control-panel + .sorting > button');
const searchInput = document.querySelector('.search__input');

 function Render(films){    

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

 Render(arrElements);
 
 function resetSorting(arrElements) {
    sortingBtns.forEach(button => {
        button.classList.remove('button_checked');
    });
    Render(arrElements);
}
searchInput.addEventListener('input', function(evt) {

    resetSorting(arrElements)

    if(evt.target.value.length > 0) {
        let searchRequest = evt.target.value.toLowerCase();
        filmsSearchArr = arrElements.filter(el => el.title.toLowerCase().includes(searchRequest));
        Render(filmsSearchArr);
    } else {
        Render(arrElements);
    }
});

favoritsCheckBox.addEventListener('click', function(evt) {
    searchInput.value = ' ';
    resetSorting(arrElements);
});

sortingControlPanel.addEventListener('click', function(evt) {

    if(evt.target.closest('button')) {

        filmsSortingkArr = searchInput.value.length > 0 ? filmsSearchArr : [...filmsMockArr];

        sortingBtns.forEach(button => {
            evt.target.id === button.id
            ? button.classList.add('button_checked')
            : button.classList.remove('button_checked');
        });

        switch(evt.target.id) {
            case 'rating':
                filmsSortingkArr.sort((a, b) => {
                    return  Number(b.rating) - Number(a.rating);
                });
                renderFilmsList(filmsSortingkArr);
            break;
            case 'releaseDate':
                filmsSortingkArr.sort((a, b) => {
                    return new Date(b.realeseDate.split('-').reverse().join(',')) - new Date(a.realeseDate.split('-').reverse().join(','));
                });
                renderFilmsList(filmsSortingkArr);
            break;
            case 'boxOffice':
                filmsSortingkArr.sort((a, b) => {
                    return Number(b.budget.replace(/[^\d.]+/g, '')) - Number(a.budget.replace(/[^\d.]+/g, ''));
                });
                renderFilmsList(filmsSortingkArr);
            break;
        }
    }
});

filmlist.addEventListener('click', function(evt) {
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
});