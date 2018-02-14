$("img").hover(function(){
    $(this).animate({top: '0'}, 100);
}, function(){
    $(this).animate({top: '-3px'}, 100);
});