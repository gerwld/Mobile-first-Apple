//mob menu

let mobMenuBtn = document.getElementById("mob_menu1");
let mobileMenu = document.querySelector('.header_block1');

function toggleClass(elem, className) {
    elem.classList.toggle(className);
}

mobMenuBtn.onclick = function() {
    toggleClass(mobileMenu, "header1_mb_open");
};