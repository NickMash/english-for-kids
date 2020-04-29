import {allCardsInfo} from "./constants/cardsInfo";
import {speech} from "./speech";

export const cardHelper = {
    createTrainCards: (categoryName) => {

        let n = document.querySelector('.for_adding');

        n.insertAdjacentHTML('afterbegin', '<div class="cards__container"></div>');
        n.setAttribute('about', categoryName);

        allCardsInfo[categoryName].forEach((elem)=> {

                document.querySelector('.cards__container').innerHTML += `
        <div class="card_box card-wrapper">
             <div class="container card">
                 <div class="side front_side">
                     <div class="content">
                         <div class="turn_around_button"></div>
                         <p class="card_name toggle_name front_side_name">${elem.name}</p>
                     </div>
                 </div>
                 <div class="back side">
                     <div class="content">
                         <p class="card_name toggle_name">${elem.translation}</p>
                     </div>
                 </div>
             </div>
        </div>
`
            });

        let card = document.querySelectorAll(".card");
        let back = document.querySelectorAll(".back");

        for (let j = 0; j < card.length; j++) {

            card[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            card[j].style.backgroundSize = 'cover';
            back[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            back[j].style.backgroundSize = 'cover';
        }
        card.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                speech.speechVoice(e.target.textContent.trim());
            })
        })

    },

    createGameCards: (categoryName) => {

        let n = document.querySelector('.for_adding');

        n.insertAdjacentHTML('afterbegin', '<div class="cards__container"></div>');
        n.setAttribute('about', categoryName);
        console.log(n);

        allCardsInfo[categoryName].forEach((elem)=> {

            document.querySelector('.cards__container').innerHTML += `
        <div class="card_box card-wrapper">
             <div class="container card">
                 <div class="side front_side">
                     <div class="content">
                         <div class="turn_around_button turn_around_inside_category"></div>
                         <p class="card_name toggle_name switch_off front_side_name">${elem.name}</p>
                     </div>
                 </div>
                 <div class="back side">
                     <div class="content">
                     <p class="card_name toggle_name switch_off">${elem.translation}</p>
                     </div>
                 </div>
             </div>
        </div>
`
        });

        let card = document.querySelectorAll(".card");
        let back = document.querySelectorAll(".back");

        for (let j = 0; j < card.length; j++) {

            card[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            card[j].style.backgroundSize = 'cover';
            back[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            back[j].style.backgroundSize = 'cover';
        }
    }
};