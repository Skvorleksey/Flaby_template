(() => {
    const loginButton = document.querySelector('.login');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close_button');

    const menuButton = document.querySelector('.menu_icon');
    const menu = document.querySelector('.menu');

    const buttonLeft = document.querySelector('.customers_say__button_left');
    const buttonRight = document.querySelector('.customers_say__button_right');

    const cardWindow = document.querySelector('.customers_say__cards');
    const cardBox = document.querySelector('.customers_say__card_box');
    const cardsAmount = document.querySelectorAll('.customers_say__main_card').length;
    let scrollsAmount = 0;
    let scroll = 0;

    loginButton.addEventListener('click', () => {
        modal.classList.toggle('modal-active');
        modal.classList.toggle('modal-hidden');
        menu.classList.remove('menu-expanded');

    });

    closeModal.addEventListener('click', () => {
        modal.classList.toggle('modal-hidden');
        modal.classList.toggle('modal-active');
    });

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu-closed');
        menu.classList.toggle('menu-expanded');
    });

    buttonLeft.addEventListener('click', () => {
        if (scrollsAmount != 0){
            scroll += cardWindow.clientWidth;
            cardBox.style.transform = `translateX(${scroll}px)`;
            scrollsAmount -= 1;
        }
    });

    buttonRight.addEventListener('click', () => {
        if (scrollsAmount != cardsAmount - 1){
            scroll -= cardWindow.clientWidth;
            cardBox.style.transform = `translateX(${scroll}px)`;
            scrollsAmount += 1;
        }
    });
})();
