$(function(){

	function changeIcon(elem,icon1,icon2) {
		$(elem).siblings(".validation")
				.addClass(icon1)
				.removeClass(icon2)
				.css({display: "block"});
	}


	$('.formulaire .validation').css({display:'none'});

	$('.formulaire [name]').each(function(){
		$(this).val($(this).attr("data-default"));
	});

	$('.formulaire [name]').focus(function(){
		if ($(this).val() == $(this).attr('data-default')){
			$(this).val("");
		}
	});

	$('.formulaire [name]').blur(function(){
		if ($(this).val() == ""){
			$(this).val($(this).attr('data-default'));
			if ($(this).is('[required]')){
				changeIcon($(this), "icon-close", "icon-check");
			}
		}else{
			if ($(this).is('[required]')){
				changeIcon($(this), "icon-check", "icon-close");
			}
		}
	});

	$('.formulaire').submit(function(){
		var valid = true;

		$('.formulaire [required]').each(function(){
			if ($(this)/val() == $(this).attr('data-default')){
				valid = false;
				changeIcon($(this), "icon-close", "icon-check");
			}
			return valid;
		});
	});



});