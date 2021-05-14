import {Render} from './Render.js' ;
import{filmlist,templateCard,favoritsCheckBox} from './Render.js';
import {SortingBtn , sortingBtns ,ListenerBtn , SortPanelFnc} from './secFnc.js';

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
    "https://klike.net/uploads/posts/2020-04/1587888032_2.jpg" ,
   " https://klike.net/uploads/posts/2020-04/1587888063_4.jpg",
   " https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg ",
    "https://klike.net/uploads/posts/2020-04/1587888076_5.jpg",
    "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg ",
    "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
    "https://klike.net/uploads/posts/2020-04/1587888000_9.jpeg",
    "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg",
    "https://v1.popcornnews.ru/upload/editor/90091335_201554021101625_3735690152843615546_n.jpg"
 ]
 
 function getRandomNumber(arr){
     let  MaxNumber = Array.isArray(arr) ? arr.length : 10;
      let  MinNumber =1;
      return Math.round(Math.random() * (MaxNumber- MinNumber));
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

const sortingPanel = document.querySelector('.sorting');
const arrElements = new Array(4).fill(null).map(elem => elem = new getRandomCard());
const searchInput = document.querySelector('.search__input');
let filmsSearchArr = [];

export {arrElements,searchInput}

 
Render(arrElements);
 

searchInput.addEventListener('input', function(evt) {

    SortingBtn(arrElements)

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
    SortingBtn(arrElements);
});

sortingPanel.addEventListener('click',SortPanelFnc);

filmlist.addEventListener('click', ListenerBtn);