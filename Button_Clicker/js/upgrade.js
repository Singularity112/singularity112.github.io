$(document).ready(function () {

    // Немного быдлокода с оправданием, что для каждого отдельного итема будет что-нибудь другое

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

    $('.up_forward').on('click', function () {
        var f = $(this).find('.up_f').text();
        var c = $(this).find('.up_c').text();
        var l = $(this).find('.up_l').text();

        if (l < 1){
            return;
        }
        if (money > c-1){
            money -= c;
            factor += parseInt(f);
            if (l-1 == 0){
                $(this).fadeOut('fast');
            }
            $(this).find('.up_l').text(l-1);
            updateStat();
        }
    });

    okay = false;
    $('#trophy').on('click', function () {
        $('#dialog').css({'display': 'flex'});
    });

    $('#dialog_no').on('click',function () {
        okay = false;
        $('#dialog').css({'display': 'none'});
    });

    $('#dialog_yes').on('click', function () {
        okay = true;
        $('#dialog').css({'display': 'none'});
        factor++;
        level = 1;
        damage = 1;
        money = 0;
        trophy++;

        for (var i = 0; i < upgrades.length; i++){
            $(upgrades[i]).find('.up_l').text(upgrades_lifes[i]);
        }

        $('.upgrade_item').fadeIn();

        createMonster();
        updateStat();
    });
});