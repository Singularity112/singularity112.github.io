$(document).ready( function () {
    createGame();

    $('#monster').on('click',function () {
        takeDamage();
    });
});

function takeDamage() {
    monster_current_health -= damage;

    if (monster_current_health < 1){
        nextLevel();
        return;
    }

    $('#current_health').text(monster_current_health);
    $('#health_bar').css({'width': (monster_current_health/monster_max_health)*100 + '%'});
}

function nextLevel() {
    level++;
    createMonster();
}

// Monster stat
var monster;
var monster_name;
var monster_current_health;
var monster_max_health;

// Player stat
var level = 1;
var gold = 0;
var damage = 1;

function createGame(){
    createMonster();
}

function createMonster() {
    var colors = ['#f44336','#45b475','#3f31c8','#c8c131','#9c27b0']; // red, green, blue, yellow, purple
    var forms = ['20px','100%']; // squad, round

    var colors_name = ['Красный', 'Зеленый', 'Синий', 'Желтый', ' Фиолетовый'];
    var forms_name = ['квадрат', 'круг'];

    var c = getRandomInt(0, colors.length-1);
    var f = getRandomInt(0, forms_name.length-1);

    $('#monster_form').text(forms_name[f]);
    $('#monster_color').text(colors_name[c]).css({'color': colors[c]});

    max_health = level*5;

    monster_max_health = max_health
    monster_current_health = max_health;

    $('#monster').css({'background' : colors[c], 'border-radius' : forms[f]});
    $('#max_health').text(max_health);
    $('#current_health').text(max_health);
    $('#monster_level').text(level);
    $('#health_bar').css({'width': '100%', 'background': colors[c]});
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}