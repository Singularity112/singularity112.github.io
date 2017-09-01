function createMonster() {
    updateStat();
    var colors = ['#f44336','#45b475','#3f31c8','#c8c131','#9c27b0']; // red, green, blue, yellow, purple
    var forms = ['20px','100%']; // squad, round

    var colors_name = ['Красный', 'Зеленый', 'Синий', 'Желтый', ' Фиолетовый'];
    var forms_name = ['квадрат', 'круг'];

    var c = getRandomInt(0, colors.length-1);
    var f = getRandomInt(0, forms_name.length-1);

    $('#monster_form').text(forms_name[f]);
    $('#monster_color').text(colors_name[c]).css({'color': colors[c]});


    if (level < 31){
        health_modifier = 5*(trophy + 1);
        max_added_health = 3*(trophy+1);
    }
    else if (level > 30 && level < 71){
        health_modifier = 15 *(trophy+1);
        max_added_health = 30 *(trophy+1);
    }
    else if (level > 70 && level < 251){
        health_modifier = 35 *(trophy+1);
        max_added_health = 200 *(trophy+1);
    }
    else if (level > 250 && level < 501){
        health_modifier = 200 *(trophy+1);
        max_added_health = 10000 *(trophy+1);
    }
    else if ( level > 500 && level < 1000){
        health_modifier = 400 *(trophy+1);
        max_added_health = 20000;
    }
    else if ( level > 999){
        health_modifier = 500 *(trophy+1);
        max_added_health = 40000;
    }

    max_health = (level*health_modifier) + getRandomInt(0,max_added_health);

    if (level > 600){
        $('#trophy').css({'display' : 'block'});
    }

    monster_max_health = max_health
    monster_current_health = max_health;

    $('#monster').css({'background' : colors[c], 'border-radius' : forms[f]});
    $('#max_health').text(max_health);
    $('#current_health').text(max_health);
    $('#health_bar').css({'width': '100%', 'background': colors[c]});
}

function takeDamage() {
    monster_current_health -= damage*factor;

    if (monster_current_health < 1){
        nextLevel();
        return;
    }

    $('#current_health').text(monster_current_health);
    $('#health_bar').css({'width': (monster_current_health/monster_max_health)*100 + '%'});
}

