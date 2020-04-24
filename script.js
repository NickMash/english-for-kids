const allCardsInfo = {
    transport: [
        {name: 'Car', imageLink: 'images/cards/transport/car.jpg', translation: 'Машина'},
        {name: 'Trolley bus', imageLink: 'images/cards/transport/trolley_bus.jpg', translation: 'Троллейбус'},
        {name: 'Tram', imageLink: 'images/cards/transport/tram.jpg', translation: 'Трамвай'},
        {name: 'Truck', imageLink: 'images/cards/transport/truck.jpg', translation: 'Грузовик'},
        {name: 'Airplane', imageLink: 'images/cards/transport/airplane.jpg', translation: 'Самолет'},
        {name: 'Helicopter', imageLink: 'images/cards/transport/helicopter.jpg', translation: 'Вертолет'},
        {name: 'Train', imageLink: 'images/cards/transport/train.jpg', translation: 'Поезд'},
        {name: 'Ship', imageLink: 'images/cards/transport/ship.jpg', translation: 'Корабль'},
        {name: 'Boat', imageLink: 'images/cards/transport/boat.png', translation: 'Лодка'},
        {name: 'Bicycle', imageLink: 'images/cards/transport/bicycle.jpg', translation: 'Велосипед'},
        {name: 'Motorcycle', imageLink: 'images/cards/transport/motorcycle.jpg', translation: 'Мотоцикл'},
        {name: 'Rocket', imageLink: 'images/cards/transport/rocket.jpg', translation: 'Ракета'}
    ],
    movements: [
        {name: 'Go', imageLink: 'images/cards/movements/go.jpg', translation: 'Идти'},
        {name: 'Run', imageLink: 'images/cards/movements/run.jpg', translation: 'Бежать'},
        {name: 'Jump', imageLink: 'images/cards/movements/jump.jpg', translation: 'Прыгать'},
        {name: 'Swim', imageLink: 'images/cards/movements/swim.jpg', translation: 'Плавать'},
        {name: 'Dance', imageLink: 'images/cards/movements/dance.jpg', translation: 'Танцевать'},
        {name: 'Walk', imageLink: 'images/cards/movements/walk.jpg', translation: 'Гулять'},
        {name: 'Squat', imageLink: 'images/cards/movements/squat.jpg', translation: 'Приседать'},
        {name: 'Push up', imageLink: 'images/cards/movements/push_up.jpg', translation: 'Отжиматься'},
        {name: 'Spin', imageLink: 'images/cards/movements/spin.jpg', translation: 'Кружиться'},
        {name: 'Crawl', imageLink: 'images/cards/movements/crawl.jpeg', translation: 'Ползти'},
        {name: 'Bend', imageLink: 'images/cards/movements/bend.jpg', translation: 'Наклоняться'},
        {name: 'Pull up', imageLink: 'images/cards/movements/pull_up.jpg', translation: 'Подтягиваться'}
    ],
    emotions: [
        {name: 'Laugh', imageLink: 'images/cards/emotions/laugh.jpg', translation: 'Смех'},
        {name: 'Sadness', imageLink: 'images/cards/emotions/sadness.jpg', translation: 'Грусть'},
        {name: 'Cry', imageLink: 'images/cards/emotions/cry.jpg', translation: 'Плач'},
        {name: 'Fear', imageLink: 'images/cards/emotions/fear.jpg', translation: 'Страх'},
        {name: 'Anger', imageLink: 'images/cards/emotions/anger.jpg', translation: 'Злость'},
        {name: 'Guilt', imageLink: 'images/cards/emotions/guilt.jpg', translation: 'Вина'},
        {name: 'Fun', imageLink: 'images/cards/emotions/fun.jpg', translation: 'Веселье'},
        {name: 'Curiosity', imageLink: 'images/cards/emotions/curiosity.jpg', translation: 'Любопытство'},
        {name: 'Surprise', imageLink: 'images/cards/emotions/surprise.jpg', translation: 'Удивление'},
        {name: 'Satisfaction', imageLink: 'images/cards/emotions/satisfaction.jpg', translation: 'Удовлетворение'},
        {name: 'Disgust', imageLink: 'images/cards/emotions/disgust.jpg', translation: 'Отвращение'},
        {name: 'Pity', imageLink: 'images/cards/emotions/pity.jpg', translation: 'Жалость'}
    ],
    pets: [
        {name: 'Dog', imageLink: 'images/cards/pets/dog.jpg', translation: 'Собака'},
        {name: 'Cat', imageLink: 'images/cards/pets/cat.jpg', translation: 'Кот'},
        {name: 'Parrot', imageLink: 'images/cards/pets/parrot.jpeg', translation: 'Попугай'},
        {name: 'Horse', imageLink: 'images/cards/pets/horse.jpg', translation: 'Лошадь'},
        {name: 'Cow', imageLink: 'images/cards/pets/cow.jpg', translation: 'Корова'},
        {name: 'Pig', imageLink: 'images/cards/pets/pig.jpg', translation: 'Свинья'},
        {name: 'Hamster', imageLink: 'images/cards/pets/hamster.jpg', translation: 'Хомяк'},
        {name: 'Guinea pig', imageLink: 'images/cards/pets/guinea_pig.jpeg', translation: 'Морская свинка'},
        {name: 'Snake', imageLink: 'images/cards/pets/snake.jpg', translation: 'Змея'},
        {name: 'Turtle', imageLink: 'images/cards/pets/turtle.jpeg', translation: 'Черепаха'},
        {name: 'Aquarium fish', imageLink: 'images/cards/pets/aquarium_fish.png', translation: 'Аквариумная рыбка'},
        {name: 'Spider', imageLink: 'images/cards/pets/spider.jpg', translation: 'Паук'}
    ],
    animals: [
        {name: 'Lion', imageLink: 'images/cards/animals/lion.jpg', translation: 'Лев'},
        {name: 'Tiger', imageLink: 'images/cards/animals/tiger.jpg', translation: 'Тигр'},
        {name: 'Elephant', imageLink: 'images/cards/animals/elephant.jpg', translation: 'Слон'},
        {name: 'Zebra', imageLink: 'images/cards/animals/zebra.jpeg', translation: 'Зебра'},
        {name: 'Giraffe', imageLink: 'images/cards/animals/giraffe.jpg', translation: 'Жираф'},
        {name: 'Hyena', imageLink: 'images/cards/animals/hyena.jpg', translation: 'Гиена'},
        {name: 'Hippopotamus', imageLink: 'images/cards/animals/hippopotamus.jpg', translation: 'Бегемот'},
        {name: 'Crocodile', imageLink: 'images/cards/animals/crocodile.jpg', translation: 'Крокодил'},
        {name: 'Rhinoceros', imageLink: 'images/cards/animals/rhinoceros.jpeg', translation: 'Носорог'},
        {name: 'Monkey', imageLink: 'images/cards/animals/monkey.jpg', translation: 'Обезьяна'},
        {name: 'Bear', imageLink: 'images/cards/animals/bear.jpg', translation: 'Медведь'},
        {name: 'Wolf', imageLink: 'images/cards/animals/wolf.jpg', translation: 'Волк'}
    ],
    nature: [
        {name: 'Tree', imageLink: 'images/cards/nature/tree.jpg', translation: 'Дерево'},
        {name: 'Lake', imageLink: 'images/cards/nature/lake.jpg', translation: 'Озеро'},
        {name: 'Sea', imageLink: 'images/cards/nature/sea.jpg', translation: 'Море'},
        {name: 'Ocean', imageLink: 'images/cards/nature/ocean.jpg', translation: 'Океан'},
        {name: 'Forrest', imageLink: 'images/cards/nature/forrest.jpg', translation: 'Лес'},
        {name: 'River', imageLink: 'images/cards/nature/river.jpg', translation: 'Река'},
        {name: 'Grass', imageLink: 'images/cards/nature/grass.jpg', translation: 'Трава'},
        {name: 'Bush', imageLink: 'images/cards/nature/bush.jpg', translation: 'Куст'},
        {name: 'Flower', imageLink: 'images/cards/nature/flower.jpg', translation: 'Цветок'},
        {name: 'Sky', imageLink: 'images/cards/nature/sky.jpg', translation: 'Небо'},
        {name: 'Clouds', imageLink: 'images/cards/nature/clouds.png', translation: 'Облака'},
        {name: 'Mountains', imageLink: 'images/cards/nature/mountains.jpg', translation: 'Горы'}
    ],
    weather: [
        {name: 'Rain', imageLink: 'images/cards/weather/rain.jpg', translation: 'Дождь'},
        {name: 'Lightning', imageLink: 'images/cards/weather/lightning.jpg', translation: 'Молния'},
        {name: 'Fog', imageLink: 'images/cards/weather/fog.jpg', translation: 'Туман'},
        {name: 'Snow', imageLink: 'images/cards/weather/snow.jpg', translation: 'Снег'},
        {name: 'Wind', imageLink: 'images/cards/weather/wind.jpg', translation: 'Ветер'},
        {name: 'Hail', imageLink: 'images/cards/weather/hail.jpg', translation: 'Град'},
        {name: 'Storm', imageLink: 'images/cards/weather/storm.jpg', translation: 'Шторм'},
        {name: 'Hurricane', imageLink: 'images/cards/weather/hurricane.jpg', translation: 'Ураган'},
        {name: 'Tornado', imageLink: 'images/cards/weather/tornado.jpg', translation: 'Смерч'},
        {name: 'Calm', imageLink: 'images/cards/weather/calm.jpg', translation: 'Штиль'},
        {name: 'Sun', imageLink: 'images/cards/weather/sun.jpg', translation: 'Солнце'},
        {name: 'Ice', imageLink: 'images/cards/weather/ice.jpg', translation: 'Гололед'}
    ],
    family: [
        {name: 'Mom', imageLink: 'images/cards/family/mom.jpg', translation: 'Мама'},
        {name: 'Dad', imageLink: 'images/cards/family/dad.jpg', translation: 'Папа'},
        {name: 'Sister', imageLink: 'images/cards/family/sister.jpg', translation: 'Сестра'},
        {name: 'Brother', imageLink: 'images/cards/family/brother.jpg', translation: 'Брат'},
        {name: 'Grandmother, Grandfather', imageLink: 'images/cards/family/grandma_pa.jpg', translation: 'Бабушка, Дедушка'},
        {name: 'Granddaughter, Grandson', imageLink: 'images/cards/family/granddaughter_son.jpg', translation: 'Внук, Внучка'},
        {name: 'Uncle', imageLink: 'images/cards/family/uncle.jpg', translation: 'Дядя'},
        {name: 'Aunt', imageLink: 'images/cards/family/aunt.jpg', translation: 'Тетя'},
        {name: 'Cousin', imageLink: 'images/cards/family/cousin.jpg', translation: 'Двоюродный брат, Двоюродная сестра)'},
        {name: 'Godfather, Godmother', imageLink: 'images/cards/family/godfather_mother.jpg', translation: 'Крестный папа, Крестная мама'},
        {name: 'Niece', imageLink: 'images/cards/family/niece.jpg', translation: 'Племянница'},
        {name: 'Nephew', imageLink: 'images/cards/family/nephew.jpg', translation: 'Племянник'}
    ]
};
const categories = [
    {
        name: 'Family',
        translation: 'Семья',
        categoryName: 'family',
    },
    {
        name: 'Emotions',
        translation: 'Эмоции',
        categoryName: 'emotions',
    },
    {
        name: 'Movements',
        translation: 'Движения',
        categoryName: 'movements',
    },
    {
        name: 'Nature',
        translation: 'Природа',
        categoryName: 'nature',
    },
    {
        name: 'Transport',
        translation: 'Транспорт',
        categoryName: 'transport',
    },
    {
        name: 'Pets',
        translation: 'Домашние животные',
        categoryName: 'pets',
    },
    {
        name: 'Weather',
        translation: 'Погода',
        categoryName: 'weather',
    },
    {
        name: 'Animals',
        translation: 'Животные',
        categoryName: 'animals',
    },
];

let checkbox = document.getElementById('checkbox').checked;

let checkboxFunc = () => {

    let switchRadio = document.querySelector('.checkbox');

    switchRadio.addEventListener("change", (e) => {
        e.preventDefault();
        if (switchRadio.checked) {
            return true;
        } else {
            return false;
        }
    });
};

checkboxFunc();
console.log(checkboxFunc());

let createCategories = () => {
    let n = document.querySelector('.for_adding');

    n.insertAdjacentHTML('afterbegin', '<div class="categories cards__container" id="categories"></div>');

    categories.forEach((elem)=> {
        document.getElementById('categories').innerHTML += `
        <div class="card_box card-wrapper" id="${elem.categoryName}">
             <div class="container card">
                 <div class="side front_side">
                     <div class="content">
                         <div class="turn_around_button"></div>
                         <p class="card_name front_side_name">${elem.name}</p>
                     </div>
                 </div>
                 <div class="back side">
                     <div class="content">
                         <p class="card_name">${elem.translation}</p>
                     </div>
                 </div>
             </div>
         </div>
`
    });

    moves3d();
};

let createCards = (categoryName) => {
    let n = document.querySelector('.for_adding');

    n.insertAdjacentHTML('afterbegin', '<div class="cards__container"></div>');

    if (checkbox) {
        allCardsInfo[categoryName].forEach((elem)=> {

            document.querySelector('.cards__container').innerHTML += `
        <div class="card_box card-wrapper">
             <div class="container card">
                 <div class="side front_side">
                     <div class="content">
                         <div class="turn_around_button"></div>
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
    } else {
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
    }

    let card = document.querySelectorAll(".card");
    let back = document.querySelectorAll(".back");

    for (let j = 0; j < card.length; j++) {

        card[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
        card[j].style.backgroundSize = 'cover';
        back[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
        back[j].style.backgroundSize = 'cover';
    }

speachVoice();

};

let clearCategories = () => {
    let previousCategory = document.querySelector('.for_adding');

    previousCategory.innerHTML = ``;
};

let openCategory = (categoryName) => {
    clearCategories();
    createCards(categoryName);
    moves3d();
};

let moves3d = () => {
    let img = document.querySelectorAll(".card");

    for (let i = 0; i < img.length; i++) {
        function move(x, y) {
            img[i].classList.add('card-active');
            let xser = img[i].getBoundingClientRect().left + img[i].offsetWidth / 2;
            let yser = img[i].getBoundingClientRect().top + img[i].offsetHeight / 2;
            let otnX = x - xser;
            let otnY = y - yser;
            let raznX = otnX / img[i].offsetWidth * 100 * 2;
            let raznY = otnY / img[i].offsetHeight * 100 * 2;
            let trX = raznY / 100 * 6 * -1;
            let trY = raznX / 100 * 6;
            trX = Math.round(trX * 1000) / 1000;
            trY = Math.round(trY * 1000) / 1000;
            img[i].style.transform = 'rotateY(' + trY + 'deg) rotateX(' + trX + 'deg) rotateZ(0deg) scale(1.05)';
        }

        function resetTransform() {
            img[i].classList.remove('card-active');
            img[i].style.transform = 'rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1)';
        }

        img[i].addEventListener("mousemove", (e) => {
            move(e.pageX, e.pageY);
        });
        img[i].addEventListener("mouseout", (e) => {
            resetTransform();
        });
    }

    let backSide = document.querySelectorAll(".turn_around_button");

    for (let i = 0;i < img.length; i++){
        backSide[i].addEventListener("click", (e) => {
            e.preventDefault();
            img[i].style.transform = 'rotateY(180deg)';
            img[i].style.transition = 'transform .8s cubic-bezier(.6, 0, .2, 1)';
        });
    }
};

createCategories();

let openCategoryFromCardsMenu = () => {
    let category = document.querySelectorAll(".card_box");

    for (let i = 0; i < category.length; i++){
        category[i].addEventListener("click", (e) => {
            e.preventDefault();
            let path = e.path || (e.composedPath && e.composedPath());
            if (e.target.className === 'turn_around_button') {
                let img = document.querySelectorAll(".card");
                img[i].style.transform = 'rotateY(180deg)';
                img[i].style.transition = 'transform .8s cubic-bezier(.6, 0, .2, 1)';
            } else {
                path.forEach((elem) => {
                    console.log(elem);
                    if (elem.id && elem.id !== 'categories') {
                        openCategory(elem.id)
                    }
                });
            }
        });
    }
};

openCategoryFromCardsMenu();

let openCategoryFromBubblesMenu = () => {
    let menuItems = document.querySelectorAll(".toggle");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", (e) => {
            e.preventDefault();


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
                if (checkbox) {
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
        });
    }
};

openCategoryFromBubblesMenu();

let openMenu = () => {

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

};

openMenu();

let switchMode = () => {
    let switchRadio = document.querySelector('.checkbox');
    let switchTrain = document.getElementById('switch_train');
    let switchGame = document.getElementById('switch_game');

    switchRadio.addEventListener("change", (e) => {
        e.preventDefault();
        switchTrain.classList.toggle('switch_off');
        switchGame.classList.toggle('switch_off');

        if (document.body.clientWidth >= 1471) {
            let n = document.querySelector('.game_letters');
            n.classList.toggle('switch_off');

            let d = document.querySelector('.game_letters_mobile');
            d.classList.toggle('switch_on');
        }

        if (document.body.clientWidth <= 591) {
            let n = document.querySelector('.game_letters');
            n.classList.toggle('switch_off');

            let d = document.querySelector('.game_letters_mobile');
            d.classList.toggle('switch_on');
        } else {
            let n = document.querySelector('.game_letters');
            n.classList.toggle('switch_on');

            let d = document.querySelector('.game_letters_mobile');
            d.classList.toggle('switch_off');
        }

        let allCardsNames = document.querySelectorAll('.toggle_name');
        if (checkbox) {
            allCardsNames.forEach((elem)=> {
                elem.classList.toggle('switch_off');
            });
        } else {
            allCardsNames.forEach((elem)=> {
                elem.classList.toggle('switch_off');
            });
        }
    });
};

switchMode();

let changeMode = () => {
    let gameButton = document.querySelectorAll('.game_mode');

    gameButton.forEach((elem)=> {
        addEventListener('click', (e) => {
            e.preventDefault();

        })
    });
};

let speachVoice = () => {

    let cardsForSpeach = document.querySelectorAll('.front_side');
    let allCardsNames = document.querySelectorAll('.front_side_name');


    for (let i = 0; i < cardsForSpeach.length; i++) {
        cardsForSpeach[i].addEventListener('click', (e)=> {
            e.preventDefault();
            let checkbox = document.getElementById('checkbox');
            if (e.target.className !== 'turn_around_button') {
                responsiveVoice.setDefaultVoice("US English Male");
                responsiveVoice.speak(allCardsNames[i].textContent);
            }
        })
    }
};

speachVoice();
