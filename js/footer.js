function footer(){
    $.ajax({
        url: '../footer.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    });
}