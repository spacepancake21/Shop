$(document).ready () ->
	if $('.carousel__list').length
		Carousel.init()

	if $('.carousel').length
		slideShow.init()

Carousel = do ->

	_moveSlide = ($this, direction, callback) ->

		container = $this.closest('.carousel')
		list = container.find('.carousel__list')
		activeSlide = list.find('.carousel__item_active')

		activeSlideSibling =
			if direction == 'next'
				activeSlide.next()
			else
				activeSlide.prev()

		reqPosition =
			if activeSlideSibling.length
				activeSlideSibling.position().left
			else ''

		edgesElements =
			if direction == 'next'
				activeSlide.nextAll().eq(2)
			else activeSlide.prev()

		underEdgesElements =
			if direction == 'next'
				edgesElements.next()
			else edgesElements.prev()

		if edgesElements.length
			list.animate
				'left': -reqPosition
				300
				->
					activeSlide.removeClass('carousel__item_active')
					activeSlideSibling.addClass('carousel__item_active')

					if !underEdgesElements.length
						callback.call($this)

	init : () ->

		$('.carousel__btn').on 'click', (e) ->
			e.preventDefault();

			$this = $(this)
			direction =
			if $this.hasClass 'carousel__btn_next'
				'next'
			else 'prev'

			_moveSlide $(this), direction, () ->
				oppositeDirection =
					if direction == 'next'
						'prev'
					else 'next'

				$('.carousel__btn_' + direction).hide();
				$('.carousel__btn_' + oppositeDirection).show();

			$this.siblings().show();

slideShow = do ->

	_changePic = ($this) ->
		path = $this.data('fullimg')
		container = $this.closest('.carousel')
		display = container.find('.carousel__full-img')

		display.fadeOut 300, ->

			$this = $(this)

			$this.attr 'src' , path

			$this.on 'load', ->
				$this.fadeIn 300
	init : () ->
		$('.carousel__img').on 'click', (e) ->
			e.preventDefault()
			_changePic($(this))