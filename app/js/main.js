// Для старых браузеров подключаем jquery.placeholder
if (!Modernizr.input.placeholder){
	$('input, textarea').placeholder();
}

$(document).ready(function() {

	//Sizzle('div');

	/* --------- to top --------- */

	$('.scroll-up-btn').on('click', function(e){
		e.preventDefault();

		$('body, html').animate({scrollTop: 0}, 300);
	})

});