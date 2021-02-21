// ========== imports ==========
import './default.js';

// ========== DOM references ==========
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const menuIcn = document.querySelector('.menu-icn');
const nav = document.querySelector('.nav');
const aboutWho = document.querySelector('.about-who');
const whoImg = document.querySelector('.who-img');
const partnersContainer = document.querySelector('.partners-container');
const galleryContainer = document.querySelector('.gallery-container');
const animation_1 = document.querySelector('.animation-1');
const animation_1_container = document.querySelector('.animation-1-container');
const animation_1_img = document.querySelector('.animation-1-img');

// ========== global variables ==========


// ========== script ==========
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

    // Parallax background img (about-who section)
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > aboutWho.offsetTop - window.innerHeight && window.pageYOffset < aboutWho.offsetTop + aboutWho.scrollHeight) {
            const scroll = window.pageYOffset;
            const startPosition = aboutWho.offsetTop - window.innerHeight;
            const endPosition = aboutWho.offsetTop + aboutWho.scrollHeight;
            const scrollRatio = (scroll - startPosition) / (endPosition - startPosition) * 100;
            const reverseScrollRatio = 100 - scrollRatio;

            whoImg.style.objectPosition = `50% ${reverseScrollRatio}%`;
        };
    });

    // Load partner logo imgs
    const partnerLogoImgs = [];
    const numOfPartnerLogoImgs = 10;

    for (let i = 0; i < numOfPartnerLogoImgs; i++) {
        const img = new Image();
        img.src = `./img/partners/partner-${i + 1}.png`;
        img.classList.add('partners-img');
        img.setAttribute('alt', 'partner logo image');
        partnerLogoImgs.push(img);
    };

    partnerLogoImgs.forEach(partnerLogoImg => {
        const partnersItem = document.createElement('div');
        partnersItem.appendChild(partnerLogoImg);
        partnersItem.classList.add('partners-item');
        partnersContainer.appendChild(partnersItem);
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
        // section 1
        if (window.pageYOffset > animation_1.offsetTop - window.innerHeight && window.pageYOffset < animation_1.offsetTop) {
            const scroll = window.pageYOffset;
            const startPosition = animation_1.offsetTop - window.innerHeight;
            const endPosition = animation_1.offsetTop;
            const scrollRatio = (scroll - startPosition) / (endPosition - startPosition) * 100;
            animation_1_container.style.top = `${-100 + scrollRatio}vh`;
            animation_1_container.style.height = '100vh';
            animation_1_img.style.height = '100vh';
        };
    });
};
main();