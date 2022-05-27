const $ = document;

const mobileNavBtn = $.querySelector(".nav__btn")
const mobileNavMneu = $.querySelector(".nav--menu")

let navIsOpen = false;

function navBtnControl(){
    if (navIsOpen) {
        mobileNavBtn.classList.remove("nav__btn--open")
        mobileNavMneu.classList.remove("nav--menu--open")
        mobileNavMneu.style.opacity = "0%"
        navIsOpen = false;
    } else {
        mobileNavBtn.classList.add("nav__btn--open")
        mobileNavMneu.classList.add("nav--menu--open")
        mobileNavMneu.style.opacity = "100%"
        navIsOpen = true;
        
    }
}



mobileNavBtn.addEventListener("click", navBtnControl)