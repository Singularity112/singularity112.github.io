var color = '#49BF73';

$('.nav-item').on('mouseover', function () {
    $(this).css({'color': color});
});

$('.nav-item').on('mouseleave', function () {
    $(this).css({'color': 'white'});
});

$('.color').on('click', function () {
   var c = $(this).find('.c-item').html();
   color = c;
    changeColors();
});

function changeColors() {
    $('.icon-24').css({'color' : color});
    $('.logo-btn').css({'border' : '2px solid '+color});
}

$(document).scroll(function () {
    s_top = $("body").scrollTop();
    yes = $("#skills").offset().top;
    if(s_top > yes){
        $('#nav').addClass('nav-scrolled');
    }
    else{
        $('#nav').removeClass('nav-scrolled')
    }
});