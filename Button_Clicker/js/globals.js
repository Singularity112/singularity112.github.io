// Monster stat
var monster_name;
var monster_current_health;
var monster_max_health;

// Player stat
var level = 1;
var money = 0;
var damage = 1;
var factor = 1;
var trophy = 0;
var health_modifier = 5;
max_added_health = 3;
var upgrades;
var upgrades_lifes = [];

function startParameters(){
    upgrades = $('.upgrade_item');

    for (var i = 0; i < upgrades.length; i++){
        upgrades_lifes[i] = $(upgrades[i]).find('.up_l').text();
    }

    console.log(upgrades_lifes);
}


function createGame(){
    createMonster();
    startParameters();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateStat() {
    $('#stat_money').text(money);
    $('#stat_monster').text(level);
    $('#stat_damage').text(damage*factor);
    $('#stat_factor').text(factor);
    $('#stat_trophy').text(trophy);

    var upgradeItems = $('.upgrade_item');

    for (var i = 0; i < upgradeItems.length; i++){
        if ($(upgradeItems[i]).find('.up_c').text() > money ){
            $(upgradeItems[i]).css({'opacity': 0.5});
        }
        else{
            $(upgradeItems[i]).css({'opacity': 1});
        }
    }
}

function nextLevel() {
    level++;
    money+= level * factor;
    createMonster();
}

var opacityBack;
$(document).ready( function () {
    createGame();

    $('#monster').on('click',function (e) {
        clearInterval(opacityBack);
        $(this).css({'opacity' : 0.6});

        opacityBack = setTimeout(function () {
            $('#monster').animate({'opacity' : 1});
        }, 1000);

        takeDamage();
        var d = $('<div></div>').text(damage*factor);
        $(d).addClass('damage');

        var randomX = getRandomInt(-20,10);
        var randomY = getRandomInt(-30,10);

        $(d).css({'top': e.pageY + randomY , 'left' : e.pageX+randomX});
        $('body').append(d);
        $(d).fadeOut(500);

        setTimeout(function () {
            $(d).remove();
        }, 500);
    });

});