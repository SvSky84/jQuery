//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	
	$('button:first-child').click(function(){
		$('.bleu').animate({'left':500}, 1000);
	});

	$('button:nth-child(2)').click(function(){
		setTimeout(function(){$('.bleu').animate({'left':500}, Math.random() * 1000);}, Math.random() * 3000);
		setTimeout(function(){$('.rouge').animate({'left':500}, Math.random() * 1000);}, Math.random() * 3000);
		setTimeout(function(){$('.vert').animate({'left':500}, Math.random() * 1000);}, Math.random() * 3000);
		setTimeout(function(){$('.violet').animate({'left':500}, Math.random() * 1000);}, Math.random() * 3000);

		setTimeout(function(){
			$('.bleu').delay(Math.random() * 3000).animate({'left':0}, Math.random() * 1000);
			$('.rouge').delay(Math.random() * 3000).animate({'left':0}, Math.random() * 1000);
			$('.vert').delay(Math.random() * 3000).animate({'left':0}, Math.random() * 1000);
			$('.violet').delay(Math.random() * 3000).animate({'left':0}, Math.random() * 1000);
		}, 4000);
		
	});

	$('button:nth-child(3)').click(function(){
		$('.bleu').animate({
			'left': 500,
			'opacity': 0.5,
			'height': 250,
			'width': 250
		}, 3000);
	});

	$('button:nth-child(4)').click(function(){
		$('.bleu').animate({
			'left': '+=100px',
			'opacity': 0.5,
			'height': '+=250px',
			'width': '-=50px'
		}, 3000);
	});

	$('button:nth-child(5)').click(function(){
		$('.bleu').animate({
			'height': 'toggle'
		}, 3000);
	});

	$('button:nth-child(6)').click(function(){
		let elem = $('.bleu');
		for(i=0; i<3; i++){
			elem.animate({'left':500}, 1000)
			.slideUp(1000)
			.slideDown(1000)
			.animate({'left':0}, 1000);
		}
	});

	$('button:nth-child(7)').click(function(){
		let tab_color = ['.bleu', '.rouge', '.vert', '.violet'];

		tab_color.forEach(function(color) {
			let class_color = $(color);

			for(i=0; i<5; i++){
				class_color.animate({'left':Math.random() * 1000, 'top':Math.random() * 1000}, Math.random() * 1000)
							.delay(Math.random() * 500)
							.animate({'left':Math.random() * 1000, 'top':Math.random() * 1000}, Math.random() * 1000)
							.delay(Math.random() * 500);
			}
			class_color.animate({'left':0, 'top':0}, Math.random() * 1000);
		});
	});

});

