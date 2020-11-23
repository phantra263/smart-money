const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.menu__nav');
    const nav__link = document.querySelectorAll('.menu__nav li');

    icon.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav__active');
        // animate nav
        nav__link.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
        });
        //icon animate
        icon.classList.toggle('toggle');
    });
}
navSlide();