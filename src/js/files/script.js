//  Burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.icon-menu');
    const menu = document.querySelector('.menu__list');
    const registerButton = document.querySelector('.menu__button');

    burger.addEventListener('click', () => {
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
        comment[i].style.position = "absolute";
        comment[i].style.opacity = "0";
        comment[i].style.transform = "translateY(50px)";
        userComment[i].className = userComment[i].className.replace(" active", "");
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


// How it works
const swipeLeftBtn = document.querySelector(".working__swipe-left");
const swipeRightBtn = document.querySelector(".working__swipe-right");
const phoneSlider = document.querySelector(".working__slider");
const countOfPhones = document.getElementsByClassName("working__phone");
const swipeLeftArrow = document.getElementById("swipeLeftArrow");
const swipeRightArrow = document.getElementById("swipeRightArrow");
const swipeLines = document.getElementsByClassName("working__lines");
const swipeText = document.getElementsByClassName("working__item");
const swipeNumber = document.querySelector(".working__number");

let swipeIndex = 0;

swipeLines[swipeIndex].addEventListener("click", () => {

})
swipeLeftBtn.addEventListener("click", () => {
    swipeIndex -= 1;
    if (swipeIndex < 0) {
        swipeIndex += 1;
        return;
    }

    movePhoneLeft();
    buttonTimeout(swipeLeftBtn);
    arrowFilling(swipeLeftArrow, swipeRightArrow);
    setSwipeLine(swipeIndex);
    showSwipeText();
    moveNumberUp();
});

swipeRightBtn.addEventListener("click", () => {
    swipeIndex += 1;

    if (swipeIndex >= countOfPhones.length) {
        swipeIndex -= 1;
        return;
    }

    movePhoneRight();
    buttonTimeout(swipeRightBtn);
    arrowFilling(swipeLeftArrow, swipeRightArrow);
    setSwipeLine(swipeIndex);
    showSwipeText();
    moveNumberDown();
});

let arrowFilling = (leftArrow, rightArrow) => {
    if (swipeIndex === 0) {
        leftArrow.style.opacity = "0.4";
        swipeLeftBtn.classList.remove("active");
    } else {
        leftArrow.style.opacity = "1";
        swipeLeftBtn.classList.add("active");
    }

    if (swipeIndex === countOfPhones.length - 1) {
        rightArrow.style.opacity = "0.4";
        swipeRightBtn.classList.remove("active");
    } else {
        rightArrow.style.opacity = "1";
        swipeRightBtn.classList.add("active");
    }
}

let movePhoneLeft = () => {
    phoneSlider.style.left = phoneSlider.offsetLeft + 265 + "px";
}
let movePhoneRight = () => {
    phoneSlider.style.left = phoneSlider.offsetLeft - 265 + "px";
}

let buttonTimeout = (button) => {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, 500);
}

let setSwipeLine = (index) => {
    for (let i = 0; i < swipeLines.length; i += 1) {
        swipeLines[i].className = swipeLines[i].className.replace(" active", "");
    }
    swipeLines[index].classList.toggle("active");
}


let showSwipeText = () => {
    for (let i = 0; i < swipeText.length; i += 1) {
        swipeText[i].style.position = "absolute";
        swipeText[i].style.opacity = "0";
        swipeText[i].style.transform = "translateX(-30px)";
    }

    swipeText[swipeIndex].style.position = "relative";
    swipeText[swipeIndex ].style.opacity = "1";
    swipeText[swipeIndex].style.transform = "translateX(30px)";
}

showSwipeText();

let moveNumberUp = () => {
    swipeNumber.style.top = swipeNumber.offsetTop + 308 + "px";
}
let moveNumberDown = () => {
    swipeNumber.style.top = swipeNumber.offsetTop - 308 + "px";
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

