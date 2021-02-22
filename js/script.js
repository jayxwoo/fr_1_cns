// ========== imports ==========
import './default.js';

// ========== DOM references ==========
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const menuIcn = document.querySelector('.menu-icn');
const nav = document.querySelector('.nav');
const heroCompany = document.querySelector('.hero-company');
const aboutWho = document.querySelector('.about-who');
const whoImg = document.querySelector('.who-img');
const partnersContainer = document.querySelector('.partners-container');
const galleryContainer = document.querySelector('.gallery-container');
const animation_1 = document.querySelector('.animation-1');
const animation_1_container = document.querySelector('.animation-1-container');
const animation_1_img = document.querySelector('.animation-1-img');
const animation_1_text = document.querySelector('.animation-1-text');
const contactInputs = document.querySelectorAll('.contact-input');
const emailInputFeedback = document.querySelector('.email-input-feedback');

// ========== global variables ==========


// ========== script ==========
// main
const main = function () {
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

    // Hero-company text flashing effect
    setInterval(() => {
        if (getComputedStyle(heroCompany).opacity === '1') {
            heroCompany.style.opacity = '0.5';
            heroCompany.style.transform = 'translateY(10%)';
        } else {
            heroCompany.style.opacity = '1';
            heroCompany.style.transform = 'translateY(0)';
        };
    }, 1500);

    // Parallax background img (about-who section)
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > aboutWho.offsetTop - window.innerHeight && window.pageYOffset < aboutWho.offsetTop + aboutWho.scrollHeight) {
            const scroll = window.pageYOffset;
            const startPosition = aboutWho.offsetTop - window.innerHeight;
            const endPosition = aboutWho.offsetTop + aboutWho.scrollHeight;
            const scrollRatio = (scroll - startPosition) / (endPosition - startPosition) * 100;

            whoImg.style.objectPosition = `50% ${100 - scrollRatio}%`;
        };
    });

    // Load gallery imgs
    const galleryImgs = [];
    const numOfGalleryImgs = 10;

    for (let i = 0; i < numOfGalleryImgs; i++) {
        const img = new Image();
        img.src = `./img/gallery/gallery-img-${i + 1}.jpg`;
        img.classList.add('gallery-img');
        img.setAttribute('alt', 'logistics image');
        galleryImgs.push(img);
    };

    galleryImgs.forEach(galleryImg => {
        const galleryItem = document.createElement('figure');
        galleryItem.appendChild(galleryImg);
        galleryItem.classList.add('gallery-item');
        galleryContainer.appendChild(galleryItem);
    });

    // animation-1
    window.addEventListener('scroll', () => {
        // section 0 - before animation
        if (window.pageYOffset < animation_1.offsetTop - window.innerHeight) {
            animation_1_img.style.display = 'none';
        };

        // section 1 - fixed bg
        if (window.pageYOffset > animation_1.offsetTop - window.innerHeight && window.pageYOffset < animation_1.offsetTop) {
            // reinstate
            animation_1_img.style.display = 'block';
            animation_1_container.style.position = 'relative';
            animation_1_container.style.transform = `scale(1)`;
            animation_1_text.style.transform = `scale(1)`;
            animation_1_text.style.color = 'var(--white)';
            animation_1_text.style.textShadow = 'none';

            // calc scrollRatio
            const scroll = window.pageYOffset;
            const startPosition = animation_1.offsetTop - window.innerHeight;
            const endPosition = animation_1.offsetTop;
            const scrollRatio = (scroll - startPosition) / (endPosition - startPosition);

            // animation
            animation_1_img.style.top = `${-100 + (100 * scrollRatio)}vh`;
        };

        // section 2 - scale down
        if (window.pageYOffset > animation_1.offsetTop && window.pageYOffset < animation_1.offsetTop + window.innerHeight) {
            // reinstate
            animation_1_img.style.top = 0;

            // calc scrollRatio
            const scroll = window.pageYOffset;
            const startPosition = animation_1.offsetTop;
            const endPosition = animation_1.offsetTop + window.innerHeight;
            const scrollRatio = (scroll - startPosition) / (endPosition - startPosition);
            animation_1_text.style.display = 'block';

            // animation
            animation_1_container.style.position = 'fixed';
            animation_1_container.style.top = 0;
            animation_1_container.style.transform = `scale(${1 - (0.5 * scrollRatio)})`;
            animation_1_text.style.transform = `scale(${1 + (10 * scrollRatio)})`;
            animation_1_text.style.color = 'transparent';
            animation_1_text.style.textShadow = `0 0 ${1 * scrollRatio}px var(--white)`;
            animation_1_text.style.webkitTextShadow = `0 0 ${1 * scrollRatio}px var(--white)`;
        };

        // section 3 - back to normal
        if (window.pageYOffset > animation_1.offsetTop + window.innerHeight) {
            animation_1_container.style.position = 'relative';
            animation_1_container.style.top = `${window.innerHeight}px`;
            animation_1_text.style.display = 'none';
        };
    });

    // Regex test for email input
    const pattern = {
        email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    };

    const validate = function (value, pattern) {
        let result = pattern.test(value);

        if (result) {
            emailInputFeedback.style.display = 'block';
            emailInputFeedback.textContent = 'valid email';
            emailInputFeedback.style.backgroundColor = 'var(--green)';

            setTimeout(() => {
                emailInputFeedback.style.display = 'none';
            }, 1000);
        } else {
            emailInputFeedback.style.display = 'block';
            emailInputFeedback.textContent = 'invalid email';
            emailInputFeedback.style.backgroundColor = 'var(--red)';
        };
    };

    contactInputs.forEach(input => {
        input.addEventListener('keyup', (e) => {
            if (e.target.value.length > 5) {
                validate(e.target.value, pattern[e.target.name]);
            };
            if (e.target.value.length === 0) {
                emailInputFeedback.style.display = 'none';
            };
        });
    });
};
main();