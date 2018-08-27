"use strict";

$(document).ready(e=>{
    let field = 3;
    let fieldElem = $('#field');
    let counter = $('#fieldCounter');
    let matrix = [];
    let currentX;
    let currentY;
    let testMatrix = [];
    let movesField = $('#moves');

    let randomInteger = (min, max) => {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	}

    let SelectMove = () =>{
    	let moves = [];

    	 currentX - 1 > -1 ? moves.push('left') : '';
    	 currentX + 1 < field ? moves.push('right') : '';
    	 currentY - 1 > -1 ? moves.push('up') : '';
    	 currentY + 1 < field ? moves.push('down') : '';

    	 return moves;
    }

     let StartGame = () =>{
    	$(fieldElem).html('');

    	for(var i=0; i<field; i++) {
		    matrix[i] = [];
		    for(var j=0; j<field; j++) {
		        matrix[i][j] = 0;
		    }
		}

		let markedY = randomInteger(0,field-1);
		let markedX = randomInteger(0,field-1);

		matrix[markedY][markedX] = 1;
		currentY = markedY;
		currentX = markedX;

		console.log(matrix);

		let indexOf = markedY*field + markedX + 1;

		let moveEnqueue = [];
		$(movesField).html('');
		for(let i = 0; i < 10; i++){
			let moves = SelectMove();
			let move = moves[randomInteger(0,moves.length-1)];

			switch(move){
				case 'up':
					currentY--;
					break;
				case 'down':
					currentY++;
					break;
				case 'left':
					currentX--;
					break;
				case 'right':
					currentX++;
					break;
			}

			moveEnqueue.push(move);
			$(movesField).append(`<div class = "move" style = "animation-delay: 0.${i}s "> ${move} </div>`);
		}

		
		let indexOfLast = currentY*field + currentX +1;


		for(let i = 0; i < field*field; i++){
			
			if ( (indexOfLast-1 == indexOf-1) && ( indexOf-1 == i)){
				$(fieldElem).append('<div class = "cell active finished"></div>');
			} else if (i == indexOf-1){
				$(fieldElem).append('<div class = "cell active"></div>');
			} else if (i == indexOfLast-1){
				$(fieldElem).append('<div class = "cell finished"></div>');
			} else {
				$(fieldElem).append('<div class = "cell"></div>');
			}
    	}


    	$(fieldElem).css({'grid-template-columns' : `repeat( ${field} , 80px)`});
    }


    StartGame();

    $( counter ).change(function() {
        let max = 9;
        let min = 3;

        if ($(this).val() > max){
              $(this).val(max);
        } else if ($(this).val() < min){
              $(this).val(min);
        }       
    });

    $(fieldElem).on('click', '.cell', function(){
    	if ($(this).hasClass('finished')){
    		alert('ПОБЕДА');
    		StartGame();
    	} else {
    		alert('ПОПРОБУЙ ЕЩЕ РАЗ');
    		StartGame();
    	}
    });

    $('#button').click(e=>{
    	field = $(counter).val();
    	StartGame();
    });


});
