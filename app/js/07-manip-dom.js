//jQuery(document.ready(function(){ /*code*/ }));
//$(document.ready(function(){ /*code*/ }));
//$(function(){ /*code*/ });

$(function(){ 

	$('button:first-child').click(function(){
		$('ul').before('<p>Balise ajouté avec before()</p>');
	});

	$('button:nth-child(2)').click(function(){
		$('ul').after('<p>Balise ajouté avec after()</p>');
	});

	$('button:nth-child(3)').click(function(){
		var text = $('li:first-child').text();
		var tab_text = text.split(" ");
		var item_number = tab_text[tab_text.length - 1];

		if (parseInt(item_number) != 1){
			$('ul').prepend('<li>item ' + (parseInt(item_number)-1) + '</li>');
		}else{
			alert('Item plus du tout');
		}
		
	});

	$('button:nth-child(4)').click(function(){
		var text = $('li:last-child').text();
		var tab_text = text.split(" ");

		var item_number = tab_text[tab_text.length - 1];

		if (parseInt(item_number) != 10){
			$('ul').append('<li>item ' + (parseInt(item_number)+1) + '</li>');
		}else{
			alert('Item trop');
		}
	});

});

