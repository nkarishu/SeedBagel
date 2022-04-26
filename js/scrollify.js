$(function () {
    $.scrollify({
        section: '.scrollify', //対象要素を指定
        easing: 'swing', // イージングを指定
        updateHash: false, // スクロール時アドレスバーのURLを更新
        scrollbars: true,
        overflowScroll: true,
        interstitialSection : "footer",
    })
});