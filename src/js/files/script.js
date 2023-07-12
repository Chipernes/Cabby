document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.icon-menu');
    const menu = document.querySelector('.menu__list');
    const registerButton = document.querySelector('.header__button');

    burger.addEventListener('click', (event) => {
        burger.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
        registerButton.classList.toggle('menu-open');
    });


    document.addEventListener( 'click', (e) => {
        const headerContainer= document.querySelector('.header__container');
        const withinBoundaries = e.composedPath().includes(headerContainer);

        if ( ! withinBoundaries ) {
            burger.classList.remove('menu-open');
            menu.classList.remove('menu-open');
            registerButton.classList.remove('menu-open');
        }
    })
});

window.addEventListener('scroll', () => {
    const header= document.querySelector('.header');
    const headerHeight = header.offsetTop;
    const scrollPos = window.scrollY;

    if (scrollPos > headerHeight) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});


