const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

for(const element of toggle){
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

for(const link of links){
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
}

/*Mudar o header no scroll*/
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', e => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})

/**Swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true    
});