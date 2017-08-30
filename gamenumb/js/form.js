window.onload = function() {
    document.getElementById('submit').onclick = function() {
        var input = document.getElementById('value');
        if (input.value == crypt()){
            document.getElementById('body').innerHTML = 'gratz you win';
        }
        else{
            alert('no');
        }
    }

    function crypt(){
        var result;
        var a = true;
        var abc = 'abcdefgijklmnopqrstuvwxvz';
        loops:
            for (var i = 0; i < abc.length; i++){
                for (var j = 0; j < abc.length+5; j++){
                    if (j+i*2 == abc.length){
                        result--;
                        if (j*2-5)
                            result *= 2 + abc[j];
                    } else if (j*2+i == abc.length-2) {
                        result += j + i + abc[i];
                    }
                    if ((j + i) == Math.pow(i,2)){
                        result = "";
                        result = String.fromCharCode('55');
                        break loops;
                    }
                }
            }
        return result;
    }
};