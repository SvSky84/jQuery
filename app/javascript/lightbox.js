$(function(){
	var index;
	var nbImg;

	nbImg = $('.galerie img').length;
	
	function generatePuces(){
		puces = '<div class="puces">';

		for(let i = 1 ; i <= nbImg ; i++){
			puces += '<i class="icon-circle-o"></i>';
		}

		puces += "</div>";

		$('.lightbox .cadre img').after(puces);
	}

	function changePuce(){
		$('.lightbox .puces i').removeClass('icon-circle');
		$('.lightbox .puces i').eq(index).addClass('icon-circle');
	}

	function changeImg(){
		let newSrc = $('.galerie img').eq(index).attr('src');
		$('.lightbox img').attr('src', newSrc);
	}

	function change(){
		changeImg();
		changePuce();
	}

	$('.galerie img').click(function(){
		let src = $(this).attr('src');
		$('.lightbox img').attr('src', src);
		$('.lightbox').fadeIn(1000);
		index = $('.galerie img').index($(this));
		changePuce();
	});

	$('.lightbox .icon-close').click(function(){
		$('.lightbox').fadeOut(1000);
	});

	$('.lightbox .icon-chevron-left').click(function(){
		index = (index - 1 + nbImg)%nbImg;
		change();
	});

	$('.lightbox .icon-chevron-right').click(function(){
		index = (index + 1)%nbImg;
		change();
	});

	generatePuces();

	$(document).on('click', '.lightbox i', function(){
		index = $(document).find('.lightbox i').index($(this));
		change();
	});

});