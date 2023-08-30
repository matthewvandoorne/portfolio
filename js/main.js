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
        html.style.overflowY = 'unset';
        body.style.overflowY = 'unset';
    }
});

// Back to top button
let backToTopButton = document.getElementById('scrollToTopButton');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    backToTopButton.style.bottom = "20px";
  } else {
    backToTopButton.style.bottom = "-60px";
  }
}

backToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})