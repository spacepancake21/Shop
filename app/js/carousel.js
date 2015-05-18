var carousel = (function() {

		var _moveSlide = function($this, direction, callback) {

		var container = $this.closest('.carousel'),
				list = container.find('.carousel__list'),
				activeSlide = list.find('.carousel__item_active'),

				activeSlideSibling = (direction == 'next') ? activeSlide.next() : activeSlide.prev(),
				reqPosition = (activeSlideSibling.length) ? activeSlideSibling.position().left : '',
				edgesElements = (direction == 'next') ? activeSlide.nextAll().eq(2) : activeSlide.prev(),
				underEdgesElements = (direction == 'next') ? edgesElements.next() : edgesElements.prev();

		if(edgesElements.length) {

			list.animate({left: -reqPosition}, 300, function() {
				activeSlide.removeClass('carousel__item_active');
				activeSlideSibling.addClass('carousel__item_active');

				if (!underEdgesElements.length) {
					callback.call($this);
				}

			});
		}
	};

	return {
		init: function() {

			$('.carousel__btn').on('click', function(e) {
				e.preventDefault();

				var	$this = $(this),
						direction = ($this.hasClass('carousel__btn_next')) ? 'next' : 'prev';

				_moveSlide($(this), direction, function(){
					var
							oppositeDirection = (direction == 'next') ? 'prev' : 'next';

					$('.carousel__btn_' + direction).hide();
					$('.carousel__btn_' + oppositeDirection).show();
				});

				$this.siblings().show();
			});

		}
	}

}());

var slideShow = (function() {

	var
			_changePic = function($this){

				var
						path = $this.data('fullimg'),
						container = $this.closest('.carousel'),
						display = container.find('.carousel__full-img');

				display.fadeOut(300, function(){

					var
							$this = $(this);

					$this.attr('src', path);

					$this.on('load', function(){
						$this.fadeIn(300);
					});
				});
			};

	return {
		init: function(){
			$('.carousel__img').on('click', function(e){
				e.preventDefault();

				_changePic($(this));
			});
		}
	}

}());

$(document).ready(function() {

	if($('.carousel__list').length) {
		carousel.init()
	}

	if ($('.carousel').length) {
		slideShow.init();
	}

}); // END .ready
