const btnMenu = document.querySelector('.btn-mobile-nav');
const btnFullHero = document.querySelector('.btn--full');
const btnEmptyHero = document.querySelector('.btn--outline');
const mainNav = document.querySelector('.main-nav');
const cta = document.querySelector('.section-cta');
const steps = document.querySelector('.section-how');
const nav = document.querySelector('.header-nav');


btnFullHero.addEventListener('click', function(e) {
    console.log(e.target);
    cta.scrollIntoView({behavior: "smooth"});
})

btnEmptyHero.addEventListener('click', function(e) {
    console.log(e.target);
    steps.scrollIntoView({behavior: "smooth"});
})

const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry); 
}


const observer = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.3
})

observer.observe(steps);