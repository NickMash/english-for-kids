import "./style.scss";

let menuItems = document.querySelectorAll('.nav_menu_item');
let navigationContainer = document.getElementById('navigation__container');

let deleteUnderline = () => {
    menuItems.forEach(function(item){
        item.classList.remove('toggle_underline');
    });
};

navigationContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains('nav_menu_item')) {
        deleteUnderline();
        e.target.classList.add('toggle_underline');
    }
});

