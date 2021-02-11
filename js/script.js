// ========== imports ==========
import './default.js';

// ========== DOM references ==========
const header = document.querySelector('header');

// ========== global variables ==========


// ========== script ==========
// Detect scroll and apply background to the header(or navbar)
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        header.classList.add('header--active');
    } else {
        header.classList.remove('header--active');
    };
});

