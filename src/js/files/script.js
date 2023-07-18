//  Burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.icon-menu');
    const menu = document.querySelector('.menu__list');
    const registerButton = document.querySelector('.menu__button');

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

// Fixed header
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


// Testimonials
const comment = document.getElementsByClassName("comment");
const userComment = document.getElementsByClassName("user");
let showComment = () => {
    for (let i = 0; i < comment.length; i += 1) {
        //comment[i].style.display = "none";
        comment[i].style.position = "absolute";
        comment[i].style.opacity = "0";
        comment[i].style.transform = "translateY(50px)";
        userComment[i].className = userComment[i].className.replace(" active", "")
    }

    comment[commentIndex - 1].style.position = "relative";
    comment[commentIndex - 1].style.opacity = "1";
    comment[commentIndex - 1].style.transform = "translateY(-50px)";
    userComment[commentIndex - 1].className += " active";
}

let commentIndex = 1;
showComment();

window.currentComment = (n) => {
    commentIndex = n;
    showComment();
}


// Accordion
const acc = document.getElementsByClassName("accordion__title");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.height) {
            panel.style.height = null;
        } else {
            panel.style.height = panel.scrollHeight + "px";
        }
    });
}

