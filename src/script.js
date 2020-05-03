import './style.scss';
import {categoryHelper} from './js/categoryHelper.js';
import {cardHelper} from "./js/cardHelper";
import {speech} from "./js/speech";
import {moves3d} from "./js/moves3d";
import {button, changeMode} from "./js/gameMode";
import {categoriesInfo} from "./js/constants/categoriesInfo";
import {allCardsInfo} from "./js/constants/cardsInfo";

categoryHelper.createCategories();

let isChecked = document.querySelector('#checkbox').checked;
const returnButton = document.querySelector('.return_button');
const navigationContainer = document.querySelector('.navigation__container');
let switchRadio = document.querySelector('.checkbox');
let lettersCardContainer = document.querySelector('.letters_card_container');
let category = document.querySelector(".cards__container");

for (let i = 0; i < categoriesInfo.length; i++) {
    let array = allCardsInfo[categoriesInfo[i].categoryName];

    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}

export let styleChange = (e) => {
    categoryClickHandler(e);
    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        lettersCardContainer.classList.add('letters_card_container_2');
    }
    if (document.body.clientWidth < 592) {
        lettersCardContainer.classList.add('letters_card_container_3');
        if (returnButton.classList.contains('switch_off')) {
            returnButton.classList.remove('return_button_2');
        } else if (isChecked === false) {
            returnButton.classList.add('return_button_2');
        }
    }
};

let categoryClickHandler = (e) => {
    if (e.target.classList.contains('card_name') || e.target.classList.contains('turn_around_button') ) {
        e.preventDefault();
        let path = e.path || (e.composedPath && e.composedPath());
        if (e.target.classList.contains('turn_around_button')) {
            let img = e.target.parentNode.parentNode.parentNode;

            img.style.transform = 'rotateY(180deg)';
            img.style.transition = 'transform .8s cubic-bezier(.6, 0, .2, 1)';
        } else if (e.target.className !== 'turn_around_button' && e.target.className !== 'back') {

            speech.speechVoice(e.target.textContent);

            path.forEach((elem) => {

                if (elem.id && elem.id !== 'categories') {
                    openCategory(elem.id);
                }
            });
        }
    }
};

export const openCategory = (categoryName) => {
    categoryHelper.clearCategories();

    cardHelper.createCards(categoryName);

    returnButton.classList.remove('switch_off');
    moves3d();
};

moves3d();

speech.changeVoice();

returnButton.addEventListener('click', (e) => {

    let forAdding = document.querySelector('.for_adding');
    let mistakes = document.querySelector('.mistakes_scoreboard');
    let repeatButton = document.querySelector('.repeat_button');

    forAdding.removeAttribute('about');

    mistakes.classList.add('switch_off');
    repeatButton.classList.add('switch_off');
    categoryHelper.clearCategories();
    categoryHelper.createCategories();
    returnButton.classList.toggle('switch_off');
    let category = document.querySelector(".cards__container");
    category.addEventListener("click", styleChange);
    moves3d();

    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        if (returnButton.classList.contains('switch_off')) {
            lettersCardContainer.classList.remove('letters_card_container_2');
        } else {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
    }
    if (document.body.clientWidth < 592) {
        lettersCardContainer.classList.remove('letters_card_container_3');
    }

});

category.addEventListener("click", styleChange);

switchRadio.addEventListener("change", (e) => {
    e.preventDefault();
    isChecked = !isChecked;
    changeMode(e, isChecked);
});

navigationContainer.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.parentNode.classList.contains('menu_item')) {

        if (document.body.clientWidth < 592) {
            let mistakes = document.querySelector(".mistakes_scoreboard");
            if (mistakes.classList.contains('switch_off')) {
                button.classList.add('return_button_2');
                lettersCardContainer.classList.add('letters_card_container_3');
            }
        }
        if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
        speech.speechVoice(e.target.parentNode.id);
        for (let i = 0; i < item.length; i++) {
            item[i].classList.toggle('menu_item_hidden');
            item[i].classList.toggle('menu_item');
        }
        document.getElementById('shadow_body').classList.toggle('shadow_body_none');
        document.getElementById('shadow_body').classList.toggle('shadow_body');

        let cardNames = document.querySelector('.toggle_name');

        let path = e.path || (e.composedPath && e.composedPath());

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