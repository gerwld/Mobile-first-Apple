// 2-nd header float logic

window.addEventListener('scroll', scrollLoop, false);

function scrollLoop() {
    let secHeader = document.querySelector('.header_block2');
    let windowY = isNaN(window.scrollY) ? 0 : window.scrollY;

    if(windowY > 50) {
        secHeader.classList.add("hebl2_active");
    } else secHeader.classList.remove("hebl2_active");
}