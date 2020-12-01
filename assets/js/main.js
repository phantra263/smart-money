$(document).ready(function() {
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
    $('.slick-book').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots:true,
        arrows: false,
    });
    $('.slick-book-prev').click(function(){
        $('.slick-book').slick("slickPrev");
      })
       
    $('.slick-book-next').click(function(){
        $('.slick-book').slick("slickNext");
    })
});