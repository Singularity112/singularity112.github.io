$(function () {
   var sliders = document.getElementsByClassName('img-slider');

   for (var i = 0; i < sliders.length; i++){
        var imgs = $(sliders[i]).find('img');
        if (imgs.length < 1){ return; }

        for (var o = 1; o < imgs.length; o++){
            $(imgs[o]).addClass('hide');
        }

       $(imgs[0]).addClass('show');
   }

   $('.next').on('click', function () {
       var imgs = $(this).parent().parent().find('img');
       var current;

       for (var i = 0; i < imgs.length; i++){
            if ($(imgs[i]).hasClass('show')){
                current = i;
                break;
            }
       }

       $(imgs[current]).removeClass('show').addClass('hide', 1000);
       if (current == imgs.length - 1){
           current = 0;
       }
       else{
           current++;
       }

       $(imgs[current]).removeClass('hide').addClass('show');

       $(this).parent().find('.counter').html(current+1);
   });

    $('.back').on('click', function () {
        var imgs = $(this).parent().parent().find('img');
        var current;

        for (var i = 0; i < imgs.length; i++){
            if ($(imgs[i]).hasClass('show')){
                current = i;
                break;
            }
        }

        $(imgs[current]).removeClass('show').addClass('hide');
        if (current < 1){
            current = $(imgs).length - 1;
        }
        else{
            current--;
        }

        $(imgs[current]).removeClass('hide').addClass('show');

        $(this).parent().find('.counter').html(current+1);
    })
});
