$(function(){

	var interval;
	let acceptDefil;
	let valeurAttr;
	let largeurSlider;

	acceptDefil = true;
	interval = setInterval(defileLeft, 3000);

	largeurSlider = $('.slider').width();
	$('.slider li').width(largeurSlider);

	$(window).resize(function(){
		largeurSlider = $('.slider').width();
		$('.slider li').width(largeurSlider);
	});

	function defileLeft(){
		$('.slider ul').animate({'left':-largeurSlider}, 1000, function(){
			$('.slider li:last').after($('.slider li:first'));
			$(this).css({'left':0});
			acceptDefil = true;
			changeText();
		});
	}

	function defileRight(){
		$('.slider ul').css({'left':-largeurSlider});
		$('.slider li:first').before($('.slider li:last'));
		$('.slider ul').animate({'left':0}, 1000, function(){
			acceptDefil = true;
			changeText();
		});
	}

	function changeText(){
		valeurAttr = $('.slider li:first img').attr('alt');
		$('.slider h1').text(valeurAttr);
	}

	$('.slider .icon-chevron-left').click(function(){
		if (acceptDefil){
			acceptDefil = false;
			defileRight();
		}
	});

	$('.slider .icon-chevron-right').click(function(){
		if (acceptDefil){
			acceptDefil = false;
			defileLeft();
		}
	});

	$('.slider span').mouseleave(function(){
		interval = setInterval(defileLeft, 3000);
	});

	$('.slider span').mouseenter(function(){
		clearInterval(interval);
	});

});