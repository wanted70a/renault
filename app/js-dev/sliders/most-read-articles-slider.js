(function($){

$(window).on('load', function() {
	//caching elements
	var $root = $('.most-read-articles'),
		$carousel = $root.find('.most-read-articles__slider'),
		$nextArrow = $root.find('.most-read-articles__slider__next'),
		$prevArrow = $root.find('.most-read-articles__slider__prev'),
		$windowWidth = $(window).outerWidth();

		
		if($windowWidth > 767){
			$carousel.slick({
				slidesToShow: 4,
	  			slidesToScroll: 1,
	  			nextArrow:$nextArrow,
				prevArrow:$prevArrow,
			});
		}
});

})(jQuery);
