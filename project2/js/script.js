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
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
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
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1.5,
                }
            }
        });
    }
        
}
//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});



/*Back to top Button*/
var toTopBut = document.getElementById('topButton');

window.onscroll = function() {showTopBut(), navShrink()};

function showTopBut(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        toTopBut.style.display = "block";
    }else {
        toTopBut.style.display = "none";
    }
}
$("#topButton").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


function navShrink() {
    let navBar = document.getElementById("nav"),
        navMenu = document.getElementById('nav-menu'),
        navLogo = document.getElementById('nav-logo');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        navBar.style.height = "var(--normal-header-height)";
        navMenu.style.top = "var(--normal-header-height)";
        navLogo.style.transform = "scale(1)";
    } else {
        navBar.style.height = "var(--abnormal-header-height)";
        navMenu.style.top = "var(--abnormal-header-height)";
        navLogo.style.transform = "scale(1.5)";
    }
}