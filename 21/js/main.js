/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId, navbg) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    navBack = document.getElementById(navbg)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            toggle.classList.toggle('clicked-toggle')
            navBack.classList.toggle('show')
            document.body.classList.toggle('scroll-off')
        })
    }
}
showMenu('nav-toggle','nav-menu','nav-back')


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Turn on scrooling
    document.body.classList.remove('scroll-off')
    
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

    // Remove NAV toggle button
    const navToggle = document.getElementById('nav-toggle')
    navToggle.classList.remove('clicked-toggle')

    // Remove Nav back
    const navBack = document.getElementById('nav-back')
    navBack.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}