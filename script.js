// -----------    Hamburger Menu    -----------------
const btn = document.getElementById('menu-btn');
const hamburgerLines = document.querySelectorAll('.hamburger > div');
const mobileMenu = document.getElementById('mobile-menu');

let buttonClicks = 0;

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');

    
    buttonClicks++;
    
    mobileMenu.classList.toggle('show');
}

// -----------    Scroll down button    -----------------
const nextSection = document.getElementById('next-section');

const scrollSvg = document.querySelector('.next-section-scroll');

scrollSvg.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

//-----------    Scroll Page    -----------------

document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;

    if(scrollPos > 159) {
        nextSection.style.opacity = '1';
        nextSection.style.transform = 'translateY(0px)';
    }

}

console.log('a');

// -----------    Carousel-slider   -----------------

    $('.owl-carousel').owlCarousel({
        loop: true,
        // nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000
        // autoplayHoverPause: true,
        // animateOut: 'fadeOut',
        // center: true,
        // margin: 12,
        // responsive: {
        //     0: {
        //         nav: false
        //     },

        //     575: {
        //         margin: 10
        //     },

        //     1200: {
        //         nav: true
        //     }
        // }
    });
