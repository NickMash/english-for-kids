import './style.scss';
import {categoryHelper} from './js/categoryHelper.js';
import {cardHelper} from "./js/cardHelper";
import {speech} from "./js/speech";
import {moves3d} from "./js/moves3d";
import {changeMode} from "./js/gameMode";
import {startGame} from "./js/gameMode";

let isChecked = document.querySelector('#checkbox').checked;
const button = document.querySelector('.return_button');
const navigationContainer = document.querySelector('.navigation__container');
let switchRadio = document.querySelector('.checkbox');
let lettersCardContainer = document.querySelector('.letters_card_container');

const openCategory = (categoryName) => {
    categoryHelper.clearCategories();
    console.log(isChecked);
    if (isChecked) {
        cardHelper.createGameCards(categoryName);
    } else {
        cardHelper.createTrainCards(categoryName);
    }
    button.classList.toggle('switch_off');
    moves3d();
};

categoryHelper.createCategories();

moves3d();

speech.changeVoice();

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        if (isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_2');
        } else {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
    }
    if (document.body.clientWidth < 592) {
        if (isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_3');
        } else {
            lettersCardContainer.classList.add('letters_card_container_3');
        }
    }
    categoryHelper.clearCategories();
    categoryHelper.createCategories();
    button.classList.toggle('switch_off');
    let category = document.querySelector(".cards__container");
    category.addEventListener("click", categoryClickHandler);
    category.addEventListener("click", () => {
        if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
        if (document.body.clientWidth < 592) {
            lettersCardContainer.classList.add('letters_card_container_3');
            if (button.classList.contains('switch_off')) {
                button.classList.remove('return_button_2');
            } else if (isChecked === false) {
                button.classList.add('return_button_2');
            }
        }
    });
    moves3d();
});

switchRadio.addEventListener("change", (e) => {
    e.preventDefault();
    isChecked = !isChecked;
    changeMode(e, isChecked);
    console.log(isChecked);
});

let categoryClickHandler = (e) => {
    if (e.target.classList.contains('card_name') || e.target.classList.contains('turn_around_button') ) {
        e.preventDefault();
        let path = e.path || (e.composedPath && e.composedPath());
        if (e.target.classList.contains('turn_around_button')) {
            let img = e.target.parentNode.parentNode.parentNode;

            img.style.transform = 'rotateY(180deg)';
            img.style.transition = 'transform .8s cubic-bezier(.6, 0, .2, 1)';
        } else if (e.target.className !== 'turn_around_button' && e.target.className !== 'back' && isChecked === false) {

            speech.speechVoice(e.target.textContent);

             path.forEach((elem) => {

                if (elem.id && elem.id !== 'categories') {

                    openCategory(elem.id);
                }
             });
        }
    }
};

let category = document.querySelector(".cards__container");
    category.addEventListener("click", categoryClickHandler);
    category.addEventListener("click", () => {
    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        lettersCardContainer.classList.add('letters_card_container_2');
    }
    if (document.body.clientWidth < 592) {
        lettersCardContainer.classList.add('letters_card_container_3');
        if (button.classList.contains('switch_off')) {
            button.classList.remove('return_button_2');
        } else if (isChecked === false) {
            button.classList.add('return_button_2');
        }
    }
});

navigationContainer.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.parentNode.classList.contains('menu_item')) {
        let cardNames = document.querySelector('.toggle_name');
        let path = e.path || (e.composedPath && e.composedPath());
        console.log(path);

        if (cardNames === null) {
            path.forEach((elem) => {
                if (elem.id && elem.id !== 'nav') {
                    openCategory(elem.id)
                }
            });
            return;
        }

        if (cardNames.classList.contains('switch_off')) {

            path.forEach((elem) => {
                if (elem.id && elem.id !== 'nav') {
                    openCategory(elem.id)
                }
            });

            let allCardsNames = document.querySelectorAll('.toggle_name');
            if (isChecked) {
                allCardsNames.forEach((elem)=> {
                    elem.classList.toggle('switch_off');
                });
            } else {
                allCardsNames.forEach((elem)=> {
                    elem.classList.toggle('switch_off');
                });
            }

            allCardsNames.forEach((elem)=> {
                elem.classList.toggle('switch_off');
            });
        } else {
            path.forEach((elem) => {
                if (elem.id && elem.id !== 'nav') {
                    openCategory(elem.id)
                }
            });
        }
    }
});


let mainItem = document.getElementById('navigation__main_item');
let item = document.querySelectorAll(".toggle");

for (let i = 0; i < item.length; i++) {
    mainItem.addEventListener("click", (e) => {
        e.preventDefault();
        item[i].classList.toggle('menu_item_hidden');
        item[i].classList.toggle('menu_item');
        document.getElementById('shadow_body').classList.toggle('shadow_body_none');
        document.getElementById('shadow_body').classList.toggle('shadow_body');
    });
}
let shadowBody = document.getElementById('shadow_body');
for (let i = 0; i < item.length; i++) {
    shadowBody.addEventListener("click", (e) => {
        e.preventDefault();
        item[i].classList.toggle('menu_item_hidden');
        item[i].classList.toggle('menu_item');
        document.getElementById('shadow_body').classList.toggle('shadow_body_none');
        document.getElementById('shadow_body').classList.toggle('shadow_body');
    });
}


let gameLettersPC = document.querySelector('.game_letters');
let gameLettersMobile = document.querySelector('.game_letters_mobile');

gameLettersPC.addEventListener('click', (e) => {
    startGame();
});

gameLettersMobile.addEventListener('click', (e) => {
    startGame();
});