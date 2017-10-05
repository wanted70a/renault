(function($){
$(window).on('load', function() {
	//cache dom
	var $startQuizBtn = $('#start-quiz-btn'),
		$quizIntro = $('.quiz-intro'),
		$quizQuestions = $('.quiz-questions'),
		$question = $('.question'),
		$overlay = $question.find('.mo-question-overlay'),
		$endQuiz = $question.find('.end-quiz'),
		$quizResults = $('.quiz-results'),
		$confirmDesktopBtn = $('.confirm-btn');


	//start quiz function - click on intro page button
	$startQuizBtn.click(function(){
			$quizIntro.fadeOut(300, function(){
				$quizQuestions.fadeIn(300);
			})
	});

	//CLICK ON QUESTION
	$question.click(function(){
		var $clicked = $(this);
		
		if($clicked.hasClass('active')){
			$clicked.removeClass('active');
		}else{
			$.each($question, function(indx, val){
				var $el = $(this);
				$el.removeClass('active');
			});

			$clicked.addClass('active');	
		}
	});

	//endQuiz
	$endQuiz.click(function(){
		//console.log('end');
		$quizQuestions.fadeOut(300,function(){
			$quizResults.fadeIn(300);

			//INITIALIZE SLICK SLIDER
			var $root = $('.most-read-articles-quiz'),
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
	});

	$confirmDesktopBtn.click(function(){
		console.log('end');
		$quizQuestions.fadeOut(300,function(){
			$quizResults.fadeIn(300);

			//INITIALIZE SLICK SLIDER
			var $root = $('.most-read-articles-quiz'),
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
	});
	
});
})(jQuery);