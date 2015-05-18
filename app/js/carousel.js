var carousel = (function() {

	var _moveSlide = function() {

	};

	return {
		init: function() {

			$('.carousel__btn_prev').on('click', function(e) {
				e.preventDefault(e)
			});

			$('.carousel__btn_next').on('click', function(e) {
				e.preventDefault(e)
			});

		}
	}

});

$(document.ready(function() {

	if($('.carousel__list').length) {
		carousel.init();
	}

})); // END .ready
