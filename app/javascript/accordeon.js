$(function(){
	$('.accordeon h1').click(function(){
		if (!$(this).hasClass('active')){
			$('.accordeon h1').removeClass('active');
			$(this).addClass('active');
			$('.accordeon p').slideUp();
			$(this).next().slideDown();
			$('.accordeon h1 span').attr('class', 'icon-chevron-right');
			//$('.accordeon h1 span').find('span').addClass('icon-chevron-right').removeClass('icon-chevron-down');
			//$(this).find('span').toggleClass('icon-chevron-right icon-chevron-down');
			$(this).find('span').attr('class', 'icon-chevron-down');
		}
	});
});