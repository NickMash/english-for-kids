import {allCardsInfo} from "./constants/cardsInfo";
import {speech} from "./speech";
import {button} from "./gameMode";

export const cardHelper = {
    createCards: (categoryName) => {

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
                         <div class="group_green_mark"></div>
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
        let frontCard = document.querySelectorAll(".front_side_name");

        for (let j = 0; j < card.length; j++) {

            card[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            card[j].style.backgroundSize = 'cover';
            back[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
            back[j].style.backgroundSize = 'cover';
        }

        frontCard.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                if (button.classList.contains('switch_off')) {} else {
                    speech.speechVoice(e.target.textContent.trim());
                }
            })
        })

    },
};