function activeFunction(toggleId,elementId){
    let toggle = document.getElementById(toggleId),
    elemnt = document.getElementById(elementId);

    if(toggle && elemnt){
        toggle.addEventListener('click', ()=>{
            elemnt.classList.toggle("active");
        })
    }
}
activeFunction('nav-toggle','nav-menu');
activeFunction('nav-toggle','nav-toggle');

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu Mobile*/
    let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click',linkAction));





//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
        
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});