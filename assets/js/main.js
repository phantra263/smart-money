$(document).ready(function() {
    //slick-intro
    $('.slick').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
    });


    //slick-book
    $('.slick-book').slick({
        infinite: true,
        slidesToShow: 4,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.slick-book-prev').click(function() {
        $('.slick-book').slick("slickPrev");
    })

    $('.slick-book-next').click(function() {
            $('.slick-book').slick("slickNext");
        })
        //slick-review
    $('.slick-review').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
    });
    $('.slick-review-prev').click(function() {
        $('.slick-review').slick("slickPrev");
    })

    $('.slick-review-next').click(function() {
            $('.slick-review').slick("slickNext");
        })
        //pause
    var slick_dots = document.getElementsByClassName('slick-dots');
    for (var i = 0; i < slick_dots.length; i++) {
        var li = document.createElement('li');
        $(li).html('<i class="ico-pause fas fa-pause"></i>');
        slick_dots[i].appendChild(li);
    }

    var ico_pause = document.getElementsByClassName('ico-pause');
    $(ico_pause[0]).parent().click(function() {
        if ($(this).html() == '<i class="ico-pause fas fa-pause"></i>') {
            $('.slick').slick('slickPause');
            $(this).html('<i class="ico-pause fas fa-play"></i>');
        } else {
            $('.slick').slick('slickPlay');
            $(this).html('<i class="ico-pause fas fa-pause"></i>')
        }
    });
    $(ico_pause[1]).parent().click(function() {
        if ($(this).html() == '<i class="ico-pause fas fa-pause"></i>') {
            $('.slick-book').slick('slickPause');
            $(this).html('<i class="ico-pause fas fa-play"></i>');
        } else {
            $('.slick-book').slick('slickPlay');
            $(this).html('<i class="ico-pause fas fa-pause"></i>')
        }
    });
    $(ico_pause[2]).parent().click(function() {
        if ($(this).html() == '<i class="ico-pause fas fa-pause"></i>') {
            $('.slick-review').slick('slickPause');
            $(this).html('<i class="ico-pause fas fa-play"></i>');
        } else {
            $('.slick-review').slick('slickPlay');
            $(this).html('<i class="ico-pause fas fa-pause"></i>')
        }
    });
});

//filter-element
filterSelection("view-filter")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
//active-btn
var btnContainer = document.getElementById("order-btn");
var btns = btnContainer.getElementsByClassName("order-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-order");
        current[0].className = current[0].className.replace(" active-order", "");
        this.className += " active-order";
    });
}


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