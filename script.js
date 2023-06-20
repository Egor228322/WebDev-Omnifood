const btnMenu = document.querySelector('.btn-mobile-nav');
const btnFullHero = document.querySelector('.btn--full');
const btnEmptyHero = document.querySelector('.btn--outline');
const mainNav = document.querySelector('.main-nav');
const secHero = document.querySelector('.section-hero')
const cta = document.querySelector('.section-cta');
const steps = document.querySelector('.section-how');
const nav = document.querySelector('.header-nav');
//Setting the current year for copyright

const copyYear = document.querySelector('.year');
const year = new Date().getFullYear();
copyYear.textContent = year;

//Add functionality to the mobile navigation

btnMenu.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('nav-open');
})

//Smooth Scrolling Animation



//Implementing sticky navigation

const addSticky = function(entries) {
    const [entry] = entries;
    console.log(entry);
    
    if (entry.isIntersecting) {
        nav.classList.remove('sticky');
    }
    else if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    }

}

const observer = new IntersectionObserver(addSticky, {
    root: null,
    threshold: 0.3,
})

observer.observe(secHero);