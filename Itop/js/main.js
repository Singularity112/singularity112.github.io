$('.header-border').liveBorder({
    top: true,
    bottom: true,
    left: true,
    right: true
});

$('.contact-cont').liveBorder({
    top: true,
    bottom: true,
    left: true,
    right: true
});

$(".work-item").on('mouseenter',function() {
    $(this).find('.fa').addClass('work-item-big').delay(400).queue(function(){
        $(this).removeClass('work-item-big').dequeue();
    });
});

$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    infinite: true,
    prevArrow: $('.slider-back'),
    nextArrow: $('.slider-next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false
            }
        }]
});

$('.contact-btn').on('click', function () {
   $('#modal').css({'display': 'flex'}).hide().fadeIn();
});

$('#modal').on('click', function (e) {
   if ($(e.target).hasClass('modal')){
       $('#modal').fadeOut();
   }
});

$('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});

$(document).scroll(function () {
    scrolled = $(document).scrollTop();
    about = $("#about").offset().top;
    if(scrolled > about - 100){
        $('nav').addClass('dark-nav');
        $('.hamburger').addClass('dark-hamburger');
    }
    else{
        $('nav').removeClass('dark-nav');
        $('.hamburger').removeClass('dark-hamburger');
    }
});

$('.hamburger').on('click', function () {
    var nav = $('nav');
    $(nav).animate({width: 'toggle'}, 200);
    $(nav).toggleClass('active-nav');
    if ($(nav).hasClass('active-nav')){
        $(this).removeClass('dark-hamburger');
    } else{
        scrolled = $(document).scrollTop();
        about = $("#about").offset().top;
        if( scrolled > about - 100){
            $(this).addClass('dark-hamburger');
        }
    }
});

$('.nav-item a').on('click', function () {
   if ($('nav').hasClass('active-nav')){
       $('nav').animate({width: 'toggle'}, 200);
       $('nav').toggleClass('active-nav');
   }
});
