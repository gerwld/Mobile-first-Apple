//mob menu

let mobMenuBtn = document.getElementById("mob_menu1");
let mobMenuBtn2 = document.getElementById("mob_menu2");
let mobileMenu = document.querySelector('.header_block1');
let downlMenu = document.querySelector('.header_block2');

function toggleClass(elem, className) {
    elem.classList.toggle(className);
}

function toggleMenu(elem) {
    document.querySelector(elem).classList.toggle('fms_open');
}