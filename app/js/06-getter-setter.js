//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	$('button:first-child').click(function(){
		$('#action').text('Ceci est le texte ajouté avec text()');
	});

	$('button:nth-child(2)').click(function(){
		$('#action').html('<p>Ceci est le code <b>html ajouté avec html()</b></p>');
	});

	$('button:nth-child(3)').click(function(){
		$('#name').val('Chardon');
	});

	$('button:nth-child(4)').click(function(){
		let text = $('#action').text();
		console.log(text);
	});

	$('button:nth-child(5)').click(function(){
		let html = $('#action').html();
		console.log(html);
	});

	$('button:nth-child(6)').click(function(){
		let val = $('#name').val();
		console.log(val);
	});

});

