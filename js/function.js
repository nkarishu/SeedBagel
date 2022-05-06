$(function () {

    $('.wrapper').fadeIn(1000); //1秒かけてフェードイン！

    // フッター高さを取得して代入
    $(document).ready(function () {
        footerheight = $('.footer').height(); //フッターの高さを取得
        $(".footer").css("height", footerheight + "px"); //取得したフッターの高さ分#wrapperにpadding-bottomをpxで指定
        $("main").css("margin-bottom", footerheight + "px"); //取得したフッターの高さ分#wrapperにpadding-bottomをpxで指定
console.log(footerheight);
    });

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

    // フッターの詳細表表示
    $('.footer__ttl').on('click', function () { //タイトル要素をクリックしたら
        const findElm = $(this).next(".footer__txt2"); //直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle(); //アコーディオンの上下動作

        if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
            $(this).removeClass('close'); //クラス名を除去し
        } else { //それ以外は
            $(this).addClass('close'); //クラス名closeを付与
        }
    });

});

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});