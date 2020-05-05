import {allCardsInfo} from "./constants/cardsInfo";
import {speech} from "./speech";
import {categoriesInfo} from "./constants/categoriesInfo";
import {openCategory} from "../script";
import {categoryHelper} from "./categoryHelper";
import {moves3d} from "./moves3d";
import {cardHelper} from "./cardHelper";
import {styleChange} from "../script";

let switchTrain = document.getElementById('switch_train');
let switchGame = document.getElementById('switch_game');
let gameLettersPC = document.querySelector('.game_letters');
let gameLettersMobile = document.querySelector('.game_letters_mobile');
let mistakes = document.querySelector('.mistakes_scoreboard');
let repeatButton = document.querySelector('.repeat_button');
const lettersCardContainer = document.querySelector('.letters_card_container');
export const button = document.querySelector('.return_button');
const countMistakes = document.querySelector('.mistakes_scoreboard_name');


gameLettersPC.addEventListener('click', (e, isChecked) => {

    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        lettersCardContainer.classList.add('letters_card_container_2');
        if (button.classList.contains('switch_off') && isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_2');
        } else {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
    }

    if (document.body.clientWidth < 592) {
        lettersCardContainer.classList.add('letters_card_container_3');
        if (button.classList.contains('switch_off') && isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_3');
        } else {
            lettersCardContainer.classList.add('letters_card_container_3');
        }
        if (button.classList.contains('switch_off') || isChecked === true) {
            button.classList.remove('return_button_2');
        } else if (isChecked === false) {
            button.classList.add('return_button_2');
        }
    }

    if (button.classList.contains('switch_off')) {
        let randomCategory = categoriesInfo[Math.floor(Math.random() * categoriesInfo.length)].categoryName;
        openCategory(randomCategory);
    } else {
        let addContainer = document.querySelector('.for_adding');
        addContainer.innerHTML = ``;
        let elem = document.querySelector('.for_adding');
        let categoryName = elem.getAttribute('about');
        openCategory(categoryName);
    }

    button.classList.remove('switch_off');

    mistakes.classList.remove('switch_off');
    repeatButton.classList.remove('switch_off');

    const allCardsNames = document.querySelectorAll('.toggle_name');
    const allTurnButtons = document.querySelectorAll('.turn_around_button');
    mistakes.classList.remove('switch_off');
    repeatButton.classList.remove('switch_off');
    startGame();
    if (isChecked) {
        allCardsNames.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    } else {
        allCardsNames.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    }
    if (isChecked) {
        allTurnButtons.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    } else {
        allTurnButtons.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    }
});

gameLettersMobile.addEventListener('click', (e, isChecked) => {

    if (document.body.clientWidth < 888 && document.body.clientWidth > 591) {
        lettersCardContainer.classList.add('letters_card_container_2');
        if (button.classList.contains('switch_off') && isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_2');
        } else {
            lettersCardContainer.classList.add('letters_card_container_2');
        }
    }

    if (document.body.clientWidth < 592) {
        lettersCardContainer.classList.add('letters_card_container_3');
        if (button.classList.contains('switch_off') && isChecked === false) {
            lettersCardContainer.classList.remove('letters_card_container_3');
        } else {
            lettersCardContainer.classList.add('letters_card_container_3');
        }
        button.classList.remove('return_button_2');
    }

    if (button.classList.contains('switch_off')) {
        let randomCategory = categoriesInfo[Math.floor(Math.random() * categoriesInfo.length)].categoryName;
        openCategory(randomCategory);
    } else {
        let addContainer = document.querySelector('.for_adding');
        addContainer.innerHTML = ``;
        let elem = document.querySelector('.for_adding');
        let categoryName = elem.getAttribute('about');
        openCategory(categoryName);
    }

    button.classList.remove('switch_off');

    mistakes.classList.remove('switch_off');
    repeatButton.classList.remove('switch_off');

    const allCardsNames = document.querySelectorAll('.toggle_name');
    const allTurnButtons = document.querySelectorAll('.turn_around_button');

    startGame();

    if (isChecked) {
        allCardsNames.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    } else {
        allCardsNames.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    }
    if (isChecked) {
        allTurnButtons.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    } else {
        allTurnButtons.forEach((elem)=> {
            elem.classList.toggle('switch_off');
        });
    }
});

export const changeMode = (e, isChecked) => {

    let addContainer = document.querySelector('.for_adding');
    let categoryName = addContainer.getAttribute('about');

    switchTrain.classList.toggle('switch_off');
    switchGame.classList.toggle('switch_off');

    if (document.body.clientWidth >= 1505) {
        gameLettersPC.classList.toggle('switch_off');
        gameLettersMobile.classList.toggle('switch_on');
    }

    if (document.body.clientWidth <= 591) {
        if (isChecked === false) {
            button.classList.add('return_button_2');
        }
        gameLettersPC.classList.toggle('switch_off');
        gameLettersMobile.classList.toggle('switch_on');
    } else {
        gameLettersPC.classList.toggle('switch_on');
        gameLettersMobile.classList.toggle('switch_off');
    }

    if (isChecked === false && categoryName !== null) {
        mistakes.classList.add('switch_off');
        repeatButton.classList.add('switch_off');
        categoryHelper.clearCategories();
        cardHelper.createCards(categoryName);
        moves3d();
    }
};

export const shuffleSpeech = (array) => {

    let copied = array.slice();

    let currentIndex = copied.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = copied[currentIndex];
        copied[currentIndex] = copied[randomIndex];
        copied[randomIndex] = temporaryValue;
    }
    return copied;
};


export const startGame = () => {

    const mist = document.querySelector('.mistakes_scoreboard');

    repeatButton.remove();
    mist.insertAdjacentHTML('afterend', '<div class="repeat_button"></div>');

    repeatButton = document.querySelector('.repeat_button');
    let elem = document.querySelector('.for_adding');
    let categoryName = elem.getAttribute('about');

    let correctAnswers = [];
    let incorrectAnswers = [];

    let previousMistakes = document.querySelector('.count');
    previousMistakes.remove();
    countMistakes.insertAdjacentHTML('afterend', '<div class="mistakes_scoreboard_name count">' + incorrectAnswers.length + '</div>');

    let i = 0;
    let shuffledArray = shuffleSpeech(allCardsInfo[categoryName]);

    let repeat = () => {
        speech.speechVoice(shuffledArray[i].name);
    };
    if (categoryName !== 0) {
        repeatButton.addEventListener('click', repeat);
    }

    speech.speechVoice(shuffledArray[i].name);

    let cardsContainer = document.querySelector('.cards__container');

    cardsContainer.addEventListener('click', async(e) => {
        e.preventDefault();

        let incorrectCards = document.querySelectorAll('.incorrect_answer');
        let groupRedCross = document.querySelectorAll('.red_cross');

        if (e.target.textContent.trim() === shuffledArray[i].name) {

            let groupGreenMark = document.querySelectorAll('.correct_answer');
            for (let j = 0; j < groupGreenMark.length; j++) {
                groupGreenMark[j].lastElementChild.classList.add('green_mark');
            }

            if (i <= shuffledArray.length - 1) {
                e.target.classList.add('correct_answer');
                incorrectCards.forEach((elem) => {
                    elem.classList.remove('incorrect_answer');
                });
                if (groupRedCross !== null) {
                    groupRedCross.forEach((elem) => {
                        elem.classList.remove('red_cross');
                    });
                }

                let audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'sounds/correct_answer.mp3';
                audio.play();

                let prom = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(), 290)
                });
                await prom;

                e.target.lastChild.previousElementSibling.classList.add('green_mark');

                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(), 1300)
                });
                await promise;
                if (i <= shuffledArray.length - 2) {
                    speech.speechVoice(shuffledArray[i+1].name);

                }
            }
            correctAnswers.push(e.target.textContent.trim());
            i = i+1;
        }

        else if (e.target.textContent.trim() !== shuffledArray[i].name) {
            for (let j = 0; j < allCardsInfo[categoryName].length; j++) {

                if (e.target.classList.contains('green_mark') && e.target.previousElementSibling.textContent.trim() === allCardsInfo[categoryName][j].name) {

                    e.target.classList.remove('green_mark');
                    e.target.parentNode.classList.add('incorrect_answer');

                    incorrectAnswers.push(e.target.textContent.trim());
                    let previousMistakes = document.querySelector('.count');
                    previousMistakes.remove();
                    countMistakes.insertAdjacentHTML('afterend', '<div class="mistakes_scoreboard_name count">' + incorrectAnswers.length + '</div>');
                    let audio = new Audio();
                    audio.preload = 'auto';
                    audio.src = 'sounds/wrong_answer.mp3';
                    audio.play();


                    let prom = new Promise((resolve, reject) => {
                        setTimeout(() => resolve(), 290)
                    });
                    await prom;
                    e.target.classList.add('red_cross');
                }

                if (e.target.textContent.trim() === allCardsInfo[categoryName][j].name) {

                    e.target.lastChild.previousElementSibling.classList.remove('green_mark');
                    e.target.classList.add('incorrect_answer');

                    let audio = new Audio();
                    audio.preload = 'auto';
                    audio.src = 'sounds/wrong_answer.mp3';
                    audio.play();


                    let prom = new Promise((resolve, reject) => {
                        setTimeout(() => resolve(), 290)
                    });
                    await prom;

                    e.target.lastChild.previousElementSibling.classList.add('red_cross');

                    incorrectAnswers.push(e.target.textContent.trim());
                    let previousMistakes = document.querySelector('.count');
                    previousMistakes.remove();

                    countMistakes.insertAdjacentHTML('afterend', '<div class="mistakes_scoreboard_name count">' + incorrectAnswers.length + '</div>');
                }
            }
        }

        if (i === shuffledArray.length) {

            categoryHelper.clearCategories();

            let previousCategory = document.querySelector('.for_adding');
            previousCategory.innerHTML = ``;
            console.log(incorrectAnswers);
            if (incorrectAnswers.length === 0) {
                previousCategory.innerHTML = `<div class="win"></div>`;

                let audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'sounds/win.mp3';
                audio.play();
            } else {
                previousCategory.innerHTML = `<div class="lose"></div>`;

                let audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'sounds/lose.mp3';
                audio.play();
            }

            let prom = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 4000)
            });
            await prom;

            lettersCardContainer.classList.remove('letters_card_container_2');
            lettersCardContainer.classList.remove('letters_card_container_3');
            mistakes.classList.add('switch_off');
            repeatButton.classList.add('switch_off');
            button.classList.add('switch_off');
            categoryHelper.clearCategories();
            categoryHelper.createCategories();
            let category = document.querySelector(".cards__container");
            category.addEventListener("click", styleChange);
            moves3d();
            document.body.scrollTo(0, 0);
        }
    });
};

