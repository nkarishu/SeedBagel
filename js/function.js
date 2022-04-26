$(function () {

    // ハンバーガーメニューボタン
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotate-top');
        $('#btn__middle').toggleClass('hide-middle');
        $('#btn__bottom').toggleClass('rotate-bottom');
        $('#gnav').toggleClass('gnav-active');
        $('#gnav__nav').toggleClass('gnav__nav-active');
    });
    $('#gnav').on('click', function () {
        $('#gnav').removeClass('gnav-active');
        $('#gnav__nav').removeClass('gnav__nav-active');
        $('#btn__top').removeClass('rotate-top');
        $('#btn__middle').removeClass('hide-middle');
        $('#btn__bottom').removeClass('rotate-bottom');
    });

    //fadein
    $(window).scroll(function () {
        $('.fadein').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

    // /アコーディオンをクリックした時の動作
    $('.footer__ttl').on('click', function () { //タイトル要素をクリックしたら
        const findElm = $(this).next(".footer__txt2"); //直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle(); //アコーディオンの上下動作

        if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
            $(this).removeClass('close'); //クラス名を除去し
        } else { //それ以外は
            $(this).addClass('close'); //クラス名closeを付与
        }
    });

    // /アコーディオンをクリックした時の動作
    // $('.footer__ttl').on('click', function () { //タイトル要素をクリックしたら
    //     const height = $(".footer__txt2").height();
    //     const footer = $(".footer").height();
    //     // console.log(footer);
    //     if(height > 0){
    //         $('.footer').css('height',footer+height+'px');
    //         $('main').css('padding-bottom',footer+height+'px');
    //     } 
    // });
    

});