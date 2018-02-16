/*
$('div.columnnav').mouseover(function() {
    $(this).addClass("overlay");
});*/

/* ---Toggle Nav Menu --*/

/*open*/
$('.burger-nav').click(function() {
    $('nav').toggleClass('hide');
    $('.burger-nav').toggleClass('hide');
    $('#logo h1').toggleClass('no-pm');
});


/*close*/
$('.closebutton').click(function() {
    $('nav').toggleClass('hide');
        $('.burger-nav').toggleClass('hide');
          $('#logo h1').toggleClass('no-pm');

});