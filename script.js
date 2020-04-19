const allCardsInfo = {
    transport: [
        {name: 'Сar', class: 'card', imageLink: 'images/cards/transport/car.jpg', translation: 'Машина'},
        {name: 'Trolley bus', class: 'card', imageLink: 'images/cards/transport/trolley_bus.jpg', translation: 'Троллейбус'},
        {name: 'Tram', class: 'card', imageLink: 'images/cards/transport/tram.jpg', translation: 'Трамвай'},
        {name: 'Truck', class: 'card', imageLink: 'images/cards/transport/truck.png', translation: 'Грузовик'},
        {name: 'Airplane', class: 'card', imageLink: 'images/cards/transport/airplane.jpg', translation: 'Самолет'},
        {name: 'Helicopter', class: 'card', imageLink: 'images/cards/transport/helicopter.jpg', translation: 'Вертолет'},
        {name: 'Train', class: 'card', imageLink: 'images/cards/transport/train.jpg', translation: 'Поезд'},
        {name: 'Ship', class: 'card', imageLink: 'images/cards/transport/ship.jpg', translation: 'Корабль'},
        {name: 'Boat', class: 'card', imageLink: 'images/cards/transport/boat.png', translation: 'Лодка'},
        {name: 'Bicycle', class: 'card', imageLink: 'images/cards/transport/bicycle.jpg', translation: 'Велосипед'},
        {name: 'Motorcycle', class: 'card', imageLink: 'images/cards/transport/motorcycle.jpg', translation: 'Мотоцикл'},
        {name: 'Rocket', class: 'card', imageLink: 'images/cards/transport/rocket.jpg', translation: 'Ракета'}
    ],
    movements: [
        {name: 'Go', class: 'card', imageLink: 'images/cards/movements/go.jpg', translation: 'Идти'},
        {name: 'Run', class: 'card', imageLink: 'images/cards/movements/run.jpg', translation: 'Бежать'},
        {name: 'Jump', class: 'card', imageLink: 'images/cards/movements/jump.jpg', translation: 'Прыгать'},
        {name: 'Swim', class: 'card', imageLink: 'images/cards/movements/swim.jpg', translation: 'Плавать'},
        {name: 'Dance', class: 'card', imageLink: 'images/cards/movements/dance.jpg', translation: 'Танцевать'},
        {name: 'Walk', class: 'card', imageLink: 'images/cards/movements/walk.jpg', translation: 'Гулять'},
        {name: 'Squat', class: 'card', imageLink: 'images/cards/movements/squat.jpg', translation: 'Приседать'},
        {name: 'Push up', class: 'card', imageLink: 'images/cards/movements/push_up.jpg', translation: 'Отжиматься'},
        {name: 'Spin', class: 'card', imageLink: 'images/cards/movements/spin.jpg', translation: 'Кружиться'},
        {name: 'Crawl', class: 'card', imageLink: 'images/cards/movements/crawl.jpeg', translation: 'Ползти'},
        {name: 'Bend', class: 'card', imageLink: 'images/cards/movements/bend.jpg', translation: 'Наклоняться'},
        {name: 'Pull up', class: 'card', imageLink: 'images/cards/movements/pull_up.jpg', translation: 'Подтягиваться'}
    ],
    emotions: [
        {name: 'Laugh', class: 'card', imageLink: 'images/cards/emotions/laugh.jpg', translation: 'Смех'},
        {name: 'Sadness', class: 'card', imageLink: 'images/cards/emotions/sadness.jpg', translation: 'Грусть'},
        {name: 'Сry', class: 'card', imageLink: 'images/cards/emotions/cry.jpg', translation: 'Плач'},
        {name: 'Fear', class: 'card', imageLink: 'images/cards/emotions/fear.jpg', translation: 'Страх'},
        {name: 'Anger', class: 'card', imageLink: 'images/cards/emotions/anger.jpg', translation: 'Злость'},
        {name: 'Guilt', class: 'card', imageLink: 'images/cards/emotions/guilt.jpg', translation: 'Вина'},
        {name: 'Fun', class: 'card', imageLink: 'images/cards/emotions/fun.jpg', translation: 'Веселье'},
        {name: 'Curiosity', class: 'card', imageLink: 'images/cards/emotions/curiosity.jpg', translation: 'Любопытство'},
        {name: 'Surprise', class: 'card', imageLink: 'images/cards/emotions/surprise.jpg', translation: 'Удивление'},
        {name: 'Satisfaction', class: 'card', imageLink: 'images/cards/emotions/satisfaction.jpg', translation: 'Удовлетворение'},
        {name: 'Disgust', class: 'card', imageLink: 'images/cards/emotions/disgust.jpg', translation: 'Отвращение'},
        {name: 'Pity', class: 'card', imageLink: 'images/cards/emotions/pity.jpg', translation: 'Жалость'}
    ],
    pets: [
        {name: 'Dog', class: 'card', imageLink: 'images/cards/pets/dog.jpg', translation: 'Собака'},
        {name: 'Cat', class: 'card', imageLink: 'images/cards/pets/cat.jpg', translation: 'Кот'},
        {name: 'Parrot', class: 'card', imageLink: 'images/cards/pets/parrot.jpeg', translation: 'Попугай'},
        {name: 'Horse', class: 'card', imageLink: 'images/cards/pets/horse.jpg', translation: 'Лошадь'},
        {name: 'Cow', class: 'card', imageLink: 'images/cards/pets/cow.jpg', translation: 'Корова'},
        {name: 'Pig', class: 'card', imageLink: 'images/cards/pets/pig.jpg', translation: 'Свинья'},
        {name: 'Hamster', class: 'card', imageLink: 'images/cards/pets/hamster.jpg', translation: 'Хомяк'},
        {name: 'Guinea pig', class: 'card', imageLink: 'images/cards/pets/guinea_pig.jpeg', translation: 'Морская свинка'},
        {name: 'Snake', class: 'card', imageLink: 'images/cards/pets/snake.jpg', translation: 'Змея'},
        {name: 'Turtle', class: 'card', imageLink: 'images/cards/pets/turtle.jpeg', translation: 'Черепаха'},
        {name: 'Aquarium fish', class: 'card', imageLink: 'images/cards/pets/aquarium_fish.png', translation: 'Аквариумная рыбка'},
        {name: 'Spider', class: 'card', imageLink: 'images/cards/pets/spider.jpg', translation: 'Паук'}
    ],
    animals: [
        {name: 'Lion', class: 'card', imageLink: 'images/cards/animals/lion.jpg', translation: 'Лев'},
        {name: 'Tiger', class: 'card', imageLink: 'images/cards/animals/tiger.jpg', translation: 'Тигр'},
        {name: 'Elephant', class: 'card', imageLink: 'images/cards/animals/elephant.jpg', translation: 'Слон'},
        {name: 'Zebra', class: 'card', imageLink: 'images/cards/animals/zebra.jpeg', translation: 'Зебра'},
        {name: 'Giraffe', class: 'card', imageLink: 'images/cards/animals/giraffe.jpg', translation: 'Жираф'},
        {name: 'Hyena', class: 'card', imageLink: 'images/cards/animals/hyena.jpg', translation: 'Гиена'},
        {name: 'Hippopotamus', class: 'card', imageLink: 'images/cards/animals/hippopotamus.jpg', translation: 'Бегемот'},
        {name: 'Crocodile', class: 'card', imageLink: 'images/cards/animals/crocodile.jpg', translation: 'Крокодил'},
        {name: 'Rhinoceros', class: 'card', imageLink: 'images/cards/animals/rhinoceros.jpeg', translation: 'Носорог'},
        {name: 'Monkey', class: 'card', imageLink: 'images/cards/animals/monkey.jpg', translation: 'Обезьяна'},
        {name: 'Bear', class: 'card', imageLink: 'images/cards/animals/bear.jpg', translation: 'Медведь'},
        {name: 'Wolf', class: 'card', imageLink: 'images/cards/animals/wolf.jpg', translation: 'Волк'}
    ],
    nature: [
        {name: 'Tree', class: 'card', imageLink: 'images/cards/nature/tree.jpg', translation: 'Дерево'},
        {name: 'Lake', class: 'card', imageLink: 'images/cards/nature/lake.jpg', translation: 'Озеро'},
        {name: 'Sea', class: 'card', imageLink: 'images/cards/nature/sea.jpg', translation: 'Море'},
        {name: 'Ocean', class: 'card', imageLink: 'images/cards/nature/ocean.jpg', translation: 'Океан'},
        {name: 'Forrest', class: 'card', imageLink: 'images/cards/nature/forrest.jpg', translation: 'Лес'},
        {name: 'River', class: 'card', imageLink: 'images/cards/nature/river.jpg', translation: 'Река'},
        {name: 'Grass', class: 'card', imageLink: 'images/cards/nature/grass.jpg', translation: 'Трава'},
        {name: 'Bush', class: 'card', imageLink: 'images/cards/nature/bush.jpg', translation: 'Куст'},
        {name: 'Flower', class: 'card', imageLink: 'images/cards/nature/flower.jpg', translation: 'Цветок'},
        {name: 'Sky', class: 'card', imageLink: 'images/cards/nature/sky.jpg', translation: 'Небо'},
        {name: 'Сlouds', class: 'card', imageLink: 'images/cards/nature/clouds.png', translation: 'Облака'},
        {name: 'Mountains', class: 'card', imageLink: 'images/cards/nature/mountains.jpg', translation: 'Горы'}
    ],
    weather: [
        {name: 'Rain', class: 'card', imageLink: 'images/cards/weather/rain.jpg', translation: 'Дождь'},
        {name: 'Lightning', class: 'card', imageLink: 'images/cards/weather/lightning.jpg', translation: 'Молния'},
        {name: 'Fog', class: 'card', imageLink: 'images/cards/weather/fog.jpg', translation: 'Туман'},
        {name: 'Snow', class: 'card', imageLink: 'images/cards/weather/snow.jpg', translation: 'Снег'},
        {name: 'Wind', class: 'card', imageLink: 'images/cards/weather/wind.jpg', translation: 'Ветер'},
        {name: 'Hail', class: 'card', imageLink: 'images/cards/weather/hail.jpg', translation: 'Град'},
        {name: 'Storm', class: 'card', imageLink: 'images/cards/weather/storm.jpg', translation: 'Шторм'},
        {name: 'Hurricane', class: 'card', imageLink: 'images/cards/weather/hurricane.jpg', translation: 'Ураган'},
        {name: 'Tornado', class: 'card', imageLink: 'images/cards/weather/tornado.jpg', translation: 'Смерч'},
        {name: 'Calm', class: 'card', imageLink: 'images/cards/weather/calm.jpg', translation: 'Штиль'},
        {name: 'Sun', class: 'card', imageLink: 'images/cards/weather/sun.jpg', translation: 'Солнце'},
        {name: 'Ice', class: 'card', imageLink: 'images/cards/weather/ice.jpg', translation: 'Гололед'}
    ],
    family: [
        {name: 'Mom', class: 'card', imageLink: 'images/cards/family/mom.jpg', translation: 'Мама'},
        {name: 'Dad', class: 'card', imageLink: 'images/cards/family/dad.jpg', translation: 'Папа'},
        {name: 'Sister', class: 'card', imageLink: 'images/cards/family/sister.jpg', translation: 'Сестра'},
        {name: 'Brother', class: 'card', imageLink: 'images/cards/family/brother.jpg', translation: 'Брат'},
        {name: 'Grandmother, Grandfather', class: 'card', imageLink: 'images/cards/family/grandma_pa.jpg', translation: 'Бабушка, Дедушка'},
        {name: 'Granddaughter, Grandson', class: 'card', imageLink: 'images/cards/family/granddaughter_son.jpg', translation: 'Внук, Внучка'},
        {name: 'Uncle', class: 'card', imageLink: 'images/cards/family/uncle.jpg', translation: 'Шторм'},
        {name: 'Aunt', class: 'card', imageLink: 'images/cards/family/aunt.jpg', translation: 'Ураган'},
        {name: 'Cousin', class: 'card', imageLink: 'images/cards/family/cousin.jpg', translation: 'Двоюродный брат, Двоюродная сестра)'},
        {name: 'Godfather, Godmother', class: 'card', imageLink: 'images/cards/family/godfather_mother.jpg', translation: 'Крестный папа, Крестная мама'},
        {name: 'Niece', class: 'card', imageLink: 'images/cards/family/niece.jpg', translation: 'Племянница'},
        {name: 'Nephew', class: 'card', imageLink: 'images/cards/family/nephew.jpg', translation: 'Племянник'}
    ]
}
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
let createCategories = () => {
    let n = document.querySelector('.for_adding');

    n.insertAdjacentHTML('afterbegin', '<div class="categories cards__container" id="categories"></div>');

    categories.forEach((elem)=> {
        document.getElementById('categories').innerHTML += `
        <div class="card_box card-wrapper" id="${elem.categoryName}">
             <div class="container card">
                 <div class="side">
                     <div class="content">
                         <div class="turn_around_button"></div>
                         <p class="card_name">${elem.name}</p>
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
    console.log(categoryName);
    allCardsInfo[categoryName].forEach((elem)=> {
        document.querySelector('.cards__container').innerHTML += `
        <div class="card_box card-wrapper">
             <div class="container card">
                 <div class="side">
                     <div class="content">
                         <div class="turn_around_button"></div>
                         <p class="card_name">${elem.name}</p>
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

    let card = document.querySelectorAll(".card");
    let back = document.querySelectorAll(".back");

    for (let j = 0; j < card.length; j++) {

        card[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
        card[j].style.backgroundSize = 'cover';
        back[j].style.backgroundImage = `url(${allCardsInfo[categoryName][j].imageLink})`;
        back[j].style.backgroundSize = 'cover';
    }
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

let category = document.querySelectorAll(".card_box");

for (let i = 0; i < category.length; i++){
    category[i].addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === 'turn_around_button') {
            let img = document.querySelectorAll(".card");
            img[i].style.transform = 'rotateY(180deg)';
            img[i].style.transition = 'transform .8s cubic-bezier(.6, 0, .2, 1)';
        } else {
            console.log(e);
            e.path.forEach((elem) => {
                console.log(elem);
                if (elem.id && elem.id !== 'categories') {
                    openCategory(elem.id)
                }
            });
        }
    });
}

let menuItems = document.querySelectorAll(".toggle");

for (let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", (e) => {
        e.preventDefault();
        e.path.forEach((elem) => {
            if (elem.id && elem.id !== 'nav') {
                openCategory(elem.id)
            }
        });
    });
}

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
        })
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
        let n = document.querySelector('.game_letters');

        n.classList.toggle('switch_off');
    });
};

switchMode();