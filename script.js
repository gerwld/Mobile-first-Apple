//mob menu

let mobMenuBtn = document.getElementById("mob_menu1");
let mobMenuBtn2 = document.getElementById("mob_menu2");
let mobileMenu = document.querySelector('.header_block1');
let downlMenu = document.querySelector('.header_block2');
let pageBody = document.querySelector('body');

function toggleClass(elem, className, noScroll) {
    elem.classList.toggle(className);
    if(noScroll) {
        pageBody.classList.toggle('no-scroll');
    }
}

function toggleMenu(elem) {
    document.querySelector(elem).classList.toggle('fms_open');
}