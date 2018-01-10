new WOW().init();

var nav = document.getElementById('nav');

function toggle() {
    var display = window.getComputedStyle(nav).getPropertyValue('display');

    if (display == 'flex'){
        nav.style.display = 'none';
    }
    else{
        nav.style.display = 'flex';
    }
}