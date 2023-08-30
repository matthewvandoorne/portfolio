// Navigation toggle

let menuToggle = document.querySelector('.hamburger');
let menuState = document.getElementById('HamburgerState');
let body = document.querySelector('body');

menuToggle.addEventListener('click', function() {
    menuState.click();

    if (menuState.checked) {
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'auto';
    }
});