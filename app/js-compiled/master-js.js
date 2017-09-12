var slider = '1.Homepage';

function x (y){
	return y +10;
}

var person = {
	name:'Bojana',
	age:34
};

$( document ).ready(function() {
    //cache dom
    var $body = $('body'),
    	$search = $body.find('.nav--mob__search'),
    	$dropDownLink = $body.find('#myVan'),
    	$dropMenu = $body.find('.my-van--drop');

    	//alert('radi');

    //FUNCTIONS
    //slide menu on hover
    $dropDownLink.hover(function(){
    	$dropMenu.slideDown(300);
    	$dropDownLink.css({"color":"#fff", "border-bottom":".3rem solid #fff"});
    });

    $dropMenu.hover(function() {
        $dropMenu.css('display','block');
    },
    function() {
        $dropMenu.slideUp(300);
    });
});
$( document ).ready(function() {
    //cache dom
    var $body = $('body'),
        $mainWrapper = $body.find('.wrapper.wrapper--main'),
        $tint = $body.find('.tint'),
        $navMobMenu = $body.find('.nav--mob__menu'),
    	$dropDownLink = $body.find('#myBusiness'),
    	$dropMenu = $body.find('.nav--mob__subMenu'),
        $burger = $body.find('.nav--mob__burger'),
        $search = $body.find('.nav--mob__search');

    //functions

    //burger toggle menu to slide L to R
    $burger.click(function(){
        $burger.find('i').toggleClass('fa-bars').toggleClass('fa-times');
        $navMobMenu.animate({width:'toggle'},250);
         //sliding main wrapper to right 
         
        $mainWrapper.toggleClass('active',600).promise().done(function(){
            //toggle tint
            $tint.toggleClass('active');
        }); 
        
    });

   


    //togle sbmenu
    $dropDownLink.click(function(){
        //change color on active dropDown
        //$dropDownLink.find('a.nav--mob__link').toggleClass('active') 
        $dropDownLink.find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $dropMenu.slideToggle(300);
    });    

      
});
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
var page ='index';
var pages = ['404','articles'];