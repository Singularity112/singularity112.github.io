$(document).ready(function () {
    $('.up_damage').on('click', function () {
        var d = $(this).find('.up_d').text();
        var c = $(this).find('.up_c').text();
        var l = $(this).find('.up_l').text();

        if (l < 1){
            return;
        }
        if (money > c-1){
            money -= c;
            damage += parseInt(d);
            if (l-1 == 0){
                $(this).fadeOut('fast');
            }
            $(this).find('.up_l').text(l-1);
            updateStat();
        }
    });
});