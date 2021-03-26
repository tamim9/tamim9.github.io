

function navFunc() {
    var navBar = document.getElementById('navbar');

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navBar.style.background = "rgba(244,81,30,0.9)";
    }else{
        navBar.style.background = 'transparent';
    }
}
window.addEventListener('scroll', navFunc);
