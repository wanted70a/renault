(function($){
	
	var $btn = $('.btn--diaporama'),
		$close =$('.close-diaporama'),
		$slideShow = $('.diaporama-overlay');


	$btn.click(function(){
		$slideShow.animate({height:'100vh'},350);

	});

	$close.click(function(){
		$slideShow.animate({height:'0vh'},350);

	});

})(jQuery);
