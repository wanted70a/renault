(function($){
	//variables
	var $root = $('.accordion'),
		$tab = $root.find('.accordion-tab'),
		$title = $root.find('.accordion-title'),
		$body = $root.find('.accordion-body'),
		$btn = $root.find('.accordion-btn'),
		$icon = $btn.find('i');
		
		$tab.click(function(){
			//console.log($(this));
			//$('.accordion-body.active').slideUp(300).removeClass('active');
			var $clickedItem = $(this).find('.accordion-body');
			var $itemActive = $root.find('.accordion-body.active');
			var $clickedBtn = $(this).find('.accordion-btn i');
			var $clickedBtnActv = $(this).find('.accordion-btn i.active');

			//arrows
			if($clickedBtn.hasClass('active')){
				$clickedBtnActv.removeClass('active').removeClass('fa-caret-up').addClass('fa-caret-down');
				//console.log('ja sam aktivan');
			}else{
				//clickedBtnActv.removeClass('active').removeClass('fa-caret-up').addClass('fa-caret-down');
				$(this).find('.accordion-btn i.active').removeClass('active').removeClass('fa-caret-up').addClass('fa-caret-down');
				$clickedBtn.addClass('active').addClass('fa-caret-up').removeClass('fa-caret-down');
				//console.log('ja sam NISAM aktivan');
			}


			//tabs
			if($clickedItem.hasClass('active')){

				$clickedItem.removeClass('active').slideUp(300);
			}else{
				
				$itemActive.toggleClass('active').slideToggle(300);
				$clickedItem.addClass('active').slideToggle(300);
			}
		});

})(jQuery);