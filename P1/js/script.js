const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
showMenu('nav-toggle','nav-toggle')
showMenu('nav_sub-list-toggle','nav_sub-list')
showMenu('nav_sub-list-toggle','nav_toggle-arrow')


/*active and remove menu*/
const navLink = document.querySelectorAll('.nav__item')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))