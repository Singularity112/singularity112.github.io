$(document).ready(function () {
    $('.portf-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: $('.nextArrow'),
        prevArrow: $('.prevArrow')
    });

    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $(document).scroll(function () {
        s_top = $("body").scrollTop();
        yes = $("#services").offset().top;
        if(s_top > yes - 50){
            $('nav').addClass('dark-navbar');
        }
        else {
            $('nav').removeClass('dark-navbar');
        }

    });

    $('.loading').hide();
});