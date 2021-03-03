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