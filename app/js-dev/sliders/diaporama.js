(function($){

$(window).on('load', function() {
	//caching elements
	var $root = $('.diaporama'),
		$carousel = $root.find('.diaporama-slider'),
		$slides = $carousel.find('.slide'),
		$navSlider = $root.find('.diaporama-nav-slider'),
		$navSlide = $root.find('.diaporama-nav-slide'),	
		$nextArrow = $root.find('.diaporama-next'),
		$prevArrow = $root.find('.diaporama-prev'),
		$nextArrowNav = $root.find('.diaporama-nav-next'),
		$prevArrowNav = $root.find('.diaporama-nav-prev'),
		$current = $root.find('.current'),
		$total = $root.find('.total'),
		$windowWidth = $(window).outerWidth();

	if($windowWidth > 768){
		$carousel.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			//nextArrow:$nextArrow,
			//prevArrow:$prevArrow,
			asNavFor: $navSlider,
			fade:true,
			arrows: false,
		});

		$navSlider.slick({
			 slidesToShow: 5,
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
			nextArrow:$nextArrow,
			prevArrow:$prevArrow,
			//fade:true,
			
		});
	}
	

});

})(jQuery);