var input = $('.main_input');
var grid = $('#grid');
var res = $('#result');

$('.btn').on('click', function () {

   var val = $(input).val();

   if (val == ''){
        $(input).addClass('red');
        return;
   }

   removeGrid();
   createGrid(val);

   $(res).empty();
   result(val);

});


function createGrid(val) {
    for (var i = 0; i < val.length; i++){
        $(grid).append('<div class = "grid_item">' + val[i] + '</div>');
    }
}

function result(val) {

    var duplicates = [];
    var hz = false;

    for (var i = 0; i < val.length; i++){

        for (var j = 0; j < duplicates.length; j++){
            if (val[i] == duplicates[j]){
                $(res).append(again[getRandomInt(0,again.length-1)] + ' ');
                break;
            }
        }

        duplicates += val[i];

        if (letters[val[i]] == undefined){
            if (hz){
                $(res).append(again[getRandomInt(0,again.length-1)] + ' ');
            }
            $(res).append('какая-то непонятная фигня, ');
            hz = true;
        }
        else{
            $(res).append(letters[val[i]] + ', ');
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var letters = {};

letters['a'] = 'обычная А';
letters['b'] = 'ВЭ';
letters['c'] = 'ЭС';
letters['d'] = 'как мягкий знак, только в другую сторону';
letters['e'] = 'ЙЕ';
letters['f'] = 'краник с черточкой посредине';
letters['g'] = 'как прописная ДЭ, вот с хвостиком снизу такая';
letters['h'] = 'на нашу, русскую, ЭН похожа';
letters['i'] = 'как украинская и с точечкой';
letters['j'] = 'крючечек такой с точечкой сверху';
letters['k'] = 'обычная ка';
letters['l'] = 'как и украинская только без точки';
letters['m'] = 'ЭМ, похожа на перевернутую ША';
letters['n'] = 'наша, РУССКАЯ, И только в другую сторону';
letters['o'] = 'о';
letters['p'] = 'буква ррр';
letters['q'] = 'о с пузиком и с хвостиком';
letters['r'] = 'я в другую сторону';
letters['s'] = 'змейка такая';
letters['t'] = 'крючечек с черточкой посредине';
letters['u'] = 'похожа, на русскую и прописную';
letters['v'] = 'такая типа галочка';
letters['w'] = 'что-то типа перевернутой ЭМ';
letters['x'] = 'ХЫ';
letters['y'] = 'русская у';
letters['z'] = 'зигзагом такая буква, не знаю';
letters['.'] = 'точка';
letters['@'] = 'а в таком кружочке';
letters['-'] = 'тирЭ';
letters['_'] = 'снизу линия';
letters['1'] = 'один';
letters['2'] = 'два';
letters['3'] = 'три';
letters['4'] = 'четыре';
letters['5'] = 'пять';
letters['6'] = 'шесть';
letters['7'] = 'семь';
letters['8'] = 'восемь';
letters['9'] = 'девять';

var again = ['снова', 'опять', 'еще', 'еще раз', 'вновь'];

function removeGrid() {
    $(grid).empty();
}

$(input).on('click', function () {
    $(this).removeClass('red');
});