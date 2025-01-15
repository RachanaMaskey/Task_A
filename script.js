var swiper=new Swiper(".swiper",{
    direction: "vertical", 
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true 
    },
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholDelta: 70
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        }
    }

});