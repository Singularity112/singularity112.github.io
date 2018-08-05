jQuery(function($){

	menuAnimation('#animated-menu');

	$('.menu a').mouseover(function(){
		menuAnimation(this);
		$('#menu-border').addClass('hovered');
	});

	$('.menu a').mouseout(function(){
		menuAnimation('#animated-menu');
		$('#menu-border').removeClass('hovered');
	});

	$('#slider-pagination div').click(function(){
		$('#slider-pagination div').removeClass('active');
		$(this).addClass('active');
	});

	var svg0 = $('#svg0'),
		svg1 = $('#svg1'),
		svg2 = $('#svg2'),
		svg3 = $('#svg3');


	setTimeout(function(){
		$('#bubble1').html(svg0);
		$('#bubble1').addClass('bubble1');
		setTimeout(e=>{
			$('#bubble1').html(svg2);
			$('#bubble1').addClass('bubble2');
			$('#device').css({'transform' :'translate(-37%, 0)' , 'opacity' : '1'});
			$('.fadeIn').addClass('animated');
			$('.content-title').addClass('animated');
			setTimeout(e=>{
				$('.content-container').addClass('animated');
			},900);
			setTimeout(e=>{
				$('#bubble1').html(svg3);
				$('#bubble1').addClass('bubble3');
				setTimeout(e=>{
					$('#bubble1').addClass('bubble4');
					$('#device').css({'transform': 'translate(0,0)', 'transition-delay' : '0s', 'transition-duration': '0.3s'}).addClass('linear');
				},700);
			},300);
		}, 700);
	}, 1000);


});

function menuAnimation(elem){
	let width = $(elem).outerWidth(),
		height = $(elem).outerHeight(),
		pos = $(elem).position(),
		left = pos.left,
		top = pos.top;

	$('#menu-border').css({
		'width': width+'px',
		'height': height+'px',
		'left' : left+'px',
		'top' : top+'px'
	});
}