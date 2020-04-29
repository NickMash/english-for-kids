import {categoriesInfo} from "./constants/categoriesInfo";

export const categoryHelper = {

    createCategories: () => {
        let n = document.querySelector('.for_adding');

        n.insertAdjacentHTML('afterbegin', '<div class="categories cards__container" id="categories" ></div>');

        categoriesInfo.forEach((elem)=> {
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
    },

    clearCategories: () => {
        let previousCategory = document.querySelector('.for_adding');
        previousCategory.innerHTML = ``;
    },
};

