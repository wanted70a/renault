(function($){

$(window).on('load', function() {
	//caching elements
	var $root = $('.foire-aux-questions'),
		$carousel = $root.find('.foire-aux-questions-slider'),
		$slides = $carousel.find('.slide'),
		$nextArrow = $root.find('.slider__next'),
		$prevArrow = $root.find('.slider__prev'),
		$current = $root.find('.current'),
		$total = $root.find('.total');

	$total.text('0'+$slides.length);//total number of slides into html as txt

	$carousel.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow:$nextArrow,
		prevArrow:$prevArrow,
	});

	$carousel.on('afterChange', function(event, slick, currentSlide){
		
		$current.text('0'+(currentSlide+1));
	});
		
});

})(jQuery);