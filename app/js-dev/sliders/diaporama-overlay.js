(function($){

$(window).on('load', function() {
	//caching elements
	var $root = $('.diaporama-overlay'),
		$carousel = $root.find('.carousel'),
		$slides = $carousel.find('.slide'),
		$navSlider = $root.find('.carousel-nav').find('.slider'),
		$navSlide = $navSlider.find('.slide'),	
		$nextArrow = $root.find('.slider-container').find('.carousel-next'),
		$prevArrow = $root.find('.slider-container').find('.carousel-prev'),
		$nextArrowNav = $root.find('.carousel-nav').find('.carousel-nav-next'),
		$prevArrowNav = $root.find('.carousel-nav').find('.carousel-nav-prev'),
		$current = $root.find('.current'),
		$total = $root.find('.total'),
		$btn = $('.btn--diaporama'),
		$slideShow = $('.diaporama-overlay');
		$windowWidth = $(window).outerWidth();

	//$nextArrow.hide(800);
	//$prevArrow.hide(800);

	$total.text($slides.length);//total number of slides into html as txt	

	if($windowWidth > 768){
		$carousel.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			//nextArrow:$nextArrow,
			//prevArrow:$prevArrow,
			//asNavFor: $navSlider,
			fade:true,
			arrows: false,
		});

		$navSlider.slick({
			 slidesToShow: 6,
			 slidesToScroll: 1,
			 asNavFor: $carousel,
			 focusOnSelect: true,
			 nextArrow:$nextArrowNav,
			 prevArrow:$prevArrowNav,
			 // arrows:false,
			 //fade:true,

		});

		$nextArrowNav.click(function(){
			$navSlider.slick('slickNext');
			$carousel.slick('slickNext');
		});

		$prevArrowNav.click(function(){
			$navSlider.slick('slickPrev');
			$carousel.slick('slickPrev');
		});

	}
	else{
		$carousel.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			//arrows:false,
			nextArrow:$nextArrow,
			prevArrow:$prevArrow,
			//fade:true,
			
		});
		
	}

	$carousel.on('afterChange', function(event, slick, currentSlide){
			
			$current.text(currentSlide+1);
	});
	

});

})(jQuery);