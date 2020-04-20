$(document).ready(function () {

    var mySwiper = new Swiper ('.main-slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 500,
        autoplay: {
            delay: 4000,
        },
    })

});
