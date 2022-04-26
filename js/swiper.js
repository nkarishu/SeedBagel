$(function () {

    const swiper1 = new Swiper('.swiper1', {
        // slidesPerView: 1,
        // breakpoints: {
        //     1024: {
        //         slidesPerView: 3,
        //     },
        // },

        freeMode: {
            enabled: true,
            sticky: true,
        },

        navigation: {
            nextEl: '.swiper1-button-next',
            prevEl: '.swiper1-button-prev',
        },

        pagination: {
            el: '.swiper1-pagination',
            type: 'bullets',
            clickable: true,
            bulletActiveClass: 'swiper1-pagination-bullet-active'
        },
    })

    const swiper2 = new Swiper('.swiper2', {
        freeMode: {
            enabled: true,
            sticky: true,
        },

        navigation: {
            nextEl: '.swiper2-button-next',
            prevEl: '.swiper2-button-prev',
        },

        pagination: {
            el: '.swiper2-pagination',
            type: 'bullets',
            clickable: true,
            bulletActiveClass: 'swiper2-pagination-bullet-active'
        },
    })

})