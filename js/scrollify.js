$(function () {

    const windowWidth = $(window).width();
    if (windowWidth > 1024) {
        $.scrollify({
            section: '.scrollify', //対象要素を指定
            easing: 'swing', // イージングを指定
            updateHash: false, // スクロール時アドレスバーのURLを更新
            scrollbars: true,
            overflowScroll: true,
            interstitialSection: "footer",
        });
    } else {
        $.scrollify({
            section: ".not-existing-class"
        });
    }

});