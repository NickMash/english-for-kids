export const moves3d = () => {
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