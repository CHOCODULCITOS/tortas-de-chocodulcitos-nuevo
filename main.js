

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('activo');
});
AOS.init();

ScrollReveal().reveal('.cabecera');
ScrollReveal().reveal('.nueva-card',{delay:500});
ScrollReveal().reveal('.cards-banner-once',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});
ScrollReveal().reveal('.cards-banner-3',{delay:500});