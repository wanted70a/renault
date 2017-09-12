$( document ).ready(function() {
 //cache dom
    var $body = $('body'),
    	$burger = $body.find('.nav--mob__burger'),
        $searchIcon = $body.find('.fa-search'),
        $closeIcon = $body.find('.search-box__close'),
        $searchBox = $body.find('.search-box');
  


    //functions

    $searchIcon.click(function(){
    	//disable scroll for body and html
    	$body.toggleClass('no-scroll');//ne radi treba da se resi
    	$('html').toggleClass('no-scroll'); //ne radi treba da se resi
    	
    	$searchBox.fadeIn(300);
    });


    //close search on X click
    $closeIcon.click(function(){
    	$searchBox.fadeOut(300);
    	$body.toggleClass('no-scroll');//ne radi treba da se resi
    	$('html').toggleClass('no-scroll'); //ne radi treba da se resi
    });
});