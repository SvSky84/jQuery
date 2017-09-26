//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	/*$('li').click(function(){
		alert($(this).html());
	});*/

	$('li').click(function(event){
		event.stopPropagation();
		alert($(this).html());
	});

});

