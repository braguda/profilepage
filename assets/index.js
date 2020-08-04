$(document).ready(() => {
    const menuBtn = $('.menu-btn');
    const hamburger = $('.menu-btn__burger');
    const nav= $('.nav');
    const menuNav = $('.menu-nav');
    const navItems = document.querySelectorAll('.menu-nav__item');
    let showMenu = false;

    menuBtn.on('click', toggleMenu);

    function toggleMenu() {
        if(!showMenu) {
            hamburger.addClass('open');
            nav.addClass('open');
            menuNav.addClass('open');
            navItems.forEach(item => item.classList.add('open'));
            showMenu = true;
        } else{
            hamburger.removeClass('open');
            nav.removeClass('open');
            menuNav.removeClass('open');
            navItems.forEach(item => item.classList.remove('open'));
            showMenu = false;
        }
    }

});