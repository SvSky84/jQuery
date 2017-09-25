//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	
	$('button:first-child').click(function(){
		$('#action').text('Je kiffe le jQuery');
	});

	$('button:nth-child(2)').dblclick(function(){
		$('#action').text('<b>GG, ton index te démangeait!!</b>');
	});

	$('button:nth-child(3)').mouseenter(function(){
		$('#action').html('<b>Ceci est le enter</b>');
	});

	$('button:nth-child(4)').mouseleave(function(){
		$('#action').html('<b>Ceci est le leave</b>');
	});

	$('button:nth-child(5)').mousedown(function(){
		$('#action').html('<b>Ceci est le down</b>');
	});

	$('button:nth-child(6)').mouseup(function(){
		$('#action').html('<b>Ceci est le up</b>');
	});

	$('button:nth-child(7)').hover(function(){
		$('#action').html('<b>Ceci est le hover, equivelent du mouseenter</b>');
	}, function(){
		$('#action').html('<b>Ceci est le hover, equivelent du mouseleave</b>');
	});

	$('[type="text"]').focus(function(){
		$(this).css({'background':'#ccc', 'border':'1px solid red'});
	});

	$('[type="text"]').blur(function(){
		$(this).css({'background':'#fff', 'border':'1px solid #ccc'});
	});

});

