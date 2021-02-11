// ========== imports ==========
import './default.js';

// ========== DOM references ==========
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const menuIcn = document.querySelector('.menu-icn');
const nav = document.querySelector('.nav');

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

// Menu button
menuBtn.addEventListener('click', (e) => {
    if (menuIcn.classList.contains('fa-bars')) {
        menuIcn.classList.remove('fa-bars');
        menuIcn.classList.add('fa-times');
        nav.classList.add('nav--active');
    } else if (menuIcn.classList.contains('fa-times')) {
        menuIcn.classList.remove('fa-times');
        menuIcn.classList.add('fa-bars');
        nav.classList.remove('nav--active');
    };
});