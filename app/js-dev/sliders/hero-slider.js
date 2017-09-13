(function($){

$(window).on('load', function() {
	//caching elements
	var $heroSlider = $('.hero-slider'),
		$carousel = $heroSlider.find('.hero-slider__slider'),
		$slides = $heroSlider.find('.hero-slider__slide'),
		$heroNext = $heroSlider.find('.hero-slider__next'),
		$heroPrev = $heroSlider.find('.hero-slider__prev'),
		$current = $heroSlider.find('.current'),
		$total = $heroSlider.find('.total');

	$total.text('0'+$slides.length);//total number of slides into html as txt

	$carousel.slick({
		nextArrow:$heroNext,
		prevArrow:$heroPrev,
		//autoplay: true,
  		//autoplaySpeed: 3000,
	});

	
	$carousel.on('afterChange', function(event, slick, currentSlide){
			
			$current.text('0'+(currentSlide+1));
	});
	
});

})(jQuery);
