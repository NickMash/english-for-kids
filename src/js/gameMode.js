import {allCardsInfo} from "./constants/cardsInfo";
import {speech} from "./speech";

let switchTrain = document.getElementById('switch_train');
let switchGame = document.getElementById('switch_game');
let gameLettersPC = document.querySelector('.game_letters');
let gameLettersMobile = document.querySelector('.game_letters_mobile');
let mistakes = document.querySelector('.mistakes_scoreboard');
const repeatButton = document.querySelector('.repeat_button');
const lettersCardContainer = document.querySelector('.letters_card_container');
const button = document.querySelector('.return_button');

export const changeMode = (e, isChecked) => {

    switchTrain.classList.toggle('switch_off');
    switchGame.classList.toggle('switch_off');

    mistakes.classList.toggle('switch_off');
    repeatButton.classList.toggle('switch_off');

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

    if (document.body.clientWidth >= 1505) {
        gameLettersPC.classList.toggle('switch_off');
        gameLettersMobile.classList.toggle('switch_on');
    }

    if (document.body.clientWidth <= 591) {
        gameLettersPC.classList.toggle('switch_off');
        gameLettersMobile.classList.toggle('switch_on');
    } else {
        gameLettersPC.classList.toggle('switch_on');
        gameLettersMobile.classList.toggle('switch_off');
    }

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
};

export const shuffleSpeach = (array) => {

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

export const shuffleArr = (array) => {

    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

export const startGame = () => {

    let gameButton = document.querySelectorAll('.game_mode');
    let elem = document.querySelector('.for_adding');
    let categoryName = elem.getAttribute('about');
    console.log(elem);
    let shuffledArray = shuffleSpeach(allCardsInfo[categoryName]);

    shuffleArr(allCardsInfo[categoryName]);

    let correctAnswers = [];
    let incorrectAnswers = [];

    let i = 0;
    speech.speechVoice(shuffledArray[i].name);
    let cardsContainer = document.querySelector('.cards__container');

    cardsContainer.addEventListener('click', async(e) => {
        console.log(e,'document');

        if (e.target.textContent.trim() === shuffledArray[i].name) {
            if (i <= shuffledArray.length - 1) {
                e.target.classList.add('correct_answer');

                let audio = new Audio();
                audio.preload = 'auto';
                audio.src = 'sounds/correct_answer.mp3';
                audio.play();

                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(), 1500)
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

                if (e.target.textContent.trim() === allCardsInfo[categoryName][j].name) {
                    incorrectAnswers.push(e.target.textContent.trim());
                    let audio = new Audio();
                    audio.preload = 'auto';
                    audio.src = 'sounds/wrong_answer.mp3';
                    audio.play();
                }
            }
        }

    });

    gameButton.forEach((elem)=> {
        elem.addEventListener('click', (e) => {
            e.preventDefault();

        })
    });

};
