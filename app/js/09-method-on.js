//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	$('ul').one('click', function(){
		$(this).append('<li>last added item</li>');
	});

	/*$('li:nth-child(4)').click(function(){
		alert('4eme enfant');
	});*/

	$(document).on('click', 'li:nth-child(4)', function(){
		alert('4eme enfant');
	});

});

