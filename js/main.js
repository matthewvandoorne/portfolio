// Navigation toggle

let menuToggle = document.querySelector('.hamburger');
let menuState = document.getElementById('HamburgerState');
let body = document.querySelector('body');
let html = document.querySelector('html');

menuToggle.addEventListener('click', function() {
    menuState.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (menuState.checked) {
        html.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
    } else {
        html.style.overflowY = 'auto';
        body.style.overflowY = 'auto';
    }
});